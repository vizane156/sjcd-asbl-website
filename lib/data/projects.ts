/**
 * Catalogue de projets.
 *
 * Source : fiche projet « Chandelier 360° : Jeunesse, Compétences, Emploi et
 * Entrepreneuriat » transmise par SJCD le 1er octobre 2026.
 *
 * RÈGLE : la fiche publiée ici est celle qui a été fournie. Ce qui n'a pas été
 * fourni reste `null` ou vide et s'affiche comme tel. Aucun résultat n'est déclaré
 * comme acquis : le projet est en phase de préparation et recherche son financement.
 */
import type { ProjectStatus } from '@/lib/models';
import { activityChecklist, projectCycle } from '@/lib/statuts';
import { projectMedia, type MediaSlot } from '@/lib/data/media';

/** Une phase du projet, telle que décrite dans la fiche. */
export interface ProjectPhase {
  title: string;
  items: string[];
}

/** Une ligne du tableau d'indicateurs : cible annoncée, pas résultat atteint. */
export interface ProjectTarget {
  label: string;
  target: string;
}

/** Modèle de fiche projet — tous les champs demandés, tous nullable sauf identité. */
export interface ProjectSheet {
  title: string;
  slug: string;
  reference: string;
  /** Résumé court pour la carte d'accueil (une à deux phrases). */
  homeSummary: string;
  summary: string | null;
  context: string | null;
  problem: string | null;
  generalObjective: string | null;
  objectives: string[];
  audiences: string[];
  indirectAudiences: string | null;
  zone: string | null;
  timeline: string | null;
  plannedActions: string[];
  phases: ProjectPhase[];
  completedActions: string[];
  completedActionsNote: string | null;
  results: string[];
  indicators: string[];
  targets: ProjectTarget[];
  /** Partenaires nommés : aucun tant qu'aucune relation n'est documentée. */
  partners: string[];
  /** Catégories d'acteurs recherchés — ce ne sont pas des partenaires acquis. */
  partnerCategories: string[];
  /** Financement : publié seulement s'il est public ET documenté. */
  funding: {
    amount: string;
    currency: string;
    model: 'recherché' | 'sécurisé' | 'mixte';
    source: string;
    public: true;
  } | null;
  budgetCategories: string[];
  gallery: MediaSlot[];
  documents: { label: string; url: string }[];
  plannedDocuments: string[];
  status: ProjectStatus;
  publishedAt: string | null;
  /** Provenance de la fiche : qui a transmis quoi, et quand. */
  sources: string[];
}

