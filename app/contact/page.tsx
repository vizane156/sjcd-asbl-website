import { PageShell } from '@/components/PageShell';
import { ContactDraft } from '@/components/ContactDraft';
export const metadata = { title: 'Préparer un échange — SJCD ASBL' };
export default function Contact() {
  return <PageShell eyebrow="SJCD · Faire ensemble" title="Tout commence par un échange."
    intro="Collaborer, soutenir, proposer une idée. Préparez votre message en attendant l’ouverture du contact officiel.">
    <noscript><p className="contact-note">L’outil de brouillon nécessite JavaScript. Aucun formulaire d’envoi n’est encore ouvert ; les coordonnées officielles restent à fournir.</p></noscript>
    <ContactDraft />
  </PageShell>;
}
