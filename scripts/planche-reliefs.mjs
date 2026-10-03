/**
 * Planche de comparaison des propositions de logo 3D (usage interne, non publié).
 * Compose les variantes sur fond clair et sur fond sombre, avec leurs libellés.
 */
import sharp from 'sharp';
import fs from 'node:fs';

const variants = ['A-fin', 'B-marque', 'C-incline', 'D-sans-lisere', 'E-fond-sombre'];
const labels = {
  'A-fin': 'A · relief fin (18 px)',
  'B-marque': 'B · relief marqué (34 px)',
  'C-incline': 'C · oblique (62°)',
  'D-sans-lisere': 'D · sans liseré',
  'E-fond-sombre': 'E · tons clairs',
};

const cell = 380;
const pad = 28;
const header = 104;
const rowLabel = 44;
const cols = variants.length;
const width = cols * cell + pad * 2;
const height = header + rowLabel + cell + rowLabel + cell + pad;

const layers = [];

for (let i = 0; i < cols; i += 1) {
  for (const [row, background] of [['light', '#f7f5f0'], ['dark', '#0b1020']]) {
    const y = header + rowLabel + (row === 'light' ? 0 : cell + rowLabel);
    const x = pad + i * cell;
    const file = `tmp/reliefs/${variants[i]}.png`;
    if (!fs.existsSync(file)) continue;
    layers.push({ input: { create: { width: cell - 16, height: cell, channels: 4, background } }, left: x + 8, top: y });
    const logo = await sharp(file).resize({ height: cell - 56, fit: 'inside' }).toBuffer();
    const meta = await sharp(logo).metadata();
    layers.push({ input: logo, left: Math.round(x + (cell - meta.width) / 2), top: Math.round(y + (cell - meta.height) / 2) });
  }
}

const columns = variants
  .map((v, i) => `<text x="${pad + i * cell + (cell - 16) / 2}" y="${header + 30}" text-anchor="middle" font-family="Helvetica,Arial" font-size="21" font-weight="bold" fill="#f4a53a">${labels[v]}</text>`)
  .join('\n    ');

const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="${width}" height="${height}" fill="#12161f"/>
    <text x="${pad}" y="48" font-family="Helvetica,Arial" font-size="31" font-weight="bold" fill="#e8ecf4">Logo SJCD en relief — cinq propositions</text>
    <text x="${pad}" y="80" font-family="Helvetica,Arial" font-size="19" fill="#aeb8cc">Votre logo d'origine est intact : seul le volume est ajouté. Rangée du haut sur fond clair, rangée du bas sur le fond sombre du site.</text>
    ${columns}
    <text x="${pad}" y="${header + rowLabel + 28}" font-family="Helvetica,Arial" font-size="18" font-weight="bold" fill="#aeb8cc">Fond clair · #f7f5f0</text>
    <text x="${pad}" y="${header + rowLabel + cell + rowLabel + 28}" font-family="Helvetica,Arial" font-size="18" font-weight="bold" fill="#aeb8cc">Fond sombre du site · #0b1020</text>
  </svg>`);

await sharp({ create: { width, height, channels: 4, background: '#12161f' } })
  .composite([{ input: svg, left: 0, top: 0 }, ...layers])
  .png({ compressionLevel: 9 })
  .toFile('tmp/reliefs/comparaison.png');

console.log(`Planche générée : tmp/reliefs/comparaison.png — ${width}×${height}`);
