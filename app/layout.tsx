import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Police variable locale : aucun accès à Google au build ou dans le navigateur.
const nunito = localFont({
  src: '../node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2',
  weight: '200 1000', display: 'swap', variable: '--nunito',
});

export const metadata: Metadata = {
  title: 'SJCD ASBL — Sanctuaire de Jeunes Chandelier pour le Développement',
  description: 'Site officiel de SJCD ASBL, organisation établie en République démocratique du Congo, engagée pour la jeunesse et le développement.',
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
