import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [320, 390, 768, 1440]) {
  test(`accessibilité accueil et responsive ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('SJCD');
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()).violations).toEqual([]);
    await expect(page.locator('html')).not.toHaveClass(/lenis/);
    await expect(page.locator('.stat__value')).toHaveText(['—', '—', '—', '—']);
  });
}

test('menu mobile : focus enfermé, Échap, ancre et redimensionnement', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const open = page.getByRole('button', { name: 'Ouvrir le menu' });
  await open.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => !!document.activeElement?.closest('dialog'))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(open).toBeFocused();
  await open.click();
  await dialog.getByRole('link', { name: 'Programmes', exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page).toHaveURL(/\/programmes$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Six domaines');
  await open.click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(dialog).not.toBeVisible();
});

test('brouillon local : validation, aucun POST, copie et téléchargement', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  const posts: string[] = [];
  page.on('request', request => { if (request.method() === 'POST') posts.push(request.url()); });
  await page.goto('/contact?objet=soutien');
  await expect(page.locator('#subject')).toHaveValue('soutien');
  await page.getByRole('button', { name: 'Préparer mon brouillon' }).click();
  expect(await page.locator('#name').evaluate(el => (el as HTMLInputElement).validity.valueMissing)).toBe(true);
  await expect(page.locator('.draft-result')).toHaveCount(0);
  await page.getByLabel('Votre nom').fill('Personne de test');
  await page.getByLabel('Votre e-mail').fill('test@example.org');
  await page.getByLabel('Votre message').fill('Un message de test pour découvrir SJCD.');
  await page.getByRole('button', { name: 'Préparer mon brouillon' }).click();
  await expect(page.getByRole('status')).toContainText('Aucun message n’a été envoyé');
  await page.getByRole('button', { name: 'Copier', exact: true }).click();
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain('Personne de test');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Télécharger le texte' }).click();
  expect((await download).suggestedFilename()).toBe('message-sjcd-brouillon.txt');
  expect(posts).toEqual([]);
  await expect(page.evaluate(() => localStorage.length)).resolves.toBe(0);
});

test('accessibilité des pages intérieures, liens, noindex et vraie 404', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const routes = ['/qui-sommes-nous','/programmes','/projets','/transparence','/partenariats','/impact','/actualites','/mentions-legales','/confidentialite','/accessibilite','/plan-du-site','/contact'];
  for (const route of routes) {
    expect((await page.goto(route))?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name=robots]')).toHaveAttribute('content', /noindex/);
    expect((await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
  }
  expect((await page.goto('/page-inexistante'))?.status()).toBe(404);
});

test('lecture sans JavaScript et navigation native', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  expect(await page.locator('.intro__statement .w').first().evaluate(el => getComputedStyle(el).opacity)).toBe('1');
  await expect(page.getByRole('navigation', { name: 'Navigation sans JavaScript' })).toBeVisible();
  await page.getByRole('navigation', { name: 'Navigation sans JavaScript' }).getByRole('link', { name: 'Transparence' }).click();
  await expect(page).toHaveURL(/\/transparence$/);
  await context.close();
});

test('GSAP et Lenis desktop, annulation dynamique du mouvement', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.addInitScript(() => Object.defineProperty(navigator, 'hardwareConcurrency', { value: 8 }));
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/lenis/, { timeout: 15000 });
  await page.getByRole('link', { name: 'Découvrir notre impact' }).click();
  await expect(page.locator('#impact')).toBeFocused();
  await expect.poll(() => page.locator('#impact').evaluate(el => Math.abs(el.getBoundingClientRect().top - 110))).toBeLessThan(12);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('html')).not.toHaveClass(/lenis/);
  expect(errors).toEqual([]);
});

test('nouveau brief : identité, ordre narratif, accès soutien et preuves manquantes', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Sanctuaire de Jeunes');
  await expect(page.getByRole('heading', { name: 'À Uvira, au plus près des communautés.' })).toBeVisible();
  const sections = await page.locator('main > section').evaluateAll(nodes => nodes.map(node => node.id));
  expect(sections.indexOf('impact')).toBeLessThan(sections.indexOf('introduction'));
  expect(sections.indexOf('transparence')).toBeLessThan(sections.indexOf('financement'));
  await expect(page.locator('#financement')).toContainText('aucune opportunité');
  await expect(page.locator('#transparence a[download]')).toHaveCount(0);
  await page.locator('.hero').getByRole('link', { name: 'Soutenir SJCD' }).click();
  await expect(page).toHaveURL(/\/contact\?objet=soutien/);
  await expect(page.locator('#subject')).toHaveValue('soutien');
});
