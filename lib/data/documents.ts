/**
 * Espace documentaire de /transparence.
 *
 * Seuls les deux documents administratifs du dépôt existent. Ils ne sont PAS proposés
 * au téléchargement : leur adoption, leur notarisation et leur dépôt ne sont pas
 * attestés (docs/11 §0, §5.1) et leur publication relève d'une décision distincte.
 */
import type { DocumentCategory, PublicationRecord } from '@/lib/models';

export interface InstitutionalDocument {
  id: string;
  title: string;
  category: string;
  version: string;
  /** `pending-validation` : document présent mais non adopté ni notarié. */
  status: 'pending-validation' | 'adopted' | 'published';
  statusLabel: string;
  fileName: string;
  /** Aucun téléchargement n'est exposé tant que la publication n'est pas autorisée. */
  downloadUrl: null;
  summary: string;
  reservation: string;
  sources: string[];
}

export const institutionalDocuments: InstitutionalDocument[] = [
  {
    id: 'statuts',
    title: 'Statuts de SJCD ASBL',
    category: 'statuts',
    version: 'Version professionnelle consolidée',
    status: 'pending-validation',
    statusLabel: 'Soumis à relecture juridique et notariale avant adoption et dépôt',
    fileName: 'STATUTS_SJCD_ASBL_Version_Professionnelle_2026.pdf',
    downloadUrl: null,
    summary:
      '49 articles en six titres : dispositions générales ; membres et participation associative ; organes et gouvernance ; gestion financière, patrimoine et transparence ; programmes, protection et partenariats ; modification, dissolution et dispositions finales. Deux annexes statutaires : synthèse de la gouvernance et documents internes complémentaires.',
    reservation:
      'La page de garde présente ce texte comme un document de travail soumis à relecture juridique et notariale, tandis que l’acte d’adoption mentionne une Assemblée générale au 15 juin 2023 dont la résolution, le nombre de membres présents et les dix signatures sont laissés en blanc. Cette contradiction n’est pas résolue par le document.',
    sources: ['S page de garde', 'S art. 1 à 49', 'S annexe A', 'S annexe B'],
  },
  {
    id: 'reglement-interieur',
    title: 'Règlement intérieur de SJCD ASBL',
    category: 'reglement-interieur',
    version: 'Version 1.0',
    status: 'pending-validation',
    statusLabel: 'Date d’adoption et d’entrée en vigueur non renseignées',
    fileName: 'REGLEMENT_INTERIEUR_SJCD_ASBL_Version_Professionnelle_2026.pdf',
    downloadUrl: null,
    summary:
      '76 articles en dix-sept titres : dispositions générales ; adhésion et vie associative ; Assemblée générale ; Conseil d’administration ; fonctions des membres du CA ; commissions et groupes de travail ; réunions et activités ; programmes, bénéficiaires et partenariats ; protection et safeguarding ; gestion financière et contrôle interne ; conflits d’intérêts ; communication, image et données ; gestion documentaire ; plaintes et recours ; antennes et activités hors d’Uvira ; bénévolat et collaborateurs ; modification et dispositions finales. Trois annexes.',
    reservation:
      'La date d’adoption, la date d’entrée en vigueur, le lieu, la référence de la décision et les trois signatures de la page d’adoption sont tous laissés en blanc. Le règlement intérieur n’est donc pas attesté comme adopté.',
    sources: ['RI page de garde', 'RI art. 1 à 76', 'RI art. 76', 'RI annexe 1 à 3'],
  },
];

/** Huit catégories documentaires. Une seule contient des documents, les sept autres sont vides. */
export const documentCategories: DocumentCategory[] = [
  {
    id: 'statuts',
    title: 'Statuts',
    description: 'Acte constitutif et cadre supérieur de l’association.',
    documentIds: ['statuts'],
  },
  {
    id: 'reglement-interieur',
    title: 'Règlement intérieur',
    description: 'Règles générales de fonctionnement interne, dans les limites des statuts.',
    documentIds: ['reglement-interieur'],
  },
  {
    id: 'proces-verbaux',
    title: 'Procès-verbaux',
    description:
      'Délibérations de l’Assemblée générale et du Conseil d’administration, consignées et conservées dans les archives.',
    documentIds: [],
  },
  {
    id: 'rapports-activites',
    title: 'Rapports d’activités',
    description: 'Rapports annuels d’activités soumis à l’approbation de l’Assemblée générale.',
    documentIds: [],
  },
  {
    id: 'rapports-financiers',
    title: 'Rapports financiers',
    description: 'Comptes annuels, budgets et rapports financiers de l’exercice écoulé.',
    documentIds: [],
  },
  {
    id: 'politiques',
    title: 'Politiques institutionnelles',
    description:
      'Code de conduite, politique de protection et de safeguarding, manuel de procédures, gestion des conflits d’intérêts, communication et image, protection des données.',
    documentIds: [],
  },
  {
    id: 'documents-projet',
    title: 'Documents de projet',
    description: 'Notes de cadrage, conventions, rapports et évaluations liés aux projets publiés.',
    documentIds: [],
  },
  {
    id: 'autres-publics',
    title: 'Autres documents publics',
    description: 'Tout autre document dont la publication est autorisée par l’organe compétent.',
    documentIds: [],
  },
];

/** Historique de publication — vide : aucun document n'a encore été publié au sens propre. */
export const publicationHistory: PublicationRecord[] = [];

export const transparencyEmptyStates = {
  category:
    'Aucun document de cette catégorie n’est disponible. Les documents seront publiés après adoption par l’organe compétent et vérification de leur caractère public.',
  history:
    'Aucune publication n’a encore été enregistrée. L’historique indiquera, pour chaque document, sa version, sa date de publication et sa date de mise à jour.',
  download:
    'Les statuts et le règlement intérieur présents dans le dépôt ne sont pas proposés au téléchargement : leur adoption formelle, leur notarisation et leur dépôt ne sont pas attestés, et leur publication relève d’une décision distincte de SJCD.',
  legal:
    'Aucun numéro d’enregistrement, aucune autorité d’enregistrement et aucune adresse précise de siège ne figurent dans les documents disponibles.',
};
