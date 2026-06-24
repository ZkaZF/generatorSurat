import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bantuan & FAQ — Suratin Dong',
  description:
    'Pusat bantuan Suratin Dong. Temukan jawaban seputar cara penggunaan, keamanan data, tanda tangan digital, dan hasil unduhan PDF surat resmi Anda.',
  openGraph: {
    title: 'Bantuan & FAQ — Suratin Dong',
    description: 'Jawaban lengkap seputar penggunaan Suratin Dong: keamanan data, tanda tangan digital, dan download PDF.',
    type: 'website',
  },
};

export default function BantuanLayout({ children }: { children: React.ReactNode }) {
  return children;
}

