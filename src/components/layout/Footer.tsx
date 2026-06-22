'use client';

import Link from 'next/link';

const C = {
  charcoal:  '#1a1a17',
  white:     '#ffffff',
  slate:     '#5f5f5d',
  border:    'rgba(26,26,23,0.10)',
  dustFaint: 'rgba(26,26,23,0.04)',
} as const;

const serif: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 300,
};

// ── Link Column ───────────────────────────────────────────────────────────────
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div style={{
        fontSize: '11px', fontWeight: 700, color: C.slate,
        letterSpacing: '1.4px', textTransform: 'uppercase',
        marginBottom: '20px',
      }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none', letterSpacing: '0.42px',
                  transition: 'color .15s',
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.white)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {link.label}
                <span className="material-symbols-outlined" style={{ fontSize: '12px', opacity: 0.5 }}>open_in_new</span>
              </a>
            ) : (
              <Link
                href={link.href}
                style={{
                  fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none', letterSpacing: '0.42px',
                  transition: 'color .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.white)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: C.charcoal }}>

      {/* ── Main content ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>

          {/* Brand col */}
          <div>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '32px', height: '32px', background: C.white, borderRadius: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '16px', color: C.charcoal }}>description</span>
              </div>
              <span style={{ ...serif, fontSize: '20px', color: C.white, letterSpacing: '-0.26px' }}>Suratin</span>
            </Link>

            {/* Tagline */}
            <p style={{
              fontSize: '14px', color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.75, letterSpacing: '0.42px', maxWidth: '280px',
              marginBottom: '28px',
            }}>
              Generator surat resmi otomatis untuk semua kebutuhan administratif Indonesia.
              Gratis, aman, dan tanpa registrasi.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { icon: 'lock',     label: 'Data diproses lokal di browser Anda' },
                { icon: 'verified', label: '100% gratis, tanpa watermark' },
              ].map((b) => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)' }}>{b.icon}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.36px' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Template col */}
          <FooterColumn
            title="Template"
            links={[
              { label: 'Surat Pekerjaan', href: '/?kategori=pekerjaan' },
              { label: 'Surat Jual Beli', href: '/?kategori=jual-beli' },
              { label: 'Surat Pemerintahan', href: '/?kategori=pemerintahan' },
              { label: 'Surat Sekolah', href: '/?kategori=sekolah' },
              { label: 'Semua Template', href: '/#templates' },
            ]}
          />

          {/* Panduan col */}
          <FooterColumn
            title="Panduan"
            links={[
              { label: 'Cara Kerja', href: '/#cara-kerja' },
              { label: 'Pusat Bantuan', href: '/bantuan' },
              { label: 'FAQ', href: '/bantuan#faq-section' },
              { label: 'Tanda Tangan Digital', href: '/bantuan#faq-section' },
              { label: 'Download PDF', href: '/bantuan#faq-section' },
            ]}
          />

          {/* Perusahaan col */}
          <FooterColumn
            title="Perusahaan"
            links={[
              { label: 'Tentang Kami', href: '/tentang' },
              { label: 'Kebijakan Privasi', href: '/privasi' },
              { label: 'Syarat & Ketentuan', href: '/syarat' },
              { label: 'Request Template', href: 'mailto:halo@suratin.id?subject=Request%20Template', external: true },
              { label: 'Kontak', href: 'mailto:halo@suratin.id', external: true },
            ]}
          />
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px',
          padding: '20px 0',
        }}>
          {/* Copyright */}
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.42px' }}>
            © {year} Suratin. Dibuat dengan ♡ untuk Indonesia.
          </p>

          {/* Legal links */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { label: 'Privasi', href: '/privasi' },
              { label: 'Syarat', href: '/syarat' },
              { label: 'Kontak', href: 'mailto:halo@suratin.id' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '13px', color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none', letterSpacing: '0.42px',
                  transition: 'color .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
