import { Navbar } from '@/components/Navbar';
import { HeroFlame } from '@/components/FlameMark';
import { SmoothScrollProvider, TiltCard } from '@/components/motion';
import { Footer } from '@/components/Footer';
import { org, domains, projects, metrics, stories, news } from '@/lib/content';

const INTRO = 'Allumer chez chaque jeune la lumière qui éclaire sa communauté, et la faire grandir en développement durable.';

function Placeholder({ label, tone = '' }: { label: string; tone?: string }) {
  return <div className={`ph ${tone}`} role="img" aria-label={`Emplacement photo : ${label}`}><span>Photo SJCD à venir</span></div>;
}

function Tag({ children = 'Contenu à fournir' }: { children?: React.ReactNode }) {
  return <span className="placeholder-tag">◌ {children}</span>;
}

const icons = [
  <path key="a" d="M12 3v18M3 12h18" />, <circle key="b" cx="12" cy="12" r="8" />,
  <path key="c" d="M4 18l6-6 4 4 6-8" />, <path key="d" d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />,
  <path key="e" d="M3 9l9-6 9 6-9 6-9-6zm3 3v5l6 4 6-4v-5" />,
];

export default function Home() {
  return (
    <SmoothScrollProvider>
      <a href="#main" className="skip">Aller au contenu</a>
      <Navbar />
      <div className="preview-label">Aperçu du design · contenus à valider</div>

      <main id="main">
        {/* 01 — HERO */}
        <section className="hero snap-start" id="top" aria-labelledby="hero-title">
          <div className="hero__bg" aria-hidden />
          <div className="hero__grid" aria-hidden />
          <div className="hero__flame" data-hero-flame><HeroFlame /></div>
          <div className="container hero__content">
            <p className="eyebrow" data-hero-fade>Jeunesse · Communauté · Développement</p>
            <h1 id="hero-title" style={{ marginTop: '1.25rem' }}>
              <span className="line-mask hero__acr" data-hero-line><span>SJCD</span></span>
              <span className="line-mask hero__name" data-hero-line><span>{org.name}</span></span>
            </h1>
            <p className="hero__lead" data-hero-fade>
              Une lumière à partager. Un avenir à construire ensemble.
            </p>
            <div className="hero__actions" data-hero-fade>
              <a href="/contact" className="btn">Collaborer avec SJCD <span className="arrow" aria-hidden>↗</span></a>
              <a href="#introduction" className="btn btn--ghost">Découvrir SJCD</a>
            </div>
            <div className="hero__meta" data-hero-fade>
              <a href="#introduction" className="scroll-cue"><span className="scroll-cue__line" aria-hidden /> Défiler pour découvrir</a>
              <span className="hero__location"><span className="location-dot" aria-hidden />République démocratique du Congo</span>
            </div>
          </div>
        </section>

        {/* 02 — INTRODUCTION */}
        <section className="section section--light snap-start" id="introduction" aria-labelledby="intro-title">
          <div className="container">
            <p className="eyebrow" data-reveal>Qui sommes-nous</p>
            <h2 id="intro-title" className="intro__statement" style={{ marginTop: '1.5rem' }} >
              {INTRO.split(' ').map((w, i) => <span key={i} className="w">{w} </span>)}
            </h2>
            <p style={{ marginTop: '1rem' }}><Tag>Formulation de la mission à valider par SJCD</Tag></p>
            <div className="intro__cols">
              <p data-reveal>
                Le Sanctuaire de Jeunes Chandelier pour le Développement est une association sans but lucratif établie en République
                démocratique du Congo. Sa présentation détaillée — histoire, valeurs, gouvernance — sera publiée dès validation par SJCD.
              </p>
              <dl className="fact-list" data-reveal>
                <div><dt>Forme juridique</dt><dd>ASBL</dd></div>
                <div><dt>Pays</dt><dd>RD Congo</dd></div>
                <div><dt>Enregistrement</dt><dd><Tag>À fournir</Tag></dd></div>
                <div><dt>Siège</dt><dd><Tag>À fournir</Tag></dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* 03 — DOMAINES (Bento) */}
        <section className="section snap-start" id="domaines" aria-labelledby="dom-title">
          <div className="container">
            <div className="sh sh--split">
              <div><p className="eyebrow">Domaines d’intervention</p>
                <h2 id="dom-title" style={{ marginTop: '1rem' }}>Là où la lumière se transmet.</h2></div>
              <p>Les domaines d’action de SJCD seront présentés ici. Aucun intitulé n’est affiché tant qu’il n’est pas confirmé.</p>
            </div>
            <div className="bento" data-stagger>
              {domains.map((d, i) => {
                const Card = i === 0 ? TiltCard : 'div';
                return <Card key={d.id} className={`tile ${i === 0 ? 'tile--feature' : ''}`}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div className="tile__icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{icons[i]}</svg></div>
                    <span className="tile__num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div><Tag />
                    <h3 style={{ marginTop: '.9rem', fontSize: i === 0 ? 'var(--fs-h2)' : undefined }}>{d.title}</h3>
                    <p>{d.text}</p></div>
                </Card>;
              })}
            </div>
          </div>
        </section>

        {/* 04 — PROJETS */}
        <section className="section section--light" id="projets" aria-labelledby="proj-title">
          <div className="container">
            <div className="sh sh--split">
              <div><p className="eyebrow">Projets</p><h2 id="proj-title" style={{ marginTop: '1rem' }}>Des actions, des lieux, des résultats.</h2></div>
              <p>Chaque projet sera présenté avec son problème, son action et ses résultats vérifiables.</p>
            </div>
            <div className="projects">
              {projects.map((p, i) => (
                <article key={p.id} className="project" data-reveal>
                  <div className="project__media" data-img-reveal><Placeholder label={p.title} tone={['', 'ph--warm', 'ph--sky'][i]} /></div>
                  <div className="project__body">
                    <div className="project__meta"><span className="chip">{p.place}</span><span className="chip">{p.status}</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <div><Tag /></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — IMPACT */}
        <section className="section impact snap-start" id="impact" aria-labelledby="impact-title">
          <div className="container">
            <div className="sh"><p className="eyebrow">Impact</p>
              <h2 id="impact-title">Des chiffres vérifiables, ou aucun chiffre.</h2>
              <p>Chaque indicateur sera publié avec sa période et sa source. Les catégories, comme les valeurs, restent à confirmer auprès de SJCD. Aucune statistique ne peut être déduite de cette mise en page.</p></div>
            <div className="stats" data-stagger>
              {metrics.map((m) => (
                <div key={m.label} className="stat">
                  <div className={`stat__value ${m.value ? '' : 'stat__value--empty'}`} aria-label={m.value ?? 'Valeur à fournir'}>{m.value ?? '—'}</div>
                  <div><div className="stat__label">{m.label}</div>
                    <div className="stat__src">{m.period && m.source ? `${m.period} · ${m.source}` : 'Période et source à fournir'}</div></div>
                </div>
              ))}
            </div>
            <p className="impact__note"><span aria-hidden>ⓘ</span> Règle de transparence : aucun chiffre n’est publié sans valeur, période et source validées par SJCD.</p>
          </div>
        </section>

        {/* 06 — HISTOIRES */}
        <section className="section" aria-labelledby="stories-title">
          <div className="container">
            <div className="sh sh--split">
              <div><p className="eyebrow">Histoires de terrain</p><h2 id="stories-title" style={{ marginTop: '1rem' }}>Des visages, des parcours.</h2></div>
              <p>Récits et photos publiés uniquement avec l’autorisation écrite des personnes représentées. Faites défiler horizontalement.</p>
            </div>
            <div className="stories" tabIndex={0} role="region" aria-label="Histoires de terrain, défilement horizontal" data-stagger>
              {stories.map((s, i) => (
                <article key={s.id} className="story">
                  <Placeholder label={s.title} tone={['ph--warm', '', 'ph--sky'][i]} />
                  <div className="story__body"><Tag /><h3 style={{ marginTop: '.75rem' }}>{s.title}</h3><p>{s.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — PARTENARIATS */}
        <section className="section section--light" id="partenaires" aria-labelledby="part-title">
          <div className="container">
            <div className="sh"><p className="eyebrow">Partenariats</p>
              <h2 id="part-title">Grandir ensemble.</h2>
              <p>Aucun logo n’est affiché sans autorisation écrite du partenaire.</p></div>
            <div className="partners" data-stagger>
              {Array.from({ length: 4 }, (_, i) => <div key={i} className="partner-slot">Emplacement partenaire<br />— autorisation requise</div>)}
            </div>
            <div className="partner-cta" data-reveal>
              <p>Institution, entreprise ou organisation : construisons un partenariat utile et mesurable.</p>
              <a href="/contact" className="btn btn--dark">Devenir partenaire <span className="arrow" aria-hidden>↗</span></a>
            </div>
          </div>
        </section>

        {/* 08 — ACTUALITÉS */}
        <section className="section" id="actualites" aria-labelledby="news-title">
          <div className="container">
            <div className="sh"><p className="eyebrow">Actualités</p><h2 id="news-title">Dernières publications.</h2></div>
            <p className="news-disclaimer"><Tag>Maquette éditoriale · aucune publication disponible</Tag></p>
            <div className="news" data-stagger>
              {news.map((n) => (
                <article key={n.id} className="news-card">
                  <div><div className="news-card__meta"><span>{n.kind}</span><span>{n.date}</span></div><h3>{n.title}</h3></div>
                  <span className="news-card__arrow" aria-hidden>◌</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 09 — CTA FINAL */}
        <section className="section cta" id="contact" aria-labelledby="cta-title">
          <div className="container" data-reveal>
            <p className="eyebrow">Agir avec SJCD</p>
            <h2 id="cta-title" style={{ marginTop: '1.25rem' }}>Portons la lumière plus loin, ensemble.</h2>
            <p>Collaborer, soutenir ou simplement nous écrire : chaque échange compte.</p>
            <div className="cta__actions">
              <a href="/contact" className="btn">Collaborer <span className="arrow" aria-hidden>↗</span></a>
              <a href="/contact?objet=soutien" className="btn btn--ghost">Soutenir</a>
              <a href="/contact" className="btn btn--ghost">Contacter SJCD</a>
            </div>
            <p style={{ marginTop: '1.5rem' }}><Tag>Coordonnées officielles à fournir</Tag></p>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
