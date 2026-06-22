'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { getAllTemplates, getTemplatesByCategory, searchTemplates } from '@/lib/templates/registry';
import type { TemplateCategory } from '@/lib/templates/types';
import { isFreeTemplate } from '@/lib/templates/types';
import { formatRupiah } from '@/lib/utils';
import Footer from '@/components/layout/Footer';

// ── Category config ─────────────────────────────────────────────────────────
const CATEGORIES: { id: TemplateCategory | 'semua'; label: string; icon: string }[] = [
  { id: 'semua',        label: 'Semua',         icon: 'grid_view' },
  { id: 'pekerjaan',   label: 'Pekerjaan',     icon: 'work' },
  { id: 'jual-beli',   label: 'Jual Beli',     icon: 'handshake' },
  { id: 'pemerintahan',label: 'Pemerintahan',  icon: 'account_balance' },
  { id: 'sekolah',     label: 'Sekolah',       icon: 'school' },
];

// ── Design tokens (Getburnt palette) ─────────────────────────────────────────
const C = {
  charcoal:   '#1a1a17',
  white:      '#ffffff',
  slate:      '#5f5f5d',
  dust:       'rgba(26,26,23,0.06)',
  dustStrong: 'rgba(26,26,23,0.12)',
  dustFaint:  'rgba(26,26,23,0.04)',
  border:     'rgba(26,26,23,0.10)',
  borderHov:  'rgba(26,26,23,0.22)',
} as const;

const ITEMS_PER_LOAD = 12;

// ── Shared inline styles ──────────────────────────────────────────────────────
const serif: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 300,
};

