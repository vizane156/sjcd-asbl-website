/**
 * Composants de traçabilité. Toute affirmation institutionnelle affiche sa source :
 * l'article des statuts (S) ou du règlement intérieur (RI).
 */

/** Références d'articles, affichées en discrètes mais lisibles. */
export function SourceRefs({ sources, label = 'Source' }: { sources: string[]; label?: string }) {
  if (!sources.length) return null;
  return (
    <p className="source-refs">
      <span className="source-refs__label">{label}</span>
      {sources.map(ref => <code key={ref} className="source-refs__ref">{ref}</code>)}
    </p>
  );
}

/** État vide professionnel : ce qui manque est nommé, jamais remplacé par du contenu. */
export function EmptyState({ title, detail, note }: { title: string; detail: string; note?: string }) {
  return (
    <div className="empty-state">
      <span className="placeholder-tag">Aucune donnée publiée</span>
      <p className="empty-state__title">{title}</p>
      <p className="empty-state__detail">{detail}</p>
      {note && <p className="empty-state__note">{note}</p>}
    </div>
  );
}

/** Information non documentée : affichée comme manquante, jamais devinée. */
export function Undocumented({ label }: { label: string }) {
  return <span className="undocumented" title="Non documenté dans les statuts ni le règlement intérieur">{label} — à confirmer par SJCD</span>;
}

/**
 * Encadré de réserve juridique, utilisé pour le statut non définitif des documents.
 * `level` suit la hiérarchie des titres de la page : 2 lorsqu'il suit le h1,
 * 3 lorsqu'il est placé dans une section introduite par un h2.
 */
export function LegalNotice({ title, children, level = 3 }: { title: string; children: React.ReactNode; level?: 2 | 3 }) {
  const Heading = level === 2 ? 'h2' : 'h3';
  return (
    <aside className="legal-notice" role="note">
      <Heading>{title}</Heading>
      <div>{children}</div>
    </aside>
  );
}
