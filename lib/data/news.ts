/**
 * Actualités — aucune publication n'existe (docs/11 §3.7). Le tableau reste vide.
 */
export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'actualite' | 'rapport' | 'communique' | 'activite';
  excerpt: string;
  body: string;
  publishedAt: string;
  source: string;
}

export const news: NewsItem[] = [];

export const newsEmptyState = {
  headline: 'Aucune actualité n’est publiée pour le moment.',
  detail:
    'Actualités, activités, communiqués et rapports trouveront leur place ici, avec une date et un contenu validés par l’organe compétent. Aucune publication n’est simulée pour remplir cet espace.',
  rules:
    'La communication institutionnelle relève du Porte-parole ou de toute personne mandatée. Les contenus publiés au nom de l’association doivent être exacts, respectueux et conformes aux politiques de protection, de confidentialité et d’image.',
  sources: ['S art. 36', 'RI art. 58', 'RI art. 59', 'RI art. 60'],
};
