/**
 * Source de vérité institutionnelle — extraite ligne par ligne des deux documents
 * administratifs de SJCD ASBL (documents/administratifs/).
 *
 * S  = STATUTS_SJCD_ASBL_Version_Professionnelle_2026.pdf
 * RI = REGLEMENT_INTERIEUR_SJCD_ASBL_Version_Professionnelle_2026.pdf
 *
 * RÈGLE : chaque entrée porte la référence littérale de son article. Aucune donnée
 * n'est ajoutée, déduite ni complétée. Ce qui manque est `null`, jamais une valeur
 * plausible. Voir docs/11_Analyse_Statuts_RI.md.
 */

export type SourceRef = string; // ex. 'S art. 6', 'RI art. 36'

/** Une affirmation documentée, avec ses articles. */
export interface Documented<T> {
  value: T;
  sources: SourceRef[];
}

/**
 * Statut juridique réel des documents. Les deux textes se déclarent non définitifs :
 * « soumis à relecture juridique et notariale avant adoption et dépôt » (S, page de garde),
 * dates d'adoption et signatures du RI laissées en blanc (RI art. 76 et page d'adoption).
 * Voir docs/11 §0 et §5.
 */
export const legalStatus = {
  /** Aucune personnalité juridique opposable n'est attestée par les documents. */
  personalityConfirmed: false,
  /** Aucun numéro d'enregistrement n'existe dans les documents. */
  registrationNumber: null as string | null,
  registrationAuthority: null as string | null,
  /** Adoption formelle contestée entre la page de garde et l'acte d'adoption — docs/11 §5.1. */
  adoptionConfirmed: false,
  adoptionDate: null as string | null,
  notarized: false,
  filed: false,
  statement:
    'Association sans but lucratif de droit congolais. Statuts et règlement intérieur en cours de finalisation juridique : adoption formelle, notarisation et dépôt non attestés par les documents disponibles.',
  sources: ['S page de garde', 'S art. 49', 'RI art. 76'] satisfies SourceRef[],
};

export const identity = {
  officialName: {
    value: 'Sanctuaire de Jeunes Chandelier pour le Développement',
    sources: ['S art. 1'],
  } satisfies Documented<string>,
  acronym: { value: 'SJCD ASBL', sources: ['S art. 1'] } satisfies Documented<string>,
  legalForm: {
    value: 'Association sans but lucratif de droit congolais',
    sources: ['S art. 1', 'S art. 2'],
  } satisfies Documented<string>,
  character: {
    value: 'apolitique, non confessionnelle, à caractère social, éducatif et de développement communautaire',
    sources: ['S art. 2'],
  } satisfies Documented<string>,
  registeredOffice: {
    value: 'Ville d’Uvira, Province du Sud-Kivu, République démocratique du Congo',
    sources: ['S art. 3'],
  } satisfies Documented<string>,
  /** Adresse précise (rue, quartier, commune) : absente des documents — docs/11 §3.1. */
  streetAddress: null as string | null,
  country: { value: 'République démocratique du Congo', sources: ['S art. 3'] } satisfies Documented<string>,
  duration: { value: 'indéterminée', sources: ['S art. 5'] } satisfies Documented<string>,
  fiscalYear: { value: 'du 1er janvier au 31 décembre', sources: ['S art. 40'] } satisfies Documented<string>,
  nonProfit: {
    value: 'Aucun partage de bénéfices entre les membres. Tout excédent éventuel est réinvesti dans la réalisation de l’objet social.',
    sources: ['S art. 2', 'S art. 42'],
  } satisfies Documented<string>,
  /**
   * Création : le préambule déclare le 23 février 2022, mais l'acte d'adoption porte une
   * « Assemblée générale constitutive » au 15/06/2023. Contradiction non résolue — docs/11 §5.2.
   * Aucune des deux dates n'est publiée comme date de création officielle.
   */
  creationYear: { value: '2022', sources: ['S préambule'] } satisfies Documented<string>,
  creationDateOfficial: null as string | null,
  creationDateDiscrepancy:
    'Le préambule des statuts déclare une création au 23 février 2022, tandis que l’acte d’adoption mentionne une Assemblée générale constitutive au 15 juin 2023. Cette divergence n’est pas résolue par les documents.',
};

