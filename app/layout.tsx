import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Police variable locale : aucun accès à Google au build ou dans le navigateur.
const nunito = localFont({
  src: '../node_modules/@fontsource-variable/nunito-sans/files/nunito-sans-latin-wght-normal.woff2',
  weight: '200 1000', display: 'swap', variable: '--nunito',
});

export const metadata: Metadata = {
  title: 'SJCD ASBL — Salon de Jeunes Chandelier pour le Développement',
  description: 'Site officiel de SJCD ASBL, organisation établie en République démocratique du Congo, engagée pour la jeunesse et le développement.',
  openGraph: { title: 'SJCD ASBL — Jeunesse et développement communautaire', description: 'Une organisation congolaise de la société civile, ancrée à Uvira / Sud-Kivu.', locale: 'fr_CD', type: 'website' },
  twitter: { card: 'summary', title: 'SJCD ASBL — Jeunesse et développement communautaire' },
  robots: { index: false, follow: false }, // préproduction : contenu non validé
};

export const viewport: Viewport = { themeColor: '#0b1020', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
