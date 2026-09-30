export type NetworkInfo = EventTarget & { saveData?: boolean; effectiveType?: string };
export const pointerQuery = '(min-width: 960px) and (hover: hover) and (pointer: fine)';
export function networkInfo() { return (navigator as Navigator & { connection?: NetworkInfo }).connection; }
export function enhancedMotion() {
  const connection = networkInfo();
  return matchMedia(pointerQuery).matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
    && !(navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)
    && !connection?.saveData && !/2g|3g/.test(connection?.effectiveType ?? '');
}
