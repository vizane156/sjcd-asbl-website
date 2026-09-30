/**
 * Indicateurs — AUCUNE valeur chiffrée n'existe dans les documents (docs/11 §3.5).
 * Ce fichier définit la méthodologie de publication, pas des données.
 */
import type { PublishedIndicator } from '@/lib/models';

/**
 * Vide. Aucun indicateur ne peut être ajouté sans : période, valeur, unité, source
 * interne officielle et date de mise à jour. Voir tests/contracts.test.mjs.
 */
export const indicators: PublishedIndicator[] = [];

/** Les six mentions obligatoires de tout indicateur publié. */
export const indicatorMethodology = [
  { field: 'Période', rule: 'L’intervalle couvert par la mesure, avec ses dates de début et de fin.', sources: ['S art. 40', 'RI art. 53'] },
  { field: 'Indicateur', rule: 'La définition exacte de ce qui est compté, sans reformulation implicite.', sources: ['RI art. 53'] },
  { field: 'Valeur', rule: 'Le résultat mesuré. Aucune valeur arrondie, estimée ou extrapolée.', sources: ['RI art. 53'] },
  { field: 'Unité', rule: 'L’unité de mesure : personnes, séances, localités, documents, etc.', sources: ['RI art. 53'] },
  { field: 'Source', rule: 'Le document interne qui établit la valeur : registre, procès-verbal, rapport approuvé.', sources: ['S art. 40', 'RI art. 53', 'RI art. 62'] },
  { field: 'Date de mise à jour', rule: 'La date à laquelle la valeur a été vérifiée pour la dernière fois.', sources: ['RI art. 63'] },
];

export const indicatorRules = {
  noSourceNoNumber:
    'Aucun chiffre n’est affiché sans source interne officielle qui le confirme. Une donnée non sourcée n’est pas publiée, même à titre indicatif.',
  fiscalYear: 'L’exercice social commence le 1er janvier et se termine le 31 décembre.',
  traceability:
    'Les ressources et dépenses doivent être documentées, traçables et utilisées conformément à leur destination. Les pièces justificatives sont conservées conformément aux règles comptables et fiscales applicables.',
  verification:
    'Les comptes annuels sont préparés par le Conseil d’administration et soumis à l’Assemblée générale pour examen et approbation. Un audit ou un contrôle externe peut être organisé lorsque la loi, un bailleur ou l’importance des opérations l’exige.',
  categoriesAwaited:
    'Les catégories d’indicateurs qui seront suivies (jeunes accompagnés, activités tenues, zones couvertes, documents produits) dépendront des programmes effectivement mis en œuvre. Aucune catégorie n’est publiée à l’avance, car aucune ne correspond à une activité attestée.',
  sources: ['S art. 40', 'RI art. 48', 'RI art. 53', 'RI art. 54', 'RI art. 62', 'RI art. 63'],
};

export const indicatorEmptyState = {
  headline: 'Aucun indicateur n’est publié à ce jour.',
  detail:
    'SJCD ne publie aucun chiffre tant qu’aucune source interne officielle ne le confirme. Cette page expose la méthodologie qui s’appliquera dès la première publication, afin que chaque donnée puisse être vérifiée.',
  sources: ['S art. 40', 'RI art. 53'],
};
