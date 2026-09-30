/**
 * Diagnostic de secours : nomme les éléments qui font déborder la page et les
 * nœuds exacts signalés par axe-core. À lancer quand un parcours navigateur
 * échoue sans que le message ne désigne l'élément en cause.
 *
 * Usage : node scripts/diagnose-e2e.mjs [baseURL]
 * Sortie : annotations GitHub Actions (::error:: / ::notice::).
 */
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const baseURL = process.argv[2] ?? 'http://localhost:3000';
const INTERIOR = ['/qui-sommes-nous', '/programmes', '/projets', '/transparence', '/partenariats'];

const browser = await chromium.launch();
const note = (title, message) =>
  console.log(`::notice title=${title.replace(/,/g, ';')}::${message.replace(/\r?\n/g, ' ⏎ ').replace(/%/g, '%25').slice(0, 8000)}`);
const fail = (title, message) =>
  console.log(`::error title=${title.replace(/,/g, ';')}::${message.replace(/\r?\n/g, ' ⏎ ').replace(/%/g, '%25').slice(0, 8000)}`);

// 1. Débordement horizontal, élément par élément, aux largeurs testées.
for (const width of [320, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(baseURL + '/', { waitUntil: 'load' });
  const overflow = await page.evaluate(() => {
    const limit = document.documentElement.clientWidth;
    const out = [];
    for (const el of document.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.right > limit + 0.5 || r.left < -0.5) {
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        out.push({
          tag: el.tagName.toLowerCase(),
          id: el.id ? '#' + el.id : '',
          cls: (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''),
          left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width),
          pos: cs.position,
        });
      }
    }
    return { limit, scrollWidth: document.documentElement.scrollWidth, out };
  });
  const label = `Débordement horizontal ${width}px`;
  if (overflow.scrollWidth > overflow.limit) {
    fail(label, `scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.limit} ; ` +
      `${overflow.out.length} élément(s) hors cadre : ` +
      overflow.out.slice(0, 12).map(e => `${e.tag}${e.id}${e.cls} [${e.left}→${e.right}] (${e.width}px, ${e.pos})`).join(' | '));
  } else {
    note(label, `scrollWidth ${overflow.scrollWidth} ≤ clientWidth ${overflow.limit} — aucun débordement.`);
  }
  await page.close();
}

// 2. axe-core sur les pages intérieures : nœud fautif complet.
for (const route of INTERIOR) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(baseURL + route, { waitUntil: 'load' });
  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  for (const v of violations) {
    for (const n of v.nodes.slice(0, 4)) {
      fail(`axe ${v.id} sur ${route}`,
        `impact=${v.impact} · cible=${JSON.stringify(n.target)} · html=${(n.html ?? '').slice(0, 200)} · ` +
        `données=${JSON.stringify(n.any?.[0]?.data ?? n.all?.[0]?.data ?? {})}`);
    }
  }
  if (violations.length === 0) note(`axe sur ${route}`, 'aucune violation.');
  await page.close();
}

await browser.close();
