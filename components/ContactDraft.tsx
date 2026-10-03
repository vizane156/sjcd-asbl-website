'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { org, telHref } from '@/lib/content';

export function ContactDraft() {
  const [ready, setReady] = useState(false);
  const [subject, setSubject] = useState('partenariat');
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState('');
  useEffect(() => {
    setReady(true);
    const requested = new URLSearchParams(location.search).get('objet');
    if (requested === 'soutien') setSubject('soutien');
  }, []);
  const prepare = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();
    if (!name || !message) { setStatus('Le nom et le message ne peuvent pas être vides.'); return; }
    setDraft(`À l’attention de SJCD ASBL\nObjet : ${subject}\nDe : ${name}\nE-mail : ${form.get('email')}\n\n${message}\n\nBrouillon local — aucun envoi effectué.`);
    setStatus('Brouillon prêt. Aucun message n’a été envoyé à SJCD.');
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(draft); setStatus('Brouillon copié. Aucun envoi effectué.'); }
    catch { setStatus('La copie automatique est indisponible. Sélectionnez le texte ci-dessous ou téléchargez le brouillon.'); }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'message-sjcd-brouillon.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Brouillon téléchargé sur votre appareil. Aucun envoi effectué.');
  };
  return <div className="contact-grid">
    <aside className="contact-note"><span className="placeholder-tag">Envoi direct non activé</span>
      <h2>Un premier échange.</h2>
      <p>Les coordonnées officielles de SJCD sont publiées ci-dessous. Cet outil prépare un message que vous pourrez copier ou télécharger ; il ne l’envoie pas et rien n’est enregistré.</p>
      <dl className="contact-direct">
        <div><dt>E-mail</dt><dd><a className="link" href={`mailto:${org.email}`}>{org.email}</a></dd></div>
        <div><dt>Téléphone</dt><dd><a className="link" href={telHref}>{org.phone}</a></dd></div>
        <div><dt>Adresse</dt><dd>{org.address}</dd></div>
      </dl>
      <p>N’incluez pas de données sensibles ni d’informations personnelles sur des bénéficiaires.</p>
      <a className="link" href="/confidentialite">Comprendre la gestion des données</a>
    </aside>
    <div>
      <form onSubmit={prepare} onChange={() => { setDraft(''); setStatus(''); }}>
        <fieldset className="contact-form" disabled={!ready}><legend className="sr-only">Préparer un brouillon local</legend>
        <label htmlFor="subject">Je souhaite</label>
        <select id="subject" name="subject" value={subject} onChange={event => setSubject(event.target.value)}>
          <option value="partenariat">Explorer un partenariat</option><option value="soutien">Soutenir SJCD</option>
          <option value="benevolat">Proposer mes compétences</option><option value="autre">Poser une question</option>
        </select>
        <label htmlFor="name">Votre nom <span>(obligatoire)</span></label>
        <input id="name" name="name" autoComplete="name" required maxLength={100} />
        <label htmlFor="email">Votre e-mail <span>(obligatoire)</span></label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
        <label htmlFor="message">Votre message <span>(obligatoire)</span></label>
        <textarea id="message" name="message" rows={6} required minLength={10} maxLength={3000} aria-describedby="message-help" />
        <p id="message-help" className="form-help">10 à 3 000 caractères. Traitement local uniquement, sans envoi ni sauvegarde automatique.</p>
        <button type="submit" className="btn">Préparer mon brouillon <span aria-hidden>↗</span></button>
        </fieldset>
      </form>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
      {draft && <section className="draft-result" aria-label="Votre brouillon local">
        <h2>Votre message, prêt à conserver.</h2><pre tabIndex={0}>{draft}</pre>
        <div className="inner-actions"><button className="btn" onClick={copy}>Copier</button><button className="btn btn--ghost" onClick={download}>Télécharger le texte</button></div>
      </section>}
    </div>
  </div>;
}
