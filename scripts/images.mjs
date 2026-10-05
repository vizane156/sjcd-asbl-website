/**
 * Registre des images — détection des fichiers déposés dans public/images/
 * et contrôle des droits avant publication.
 *
 *   node scripts/images.mjs           détecte les fichiers, met à jour specs/images.json
 *   node scripts/images.mjs --check   ne modifie rien, échoue si une image publiée est invalide
 *
 * Une image ne devient « publiee » que par décision explicite : ce script ne fait
 * que passer un emplacement de « attendu » à « recue » quand le fichier apparaît.
 */
import fs from 'node:fs';
import path from 'node:path';

const specPath = new URL('../specs/images.json', import.meta.url);
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const check = process.argv.includes('--check');

const ko = bytes => `${Math.round(bytes / 1024)} Ko`;
const failures = [];
const warnings = [];

/** Cherche `<nom>.<extension>` dans le dossier de l'emplacement. */
function findFile(slot) {
  const dir = new URL(`../public/images/${slot.dossier}/`, import.meta.url);
  if (!fs.existsSync(dir)) return null;
  const entries = fs.readdirSync(dir, { withFileTypes: true }).filter(e => e.isFile() && !e.name.startsWith('.'));
  const base = slot.nom.toLowerCase();
  const allowed = spec.rules.extensions;
  const rejected = spec.rules.rejectedExtensions;
  for (const entry of entries) {
    const ext = path.extname(entry.name).toLowerCase();
    const stem = entry.name.slice(0, entry.name.length - ext.length).toLowerCase();
    if (!stem.startsWith(base)) continue;
    if (rejected.includes(ext)) {
      failures.push(`${slot.id} : ${slot.dossier}/${entry.name} — format non affichable par les navigateurs (${ext}). Exporter en JPEG ou WebP.`);
      continue;
    }
    if (!allowed.includes(ext)) continue;
    return entry.name;
  }
  return null;
}

for (const slot of spec.slots) {
  const file = findFile(slot);
  const rel = `${slot.dossier}/${file ?? `${slot.nom}.jpg`}`;

  if (!file) {
    if (slot.statut === 'publiee') failures.push(`${slot.id} : publiée mais aucun fichier dans public/images/${slot.dossier}/ (attendu : ${slot.nom}.jpg).`);
    else if (slot.statut === 'recue') { slot.statut = 'attendu'; slot.fichier = null; warnings.push(`${slot.id} : le fichier ${rel} a disparu, retour à l’état « attendu ».`); }
    continue;
  }

  const url = new URL(`../public/images/${slot.dossier}/${file}`, import.meta.url);
  const bytes = fs.statSync(url).size;
  slot.fichier = file;
  if (slot.statut === 'attendu') slot.statut = 'recue';

  if (bytes > spec.rules.maxBytes) failures.push(`${slot.id} : ${rel} pèse ${ko(bytes)} — au-delà de ${ko(spec.rules.maxBytes)}. Compressez la source avant publication.`);
  else if (bytes > spec.rules.warnBytes) warnings.push(`${slot.id} : ${rel} pèse ${ko(bytes)} — à comprimer pour un réseau mobile lent.`);

  if (slot.statut === 'publiee') {
    if (!slot.alt || slot.alt.trim().length < 20) failures.push(`${slot.id} : texte alternatif manquant ou trop court pour être publiée.`);
    if (slot.alt && slot.alt.trim() === slot.brief.trim()) failures.push(`${slot.id} : le texte alternatif recopie le brief de la photo, il doit décrire l’image réelle.`);
    if (!slot.credit) failures.push(`${slot.id} : crédit photo manquant (auteur ou organisation).`);
    if (slot.nature === 'illustration') {
      // Une image de banque ou générée est publiée sous couvert de sa licence : elle doit la citer.
      if (!slot.licence) failures.push(`${slot.id} : illustration publiée sans licence — indiquer la source et les conditions d’usage (banque d’images, générateur, cession de droits).`);
    } else if (slot.personnesIdentifiables !== false && !slot.consentRef) {
      failures.push(`${slot.id} : photographie documentaire avec personnes identifiables sans référence de consentement — indiquer consentRef, ou basculer la photo en « illustration » si elle n’a pas été prise par SJCD.`);
    }
    // Rappel réservé aux photos de terrain : un logo ou un visuel d'interface n'a
    // ni date ni lieu de prise de vue.
    if (slot.nature === 'documentaire' && slot.dossier.startsWith('projets/')) {
      if (!slot.priseLe) warnings.push(`${slot.id} : date de prise de vue non renseignée (recommandé pour une photo documentaire).`);
      if (!slot.lieu) warnings.push(`${slot.id} : lieu de prise de vue non renseigné (recommandé pour une photo documentaire).`);
    }
    if (!fs.existsSync(new URL(`../public/images/${slot.dossier}/${slot.fichier}`, import.meta.url))) failures.push(`${slot.id} : fichier déclaré introuvable.`);
  }
}

console.log('Registre des images — public/images/');
for (const slot of spec.slots) {
  const mark = slot.statut === 'publiee' ? '✓ publiée ' : slot.statut === 'recue' ? '◦ reçue   ' : '… attendue';
  const fichier = slot.fichier ? ` ${slot.dossier}/${slot.fichier}` : ` ${slot.dossier}/${slot.nom}.*`;
  console.log(`  ${mark} ${fichier}`);
}
const recues = spec.slots.filter(s => s.statut === 'recue').length;
const publiees = spec.slots.filter(s => s.statut === 'publiee').length;
const illustrations = spec.slots.filter(s => s.nature === 'illustration').length;
console.log(`\n${spec.slots.length} emplacements · ${publiees} publiée(s) · ${recues} reçue(s) en attente de légende et de droits.`);
console.log(`${illustrations} emplacement(s) prévus comme illustrations : ces images seront étiquetées « Illustration » sur le site et ne peuvent pas être présentées comme des activités de SJCD.`);
console.log('Déposez vos fichiers puis prévenez l’équipe : voir public/images/README.md.');

for (const warning of warnings) console.warn(`\nAttention — ${warning}`);
if (failures.length) {
  console.error('\nImages non conformes :');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  console.error('\nCorrigez ces points : une image publiée doit avoir un fichier, un texte alternatif et des droits documentés.');
  process.exit(1);
}

if (!check) {
  fs.writeFileSync(specPath, `${JSON.stringify(spec, null, 2)}\n`);
  console.log('\nspecs/images.json mis à jour.');
} else {
  console.log('\nContrôle terminé : aucune image publiée non conforme.');
}
