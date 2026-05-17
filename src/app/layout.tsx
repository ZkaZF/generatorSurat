import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SuratOtomatis — Buat Surat Resmi dalam 2 Menit',
  description:
    'Generator surat resmi otomatis berbahasa Indonesia. Buat Surat Kuasa, Surat Izin, Surat Perjanjian, dan lainnya dalam format PDF siap cetak hanya dengan mengisi form singkat.',
  keywords: [
    'surat resmi',
    'generator surat',
    'surat kuasa',
    'surat izin sakit',
    'surat perjanjian',
    'surat otomatis',
    'pdf surat',
  ],
  authors: [{ name: 'SuratOtomatis' }],
  openGraph: {
    title: 'SuratOtomatis — Buat Surat Resmi dalam 2 Menit',
    description: 'Generator surat resmi PDF instan untuk kebutuhan pekerjaan, bisnis, dan pemerintahan.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