/** S art. 6 — objet social principal, littéral. */
export const socialPurpose = {
  value:
    'Contribuer au développement intégral de la jeunesse et à l’amélioration durable des conditions sociales et communautaires, notamment par l’éducation, le développement des compétences, la prévention, l’accompagnement et l’engagement citoyen.',
  sources: ['S art. 6'],
} satisfies Documented<string>;

/** S art. 6 a) à h) — les huit domaines d'intervention statutaires, dans l'ordre du texte. */
export const statutoryDomains: Documented<string>[] = [
  { value: 'Éducation et développement des compétences des jeunes, y compris les compétences de vie, le leadership, l’employabilité et l’entrepreneuriat', sources: ['S art. 6 a'] },
  { value: 'Développement de la confiance en soi, des capacités d’expression orale, de prise de parole en public et de participation citoyenne des jeunes', sources: ['S art. 6 b'] },
  { value: 'Santé sexuelle et reproductive, information et prévention relatives aux infections sexuellement transmissibles, aux grossesses précoces ou non désirées et aux comportements à risque', sources: ['S art. 6 c'] },
  { value: 'Protection, accompagnement et inclusion des personnes vulnérables, notamment les enfants, les jeunes en situation de vulnérabilité, les veuves, les orphelins et autres personnes exposées à l’exclusion ou à la violence', sources: ['S art. 6 d'] },
  { value: 'Prévention et réduction de la violence, de la délinquance juvénile, des abus, de l’exploitation, des discriminations et des autres facteurs compromettant l’épanouissement des jeunes', sources: ['S art. 6 e'] },
  { value: 'Développement communautaire, mobilisation citoyenne, solidarité et initiatives sociales ou économiques au bénéfice des communautés', sources: ['S art. 6 f'] },
  { value: 'Recherche, documentation, sensibilisation, production de connaissances et partage de bonnes pratiques en lien avec les domaines d’intervention de l’association', sources: ['S art. 6 g'] },
  { value: 'Mise en réseau, coopération, partenariats et participation à des initiatives nationales, régionales ou internationales compatibles avec l’objet social', sources: ['S art. 6 h'] },
];

export const vision = {
  value:
    'Contribuer à l’émergence d’une jeunesse éclairée, responsable, autonome, résiliente et capable de transformer positivement son environnement.',
  sources: ['S art. 7'],
} satisfies Documented<string>;

export const visionDevelopment = {
  value:
    'Voir des jeunes exercer un leadership responsable, promouvoir la dignité humaine, participer à la vie de leurs communautés et contribuer au développement social, économique et culturel de la République démocratique du Congo, tout en restant ouverts aux échanges et à la coopération internationale.',
  sources: ['S art. 7'],
} satisfies Documented<string>;

export const mission = {
  positioning: {
    value:
      'Organisation de développement de la jeunesse, fondée sur des valeurs d’intégrité, de dignité humaine, de solidarité et de responsabilité, respectueuse de la diversité des convictions.',
    sources: ['S art. 8'],
  } satisfies Documented<string>,
  core: {
    value:
      'Créer et soutenir des espaces d’éducation, de développement des compétences, de prévention, de protection et de participation permettant aux jeunes de devenir des acteurs responsables du changement social.',
    sources: ['S art. 8'],
  } satisfies Documented<string>,
  complementary: {
    value:
      'Renforcer l’accès à une information fiable en matière de santé sexuelle et reproductive, promouvoir la protection des personnes vulnérables et développer des initiatives communautaires durables.',
    sources: ['S art. 8'],
  } satisfies Documented<string>,
};

export const globalObjective = {
  value:
    'Contribuer à l’épanouissement et au développement intégral de la jeunesse en renforçant ses capacités, sa responsabilité sociale, son autonomie et sa participation au développement des communautés.',
  sources: ['S art. 9'],
} satisfies Documented<string>;

