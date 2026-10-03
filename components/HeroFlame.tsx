/**
 * Composition lumineuse du hero — halo et flamme stylisée, en couches (parallax).
 * Élément décoratif : le nom de l'association est porté par le titre, le logo officiel
 * est affiché dans l'en-tête, le pied de page et sur /qui-sommes-nous.
 */
export function HeroFlame() {
  return (
    <svg viewBox="0 0 600 700" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="hg" cx="50%" cy="45%" r="50%">
          <stop offset="0" stopColor="#ffe3b0" stopOpacity=".95" />
          <stop offset=".35" stopColor="#f4a53a" stopOpacity=".55" />
          <stop offset="1" stopColor="#f4a53a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff4dc" />
          <stop offset=".5" stopColor="#f4a53a" />
          <stop offset="1" stopColor="#ff6b3d" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="300" fill="url(#hg)" />
      <g fill="none" stroke="rgba(255,255,255,.12)">
        <circle cx="300" cy="300" r="170" /><circle cx="300" cy="300" r="240" strokeDasharray="2 10" />
      </g>
      <path d="M300 130c55 70 82 115 82 158a82 82 0 0 1-164 0c0-43 27-88 82-158z" fill="url(#hf)" />
      <path d="M300 220c22 30 33 50 33 67a33 33 0 0 1-66 0c0-17 11-37 33-67z" fill="#fff8ea" opacity=".9" />
      <rect x="286" y="380" width="28" height="200" rx="10" fill="rgba(255,255,255,.14)" />
      <rect x="200" y="580" width="200" height="22" rx="11" fill="rgba(255,255,255,.14)" />
    </svg>
  );
}
