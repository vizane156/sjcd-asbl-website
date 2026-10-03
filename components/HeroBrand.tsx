import Image from 'next/image';

/**
 * Marque du hero — le logo officiel de SJCD, en grand, sur la composition lumineuse.
 *
 * Déplacé ici à la demande de SJCD (3 octobre 2026) : la flamme décorative est
 * remplacée par l'emblème officiel en relief, dans sa déclinaison pour fond sombre.
 * Le halo ambre est conservé derrière, en CSS, pour l'ancrage dans la direction
 * artistique « Lumière ».
 *
 * Image décorative (alt vide) : le titre du hero porte déjà le nom de l'association.
 */
export function HeroBrand() {
  return (
    <div className="hero-brand">
      <span className="hero-brand__glow" aria-hidden />
      <Image
        src="/images/institution/logo-sjcd-emblem-3d-clair.png"
        alt=""
        width={764}
        height={953}
        sizes="(min-width: 960px) 520px, 62vw"
        priority
        className="hero-brand__mark"
      />
    </div>
  );
}
