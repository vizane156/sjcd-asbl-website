import Image from 'next/image';

/**
 * Marque de l'en-tête, du pied de page et des en-têtes de pages.
 *
 * Logo officiel de SJCD (emblème : flamme et silhouettes), fourni par l'association
 * le 3 octobre 2026 et déposé dans public/images/institution/. Le texte du lien porte
 * déjà le nom de l'association : l'image est donc décorative (alt vide) et le lien
 * reste compréhensible sans elle.
 */
export function BrandMark({ className = 'brand__mark', size = 34, priority = false }: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/institution/logo-sjcd-emblem.png"
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
