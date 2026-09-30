import { test, expect, type Page } from '@playwright/test';

async function policy(page: Page, saveData = false, effectiveType = '4g') {
  await page.addInitScript(({ saveData, effectiveType }) => {
    Object.defineProperty(navigator, 'hardwareConcurrency', { value: 8 });
    const connection = Object.assign(new EventTarget(), { saveData, effectiveType });
    Object.defineProperty(navigator, 'connection', { value: connection });
  }, { saveData, effectiveType });
}
async function gotoMotion(page: Page) {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-motion-tier', /universal|enhanced/);
  await page.waitForTimeout(1000);
}
async function scrollTo(page: Page, selector: string) {
  await page.locator(selector).first().evaluate(el => window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 200, behavior: 'instant' }));
  await page.waitForTimeout(900);
}
for (const width of [320,375,390,414,640,720,768,960,1024,1280,1440,1920]) {
  test(`phase2 reflow + reveals + menu ${width}`, async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width, height: 900 }, hasTouch: width <= 960 });
    const page = await context.newPage(); await policy(page);
    const errors: string[] = []; page.on('pageerror', e => errors.push(e.message));
    await gotoMotion(page);
    await expect(page.locator('html')).toHaveAttribute('data-motion-tier', width <= 960 ? 'universal' : 'enhanced');
    const stats = page.locator('.stat').first();
    expect(Number(await stats.evaluate(el => getComputedStyle(el).opacity))).toBe(0);
    await scrollTo(page, '#impact');
    await expect.poll(() => stats.evaluate(el => getComputedStyle(el).opacity)).toBe('1');
    for (const selector of ['#introduction','#domaines','#projets','.stories','#territoire','#partenaires','#transparence','#financement','#actualites','#contact']) {
      await scrollTo(page, selector);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
    }
    if (width < 1280) {
      const y = await page.evaluate(() => scrollY);
      await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
      const before = await page.evaluate(() => ({ y: scrollY, top: document.body.style.top }));
      await page.mouse.move(width/2, 300); await page.mouse.wheel(0,600); await page.waitForTimeout(250);
      expect(await page.evaluate(() => ({ y: scrollY, top: document.body.style.top }))).toEqual(before);
      await page.keyboard.press('Escape'); await expect(page.locator('dialog')).not.toBeVisible();
      expect(Math.abs((await page.evaluate(() => scrollY)) - y)).toBeLessThan(2);
    }
    expect(errors).toEqual([]); await context.close();
  });
}

test('phase2 desktop : rotation, halo, magnetic, parallax et navbar calculés', async ({ page }) => {
  await page.setViewportSize({ width:1440, height:900 }); await policy(page); await gotoMotion(page);
  await expect(page.locator('html')).toHaveClass(/lenis/);
  const button = page.locator('[data-magnetic]').first(); const b = (await button.boundingBox())!;
  await page.mouse.move(b.x+b.width*.8, b.y+b.height*.7); await page.waitForTimeout(250);
  expect(await button.evaluate(el => getComputedStyle(el).translate)).not.toBe('0px');
  expect(await button.evaluate(el => el.style.getPropertyValue('--mx'))).not.toBe('');
  await scrollTo(page, '.bento');
  const tilt = page.locator('.tilt'); const r = (await tilt.boundingBox())!;
  await page.mouse.move(r.x+r.width*.8, r.y+100); await page.waitForTimeout(850);
  const rotated = await tilt.evaluate(el => { const m = new DOMMatrix(getComputedStyle(el).transform); return Math.abs(m.m13)+Math.abs(m.m23); });
  expect(rotated).toBeGreaterThan(.01);
  expect(await tilt.evaluate(el => el.style.getPropertyValue('--mx'))).not.toBe('');
  await page.mouse.move(0,0); await page.waitForTimeout(850);
  expect(await tilt.evaluate(el => { const m = new DOMMatrix(getComputedStyle(el).transform); return Math.abs(m.m13)+Math.abs(m.m23); })).toBeLessThan(.001);
  await scrollTo(page, '.project__media');
  const image = page.locator('[data-parallax]').first(); const before = await image.evaluate(el => getComputedStyle(el).transform);
  await page.mouse.wheel(0,400); await page.waitForTimeout(600);
  expect(await image.evaluate(el => getComputedStyle(el).transform)).not.toBe(before);
  expect(await page.locator('.nav__bar').evaluate(el => getComputedStyle(el).backdropFilter)).toContain('blur');
  await page.screenshot({ path: 'test-results/phase2-desktop.png' });
});

test('phase2 mobile : animation intermédiaire, press tactile, snap et progression', async ({ browser }) => {
  const context = await browser.newContext({ viewport:{width:390,height:844}, hasTouch:true, isMobile:true });
  const page = await context.newPage(); await policy(page); await gotoMotion(page);
  await expect(page.locator('html')).not.toHaveClass(/lenis/);
  await page.locator('.stats').evaluate(el => window.scrollTo(0, el.getBoundingClientRect().top+scrollY-650));
  await page.waitForTimeout(130);
  const opacity = Number(await page.locator('.stat').first().evaluate(el => getComputedStyle(el).opacity));
  expect(opacity).toBeGreaterThan(0); expect(opacity).toBeLessThan(1);
  await scrollTo(page,'.stories');
  await page.getByRole('button',{name:'Histoires suivantes'}).tap(); await page.waitForTimeout(700);
  expect(await page.locator('.stories').evaluate(el => el.scrollLeft)).toBeGreaterThan(300);
  expect(await page.locator('.rail-progress').evaluate(el => el.style.getPropertyValue('--progress'))).not.toBe('0.04');
  await page.screenshot({path:'test-results/phase2-mobile.png'});
  await context.close();
});

