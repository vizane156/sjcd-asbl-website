/**
 * Textes des pages intérieures simples, servies par app/[page]/page.tsx.
 *
 * Les pages institutionnelles majeures — qui-sommes-nous, programmes, projets,
 * transparence et partenariats — disposent de routes dédiées dans app/ et ne figurent
 * donc pas ici. Aucune donnée inventée : ce qui manque est marqué `pending`.
 */
export const pages: Record<string, {
  title: string; eyebrow: string; intro: string;
  blocks: { title: string; body: string; pending?: boolean }[];
}> = {
  impact: {
    title: 'La confiance commence par la preuve.', eyebrow: 'SJCD · Impact',
    intro: 'Aucune statistique n’est publiée dans cette préversion. La méthodologie applicable à toute publication d’indicateur est décrite dans l’espace transparence.',
    blocks: [
      { title: 'Des données contextualisées', body: 'Chaque indicateur devra comprendre une valeur, une période, une unité, une méthode de comptage et une source interne vérifiable. Aucun chiffre n’est affiché sans source.', pending: true },
      { title: 'Rapports et publications', body: 'Aucun rapport n’a été fourni à ce jour. Il n’y a donc aucun document à télécharger ici. Voir l’espace transparence pour les documents statutaires existants.' },
    ],
  },
  actualites: {
    title: 'Le fil de SJCD.', eyebrow: 'SJCD · Actualités',
    intro: 'Aucune actualité n’est publiée pour le moment. Aucune publication n’est simulée pour remplir cet espace.',
    blocks: [{ title: 'À venir', body: 'Actualités, activités, communiqués et rapports trouveront leur place ici, avec une date et un contenu validés par l’organe compétent. La communication institutionnelle relève du Porte-parole ou de toute personne mandatée.', pending: true }],
  },
  'mentions-legales': {
    title: 'Mentions légales.', eyebrow: 'Préproduction · Document incomplet',
    intro: 'Cette page est un état des informations disponibles, pas une déclaration de conformité juridique. Les mentions définitives doivent être validées pour le droit applicable en RDC.',
    blocks: [
      { title: 'Organisation', body: 'Sanctuaire de Jeunes Chandelier pour le Développement, en sigle SJCD ASBL. Association sans but lucratif de droit congolais, apolitique et non confessionnelle, à caractère social, éducatif et de développement communautaire. Siège social : ville d’Uvira, Province du Sud-Kivu, République démocratique du Congo. Adresse : avenue Rubenga n° 43, quartier Kavimvira, Uvira. Contact : Info.sjcd@proton.me — +243 982 745 085.' },
      { title: 'Statut juridique', body: 'Les statuts et le règlement intérieur présents dans le dépôt sont des documents de travail soumis à relecture juridique et notariale. Leur adoption formelle, leur notarisation et leur dépôt ne sont pas attestés. SJCD a confirmé le 1er octobre 2026 que la formalisation est en cours. Aucune personnalité juridique opposable n’est affirmée sur ce site.' },
      { title: 'Informations fournies et informations manquantes', body: 'Fournis par SJCD : adresse du siège (avenue Rubenga n° 43, quartier Kavimvira, Uvira), adresse e-mail institutionnelle et numéro de téléphone. Restent à fournir : numéro et date d’enregistrement, autorité d’enregistrement, responsable de publication et hébergeur de production.', pending: true },
      { title: 'Droits et crédits', body: 'La flamme est une proposition graphique, non un logo officiel. Police Nunito : SIL Open Font License 1.1 (licence incluse dans la dépendance). Aucun visuel de terrain ni logo partenaire n’est utilisé. Le régime des droits du projet reste à valider.' },
    ],
  },
  confidentialite: {
    title: 'Vos données, avec attention.', eyebrow: 'Préproduction · Vie privée',
    intro: 'Cette version ne comporte aucun outil de mesure d’audience, pixel publicitaire, carte ou vidéo tierce. La police est servie localement.',
    blocks: [
      { title: 'Préparer un message', body: 'Les outils de contact et de partenariat préparent uniquement un brouillon dans votre navigateur. Les champs ne sont ni envoyés, ni enregistrés par l’application. Le téléchargement crée un fichier sur votre appareil ; évitez d’y inclure des informations sensibles.' },
      { title: 'Infrastructure de prévisualisation', body: 'L’hébergeur et la plateforme de prévisualisation peuvent traiter les données techniques nécessaires à l’accès au site (adresse IP, journaux). Leurs conditions et les durées de conservation devront être documentées pour le déploiement final.', pending: true },
      { title: 'Avant ouverture des formulaires', body: 'SJCD devra définir le responsable du traitement, les finalités, les bases légales, les durées, les destinataires et le point de contact pour exercer ses droits. L’applicabilité du RGPD et du droit local sera vérifiée, elle n’est pas présumée.', pending: true },
    ],
  },
  accessibilite: {
    title: 'Une expérience ouverte à tous.', eyebrow: 'SJCD · Accessibilité',
    intro: 'La cible de conception est WCAG 2.2 AA. Cette préversion ne prétend pas à une conformité totale : un audit complet reste nécessaire avant publication.',
    blocks: [
      { title: 'Navigation et lecture', body: 'Liens d’évitement, structure de titres, focus visibles, zones tactiles généreuses et menu mobile utilisable au clavier. Le contenu principal reste lisible sans JavaScript.' },
      { title: 'Mouvement adaptatif', body: 'Le défilement inertiel et les effets GSAP sont réservés au desktop avec pointeur précis. Ils sont désactivés si le mouvement réduit est demandé, si la connexion signale une économie de données ou une vitesse 2G. La galerie utilise un défilement horizontal natif.' },
      { title: 'Signaler une difficulté', body: 'Écrivez à Info.sjcd@proton.me en précisant la page concernée, ou ouvrez un signalement technique dans le dépôt public, sans donnée personnelle. Un point de contact dédié à l’accessibilité reste à désigner.', pending: true },
    ],
  },
};
