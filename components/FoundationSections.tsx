import { SectionHeader } from './SectionHeader';
import { foundationCopy, type Locale } from '@/lib/i18n/foundation';
export function GeographicSection({ locale = 'fr' }: { locale?: Locale }) {
  const copy = foundationCopy[locale].geography;
  return <section id="territoire" className="section section--light" aria-labelledby="territory-title">
    <div className="container territorial-grid"><SectionHeader id="territory-title" eyebrow={copy.eyebrow} title={copy.title} description={copy.text} /><aside className="territorial-note"><span className="territorial-label">UVIRA</span><p>{copy.location}</p><p className="foundation-pending">{copy.pending}</p></aside></div>
  </section>;
}
export function AccountabilitySections({ locale = 'fr' }: { locale?: Locale }) {
  const { transparency, funding } = foundationCopy[locale];
  return <>
    <section id="transparence" className="section" aria-labelledby="transparency-title"><div className="container">
      <SectionHeader id="transparency-title" eyebrow={transparency.eyebrow} title={transparency.title} description={transparency.text} />
      <div className="document-foundation">{transparency.documents.map((title, i) => <article key={title}><span aria-hidden>0{i + 1}</span><h3>{title}</h3><p>{transparency.pending}</p></article>)}</div>
    </div></section>
    <section id="financement" className="section section--light" aria-labelledby="funding-title"><div className="container territorial-grid">
      <SectionHeader id="funding-title" eyebrow={funding.eyebrow} title={funding.title} description={funding.text} />
      <aside className="funding-empty"><span className="placeholder-tag">TODO(SJCD)</span><p>{funding.pending}</p><a href="/contact?objet=soutien" className="btn btn--dark">{funding.action} <span aria-hidden>↗</span></a></aside>
    </div></section>
  </>;
}
