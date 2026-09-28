/** Only the identity and country come from the confirmed brief. No invented facts. */
export const pages: Record<string, {
  title: string; eyebrow: string; intro: string;
  blocks: { title: string; body: string; pending?: boolean }[];
}> = {
  'qui-sommes-nous': {
    title: 'La jeunesse. Une lumière pour demain.', eyebrow: 'SJCD · Présentation',
    intro: 'Sanctuaire de Jeunes Chandelier pour le Développement — une ASBL légalement établie en République démocratique du Congo, selon les informations communiquées par SJCD.',
    blocks: [
      { title: 'Notre histoire', body: 'La date de création et les étapes fondatrices seront publiées après validation.', pending: true },
      { title: 'Mission et valeurs', body: 'Le texte de l’objet social, la mission officielle et les valeurs restent à fournir. La formulation de l’accueil est une proposition éditoriale.', pending: true },
      { title: 'Gouvernance et transparence', body: 'Composition des organes, mandats, statuts et documents publics : informations attendues de SJCD.', pending: true },
    ],
  },
  programmes: {
    title: 'Comprendre nos domaines d’intervention.', eyebrow: 'SJCD · Domaines',
    intro: 'Des espaces éditoriaux sont prêts pour présenter les domaines d’action. Aucun domaine n’est encore confirmé dans cette préversion.',
    blocks: [
      { title: 'Les besoins', body: 'Pour chaque domaine : le contexte documenté, les publics concernés et les zones d’intervention.', pending: true },
      { title: 'Les réponses', body: 'Les méthodes, les actions concrètes et les résultats seront renseignés par SJCD.', pending: true },
    ],
  },
  projets: {
    title: 'De l’intention à l’action.', eyebrow: 'SJCD · Projets',
    intro: 'Aucun projet réel n’a encore été renseigné. Les cartes de l’accueil montrent le futur format de présentation, pas des réalisations annoncées.',
    blocks: [
      { title: 'Une fiche, sept repères', body: 'Résumé, problème, réponse, public, résultats, durée et financement, perspectives : une structure pour comprendre et vérifier.', pending: true },
      { title: 'Documents et photographies', body: 'Les médias de terrain seront ajoutés uniquement avec les autorisations nécessaires. Les compositions abstraites actuelles sont des emplacements, pas des images de SJCD.', pending: true },
    ],
  },
  impact: {
    title: 'La confiance commence par la preuve.', eyebrow: 'SJCD · Impact',
    intro: 'Aucune statistique n’est publiée dans cette préversion. Les catégories d’indicateurs affichées sur l’accueil sont également à valider.',
    blocks: [
      { title: 'Des données contextualisées', body: 'Chaque indicateur devra comprendre une valeur, une période, un périmètre, une méthode de comptage et une source vérifiable.', pending: true },
      { title: 'Rapports et publications', body: 'Aucun rapport n’a été fourni à ce jour. Il n’y a donc aucun document à télécharger ici.', pending: true },
    ],
  },
  'devenir-partenaire': {
    title: 'Construire ensemble, avec clarté.', eyebrow: 'SJCD · Partenariats',
    intro: 'Vous souhaitez explorer une collaboration ? Vous pouvez préparer un message à SJCD. Les formats de partenariat restent à définir avec l’organisation.',
    blocks: [
      { title: 'Un cadre à préciser', body: 'Les modalités, les engagements réciproques et le dossier de partenariat seront publiés après validation par SJCD.', pending: true },
      { title: 'Partenaires', body: 'Aucun partenaire n’est annoncé. Les emplacements de l’accueil ne constituent ni une liste de partenaires, ni une promesse de collaboration.', pending: true },
    ],
  },
  actualites: {
    title: 'Le fil de SJCD.', eyebrow: 'SJCD · Actualités',
    intro: 'Aucune actualité n’est publiée pour le moment. Les publications de démonstration de l’accueil sont des emplacements clairement identifiés.',
    blocks: [{ title: 'À venir', body: 'Actualités, activités et rapports trouveront leur place ici, avec une date et un contenu validés.', pending: true }],
  },
  'mentions-legales': {
    title: 'Mentions légales.', eyebrow: 'Préproduction · Document incomplet',
    intro: 'Cette page est un état des informations disponibles, pas une déclaration de conformité juridique. Les mentions définitives doivent être validées pour le droit applicable en RDC.',
    blocks: [
      { title: 'Organisation', body: 'Sanctuaire de Jeunes Chandelier pour le Développement (SJCD ASBL). Pays : République démocratique du Congo. Identité communiquée par SJCD.' },
      { title: 'Informations manquantes', body: 'Siège, numéro et autorité d’enregistrement, responsable de publication, coordonnées et hébergeur de production restent à fournir.', pending: true },
      { title: 'Droits et crédits', body: 'La flamme est une proposition graphique, non un logo officiel. Police Nunito : SIL Open Font License 1.1 (licence incluse dans la dépendance). Aucun visuel de terrain ni logo partenaire n’est utilisé. Le régime des droits du projet reste à valider.' },
    ],
  },
  confidentialite: {
    title: 'Vos données, avec attention.', eyebrow: 'Préproduction · Vie privée',
    intro: 'Cette version ne comporte aucun outil de mesure d’audience, pixel publicitaire, carte ou vidéo tierce. La police est servie localement.',
    blocks: [
      { title: 'Préparer un message', body: 'L’outil de contact prépare uniquement un brouillon dans votre navigateur. Les champs ne sont ni envoyés, ni enregistrés par l’application. Le téléchargement crée un fichier sur votre appareil ; évitez d’y inclure des informations sensibles.' },
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
      { title: 'Signaler une difficulté', body: 'L’adresse de contact dédiée n’est pas encore fournie. Un signalement technique peut être ouvert dans le dépôt public, sans donnée personnelle.', pending: true },
    ],
  },
};
