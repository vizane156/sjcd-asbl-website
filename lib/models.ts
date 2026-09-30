/** CMS contracts: null means unknown, never zero. Draft content cannot imply a verified fact. */
export type LocalizedText = { fr: string; en: string };
export interface ContentRecord { id: string; slug: string; title: LocalizedText; status: 'draft' | 'review' | 'published'; reviewedAt: string | null }
export interface Document extends ContentRecord { url: string | null; kind: 'legal' | 'annual' | 'financial' | 'policy' | 'project'; sizeBytes: number | null }
export interface ImpactMetric extends ContentRecord { value: number | null; unit: LocalizedText; period: string | null; source: string | null; methodology: LocalizedText | null }
export interface Partner extends ContentRecord { logoUrl: string | null; authorizationRef: string | null; category: 'donor' | 'ngo' | 'foundation' | 'company' | 'academic' | 'community' }
export interface TeamMember extends ContentRecord { role: LocalizedText; portraitUrl: string | null; consentRef: string | null }
export interface Testimonial extends ContentRecord { quote: LocalizedText; attribution: LocalizedText; consentRef: string | null }
export interface Program extends ContentRecord { description: LocalizedText; projectIds: string[] }
export interface Project extends ContentRecord {
  programId: string | null; location: LocalizedText | null; stage: 'planned' | 'active' | 'completed' | null;
  problem: LocalizedText | null; objective: LocalizedText | null; activities: LocalizedText[];
  beneficiaries: LocalizedText | null; metricIds: string[]; documentIds: string[]; partnerIds: string[];
  gallery: { url: string; alt: LocalizedText; consentRef: string | null }[];
  budget: { amount: number; currency: string; source: string } | null;
}
export interface Article extends ContentRecord { category: 'news' | 'report' | 'story' | 'press'; body: LocalizedText; publishedAt: string | null }
export interface FundingOpportunity extends ContentRecord {
  projectId: string; objective: LocalizedText | null; expectedResults: LocalizedText[];
  targetAmount: number | null; securedAmount: number | null; currency: string | null;
  budgetSource: string | null; startDate: string | null; endDate: string | null;
  sdgIds: number[]; documentIds: string[];
}

/**
 * Contrats institutionnels ajoutés pour l'exploitation des statuts et du règlement
 * intérieur. `sources` cite l'article littéral : une entrée sans source ne peut pas
 * être publiée (vérifié par tests/contracts.test.mjs).
 */

/** Référence à un article des documents administratifs, ex. 'S art. 27' ou 'RI art. 36'. */
export type StatutoryRef = string;

export interface Sourced { sources: StatutoryRef[] }

/** Organe statutaire. Les commissions ne sont PAS des organes (S art. 20, RI art. 34). */
export interface GovernanceOrgan extends Sourced {
  id: string; name: string; role: string; composition: string;
  powers: string[]; frequency: string; quorum: string; decisions: string; isStatutory: true;
}

/** Fonction du Conseil d'administration (S art. 27 à 37, RI art. 25 à 33). */
export interface GovernanceOffice extends Sourced {
  id: string; order: number; title: string;
  responsibility: string; limit: string; layer: GovernanceLayer;
  /** Nom publié uniquement si documenté ET si publishOfficeHolders est vrai. */
  holder: string | null; holderSource: StatutoryRef | null;
}

/** Les trois couches que le site doit distinguer (docs/11 §1.8). */
export type GovernanceLayer = 'governance' | 'administration' | 'operation';

/** Domaine d'intervention publié sur /programmes. Regroupement d'articles, jamais un ajout. */
export interface ProgramDomain extends Sourced {
  id: string; slug: string; title: string; summary: string;
  objectives: { text: string; sources: StatutoryRef[] }[];
  audiences: { text: string; sources: StatutoryRef[] }[];
  activityTypes: { text: string; sources: StatutoryRef[] }[];
  /** Territoire : null tant qu'aucune zone d'intervention n'est documentée (docs/11 §3.4). */
  territory: { text: string; sources: StatutoryRef[] } | null;
  /** Un domaine statutaire n'est pas un programme opérationnel en cours. */
  operationalStatus: 'statutory-domain';
}

/** Catégorie documentaire de /transparence. */
export interface DocumentCategory { id: string; title: string; description: string; documentIds: string[] }

/** Historique de publication d'un document (docs/11 §4.E). */
export interface PublicationRecord {
  documentId: string; version: string; publishedAt: string | null; updatedAt: string | null; note: string;
}

/** Indicateur publié. Aucun chiffre sans valeur, période, unité, source et date. */
export interface PublishedIndicator {
  id: string; label: string; period: string; value: number; unit: string;
  source: string; updatedAt: string; methodology: string;
}

/** Forme de collaboration proposée sur /partenariats (S art. 44, S art. 39.4/39.6). */
export interface PartnershipForm extends Sourced { id: string; title: string; description: string }

/** Statut d'un projet du catalogue. */
export type ProjectStatus = 'preparation' | 'active' | 'completed' | 'archived';
