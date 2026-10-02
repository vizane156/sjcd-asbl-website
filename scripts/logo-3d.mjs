/**
 * Relief 3D fidèle à partir du logo officiel (PNG transparent).
 *
 * Principe : la forme du logo n'est jamais redessinée ni réinterprétée. On empile
 * des copies de son canal alpha, décalées d'un pixel à chaque étape, pour créer une
 * extrusion, puis on repose le logo original au premier plan. Aucun modèle
 * génératif n'intervient : le rendu est une transformation géométrique exacte.
 *
 *   node scripts/logo-3d.mjs                          logo par défaut, réglages standard
 *   node scripts/logo-3d.mjs --input <chemin.png>     autre fichier source
 *   node scripts/logo-3d.mjs --depth 40 --angle 45    profondeur et orientation
 *   node scripts/logo-3d.mjs --from "#05070f" --to "#243354"
 *   node scripts/logo-3d.mjs --flat                   sans profondeur, contour seul
 *
 * Le fichier source doit avoir un fond transparent : sur un fond opaque, l'extrusion
 * produirait un rectangle plein au lieu de la forme du logo.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? fallback : args[index + 1];
};
const has = name => args.includes(`--${name}`);

const ROOT = new URL('../', import.meta.url);
const INPUT = fileURLToPath(new URL(flag('input', 'public/images/institution/logo-sjcd.png'), ROOT));
const OUTPUT = fileURLToPath(new URL(flag('output', 'public/images/institution/logo-sjcd-3d.png'), ROOT));

const DEPTH = Number(flag('depth', 24));       // épaisseur, en pixels (24 : lisible sur un lettrage fin)
const ANGLE = Number(flag('angle', 32));       // orientation de l'extrusion, en degrés
const FROM = flag('from', '#05070f');          // teinte au fond du relief
const TO = flag('to', '#22304f');              // teinte au premier plan du relief
const SHADOW_OPACITY = Number(flag('shadow', 0.26));
const PADDING = Number(flag('padding', 24));   // marge autour du rendu final

if (!fs.existsSync(INPUT)) {
  console.error(`Logo introuvable : ${INPUT}`);
  console.error('Déposez le PNG transparent dans public/images/institution/logo-sjcd.png');
  console.error('ou indiquez un autre chemin avec --input.');
  process.exit(1);
}

const hex = value => {
  const v = value.replace('#', '');
  return [0, 2, 4].map(i => parseInt(v.slice(i, i + 2), 16));
};
/** Interpolation linéaire entre deux teintes, t ∈ [0, 1]. */
const mix = (a, b, t) => hex(a).map((channel, i) => Math.round(channel + (hex(b)[i] - channel) * t));

const metadata = await sharp(INPUT).metadata();
if (!metadata.hasAlpha) {
  console.error(`Le fichier ${path.basename(INPUT)} n'a pas de canal alpha : le fond n'est pas transparent.`);
  console.error('Exportez le logo en PNG avec transparence, puis relancez le script.');
  process.exit(1);
}

// Un canal alpha peut exister sans qu'aucun pixel ne soit transparent : dans ce cas
// l'extrusion produirait un rectangle plein au lieu de la forme du logo. On le refuse.
const stats = await sharp(INPUT).stats();
const alpha = stats.channels[3];
if (alpha && alpha.min > 0) {
  console.error(`Fond non transparent dans ${path.basename(INPUT)} : aucun pixel transparent (alpha minimal = ${alpha.min}).`);
  console.error('Le relief épouserait le rectangle de l’image, pas la forme du logo.');
  console.error('Solutions : réexporter en PNG transparent, ou retirer le fond blanc avec un outil');
  console.error('comme remove.bg / Photopea, puis relancer.');
  process.exit(1);
}
const transparentShare = 1 - alpha.mean / 255;
if (transparentShare < 0.05) {
  console.warn(`Attention : seulement ${(transparentShare * 100).toFixed(1)} % de l’image est transparent.`);
  console.warn('Vérifiez que le fond est bien détouré, sinon le relief sera presque rectangulaire.');
}

// 1. Recadrage : on retire les marges transparentes pour que le relief soit régulier.
const trimmed = await sharp(INPUT).trim({ threshold: 1 }).toBuffer();
const { width, height } = await sharp(trimmed).metadata();

