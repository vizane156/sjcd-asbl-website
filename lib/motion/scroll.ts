import type Lenis from 'lenis';
let engine: Lenis | null = null;
let locked = false;
export function registerScroll(value: Lenis | null) {
  engine = value;
  if (locked) engine?.stop();
}
export function lockScroll() {
  if (locked) return () => {};
  locked = true;
  engine?.stop();
  const y = window.scrollY;
  const body = document.body;
  const previous = body.getAttribute('style');
  const overflow = document.documentElement.style.overflow;
  Object.assign(body.style, { position: 'fixed', top: `-${y}px`, width: '100%', overflow: 'hidden' });
  document.documentElement.style.overflow = 'hidden';
  let released = false;
  return () => {
    if (released) return;
    released = true;
    if (previous === null) body.removeAttribute('style'); else body.setAttribute('style', previous);
    document.documentElement.style.overflow = overflow;
    window.scrollTo({ top: y, behavior: 'instant' });
    engine?.scrollTo(y, { immediate: true, force: true });
    engine?.start();
    locked = false;
  };
}
export function navigateAnchor(hash: string, immediate = false) {
  let id: string;
  try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target) return;
  history.pushState(null, '', hash);
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  const top = target.getBoundingClientRect().top + scrollY - 110;
  if (engine) engine.scrollTo(top, { duration: .65, immediate });
  else window.scrollTo({ top, behavior: 'instant' });
}
