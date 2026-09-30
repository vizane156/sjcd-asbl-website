'use client';

/**
 * Formulaire de demande de partenariat — brouillon local uniquement.
 *
 * Aucun service de réception n'existe : le formulaire n'envoie rien, n'enregistre rien
 * et ne stocke rien (ni fetch, ni localStorage, ni action de formulaire). Il prépare un
 * texte que la personne copie ou télécharge. Cette limite est affichée, pas dissimulée.
 */
import { useMemo, useState } from 'react';
import { partnershipTypes } from '@/lib/data/partnership';

const INTEREST_DOMAINS = [
  'Développement et autonomisation de la jeunesse',
  'Éducation, formation et développement des compétences',
  'Leadership, confiance en soi et prise de parole en public',
  'Santé sexuelle et reproductive',
  'Protection et soutien aux personnes vulnérables',
  'Développement communautaire et engagement citoyen',
];

export function PartnershipDraft() {
  const [form, setForm] = useState({
    name: '', organisation: '', role: '', email: '', phone: '',
    partnershipType: '', interestDomain: '', message: '', attachmentName: '',
  });
  const [copied, setCopied] = useState(false);
  const set = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(previous => ({ ...previous, [key]: event.target.value }));

  const complete = form.name && form.organisation && form.email && form.partnershipType && form.message;

  const draft = useMemo(() => {
    const lines = [
      'Demande de collaboration — SJCD ASBL',
      '==================================',
      '',
      `Nom : ${form.name || '—'}`,
      `Organisation : ${form.organisation || '—'}`,
      `Fonction : ${form.role || '—'}`,
      `E-mail : ${form.email || '—'}`,
      `Téléphone : ${form.phone || '—'}`,
      `Type de partenariat : ${partnershipTypes.find(t => t.id === form.partnershipType)?.label || '—'}`,
      `Domaine d’intérêt : ${form.interestDomain || '—'}`,
      `Pièce jointe prévue : ${form.attachmentName || 'aucune'}`,
      '',
      'Message',
      '-------',
      form.message || '—',
    ];
    return lines.join('\n');
  }, [form]);

  const download = () => {
    const blob = new Blob([draft], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'demande-collaboration-sjcd.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="contact-grid">
      <form className="contact-form" onSubmit={event => event.preventDefault()} aria-describedby="partnership-note">
        <div>
          <label htmlFor="p-name">Nom *</label>
          <input id="p-name" name="name" value={form.name} onChange={set('name')} autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="p-organisation">Organisation *</label>
          <input id="p-organisation" name="organisation" value={form.organisation} onChange={set('organisation')} autoComplete="organization" required />
        </div>
        <div>
          <label htmlFor="p-role">Fonction</label>
          <input id="p-role" name="role" value={form.role} onChange={set('role')} autoComplete="organization-title" />
        </div>
        <div>
          <label htmlFor="p-email">E-mail *</label>
          <input id="p-email" name="email" type="email" value={form.email} onChange={set('email')} autoComplete="email" required />
        </div>
        <div>
          <label htmlFor="p-phone">Téléphone</label>
          <input id="p-phone" name="phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="p-type">Type de partenariat *</label>
          <select id="p-type" name="partnershipType" value={form.partnershipType} onChange={set('partnershipType')} required>
            <option value="">Choisir une forme de collaboration</option>
            {partnershipTypes.map(type => <option key={type.id} value={type.id}>{type.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="p-domain">Domaine d’intérêt</label>
          <select id="p-domain" name="interestDomain" value={form.interestDomain} onChange={set('interestDomain')}>
            <option value="">Choisir un domaine</option>
            {INTEREST_DOMAINS.map(domain => <option key={domain} value={domain}>{domain}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="p-file">Pièce jointe (facultative)</label>
          <input
            id="p-file" name="attachment" type="file"
            onChange={event => setForm(previous => ({ ...previous, attachmentName: event.target.files?.[0]?.name ?? '' }))}
          />
          <p className="field-note">Le fichier n’est pas téléversé : seul son nom est mentionné dans le brouillon.</p>
        </div>
        <div>
          <label htmlFor="p-message">Message *</label>
          <textarea id="p-message" name="message" rows={6} value={form.message} onChange={set('message')} required />
        </div>
        <div className="contact-form__actions">
          <button type="button" className="btn btn--dark" disabled={!complete} onClick={() => { navigator.clipboard.writeText(draft).then(() => setCopied(true)); }}>
            {copied ? 'Brouillon copié' : 'Copier le brouillon'}
          </button>
          <button type="button" className="btn" disabled={!complete} onClick={download}>Télécharger</button>
        </div>
      </form>

      <div className="draft-result">
        <h3>Votre brouillon</h3>
        <pre aria-live="polite">{draft}</pre>
        <p id="partnership-note" className="contact-note">
          <strong>Aucun message n’est envoyé.</strong> Ce formulaire prépare un brouillon dans votre
          navigateur ; il ne transmet, n’enregistre ni ne conserve aucune donnée. Aucune adresse de
          réception institutionnelle n’est encore documentée : elle sera publiée dès qu’elle sera
          fournie par SJCD. Évitez d’inclure des informations sensibles.
        </p>
      </div>
    </div>
  );
}
