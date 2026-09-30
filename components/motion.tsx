'use client';

import { useEffect, type ReactNode, type CSSProperties } from 'react';
import { enhancedMotion, networkInfo, pointerQuery } from '@/lib/motion/policy';
import { navigateAnchor, registerScroll } from '@/lib/motion/scroll';

/** Tier 1 works on touch and constrained connections; Tier 2 adds desktop effects. */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const desktop = matchMedia(pointerQuery);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = networkInfo();
    let pressed: HTMLElement | null = null;
    const press = (event: PointerEvent) => {
      pressed?.classList.remove('is-pressed');
      pressed = event.pointerType === 'touch' ? (event.target as Element).closest<HTMLElement>('.btn') : null;
      pressed?.classList.add('is-pressed');
    };
    const unpress = () => { pressed?.classList.remove('is-pressed'); pressed = null; };
    document.addEventListener('pointerdown', press, { passive: true });
    document.addEventListener('pointerup', unpress, { passive: true });
    document.addEventListener('pointercancel', unpress, { passive: true });
    window.addEventListener('blur', unpress);
    let release = () => {};
    let generation = 0;
    const setup = async () => {
      const current = ++generation;
      release(); release = () => {};
      if (reduce.matches) return;
      const enhanced = enhancedMotion();
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
        if (current !== generation) return;
        gsap.registerPlugin(ScrollTrigger);
        const cleanups: (() => void)[] = [];
        const ctx = gsap.context(() => {});
        release = () => { cleanups.forEach(fn => fn()); ctx.revert(); delete document.documentElement.dataset.motionTier; };
        document.documentElement.dataset.motionTier = enhanced ? 'enhanced' : 'universal';
        const tweens: { element: Element; tween: gsap.core.Tween }[] = [];
        ctx.add(() => {
          const reveal = (element: HTMLElement, targets: gsap.TweenTarget, preset = 'up', stagger = 0) => {
            // Preserve content already on screen, hash destinations and native no-JS visibility.
            if (element.getBoundingClientRect().top < innerHeight * .96) return;
            const from = preset === 'clip' ? { clipPath: 'inset(7% 3% round 18px)', opacity: .4 }
              : preset === 'scale' ? { scale: .97, opacity: 0 } : { y: enhanced ? 22 : 14, opacity: 0 };
            const tween = gsap.from(targets, { ...from, duration: enhanced ? .6 : .42, stagger, ease: 'power2.out',
              clearProps: 'transform,opacity,clipPath', scrollTrigger: { trigger: element, start: 'top 96%', once: true } });
            tweens.push({ element, tween });
          };
          if (!location.hash) {
            gsap.from('[data-hero-line] > span', { yPercent: 105, duration: enhanced ? .8 : .55, stagger: .07, ease: 'power3.out', clearProps: 'transform' });
            gsap.from('[data-hero-fade]', { y: 12, opacity: 0, duration: .5, stagger: .045, clearProps: 'transform,opacity' });
          }
          gsap.utils.toArray<HTMLElement>('[data-reveal], .sh:not([data-reveal])').forEach(el => reveal(el, el, el.dataset.reveal || 'up'));
          gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach(el => reveal(el, el.children, 'up', enhanced ? .07 : .045));
          gsap.utils.toArray<HTMLElement>('[data-img-reveal]').forEach(el => reveal(el, el, enhanced ? 'clip' : 'scale'));
          gsap.to('.intro__statement .w', { color: '#9a5a0c', stagger: .025, duration: .45,
            scrollTrigger: { trigger: '.intro__statement', start: 'top 85%', end: 'bottom 55%', scrub: enhanced, once: !enhanced } });
          gsap.utils.toArray<HTMLElement>('[data-count]').forEach(el => {
            const final = Number(el.dataset.count);
            const state = { value: 0 };
            const original = el.textContent;
            cleanups.push(() => { el.textContent = original; });
            gsap.to(state, { value: final, duration: enhanced ? .8 : .5, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 96%', once: true },
              onUpdate: () => { el.textContent = Math.round(state.value).toLocaleString('fr'); },
              onComplete: () => { el.textContent = original; } });
          });
          if (enhanced) {
            gsap.to('[data-hero-flame]', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .3 } });
            gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach(el => gsap.fromTo(el, { yPercent: -3 }, { yPercent: 3, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }));
          }
        });
        const focus = (event: FocusEvent) => tweens.forEach(({ element, tween }) => { if (element.contains(event.target as Node)) tween.progress(1); });
        document.addEventListener('focusin', focus);
        cleanups.push(() => document.removeEventListener('focusin', focus));
        if (enhanced) {
          const { default: Lenis } = await import('lenis');
          if (current !== generation) return;
          const lenis = new Lenis({ lerp: .14, smoothWheel: true, anchors: false });
          registerScroll(lenis);
          lenis.on('scroll', ScrollTrigger.update);
          const tick = (time: number) => lenis.raf(time * 1000);
          gsap.ticker.add(tick);
          const scroll = (event: MouseEvent) => {
            if (event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
            if (!link) return;
            event.preventDefault(); navigateAnchor(link.hash, link.classList.contains('skip'));
          };
          document.addEventListener('click', scroll);
          cleanups.push(() => { registerScroll(null); lenis.destroy(); gsap.ticker.remove(tick); document.removeEventListener('click', scroll); });
          const elements = [...document.querySelectorAll<HTMLElement>('.btn, .tile')];
          elements.forEach(el => {
            let frame = 0;
            const reset = () => { cancelAnimationFrame(frame); ['--rx','--ry','--mag-x','--mag-y'].forEach(p => el.style.setProperty(p, '0')); el.style.removeProperty('--mx'); el.style.removeProperty('--my'); };
            const move = (e: PointerEvent) => {
              if (e.pointerType === 'touch') return;
              cancelAnimationFrame(frame);
              frame = requestAnimationFrame(() => {
                const r = el.getBoundingClientRect(); const x = (e.clientX-r.left)/r.width; const y = (e.clientY-r.top)/r.height;
                el.style.setProperty('--mx', `${x*100}%`); el.style.setProperty('--my', `${y*100}%`);
                if (el.classList.contains('tilt')) { el.style.setProperty('--rx', `${(0.5-y)*6}deg`); el.style.setProperty('--ry', `${(x-.5)*6}deg`); }
                if (el.hasAttribute('data-magnetic')) { el.style.setProperty('--mag-x', `${(x-.5)*6}px`); el.style.setProperty('--mag-y', `${(y-.5)*6}px`); }
              });
            };
            el.addEventListener('pointermove', move); el.addEventListener('pointerleave', reset);
            cleanups.push(() => { reset(); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', reset); });
          });
        }
      } catch { if (current === generation) release(); }
    };
    void setup();
    desktop.addEventListener('change', setup); reduce.addEventListener('change', setup); connection?.addEventListener('change', setup);
    return () => { generation++; release(); unpress(); document.removeEventListener('pointerdown', press); document.removeEventListener('pointerup', unpress); document.removeEventListener('pointercancel', unpress); window.removeEventListener('blur', unpress); desktop.removeEventListener('change', setup); reduce.removeEventListener('change', setup); connection?.removeEventListener('change', setup); };
  }, []);
  return <>{children}</>;
}

/** GSAP owns the grid wrapper. Pointer rotation belongs only to its child. */
export function TiltCard({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return <div className="tilt-shell"><div className={`tilt ${className}`} style={style}>{children}</div></div>;
}
