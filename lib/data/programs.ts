/**
 * Programmes — regroupement de S art. 6 (objet social) et S art. 9 (objectifs spécifiques).
 *
 * IMPORTANT : ce sont des DOMAINES D'INTERVENTION STATUTAIRES, pas des programmes
 * opérationnels en cours. Aucun programme nommé, budgété, daté ou territorialisé
 * n'existe dans les documents (docs/11 §3.4). Chaque entrée cite ses articles.
 */
import type { ProgramDomain } from '@/lib/models';

export const programs: ProgramDomain[] = [
  {
    id: 'autonomie-jeunesse',
    slug: 'developpement-et-autonomisation',
    title: 'Développement et autonomisation de la jeunesse',
    summary:
      'Contribuer au développement intégral des jeunes en renforçant leurs capacités, leur responsabilité sociale, leur autonomie et leur participation au développement des communautés.',
    objectives: [
      { text: 'Renforcer les connaissances, compétences et aptitudes des jeunes pour leur permettre de faire des choix responsables et de participer activement à la société', sources: ['S art. 9.1'] },
      { text: 'Promouvoir le leadership, l’éducation continue, l’esprit critique, la responsabilité, l’intégrité et l’engagement communautaire', sources: ['S art. 9.6'] },
      { text: 'Contribuer à l’épanouissement et au développement intégral de la jeunesse', sources: ['S art. 9'] },
    ],
    audiences: [
      { text: 'Jeunes de la communauté', sources: ['S art. 6', 'S art. 9'] },
      { text: 'Membres effectifs et participants aux activités de l’association', sources: ['S art. 12', 'RI art. 2'] },
    ],
    activityTypes: [
      { text: 'Formations, ateliers et activités de développement des compétences', sources: ['S art. 11', 'RI art. 39'] },
      { text: 'Sessions de mentorat et apprentissages pratiques', sources: ['RI art. 39'] },
      { text: 'Débats, échanges et activités de participation', sources: ['S art. 11', 'RI art. 37'] },
    ],
    territory: null,
    operationalStatus: 'statutory-domain',
    sources: ['S art. 6 a', 'S art. 9.1', 'S art. 9.6'],
  },
  {
    id: 'education-formation',
    slug: 'education-et-formation',
    title: 'Éducation, formation et développement des compétences',
    summary:
      'Développer l’éducation et les compétences des jeunes, y compris les compétences de vie, l’employabilité et l’entrepreneuriat, et produire des connaissances utiles aux communautés.',
    objectives: [
      { text: 'Développer les compétences de vie, le leadership, l’employabilité et l’entrepreneuriat', sources: ['S art. 6 a'] },
      { text: 'Produire et diffuser des connaissances, organiser des formations, débats, ateliers, conférences et campagnes de sensibilisation', sources: ['S art. 9.8'] },
      { text: 'Rechercher des solutions adaptées aux réalités locales', sources: ['S art. 10.8'] },
    ],
    audiences: [
      { text: 'Jeunes en parcours de formation', sources: ['S art. 6 a'] },
      { text: 'Jeunes en recherche d’employabilité ou d’initiative économique', sources: ['S art. 6 a'] },
    ],
    activityTypes: [
      { text: 'Formations et ateliers', sources: ['S art. 11'] },
      { text: 'Conférences, débats et campagnes de sensibilisation', sources: ['S art. 11', 'S art. 9.8'] },
      { text: 'Publications et supports de sensibilisation', sources: ['S art. 11'] },
      { text: 'Études, recherches et documentation', sources: ['S art. 6 g', 'S art. 11'] },
    ],
    territory: null,
    operationalStatus: 'statutory-domain',
    sources: ['S art. 6 a', 'S art. 6 g', 'S art. 9.1', 'S art. 9.8'],
  },
  {
    id: 'leadership-expression',
    slug: 'leadership-et-prise-de-parole',
    title: 'Leadership, confiance en soi et prise de parole en public',
    summary:
      'Développer la confiance en soi, les capacités d’expression orale, de prise de parole en public et de participation citoyenne des jeunes.',
    objectives: [
      { text: 'Développer la confiance en soi, les capacités d’expression orale, de prise de parole en public et de participation citoyenne des jeunes', sources: ['S art. 6 b', 'S art. 9.3'] },
      { text: 'Promouvoir le leadership, l’esprit critique, la responsabilité et l’intégrité', sources: ['S art. 9.6'] },
      { text: 'Permettre à chacun de prendre la parole dans des échanges courtois, factuels et équilibrés', sources: ['RI art. 38'] },
    ],
    audiences: [
      { text: 'Jeunes souhaitant développer leur expression et leur participation', sources: ['S art. 6 b'] },
      { text: 'Participants aux réunions et activités associatives', sources: ['RI art. 36', 'RI art. 37'] },
    ],
    activityTypes: [
      { text: 'Activités de prise de parole et de participation citoyenne', sources: ['S art. 6 b', 'RI art. 37.4'] },
      { text: 'Débats respectueux et échanges encadrés par un animateur ou un modérateur', sources: ['RI art. 38'] },
      { text: 'Activités de leadership et sessions de mentorat', sources: ['RI art. 39'] },
    ],
    territory: null,
    operationalStatus: 'statutory-domain',
    sources: ['S art. 6 b', 'S art. 9.3', 'S art. 9.6', 'RI art. 38', 'RI art. 39'],
  },
  {
    id: 'sante-sexuelle-reproductive',
    slug: 'sante-sexuelle-et-reproductive',
    title: 'Santé sexuelle et reproductive',
    summary:
      'Renforcer l’accès des jeunes à une information fiable en matière de santé sexuelle et reproductive, et prévenir les infections sexuellement transmissibles, les grossesses précoces ou non désirées et les comportements à risque.',
    objectives: [
      { text: 'Sensibiliser les jeunes à la santé sexuelle et reproductive et à la prévention des infections sexuellement transmissibles, des grossesses précoces ou non désirées et des comportements à risque', sources: ['S art. 6 c', 'S art. 9.2'] },
      { text: 'Renforcer l’accès à une information fiable en matière de santé sexuelle et reproductive', sources: ['S art. 8'] },
      { text: 'Intervenir dans le respect des normes professionnelles applicables', sources: ['S art. 6 c', 'RI art. 39'] },
    ],
    audiences: [
      { text: 'Jeunes, y compris les jeunes exposés aux comportements à risque', sources: ['S art. 6 c'] },
      { text: 'Personnes vulnérables concernées par les actions de prévention', sources: ['S art. 6 d'] },
    ],
    activityTypes: [
      { text: 'Information, sensibilisation et prévention', sources: ['S art. 6 c'] },
      { text: 'Formations animées selon des standards professionnels adaptés aux domaines sensibles', sources: ['RI art. 39'] },
      { text: 'Campagnes et activités communautaires', sources: ['S art. 11'] },
    ],
    territory: null,
    operationalStatus: 'statutory-domain',
    sources: ['S art. 6 c', 'S art. 8', 'S art. 9.2', 'RI art. 39'],
  },
  {
    id: 'protection-personnes-vulnerables',
    slug: 'protection-et-soutien',
    title: 'Protection et soutien aux personnes vulnérables',
    summary:
      'Protéger, accompagner et inclure les personnes vulnérables, et prévenir la violence, la délinquance juvénile, les abus, l’exploitation et les discriminations.',
    objectives: [
      { text: 'Protéger, accompagner et inclure les enfants, les jeunes en situation de vulnérabilité, les veuves, les orphelins et autres personnes exposées à l’exclusion ou à la violence', sources: ['S art. 6 d'] },
      { text: 'Prévenir et réduire la violence, la délinquance juvénile, les abus, l’exploitation et les discriminations', sources: ['S art. 6 e', 'S art. 9.4'] },
      { text: 'Soutenir les personnes vulnérables au moyen d’actions sociales, éducatives, psychosociales, matérielles ou d’orientation vers des services compétents', sources: ['S art. 9.5'] },
      { text: 'Appliquer un principe de tolérance zéro à l’égard des abus, de l’exploitation, du harcèlement et des violences', sources: ['RI art. 44'] },
    ],
    audiences: [
      { text: 'Enfants et jeunes en situation de vulnérabilité', sources: ['S art. 6 d'] },
      { text: 'Veuves, orphelins et personnes exposées à l’exclusion ou à la violence', sources: ['S art. 6 d'] },
    ],
    activityTypes: [
      { text: 'Actions sociales, éducatives et psychosociales', sources: ['S art. 9.5'] },
      { text: 'Orientation vers des services compétents', sources: ['S art. 9.5'] },
      { text: 'Prévention, signalement et traitement des plaintes, confidentialité et référencement', sources: ['S art. 45', 'RI art. 45', 'RI art. 46'] },
    ],
    territory: null,
    operationalStatus: 'statutory-domain',
    sources: ['S art. 6 d', 'S art. 6 e', 'S art. 9.4', 'S art. 9.5', 'S art. 45', 'RI art. 44'],
  },
  {
    id: 'developpement-communautaire',
    slug: 'developpement-communautaire',
    title: 'Développement communautaire et engagement citoyen',
    summary:
      'Soutenir le développement communautaire, la mobilisation citoyenne, la solidarité et les initiatives sociales ou économiques au bénéfice des communautés.',
    objectives: [
      { text: 'Soutenir le développement communautaire, la mobilisation citoyenne, la solidarité et les initiatives sociales ou économiques', sources: ['S art. 6 f'] },
      { text: 'Soutenir des projets sociaux, éducatifs, économiques ou environnementaux favorisant le développement local', sources: ['S art. 9.7'] },
      { text: 'Contribuer à un environnement favorable à l’inclusion, à la cohésion sociale et au respect de la dignité humaine', sources: ['S art. 9.10'] },
      { text: 'Mettre en réseau et coopérer avec des acteurs poursuivant des objectifs compatibles', sources: ['S art. 6 h', 'S art. 9.9'] },
    ],
    audiences: [
      { text: 'Communautés locales', sources: ['S art. 6 f'] },
      { text: 'Acteurs publics, privés, associatifs et académiques', sources: ['S art. 9.9'] },
    ],
    activityTypes: [
      { text: 'Activités communautaires et mobilisation citoyenne', sources: ['S art. 6 f', 'S art. 11'] },
      { text: 'Initiatives sociales ou économiques locales', sources: ['S art. 6 f', 'S art. 9.7'] },
      { text: 'Mise en réseau, coopération et partenariats', sources: ['S art. 6 h', 'S art. 44', 'RI art. 42'] },
    ],
    territory: null,
    operationalStatus: 'statutory-domain',
    sources: ['S art. 6 f', 'S art. 6 h', 'S art. 9.7', 'S art. 9.9', 'S art. 9.10'],
  },
];

