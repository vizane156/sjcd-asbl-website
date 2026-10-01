import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SourceRefs, Undocumented, LegalNotice } from '@/components/Source';
import { programEmptyState, programs, transversalDomains, weeklyGathering } from '@/lib/data/programs';
import { statutoryDomains } from '@/lib/statuts';

export const metadata: Metadata = { title: 'Programmes — SJCD ASBL' };

export default function Programmes() {
  return (
    <PageShell
      eyebrow="SJCD ASBL · Domaines d’intervention"
      title="Six domaines d’intervention, inscrits dans les statuts."
      intro="Les domaines présentés ici sont ceux que l’article 6 des statuts énonce littéralement, croisés avec les objectifs spécifiques de l’article 9 et les modalités du règlement intérieur. Chaque fiche cite ses articles."
    >
      <LegalNotice title="Domaines statutaires, pas programmes opérationnels" level={2}>
        <p>{programEmptyState.status}</p>
        <SourceRefs sources={['S art. 6', 'S art. 11', 'RI art. 36']} label="Références" />
      </LegalNotice>

      <section className="doc-section" aria-labelledby="programmes">
        <h2 id="programmes">Les programmes</h2>
        <div className="program-grid">
          {programs.map((program, index) => (
            <article key={program.id} className="program-card" aria-labelledby={`program-${program.slug}`}>
              <span className="program-card__num">{String(index + 1).padStart(2, '0')}</span>
              <h3 id={`program-${program.slug}`}>{program.title}</h3>
              <p>{program.summary}</p>
              <SourceRefs sources={program.sources} />

              <h4>Objectifs</h4>
              <ul>
                {program.objectives.map(objective => (
                  <li key={objective.text}>{objective.text}<SourceRefs sources={objective.sources} label="" /></li>
                ))}
              </ul>

              <h4>Publics concernés</h4>
              <ul>
                {program.audiences.map(audience => (
                  <li key={audience.text}>{audience.text}<SourceRefs sources={audience.sources} label="" /></li>
                ))}
              </ul>

              <h4>Types d’activités</h4>
              <ul>
                {program.activityTypes.map(activity => (
                  <li key={activity.text}>{activity.text}<SourceRefs sources={activity.sources} label="" /></li>
                ))}
              </ul>

              <h4>Territoire d’intervention</h4>
              {program.territory ? (
                <><p>{program.territory.text}</p><SourceRefs sources={program.territory.sources} /></>
              ) : (
                <p className="muted"><Undocumented label="Aucun territoire documenté" /></p>
              )}

              <p className="program-card__status">
                <span className="chip">Domaine statutaire</span>
              </p>
            </article>
          ))}
        </div>
        <p className="muted">{programEmptyState.territory}</p>
      </section>

      <section className="doc-section" aria-labelledby="transversal">
        <h2 id="transversal">Deux domaines transversaux</h2>
        <p>
          L&apos;article 6 énonce huit domaines. Six d&apos;entre eux structurent les programmes
          ci-dessus ; les deux derniers les traversent tous et ne constituent pas des programmes
          distincts.
        </p>
        <div className="layers">
          {transversalDomains.map(domain => (
            <article key={domain.title} className="layer-card">
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
              <SourceRefs sources={domain.sources} label="" />
            </article>
          ))}
        </div>
        <details className="fold">
          <summary>Les huit domaines dans leur formulation statutaire (S art. 6)</summary>
          <ol className="numbered">
            {statutoryDomains.map(domain => <li key={domain.sources[0]}>{domain.value}</li>)}
          </ol>
        </details>
      </section>

      <section className="doc-section" aria-labelledby="rencontres">
        <h2 id="rencontres">Rencontres de jeunes</h2>
        <p>
          Le règlement intérieur prévoit que SJCD peut tenir des réunions régulières de membres,
          notamment des rencontres hebdomadaires ou thématiques.
        </p>
        <blockquote>{weeklyGathering.statutoryBasis}</blockquote>
        <SourceRefs sources={weeklyGathering.sources} />

        <LegalNotice title="Jour, horaire et lieu non documentés">
          <p>
            Ni le jour, ni l&apos;heure, ni le lieu de ces rencontres ne figurent dans les statuts ou le
            règlement intérieur : le calendrier détaillé est arrêté périodiquement par le
            Coordinateur en concertation avec le Conseil d&apos;administration. Ces informations seront
            publiées dès qu&apos;elles seront documentées.
          </p>
          <dl className="organ-facts">
            <div><dt>Jour</dt><dd><Undocumented label="Non précisé" /></dd></div>
            <div><dt>Horaire</dt><dd><Undocumented label="Non précisé" /></dd></div>
            <div><dt>Lieu</dt><dd><Undocumented label="Non précisé" /></dd></div>
          </dl>
          <SourceRefs sources={['RI art. 36']} label="Références" />
        </LegalNotice>

        <h3>Nature de ces rencontres</h3>
        <p>{weeklyGathering.nature}</p>
        <p className="office-card__limit"><strong>Règle explicite :</strong> {weeklyGathering.notAStatutoryBody}</p>
        <SourceRefs sources={['RI art. 36', 'S art. 20']} />

        <h3>Ce qu&apos;on y trouve</h3>
        <ul className="chips">
          {weeklyGathering.purposes.map(purpose => (
            <li key={purpose.text}>
              <span className="chip">{purpose.text}</span>
              <SourceRefs sources={purpose.sources} label="" />
            </li>
          ))}
        </ul>

        <h3>Déroulement recommandé</h3>
        <p>Le règlement intérieur recommande un déroulement en huit temps.</p>
        <ol className="agenda">
          {weeklyGathering.recommendedAgenda.map(item => (
            <li key={item.step}>
              <span className="agenda__step">{String(item.step).padStart(2, '0')}</span>
              <div>{item.text}<SourceRefs sources={item.sources} label="" /></div>
            </li>
          ))}
        </ol>

        <h3>Cadre des échanges</h3>
        <p>{weeklyGathering.conductRules}</p>
        <SourceRefs sources={['RI art. 38']} />
      </section>

      <div className="inner-actions">
        <a href="/projets" className="btn">Voir l&apos;espace projets <span aria-hidden>→</span></a>
        <a href="/partenariats" className="link">Proposer une collaboration</a>
      </div>
    </PageShell>
  );
}
