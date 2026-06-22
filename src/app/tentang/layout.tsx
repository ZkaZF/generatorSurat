import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Suratin — Generator Surat Resmi Indonesia',
  description:
    'Pelajari lebih lanjut tentang Suratin: platform gratis untuk membuat surat resmi Indonesia dalam format PDF. Privasi data terjamin, 100% gratis, tanpa registrasi.',
  openGraph: {
    title: 'Tentang Suratin — Generator Surat Resmi Indonesia',
    description: 'Platform gratis pembuatan surat resmi PDF. Data diproses lokal, tanpa watermark, tanpa biaya.',
    type: 'website',
  },
};

export default function TentangLayout({ children }: { children: React.ReactNode }) {
  return children;
}