/**
 * Domaines statutaires transversaux — S art. 6 g) et h). Ce ne sont pas des programmes
 * distincts : ils traversent les six domaines ci-dessus (docs/11 §2.1).
 */
export const transversalDomains = [
  {
    title: 'Recherche, documentation et production de connaissances',
    description:
      'Recherche, documentation, sensibilisation, production de connaissances et partage de bonnes pratiques en lien avec les domaines d’intervention de l’association.',
    sources: ['S art. 6 g'],
  },
  {
    title: 'Mise en réseau et coopération',
    description:
      'Mise en réseau, coopération, partenariats et participation à des initiatives nationales, régionales ou internationales compatibles avec l’objet social.',
    sources: ['S art. 6 h', 'S art. 9.9', 'S art. 44'],
  },
];

/**
 * Rencontres régulières de jeunes — RI art. 36 à 39.
 *
 * ATTENTION : le mot « samedi » n'apparaît nulle part dans les deux documents. RI art. 36
 * dit que SJCD « peut tenir » des rencontres « hebdomadaires ou thématiques » et renvoie
 * le calendrier au Coordinateur. Ni jour, ni heure, ni lieu ne sont documentés : ils sont
 * `null` et affichés comme à confirmer, jamais devinés (docs/11 §5.3).
 */