/** S art. 9.1 à 9.10 — les dix objectifs spécifiques, littéraux. */
export const specificObjectives: Documented<string>[] = [
  { value: 'Renforcer les connaissances, compétences et aptitudes des jeunes pour leur permettre de faire des choix responsables et de participer activement à la société', sources: ['S art. 9.1'] },
  { value: 'Sensibiliser les jeunes à la santé sexuelle et reproductive et à la prévention des infections sexuellement transmissibles, des grossesses précoces ou non désirées et des comportements à risque', sources: ['S art. 9.2'] },
  { value: 'Développer la confiance en soi, les capacités d’expression orale, de prise de parole en public et de participation citoyenne des jeunes', sources: ['S art. 9.3'] },
  { value: 'Prévenir la violence, la délinquance, les abus, l’exploitation et les discriminations affectant les jeunes ou les personnes vulnérables', sources: ['S art. 9.4'] },
  { value: 'Soutenir les personnes vulnérables au moyen d’actions sociales, éducatives, psychosociales, matérielles ou d’orientation vers des services compétents', sources: ['S art. 9.5'] },
  { value: 'Promouvoir le leadership, l’éducation continue, l’esprit critique, la responsabilité, l’intégrité et l’engagement communautaire', sources: ['S art. 9.6'] },
  { value: 'Soutenir des projets sociaux, éducatifs, économiques ou environnementaux favorisant le développement local', sources: ['S art. 9.7'] },
  { value: 'Produire et diffuser des connaissances, organiser des formations, débats, ateliers, conférences, campagnes et activités de sensibilisation', sources: ['S art. 9.8'] },
  { value: 'Renforcer les partenariats et la coopération avec les acteurs publics, privés, associatifs, académiques et internationaux poursuivant des objectifs compatibles', sources: ['S art. 9.9'] },
  { value: 'Contribuer à la création d’un environnement favorable à l’inclusion, à la cohésion sociale et au respect de la dignité humaine', sources: ['S art. 9.10'] },
];

/**
 * S art. 10 — les dix principes et valeurs. La grille affichée regroupe ces dix entrées
 * sans en ajouter (docs/11 §2.2) : chaque regroupement cite ses numéros.
 */
export const principles: Documented<string>[] = [
  { value: 'Intégrité et honnêteté dans la conduite de toutes les activités', sources: ['S art. 10.1'] },
  { value: 'Dignité humaine, égalité, respect et non-discrimination', sources: ['S art. 10.2'] },
  { value: 'Solidarité, responsabilité et service de la communauté', sources: ['S art. 10.3'] },
  { value: 'Liberté de conscience et respect de la diversité des convictions', sources: ['S art. 10.4'] },
  { value: 'Participation des jeunes et responsabilisation des bénéficiaires', sources: ['S art. 10.5'] },
  { value: 'Transparence, redevabilité et bonne gouvernance', sources: ['S art. 10.6'] },
  { value: 'Protection contre les abus, l’exploitation, le harcèlement et la violence', sources: ['S art. 10.7'] },
  { value: 'Apprentissage continu, innovation et recherche de solutions adaptées aux réalités locales', sources: ['S art. 10.8'] },
  { value: 'Neutralité politique de l’association dans l’exercice de ses activités statutaires', sources: ['S art. 10.9'] },
  { value: 'Respect des lois, de l’ordre public et des bonnes mœurs', sources: ['S art. 10.10'] },
];

/**
 * Cadrage exact de la dimension spirituelle — S préambule et RI art. 37.8.
 * SJCD n'est pas une organisation confessionnelle et ne doit jamais être présentée
 * comme telle (docs/11 §1.7).
 */
export const convictions = {
  nonConfessional: { value: 'apolitique, non confessionnelle', sources: ['S art. 2'] } satisfies Documented<string>,
  noReligiousCondition: {
    value:
      'L’association reconnaît la diversité des convictions et ne subordonne pas l’accès à ses activités à l’appartenance à une religion déterminée.',
    sources: ['S préambule'],
  } satisfies Documented<string>,
  mayMobilize: {
    value:
      'L’association peut, dans le cadre de ses activités éducatives et communautaires, mobiliser des ressources spirituelles, éthiques, culturelles, philosophiques ou religieuses compatibles avec ses valeurs et avec les lois de la République démocratique du Congo, dans un esprit de respect mutuel, de liberté de conscience et de non-discrimination.',
    sources: ['S préambule'],
  } satisfies Documented<string>,
  closingRule: {
    value: 'Toute réunion associative est close dans le respect de la liberté de conscience et des convictions de chacun.',
    sources: ['RI art. 37.8'],
  } satisfies Documented<string>,
};

