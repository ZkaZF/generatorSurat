import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan — Suratin',
  description: 'Maaf, halaman yang Anda tuju tidak tersedia.',
};

const C = {
  charcoal: '#1a1a17',
  white: '#ffffff',
  slate: '#5f5f5d',
  dustFaint: 'rgba(26,26,23,0.04)',
  border: 'rgba(26,26,23,0.10)',
} as const;

const serif: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 300,
};

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: C.white, fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      {/* ══ HEADER / NAV SIMPLE ══ */}
      <header style={{
        height: '64px', borderBottom: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center', padding: '0 24px',
        background: C.white,
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '24px', height: '24px', background: C.charcoal,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span className="material-symbols-outlined icon-fill" style={{ fontSize: '14px', color: C.white }}>description</span>
          </div>
          <span style={{ ...serif, fontSize: '20px', color: C.charcoal, fontWeight: 500, letterSpacing: '-0.4px' }}>Suratin</span>
        </Link>
      </header>

      {/* ══ CONTENT 404 ══ */}
      <main style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '80px 24px', textAlign: 'center', background: C.dustFaint,
      }}>
        <div style={{ maxWidth: '480px', width: '100%', background: C.white, border: `1px solid ${C.border}`, padding: '48px 32px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '48px', color: C.slate, marginBottom: '24px', display: 'block' }}>
            map
          </span>
          <h1 style={{ ...serif, fontSize: '36px', color: C.charcoal, lineHeight: 1.1, letterSpacing: '-0.72px', marginBottom: '16px' }}>
            Halaman Tidak Ditemukan
          </h1>
          <p style={{ fontSize: '15px', color: C.slate, lineHeight: 1.6, marginBottom: '32px', letterSpacing: '0.45px' }}>
            Maaf, halaman yang Anda tuju mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
          </p>
          
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            background: C.charcoal, color: C.white, textDecoration: 'none',
            fontWeight: 500, fontSize: '14px', padding: '12px 24px', borderRadius: '1440px',
            transition: 'background .15s',
            letterSpacing: '0.42px', width: '100%'
          }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            Kembali ke Beranda
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
