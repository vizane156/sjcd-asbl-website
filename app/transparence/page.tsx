import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { EmptyState, LegalNotice, SourceRefs, Undocumented } from '@/components/Source';
import {
  documentCategories, institutionalDocuments, publicationHistory, transparencyEmptyStates,
} from '@/lib/data/documents';
import { indicatorEmptyState, indicatorMethodology, indicatorRules, indicators } from '@/lib/data/indicators';
import { governanceOrgans, mandateRules, publishedOffices, publishOfficeHolders, officeHolderCaveat } from '@/lib/data/governance';
import {
  accountability, amendmentAndDissolution, identity, legalStatus, normativeHierarchy,
  plannedInternalDocuments, resourceCategories,
} from '@/lib/statuts';

export const metadata: Metadata = { title: 'Transparence — SJCD ASBL' };

export default function Transparence() {
  const offices = publishedOffices();
  const namedOffices = offices.filter(office => office.holder);

  return (
    <PageShell
      eyebrow="SJCD ASBL · Espace documentaire"
      title="Transparence."
      intro="Cet espace indique ce que SJCD peut établir aujourd’hui, ce qui existe réellement, et ce qui manque. Aucun document, chiffre ou engagement n’y est affiché sans source."
    >
      {/* A. Informations légales */}
      <section className="doc-section" aria-labelledby="legal">
        <h2 id="legal">Informations légales</h2>
        <dl className="fact-list">
          <div><dt>Dénomination officielle</dt><dd>{identity.officialName.value}</dd></div>
          <div><dt>Sigle</dt><dd>{identity.acronym.value}</dd></div>
          <div><dt>Siège social</dt><dd>{identity.registeredOffice.value}</dd></div>
          <div><dt>Adresse précise du siège</dt><dd><Undocumented label="Rue, quartier, commune" /></dd></div>
          <div><dt>Forme juridique</dt><dd>{identity.legalForm.value}</dd></div>
          <div><dt>Caractère</dt><dd>{identity.character.value}</dd></div>
          <div><dt>Ressort territorial</dt><dd>Vocation nationale — République démocratique du Congo</dd></div>
          <div><dt>Numéro d&apos;enregistrement</dt><dd><Undocumented label="Aucun dans les documents" /></dd></div>
          <div><dt>Autorité d&apos;enregistrement</dt><dd><Undocumented label="Non précisée" /></dd></div>
          <div><dt>Exercice social</dt><dd>{identity.fiscalYear.value}</dd></div>
          <div><dt>Durée</dt><dd>{identity.duration.value}</dd></div>
        </dl>
        <SourceRefs sources={['S art. 1', 'S art. 2', 'S art. 3', 'S art. 4', 'S art. 5', 'S art. 40']} />
        <p className="muted">{transparencyEmptyStates.legal}</p>

        <LegalNotice title="Statut juridique : ce que les documents permettent d’affirmer">
          <p>{legalStatus.statement}</p>
          <p>{legalStatus.formalizationNote}</p>
          <dl className="organ-facts">
            <div><dt>Personnalité juridique opposable attestée</dt><dd>Non</dd></div>
            <div><dt>Adoption formelle attestée</dt><dd>Non — divergence entre la page de garde et l&apos;acte d&apos;adoption</dd></div>
            <div><dt>Notarisation</dt><dd>« Les signatures et la forme authentique des présents statuts sont à établir »</dd></div>
            <div><dt>Dépôt et publication</dt><dd>Non attestés</dd></div>
          </dl>
          <SourceRefs sources={legalStatus.sources} label="Références" />
        </LegalNotice>
      </section>

      {/* B. Gouvernance */}
      <section className="doc-section" aria-labelledby="gouvernance">
        <h2 id="gouvernance">Gouvernance</h2>
        <p>
          Deux organes statutaires : l&apos;Assemblée générale, organe souverain, et le Conseil
          d&apos;administration, organe de gouvernance et d&apos;exécution stratégique.
        </p>
        <div className="layers">
          {governanceOrgans.map(organ => (
            <article key={organ.id} className="layer-card">
              <h3>{organ.name}</h3>
              <p className="organ-card__role">{organ.role}</p>
              <p>{organ.composition}</p>
              <p className="office-card__limit"><strong>Quorum :</strong> {organ.quorum}</p>
              <SourceRefs sources={organ.sources} label="" />
            </article>
          ))}
        </div>

        <h3>Mandats</h3>
        <dl className="organ-facts">
          <div><dt>Durée</dt><dd>{mandateRules.term}</dd></div>
          <div><dt>Élection</dt><dd>{mandateRules.election}</dd></div>
          <div><dt>Fin des fonctions</dt><dd>{mandateRules.endOfTerm}</dd></div>
          <div><dt>Mandat en cours</dt><dd><Undocumented label="Dates non documentées" /></dd></div>
        </dl>
        <SourceRefs sources={mandateRules.sources} />

        <h3>Fonctions prévues et titulaires documentés</h3>
        <p>
          Les dix fonctions du Conseil d&apos;administration sont prévues par l&apos;article 27 des statuts.
          Seules trois sont pourvues d&apos;un nom dans les documents.
        </p>
        {publishOfficeHolders && namedOffices.length > 0 ? (
          <>
            <ul className="holder-list">
              {namedOffices.map(office => (
                <li key={office.id}>
                  <span className="holder-list__role">{office.title}</span>
                  <span className="holder-list__name">{office.holder}</span>
                  <SourceRefs sources={office.holderSource ? [office.holderSource] : []} label="" />
                </li>
              ))}
            </ul>
            <p className="muted">{officeHolderCaveat}</p>
            <p className="muted">
              Les sept autres fonctions — Vice-président, Secrétaire général adjoint, Trésorier
              adjoint, Coordinateur, Porte-parole, Conseiller, Conseiller adjoint — ne sont pourvues
              d&apos;aucun nom dans les documents.
            </p>
          </>
        ) : (
          <p className="muted">Aucun titulaire n&apos;est publié. La composition détaillée est présentée sur la page « Qui sommes-nous ».</p>
        )}
        <p><a className="link" href="/qui-sommes-nous#gouvernance">Voir l&apos;architecture complète de la gouvernance →</a></p>

        <h3>Hiérarchie des documents internes</h3>
        <ol className="hierarchy">
          {normativeHierarchy.map(level => (
            <li key={level.level}>
              <span className="hierarchy__level">{level.level}</span>
              <div><strong>{level.document}</strong><span>{level.role}</span></div>
            </li>
          ))}
        </ol>
        <p className="muted">{amendmentAndDissolution.precedence.value}</p>
        <SourceRefs sources={['RI préambule', 'S art. 49']} />
      </section>

      {/* C. Documents */}
      <section className="doc-section" aria-labelledby="documents">
        <h2 id="documents">Documents</h2>
        <p>
          Huit catégories documentaires sont prévues. Deux documents existent dans le dépôt ; les
          sept autres catégories sont vides et le restent tant qu&apos;aucun document adopté n&apos;est
          fourni.
        </p>

        {documentCategories.map(category => {
          const docs = institutionalDocuments.filter(doc => category.documentIds.includes(doc.id));
          return (
            <article key={category.id} className="category-card">
              <h3>{category.title}</h3>
              <p className="muted">{category.description}</p>
              {docs.length === 0 ? (
                <p className="category-card__empty">{transparencyEmptyStates.category}</p>
              ) : (
                docs.map(doc => (
                  <div key={doc.id} className="document-row">
                    <div>
                      <h4>{doc.title}</h4>
                      <p className="document-row__meta">
                        <span className="chip">{doc.version}</span>
                        <span className="chip chip--warning">{doc.statusLabel}</span>
                      </p>
                      <p>{doc.summary}</p>
                      <p className="document-row__reservation">{doc.reservation}</p>
                      <SourceRefs sources={doc.sources} label="" />
                    </div>
                    <p className="document-row__file"><code>{doc.fileName}</code></p>
                  </div>
                ))
              )}
            </article>
          );
        })}

        <LegalNotice title="Pourquoi aucun téléchargement n’est proposé">
          <p>{transparencyEmptyStates.download}</p>
          <p>
            Les deux fichiers sont conservés dans le dépôt du projet, sous{' '}
            <code>documents/administratifs/</code>, à des fins de travail institutionnel.
          </p>
        </LegalNotice>

        <h3>Documents internes prévus par les statuts</h3>
        <p>
          L&apos;annexe B des statuts et l&apos;annexe 3 du règlement intérieur annoncent onze documents
          internes. Un seul existe aujourd&apos;hui, et il n&apos;est pas attesté comme adopté.
        </p>
        <ul className="planned-docs">
          {plannedInternalDocuments.map(doc => (
            <li key={doc.title} className={doc.present ? 'planned-docs--present' : ''}>
              <span aria-hidden>{doc.present ? '◐' : '○'}</span>
              <span>{doc.title}</span>
              <span className="planned-docs__state">{doc.present ? 'Présent — adoption non attestée' : 'À produire'}</span>
            </li>
          ))}
        </ul>
        <SourceRefs sources={['S annexe B', 'RI annexe 3']} />
      </section>

      {/* D. Indicateurs */}
      <section className="doc-section" aria-labelledby="indicateurs">
        <h2 id="indicateurs">Indicateurs et impact</h2>
        <EmptyState title={indicatorEmptyState.headline} detail={indicatorEmptyState.detail} />

        <h3>Méthodologie de publication</h3>
        <p>
          Chaque indicateur publié comportera obligatoirement les six mentions suivantes. Cette
          exigence découle des règles de traçabilité comptable et documentaire de l&apos;association.
        </p>
        <table className="method-table">
          <caption>Les six mentions obligatoires d&apos;un indicateur</caption>
          <thead><tr><th scope="col">Mention</th><th scope="col">Règle</th><th scope="col">Fondement</th></tr></thead>
          <tbody>
            {indicatorMethodology.map(row => (
              <tr key={row.field}>
                <th scope="row">{row.field}</th>
                <td>{row.rule}</td>
                <td><SourceRefs sources={row.sources} label="" /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Règles applicables</h3>
        <ul className="numbered">
          <li>{indicatorRules.noSourceNoNumber}</li>
          <li>{indicatorRules.traceability}</li>
          <li>{indicatorRules.verification}</li>
          <li>{indicatorRules.categoriesAwaited}</li>
        </ul>
        <SourceRefs sources={indicatorRules.sources} />
        <p className="muted" role="status">{indicators.length} indicateur publié.</p>
      </section>

      {/* Redevabilité */}
      <section className="doc-section" aria-labelledby="redevabilite">
        <h2 id="redevabilite">Redevabilité financière et protection</h2>
        <dl className="organ-facts">
          <div><dt>Comptes et budget</dt><dd>{accountability.financial.value}</dd></div>
          <div><dt>Contrôle et audit</dt><dd>{accountability.audit.value}</dd></div>
          <div><dt>Distribution de bénéfices</dt><dd>{accountability.noDistribution.value}</dd></div>
          <div><dt>Conflits d&apos;intérêts</dt><dd>{accountability.conflictsOfInterest.value}</dd></div>
          <div><dt>Tolérance zéro</dt><dd>{accountability.zeroTolerance.value}</dd></div>
          <div><dt>Protection et safeguarding</dt><dd>{accountability.safeguarding.value}</dd></div>
          <div><dt>Point focal de protection</dt><dd><Undocumented label="Non désigné dans les documents" /></dd></div>
          <div><dt>Droit de plainte</dt><dd>{accountability.complaints.value}</dd></div>
          <div><dt>Image et consentement</dt><dd>{accountability.imageAndConsent.value}</dd></div>
        </dl>
        <SourceRefs sources={['S art. 40', 'S art. 42', 'S art. 45', 'S art. 46', 'RI art. 44', 'RI art. 46', 'RI art. 60', 'RI art. 65']} />

        <h3>Catégories de ressources prévues</h3>
        <p>
          Ces catégories décrivent les ressources que l&apos;association <em>peut</em> recevoir. Elles ne
          correspondent à aucun financement obtenu : aucun bailleur et aucun montant ne figurent
          dans les documents.
        </p>
        <ul className="checklist">
          {resourceCategories.map(category => (
            <li key={category.sources[0]}>
              <span aria-hidden>·</span>{category.value}
              <SourceRefs sources={category.sources} label="" />
            </li>
          ))}
        </ul>

        <h3>Révision et dissolution</h3>
        <dl className="organ-facts">
          <div><dt>Modification des statuts</dt><dd>{amendmentAndDissolution.amendment.value}</dd></div>
          <div><dt>Dissolution</dt><dd>{amendmentAndDissolution.dissolution.value}</dd></div>
        </dl>
        <SourceRefs sources={['S art. 47', 'S art. 48']} />
      </section>

      {/* E. Historique de publication */}
      <section className="doc-section" aria-labelledby="historique">
        <h2 id="historique">Historique de publication</h2>
        <EmptyState title="Aucune publication enregistrée." detail={transparencyEmptyStates.history} />
        <table className="method-table">
          <caption>Format de l&apos;historique, dès la première publication</caption>
          <thead>
            <tr><th scope="col">Document</th><th scope="col">Version</th><th scope="col">Date de publication</th><th scope="col">Date de mise à jour</th></tr>
          </thead>
          <tbody>
            {publicationHistory.length === 0 ? (
              <tr>
                <td colSpan={4} className="table-empty">
                  Aucun document publié à ce jour. Le règlement intérieur prévoit que les versions
                  successives des politiques et procédures soient datées afin d&apos;éviter l&apos;usage d&apos;un
                  document obsolète.
                </td>
              </tr>
            ) : (
              publicationHistory.map(record => (
                <tr key={`${record.documentId}-${record.version}`}>
                  <td>{record.documentId}</td><td>{record.version}</td>
                  <td>{record.publishedAt ?? '—'}</td><td>{record.updatedAt ?? '—'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <SourceRefs sources={['RI art. 63', 'RI art. 4']} />
      </section>

      <div className="inner-actions">
        <a href="/qui-sommes-nous" className="btn">Qui sommes-nous <span aria-hidden>→</span></a>
        <a href="/partenariats" className="link">Proposer une collaboration</a>
      </div>
    </PageShell>
  );
}