/** S art. 11 — moyens d'action. Formulation facultative (« peut notamment »), jamais acquise. */
export const meansOfAction = {
  value:
    'Organiser des formations, ateliers, conférences, débats, campagnes et activités communautaires ; mettre en œuvre des projets et programmes ; mener des études et recherches ; produire des publications et supports de sensibilisation ; développer des plateformes et outils éducatifs ; établir des partenariats ; mobiliser des ressources ; entreprendre toute activité licite liée à l’objet social.',
  sources: ['S art. 11'],
  /** Les activités génératrices de revenus demeurent accessoires (S art. 11, al. 2). */
  incomeRule: {
    value:
      'Les activités génératrices de revenus éventuellement organisées demeurent accessoires à l’objet social. Les recettes sont exclusivement affectées à la réalisation des objectifs et ne peuvent faire l’objet d’une distribution entre les membres.',
    sources: ['S art. 11'],
  } satisfies Documented<string>,
};

/** S art. 12 à 19, RI art. 5 à 13 — catégories de membres. */
export const membership = {
  categories: [
    {
      name: 'Membres effectifs',
      description:
        'Personnes admises conformément aux statuts, participant à la vie de l’association, remplissant leurs obligations et disposant du droit de vote dans les conditions statutaires.',
      voting: 'Chaque membre effectif dispose d’une voix.',
      sources: ['S art. 12', 'S art. 14'],
    },
    {
      name: 'Membres d’honneur',
      description:
        'Personnes physiques ou morales auxquelles l’association reconnaît une contribution, un soutien, une expertise ou un mérite particulier.',
      voting:
        'Pas automatiquement de droit de vote ; ne peuvent être chargés de l’administration ou de la direction du seul fait de cette qualité. Voix consultative possible en Assemblée générale.',
      sources: ['S art. 12', 'S art. 21', 'RI art. 13'],
    },
  ],
  admission: {
    value: 'Toute personne qui adhère aux objectifs et aux valeurs de SJCD ASBL peut solliciter son admission. Le Conseil d’administration statue, dans un délai raisonnable, sur la demande enregistrée par le Secrétaire général.',
    sources: ['S art. 13', 'RI art. 5', 'RI art. 6'],
  } satisfies Documented<string>,
  /** Montant non chiffré dans les documents — docs/11 §3.3. */
  feeAmount: null as string | null,
  feeRule: {
    value:
      'Le montant, la périodicité et les modalités de paiement des cotisations sont fixés par l’Assemblée générale sur proposition du Conseil d’administration. Une exonération totale ou partielle peut être accordée, notamment pour des raisons sociales ou pour favoriser l’inclusion de jeunes vulnérables.',
    sources: ['S art. 16', 'RI art. 10'],
  } satisfies Documented<string>,
  /** S art. 13 renvoie au « minimum légal requis » sans le chiffrer. */
  memberCount: null as number | null,
  noPropertyRight: {
    value:
      'Le membre démissionnaire ou exclu ne dispose d’aucun droit individuel sur les fonds, biens ou réserves de SJCD ASBL et ne peut réclamer le remboursement des cotisations déjà versées.',
    sources: ['S art. 19'],
  } satisfies Documented<string>,
};

/**
 * Ressources — S art. 39. Ce sont des CATÉGORIES de ressources possibles,
 * jamais des financements obtenus. Aucun bailleur, aucun montant — docs/11 §3.6.
 */
export const resourceCategories: Documented<string>[] = [
  { value: 'Cotisations des membres', sources: ['S art. 39.1'] },
  { value: 'Dons, legs et libéralités autorisés', sources: ['S art. 39.2'] },
  { value: 'Subventions, financements et appuis publics ou privés', sources: ['S art. 39.3'] },
  { value: 'Contributions de partenaires, fondations, institutions nationales ou internationales', sources: ['S art. 39.4'] },
  { value: 'Recettes d’activités génératrices de revenus accessoires compatibles avec l’objet social', sources: ['S art. 39.5'] },
  { value: 'Aides matérielles, équipements et autres contributions en nature', sources: ['S art. 39.6'] },
  { value: 'Toute autre ressource licite compatible avec la nature non lucrative de l’association', sources: ['S art. 39.7'] },
];

