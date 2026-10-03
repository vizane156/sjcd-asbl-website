import { BrandMark } from './BrandMark';
import { Footer } from './Footer';
export function PageShell({ eyebrow, title, intro, children }: {
  eyebrow: string; title: string; intro: string; children: React.ReactNode;
}) {
  return <>
    <a href="#main" className="skip">Aller au contenu</a>
    <header className="inner-header container">
      <a href="/" className="brand" aria-label="SJCD — accueil"><BrandMark /> SJCD ASBL</a>
      <a className="link back-link" href="/">← Retour à l’accueil</a>
    </header>
    <main id="main" className="inner-main container">
      <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="inner-lead">{intro}</p>
      <div className="inner-content">{children}</div>
    </main><Footer />
  </>;
}
