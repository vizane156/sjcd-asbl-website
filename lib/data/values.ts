/**
 * Grille des valeurs — regroupement des dix principes de S art. 10.
 * Aucun principe n'est ajouté : chaque entrée cite les numéros qu'elle regroupe
 * (docs/11 §2.2).
 */
export interface ValueEntry {
  id: string;
  title: string;
  text: string;
  sources: string[];
}

export const values: ValueEntry[] = [
  {
    id: 'integrite',
    title: 'Intégrité et moralité',
    text: 'Intégrité et honnêteté dans la conduite de toutes les activités. Aucun avantage personnel indu ne peut être tiré d’une fonction.',
    sources: ['S art. 10.1', 'RI art. 47'],
  },
  {
    id: 'solidarite',
    title: 'Solidarité et entraide',
    text: 'Solidarité, responsabilité et service de la communauté. L’action vise l’intérêt des communautés, pas celui des membres.',
    sources: ['S art. 10.3', 'S art. 42'],
  },
  {
    id: 'dignite',
    title: 'Respect et dignité humaine',
    text: 'Dignité humaine, égalité, respect et non-discrimination. Protection contre les abus, l’exploitation, le harcèlement et la violence.',
    sources: ['S art. 10.2', 'S art. 10.7', 'RI art. 44'],
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité personnelle',
    text: 'Participation des jeunes et responsabilisation des bénéficiaires. Transparence, redevabilité et bonne gouvernance dans la conduite de l’association.',
    sources: ['S art. 10.5', 'S art. 10.6'],
  },
  {
    id: 'education',
    title: 'Éducation et développement continu',
    text: 'Apprentissage continu, innovation et recherche de solutions adaptées aux réalités locales.',
    sources: ['S art. 10.8', 'S art. 6 a'],
  },
  {
    id: 'expression',
    title: 'Expression et liberté de parole',
    text:
      'Liberté de conscience et respect de la diversité des convictions. Les échanges restent courtois et factuels ; les attaques personnelles, intimidations et discriminations ne sont pas admises.',
    sources: ['S art. 10.4', 'RI art. 38'],
  },
  {
    id: 'sante',
    title: 'Santé et bien-être',
    text:
      'Accès à une information fiable en matière de santé sexuelle et reproductive, et prévention des risques, dans le respect des normes professionnelles applicables.',
    sources: ['S art. 8', 'S art. 6 c', 'RI art. 39'],
  },
];

/**
 * Principes de fonctionnement institutionnel — distincts des valeurs d'accompagnement,
 * car ils encadrent l'organisation elle-même et non ses publics.
 */
export const operatingPrinciples: ValueEntry[] = [
  {
    id: 'neutralite',
    title: 'Neutralité politique',
    text: 'Neutralité politique de l’association dans l’exercice de ses activités statutaires. Il est interdit d’utiliser le nom, le logo ou les ressources de SJCD à des fins personnelles ou partisanes sans autorisation.',
    sources: ['S art. 10.9', 'S art. 2', 'RI art. 9.6', 'RI art. 59'],
  },
  {
    id: 'legalite',
    title: 'Respect des lois',
    text: 'Respect des lois, de l’ordre public et des bonnes mœurs. Aucune disposition interne ne peut être interprétée comme autorisant une discrimination, un abus de pouvoir ou une activité contraire à la loi.',
    sources: ['S art. 10.10', 'RI art. 3'],
  },
  {
    id: 'redevabilite',
    title: 'Transparence et redevabilité',
    text: 'Transparence, redevabilité et bonne gouvernance. Comptes soumis à l’Assemblée générale, conflits d’intérêts déclarés, interdiction absolue de distribution de bénéfices.',
    sources: ['S art. 10.6', 'S art. 40', 'S art. 42', 'RI art. 55'],
  },
];