/**
 * Ambition territoriale — S art. 3, 4 ; RI art. 69, 70.
 * Les phases 2 et 3 sont des DISPOSITIONS STATUTAIRES, pas des réalisations.
 * Aucune antenne ni aucun bureau n'est documenté — docs/11 §2.5, §4.
 */
export const territorialAmbition = {
  phases: [
    {
      phase: 'Phase 1',
      title: 'Ancrage local',
      status: 'Siège statutaire',
      statement: 'Siège social établi dans la ville d’Uvira, Province du Sud-Kivu.',
      sources: ['S art. 3'],
    },
    {
      phase: 'Phase 2',
      title: 'Développement national',
      status: 'Disposition statutaire — non réalisée',
      statement:
        'Vocation nationale et possibilité d’exercer des activités sur l’ensemble du territoire de la République démocratique du Congo, en fonction des capacités institutionnelles, techniques et financières. Le Conseil d’administration peut créer des bureaux, antennes, représentations ou points focaux dans d’autres provinces.',
      sources: ['S art. 3', 'S art. 4', 'RI art. 69'],
    },
    {
      phase: 'Phase 3',
      title: 'Ouverture internationale',
      status: 'Disposition statutaire — non réalisée',
      statement:
        'Possibilité de développer, à moyen ou long terme, des programmes, partenariats ou représentations dans d’autres pays, sous réserve de la législation applicable, des autorisations éventuelles et de la conservation de l’autonomie statutaire. Toute implantation permanente à l’étranger exige une étude de conformité juridique, fiscale, financière et institutionnelle.',
      sources: ['S art. 4', 'RI art. 70'],
    },
  ],
  disclaimer:
    'Les phases 2 et 3 sont des facultés prévues par les statuts, pas des activités en cours. Aucun bureau, antenne ou représentation hors d’Uvira n’est attesté par les documents disponibles.',
};

/** RI préambule — hiérarchie normative interne. */
export const normativeHierarchy = [
  { level: 1, document: 'Législation applicable', role: 'Normes juridiques impératives', sources: ['RI préambule'] },
  { level: 2, document: 'Statuts', role: 'Acte constitutif et cadre supérieur de l’association', sources: ['RI préambule', 'S art. 49'] },
  { level: 3, document: 'Règlement intérieur', role: 'Règles générales de fonctionnement interne', sources: ['RI préambule'] },
  { level: 4, document: 'Politiques et procédures', role: 'Règles spécialisées : safeguarding, finances, conflits d’intérêts, communication, données', sources: ['RI préambule'] },
];

/**
 * Documents internes complémentaires annoncés par S annexe B et RI annexe 3.
 * Seul le règlement intérieur existe dans le dépôt — et il n'est pas adopté (docs/11 §3.5).
 */
export const plannedInternalDocuments: { title: string; present: boolean; sources: SourceRef[] }[] = [
  { title: 'Règlement intérieur', present: true, sources: ['S annexe B.1', 'RI'] },
  { title: 'Code de conduite / Charte éthique', present: false, sources: ['S annexe B.2', 'RI annexe 3.1'] },
  { title: 'Politique de protection et de safeguarding', present: false, sources: ['S annexe B.3', 'RI annexe 3.2'] },
  { title: 'Manuel de procédures administratives et financières', present: false, sources: ['S annexe B.4', 'RI annexe 3.3'] },
  { title: 'Politique de gestion des conflits d’intérêts', present: false, sources: ['S annexe B.5', 'RI annexe 3.4'] },
  { title: 'Politique de communication et d’utilisation de l’image', present: false, sources: ['S annexe B.6', 'RI annexe 3.5'] },
  { title: 'Procédure de gestion des plaintes et signalements', present: false, sources: ['S annexe B.8', 'RI annexe 3.6'] },
  { title: 'Procédure de gestion documentaire et de protection des données', present: false, sources: ['S annexe B.9', 'RI annexe 3.7'] },
  { title: 'Politique RH / bénévolat et volontariat', present: false, sources: ['RI annexe 3.8'] },
  { title: 'Plan stratégique pluriannuel', present: false, sources: ['S annexe B.7', 'RI annexe 3.9'] },
  { title: 'Procédures spécifiques des bailleurs et partenaires', present: false, sources: ['S annexe B.10', 'RI annexe 3.10'] },
];

