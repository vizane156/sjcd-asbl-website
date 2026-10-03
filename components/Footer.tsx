import { BrandMark } from './BrandMark';
import { org, telHref } from '@/lib/content';
import { partnershipContact } from '@/lib/data/partnership';

export function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer__grid">
      <div>
        <a href="/" className="brand"><BrandMark /> SJCD ASBL</a>
        <p className="footer__description">{org.name}.<br />{org.legalFormLong}.</p>
        <p className="footer__description">
          <strong>Adresse :</strong><br />{org.address}<br />{org.registeredOffice}
        </p>
        <p className="footer__provisional">Logo officiel de SJCD</p>
      </div>

      <div><h2>Navigation institutionnelle</h2><ul>
        <li><a href="/qui-sommes-nous">Qui sommes-nous</a></li>
        <li><a href="/programmes">Programmes</a></li>
        <li><a href="/projets">Projets</a></li>
        <li><a href="/transparence">Transparence</a></li>
        <li><a href="/partenariats">Partenariats</a></li>
        <li><a href="/actualites">Actualités</a></li>
      </ul></div>

      <div><h2>Documents</h2><ul>
        <li><a href="/transparence#documents">Statuts</a></li>
        <li><a href="/transparence#documents">Règlement intérieur</a></li>
        <li><a href="/transparence#gouvernance">Gouvernance</a></li>
        <li><a href="/transparence#indicateurs">Indicateurs</a></li>
        <li><a href="/transparence#historique">Historique de publication</a></li>
      </ul></div>

      <div><h2>Contact</h2><ul>
        <li><a href="/contact">Préparer un message</a></li>
        <li><a href="/partenariats#contact-partenariat">Demande de collaboration</a></li>
        <li><a href="/contact?objet=soutien">Soutenir SJCD</a></li>
        <li><a href={`mailto:${org.email}`}>{org.email}</a></li>
        <li><a href={telHref}>{org.phone}</a></li>
      </ul></div>

      <div><h2>Informations</h2><ul>
        <li><a href="/mentions-legales">Mentions légales</a></li>
        <li><a href="/confidentialite">Politique de confidentialité</a></li>
        <li><a href="/accessibilite">Accessibilité</a></li>
        <li><a href="/plan-du-site">Plan du site</a></li>
        {partnershipContact.socialMedia.length === 0
          ? <li>Aucun réseau social officiel documenté</li>
          : partnershipContact.socialMedia.map(account => <li key={account.url}><a href={account.url} rel="noopener noreferrer">{account.label}</a></li>)}
      </ul></div>
    </div>
    <div className="footer__big" aria-hidden>SJCD<span>↗</span></div>
    <div className="footer__bottom">
      <span>© 2026 SJCD ASBL · Interface de préproduction</span>
      <span>Contenus & identité visuelle en attente de validation</span>
    </div>
  </div></footer>;
}
