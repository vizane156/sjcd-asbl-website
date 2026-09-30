/** Publish only sourced values. Count-up never substitutes for editorial validation. */
export function ImpactValue({ value, period, source }: { value: string | null; period: string | null; source: string | null }) {
  const verified = !!(value && period && source);
  const numeric = verified && /^\d+(\.\d+)?$/.test(value!) ? Number(value) : null;
  return <div role="img" className={`stat__value ${verified ? '' : 'stat__value--empty'}`} aria-label={verified ? value! : 'Valeur à fournir'}>
    <span aria-hidden data-count={numeric ?? undefined}>{verified ? value : '—'}</span>
  </div>;
}
