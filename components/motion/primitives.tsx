import type { ReactNode } from 'react';
import Image from 'next/image';

export function Reveal({ children, preset = 'up', className = '' }: { children: ReactNode; preset?: 'up' | 'scale' | 'clip'; className?: string }) {
  return <div className={className} data-reveal={preset}>{children}</div>;
}
export function RevealText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`line-mask ${className}`} data-hero-line><span>{children}</span></span>;
}
export function Stagger({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className} data-stagger>{children}</div>;
}
/** Only supply authorized, local photographs. Empty src keeps an explicit placeholder. */
export function AnimatedImage({ src, alt, tone = '', className = '' }: { src?: string; alt: string; tone?: string; className?: string }) {
  return <div className={`animated-image ${className}`} data-img-reveal>
    <div className="image-parallax" data-parallax>
      <div className="image-zoom">
        {src ? <Image src={src} alt={alt} fill sizes="(min-width: 960px) 55vw, 100vw" loading="lazy" />
          : <div className={`ph ${tone}`} role="img" aria-label={`Emplacement photo : ${alt}`}><span>Photo SJCD à venir</span></div>}
      </div>
    </div>
  </div>;
}
