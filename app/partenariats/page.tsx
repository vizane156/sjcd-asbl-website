import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { EmptyState, LegalNotice, SourceRefs, Undocumented } from '@/components/Source';
import { PartnershipDraft } from '@/components/PartnershipDraft';
import {
  partnerEmptyState, partnershipContact, partnershipForms, partnershipRules, partners,
} from '@/lib/data/partnership';

export const metadata: Metadata = { title: 'Partenariats — SJCD ASBL' };

export default function Partenariats() {
  return (
    <PageShell
      eyebrow="SJCD ASBL · Collaborations"
      title="Construire ensemble, dans un cadre écrit."
      intro="SJCD est ouverte aux collaborations cohérentes avec son objet social. Les formes de collaboration présentées ici sont celles que prévoient les statuts et le règlement intérieur ; aucun partenaire n’est cité, car aucune relation officielle n’est documentée."
    >
      <section className="doc-section" aria-labelledby="formes">
        <h2 id="formes">Formes de collaboration</h2>
        <p>
          Les statuts permettent à l&apos;association de conclure des conventions et partenariats avec
          les autorités publiques, les collectivités, les organisations de la société civile, les
          institutions académiques, les entreprises, les fondations, les agences de coopération et
          les organisations internationales.
        </p>
        <SourceRefs sources={['S art. 44']} />

        <div className="partner-forms">
          {partnershipForms.map(form => (
            <article key={form.id} className="partner-form-card">
              <h3>{form.title}</h3>
              <p>{form.description}</p>
              <SourceRefs sources={form.sources} label="" />
            </article>
          ))}
        </div>
      </section>

      <section className="doc-section" aria-labelledby="regime">
        <h2 id="regime">Le cadre applicable à tout partenariat</h2>
        <dl className="organ-facts">
          <div><dt>Accord écrit</dt><dd>{partnershipRules.coherence.value}</dd></div>
          <div><dt>Droit de refus</dt><dd>{partnershipRules.refusal.value}</dd></div>
          <div><dt>Protection des personnes</dt><dd>{partnershipRules.safeguarding}</dd></div>
          <div><dt>Image et témoignages</dt><dd>{partnershipRules.image}</dd></div>
        </dl>
        <SourceRefs sources={partnershipRules.sources} />

        <h3>Acteurs visés par les statuts</h3>
        <p>
          Ces catégories décrivent les types d&apos;acteurs avec lesquels l&apos;association peut coopérer.
          Elles ne désignent aucun partenaire existant.
        </p>
        <ul className="chips">
          {partnershipRules.actorCategories.map(category => (
            <li key={category.value}>
              <span className="chip">{category.value}</span>
              <SourceRefs sources={category.sources} label="" />
            </li>
          ))}
        </ul>
      </section>

      <section className="doc-section" aria-labelledby="partenaires">
        <h2 id="partenaires">Partenaires</h2>
        <EmptyState title={partnerEmptyState.headline} detail={partnerEmptyState.detail} />
        <p className="muted" role="status">{partners.length} partenaire publié. Aucun logo n&apos;est affiché.</p>
      </section>

      <section className="doc-section" aria-labelledby="contact-partenariat">
        <h2 id="contact-partenariat">Appel à collaboration</h2>
        <p>
          Vous représentez une institution, une organisation de la société civile, une entreprise,
          une fondation ou un établissement académique, et vous envisagez une collaboration
          cohérente avec l&apos;objet social de SJCD&nbsp;? Préparez votre demande ci-dessous.
        </p>

        <LegalNotice title="Aucune donnée n’est transmise par ce formulaire">
          <p>{partnershipContact.transmission}</p>
          <dl className="organ-facts">
            <div><dt>Adresse e-mail institutionnelle</dt><dd><a className="link" href={`mailto:${partnershipContact.email}`}>{partnershipContact.email}</a></dd></div>
            <div><dt>Téléphone</dt><dd><a className="link" href={partnershipContact.phoneHref}>{partnershipContact.phone}</a></dd></div>
            <div><dt>Adresse postale</dt><dd>{partnershipContact.address}</dd></div>
            <div><dt>Réseaux sociaux</dt><dd><Undocumented label="Aucun compte officiel identifié" /></dd></div>
          </dl>
          <SourceRefs sources={['RI art. 58', 'RI art. 59']} label="Références" />
        </LegalNotice>

        <PartnershipDraft />

        <h3>Ce que SJCD attend d&apos;une demande</h3>
        <ul className="checklist">
          <li><span aria-hidden>✓</span>La présentation de votre organisation et de son mandat</li>
          <li><span aria-hidden>✓</span>Le domaine d&apos;intervention concerné parmi les six prévus par les statuts</li>
          <li><span aria-hidden>✓</span>L&apos;objet de la collaboration et les responsabilités envisagées</li>
          <li><span aria-hidden>✓</span>Les ressources mobilisées, le cas échéant</li>
          <li><span aria-hidden>✓</span>La période envisagée et le territoire concerné</li>
        </ul>
        <p className="muted">
          Ces éléments correspondent aux mentions minimales que le règlement intérieur exige d&apos;un
          accord de partenariat : objet, responsabilités, ressources, confidentialité, visibilité
          et, lorsque nécessaire, dispositions de protection.
        </p>
        <SourceRefs sources={['RI art. 42']} />
      </section>

      <div className="inner-actions">
        <a href="/programmes" className="btn">Voir les domaines d&apos;intervention <span aria-hidden>→</span></a>
        <a href="/transparence" className="link">Espace transparence</a>
      </div>
    </PageShell>
  );
}
