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
// Mêmes routes et même viewport que le test « accessibilité des pages intérieures »
// (tests/e2e/site.spec.ts), qui ne fixe pas de viewport : 1280×720 par défaut.
const INTERIOR = ['/qui-sommes-nous', '/programmes', '/projets', '/transparence', '/partenariats',
  '/impact', '/actualites', '/mentions-legales', '/confidentialite', '/accessibilite',
  '/plan-du-site', '/contact'];

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
    const over = () => document.documentElement.scrollWidth > limit;

    // La liste brute des boîtes hors cadre est trompeuse : elle inclut les
    // éléments déjà rognés par un ancêtre en overflow:hidden. On descend donc
    // dans l'arbre en masquant un enfant à la fois, jusqu'à l'unique
    // responsable. Les pseudo-éléments (::before/::after) ne sont pas dans le
    // DOM : la descente s'arrête sur leur parent, dont on relève les styles.
    const label = el => el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') +
      (typeof el.className === 'string' && el.className.trim()
        ? '.' + el.className.trim().split(/\s+/).join('.') : '');
    const path = [];
    let node = document.body;
    if (over()) {
      descente: while (node) {
        for (const child of node.children) {
          const before = child.style.display;
          child.style.display = 'none';
          const responsable = !over();
          child.style.display = before;
          if (responsable) { path.push(label(child)); node = child; continue descente; }
        }
        break;
      }
    }
    const cible = path.length ? node : null;
    const pseudo = cible ? ['::before', '::after'].map(p => {
      const cs = getComputedStyle(cible, p);
      return cs.content === 'none' ? null : `${p} ${cs.width}×${cs.height} pos=${cs.position}`;
    }).filter(Boolean) : [];

    return {
      limit,
      scrollWidth: document.documentElement.scrollWidth,
      chemin: path,
      pseudo,
      rognage: cible ? getComputedStyle(cible).overflow : null,
      boite: cible ? (r => ({ left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) }))(cible.getBoundingClientRect()) : null,
    };
  });
  const label = `Débordement horizontal ${width}px`;
  if (overflow.scrollWidth > overflow.limit) {
    fail(label, `scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.limit} · ` +
      `responsable : ${overflow.chemin.join(' > ') || 'aucun enfant unique (pseudo-élément ?)'} · ` +
      `boîte ${JSON.stringify(overflow.boite)} · overflow ${overflow.rogne} · ` +
      `pseudo ${overflow.pseudo.join(', ') || 'aucun'}`);
  } else {
    note(label, `scrollWidth ${overflow.scrollWidth} ≤ clientWidth ${overflow.limit} — aucun débordement.`);
  }
  await page.close();
}

// 2. axe-core, dans les conditions exactes du test : une seule page réutilisée,
//    navigation séquentielle, mouvement réduit. Chaque route est isolée dans un
//    try/catch : sans cela une exception avorte le script et `|| true` la masque.
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const route of INTERIOR) {
    try {
      await page.goto(baseURL + route, { waitUntil: 'load' });
      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      if (violations.length === 0) { note(`axe sur ${route}`, 'aucune violation.'); continue; }
      for (const v of violations) {
        for (const n of v.nodes.slice(0, 3)) {
          fail(`axe ${v.id} sur ${route}`,
            `impact=${v.impact} · cible=${JSON.stringify(n.target)} · ` +
            `html=${(n.html ?? '').slice(0, 220)} · données=${JSON.stringify(n.any?.[0]?.data ?? n.all?.[0]?.data ?? {})}`);
        }
      }
    } catch (error) {
      fail(`Diagnostic axe interrompu sur ${route}`, String(error?.message ?? error).slice(0, 500));
    }
  }
  await page.close();
}

await browser.close();
