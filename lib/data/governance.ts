/**
 * Gouvernance — S art. 20 à 38, RI art. 25 à 33, RI annexe 1.
 * Chaque organe et chaque fonction cite ses articles. Aucune fonction n'est ajoutée,
 * aucune personne n'est nommée au-delà de la déclaration finale des statuts.
 * Voir docs/11 §1.8 et §5.4.
 */
import type { GovernanceLayer, GovernanceOffice, GovernanceOrgan } from '@/lib/models';

/**
 * Interrupteur unique de publication des noms de dirigeants.
 *
 * Les trois noms ci-dessous figurent dans la « Déclaration finale » des statuts — un
 * document dont l'adoption, la notarisation et le dépôt ne sont pas attestés
 * (docs/11 §0, §5.1). Les publier revient à tenir la gouvernance pour constituée.
 * Passer cette valeur à `false` retire les trois noms de tout le site.
 * À confirmer par SJCD : mandat actuel et autorisation de publication.
 */
export const publishOfficeHolders = true;

/** Réserve affichée systématiquement à côté de tout nom publié. */
export const officeHolderCaveat =
  'Noms issus de la déclaration finale des statuts, document dont l’adoption formelle, la notarisation et le dépôt ne sont pas attestés. À confirmer par SJCD.';

/** Les trois couches distinctes que le site explique au lieu d'aplatir la gouvernance. */
export const governanceLayers: { id: GovernanceLayer; title: string; definition: string; sources: string[] }[] = [
  {
    id: 'governance',
    title: 'Gouvernance et représentation',
    definition:
      'Décider, contrôler et représenter. L’Assemblée générale est l’organe souverain ; le Conseil d’administration assure la gouvernance et l’exécution stratégique ; le Président est le principal représentant légal et institutionnel.',
    sources: ['S art. 20', 'S art. 21', 'S art. 27', 'S art. 31'],
  },
  {
    id: 'administration',
    title: 'Administration',
    definition:
      'Assurer la mémoire institutionnelle : registres, procès-verbaux, correspondance, archivage des actes et suivi documentaire des décisions. Cette fonction relève du Secrétaire général.',
    sources: ['S art. 33', 'RI art. 27'],
  },
  {
    id: 'operation',
    title: 'Coordination opérationnelle',
    definition:
      'Mettre en œuvre : équipes, activités, calendriers, suivi des objectifs et reporting, sous l’autorité du Conseil d’administration. Cette fonction ne modifie pas la représentation légale de l’association.',
    sources: ['S art. 35', 'RI art. 31'],
  },
];

/** Deux organes statutaires, et deux seulement (S art. 20). */
export const governanceOrgans: GovernanceOrgan[] = [
  {
    id: 'assemblee-generale',
    name: 'Assemblée générale',
    role: 'Organe souverain de l’association.',
    composition:
      'Membres effectifs régulièrement admis, et autres personnes dont la participation est autorisée par les statuts ou le règlement intérieur. Les membres d’honneur peuvent être invités avec voix consultative, sans droit de vote sauf disposition statutaire expresse.',
    powers: [
      'Définir les grandes orientations et priorités stratégiques de l’association',
      'Adopter, modifier et interpréter les statuts dans les conditions légales et statutaires',
      'Élire, renouveler ou révoquer les membres du Conseil d’administration',
      'Examiner et approuver les rapports d’activités, rapports de gestion et comptes annuels',
      'Adopter le budget et assurer une supervision générale de la gestion financière',
      'Fixer ou approuver les cotisations',
      'Décider de la dissolution, de la fusion ou de toute opération fondamentale affectant l’existence ou le patrimoine',
      'Statuer sur les questions réservées par la loi ou les présents statuts',
    ],
    frequency: 'Session ordinaire au moins une fois par an ; sessions extraordinaires chaque fois que l’intérêt de l’association l’exige.',
    quorum: 'La moitié plus un des membres effectifs en règle, présents ou régulièrement représentés.',
    decisions:
      'Majorité des voix exprimées pour les décisions ordinaires. Deux tiers des membres effectifs présents ou représentés pour la modification des statuts et, lorsque la loi l’exige, pour la dissolution.',
    isStatutory: true,
    sources: ['S art. 20', 'S art. 21', 'S art. 22', 'S art. 23', 'S art. 24', 'S art. 25', 'S art. 47', 'S art. 48', 'RI art. 14'],
  },
  {
    id: 'conseil-administration',
    name: 'Conseil d’administration',
    role: 'Organe de gouvernance et d’exécution stratégique de l’association.',
    composition:
      'Dix membres élus parmi les membres effectifs par l’Assemblée générale, pour un mandat de trois ans renouvelable une fois. Des fonctions techniques, commissions ou responsables thématiques peuvent être créés en dehors de ce nombre statutaire.',
    powers: [
      'Mettre en œuvre les orientations et décisions de l’Assemblée générale',
      'Approuver les plans opérationnels, projets et partenariats dans les limites de ses pouvoirs',
      'Superviser la gestion administrative, financière, programmatique et institutionnelle',
      'Préparer le budget, les rapports d’activités, les comptes annuels et les propositions stratégiques',
      'Veiller à la conformité de l’association avec ses statuts, les lois applicables et ses politiques internes',
      'Assurer la protection des personnes, des biens, des données et de la réputation de l’association',
      'Proposer à l’Assemblée générale toute modification statutaire ou décision stratégique majeure',
      'Créer les commissions, départements et groupes de travail nécessaires au fonctionnement',
      'Représenter l’association ou organiser sa représentation auprès des autorités, partenaires et tiers',
    ],
    frequency: 'Au moins une fois par trimestre et chaque fois que nécessaire, sur convocation du Président ou à la demande d’au moins un tiers de ses membres.',
    quorum: 'La moitié plus un des administrateurs en fonction, présents ou participant valablement.',
    decisions:
      'Majorité des voix des membres présents, sauf majorité spéciale prévue par les statuts ou le règlement intérieur. Réunions en présentiel, à distance ou hybrides.',
    isStatutory: true,
    sources: ['S art. 20', 'S art. 27', 'S art. 28', 'S art. 29', 'S art. 30', 'RI art. 20'],
  },
];

