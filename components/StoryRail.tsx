'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
export function StoryRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = el.scrollWidth - el.clientWidth;
        const ratio = max > 0 ? el.scrollLeft / max : 1;
        progress.current?.style.setProperty('--progress', `${Math.max(.04, ratio)}`);
        setEdges(previous => {
          const next = { start: el.scrollLeft < 2, end: el.scrollLeft >= max - 2 };
          return previous.start === next.start && previous.end === next.end ? previous : next;
        });
      });
    };
    const observer = new ResizeObserver(update); observer.observe(el);
    el.addEventListener('scroll', update, { passive: true }); update();
    return () => { observer.disconnect(); el.removeEventListener('scroll', update); cancelAnimationFrame(frame); };
  }, []);
  const move = (direction: number) => ref.current?.scrollBy({ left: direction * (ref.current.querySelector('article')?.getBoundingClientRect().width ?? 300) + direction * 20, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  return <div className="story-rail">
    <div ref={ref} id="stories-rail" className="stories" tabIndex={0} role="region" aria-label="Histoires de terrain, défilement horizontal" data-stagger>{children}</div>
    <div className="rail-controls"><span>Faire défiler les récits</span><div ref={progress} className="rail-progress" aria-hidden><span /></div>
      <button type="button" aria-controls="stories-rail" aria-label="Histoires précédentes" disabled={edges.start} onClick={() => move(-1)}>←</button>
      <button type="button" aria-controls="stories-rail" aria-label="Histoires suivantes" disabled={edges.end} onClick={() => move(1)}>→</button>
    </div>
  </div>;
}
