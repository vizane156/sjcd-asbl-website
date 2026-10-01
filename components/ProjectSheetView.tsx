import { AnimatedImage } from '@/components/motion/primitives';
import { EmptyState, SourceRefs } from '@/components/Source';
import { illustrationNote, mediaUrl } from '@/lib/data/media';
import type { MediaSlot } from '@/lib/data/media';
import { projectStatuses, type ProjectSheet } from '@/lib/data/projects';

const STATUS_IDS = Object.fromEntries(projectStatuses.map(status => [status.id, status.label]));

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><dt>{label}</dt><dd>{children}</dd></div>;
}

function GalleryItem({ slot }: { slot: MediaSlot }) {
  const src = mediaUrl(slot);
  const caption = src && slot.alt ? slot.alt : slot.brief;
  const credit = [slot.credit, slot.lieu, slot.priseLe].filter(Boolean).join(' · ');
  const licence = slot.licence ? `Licence : ${slot.licence}` : null;
  return (
    <figure className="sheet-gallery__item">
      <AnimatedImage className="sheet-gallery__media" src={src ?? undefined} alt={caption} />
      <figcaption className="sheet-gallery__caption">
        {slot.nature === 'illustration' && <span className="chip chip--warning">Illustration</span>}
        <span>{caption}</span>
        {slot.nature === 'illustration'
          ? <span className="sheet-gallery__pending">{illustrationNote}</span>
          : <span className="sheet-gallery__credit">Photographie documentaire prise sur le terrain.</span>}
        {(credit || licence) && <span className="sheet-gallery__credit">{[credit, licence].filter(Boolean).join(' · ')}</span>}
        {!src && <span className="sheet-gallery__pending">Emplacement réservé — aucune image publiée à ce stade.</span>}
      </figcaption>
    </figure>
  );
}