/**
 * Commissions, départements et groupes de travail : structures techniques possibles,
 * explicitement PAS des organes statutaires (S art. 20, RI art. 34, 35).
 */
export const technicalStructures = {
  statement:
    'Le Conseil d’administration peut créer des commissions, départements ou groupes de travail pour soutenir l’exécution des programmes. Ils n’ont pas la qualité d’organes statutaires sauf modification expresse des statuts.',
  mandate:
    'Chaque structure technique reçoit un mandat précisant son objet, son responsable, sa durée éventuelle, ses livrables et son mode de compte rendu. Les responsables rendent compte au Coordinateur ou directement au Conseil d’administration selon leur mandat.',
  /** Aucune commission n'est attestée par les documents — docs/11 §3.3. */
  existing: [] as string[],
  sources: ['S art. 20', 'RI art. 34', 'RI art. 35'],
};

/**
 * Les dix fonctions du Conseil d'administration, dans l'ordre de S art. 27.
 * `holder` ne contient que les trois noms de la déclaration finale des statuts ;
 * les sept autres postes ne sont pourvus d'aucun nom dans les documents.
 */
export const governanceOffices: GovernanceOffice[] = [
  {
    id: 'president', order: 1, title: 'Président', layer: 'governance',
    responsibility:
      'Principal représentant légal et institutionnel de SJCD ASBL. Convoque et préside les réunions du Conseil d’administration et, lorsqu’il y est habilité, les sessions de l’Assemblée générale. Veille à l’exécution des décisions, signe les actes officiels selon les règles internes et assure la protection des intérêts institutionnels.',
    limit:
      'Ne doit pas intervenir seul dans les actes financiers ou contractuels que les politiques internes soumettent à une double validation ou à une approbation du Conseil d’administration.',
    holder: 'MIBUTO Patrick', holderSource: 'S, déclaration finale',
    sources: ['S art. 27', 'S art. 31', 'S art. 43', 'RI art. 25', 'RI annexe 1'],
  },
  {
    id: 'vice-president', order: 2, title: 'Vice-président', layer: 'governance',
    responsibility:
      'Assiste le Président dans l’exercice de ses fonctions et le remplace en cas d’absence, d’empêchement ou de vacance temporaire. Peut recevoir des délégations spécifiques du Président ou du Conseil d’administration.',
    limit: 'Agit dans les limites des statuts et des délégations reçues.',
    holder: null, holderSource: null,
    sources: ['S art. 27', 'S art. 32', 'RI art. 26', 'RI annexe 1'],
  },
  {
    id: 'secretaire-general', order: 3, title: 'Secrétaire général', layer: 'administration',
    responsibility:
      'Assure la mémoire institutionnelle : gestion administrative et documentaire, registres, procès-verbaux, correspondance institutionnelle, conservation des documents officiels, suivi des décisions des organes et appui aux convocations. Veille à ce que les documents officiels soient correctement datés, identifiés et conservés.',
    limit: 'Coordination avec tous les organes.',
    holder: 'Vital ZAGABE Neophite', holderSource: 'S, déclaration finale',
    sources: ['S art. 27', 'S art. 33', 'RI art. 27', 'RI annexe 1'],
  },
  {
    id: 'secretaire-general-adjoint', order: 4, title: 'Secrétaire général adjoint', layer: 'administration',
    responsibility: 'Assiste le Secrétaire général et le remplace en cas d’absence ou d’empêchement.',
    limit: 'Ne remplace pas un autre poste sauf délégation expresse et temporaire décidée par l’organe compétent.',
    holder: null, holderSource: null,
    sources: ['S art. 27', 'S art. 33', 'RI art. 28', 'RI annexe 1'],
  },
  {
    id: 'tresorier', order: 5, title: 'Trésorier', layer: 'administration',
    responsibility:
      'Sous l’autorité du Conseil d’administration : suivi financier de l’association, préparation et suivi du budget, tenue ou supervision des documents comptables, conservation des justificatifs et présentation des rapports financiers.',
    limit: 'Séparation des tâches et contrôles internes ; respect du manuel financier.',
    holder: 'Nabindu ZAGABE', holderSource: 'S, déclaration finale',
    sources: ['S art. 27', 'S art. 34', 'RI art. 29', 'RI annexe 1'],
  },
  {
    id: 'tresorier-adjoint', order: 6, title: 'Trésorier adjoint', layer: 'administration',
    responsibility: 'Assiste le Trésorier et le remplace en cas d’absence ou d’empêchement.',
    limit:
      'Ne remplace pas le Conseiller, sauf délégation exceptionnelle sans transfert permanent de fonction. (Formulation de S art. 34 signalée comme ambiguë — docs/11 §5.5.)',
    holder: null, holderSource: null,
    sources: ['S art. 27', 'S art. 34', 'RI art. 30', 'RI annexe 1'],
  },
  {
    id: 'coordinateur', order: 7, title: 'Coordinateur', layer: 'operation',
    responsibility:
      'Assure la direction opérationnelle des activités et programmes sous l’autorité du Conseil d’administration. Coordonne les équipes, les activités, les calendriers, le suivi des objectifs et la mise en œuvre des projets approuvés. Veille à la qualité opérationnelle, à la coordination avec les partenaires et à la production des informations nécessaires au reporting.',
    limit:
      'N’est pas le représentant légal par défaut. Peut représenter l’association auprès des partenaires opérationnels sur mandat ou délégation écrite du Président ou du Conseil d’administration.',
    holder: null, holderSource: null,
    sources: ['S art. 27', 'S art. 35', 'RI art. 31', 'RI annexe 1'],
  },
  {
    id: 'porte-parole', order: 8, title: 'Porte-parole', layer: 'governance',
    responsibility:
      'Chargé de la communication institutionnelle et de la valorisation de l’image publique. Prépare ou supervise les communiqués, messages publics, relations avec les médias, contenus institutionnels et actions de visibilité. Veille à la cohérence du discours public et au respect des règles de confidentialité, de protection des données et d’utilisation de l’image des bénéficiaires.',
    limit: 'Ne prend aucun engagement juridique, financier ou politique au nom de l’association sans mandat exprès.',
    holder: null, holderSource: null,
    sources: ['S art. 27', 'S art. 36', 'RI art. 32', 'RI art. 58', 'RI annexe 1'],
  },
  {
    id: 'conseiller', order: 9, title: 'Conseiller', layer: 'governance',
    responsibility:
      'Apporte des avis stratégiques, institutionnels, techniques ou juridiques relevant de ses compétences. Contribue au respect de la bonne gouvernance et à l’anticipation des risques.',
    limit: 'Fonction consultative.',
    holder: null, holderSource: null,
    sources: ['S art. 27', 'S art. 37', 'RI art. 33', 'RI annexe 1'],
  },
  {
    id: 'conseiller-adjoint', order: 10, title: 'Conseiller adjoint', layer: 'governance',
    responsibility:
      'Assiste le Conseiller, participe au suivi des recommandations et le remplace en cas d’absence ou d’empêchement.',
    limit: 'Dans les limites de la mission qui lui est confiée.',
    holder: null, holderSource: null,
    sources: ['S art. 27', 'S art. 37', 'RI art. 33', 'RI annexe 1'],
  },
];

