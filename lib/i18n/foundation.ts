export type Locale = 'fr' | 'en';
interface FoundationCopy {
  hero: { eyebrow: string; statement: string; impact: string; support: string };
  geography: { location: string; eyebrow: string; title: string; text: string; pending: string };
  transparency: { eyebrow: string; title: string; text: string; documents: string[]; pending: string };
  funding: { eyebrow: string; title: string; text: string; pending: string; action: string };
}
export const foundationCopy: Record<Locale, FoundationCopy> = {
  fr: {
    hero: { eyebrow: 'Société civile · Uvira / Sud-Kivu', statement: 'La jeunesse au cœur du développement des communautés.', impact: 'Découvrir notre impact', support: 'Soutenir SJCD' },
    geography: { location: 'Sud-Kivu · RD Congo', eyebrow: 'Ancrage territorial', title: 'À Uvira, au plus près des communautés.', text: 'SJCD est une organisation congolaise de la société civile, avec une forte présence à Uvira, au Sud-Kivu. Jeunesse, développement communautaire et impact social orientent son engagement.', pending: 'TODO(SJCD) : zones précises, localités et périmètre des interventions à documenter. Uvira ne constitue pas une adresse de siège confirmée.' },
    transparency: { eyebrow: 'Transparence & redevabilité', title: 'La confiance se construit avec des preuves.', text: 'Un espace documentaire pour comprendre le fonctionnement de SJCD et vérifier les informations publiées.', documents: ['Documents légaux et statutaires', 'Rapports annuels et financiers', 'Politiques et protection des personnes'], pending: 'TODO(SJCD) : documents validés à fournir. Aucun téléchargement disponible.' },
    funding: { eyebrow: 'Financer des actions utiles', title: 'Des projets à soutenir. Des engagements à préciser.', text: 'Les futures opportunités présenteront le besoin, les objectifs, le budget public, les fonds acquis et les résultats attendus. Aucun montant ni taux de financement n’est simulé.', pending: 'TODO(SJCD) : aucune opportunité de financement officielle fournie à ce jour.', action: 'Préparer une demande de collaboration' },
  },
  en: {
    hero: { eyebrow: 'Civil society · Uvira / South Kivu', statement: 'Young people at the heart of community development.', impact: 'Discover our impact', support: 'Support SJCD' },
    geography: { location: 'South Kivu · DR Congo', eyebrow: 'Local presence', title: 'In Uvira, close to communities.', text: 'SJCD is a Congolese civil society organization with a strong presence in Uvira, South Kivu. Its engagement focuses on youth, community development and social impact.', pending: 'TODO(SJCD): precise locations and intervention areas must be documented. Uvira is not a confirmed registered office address.' },
    transparency: { eyebrow: 'Transparency & accountability', title: 'Trust is built on evidence.', text: 'A document hub to understand SJCD’s operations and verify published information.', documents: ['Legal and statutory documents', 'Annual and financial reports', 'Policies and safeguarding'], pending: 'TODO(SJCD): approved documents required. No downloads available.' },
    funding: { eyebrow: 'Fund meaningful action', title: 'Projects to support. Commitments to define.', text: 'Future opportunities will explain the need, objectives, public budget, secured funding and expected results. No amount or funding percentage is simulated.', pending: 'TODO(SJCD): no official funding opportunity has been provided yet.', action: 'Prepare a collaboration enquiry' },
  },
};