export const weeklyGathering = {
  title: 'Rencontres de jeunes',
  /** Non documenté — ne pas remplir sans source. */
  day: null as string | null,
  time: null as string | null,
  place: null as string | null,
  statutoryBasis:
    'SJCD peut tenir des réunions régulières de membres, notamment des rencontres hebdomadaires ou thématiques. Le calendrier détaillé est arrêté périodiquement par le Coordinateur en concertation avec le Conseil d’administration.',
  nature:
    'Espace d’information, de formation, de partage, de débat constructif et de préparation des activités.',
  /** Règle explicite de RI art. 36 al. 2 : pas de confusion avec un organe statutaire. */
  notAStatutoryBody:
    'Ces réunions ne peuvent se substituer aux organes statutaires pour les décisions qui relèvent de leur compétence exclusive. Elles ne sont ni l’Assemblée générale, ni le Conseil d’administration, ni une réunion statutaire.',
  purposes: [
    { text: 'Dialogue et débat respectueux', sources: ['RI art. 36', 'RI art. 37.5', 'RI art. 38'] },
    { text: 'Formation, enseignement et partage de connaissances', sources: ['RI art. 36', 'RI art. 37.3', 'RI art. 39'] },
    { text: 'Sensibilisation', sources: ['RI art. 36', 'S art. 9.8'] },
    { text: 'Développement personnel', sources: ['RI art. 37.4', 'RI art. 39'] },
    { text: 'Leadership', sources: ['RI art. 39', 'S art. 9.6'] },
    { text: 'Prise de parole', sources: ['RI art. 37.4', 'RI art. 38', 'S art. 6 b'] },
    { text: 'Santé sexuelle et reproductive', sources: ['RI art. 39', 'S art. 6 c'] },
    { text: 'Citoyenneté et participation', sources: ['RI art. 37.4', 'S art. 9.3'] },
    { text: 'Échanges autour des problématiques de la jeunesse', sources: ['RI art. 36', 'RI art. 37.6'] },
  ],
  /** RI art. 37 — déroulement recommandé en 8 temps, littéral. */
  recommendedAgenda: [
    { step: 1, text: 'Accueil et vérification des présences', sources: ['RI art. 37.1'] },
    { step: 2, text: 'Présentation des actualités et annonces', sources: ['RI art. 37.2'] },
    { step: 3, text: 'Enseignement, formation, exposé ou partage de connaissances', sources: ['RI art. 37.3'] },
    { step: 4, text: 'Activité de développement des compétences ou de participation citoyenne', sources: ['RI art. 37.4'] },
    { step: 5, text: 'Échanges et débat respectueux', sources: ['RI art. 37.5'] },
    { step: 6, text: 'Collecte des suggestions et préoccupations', sources: ['RI art. 37.6'] },
    { step: 7, text: 'Rappel des responsabilités et prochaines échéances', sources: ['RI art. 37.7'] },
    { step: 8, text: 'Clôture de la séance dans le respect de la liberté de conscience et des convictions de chacun', sources: ['RI art. 37.8'] },
  ],
  conductRules:
    'Les discussions doivent rester courtoises, factuelles et orientées vers l’apprentissage ou la recherche de solutions. L’animateur ou le modérateur peut limiter le temps de parole afin de permettre une participation équilibrée. Les attaques personnelles, intimidations, humiliations, discriminations et perturbations volontaires ne sont pas admises.',
  sources: ['RI art. 36', 'RI art. 37', 'RI art. 38', 'RI art. 39'],
};

/** État vide affiché partout où une donnée opérationnelle manque. */
export const programEmptyState = {
  territory:
    'Aucune zone d’intervention n’est documentée dans les statuts ni le règlement intérieur au-delà du siège social. Les territoires seront publiés lorsqu’ils seront attestés.',
  status:
    'Domaine d’intervention prévu par les statuts. Ce n’est pas l’annonce d’un programme opérationnel en cours : aucun programme nommé, budgété ou daté ne figure dans les documents disponibles.',
};
