import { Reveal } from './motion/primitives';
export function SectionHeader({ id, eyebrow, title, description }: {
  id: string; eyebrow: string; title: string; description: string;
}) {
  return <Reveal className="sh">
    <p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2><p>{description}</p>
  </Reveal>;
}
