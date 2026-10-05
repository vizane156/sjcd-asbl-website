'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { lockScroll, navigateAnchor } from '@/lib/motion/scroll';
import { nav } from '@/lib/content';
import { BrandMark } from './BrandMark';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  const unlock = useRef<(() => void) | null>(null);
  const closing = useRef(false);
  const close = async (destination?: string) => {
    if (closing.current) return;
    closing.current = true;
    const el = dialog.current;
    if (el && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await el.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-8px)' }], { duration: 150 }).finished.catch(() => {});
    }
    el?.close();
    unlock.current?.(); unlock.current = null;
    setOpen(false);
    if (destination) navigateAnchor(destination);
    else toggle.current?.focus();
    closing.current = false;
  };

  /** Fermeture immédiate pour les liens de page : la navigation native se poursuit. */
  const closeAndNavigate = () => {
    closing.current = true;
    dialog.current?.close();
    unlock.current?.(); unlock.current = null;
    setOpen(false);
    closing.current = false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const desktop = matchMedia('(min-width: 1280px)');
    const resize = () => { if (desktop.matches) { dialog.current?.close(); unlock.current?.(); unlock.current = null; setOpen(false); } };
    desktop.addEventListener('change', resize);
    return () => desktop.removeEventListener('change', resize);
  }, []);

  useEffect(() => () => { unlock.current?.(); }, []);

  return <>
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav__bar" aria-label="Navigation principale">
        <a href="/#top" className="brand" aria-label="SJCD — accueil"><BrandMark priority /> SJCD <span className="brand__suffix">ASBL</span></a>
        <ul className="nav__links">{nav.map(link => <li key={link.href}><a href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</a></li>)}</ul>
        <a href="/contact?objet=soutien" className="btn nav__cta">Soutenir SJCD <span className="arrow" aria-hidden>↗</span></a>
        <button ref={toggle} className="nav__toggle" aria-expanded={open} aria-controls="menu-mobile" aria-label="Ouvrir le menu"
          onClick={() => { unlock.current = lockScroll(); dialog.current?.showModal(); setOpen(true); }}><span /><span /><span /></button>
      </nav>
    </header>
    <dialog ref={dialog} id="menu-mobile" className="mobile-dialog" data-lenis-prevent aria-labelledby="menu-title"
      onKeyDown={event => {
        if (event.key !== 'Tab') return;
        const targets = dialog.current?.querySelectorAll<HTMLElement>('a[href], button');
        if (!targets?.length) return;
        const first = targets[0], last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }}
      onCancel={event => { event.preventDefault(); void close(); }} onClose={() => { unlock.current?.(); unlock.current = null; setOpen(false); }}>
      <div className="mobile-dialog__top"><span id="menu-title" className="brand">SJCD · Navigation</span>
        <button className="dialog-close" onClick={() => close()} aria-label="Fermer le menu">✕</button></div>
      <nav aria-label="Navigation mobile"><ul>
        {nav.map((link, i) => <li key={link.href}><span aria-hidden>0{i + 1}</span>
          {link.href.startsWith('#')
            ? <a href={link.href} onClick={event => { event.preventDefault(); void close(link.href); }}>{link.label}</a>
            : <a href={link.href} onClick={() => closeAndNavigate()}>{link.label}</a>}
        </li>)}
        <li><span aria-hidden>↗</span><a href="/contact?objet=soutien" onClick={() => closeAndNavigate()}>Soutenir SJCD</a></li>
      </ul></nav>
      <p>Sanctuaire de Jeunes Chandelier pour le Développement<br />République démocratique du Congo</p>
    </dialog>
    <noscript><nav className="nojs-nav" aria-label="Navigation sans JavaScript">{nav.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}<a href="/contact">Contact</a></nav></noscript>
  </>;
}