/** RI art. 40 — cycle de gestion de projet en 8 étapes. Processus interne, pas des projets. */
export const projectCycle: Documented<string>[] = [
  { value: 'Identification d’un besoin ou d’une opportunité', sources: ['RI art. 40.1'] },
  { value: 'Formulation d’objectifs et de résultats attendus', sources: ['RI art. 40.2'] },
  { value: 'Estimation des ressources et du budget', sources: ['RI art. 40.3'] },
  { value: 'Analyse des risques, y compris les risques de protection', sources: ['RI art. 40.4'] },
  { value: 'Validation par l’organe compétent', sources: ['RI art. 40.5'] },
  { value: 'Mise en œuvre et suivi', sources: ['RI art. 40.6'] },
  { value: 'Documentation des résultats et des leçons apprises', sources: ['RI art. 40.7'] },
  { value: 'Rapportage et clôture', sources: ['RI art. 40.8'] },
];

/** RI annexe 2 — check-list d'ouverture d'une activité. */
export const activityChecklist: Documented<string>[] = [
  { value: 'Objectif et public cible définis', sources: ['RI annexe 2'] },
  { value: 'Responsable d’activité désigné', sources: ['RI annexe 2'] },
  { value: 'Budget et source de financement identifiés', sources: ['RI annexe 2'] },
  { value: 'Risques principaux évalués', sources: ['RI annexe 2'] },
  { value: 'Mesures de protection définies lorsque nécessaire', sources: ['RI annexe 2'] },
  { value: 'Autorisation interne obtenue', sources: ['RI annexe 2'] },
  { value: 'Partenaire(s) et responsabilités clarifiés', sources: ['RI annexe 2'] },
  { value: 'Moyens logistiques disponibles', sources: ['RI annexe 2'] },
  { value: 'Méthode de suivi et de reporting définie', sources: ['RI annexe 2'] },
  { value: 'Pièces et preuves à archiver identifiées', sources: ['RI annexe 2'] },
];

/** S art. 40, 42, 45, 46 ; RI art. 44 à 47, 53, 55 à 57, 60 à 68 — engagements de redevabilité. */
export const accountability = {
  financial: {
    value:
      'Le Conseil d’administration prépare annuellement un projet de budget ainsi que les documents comptables et financiers de l’exercice écoulé. Les comptes sont soumis à l’Assemblée générale pour examen et approbation. Les ressources et dépenses doivent être documentées, traçables et utilisées conformément à leur destination.',
    sources: ['S art. 40', 'RI art. 48', 'RI art. 53'],
  } satisfies Documented<string>,
  audit: {
    value:
      'Le contrôle financier repose sur la séparation des responsabilités, la vérification des pièces, le rapprochement des comptes et la validation des dépenses. Lorsque la loi, un bailleur ou l’importance des opérations l’exige, un audit ou un contrôle externe peut être organisé.',
    sources: ['S art. 40', 'RI art. 54'],
  } satisfies Documented<string>,
  noDistribution: {
    value:
      'Aucun bénéfice, dividende, excédent ou actif de l’association ne peut être distribué directement ou indirectement aux membres, administrateurs ou dirigeants du fait de leur qualité.',
    sources: ['S art. 42'],
  } satisfies Documented<string>,
  conflictsOfInterest: {
    value:
      'Tout administrateur, dirigeant ou responsable ayant un intérêt personnel, familial, professionnel ou financier dans une opération, un contrat, une sélection ou une décision doit le déclarer et s’abstenir de participer à la décision.',
    sources: ['S art. 42', 'RI art. 55', 'RI art. 56'],
  } satisfies Documented<string>,
  zeroTolerance: {
    value:
      'SJCD ASBL ne tolère pas les abus, l’exploitation, le harcèlement, les violences, les discriminations, les représailles, la corruption, la fraude ou toute autre conduite portant atteinte à la sécurité ou à la dignité des personnes.',
    sources: ['RI art. 44'],
  } satisfies Documented<string>,
  safeguarding: {
    value:
      'L’association adopte et applique des mécanismes de prévention, de signalement, de traitement des plaintes, de confidentialité, de référencement et de réponse aux incidents. Les modalités opérationnelles relèvent d’une politique de protection et d’un code de conduite distincts.',
    sources: ['S art. 45', 'RI art. 45', 'RI art. 46'],
  } satisfies Documented<string>,
  /** Le point focal de protection n'est pas nommé dans les documents — docs/11 §3.5. */
  safeguardingFocalPoint: null as string | null,
  complaints: {
    value:
      'Toute personne concernée par les activités de SJCD peut déposer une plainte ou exprimer une préoccupation. La réception d’une plainte ne peut entraîner de représailles contre une personne agissant de bonne foi. Les plaintes peuvent être transmises au Secrétaire général, au Coordinateur, au Président ou au point focal de protection.',
    sources: ['RI art. 65', 'RI art. 66', 'RI art. 67'],
  } satisfies Documented<string>,
  imageAndConsent: {
    value:
      'La photographie, la vidéo, la voix ou le témoignage d’un bénéficiaire ne peuvent être utilisés publiquement que dans les conditions requises par la législation applicable, avec les consentements nécessaires et conformément à la politique interne. Une attention renforcée est accordée aux enfants et personnes vulnérables.',
    sources: ['S art. 46', 'RI art. 60'],
  } satisfies Documented<string>,
};