const radians = (ANGLE * Math.PI) / 180;
const shiftX = DEPTH * Math.cos(radians);
const shiftY = DEPTH * Math.sin(radians);

// 2. Toile : le logo + le recul de l'extrusion + la marge.
const canvasWidth = Math.ceil(width + Math.max(0, shiftX) + PADDING * 2);
const canvasHeight = Math.ceil(height + Math.max(0, shiftY) + PADDING * 2);
const originX = PADDING;
const originY = PADDING;

// Canal alpha du logo, en mémoire : c'est lui qui donne sa forme à chaque couche.
const alphaRaw = await sharp(trimmed).ensureAlpha().extractChannel('alpha').raw().toBuffer();
const rawAlpha = { raw: { width, height, channels: 1 } };

/**
 * Silhouette pleine d'une teinte donnée, découpée exactement à la forme du logo.
 * On assemble une couleur unie et le canal alpha du logo (joinChannel) : un simple
 * composite « dest-in » sur une image sans alpha laisserait un rectangle plein.
 */
const silhouette = async ({ r, g, b }) =>
  sharp({ create: { width, height, channels: 3, background: { r, g, b } } })
    .joinChannel(alphaRaw, rawAlpha)   // 3 canaux + alpha = RGBA
    .png()
    .toBuffer();

const layers = [];

// 3. Ombre portée douce, posée au sol, pour asseoir le volume.
const shadow = await sharp(await silhouette({ r: 0, g: 0, b: 0 }))
  .composite([{ input: Buffer.from([255, 255, 255, Math.round(255 * SHADOW_OPACITY)]), raw: { width: 1, height: 1, channels: 4 }, blend: 'dest-in' }])
  .blur(Math.max(6, DEPTH / 2))
  .png()
  .toBuffer();
layers.push({
  input: shadow,
  left: Math.round(originX + shiftX * 0.85),
  top: Math.round(originY + shiftY * 0.85 + DEPTH * 0.35),
});

// 4. Extrusion : du fond vers l'avant, la teinte s'éclaircit légèrement.
if (!has('flat') && DEPTH > 0) {
  for (let step = DEPTH; step >= 1; step -= 1) {
    const t = 1 - step / DEPTH;
    layers.push({
      input: await silhouette({ r: mix(FROM, TO, t)[0], g: mix(FROM, TO, t)[1], b: mix(FROM, TO, t)[2] }),
      left: Math.round(originX + (step / DEPTH) * shiftX),
      top: Math.round(originY + (step / DEPTH) * shiftY),
    });
  }
}

// 5. Contour éclairé, côté lumière (haut-gauche). Dessiné AVANT le logo : seul son
//    décalage dépasse, ce qui détache la forme du fond sombre du relief.
const rimShade = mix(TO, '#ffffff', 0.42);
const rimWidth = Math.max(1, Math.round(DEPTH / 12));
const rim = await silhouette({ r: rimShade[0], g: rimShade[1], b: rimShade[2] });
layers.push({ input: rim, left: originX - rimWidth, top: originY - rimWidth });

// 6. Le logo d'origine, intact, au premier plan : ses pixels ne sont jamais modifiés.
layers.push({ input: trimmed, left: originX, top: originY });

await sharp({ create: { width: canvasWidth, height: canvasHeight, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite(layers)
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

// 7. Variante WebP pour le web, et version réduite pour les vignettes.
const webp = OUTPUT.replace(/\.png$/, '.webp');
await sharp(OUTPUT).webp({ quality: 90, alphaQuality: 100 }).toFile(webp);
const small = OUTPUT.replace(/\.png$/, '-512.png');
await sharp(OUTPUT).resize({ width: 512, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(small);

const size = bytes => `${Math.round(bytes / 1024)} Ko`;
console.log(`Logo source   : ${path.relative(fileURLToPath(ROOT), INPUT)} (${width}×${height})`);
console.log(`Relief        : ${DEPTH} px à ${ANGLE}°, de ${FROM} vers ${TO}`);
console.log(`Rendu         : ${path.relative(fileURLToPath(ROOT), OUTPUT)} — ${canvasWidth}×${canvasHeight}, ${size(fs.statSync(OUTPUT).size)}`);
console.log(`Variantes     : ${path.basename(webp)} (${size(fs.statSync(webp).size)}), ${path.basename(small)} (${size(fs.statSync(small).size)})`);
