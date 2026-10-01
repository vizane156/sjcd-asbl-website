import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ProjectSheetView } from '@/components/ProjectSheetView';
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
  const published = projects.length;
  return (
    <PageShell
      eyebrow="SJCD ASBL · Catalogue de projets"
      title={published === 0
        ? 'Le catalogue est prêt. Aucun projet n’y figure encore.'
        : 'Un projet publié, en préparation, avec ses preuves.'}
      intro={published === 0
        ? 'Cet espace est conçu comme un véritable catalogue institutionnel : un modèle de fiche complet, quatre statuts de projet, et aucune publication sans source.'
        : 'Chaque fiche publiée porte un statut explicite, sa provenance et ses cibles. Ce qui n’est pas encore réalisé est écrit comme tel : un projet en préparation n’annonce aucun résultat.'}
    >
      <section className="doc-section" aria-labelledby="catalogue">
        <h2 id="catalogue">Catalogue</h2>
        {published === 0 ? (
          <EmptyState
            title={projectEmptyState.headline}
            detail={projectEmptyState.detail}
            note={projectEmptyState.whyEmpty}
          />
        ) : (
          <p className="muted" role="status">
            {published} projet publié. Les fiches sont présentées dans l’ordre de publication, avec
            leur provenance et leur statut.
          </p>
        )}
        {projects.map(project => <ProjectSheetView key={project.slug} project={project} />)}
      </section>

      <section className="doc-section" aria-labelledby="statuts-projet">
        <h2 id="statuts-projet">Les quatre statuts d&apos;un projet</h2>
        <p>Chaque fiche publiée porte l&apos;un de ces statuts, sans ambiguïté sur son avancement.</p>
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
          Chaque projet publié renseigne les champs suivants. Ce qui n&apos;est pas documenté reste
          vide et affiché comme tel, plutôt que complété par une approximation.
        </p>
        <ul className="sheet-fields">
          {SHEET_FIELDS.map(field => <li key={field}>{field}</li>)}
        </ul>
        <p className="muted">
          Un champ sans donnée reste visible comme manquant : zone <Undocumented label="—" />,
          résultats <Undocumented label="—" />. Le financement n&apos;est affiché que lorsqu&apos;il
          est public et documenté.
        </p>
      </section>

      <section className="doc-section" aria-labelledby="images">
        <h2 id="images">Images et droits</h2>
        <p>
          Une image n&apos;est affichée que si le fichier existe, si sa légende est rédigée et si
          les droits sont réunis. Dans le cas contraire, l&apos;emplacement reste visible et annoncé
          comme vide. Les visuels actuellement attendus pour Chandelier 360° sont des
          <strong> illustrations</strong> (banque d&apos;images ou images générées) : ils portent
          l&apos;étiquette « Illustration » et une mention précisant qu&apos;ils ne représentent pas
          une activité réalisée par SJCD. Seule une photographie prise lors d&apos;une activité de
          l&apos;association est présentée comme documentaire — et jamais sans autorisation des
          personnes identifiables.
        </p>
        <ul className="checklist">
          <li><span aria-hidden>✓</span>Fichier déposé dans <code>public/images/</code>, nommé selon le registre.</li>
          <li><span aria-hidden>✓</span>Légende et texte alternatif rédigés à partir de la photo réelle.</li>
          <li><span aria-hidden>✓</span>Autorisation écrite archivée pour toute personne identifiable.</li>
          <li><span aria-hidden>✓</span>Nature indiquée : photographie documentaire, ou illustration signalée comme telle avec sa source et sa licence.</li>
        </ul>
        <SourceRefs sources={['RI art. 42', 'S art. 45']} label="Références" />
        <p className="muted">
          Le registre des emplacements est décrit dans <code>public/images/README.md</code> et
          vérifié automatiquement par <code>npm run images:check</code>.
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
          pourquoi un projet n&apos;est pas annoncé comme engagé avant de l&apos;être réellement.
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
