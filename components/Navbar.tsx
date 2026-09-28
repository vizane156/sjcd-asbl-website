'use client';

import { useEffect, useRef, useState } from 'react';
import { nav } from '@/lib/content';
import { FlameMark } from './FlameMark';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  const close = (destination?: string) => {
    dialog.current?.close();
    setOpen(false);
    if (destination) {
      requestAnimationFrame(() => {
        const target = document.getElementById(destination.slice(1));
        target?.setAttribute('tabindex', '-1');
        target?.focus({ preventScroll: true });
      });
    } else toggle.current?.focus();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const desktop = matchMedia('(min-width: 960px)');
    const resize = () => { if (desktop.matches) { dialog.current?.close(); setOpen(false); } };
    desktop.addEventListener('change', resize);
    return () => desktop.removeEventListener('change', resize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return <>
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav__bar" aria-label="Navigation principale">
        <a href="/#top" className="brand" aria-label="SJCD — accueil"><FlameMark className="brand__mark" /> SJCD <span className="brand__suffix">ASBL</span></a>
        <ul className="nav__links">{nav.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
        <a href="/contact" className="btn nav__cta">Collaborer <span className="arrow" aria-hidden>↗</span></a>
        <button ref={toggle} className="nav__toggle" aria-expanded={open} aria-controls="menu-mobile" aria-label="Ouvrir le menu"
          onClick={() => { dialog.current?.showModal(); setOpen(true); }}><span /><span /><span /></button>
      </nav>
    </header>
    <dialog ref={dialog} id="menu-mobile" className="mobile-dialog" aria-labelledby="menu-title"
      onKeyDown={event => {
        if (event.key !== 'Tab') return;
        const targets = dialog.current?.querySelectorAll<HTMLElement>('a[href], button');
        if (!targets?.length) return;
        const first = targets[0], last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }}
      onCancel={() => { setOpen(false); toggle.current?.focus(); }} onClose={() => setOpen(false)}>
      <div className="mobile-dialog__top"><span id="menu-title" className="brand">SJCD · Navigation</span>
        <button className="dialog-close" onClick={() => close()} aria-label="Fermer le menu">✕</button></div>
      <nav aria-label="Navigation mobile"><ul>
        {nav.map((link, i) => <li key={link.href}><span aria-hidden>0{i + 1}</span><a href={link.href} onClick={() => close(link.href)}>{link.label}</a></li>)}
        <li><span aria-hidden>↗</span><a href="/contact" onClick={() => close()}>Collaborer</a></li>
      </ul></nav>
      <p>Sanctuaire de Jeunes Chandelier pour le Développement<br />République démocratique du Congo</p>
    </dialog>
    <noscript><nav className="nojs-nav" aria-label="Navigation sans JavaScript">{nav.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}<a href="/contact">Contact</a></nav></noscript>
  </>;
}
