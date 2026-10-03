/**
 * Contenu du site — source unique en attendant le CMS.
 * RÈGLE : aucune donnée inventée. Tout ce qui n'est pas confirmé par SJCD
 * est un placeholder explicite (`placeholder: true`) affiché comme tel.
 */

export const org = {
  acronym: 'SJCD',
  name: 'Sanctuaire de Jeunes Chandelier pour le Développement',
  legalForm: 'ASBL',
  legalFormLong: 'Association sans but lucratif de droit congolais',
  country: 'République démocratique du Congo',
  // Documenté : S art. 3 — siège social dans la ville d'Uvira, Province du Sud-Kivu.
  registeredOffice: 'Ville d’Uvira, Province du Sud-Kivu, République démocratique du Congo',
  // Coordonnées fournies par SJCD le 1er octobre 2026 et publiées comme telles.
  // Le numéro d'enregistrement reste null : la formalisation est en cours.
  registration: null as string | null,
  address:
    'Avenue Rubenga n° 43, quartier Kavimvira, Uvira, Province du Sud-Kivu, République démocratique du Congo',
  email: 'Info.sjcd@proton.me',
  phone: '+243 982 745 085',
};

/** Coordonnées exploitables dans un lien, sans espaces ni mise en forme. */
export const telHref = `tel:${org.phone.replace(/[^+\d]/g, '')}`;

/** Navigation principale : huit entrées, dont sept routes et l'accueil. */
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Projets', href: '/projets' },
  { label: 'Transparence', href: '/transparence' },
  { label: 'Partenariats', href: '/partenariats' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
];

// TODO(SJCD): domaines réels. Les intitulés ci-dessous sont des emplacements.
export const domains = Array.from({ length: 5 }, (_, i) => ({
  id: `domaine-${i + 1}`,
  title: `Domaine d’intervention ${String(i + 1).padStart(2, '0')}`,
  text: 'Description à fournir par SJCD : le besoin traité, l’approche, le public.',
  placeholder: true,
}));

// Les projets ne sont plus des emplacements : la fiche publiée vit dans
// lib/data/projects.ts, adossée à sa provenance.

// Règle de vérité : aucun chiffre sans valeur, période et source validées.
export const metrics = [
  { label: 'Jeunes accompagnés', value: null, period: null, source: null },
  { label: 'Communautés touchées', value: null, period: null, source: null },
  { label: 'Projets menés', value: null, period: null, source: null },
  { label: 'Années d’action', value: null, period: null, source: null },
] as { label: string; value: string | null; period: string | null; source: string | null }[];

export const stories = Array.from({ length: 3 }, (_, i) => ({
  id: `histoire-${i + 1}`,
  title: `Histoire de terrain ${i + 1}`,
  text: 'Récit à fournir, avec autorisation écrite des personnes représentées.',
}));

export const news = Array.from({ length: 3 }, (_, i) => ({
  id: `actu-${i + 1}`,
  date: 'Date à venir',
  title: `Publication ${i + 1} — titre à définir`,
  kind: i === 0 ? 'Rapport' : i === 1 ? 'Actualité' : 'Événement',
}));
