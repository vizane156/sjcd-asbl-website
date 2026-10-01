import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SourceRefs, Undocumented, LegalNotice } from '@/components/Source';
import { operatingPrinciples, values } from '@/lib/data/values';
import {
  governanceLayers, governanceOrgans, mandateRules, officeHolderCaveat,
  publishedOffices, publishOfficeHolders, technicalStructures,
} from '@/lib/data/governance';
import {
  convictions, identity, legalStatus, membership, mission, principles, socialPurpose,
  specificObjectives, vision, visionDevelopment,
} from '@/lib/statuts';

export const metadata: Metadata = { title: 'Qui sommes-nous — SJCD ASBL' };

const layerLabel = { governance: 'Gouvernance et représentation', administration: 'Administration', operation: 'Coordination opérationnelle' } as const;

export default function QuiSommesNous() {
  const offices = publishedOffices();
  const showHolders = publishOfficeHolders && offices.some(office => office.holder);

  return (
    <PageShell
      eyebrow="SJCD ASBL · Institution"
      title="Une organisation de développement de la jeunesse."
      intro="Sanctuaire de Jeunes Chandelier pour le Développement (SJCD ASBL) est une association sans but lucratif de droit congolais, apolitique et non confessionnelle, à caractère social, éducatif et de développement communautaire. Cette page restitue fidèlement ce que prévoient ses statuts et son règlement intérieur, article par article."
    >
      <LegalNotice title="Statut des documents de référence" level={2}>
        <p>{legalStatus.statement}</p>
        <SourceRefs sources={legalStatus.sources} label="Références" />
      </LegalNotice>

      {/* A. Présentation */}
      <section className="doc-section" aria-labelledby="presentation">
        <h2 id="presentation">Présentation</h2>
        <p className="lead">{socialPurpose.value}</p>
        <SourceRefs sources={socialPurpose.sources} />

        <p>
          L&apos;association intervient dans le développement intégral de la jeunesse : éducation et
          développement des compétences, confiance en soi et prise de parole en public, santé
          sexuelle et reproductive, protection et soutien des personnes vulnérables, prévention de
          la violence et des discriminations, développement communautaire et engagement citoyen.
          Son action est guidée par des valeurs d&apos;intégrité, de dignité humaine, de solidarité et
          de responsabilité.
        </p>

        <dl className="fact-list">
          <div><dt>Dénomination officielle</dt><dd>{identity.officialName.value}</dd></div>
          <div><dt>Sigle</dt><dd>{identity.acronym.value}</dd></div>
          <div><dt>Forme juridique</dt><dd>{identity.legalForm.value}</dd></div>
          <div><dt>Caractère</dt><dd>{identity.character.value}</dd></div>
          <div><dt>Siège social</dt><dd>{identity.registeredOffice.value}</dd></div>
          <div><dt>Adresse précise</dt><dd><Undocumented label="Rue, quartier, commune" /></dd></div>
          <div><dt>Ressort territorial</dt><dd>Vocation nationale — République démocratique du Congo</dd></div>
          <div><dt>Durée</dt><dd>{identity.duration.value}</dd></div>
          <div><dt>Exercice social</dt><dd>{identity.fiscalYear.value}</dd></div>
          <div><dt>Numéro d&apos;enregistrement</dt><dd><Undocumented label="Aucun" /></dd></div>
        </dl>
        <SourceRefs
          sources={['S art. 1', 'S art. 2', 'S art. 3', 'S art. 4', 'S art. 5', 'S art. 40']}
        />

        <h3>Une identité ouverte, non confessionnelle</h3>
        <p>{convictions.noReligiousCondition.value}</p>
        <p>{convictions.mayMobilize.value}</p>
        <p>
          Le vocabulaire de la lumière et du chandelier appartient à l&apos;identité et à l&apos;histoire de
          l&apos;association. Il n&apos;exprime aucune doctrine, aucune affiliation religieuse et aucune
          pratique cultuelle : SJCD ASBL est statutairement non confessionnelle et n&apos;est pas une
          organisation réservée à une religion.
        </p>
        <SourceRefs sources={['S art. 2', 'S préambule', 'RI art. 37.8']} />
      </section>

      {/* B. Histoire */}
      <section className="doc-section" aria-labelledby="histoire">
        <h2 id="histoire">Histoire</h2>
        <p>
          L&apos;histoire publiée ici est celle que les statuts documentent. Aucune étape
          supplémentaire n&apos;est ajoutée.
        </p>
        <ol className="timeline">
          <li>
            <h3>Création — {identity.creationYear.value}</h3>
            <p>
              Les statuts déclarent : « Créée le 23 février 2022, SJCD ASBL entend offrir aux jeunes
              un cadre d&apos;apprentissage, de participation, de responsabilité et d&apos;action
              communautaire. » L&apos;association est fondée par ses membres fondateurs et membres
              effectifs, réunis en Assemblée générale.
            </p>
            <SourceRefs sources={['S préambule']} />
          </li>
          <li>
            <h3>Formalisation statutaire — <Undocumented label="date" /></h3>
            <p>
              L&apos;acte d&apos;adoption des statuts mentionne une Assemblée générale « constitutive /
              extraordinaire » tenue le 15 juin 2023 à l&apos;Institut AKSANTI KILOMONI KAVIMVIRA, avec
              une déclaration finale « Fait à Uvira, le 15/06/2023 ». La résolution d&apos;adoption, le
              nombre de membres présents et les dix signatures sont toutefois laissés en blanc, et
              la mention notariale indique que la forme authentique reste à établir.
            </p>
            <SourceRefs sources={['S, acte d’adoption', 'S, déclaration finale']} />
          </li>
          <li>
            <h3>Consolidation des textes — version 2026</h3>
            <p>
              La version actuelle des statuts est présentée comme une « refonte consolidée des
              statuts existants », conservant l&apos;identité, les finalités et les principaux domaines
              d&apos;intervention, tout en harmonisant la gouvernance, la représentation, la gestion
              financière, les règles relatives aux membres, le ressort territorial, la modification
              des statuts et la dissolution. Le règlement intérieur, version 1.0, en précise
              l&apos;application.
            </p>
            <SourceRefs sources={['S, note liminaire', 'RI page de garde']} />
          </li>
        </ol>
        <LegalNotice title="Divergence de dates non résolue">
          <p>
            {identity.creationDateDiscrepancy} Aucune des deux dates n&apos;est présentée comme date de
            création officielle tant que la divergence n&apos;est pas tranchée par SJCD.
          </p>
          <SourceRefs sources={['S préambule', 'S, acte d’adoption']} label="Références" />
        </LegalNotice>
      </section>

      {/* C. Mission */}
      <section className="doc-section" aria-labelledby="mission">
        <h2 id="mission">Mission</h2>
        <p className="lead">{mission.positioning.value}</p>
        <p>{mission.core.value}</p>
        <p>{mission.complementary.value}</p>
        <SourceRefs sources={mission.core.sources} />

        <h3>Objectif global</h3>
        <blockquote>{socialPurpose.value}</blockquote>

        <h3>Les dix objectifs spécifiques</h3>
        <ol className="numbered">
          {specificObjectives.map(objective => (
            <li key={objective.sources[0]}>
              {objective.value}
              <SourceRefs sources={objective.sources} label="" />
            </li>
          ))}
        </ol>
      </section>

      {/* D. Vision */}
      <section className="doc-section" aria-labelledby="vision">
        <h2 id="vision">Vision</h2>
        <p className="lead">{vision.value}</p>
        <SourceRefs sources={vision.sources} />
        <p>{visionDevelopment.value}</p>
        <ul className="pillars">
          <li><strong>Éclairée</strong><span>Accès à une information fiable et à l&apos;éducation</span></li>
          <li><strong>Responsable</strong><span>Capacité à faire des choix responsables</span></li>
          <li><strong>Autonome</strong><span>Compétences, employabilité et initiative</span></li>
          <li><strong>Résiliente</strong><span>Capacité à traverser les difficultés</span></li>
          <li><strong>Intègre</strong><span>Honnêteté dans la conduite de toutes les activités</span></li>
          <li><strong>Capable d&apos;agir</strong><span>Transformer positivement son environnement</span></li>
        </ul>
        <SourceRefs sources={['S art. 7', 'S art. 9.1', 'S art. 6 a', 'S art. 10.1']} />
        <p className="muted">
          Chaque pilier reprend un terme littéral de l&apos;article 7 ou un objectif de l&apos;article 9 ;
          le commentaire indique où le texte l&apos;établit.
        </p>
      </section>

      {/* E. Valeurs */}
      <section className="doc-section" aria-labelledby="valeurs">
        <h2 id="valeurs">Valeurs</h2>
        <p>
          L&apos;article 10 des statuts énonce dix principes et valeurs. La grille ci-dessous les
          regroupe en sept entrées lisibles, sans en ajouter : chacune cite les numéros
          qu&apos;elle rassemble.
        </p>
        <div className="values-grid">
          {values.map(value => (
            <article key={value.id} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.text}</p>
              <SourceRefs sources={value.sources} label="" />
            </article>
          ))}
        </div>

        <h3>Principes de fonctionnement</h3>
        <p>Ces principes encadrent l&apos;organisation elle-même plutôt que ses publics.</p>
        <div className="values-grid">
          {operatingPrinciples.map(value => (
            <article key={value.id} className="value-card value-card--operating">
              <h3>{value.title}</h3>
              <p>{value.text}</p>
              <SourceRefs sources={value.sources} label="" />
            </article>
          ))}
        </div>

        <details className="fold">
          <summary>Les dix principes dans leur formulation statutaire (S art. 10)</summary>
          <ol className="numbered">
            {principles.map(principle => (
              <li key={principle.sources[0]}>{principle.value}</li>
            ))}
          </ol>
        </details>
      </section>

      {/* F. Gouvernance */}
      <section className="doc-section" aria-labelledby="gouvernance">
        <h2 id="gouvernance">Gouvernance</h2>
        <p>
          Les statuts prévoient <strong>deux organes statutaires, et deux seulement</strong>. Les
          commissions, départements et groupes de travail peuvent être créés par le Conseil
          d&apos;administration, mais n&apos;ont pas la qualité d&apos;organe statutaire.
        </p>
        <SourceRefs sources={['S art. 20', 'RI art. 34']} />

        <h3>Trois niveaux de responsabilité distincts</h3>
        <p>
          La gouvernance de SJCD ne se réduit pas à une liste de fonctions : elle sépare la
          décision et la représentation, la mémoire administrative, et la mise en œuvre
          opérationnelle.
        </p>
        <div className="layers">
          {governanceLayers.map(layer => (
            <article key={layer.id} className="layer-card">
              <span className="layer-card__index">{layer.id === 'governance' ? '01' : layer.id === 'administration' ? '02' : '03'}</span>
              <h3>{layer.title}</h3>
              <p>{layer.definition}</p>
              <SourceRefs sources={layer.sources} label="" />
            </article>
          ))}
        </div>

        <h3>Les organes statutaires</h3>
        {governanceOrgans.map(organ => (
          <article key={organ.id} className="organ-card">
            <h4>{organ.name}</h4>
            <p className="organ-card__role">{organ.role}</p>
            <dl className="organ-facts">
              <div><dt>Composition</dt><dd>{organ.composition}</dd></div>
              <div><dt>Fréquence</dt><dd>{organ.frequency}</dd></div>
              <div><dt>Quorum</dt><dd>{organ.quorum}</dd></div>
              <div><dt>Décisions</dt><dd>{organ.decisions}</dd></div>
            </dl>
            <h5>Attributions</h5>
            <ol className="numbered">{organ.powers.map(power => <li key={power}>{power}</li>)}</ol>
            <SourceRefs sources={organ.sources} />
          </article>
        ))}

        <h3>Les dix fonctions du Conseil d&apos;administration</h3>
        <p>
          Le Conseil d&apos;administration est composé de dix membres élus parmi les membres effectifs
          par l&apos;Assemblée générale. Les fonctions sont présentées avec leur responsabilité et leur
          limite de contrôle, telles que les statuts et le règlement intérieur les définissent.
        </p>
        <div className="offices">
          {offices.map(office => (
            <article key={office.id} className="office-card">
              <span className="office-card__order">{String(office.order).padStart(2, '0')}</span>
              <div>
                <h4>{office.title}</h4>
                <span className={`office-card__layer office-card__layer--${office.layer}`}>{layerLabel[office.layer]}</span>
                {office.holder && (
                  <p className="office-card__holder">
                    {office.holder}
                    {office.holderSource && <span className="office-card__holder-source">— {office.holderSource}</span>}
                  </p>
                )}
                {!office.holder && <p className="office-card__holder office-card__holder--empty"><Undocumented label="Titulaire" /></p>}
                <p>{office.responsibility}</p>
                <p className="office-card__limit"><strong>Limite :</strong> {office.limit}</p>
                <SourceRefs sources={office.sources} label="" />
              </div>
            </article>
          ))}
        </div>

        {showHolders && (
          <LegalNotice title="Sur les noms publiés">
            <p>{officeHolderCaveat}</p>
            <p>
              Sept des dix fonctions ne sont pourvues d&apos;aucun nom dans les documents : elles sont
              affichées comme telles, sans titulaire supposé.
            </p>
          </LegalNotice>
        )}

        <h3>Mandats</h3>
        <dl className="organ-facts">
          <div><dt>Durée du mandat</dt><dd>{mandateRules.term}</dd></div>
          <div><dt>Élection</dt><dd>{mandateRules.election}</dd></div>
          <div><dt>Éligibilité</dt><dd>{mandateRules.eligibility}</dd></div>
          <div><dt>Fin des fonctions</dt><dd>{mandateRules.endOfTerm}</dd></div>
          <div><dt>Vacance</dt><dd>{mandateRules.vacancy}</dd></div>
          <div><dt>Mandat en cours</dt><dd><Undocumented label="Dates de début et de fin" /></dd></div>
        </dl>
        <SourceRefs sources={mandateRules.sources} />

        <h3>Commissions et groupes de travail</h3>
        <p>{technicalStructures.statement}</p>
        <p>{technicalStructures.mandate}</p>
        <p>
          Aucune commission, aucun département ni aucun groupe de travail n&apos;est attesté par les
          documents disponibles.
        </p>
        <SourceRefs sources={technicalStructures.sources} />

        <h3>Membres et participation</h3>
        <div className="layers">
          {membership.categories.map(category => (
            <article key={category.name} className="layer-card">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <p className="office-card__limit"><strong>Vote :</strong> {category.voting}</p>
              <SourceRefs sources={category.sources} label="" />
            </article>
          ))}
        </div>
        <dl className="organ-facts">
          <div><dt>Admission</dt><dd>{membership.admission.value}</dd></div>
          <div><dt>Cotisations</dt><dd>{membership.feeRule.value}</dd></div>
          <div><dt>Montant de la cotisation</dt><dd><Undocumented label="Fixé par l’Assemblée générale" /></dd></div>
          <div><dt>Nombre de membres effectifs</dt><dd><Undocumented label="Minimum légal requis, non chiffré" /></dd></div>
          <div><dt>Patrimoine</dt><dd>{membership.noPropertyRight.value}</dd></div>
        </dl>
        <SourceRefs sources={['S art. 12', 'S art. 13', 'S art. 16', 'S art. 19', 'RI art. 5', 'RI art. 10']} />
      </section>

      <div className="inner-actions">
        <a href="/programmes" className="btn">Voir les domaines d&apos;intervention <span aria-hidden>→</span></a>
        <a href="/transparence" className="link">Espace transparence</a>
      </div>
    </PageShell>
  );
}