for (const mode of ['saveData','3g','reduce']) {
  test(`phase2 protections ${mode}`, async ({ page }) => {
    await page.setViewportSize({width:1440,height:900}); await policy(page,mode==='saveData',mode==='3g'?'3g':'4g');
    if (mode === 'reduce') await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('/'); await page.waitForTimeout(1000);
    await expect(page.locator('html')).not.toHaveClass(/lenis/);
    if (mode !== 'reduce') {
      await expect(page.locator('html')).toHaveAttribute('data-motion-tier','universal');
      expect(await page.locator('.stat').first().evaluate(el=>getComputedStyle(el).opacity)).toBe('0');
      await scrollTo(page,'.stats');
    }
    expect(await page.locator('.stat').first().evaluate(el=>getComputedStyle(el).opacity)).toBe('1');
    await page.emulateMedia({reducedMotion:'reduce'});
    expect(await page.locator('.stories').evaluate(el=>getComputedStyle(el).scrollSnapType)).toBe('none');
    await expect(page.locator('html')).not.toHaveAttribute('data-motion-tier',/./);
  });
}

test('phase2 transition native réellement démarrée', async ({ page }) => {
  await page.addInitScript(() => window.addEventListener('pagereveal', event => {
    const transition = (event as Event & { viewTransition?: { ready: Promise<void> } }).viewTransition;
    if (transition) transition.ready.then(() => sessionStorage.setItem('phase2-transition', JSON.stringify(document.getAnimations().map(a => ({ name: (a as CSSAnimation).animationName, duration: a.effect?.getTiming().duration }))))).catch(() => {});
  }));
  await page.goto('/'); await page.locator('.hero a[href="/contact?objet=soutien"]').click();
  await expect.poll(() => page.evaluate(() => sessionStorage.getItem('phase2-transition'))).toContain('180');
});

test('phase2 vrai geste tactile et état press, sans hover artificiel', async ({ browser }) => {
  const context = await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});
  const page = await context.newPage(); await policy(page); await gotoMotion(page);
  const cdp = await context.newCDPSession(page);
  const btn = page.locator('.hero .btn').first(); const r = (await btn.boundingBox())!;
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:r.x+20,y:r.y+20}]});
  await page.waitForTimeout(250);
  expect(await btn.evaluate(el => new DOMMatrix(getComputedStyle(el).transform).a)).toBeLessThan(1);
  await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});
  await scrollTo(page,'.stories');
  const rail = page.locator('.stories'); const railBox = (await rail.boundingBox())!;
  const y = Math.min(700,railBox.y+100);
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:320,y}]});
  for (const x of [280,230,180,130,70]) { await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y}]}); await page.waitForTimeout(30); }
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]}); await page.waitForTimeout(700);
  expect(await rail.evaluate(el=>el.scrollLeft)).toBeGreaterThan(100);
  await page.getByRole('button',{name:'Ouvrir le menu'}).tap();
  const locked = await page.evaluate(()=>document.body.style.top);
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:200,y:600}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:200,y:250}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  expect(await page.evaluate(()=>document.body.style.top)).toBe(locked);
  await page.getByRole('button',{name:'Fermer le menu'}).tap();
  await expect(page.locator('dialog')).not.toBeVisible(); await context.close();
});

test('phase2 image reveal échantillonné et compteur sur fixture non publiée', async ({ page }) => {
  await page.setViewportSize({width:1440,height:900}); await policy(page);
  await page.emulateMedia({reducedMotion:'reduce'}); await page.goto('/'); await page.waitForTimeout(700);
  // Synthetic DOM fixture only, after hydration; never published as SJCD data.
  await page.locator('.stat__value span').first().evaluate(el => { el.setAttribute('data-count','42'); el.textContent='42'; });
  await page.emulateMedia({reducedMotion:'no-preference'});
  await expect(page.locator('html')).toHaveAttribute('data-motion-tier','enhanced');
  await page.locator('.stats').evaluate(el=>window.scrollTo(0,el.getBoundingClientRect().top+scrollY-650));
  await page.waitForTimeout(150);
  const partial = Number(await page.locator('[data-count]').first().textContent());
  expect(partial).toBeGreaterThan(0); expect(partial).toBeLessThan(42);
  await expect(page.locator('[data-count]').first()).toHaveText('42');
  const image = page.locator('.project__media').first();
  await image.evaluate(el=>window.scrollTo(0,el.getBoundingClientRect().top+scrollY-600)); await page.waitForTimeout(140);
  expect(await image.evaluate(el=>getComputedStyle(el).clipPath)).not.toBe('none');
  await expect.poll(() => image.evaluate(el=>getComputedStyle(el).clipPath)).toBe('none');
});