/** S art. 44, RI art. 42 — régime des partenariats. Aucune liste de partenaires. */
export const partnershipRegime = {
  rule: {
    value:
      'Tout partenariat doit être cohérent avec l’objet et les valeurs de SJCD. Les engagements significatifs font l’objet d’un accord écrit précisant au minimum l’objet, les responsabilités, les ressources, les obligations de confidentialité, la visibilité et, lorsque nécessaire, les dispositions de protection.',
    sources: ['RI art. 42', 'S art. 44'],
  } satisfies Documented<string>,
  refusalRight: {
    value:
      'Un partenariat présentant un risque important pour l’intégrité, l’indépendance, la réputation ou la conformité de l’association peut être refusé par le Conseil d’administration.',
    sources: ['RI art. 42', 'S art. 44'],
  } satisfies Documented<string>,
  /** S art. 44 — catégories d'acteurs visées. Catégories, pas partenaires nommés. */
  actorCategories: [
    { value: 'Autorités publiques et collectivités', sources: ['S art. 44'] },
    { value: 'Organisations de la société civile', sources: ['S art. 44'] },
    { value: 'Institutions académiques', sources: ['S art. 44'] },
    { value: 'Entreprises', sources: ['S art. 44'] },
    { value: 'Fondations', sources: ['S art. 44'] },
    { value: 'Agences de coopération', sources: ['S art. 44'] },
    { value: 'Organisations internationales', sources: ['S art. 44'] },
  ] satisfies Documented<string>[],
};

/** S art. 47, 48 — révision et dissolution. */
export const amendmentAndDissolution = {
  amendment: {
    value:
      'Les statuts ne peuvent être modifiés que par décision de l’Assemblée générale des membres effectifs, à la majorité des deux tiers des membres effectifs présents ou représentés, lors d’une Assemblée spécialement convoquée à cet effet.',
    sources: ['S art. 47'],
  } satisfies Documented<string>,
  dissolution: {
    value:
      'La dissolution volontaire ne peut être prononcée que par une Assemblée générale extraordinaire convoquée spécialement, au minimum aux deux tiers des membres effectifs. L’actif net restant est attribué à une organisation sans but lucratif ou à une œuvre d’intérêt général poursuivant des objectifs similaires ou compatibles.',
    sources: ['S art. 48'],
  } satisfies Documented<string>,
  precedence: {
    value:
      'En cas de contradiction entre une politique interne et les présents statuts, les présents statuts prévalent.',
    sources: ['S art. 49', 'RI préambule'],
  } satisfies Documented<string>,
};