export default function HomePage() {
  const [searchQuery, setSearchQuery]       = useState('');
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | 'semua'>('semua');
  const [visibleCount, setVisibleCount]     = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
  }, [activeCategory, searchQuery]);

  const templates = useMemo(() => {
    if (searchQuery.trim()) return searchTemplates(searchQuery);
    if (activeCategory === 'semua') return getAllTemplates();
    return getTemplatesByCategory(activeCategory);
  }, [searchQuery, activeCategory]);

  const visibleTemplates = useMemo(() => templates.slice(0, visibleCount), [templates, visibleCount]);
  const hasMore = visibleCount < templates.length;

  const handleSearch   = (q: string) => { setSearchQuery(q); if (q) setActiveCategory('semua'); };
  const handleCategory = (c: TemplateCategory | 'semua') => { setActiveCategory(c); setSearchQuery(''); };

  return (
    <div style={{ minHeight: '100vh', background: C.white, fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif", color: C.charcoal }}>

      {/* ══════════ NAVIGATION ══════════ */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Brand logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', background: C.charcoal, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined icon-fill" style={{ fontSize: '16px', color: C.white }}>description</span>
            </div>
            <span style={{ ...serif, fontSize: '20px', color: C.charcoal, letterSpacing: '-0.26px' }}>
              Suratin
            </span>
          </Link>

          {/* Nav links + CTA */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '40px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {[
                { label: 'Tentang', href: '/tentang' },
                { label: 'Bantuan', href: '/bantuan' },
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{
                  fontSize: '15px', fontWeight: 400, color: C.slate,
                  textDecoration: 'none', letterSpacing: '0.45px',
                  transition: 'color .15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.charcoal)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.slate)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#templates"
              id="nav-cta-buat-surat"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: C.charcoal, color: C.white,
                fontSize: '14px', fontWeight: 500,
                padding: '8px 24px', borderRadius: '1440px',
                textDecoration: 'none', letterSpacing: '0.42px',
                transition: 'opacity .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.80')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>edit</span>
              Buat Surat
            </Link>
          </div>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className="hero-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 24px 80px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: '80px', alignItems: 'center' }}>

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              border: `1px solid ${C.border}`,
              borderRadius: '1440px', padding: '5px 14px', marginBottom: '32px',
              fontSize: '12px', fontWeight: 500, color: C.slate, letterSpacing: '0.42px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>verified</span>
              100% Gratis untuk Semua Surat
            </div>

            <h1 className="hero-title" style={{
              ...serif,
              fontSize: '72px',
              lineHeight: 1.0,
              letterSpacing: '-0.72px',
              color: C.charcoal,
              marginBottom: '24px',
            }}>
              Buat Surat<br />
              Resmi dalam<br />
              2 Menit
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '16px', color: C.slate,
              lineHeight: 1.6, letterSpacing: '0.48px',
              marginBottom: '40px', maxWidth: '440px',
            }}>
              Isi form singkat, tambahkan tanda tangan digital, lalu download PDF format A4 siap cetak. Tanpa perlu software tambahan.
            </p>

            <div className="hero-btn-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="#templates"
                id="hero-cta-lihat-template"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: C.charcoal, color: C.white,
                  fontWeight: 500, fontSize: '15px', letterSpacing: '0.45px',
                  padding: '12px 28px', borderRadius: '1440px',
                  textDecoration: 'none', transition: 'opacity .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Lihat Semua Template
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </a>
              <a
                href="#cara-kerja"
                id="hero-cta-cara-kerja"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'transparent', color: C.slate,
                  fontWeight: 400, fontSize: '15px', letterSpacing: '0.45px',
                  padding: '12px 0',
                  textDecoration: 'none', transition: 'color .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.charcoal)}
                onMouseLeave={e => (e.currentTarget.style.color = C.slate)}
              >
                Cara Kerja
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
              </a>
            </div>
          </div>

          {/* Right: Floating Document Mockup */}
          <div className="hero-mockup-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '440px' }}>
            {/* Faint shadow glow */}
            <div style={{
              position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)',
              width: '280px', height: '60px',
              background: 'radial-gradient(ellipse, rgba(26,26,23,0.12) 0%, transparent 70%)',
              filter: 'blur(20px)', pointerEvents: 'none',
            }} />

            {/* Document card */}
            <div
              className="animate-float-doc hero-doc-card"
              style={{
                width: '300px', background: C.white,
                borderRadius: '0px',
                boxShadow: '0 2px 2px rgba(26,26,23,0.04), 0 12px 48px rgba(26,26,23,0.12)',
                overflow: 'hidden', transform: 'rotate(-3deg)',
                border: `1px solid ${C.border}`,
              }}
            >
              {/* Doc header bar */}
              <div style={{ background: C.charcoal, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '3px', background: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: '14px', color: C.charcoal }}>description</span>
                </div>
                <div>
                  <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1.2px' }}>Suratin</div>
                  <div style={{ fontSize: '10px', color: C.white, fontWeight: 600, letterSpacing: '0.5px' }}>SURAT KETERANGAN</div>
                </div>
              </div>

              {/* Doc body */}
              <div style={{ padding: '20px', background: C.white }}>
                {/* Seal placeholder */}
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: `1.5px solid ${C.charcoal}`, margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px', color: C.charcoal }}>gavel</span>
                </div>

                {/* Text lines */}
                {[75, 100, 88, 65, 80, 55, 70, 90, 60].map((w, i) => (
                  <div key={i} style={{
                    height: '5px', borderRadius: '1px', marginBottom: '7px',
                    background: i === 0 ? C.charcoal : `rgba(26,26,23,${0.07 + (i % 3) * 0.04})`,
                    width: `${w}%`,
                  }} />
                ))}

                {/* Signature area */}
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: `1px solid ${C.border}`, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: `1.5px solid ${C.charcoal}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '16px', color: C.charcoal }}>verified</span>
                  </div>
                  <div>
                    <svg width="80" height="26" viewBox="0 0 80 26" fill="none">
                      <path d="M4 18 C10 4, 20 22, 30 12 S50 2, 62 14 S72 24, 76 16" stroke={C.charcoal} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    </svg>
                    <div style={{ width: '70px', height: '1px', background: C.charcoal, marginTop: '2px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="hero-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '80px', borderTop: `1px solid ${C.border}`, borderLeft: `1px solid ${C.border}` }}>
          {[
            { value: '56+',    label: 'Template Tersedia', icon: 'description' },
            { value: 'Instan', label: 'PDF Download',       icon: 'download' },
            { value: '100%',   label: 'Format Resmi',       icon: 'verified' },
            { value: 'Aman',   label: 'Data Lokal',         icon: 'lock' },
          ].map((stat) => (
            <div key={stat.label} style={{
              padding: '28px 24px',
              borderRight: `1px solid ${C.border}`,
              borderBottom: `1px solid ${C.border}`,
              display: 'flex', flexDirection: 'column', gap: '4px',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = C.dustFaint}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.slate, marginBottom: '8px' }}>{stat.icon}</span>
              <div style={{ fontSize: '26px', fontWeight: 300, ...serif, color: C.charcoal, lineHeight: 1.1, letterSpacing: '-0.26px' }}>{stat.value}</div>
              <div style={{ fontSize: '13px', color: C.slate, letterSpacing: '0.42px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CARA KERJA ══════════ */}
      <section id="cara-kerja" style={{ background: C.dustFaint, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ ...serif, fontSize: '48px', lineHeight: 1.1, letterSpacing: '-0.48px', color: C.charcoal, marginBottom: '16px' }}>
              Tiga langkah mudah
            </h2>
            <p style={{ fontSize: '16px', color: C.slate, letterSpacing: '0.48px', lineHeight: 1.6, maxWidth: '480px' }}>
              Dari nol hingga PDF siap cetak dalam hitungan menit.
            </p>
          </div>

          <div className="cara-kerja-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }}>
            {[
              { step: '01', title: 'Pilih Template', desc: 'Cari dan pilih jenis surat dari koleksi 56+ template kategori pekerjaan, jual beli, pemerintahan, dan sekolah.', icon: 'touch_app' },
              { step: '02', title: 'Isi Formulir', desc: 'Lengkapi form data dengan informasi yang diperlukan. Tambahkan tanda tangan digital langsung dari layar.', icon: 'edit' },
              { step: '03', title: 'Download PDF', desc: 'Unduh surat dalam format PDF ukuran A4, bersih tanpa watermark, siap dicetak atau dikirim.', icon: 'print' },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '40px 32px',
                borderRight: idx < 2 ? `1px solid ${C.border}` : 'none',
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = C.white}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span style={{ ...serif, fontSize: '48px', fontWeight: 300, lineHeight: 1, color: C.charcoal, letterSpacing: '-0.48px', opacity: 0.15 }}>{item.step}</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '22px', color: C.charcoal }}>{item.icon}</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: C.charcoal, marginBottom: '10px', letterSpacing: '0.6px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: C.slate, lineHeight: 1.6, letterSpacing: '0.42px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TEMPLATE SECTION ══════════ */}
      <section id="templates" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>

        {/* Section heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
          <h2 style={{ ...serif, fontSize: '48px', fontWeight: 300, color: C.charcoal, lineHeight: 1.1, letterSpacing: '-0.48px' }}>
            Template surat
          </h2>
          <p style={{ fontSize: '16px', color: C.slate, letterSpacing: '0.48px' }}>
            Pilih template yang sesuai kebutuhan Anda
          </p>
        </div>

        {/* Search + Category row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '32px' }}>

          {/* Search bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: C.white, border: `1px solid ${C.border}`,
            borderRadius: '6px', padding: '10px 14px',
            width: '100%', maxWidth: '300px',
            transition: 'border-color 0.15s',
          }}
            onFocusCapture={e => (e.currentTarget.style.borderColor = C.charcoal)}
            onBlurCapture={e => (e.currentTarget.style.borderColor = C.border)}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '17px', color: C.slate }}>search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari template..."
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                fontSize: '14px', color: C.charcoal, letterSpacing: '0.42px',
              }}
            />
            {searchQuery && (
              <button onClick={() => handleSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '15px', color: C.slate }}>close</span>
              </button>
            )}
          </div>

          {/* Category pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              const count = cat.id === 'semua' ? getAllTemplates().length : getAllTemplates().filter(t => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  id={`cat-pill-${cat.id}`}
                  onClick={() => handleCategory(cat.id)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    padding: '7px 16px', borderRadius: '1440px', fontSize: '13px', fontWeight: 500,
                    border: active ? 'none' : `1px solid ${C.border}`,
                    background: active ? C.charcoal : 'transparent',
                    color: active ? C.white : C.slate,
                    cursor: 'pointer', transition: 'all .15s', letterSpacing: '0.42px',
                  }}
                  onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLButtonElement).style.borderColor = C.charcoal; (e.currentTarget as HTMLButtonElement).style.color = C.charcoal; }}}
                  onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLButtonElement).style.borderColor = C.border; (e.currentTarget as HTMLButtonElement).style.color = C.slate; }}}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>{cat.icon}</span>
                  {cat.label}
                  <span style={{
                    fontSize: '10px', fontWeight: 600, padding: '0px 5px', borderRadius: '1440px',
                    background: active ? 'rgba(255,255,255,0.18)' : C.dustFaint,
                    color: active ? C.white : C.slate,
                    minWidth: '18px', textAlign: 'center',
                  }}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Template Grid */}
        {templates.length > 0 ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0', border: `1px solid ${C.border}`, borderBottom: 'none', borderRight: 'none' }}>
              {visibleTemplates.map((template) => {
                const free = isFreeTemplate(template);
                const catLabel: Record<string, string> = {
                  pekerjaan: 'Pekerjaan', 'jual-beli': 'Jual Beli',
                  pemerintahan: 'Pemerintahan', sekolah: 'Sekolah',
                };
                return (
                  <div
                    key={template.id}
                    className="animate-fade-in-up"
                    style={{
                      display: 'flex', flexDirection: 'column',
                      background: C.white,
                      borderRight: `1px solid ${C.border}`,
                      borderBottom: `1px solid ${C.border}`,
                      padding: '24px',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = C.dustFaint}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = C.white}
                  >
                    {/* Icon + Badge */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '0px', flexShrink: 0,
                        border: `1px solid ${C.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: C.dustFaint,
                      }}>
                        <span className="material-symbols-outlined icon-fill" style={{ fontSize: '20px', color: C.charcoal }}>{template.icon}</span>
                      </div>
                      <span style={{
                        fontSize: '10px', fontWeight: 600, color: C.slate,
                        textTransform: 'uppercase', letterSpacing: '0.8px',
                        marginTop: '4px',
                      }}>
                        {free ? 'Gratis' : formatRupiah(template.price)}
                      </span>
                    </div>

                    {/* Category tag */}
                    <span style={{ fontSize: '11px', fontWeight: 500, color: C.slate, marginBottom: '6px', letterSpacing: '0.42px' }}>
                      {catLabel[template.category] || template.category}
                    </span>

                    {/* Title & desc */}
                    <h3 style={{ fontSize: '15px', fontWeight: 600, color: C.charcoal, marginBottom: '6px', lineHeight: 1.35, letterSpacing: '0.45px' }}>
                      {template.name}
                    </h3>
                    <p style={{
                      fontSize: '13px', color: C.slate, lineHeight: 1.6,
                      flex: 1, marginBottom: '20px', letterSpacing: '0.42px',
                      overflow: 'hidden', display: '-webkit-box',
                      WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const,
                    }}>
                      {template.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={`/editor/${template.id}`}
                      id={`btn-buat-${template.id}`}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        height: '40px', borderRadius: '1440px',
                        background: C.charcoal, color: C.white,
                        fontSize: '13px', fontWeight: 500, letterSpacing: '0.42px',
                        textDecoration: 'none', transition: 'opacity .15s',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.82'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>edit</span>
                      Buat Sekarang
                    </Link>
                  </div>
                );
              })}
            </div>

            {hasMore && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'transparent', color: C.charcoal,
                    border: `1px solid ${C.border}`, fontWeight: 500,
                    fontSize: '14px', letterSpacing: '0.42px',
                    padding: '10px 28px', borderRadius: '1440px',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = C.charcoal; (e.currentTarget as HTMLButtonElement).style.color = C.white; (e.currentTarget as HTMLButtonElement).style.borderColor = C.charcoal; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = C.charcoal; (e.currentTarget as HTMLButtonElement).style.borderColor = C.border; }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>expand_more</span>
                  Tampilkan Lainnya ({templates.length - visibleCount} Lagi)
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '96px 20px', textAlign: 'center', border: `1px solid ${C.border}` }}>
            <span className="material-symbols-outlined" style={{ fontSize: '36px', color: C.slate, marginBottom: '16px', display: 'block' }}>search_off</span>
            <p style={{ fontSize: '16px', fontWeight: 500, color: C.charcoal, marginBottom: '6px' }}>Template tidak ditemukan.</p>
            <p style={{ fontSize: '13px', color: C.slate, letterSpacing: '0.42px' }}>Coba kata kunci lain seperti &quot;Kuasa&quot; atau &quot;Izin&quot;</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
