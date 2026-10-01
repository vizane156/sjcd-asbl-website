/**
 * Transforme un rapport JSON de Playwright en annotations GitHub Actions.
 *
 * Les journaux bruts d'une exécution CI ne sont pas toujours consultables ; les
 * annotations, elles, restent accessibles via l'API. En cas d'échec, chaque test
 * en échec est donc remonté en `::error::` avec son message tronqué.
 *
 * Usage : node scripts/report-e2e.mjs [chemin-du-rapport.json]
 * Code de sortie : 1 si au moins un test a échoué, 0 sinon.
 */
import fs from 'node:fs';

const path = process.argv[2] ?? 'playwright-report.json';

if (!fs.existsSync(path)) {
  console.log(`::warning::Aucun rapport Playwright trouvé à ${path}`);
  process.exit(0);
}

const report = JSON.parse(fs.readFileSync(path, 'utf8'));

/** Parcourt récursivement l'arbre de suites pour retrouver chaque spécification. */
function collectSpecs(suite, trail = [], out = []) {
  const here = suite.title ? [...trail, suite.title] : trail;
  for (const spec of suite.specs ?? []) out.push({ spec, trail: here });
  for (const child of suite.suites ?? []) collectSpecs(child, here, out);
  return out;
}

const failures = [];
for (const suite of report.suites ?? []) {
  for (const { spec, trail } of collectSpecs(suite)) {
    for (const test of spec.tests ?? []) {
      for (const result of test.results ?? []) {
        if (result.status === 'failed' || result.status === 'timedOut') {
          const message = (result.error?.message ?? result.errors?.[0]?.message ?? 'échec sans message')
            .replace(/%25/g, '%')          // échappe pour la syntaxe d'annotation
            .replace(/\r?\n/g, ' ⏎ ')
            .replace(/\s+/g, ' ')
            .slice(0, 20000);
          failures.push({ title: [...trail, spec.title].join(' › '), file: spec.file ?? suite.file ?? '', message });
        }
      }
    }
  }
}

const expected = report.stats?.expected ?? 0;
const unexpected = report.stats?.unexpected ?? failures.length;
const skipped = report.stats?.skipped ?? 0;
const flaky = report.stats?.flaky ?? 0;

console.log(`Playwright — attendus : ${expected}, échecs : ${unexpected}, ignorés : ${skipped}, instables : ${flaky}`);

if (failures.length === 0) {
  console.log('Aucun échec de parcours navigateur.');
  process.exit(unexpected > 0 ? 1 : 0);
}

for (const failure of failures) {
  console.log(`::error title=${failure.title.replace(/,/g, ';')}::${failure.message}`);
}
console.log(`\n${failures.length} test(s) en échec.`);
process.exit(1);
