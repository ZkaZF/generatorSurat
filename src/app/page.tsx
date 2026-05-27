'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { getAllTemplates, getTemplatesByCategory, searchTemplates } from '@/lib/templates/registry';
import type { TemplateCategory } from '@/lib/templates/types';
import { isFreeTemplate } from '@/lib/templates/types';
import { formatRupiah } from '@/lib/utils';

// ── Category config ─────────────────────────────────────────────────────────
const CATEGORIES: { id: TemplateCategory | 'semua'; label: string; icon: string }[] = [
  { id: 'semua',       label: 'Semua',         icon: 'grid_view' },
  { id: 'pekerjaan',   label: 'Pekerjaan',     icon: 'work' },
  { id: 'jual-beli',   label: 'Jual Beli',     icon: 'handshake' },
  { id: 'pemerintahan',label: 'Pemerintahan',  icon: 'account_balance' },
  { id: 'sekolah',     label: 'Sekolah',       icon: 'school' },
];

// ── Inline colour tokens (match globals.css) ─────────────────────────────────
const C = {
  navy:       '#1B2E4A',
  navyHover:  '#2A4060',
  gold:       '#C8A45C',
  goldLight:  '#F0E4C4',
  goldDark:   '#A88B3D',
  cream:      '#FDF8F0',
  ivory:      '#FAF5EB',
  sand:       '#F5EFE3',
  sandDark:   '#EDE5D5',
  cardBorder: '#D4C5A0',
  white:      '#FEFCF8',
  textPrimary:'#1B2E4A',
  textSecond: '#5A6A7A',
  textMuted:  '#8A9AAA',
  outline:    '#D4C5A0',
  green:      '#166534',
  greenBg:    '#DCFCE7',
} as const;

