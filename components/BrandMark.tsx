import Image from 'next/image';

/**
 * Marque de l'en-tête, du pied de page et des en-têtes de pages.
 *
 * Logo officiel de SJCD (emblème : flamme et silhouettes), fourni par l'association
 * le 3 octobre 2026. Deux déclinaisons, choisies par SJCD :
 * — version B, relief marqué, pour les fonds clairs ;
 * — version E, relief en tons clairs, pour les fonds sombres.
 *
 * `surface` décrit le fond SUR LEQUEL le logo est posé : sur un fond bleu nuit, la
 * version foncée se confondrait avec l'arrière-plan.
 *
 * Le texte du lien porte déjà le nom de l'association : l'image est donc décorative
 * (alt vide) et le lien reste compréhensible sans elle.
 */
export function BrandMark({ className = 'brand__mark', size = 34, surface = 'dark', priority = false }: {
  className?: string;
  size?: number;
  /** Fond d'accueil du logo : « dark » (le site) ou « light » (documents, fonds papier). */
  surface?: 'dark' | 'light';
  priority?: boolean;
}) {
  // Version légère de 96 px pour les petites tailles ; fichier complet au-delà.
  const small = size <= 96 ? '-96' : '';
  const src = surface === 'light'
    ? `/images/institution/logo-sjcd-emblem-3d${small}.png`
    : `/images/institution/logo-sjcd-emblem-3d-clair${small}.png`;
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
      priority={priority}
      // L'emblème est plus haut que large : on le contient sans le déformer.
      style={{ objectFit: 'contain' }}
    />
  );
}
