import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { pages } from '@/lib/pages';
import { nav } from '@/lib/content';

export function generateStaticParams() { return [...Object.keys(pages), 'plan-du-site'].map(page => ({ page })); }
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return { title: `${pages[page]?.title ?? 'Plan du site'} — SJCD ASBL` };
}
export default async function Interior({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  if (page === 'plan-du-site') {
    const routes = [...nav, ...Object.keys(pages)
      .filter(slug => !nav.some(link => link.href === `/${slug}`))
      .map(slug => ({ label: pages[slug].title, href: `/${slug}` }))];
    return <PageShell eyebrow="SJCD · Navigation" title="Plan du site." intro="Retrouvez toutes les pages de cette préversion.">
      <ul className="site-map">{routes.map(route => <li key={route.href}><a href={route.href}>{route.label}</a></li>)}</ul>
    </PageShell>;
  }
  if (!Object.hasOwn(pages, page)) notFound();
  const data = pages[page];
  return <PageShell {...data}>
    <div className="editorial-blocks">{data.blocks.map(block => <section key={block.title}>
      {block.pending && <span className="placeholder-tag">Informations à compléter</span>}
      <h2>{block.title}</h2><p>{block.body}</p>
    </section>)}</div>
    <div className="inner-actions"><a href="/contact" className="btn">Préparer un message <span aria-hidden>↗</span></a>
      <a href="/" className="link">Retour à l’accueil</a></div>
  </PageShell>;
}
