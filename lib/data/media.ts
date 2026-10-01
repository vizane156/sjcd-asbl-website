/**
 * Images — registre unique, alimenté par specs/images.json et par le contrôle
 * `npm run images:check`. Le dossier de dépôt est public/images/ (voir son README).
 *
 * RÈGLE : une image n'est affichée que si son statut est « publiee », c'est-à-dire
 * si le fichier existe, si son texte alternatif est rédigé et si les droits sont
 * documentés (consentRef, ou personnesIdentifiables: false). Sinon l'emplacement
 * affiche un cadre explicite — jamais une photo de remplacement.
 */
import spec from '@/specs/images.json';

export type MediaStatus = 'attendu' | 'recue' | 'publiee';
export type MediaNature = 'documentaire' | 'illustration';

export interface MediaSlot {
  id: string;
  /** Sous-dossier de public/images/ — ex. « projets/chandelier-360 ». */
  dossier: string;
  /** Nom de fichier attendu, sans extension. */
  nom: string;
  /** Ce que la photo doit montrer : sert de libellé à l'emplacement vide. */
  brief: string;
  fichier: string | null;
  alt: string | null;
  nature: MediaNature;
  /** `false` = aucun visage identifiable ; `null` = à confirmer. */
  personnesIdentifiables: boolean | null;
  consentRef: string | null;
  credit: string | null;
  lieu: string | null;
  priseLe: string | null;
  statut: MediaStatus;
}

export const mediaSlots: MediaSlot[] = spec.slots as MediaSlot[];

export const mediaRules = spec.rules;

/** Adresse publique d'une image, ou `null` tant qu'elle n'est pas publiée. */
export function mediaUrl(slot: MediaSlot): string | null {
  return slot.statut === 'publiee' && slot.fichier ? `/images/${slot.dossier}/${slot.fichier}` : null;
}

/** Emplacements rattachés à un projet, dans l'ordre du registre. */
export function projectMedia(slug: string): MediaSlot[] {
  return mediaSlots.filter(slot => slot.dossier === `projets/${slug}`);
}

/** Couverture d'un projet : premier emplacement publié, sinon premier emplacement prévu. */
export function projectCover(slug: string): MediaSlot | null {
  const slots = projectMedia(slug);
  return slots.find(slot => slot.statut === 'publiee') ?? slots[0] ?? null;
}

export const publishedMedia = mediaSlots.filter(slot => slot.statut === 'publiee' && slot.fichier);

/** Résumé éditorial du dossier images, affiché sur /projets. */
export function mediaSummary(slug: string) {
  const slots = projectMedia(slug);
  return {
    total: slots.length,
    publiees: slots.filter(slot => slot.statut === 'publiee').length,
    recues: slots.filter(slot => slot.statut === 'recue').length,
  };
}