/** Mandat et fin des fonctions — S art. 28, 38 ; RI art. 24. */
export const mandateRules = {
  term: 'Trois ans, renouvelable une fois, sous réserve de la législation applicable.',
  election: 'Les membres du Conseil d’administration sont élus par l’Assemblée générale parmi les membres effectifs.',
  eligibility: 'Être membre effectif et remplir les conditions d’éligibilité fixées par les statuts et le règlement intérieur.',
  endOfTerm:
    'Démission par notification écrite, ou révocation par l’Assemblée générale pour faute grave, manquement aux obligations, conflit d’intérêts non déclaré, incapacité durable ou toute autre cause sérieuse dûment établie.',
  vacancy:
    'En cas de vacance temporaire, le Conseil peut organiser une délégation intérimaire entre ses membres. Toute vacance définitive est portée à la connaissance de l’Assemblée générale, qui procède au remplacement pour la durée restante du mandat. Aucune délégation ne peut contourner les compétences réservées à l’Assemblée générale.',
  /** Aucune date de début ou de fin de mandat n'est documentée — docs/11 §3.3. */
  currentMandateStart: null as string | null,
  currentMandateEnd: null as string | null,
  sources: ['S art. 28', 'S art. 38', 'RI art. 24'],
};

/** Fonctions publiées : les noms ne sortent que si l'interrupteur est vrai. */
export function publishedOffices(): GovernanceOffice[] {
  if (publishOfficeHolders) return governanceOffices;
  return governanceOffices.map(office => ({ ...office, holder: null, holderSource: null }));
}
