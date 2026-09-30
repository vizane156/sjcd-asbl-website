import { FlameMark } from './FlameMark';
import { org } from '@/lib/content';
export function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer__grid">
      <div><a href="/" className="brand"><FlameMark className="brand__mark" /> SJCD ASBL</a>
        <p className="footer__description">{org.name}.<br />{org.country}.</p>
        <p className="footer__provisional">Symbole graphique provisoire · à valider</p></div>
      <div><h2>Découvrir</h2><ul>
        <li><a href="/qui-sommes-nous">Qui sommes-nous</a></li><li><a href="/programmes">Domaines d’intervention</a></li>
        <li><a href="/projets">Projets</a></li><li><a href="/impact">Impact</a></li><li><a href="/actualites">Actualités</a></li>
      </ul></div>
      <div><h2>Faire ensemble</h2><ul>
        <li><a href="/#financement">Financement de projets</a></li><li><a href="/devenir-partenaire">Devenir partenaire</a></li><li><a href="/contact?objet=soutien">Soutenir SJCD</a></li>
        <li><a href="/contact">Contact</a></li><li>Coordonnées à fournir</li>
      </ul></div>
      <div><h2>Informations</h2><ul>
        <li><a href="/#transparence">Transparence</a></li><li><a href="/mentions-legales">Mentions légales</a></li><li><a href="/confidentialite">Confidentialité</a></li>
        <li><a href="/accessibilite">Accessibilité</a></li><li><a href="/plan-du-site">Plan du site</a></li>
      </ul></div>
    </div>
    <div className="footer__big" aria-hidden>SJCD<span>↗</span></div>
    <div className="footer__bottom"><span>© 2026 SJCD ASBL · Interface de préproduction</span><span>Contenus & identité visuelle en attente de validation</span></div>
  </div></footer>;
}
