/**
 * Marque provisoire — un chandelier stylisé (TODO(SJCD): remplacer par le logo officiel, D7).
 */
export function FlameMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd28a" /><stop offset="1" stopColor="#f4a53a" />
        </linearGradient>
      </defs>
      <path d="M16 3c3 4 4.5 6.4 4.5 8.6A4.5 4.5 0 0 1 16 16a4.5 4.5 0 0 1-4.5-4.4C11.5 9.4 13 7 16 3z" fill="url(#fm)" />
      <rect x="14.5" y="16" width="3" height="9" rx="1.2" fill="currentColor" />
      <rect x="9" y="25" width="14" height="3" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/** Grande flamme du hero — composition lumineuse en couches (parallax). */
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
