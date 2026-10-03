/**
 * Optimisation des images de public/images/.
 *
 * Une photo de terrain ou une illustration doit rester légère : le site est consulté
 * depuis des réseaux mobiles souvent lents. Ce script redimensionne les fichiers
 * sources (PNG, JPEG, WebP, AVIF) à une largeur maximale et les réexporte en JPEG,
 * puis supprime la source lourde — elle reste dans l'historique Git.
 *
 *   node scripts/optimize-images.mjs                 traite public/images/projets/
 *   node scripts/optimize-images.mjs <dossier>       traite un sous-dossier précis
 *   node scripts/optimize-images.mjs --dry-run       affiche ce qui serait fait
 *
 * Après exécution, relancer `npm run images:sync` pour mettre le registre à jour.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import fs2 from 'node:fs';

/** Seuil au-delà duquel un fichier de public/images est considéré comme trop lourd. */
const spec_warnBytes = JSON.parse(fs2.readFileSync(new URL('../specs/images.json', import.meta.url), 'utf8')).rules.warnBytes;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const targets = args.filter(arg => !arg.startsWith('--'));
const folders = targets.length ? targets : ['projets'];
const ROOT = new URL('../public/images/', import.meta.url);

/** Largeur maximale : au-delà, la photo ne sert à rien sur un écran, même récent. */
const MAX_WIDTH = 1600;
const QUALITY = 82;
/** Poids visé : au-dessus, on réessaie avec une qualité plus basse. */
const TARGET_BYTES = 600 * 1024;
const SOURCE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.tif', '.tiff']);
const ko = bytes => `${Math.round(bytes / 1024)} Ko`;

let processed = 0;

/** Parcourt récursivement un dossier et renvoie les fichiers images trouvés. */
function walk(dir, prefix = '') {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    if (entry.isDirectory()) found.push(...walk(new URL(`${entry.name}/`, dir), `${prefix}${entry.name}/`));
    else found.push({ entry, prefix });
  }
  return found;
}

for (const folder of folders) {
  const dir = new URL(`${folder}/`, ROOT);
  if (!fs.existsSync(dir)) {
    console.warn(`${folder} : dossier absent, ignoré.`);
    continue;
  }
  for (const { entry, prefix } of walk(dir)) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    const stem = path.basename(entry.name, ext);
    if (!SOURCE_EXT.has(ext)) continue;
    // On ne réoptimise pas un JPEG déjà produit par ce script.
    if (ext === '.jpg' && /^optimise-/.test(stem)) continue;

    const target = new URL(prefix, dir);
    const source = new URL(entry.name, target);
    const before = fs.statSync(source).size;
    const outputName = `${stem}.jpg`;
    const output = new URL(outputName, target);

    const sourcePath = fileURLToPath(source);
    const metadata = await sharp(sourcePath).metadata();

    // Un JPEG déjà publié (largeur utile et poids raisonnable) n'est pas recompressé :
    // chaque passage dégraderait l'image sans bénéfice.
    if ((ext === '.jpg' || ext === '.jpeg')
      && (metadata.width ?? 0) <= MAX_WIDTH && before <= spec_warnBytes) {
      console.log(`[ignoré] ${folder}/${prefix}${entry.name} — déjà optimisé (${metadata.width} px, ${ko(before)}).`);
      continue;
    }
    let quality = QUALITY;
    let buffer = await sharp(sourcePath)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    while (buffer.length > TARGET_BYTES && quality > 55) {
      quality -= 8;
      buffer = await sharp(sourcePath)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();
    }

    const width = Math.min(metadata.width ?? MAX_WIDTH, MAX_WIDTH);
    console.log(`${dryRun ? '[simulation] ' : ''}${folder}/${prefix}${entry.name} → ${outputName}`);
    console.log(`   ${metadata.width}×${metadata.height ?? '?'} · ${ko(before)} → ${width}×${Math.round(((metadata.height ?? 0) * width) / (metadata.width ?? width))} · ${ko(buffer.length)} (qualité ${quality})`);
    if (width < 1600) console.warn(`   Attention : la source fait moins de 1600 px de large, elle ne pourra pas être agrandie.`);
    if (dryRun) continue;

    fs.writeFileSync(output, buffer);
    console.log(`   écrit : public/images/${folder}/${prefix}${outputName}`);
    // La source lourde disparaît du dépôt ; elle reste accessible dans l'historique Git.
    if (`${stem}${ext}` !== outputName) fs.rmSync(source);
    processed += 1;
  }
}

if (dryRun) console.log('\nSimulation terminée : aucun fichier modifié.');
else console.log(`\n${processed} image(s) optimisée(s). Relancez : npm run images:sync`);
