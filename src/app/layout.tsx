import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-switzer',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-nyght-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.suratindong.web.id'),
  title: 'Suratin Dong — Buat Surat Resmi dalam 2 Menit',
  description:
    'Generator surat resmi otomatis berbahasa Indonesia. Buat Surat Kuasa, Surat Izin, Surat Perjanjian, dan lainnya dalam format PDF siap cetak hanya dengan mengisi form singkat.',
  openGraph: {
    title: 'Suratin Dong — Buat Surat Resmi dalam 2 Menit',
    description: 'Generator surat resmi PDF instan untuk kebutuhan pekerjaan, bisnis, dan pemerintahan.',
    type: 'website',
  },
  authors: [{ name: 'Suratin Dong' }],
  verification: {
    google: 'xS-nNzGjdwO7rIEJyGICx21INVIr4bZL3QKDYXA04Fo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', background: '#ffffff', color: '#1a1a17' }}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

