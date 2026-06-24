import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bantuan & FAQ — Suratin',
  description:
    'Pusat bantuan Suratin. Temukan jawaban seputar cara penggunaan, keamanan data, tanda tangan digital, dan hasil unduhan PDF surat resmi Anda.',
  openGraph: {
    title: 'Bantuan & FAQ — Suratin',
    description: 'Jawaban lengkap seputar penggunaan Suratin: keamanan data, tanda tangan digital, dan download PDF.',
    type: 'website',
  },
};

export default function BantuanLayout({ children }: { children: React.ReactNode }) {
  return children;
}

