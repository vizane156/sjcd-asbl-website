/**
 * Catalogue de projets — AUCUN projet n'existe dans les documents (docs/11 §3.4).
 * Le tableau reste vide : la page affiche un état institutionnel, jamais un projet
 * d'exemple. Ce fichier définit le modèle de fiche qui recevra les projets réels.
 */
import type { ProjectStatus } from '@/lib/models';
import { activityChecklist, projectCycle } from '@/lib/statuts';

/** Modèle de fiche projet — tous les champs demandés, tous nullable sauf identité. */
export interface ProjectSheet {
  title: string;
  slug: string;
  summary: string | null;
  context: string | null;
  problem: string | null;
  objectives: string[];
  audiences: string[];
  zone: string | null;
  timeline: string | null;
  plannedActions: string[];
  completedActions: string[];
  results: string[];
  indicators: string[];
  partners: string[];
  /** Financement : publié seulement s'il est public ET documenté. */
  funding: { amount: string; currency: string; source: string; public: true } | null;
  gallery: { url: string; alt: string; consentRef: string }[];
  documents: { label: string; url: string }[];
  status: ProjectStatus;
  publishedAt: string | null;
}

/**
 * Vide. Aucun projet ne peut être ajouté ici sans : un titre documenté, une zone
 * attestée, une période, et une source institutionnelle. Voir tests/contracts.test.mjs.
 */
export const projects: ProjectSheet[] = [];

export const projectStatuses: { id: ProjectStatus; label: string; description: string }[] = [
  { id: 'preparation', label: 'Projet en préparation', description: 'Besoin identifié, formulation et validation interne en cours.' },
  { id: 'active', label: 'En cours', description: 'Mise en œuvre et suivi engagés, résultats non encore consolidés.' },
  { id: 'completed', label: 'Terminé', description: 'Clôturé, résultats et leçons apprises documentés.' },
  { id: 'archived', label: 'Archivé', description: 'Conservé pour traçabilité, sans activité en cours.' },
];

/** RI art. 40 — les huit étapes du cycle de gestion. Processus interne, pas des projets. */
export const projectCycleSteps = projectCycle;

/** RI annexe 2 — la check-list d'ouverture d'une activité. */
export const openingChecklist = activityChecklist;

export const projectEmptyState = {
  headline: 'Les projets de SJCD seront publiés progressivement sur cet espace.',
  detail:
    'Aucun projet documenté n’est disponible à ce jour. Le catalogue est prêt : chaque fiche présentera le titre, le résumé, le contexte, le problème ou besoin traité, les objectifs, les publics, la zone d’intervention, le calendrier, les actions prévues et réalisées, les résultats, les indicateurs, les partenaires, le financement lorsqu’il est public et documenté, la galerie, les documents téléchargeables, le statut et la date de publication.',
  whyEmpty:
    'Ni les statuts ni le règlement intérieur ne décrivent de projet réalisé. Publier un projet d’exemple reviendrait à annoncer une réalisation inexistante.',
  whatIsShown:
    'Ce qui est présenté ci-dessous est la méthode de gestion de projet prévue par le règlement intérieur, ainsi que la structure de fiche utilisée. Ce sont des processus internes, pas des réalisations.',
};