const ITEMS_PER_LOAD = 12; // 3 rows on a 4-column desktop grid

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | 'semua'>('semua');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
  }, [activeCategory, searchQuery]);

  const templates = useMemo(() => {
    if (searchQuery.trim()) return searchTemplates(searchQuery);
    if (activeCategory === 'semua') return getAllTemplates();
    return getTemplatesByCategory(activeCategory);
  }, [searchQuery, activeCategory]);

  const visibleTemplates = useMemo(() => {
    return templates.slice(0, visibleCount);
  }, [templates, visibleCount]);

  const hasMore = visibleCount < templates.length;

  const handleSearch = (q: string) => { setSearchQuery(q); if (q) setActiveCategory('semua'); };
  const handleCategory = (c: TemplateCategory | 'semua') => { setActiveCategory(c); setSearchQuery(''); };

  return (
    <div style={{ minHeight: '100vh', background: C.cream, fontFamily: 'Inter, sans-serif' }}>

      {/* ══════════ HEADER ══════════ */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(253,248,240,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.cardBorder}`,
        boxShadow: '0 1px 4px rgba(27,46,74,0.05)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(27,46,74,0.25)',
            }}>
              <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px', color: C.gold }}>description</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: '20px', fontWeight: 400, color: C.navy, letterSpacing: '-0.3px',
            }}>
              Surat<span style={{ color: C.gold }}>Otomatis</span>
            </span>
          </Link>

          {/* Nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {['Tentang', 'Harga', 'Bantuan'].map((item) => (
                <a key={item} href="#" style={{
                  fontSize: '14px', fontWeight: 500, color: C.textSecond,
                  textDecoration: 'none', transition: 'color .15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.navy)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.textSecond)}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA pill */}
            <Link
              href="#templates"
              id="nav-cta-buat-surat"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: C.navy, color: '#fff',
                fontSize: '14px', fontWeight: 600,
                padding: '10px 22px', borderRadius: '999px',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(27,46,74,0.30)',
                transition: 'background .15s, transform .1s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.navyHover; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.navy; }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>edit</span>
              Buat Surat
            </Link>
          </div>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className="hero-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Geo overlay decoration */}
        <div className="geo-overlay" style={{ borderRadius: '32px' }} />

        {/* Warm radial glow */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-60px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,164,92,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: '60px', alignItems: 'center', position: 'relative' }}>

          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: C.goldLight, color: C.goldDark,
              border: `1px solid ${C.cardBorder}`,
              borderRadius: '999px', padding: '6px 16px', marginBottom: '24px',
              fontSize: '12px', fontWeight: 700,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>auto_awesome</span>
              100% Gratis untuk Surat Umum
            </div>

            {/* Headline — serif */}
            <h1 className="hero-title" style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(40px, 4.5vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-1px',
              color: C.navy,
              marginBottom: '20px',
            }}>
              Buat Surat Resmi<br />
              dalam <span style={{ color: C.gold }}>2 Menit</span>,<br />
              <span style={{ color: C.textSecond }}>Bebas Ribet.</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '17px', color: C.textSecond,
              lineHeight: 1.75, marginBottom: '36px', maxWidth: '500px',
            }}>
              Isi form singkat, tambahkan tanda tangan digital, lalu download PDF format A4 siap cetak. Tanpa perlu software tambahan.
            </p>

            {/* Buttons */}
            <div className="hero-btn-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#templates"
                id="hero-cta-lihat-template"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: C.navy, color: '#fff',
                  fontWeight: 700, fontSize: '15px',
                  padding: '15px 32px', borderRadius: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(27,46,74,0.30)',
                  transition: 'opacity .15s, transform .1s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit_document</span>
                Lihat Semua Template
              </a>
              <a
                href="#cara-kerja"
                id="hero-cta-cara-kerja"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'transparent', color: C.navy,
                  fontWeight: 600, fontSize: '15px',
                  padding: '15px 28px', borderRadius: '14px',
                  textDecoration: 'none',
                  border: `1.5px solid ${C.cardBorder}`,
                  transition: 'background .15s, border-color .15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.sand; e.currentTarget.style.borderColor = C.gold; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.cardBorder; }}
              >
                Cara Kerja
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
              </a>
            </div>
          </div>

          {/* ── Right: Floating Document Mockup ── */}
          <div className="hero-mockup-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '420px' }}>
            {/* Warm glow behind doc */}
            <div className="hero-doc-glow" style={{
              position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)',
              width: '300px', height: '200px',
              background: 'radial-gradient(ellipse, rgba(200,164,92,0.25) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }} />

            {/* Document card — floating animation */}
            <div
              className="animate-float-doc hero-doc-card"
              style={{
                width: '300px',
                background: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(27,46,74,0.18), 0 4px 16px rgba(27,46,74,0.10)',
                overflow: 'hidden',
                transform: 'rotate(-4deg)',
              }}
            >
              {/* Doc header bar */}
              <div style={{
                background: C.navy, padding: '14px 20px',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '6px',
                  background: C.gold, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: '14px', color: C.navy }}>description</span>
                </div>
                <div>
                  <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>SuratOtomatis</div>
                  <div style={{ fontSize: '10px', color: '#fff', fontWeight: 700 }}>SURAT KETERANGAN</div>
                </div>
              </div>

              {/* Doc body */}
              <div style={{ padding: '20px', background: '#FEFEFE' }}>
                {/* Garuda placeholder */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${C.goldLight}, ${C.gold})`,
                  margin: '0 auto 14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: '20px', color: C.navy }}>gavel</span>
                </div>

                {/* Text lines */}
                {[80, 100, 90, 70, 85, 60, 75, 95, 65, 80].map((w, i) => (
                  <div key={i} style={{
                    height: '6px', borderRadius: '3px', marginBottom: '7px',
                    background: i === 0
                      ? C.navy
                      : `rgba(27,46,74,${0.08 + (i % 3) * 0.04})`,
                    width: `${w}%`,
                  }} />
                ))}

                {/* Signature area */}
                <div style={{
                  marginTop: '16px', paddingTop: '12px',
                  borderTop: `1px dashed ${C.cardBorder}`,
                  display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px',
                }}>
                  {/* Wax seal */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: `conic-gradient(${C.gold}, ${C.goldDark}, ${C.gold})`,
                    border: `3px solid ${C.goldDark}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(168,139,61,0.4)',
                  }}>
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px', color: C.navy }}>verified</span>
                  </div>
                  {/* Signature squiggle */}
                  <div>
                    <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
                      <path d="M4 20 C10 6, 20 24, 30 14 S50 4, 62 16 S72 26, 76 18" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                    </svg>
                    <div style={{ width: '70px', height: '1px', background: C.navy, marginTop: '2px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Feature Stats Row ── */}
        <div className="hero-stats-row" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px', marginTop: '56px', position: 'relative',
        }}>
          {[
            { icon: 'description',  value: '20+',    label: 'Template Tersedia' },
            { icon: 'download',     value: 'Instan', label: 'PDF Download' },
            { icon: 'verified',     value: '100%',   label: 'Format Resmi' },
            { icon: 'lock',         value: 'Aman',   label: 'Data Terlindungi' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: C.white, borderRadius: '16px',
              border: `1px solid ${C.cardBorder}`,
              padding: '20px', display: 'flex', alignItems: 'center', gap: '14px',
              boxShadow: '0 2px 12px rgba(27,46,74,0.05)',
              transition: 'border-color .2s, box-shadow .2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = C.gold; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(27,46,74,0.09)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = C.cardBorder; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(27,46,74,0.05)'; }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                background: C.goldLight,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '20px', color: C.gold }}>
                  {stat.icon}
                </span>
              </div>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: C.navy, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: C.textSecond, marginTop: '3px' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CARA KERJA — Bento Grid ══════════ */}
      <section id="cara-kerja" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 72px', position: 'relative' }}>
        <div className="cara-kerja-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start' }}>

          {/* Left large card — steps */}
          <div style={{
            background: C.white, borderRadius: '24px',
            border: `1px solid ${C.cardBorder}`,
            padding: '36px', boxShadow: '0 4px 24px rgba(27,46,74,0.07)',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: '28px', fontWeight: 400, color: C.navy,
              marginBottom: '32px', textAlign: 'center',
            }}>
              Tiga Langkah Mudah
            </h2>

            <div className="cara-kerja-steps" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', justifyContent: 'center' }}>
              {[
                { step: '1', icon: 'touch_app',   title: 'Pilih Template',  desc: 'Cari dan pilih jenis surat dari koleksi kami' },
                { step: '2', icon: 'edit',         title: 'Isi Form',        desc: 'Lengkapi data dan tambahkan tanda tangan digital' },
                { step: '3', icon: 'print',        title: 'Download PDF',    desc: 'Unduh surat siap cetak format A4' },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '130px' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '18px', marginBottom: '12px',
                      background: `linear-gradient(135deg, ${C.goldLight}, ${C.sandDark})`,
                      border: `1.5px solid ${C.cardBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(200,164,92,0.18)',
                    }}>
                      <span className="material-symbols-outlined icon-fill" style={{ fontSize: '26px', color: C.gold }}>{item.icon}</span>
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: C.gold, marginBottom: '4px', letterSpacing: '0.5px' }}>
                      Langkah {item.step}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: C.navy, marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '11px', color: C.textSecond, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                  {idx < 2 && (
                    <div className="step-divider" style={{ marginTop: '22px', color: C.cardBorder, flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>arrow_forward</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: 2×2 feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: 'description',  bigVal: '20+',    title: 'Template',       sub: 'Tersedia' },
              { icon: 'cloud_download',bigVal: 'Instan', title: 'PDF',            sub: 'Download' },
              { icon: 'verified',     bigVal: '100%',   title: 'Format Resmi',   sub: 'Siap Cetak' },
              { icon: 'security',     bigVal: 'Aman',   title: 'Data',           sub: 'Terlindungi' },
            ].map((item) => (
              <div key={item.title} style={{
                background: C.sand, borderRadius: '20px',
                border: `1px solid ${C.cardBorder}`,
                padding: '24px', textAlign: 'center',
                boxShadow: '0 2px 12px rgba(27,46,74,0.05)',
                transition: 'transform .2s, box-shadow .2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(27,46,74,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(27,46,74,0.05)'; }}
              >
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '36px', color: C.gold, display: 'block', marginBottom: '10px' }}>{item.icon}</span>
                <div style={{ fontSize: '28px', fontWeight: 900, color: C.navy, lineHeight: 1 }}>{item.bigVal}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.textSecond, marginTop: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '11px', color: C.textMuted, marginTop: '2px' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TEMPLATE SECTION ══════════ */}
      <section id="templates" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Section heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '28px' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: '36px', fontWeight: 400, color: C.navy, lineHeight: 1.1,
          }}>
            Template Surat
          </h2>
          <p style={{ fontSize: '15px', color: C.textSecond }}>Pilih template yang sesuai kebutuhan Anda</p>
        </div>

        {/* Search + Category row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '28px' }}>

          {/* Search bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            background: C.white, border: `1px solid ${C.cardBorder}`,
            borderRadius: '14px', padding: '10px 16px',
            width: '100%', maxWidth: '320px',
            boxShadow: '0 1px 6px rgba(27,46,74,0.04)',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.textMuted }}>search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari template..."
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                fontSize: '14px', color: C.navy,
              }}
            />
            {searchQuery && (
              <button onClick={() => handleSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: C.textMuted }}>close</span>
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
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
                    border: active ? 'none' : `1.5px solid ${C.cardBorder}`,
                    background: active ? C.navy : 'transparent',
                    color: active ? '#fff' : C.textSecond,
                    cursor: 'pointer', transition: 'all .2s',
                    boxShadow: active ? '0 3px 12px rgba(27,46,74,0.25)' : 'none',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{cat.icon}</span>
                  {cat.label}
                  <span style={{
                    fontSize: '10px', fontWeight: 700, padding: '1px 6px', borderRadius: '999px',
                    background: active ? 'rgba(255,255,255,0.2)' : C.goldLight,
                    color: active ? '#fff' : C.goldDark,
                  }}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Template Grid */}
        {templates.length > 0 ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
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
                    background: C.white, borderRadius: '20px',
                    border: `1px solid ${C.cardBorder}`, padding: '20px',
                    boxShadow: '0 2px 10px rgba(27,46,74,0.05)',
                    transition: 'border-color .2s, box-shadow .2s, transform .2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = C.gold;
                    el.style.boxShadow = '0 8px 32px rgba(27,46,74,0.12)';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = C.cardBorder;
                    el.style.boxShadow = '0 2px 10px rgba(27,46,74,0.05)';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon + Badge */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                      background: `linear-gradient(135deg, ${C.goldLight}, ${C.sandDark})`,
                      border: `1px solid ${C.cardBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span className="material-symbols-outlined icon-fill" style={{ fontSize: '22px', color: C.gold }}>
                        {template.icon}
                      </span>
                    </div>
                    {free ? (
                      <span style={{
                        fontSize: '11px', fontWeight: 700,
                        color: C.goldDark, textTransform: 'uppercase', letterSpacing: '0.8px',
                        marginTop: '4px'
                      }}>
                        Gratis
                      </span>
                    ) : (
                      <span style={{
                        fontSize: '11px', fontWeight: 700,
                        color: C.goldDark, textTransform: 'uppercase', letterSpacing: '0.8px',
                        marginTop: '4px'
                      }}>
                        {formatRupiah(template.price)}
                      </span>
                    )}
                  </div>

                  {/* Category tag */}
                  <span style={{ fontSize: '10px', fontWeight: 700, color: C.gold, marginBottom: '6px', letterSpacing: '0.4px', opacity: 0.9 }}>
                    {catLabel[template.category] || template.category}
                  </span>

                  {/* Title & desc */}
                  <h3 style={{
                    fontSize: '15px', fontWeight: 700, color: C.navy,
                    marginBottom: '6px', lineHeight: 1.3,
                  }}>
                    {template.name}
                  </h3>
                  <p style={{
                    fontSize: '12px', color: C.textSecond, lineHeight: 1.6,
                    flex: 1, marginBottom: '16px',
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
                      height: '44px', borderRadius: '12px',
                      background: C.navy, color: '#fff',
                      fontSize: '13px', fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 3px 12px rgba(27,46,74,0.22)',
                      transition: 'opacity .15s, transform .1s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(0.99)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>edit</span>
                    Buat Sekarang
                  </Link>
                </div>
              );
            })}
            </div>

            {hasMore && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: C.navy,
                    color: '#fff',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '14px 36px',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(27,46,74,0.15)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    btn.style.background = C.navyHover;
                    btn.style.transform = 'translateY(-2px)';
                    btn.style.boxShadow = '0 6px 20px rgba(27,46,74,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    btn.style.background = C.navy;
                    btn.style.transform = 'translateY(0)';
                    btn.style.boxShadow = '0 4px 16px rgba(27,46,74,0.15)';
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.gold }}>expand_more</span>
                  Tampilkan Lainnya ({templates.length - visibleCount} Lagi)
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 20px', textAlign: 'center' }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '24px', marginBottom: '16px',
              background: C.sand, border: `1px solid ${C.cardBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '36px', color: C.textMuted }}>search_off</span>
            </div>
            <p style={{ fontSize: '16px', fontWeight: 600, color: C.textSecond }}>Template tidak ditemukan.</p>
            <p style={{ fontSize: '13px', color: C.textMuted, marginTop: '6px' }}>Coba kata kunci lain seperti &quot;Kuasa&quot; atau &quot;Izin&quot;</p>
          </div>
        )}
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{ borderTop: `1px solid ${C.cardBorder}`, background: C.ivory }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '32px 24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '8px',
              background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined icon-fill" style={{ fontSize: '13px', color: C.gold }}>description</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: '16px', color: C.navy,
            }}>
              Surat<span style={{ color: C.gold }}>Otomatis</span>
            </span>
          </div>
          <p style={{ fontSize: '12px', color: C.textMuted }}>© 2025 SuratOtomatis. Generator surat resmi otomatis.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privasi', 'Syarat', 'Kontak'].map((link) => (
              <a key={link} href="#" style={{
                fontSize: '12px', color: C.textMuted, textDecoration: 'none', transition: 'color .15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