export function ProjectSheetView({ project }: { project: ProjectSheet }) {
  const publishedMedia = project.gallery.filter(slot => mediaUrl(slot)).length;
  return (
    <article className="sheet" id={project.slug} aria-labelledby={`${project.slug}-title`}>
      <header className="sheet__header">
        <p className="eyebrow">SJCD ASBL · Fiche projet</p>
        <h2 id={`${project.slug}-title`}>{project.title}</h2>
        <div className="sheet__status">
          <span className={`chip chip--status chip--${project.status}`}>
            {STATUS_IDS[project.status] ?? project.status}
          </span>
          {project.publishedAt && <span className="chip">Fiche publiée le {project.publishedAt}</span>}
          <span className="chip">{project.reference}</span>
        </div>
        <SourceRefs sources={project.sources} label="Provenance" />
      </header>

      <h3>Résumé</h3>
      <p>{project.summary}</p>

      <h3>Contexte</h3>
      <p>{project.context}</p>

      <h3>Problème</h3>
      <p>{project.problem}</p>

      <h3>Objectifs</h3>
      <p><strong>Objectif général.</strong> {project.generalObjective}</p>
      <h4>Objectifs spécifiques</h4>
      <ol>
        {project.objectives.map(objective => <li key={objective}>{objective}</li>)}
      </ol>

      <h3>Publics cibles</h3>
      <h4>Bénéficiaires directs — 500 jeunes, principalement de 18 à 35 ans</h4>
      <ul>
        {project.audiences.map(audience => <li key={audience}>{audience}</li>)}
      </ul>
      <h4>Bénéficiaires indirects</h4>
      <p>{project.indirectAudiences}</p>

      <h3>Repères du projet</h3>
      <dl className="organ-facts">
        <Field label="Statut">{STATUS_IDS[project.status]}</Field>
        <Field label="Zone d’intervention">{project.zone}</Field>
        <Field label="Période">{project.timeline}</Field>
        <Field label="Référence interne">{project.reference}</Field>
      </dl>

      <h3>Actions prévues</h3>
      <p>
        Les six phases ci-dessous décrivent ce qui est <strong>prévu</strong>. Elles ne
        constituent pas des activités réalisées.
      </p>
      <ol className="agenda">
        {project.phases.map((phase, index) => (
          <li key={phase.title}>
            <span className="agenda__step">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h4>{phase.title}</h4>
              <ul>
                {phase.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3>Actions réalisées</h3>
      <p className="sheet__pending">{project.completedActionsNote}</p>
      {project.completedActions.length === 0 && (
        <p className="muted">
          Aucune action déclarée comme réalisée à ce jour. La liste sera mise à jour au fur et
          à mesure de l’avancement, avec la même exigence de preuve.
        </p>
      )}

      <h3>Résultats attendus</h3>
      <p className="muted">
        Objectifs que le projet se fixe. Ce ne sont pas des résultats obtenus : le projet n’a pas
        encore démarré.
      </p>
      <ul>
        {project.results.map(result => <li key={result}>{result}</li>)}
      </ul>

      <h3>Indicateurs</h3>
      <table className="method-table">
        <caption>Cibles annoncées dans la fiche projet</caption>
        <thead>
          <tr><th scope="col">Indicateur</th><th scope="col">Cible</th></tr>
        </thead>
        <tbody>
          {project.targets.map(target => (
            <tr key={target.label}>
              <th scope="row">{target.label}</th>
              <td>{target.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="muted">
        Ces cibles sont des engagements de formulation. Aucune valeur atteinte n’est publiée ici
        tant que la mise en œuvre n’a pas commencé et que le suivi n’a pas produit de données
        vérifiables.
      </p>

      <h3>Partenaires</h3>
      <EmptyState
        title="Aucun partenaire n’est annoncé pour ce projet."
        detail="La fiche identifie des catégories de partenaires recherchés, sans nommer d’organisation. Aucun logo ne sera publié sans accord écrit et autorisation d’usage."
      />
      <h4>Partenaires recherchés</h4>
      <ul className="chips">
        {project.partnerCategories.map(category => (
          <li key={category}><span className="chip">{category}</span></li>
        ))}
      </ul>
      <p className="muted">Statut des partenariats : à confirmer selon la phase de mobilisation du projet.</p>

      <h3>Financement</h3>
      {project.funding ? (
        <>
          <dl className="organ-facts">
            <Field label="Montant"><strong>{project.funding.amount} {project.funding.currency}</strong></Field>
            <Field label="Nature">{project.funding.model}</Field>
            <Field label="Source publique">{project.funding.source}</Field>
          </dl>
          <p className="muted">
            Budget indicatif. Le budget définitif sera établi après validation de la zone
            d’intervention, du nombre exact de bénéficiaires, des ressources disponibles et des
            exigences du bailleur. Aucun financement n’est acquis à ce jour.
          </p>
          <h4>Principales catégories budgétaires</h4>
          <ul>
            {project.budgetCategories.map(category => <li key={category}>{category}</li>)}
          </ul>
        </>
      ) : (
        <p className="muted">Aucun financement public documenté n’est publié pour ce projet.</p>
      )}

      <h3>Galerie</h3>
      <p className="muted">
        {project.gallery.length} emplacements photo prévus · {publishedMedia} publiée
        {publishedMedia > 1 ? 's' : ''}. Aucune image n’est présentée comme réelle qu’elle ne le
        soit : chaque emplacement reste vide tant que la photo, sa légende et ses droits ne sont
        pas réunis (voir <code>public/images/README.md</code>).
      </p>
      <div className="sheet-gallery">
        {project.gallery.map(slot => <GalleryItem key={slot.id} slot={slot} />)}
      </div>
      <p className="muted">
        Les visuels attendus pour ce projet sont des <strong>illustrations</strong> : elles seront
        publiées avec l’étiquette « Illustration » et une mention explicite indiquant qu’elles ne
        représentent pas une activité réalisée par SJCD. Aucune illustration ne sera présentée comme
        un reportage de terrain.
      </p>

      <h3>Documents</h3>
      {project.documents.length === 0 ? (
        <p className="muted">
          Aucun document n’est téléchargeable à ce jour. Les documents ci-dessous seront publiés
          progressivement, une fois validés par les organes compétents.
        </p>
      ) : (
        <ul>
          {project.documents.map(document => (
            <li key={document.label}><a href={document.url}>{document.label}</a></li>
          ))}
        </ul>
      )}
      <ul className="sheet-fields">
        {project.plannedDocuments.map(document => <li key={document}>{document}</li>)}
      </ul>
    </article>
  );
}
