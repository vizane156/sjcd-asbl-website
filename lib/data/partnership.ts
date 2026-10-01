/**
 * Partenariats — S art. 44, S art. 39.4 et 39.6, RI art. 42.
 * AUCUN partenaire n'est nommé dans les documents : aucun logo, aucune convention
 * (docs/11 §3.6). Les formes de collaboration sont des catégories, pas des engagements.
 */
import type { PartnershipForm } from '@/lib/models';
import { partnershipRegime } from '@/lib/statuts';

export const partnershipForms: PartnershipForm[] = [
  {
    id: 'technique',
    title: 'Partenariat technique',
    description: 'Apport d’expertise, de méthodes ou d’outils pour la conception et la conduite des activités.',
    sources: ['S art. 44', 'S art. 11'],
  },
  {
    id: 'institutionnel',
    title: 'Partenariat institutionnel',
    description: 'Coopération avec les autorités publiques, les collectivités et les institutions.',
    sources: ['S art. 44'],
  },
  {
    id: 'communautaire',
    title: 'Partenariat communautaire',
    description: 'Travail conjoint avec les organisations de la société civile et les acteurs locaux.',
    sources: ['S art. 44', 'S art. 6 f'],
  },
  {
    id: 'mise-en-oeuvre',
    title: 'Partenariat de mise en œuvre',
    description: 'Exécution partagée d’un projet, avec répartition écrite des responsabilités.',
    sources: ['RI art. 42'],
  },
  {
    id: 'consortium',
    title: 'Consortium',
    description: 'Participation à un groupement d’acteurs poursuivant des objectifs compatibles.',
    sources: ['S art. 6 h', 'S art. 9.9'],
  },
  {
    id: 'appui-materiel',
    title: 'Appui matériel',
    description: 'Aides matérielles, équipements et autres contributions en nature.',
    sources: ['S art. 39.6'],
  },
  {
    id: 'appui-financier',
    title: 'Appui financier',
    description: 'Dons, subventions, financements et appuis publics ou privés autorisés.',
    sources: ['S art. 39.2', 'S art. 39.3'],
  },
  {
    id: 'partage-competences',
    title: 'Partage de compétences',
    description: 'Échange de savoir-faire et interventions d’experts sélectionnés pour leurs compétences et leur intégrité.',
    sources: ['RI art. 39', 'S art. 44'],
  },
  {
    id: 'formation',
    title: 'Formation',
    description: 'Conception et animation de formations, notamment dans les domaines sensibles, selon des standards professionnels adaptés.',
    sources: ['RI art. 39', 'S art. 11'],
  },
  {
    id: 'recherche',
    title: 'Recherche et développement de programmes',
    description: 'Études, documentation, production de connaissances et développement de programmes avec des institutions académiques.',
    sources: ['S art. 6 g', 'S art. 44'],
  },
];

/** Aucun partenaire nommé, aucun logo. Vérifié par tests/contracts.test.mjs. */
export const partners: { name: string; logoUrl: string; authorizationRef: string }[] = [];

export const partnerEmptyState = {
  headline: 'Aucun partenaire n’est annoncé.',
  detail:
    'Aucun logo ni aucune dénomination de partenaire n’est affiché : aucune relation officielle n’est documentée dans les statuts ou le règlement intérieur. Un partenaire ne sera cité qu’avec un accord écrit et, le cas échéant, une autorisation d’usage de son logo archivée.',
};

/** Le régime applicable, littéral — RI art. 42 et S art. 44. */
export const partnershipRules = {
  coherence: partnershipRegime.rule,
  refusal: partnershipRegime.refusalRight,
  actorCategories: partnershipRegime.actorCategories,
  safeguarding:
    'Tout partenariat doit prévoir, lorsque nécessaire, des dispositions de protection. Les activités auprès d’enfants, de jeunes ou de personnes vulnérables sont soumises aux règles de protection applicables.',
  image:
    'Aucune photographie, vidéo, voix ni témoignage de bénéficiaire ne peut être utilisé publiquement sans consentement et conformément à la législation et aux politiques internes. Une attention renforcée est accordée aux enfants et personnes vulnérables.',
  sources: ['S art. 44', 'RI art. 42', 'S art. 45', 'S art. 46', 'RI art. 60'],
};

/**
 * Point de contact institutionnel — aucune adresse n'est documentée (docs/11 §3.1).
 * Le formulaire prépare donc un brouillon local : aucun message n'est transmis.
 */
export const partnershipContact = {
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
  socialMedia: [] as { label: string; url: string }[],
  transmission:
    'Aucun service de réception n’est encore en place. Le formulaire prépare un message dans votre navigateur, que vous pouvez copier ou télécharger ; rien n’est envoyé ni enregistré par le site. Les coordonnées officielles de SJCD seront publiées dès qu’elles seront fournies.',
};

/** Types proposés dans le formulaire, alignés sur les formes de collaboration. */
export const partnershipTypes = partnershipForms.map(form => ({ id: form.id, label: form.title }));
