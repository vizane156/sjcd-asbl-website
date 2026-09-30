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
test('pas de chargement réseau des polices ni de WebGL', () => {
  assert.match(read('app/layout.tsx'), /next\/font\/local/);
  assert.doesNotMatch(read('app/layout.tsx'), /next\/font\/google/);
  const dependencies = JSON.parse(read('package.json')).dependencies;
  assert.ok(!dependencies.three && !dependencies['@react-three/fiber']);
});
