import { PageShell } from '@/components/PageShell';
export default function NotFound() {
  return <PageShell eyebrow="404 · Page introuvable" title="Reprenons le bon chemin." intro="Cette adresse n’existe pas ou n’est plus disponible.">
    <a href="/" className="btn">Retour à l’accueil ↗</a><a href="/plan-du-site" className="link back-link">Voir le plan du site</a>
  </PageShell>;
}