const CHANDELIER_360: ProjectSheet = {
  title: 'Chandelier 360° : Jeunesse, Compétences, Emploi et Entrepreneuriat',
  slug: 'chandelier-360',
  reference: 'Chandelier 360°',
  homeSummary:
    'Formation professionnelle et numérique, mentorat, accompagnement entrepreneurial et mise en relation avec des opportunités : un parcours complet vers l’autonomie, pour 500 jeunes sur 12 mois.',
  summary:
    'Projet intégré de développement de la jeunesse porté par Sanctuaire de Jeunes Chandelier pour le Développement (SJCD). Il combine formation professionnelle et numérique, accompagnement à l’entrepreneuriat, compétences de vie, mentorat et mise en relation avec des opportunités économiques. Sur 12 mois, le projet prévoit d’accompagner 500 jeunes directement, avec une attention particulière aux jeunes femmes et aux personnes en situation de vulnérabilité ; un groupe à fort potentiel bénéficie d’un accompagnement renforcé pour transformer ses compétences en activités génératrices de revenus, microentreprises ou initiatives communautaires. L’ambition est de passer d’une logique de simple formation à une logique de parcours complet vers l’autonomie : identifier, former, accompagner, connecter aux opportunités et mesurer les résultats.',
  context:
    'Les jeunes représentent une force majeure pour le développement économique et social de la République démocratique du Congo. Pourtant, une partie importante d’entre eux rencontre des difficultés d’accès à une formation adaptée au marché, à l’emploi, au financement, aux réseaux professionnels et aux outils numériques. Dans de nombreux contextes urbains et périurbains, les jeunes disposent d’un potentiel entrepreneurial et créatif important, mais manquent d’accompagnement structuré pour transformer leurs idées et leurs compétences en revenus durables. Le projet part de ce constat et propose une approche pratique centrée sur les compétences, l’employabilité, l’entrepreneuriat, l’inclusion et l’accès aux opportunités.',
  problem:
    'Les jeunes ciblés sont confrontés à plusieurs contraintes interdépendantes : insuffisance de compétences professionnelles et numériques directement valorisables ; difficultés d’accès à l’emploi et aux opportunités économiques ; manque d’accompagnement entrepreneurial structuré ; accès limité aux réseaux professionnels, au mentorat et à l’information ; difficultés d’accès au financement initial pour les initiatives viables ; vulnérabilité économique de nombreux jeunes, en particulier des jeunes femmes et d’autres groupes vulnérables. Le problème n’est donc pas uniquement le manque de formation : il existe également un déficit de passerelles entre les compétences acquises et les opportunités réelles.',
  generalObjective:
    'Contribuer à l’autonomisation économique et sociale des jeunes en améliorant leurs compétences, leur employabilité et leur capacité à créer ou développer des activités génératrices de revenus.',
  objectives: [
    'Former 500 jeunes dans des compétences professionnelles, numériques, entrepreneuriales et de vie.',
    'Améliorer l’employabilité et la préparation professionnelle des participants grâce au coaching, au mentorat et à la mise en relation avec des opportunités.',
    'Accompagner 100 jeunes présentant un potentiel entrepreneurial dans la conception et le développement de leurs activités.',
    'Soutenir la mise en œuvre d’au moins 50 initiatives économiques ou entrepreneuriales sélectionnées selon des critères transparents.',
    'Renforcer la participation économique des jeunes femmes et des jeunes issus de groupes vulnérables.',
    'Mettre en place un système simple de suivi permettant de mesurer les changements obtenus après la formation.',
  ],
  audiences: [
    'Jeunes sans emploi ou sous-employés',
    'Jeunes en transition entre études et vie professionnelle',
    'Jeunes entrepreneurs ou porteurs d’idées',
    'Jeunes femmes',
    'Jeunes issus de milieux économiquement vulnérables',
    'Personnes vivant avec un handicap, dans la mesure des critères d’accessibilité du projet',
  ],
  indirectAudiences:
    'Environ 2 000 personnes, indirectement : familles, communautés, clients et bénéficiaires des initiatives soutenues.',
  zone:
    'République démocratique du Congo — zone pilote urbaine et périurbaine ciblée par SJCD. La ville, la province et les communes précises seront définies selon les ressources mobilisées, les besoins identifiés et les accords avec les partenaires du projet.',
  timeline:
    'Durée : 12 mois. Période indicative : janvier 2027 à décembre 2027, à adapter selon la date effective de mobilisation du financement.',
  plannedActions: [
    'Préparation et mobilisation : diagnostic rapide des besoins, sélection transparente des bénéficiaires, mobilisation des partenaires locaux, préparation des modules, mise en place du suivi-évaluation.',
    'Formation : parcours pratiques en compétences numériques, bureautique et outils professionnels, entrepreneuriat, gestion financière de base, marketing et communication, compétences professionnelles et recherche d’emploi, leadership et compétences de vie, intégrité et responsabilité sociale.',
    'Incubation et mentorat : accompagnement individuel et collectif, modèles économiques, coaching entrepreneurial, mentorat par des professionnels, assistance à la formalisation, ateliers de présentation et de mise en réseau.',
    'Appui aux initiatives : sélection compétitive des initiatives les plus viables, accompagnement technique, équipements ou petits appuis de démarrage selon les ressources, suivi de l’utilisation des appuis, accompagnement post-lancement.',
    'Connexion aux opportunités : mise en relation avec entreprises et acteurs économiques, opportunités d’emploi et de stage, événements de networking, orientation vers des programmes de financement ou d’incubation, partenariats nationaux et internationaux.',
    'Suivi et mesure d’impact : collecte des données de référence, suivi mensuel, mesure à mi-parcours, évaluation finale, documentation des histoires de changement, rapport d’impact.',
  ],
  phases: [
    {
      title: 'Phase 1 — Préparation et mobilisation',
      items: [
        'Diagnostic rapide des besoins des jeunes',
        'Identification et sélection transparente des bénéficiaires',
        'Mobilisation des partenaires locaux',
        'Préparation des modules de formation',
        'Mise en place du système de suivi-évaluation',
      ],
    },
    {
      title: 'Phase 2 — Formation',
      items: [
        'Compétences numériques',
        'Bureautique et outils professionnels',
        'Entrepreneuriat',
        'Gestion financière de base',
        'Marketing et communication',
        'Compétences professionnelles et recherche d’emploi',
        'Leadership et compétences de vie',
        'Sensibilisation à l’intégrité, à l’éthique et à la responsabilité sociale',
      ],
    },
    {
      title: 'Phase 3 — Incubation et mentorat',
      items: [
        'Accompagnement individuel et collectif',
        'Élaboration de modèles économiques',
        'Coaching entrepreneurial',
        'Mentorat par des professionnels',
        'Assistance à la formalisation des projets',
        'Ateliers de présentation et de mise en réseau',
      ],
    },
    {
      title: 'Phase 4 — Appui aux initiatives',
      items: [
        'Sélection compétitive des initiatives les plus viables',
        'Accompagnement technique',
        'Fourniture d’équipements ou de petits appuis de démarrage selon les ressources disponibles',
        'Suivi de l’utilisation des appuis',
        'Accompagnement post-lancement',
      ],
    },
    {
      title: 'Phase 5 — Connexion aux opportunités',
      items: [
        'Mise en relation avec entreprises et acteurs économiques',
        'Partage d’opportunités d’emploi et de stages',
        'Événements de networking',
        'Orientation vers des programmes de financement ou d’incubation',
        'Développement de partenariats avec des organisations nationales et internationales',
      ],
    },
    {
      title: 'Phase 6 — Suivi et mesure d’impact',
      items: [
        'Collecte des données de référence',
        'Suivi mensuel des bénéficiaires',
        'Mesure des résultats à mi-parcours',
        'Évaluation finale',
        'Documentation des histoires de changement',
        'Production d’un rapport d’impact',
      ],
    },
  ],
  completedActions: [],
  completedActionsNote:
    'Projet en phase de préparation. À la date de publication, aucune activité de mise en œuvre financée dans le cadre spécifique de Chandelier 360° n’est déclarée comme réalisée. Les activités de préparation, de recherche de partenaires, de mobilisation de ressources et de développement du projet seront mises à jour au fur et à mesure de l’avancement.',
  results: [
    '500 jeunes formés.',
    'Au moins 75 % des participants terminent leur parcours de formation.',
    'Au moins 70 % des participants démontrent une amélioration mesurable de leurs compétences.',
    '100 jeunes bénéficient d’un parcours renforcé d’incubation ou de mentorat.',
    'Au moins 50 initiatives reçoivent un appui ou un accompagnement approfondi.',
    'Au moins 60 % des initiatives soutenues restent actives à la fin du projet.',
    'Au moins 300 participants accèdent à une opportunité concrète : emploi, stage, activité génératrice de revenus, contrat, clientèle, incubation ou autre mécanisme économique.',
    'Augmentation de la capacité des jeunes à gérer leurs revenus, leurs activités et leurs projets.',
    'Création d’un réseau local de jeunes, mentors, entreprises et partenaires autour de l’autonomisation économique.',
  ],
  indicators: [
    'Taux de participation des jeunes femmes',
    'Jeunes ayant terminé leur formation',
    'Jeunes démontrant une progression de compétences',
    'Initiatives encore actives en fin de projet',
    'Sessions de mentorat organisées',
    'Taux de satisfaction des bénéficiaires',
    'Rapports de suivi produits',
  ],
  targets: [
    { label: 'Nombre de jeunes inscrits', target: '500' },
    { label: 'Taux de participation des jeunes femmes', target: '≥ 55 %' },
    { label: 'Jeunes ayant terminé leur formation', target: '≥ 375' },
    { label: 'Jeunes démontrant une progression de compétences', target: '≥ 350' },
    { label: 'Jeunes accompagnés en incubation ou mentorat', target: '100' },
    { label: 'Initiatives soutenues', target: '≥ 50' },
    { label: 'Initiatives encore actives en fin de projet', target: '≥ 30' },
    { label: 'Participants connectés à une opportunité économique', target: '≥ 300' },
    { label: 'Sessions de mentorat organisées', target: '≥ 20' },
    { label: 'Partenaires mobilisés', target: '≥ 10' },
    { label: 'Taux de satisfaction des bénéficiaires', target: '≥ 80 %' },
    { label: 'Rapports de suivi produits', target: '12 rapports mensuels + 1 rapport final' },
  ],
  // Aucun partenaire n'est nommé : la fiche décrit des partenaires RECHERCHÉS.
  partners: [],
  partnerCategories: [
    'Institutions publiques compétentes',
    'Entreprises privées',
    'Établissements d’enseignement et de formation professionnelle',
    'Incubateurs et hubs technologiques',
    'ONG nationales et internationales',
    'Agences des Nations Unies',
    'Fondations',
    'Bailleurs de fonds',
    'Organisations communautaires',
    'Experts, mentors et professionnels',
  ],
  funding: {
    amount: '75 000',
    currency: 'USD',
    model: 'recherché',
    source: 'Fiche projet Chandelier 360°, transmise par SJCD le 1er octobre 2026',
    public: true,
  },
  budgetCategories: [
    'Formation et équipements pédagogiques',
    'Ressources humaines',
    'Mentorat et incubation',
    'Appui aux initiatives',
    'Communication et mobilisation communautaire',
    'Suivi-évaluation',
    'Administration et coordination',
    'Protection, inclusion et accessibilité',
    'Documentation et capitalisation',
  ],
  gallery: projectMedia('chandelier-360'),
  documents: [],
  plannedDocuments: [
    'Fiche projet',
    'Note conceptuelle',
    'Budget détaillé',
    'Cadre logique',
    'Théorie du changement',
    'Chronogramme',
    'Politique de sauvegarde et protection',
    'Code de conduite',
    'Politique anti-fraude et anticorruption',
    'Plan de suivi-évaluation',
    'Rapports d’activités',
    'Rapport final et rapport d’impact',
  ],
  status: 'preparation',
  publishedAt: '2026-10-01',
  sources: ['Fiche projet transmise par SJCD le 1er octobre 2026'],
};

/**
 * Les fiches publiées. Chaque entrée cite sa provenance dans `sources` et ne
 * déclare comme réalisé que ce qui est attesté. Voir tests/contracts.test.mjs.
 */
export const projects: ProjectSheet[] = [CHANDELIER_360];

/** Fiche mise en avant sur l'accueil. */
export const featuredProject = CHANDELIER_360;

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
    'Aucun projet documenté n’est disponible à ce jour. Le catalogue est prêt : chaque fiche présente le titre, le résumé, le contexte, le problème ou besoin traité, les objectifs, les publics, la zone d’intervention, le calendrier, les actions prévues et réalisées, les résultats, les indicateurs, les partenaires, le financement lorsqu’il est public et documenté, la galerie, les documents téléchargeables, le statut et la date de publication.',
  whyEmpty:
    'Ni les statuts ni le règlement intérieur ne décrivent de projet réalisé. Publier un projet d’exemple reviendrait à annoncer une réalisation inexistante.',
  whatIsShown:
    'Ce qui est présenté ci-dessous est la méthode de gestion de projet prévue par le règlement intérieur, ainsi que la structure de fiche utilisée. Ce sont des processus internes, pas des réalisations.',
};
