'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

type NetworkInfo = EventTarget & { saveData?: boolean; effectiveType?: string };

/** Desktop only. Native scroll on touch/mobile, slow networks and reduced motion. */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const desktop = matchMedia('(min-width: 960px) and (hover: hover) and (pointer: fine)');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
    let release = () => {};
    let generation = 0;
    const setup = async () => {
      const current = ++generation;
      release();
      release = () => {};
      if (!desktop.matches || reduce.matches || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? '')) return;
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return;

      try {
        const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
          import('lenis'), import('gsap'), import('gsap/ScrollTrigger'),
        ]);
        if (current !== generation) return;
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({ lerp: 0.14, smoothWheel: true, anchors: false });
        lenis.on('scroll', ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        const scroll = (event: MouseEvent) => {
          if (event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
          if (!link) return;
          const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
          if (!target) return;
          event.preventDefault();
          // No scroll trap: skip links are immediate, all targets become keyboard-focusable.
          const focus = () => { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); };
          history.pushState(null, '', link.hash);
          focus();
          lenis.scrollTo(target.getBoundingClientRect().top + window.scrollY - 110, { duration: 0.7, immediate: link.classList.contains('skip'), onComplete: focus });

        };
        document.addEventListener('click', scroll);
        const ctx = gsap.context(() => {
          if (!location.hash) {
            gsap.from('[data-hero-line] > span', { yPercent: 105, duration: 0.85, stagger: 0.06, ease: 'power3.out' });
            gsap.from('[data-hero-fade]', { y: 16, opacity: 0, duration: 0.65, stagger: 0.06, ease: 'power2.out' });
          }
          gsap.to('[data-hero-flame]', { yPercent: 12, ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.3 } });
          gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
            // Initially visible elements and anchor destinations must never flash or disappear.
            if (el.getBoundingClientRect().top < innerHeight) return;
            gsap.from(el, { y: 22, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 94%', once: true } });
          });
          gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach(group => {
            gsap.from(group.children, { y: 20, duration: 0.65, stagger: 0.06, ease: 'power2.out',
              scrollTrigger: { trigger: group, start: 'top 95%', once: true } });
          });
          // Emphasis rather than low-contrast text: the words remain fully readable.
          gsap.to('.intro__statement .w', { color: '#9a5a0c', stagger: 0.035, ease: 'none',
            scrollTrigger: { trigger: '.intro__statement', start: 'top 85%', end: 'bottom 55%', scrub: true } });
          gsap.utils.toArray<HTMLElement>('[data-img-reveal]').forEach(el => {
            gsap.from(el, { clipPath: 'inset(6% 4% round 28px)', duration: 0.9, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 95%', once: true } });
            const inner = el.querySelector('.ph');
            if (inner) gsap.fromTo(inner, { yPercent: -4 }, { yPercent: 4, ease: 'none',
              scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
          });
        });
        release = () => { ctx.revert(); gsap.ticker.remove(tick); lenis.destroy(); document.removeEventListener('click', scroll); };
      } catch {
        // Progressive enhancement: no JS dependency is required to read or navigate.
      }
    };
    void setup();
    desktop.addEventListener('change', setup);
    reduce.addEventListener('change', setup);
    connection?.addEventListener('change', setup);
    return () => { generation++; release(); desktop.removeEventListener('change', setup); reduce.removeEventListener('change', setup); connection?.removeEventListener('change', setup); };
  }, []);
  return <>{children}</>;
}

/** Tilt used only on the featured card, with a maximum angle of 3°. */
export function TiltCard({ children, className = '', max = 3, style }:
  { children: ReactNode; className?: string; max?: number; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const eligible = matchMedia('(min-width: 960px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const reset = () => { cancelAnimationFrame(frame); el.classList.remove('is-tilting'); el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); };
    const move = (event: PointerEvent) => {
      if (!eligible.matches || navigator.hardwareConcurrency < 4) return;
      const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
      if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? '')) return;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.classList.add('is-tilting');
        el.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`);
        el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
      });
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', reset);
    eligible.addEventListener('change', reset);
    return () => { reset(); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', reset); eligible.removeEventListener('change', reset); };
  }, [max]);
  return <div ref={ref} className={`tilt ${className}`} style={style}>{children}</div>;
}
