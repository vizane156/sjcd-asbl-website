import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { EmptyState, SourceRefs, Undocumented } from '@/components/Source';
import {
  openingChecklist, projectCycleSteps, projectEmptyState, projects, projectStatuses,
} from '@/lib/data/projects';

export const metadata: Metadata = { title: 'Projets — SJCD ASBL' };

const SHEET_FIELDS = [
  'Titre', 'Slug', 'Résumé', 'Contexte', 'Problème ou besoin', 'Objectifs', 'Publics concernés',
  'Zone ou territoire', 'Période et calendrier', 'Actions prévues', 'Actions réalisées', 'Résultats',
  'Indicateurs', 'Partenaires', 'Financement (seulement s’il est public et documenté)',
  'Galerie et images', 'Documents téléchargeables', 'Statut du projet', 'Date de publication',
];

export default function Projets() {
  return (
    <PageShell
      eyebrow="SJCD ASBL · Catalogue de projets"
      title="Le catalogue est prêt. Aucun projet n’y figure encore."
      intro="Cet espace est conçu comme un véritable catalogue institutionnel : un modèle de fiche complet, quatre statuts de projet, et aucune publication sans source. Aucun projet n’est inventé pour remplir la page."
    >
      <section className="doc-section" aria-labelledby="catalogue">
        <h2 id="catalogue">Catalogue</h2>
        <EmptyState
          title={projectEmptyState.headline}
          detail={projectEmptyState.detail}
          note={projectEmptyState.whyEmpty}
        />
        {projects.length === 0 && (
          <p className="muted" role="status">
            {projects.length} projet publié — le catalogue est vide et le restera tant qu&apos;aucun
            projet documenté n&apos;aura été fourni.
          </p>
        )}
      </section>

      <section className="doc-section" aria-labelledby="statuts-projet">
        <h2 id="statuts-projet">Les quatre statuts d&apos;un projet</h2>
        <p>Chaque fiche publiée portera l&apos;un de ces statuts, sans ambiguïté sur son avancement.</p>
        <div className="status-grid">
          {projectStatuses.map(status => (
            <article key={status.id} className="status-card">
              <span className={`status-card__dot status-card__dot--${status.id}`} aria-hidden />
              <h3>{status.label}</h3>
              <p>{status.description}</p>
              <p className="status-card__count">
                {projects.filter(project => project.status === status.id).length} projet
                {projects.filter(project => project.status === status.id).length > 1 ? 's' : ''}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="doc-section" aria-labelledby="fiche">
        <h2 id="fiche">Le modèle de fiche</h2>
        <p>
          Chaque projet publié renseignera les champs suivants. Ce qui n&apos;est pas documenté reste
          vide et affiché comme tel, plutôt que complété par une approximation.
        </p>
        <ul className="sheet-fields">
          {SHEET_FIELDS.map(field => <li key={field}>{field}</li>)}
        </ul>
        <p className="muted">
          Exemple de ce que donnera une fiche tant que les données manquent : titre{' '}
          <Undocumented label="—" />, zone <Undocumented label="—" />, résultats{' '}
          <Undocumented label="—" />, financement <Undocumented label="—" />.
        </p>
      </section>

      <section className="doc-section" aria-labelledby="cycle">
        <h2 id="cycle">La méthode de gestion de projet</h2>
        <p>
          Ce qui est présenté ici n&apos;est pas une réalisation : c&apos;est le cycle de gestion prévu par
          le règlement intérieur, appliqué à tout projet avant sa mise en œuvre.
        </p>
        <ol className="agenda">
          {projectCycleSteps.map((step, index) => (
            <li key={step.sources[0]}>
              <span className="agenda__step">{String(index + 1).padStart(2, '0')}</span>
              <div>{step.value}<SourceRefs sources={step.sources} label="" /></div>
            </li>
          ))}
        </ol>
        <SourceRefs sources={['RI art. 40']} />

        <h3>Check-list d&apos;ouverture d&apos;une activité</h3>
        <p>
          Dix vérifications sont requises avant l&apos;ouverture de toute activité. Elles expliquent
          pourquoi un projet n&apos;est pas publié sur ce site avant d&apos;avoir été réellement engagé.
        </p>
        <ul className="checklist">
          {openingChecklist.map(item => (
            <li key={item.value}><span aria-hidden>✓</span>{item.value}</li>
          ))}
        </ul>
        <SourceRefs sources={['RI annexe 2']} />
      </section>

      <div className="inner-actions">
        <a href="/transparence" className="btn">Espace transparence <span aria-hidden>→</span></a>
        <a href="/partenariats" className="link">Proposer une collaboration</a>
      </div>
    </PageShell>
  );
}
