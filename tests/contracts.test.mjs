import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const read = path => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const spec = JSON.parse(read('specs/design-tokens.json'));
function luminance(hex) {
  const values = hex.replace('#', '').match(/../g).map(v => parseInt(v, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return values[0] * .2126 + values[1] * .7152 + values[2] * .0722;
}
function contrast(a,b) { const [x,y] = [luminance(a),luminance(b)].sort((x,y)=>y-x); return (x+.05)/(y+.05); }

test('tokens synchronisés avec le CSS', () => { execFileSync(process.execPath, ['scripts/build-tokens.mjs', '--check']); });
test('palette : contrastes texte AA sur les paires utilisées', () => {
  for (const [fg,bg] of [['mist-100','night-900'],['mist-300','night-900'],['ink','paper'],['ink-soft','paper'],['flame-700','paper'],['night-950','flame-500']]) {
    assert.ok(contrast(spec.tokens[fg],spec.tokens[bg]) >= 4.5, `${fg} / ${bg}`);
  }
});
test('contenu provisoire : pas de chiffres affichés ni publication désactivée cliquable', () => {
  const home = read('app/page.tsx');
  assert.match(read('components/ImpactValue.tsx'), /value && period && source/);
  assert.match(home, /<ImpactValue/);
  assert.doesNotMatch(home, /aria-disabled="true"/);
  assert.doesNotMatch(read('lib/content.ts'), /value: '\d/);
});
test('préproduction non indexable et sans envoi de formulaire', () => {
  assert.match(read('app/layout.tsx'), /index: false/);
  assert.match(read('app/robots.ts'), /disallow: '\/'/);
  assert.doesNotMatch(read('components/ContactDraft.tsx'), /fetch\(|localStorage|sessionStorage|action=/);
});
/* ---------------------------------------------------------------------------
 * Contrats institutionnels — les statuts et le règlement intérieur sont la source
 * de vérité. Voir docs/11_Analyse_Statuts_RI.md.
 * ------------------------------------------------------------------------- */

const dataFiles = ['lib/statuts.ts', 'lib/data/programs.ts', 'lib/data/governance.ts',
  'lib/data/documents.ts', 'lib/data/indicators.ts', 'lib/data/partnership.ts',
  'lib/data/news.ts', 'lib/data/values.ts'];

/**
 * Source privée de ses commentaires : les vérifications portent sur le code livré,
 * pas sur la prose qui explique pourquoi une donnée est absente.
 */
const code = path => read(path).replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

test('identité : dénomination officielle conforme aux statuts (S art. 1)', () => {
  assert.match(read('lib/content.ts'), /name: 'Sanctuaire de Jeunes Chandelier pour le Développement'/);
  // « Salon » n'apparaît dans aucun des deux documents administratifs.
  for (const file of ['lib/content.ts', 'lib/pages.ts', 'app/layout.tsx', 'app/page.tsx', 'components/Navbar.tsx', 'components/Footer.tsx']) {
    assert.doesNotMatch(read(file), /Salon de Jeunes/, `dénomination erronée dans ${file}`);
  }
  assert.match(read('lib/content.ts'), /registeredOffice: 'Ville d’Uvira, Province du Sud-Kivu/);
});

test('catalogue : une fiche documentée, les autres catalogues restent vides', () => {
  // La seule fiche publiée est celle transmise par SJCD le 1er octobre 2026 : elle cite sa provenance.
  assert.match(read('lib/data/projects.ts'), /export const projects: ProjectSheet\[\] = \[CHANDELIER_360\];/);
  assert.match(read('lib/data/projects.ts'), /sources: \['Fiche projet transmise par SJCD le 1er octobre 2026'\]/);
  assert.match(read('lib/data/indicators.ts'), /export const indicators: PublishedIndicator\[\] = \[\];/);
  assert.match(read('lib/data/partnership.ts'), /export const partners: [^=]+ = \[\];/);
  assert.match(read('lib/data/news.ts'), /export const news: NewsItem\[\] = \[\];/);
  assert.match(read('lib/data/documents.ts'), /export const publicationHistory: PublicationRecord\[\] = \[\];/);
  assert.match(read('lib/repository.ts'), /programs: \[\], projects: \[\], articles: \[\]/);
});

test('traçabilité : chaque donnée institutionnelle cite au moins un article', () => {
  for (const file of dataFiles) {
    const source = read(file);
    assert.doesNotMatch(source, /sources: \[\]/, `sources vides dans ${file}`);
  }
  // Les six programmes et les dix fonctions doivent être sourcés article par article.
  const programs = read('lib/data/programs.ts').split('export const transversalDomains')[0];
  assert.equal(programs.match(/^    sources: \['S art\./gm)?.length, 6, 'six programmes sourcés');
  assert.equal(programs.match(/operationalStatus: 'statutory-domain'/g)?.length, 6, 'six domaines statutaires');
  const governance = read('lib/data/governance.ts');
  assert.equal(governance.match(/sources: \['S art\. 27'/g)?.length, 10, 'dix fonctions du CA sourcées');
});

test('statut juridique : aucune personnalité juridique ni adoption affirmées', () => {
  const statuts = read('lib/statuts.ts');
  assert.match(statuts, /personalityConfirmed: false/);
  assert.match(statuts, /adoptionConfirmed: false/);
  assert.match(statuts, /notarized: false/);
  assert.match(statuts, /filed: false/);
  assert.match(statuts, /registrationNumber: null/);
  assert.match(statuts, /creationDateOfficial: null/);
  for (const file of ['app/qui-sommes-nous/page.tsx', 'app/transparence/page.tsx', 'app/partenariats/page.tsx']) {
    assert.doesNotMatch(read(file), /légalement établie|enregistrée auprès|reconnue d’utilité publique/, file);
  }
});

test('rencontres de jeunes : aucun jour, horaire ni lieu inventé', () => {
  const programs = read('lib/data/programs.ts');
  assert.match(programs, /day: null as string \| null/);
  assert.match(programs, /time: null as string \| null/);
  assert.match(programs, /place: null as string \| null/);
  // « samedi » n'apparaît dans aucun des deux documents administratifs.
  for (const file of ['lib/data/programs.ts', 'app/programmes/page.tsx', 'app/page.tsx', 'lib/content.ts', 'lib/i18n/foundation.ts']) {
    assert.doesNotMatch(code(file), /samedi/i, `jour non documenté dans ${file}`);
  }
});

test('finances : aucun financement acquis, montants publiés seulement s’ils sont publics', () => {
  for (const file of dataFiles) {
    const source = read(file);
    assert.doesNotMatch(source, /\b(?:USD|\$|€|EUR)\s?\d/, `montant dans ${file}`);
    assert.doesNotMatch(source, /amount: \d/, `montant dans ${file}`);
  }
  // Coordonnées : source unique, fournies par SJCD le 1er octobre 2026.
  assert.match(read('lib/data/partnership.ts'), /email: org\.email as string \| null/);
  assert.match(read('lib/content.ts'), /email: 'Info\.sjcd@proton\.me'/);
  assert.match(read('lib/data/projects.ts'), /amount: '75 000'/);
  assert.match(read('lib/data/projects.ts'), /model: 'recherché'/);
  assert.doesNotMatch(read('lib/data/projects.ts'), /model: 'sécurisé'/, 'aucun financement sécurisé ne peut être publié');
  assert.match(read('lib/data/projects.ts'), /partners: \[\]/, 'aucun partenaire nommé');
  // Les documents statutaires ne sont pas exposés en téléchargement.
  assert.match(read('lib/data/documents.ts'), /downloadUrl: null/g);
  assert.doesNotMatch(read('app/transparence/page.tsx'), /<a[^>]+download/);
});

test('fiche Chandelier 360 : en préparation, aucun résultat déclaré comme acquis', () => {
  const projects = read('lib/data/projects.ts');
  assert.match(projects, /status: 'preparation'/);
  assert.match(projects, /completedActions: \[\],/);
  assert.match(projects, /publishedAt: '2026-10-01'/);
  // Les cibles et les résultats attendus ne sont pas des résultats obtenus.
  const sheetView = read('components/ProjectSheetView.tsx');
  assert.match(sheetView, /Ce ne sont pas des résultats obtenus/);
  assert.match(sheetView, /Ces cibles sont des engagements de formulation/);
  assert.match(sheetView, /Partenaires recherchés/);
});

test('images : registre vérifié, aucune image publiée sans fichier, légende ni droits', () => {
  execFileSync(process.execPath, ['scripts/images.mjs', '--check']);
  const spec = JSON.parse(read('specs/images.json'));
  assert.ok(spec.slots.length >= 7, 'emplacements photo déclarés');
  assert.ok(spec.slots.every(slot => slot.id && slot.dossier && slot.nom && slot.brief), 'chaque emplacement est décrit');
  for (const slot of spec.slots) {
    if (slot.statut === 'publiee') {
      assert.ok(slot.fichier && slot.alt && slot.credit, `${slot.id} : publiée sans fichier, légende ou crédit`);
      if (slot.nature === 'illustration') assert.ok(slot.licence, `${slot.id} : illustration sans licence`);
      else assert.ok(slot.consentRef || slot.personnesIdentifiables === false, `${slot.id} : droits non documentés`);
    } else {
      assert.equal(slot.statut, 'attendu', `${slot.id} : statut inattendu`);
    }
  }
  // Le site ne construit une adresse publique que pour une image publiée.
  assert.match(read('lib/data/media.ts'), /slot\.statut === 'publiee' && slot\.fichier \? `\/images\//);
});

test('logo officiel : installé dans la marque, le favicon et la page institutionnelle', () => {
  // L'ancienne marque provisoire a disparu au profit du logo fourni par SJCD.
  assert.equal(fs.existsSync(new URL('../components/FlameMark.tsx', import.meta.url)), false, 'marque provisoire supprimée');
  // Deux déclinaisons retenues par SJCD : B (fonds clairs) et E (fonds sombres).
  const brand = read('components/BrandMark.tsx');
  assert.match(brand, /logo-sjcd-emblem-3d\$\{small\}\.png/);
  assert.match(brand, /logo-sjcd-emblem-3d-clair\$\{small\}\.png/);
  assert.match(brand, /surface\?: 'dark' \| 'light'/);
  assert.ok(fs.existsSync(new URL('../public/images/institution/logo-sjcd-emblem-3d.png', import.meta.url)), 'version B');
  assert.ok(fs.existsSync(new URL('../public/images/institution/logo-sjcd-emblem-3d-clair.png', import.meta.url)), 'version E');
  // Le favicon est la version B, posée sur fond papier.
  assert.match(read('app/qui-sommes-nous/page.tsx'), /Version B — fonds clairs/);
  assert.match(read('app/qui-sommes-nous/page.tsx'), /Version E — fonds sombres/);
  const emblem = JSON.parse(read('specs/images.json')).slots.find(slot => slot.id === 'logo-sjcd');
  assert.equal(emblem.statut, 'publiee');
  assert.ok(fs.existsSync(new URL('../public/images/institution/logo-sjcd.png', import.meta.url)), 'logo source conservé');
  // Favicon servi par Next, et logo complet présenté sur la page institutionnelle.
  assert.ok(fs.existsSync(new URL('../app/icon.png', import.meta.url)), 'favicon app/icon.png');
  assert.equal(fs.existsSync(new URL('../app/icon.svg', import.meta.url)), false, 'ancien favicon provisoire retiré');
  const institution = read('app/qui-sommes-nous/page.tsx');
  assert.match(institution, /logo-sjcd-complet-3d-tons-clairs\.png/);
  assert.match(institution, /alt="Logo officiel de SJCD/);
  // Le logo n'est jamais présenté comme une illustration générée.
  assert.match(read('lib/pages.ts'), /est la marque de SJCD ASBL/);
  assert.doesNotMatch(read('lib/pages.ts'), /proposition graphique, non un logo officiel/);
});

test('illustrations : les visuels de projet sont étiquetés, jamais présentés comme des activités réelles', () => {
  const spec = JSON.parse(read('specs/images.json'));
  // Décision de SJCD (1er octobre 2026) : les photos fournies sont des illustrations.
  const projet = spec.slots.filter(slot => slot.dossier === 'projets/chandelier-360');
  assert.equal(projet.length, 7, 'sept visuels pour Chandelier 360°');
  assert.ok(projet.every(slot => slot.nature === 'illustration'), 'les visuels de projet sont des illustrations');
  assert.match(read('lib/data/media.ts'), /export const illustrationNote =/);
  assert.match(read('lib/data/media.ts'), /ne représente pas une activité réalisée par SJCD/);
  const vue = read('components/ProjectSheetView.tsx');
  assert.match(vue, /chip--warning">Illustration/);
  assert.match(vue, /\{illustrationNote\}/);
  assert.match(read('app/page.tsx'), /Visuels : illustration/);
  // La phrase est coupée sur plusieurs lignes dans le JSX : on vérifie ses fragments.
  const projets = read('app/projets/page.tsx');
  assert.match(projets, /étiquette « Illustration »/);
  assert.match(projets, /ne représentent pas/);
  assert.match(projets, /une activité réalisée par SJCD/);
});

test('noms de dirigeants : interrupteur unique et réserve affichée', () => {
  const governance = read('lib/data/governance.ts');
  assert.match(governance, /export const publishOfficeHolders = /);
  assert.match(governance, /export const officeHolderCaveat =/);
  // Sept des dix fonctions restent sans titulaire documenté (dans le tableau des fonctions).
  const offices = governance.split('export function publishedOffices')[0];
  assert.equal(offices.match(/holder: null, holderSource: null/g)?.length, 7);
  assert.equal(offices.match(/holderSource: 'S, déclaration finale'/g)?.length, 3);
});

test('formulaire de partenariat : brouillon local, aucune transmission', () => {
  assert.doesNotMatch(code('components/PartnershipDraft.tsx'), /fetch\(|localStorage|sessionStorage|action=/);
  assert.match(read('components/PartnershipDraft.tsx'), /Aucun message n’est envoyé/);
});

test('pas de chargement réseau des polices ni de WebGL', () => {
  assert.match(read('app/layout.tsx'), /next\/font\/local/);
  assert.doesNotMatch(read('app/layout.tsx'), /next\/font\/google/);
  const dependencies = JSON.parse(read('package.json')).dependencies;
  assert.ok(!dependencies.three && !dependencies['@react-three/fiber']);
});
