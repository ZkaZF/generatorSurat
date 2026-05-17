'use client';

import { useState, useMemo } from 'react';
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

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | 'semua'>('semua');

  const templates = useMemo(() => {
    if (searchQuery.trim()) return searchTemplates(searchQuery);
    if (activeCategory === 'semua') return getAllTemplates();
    return getTemplatesByCategory(activeCategory);
  }, [searchQuery, activeCategory]);

  const handleSearch = (q: string) => { setSearchQuery(q); if (q) setActiveCategory('semua'); };
  const handleCategory = (c: TemplateCategory | 'semua') => { setActiveCategory(c); setSearchQuery(''); };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #f0f4ff 0%, #f8f9ff 50%, #eff4ff 100%)' }}>
      {/* ══════════ HEADER ══════════ */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80"
        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '16px' }}>description</span>
            </div>
            <span className="text-lg font-bold text-on-surface tracking-tight">SuratOtomatis</span>
          </Link>

          {/* Nav links — desktop only */}
          <nav className="hidden md:flex items-center gap-6">
            {['Tentang', 'Harga', 'Bantuan'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <Link
            href="#templates"
            className="hidden md:inline-flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>edit</span>
            Buat Surat
          </Link>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        {/* Two-column grid — always side by side on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '64px', alignItems: 'center' }}>

          {/* Left — Copy */}
          <div style={{ minWidth: 0 }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#dbe1ff', color: '#003fa0', border: '1px solid #b4c5ff',
              borderRadius: '999px', padding: '6px 16px', marginBottom: '20px',
              fontSize: '12px', fontWeight: 700,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>auto_awesome</span>
              100% Gratis untuk Surat Umum
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: '#0d1c2f',
              marginBottom: '20px',
            }}>
              Buat Surat Resmi<br />
              dalam <span style={{ color: '#004ac6' }}>2 Menit</span>,<br />
              <span style={{ color: '#737686', fontWeight: 700 }}>Bebas Ribet.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#434655',
              lineHeight: 1.7,
              marginBottom: '32px',
              maxWidth: '520px',
            }}>
              Isi form singkat, tambahkan tanda tangan digital, lalu download PDF format A4 siap cetak. Tanpa perlu software tambahan.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#templates"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#004ac6', color: '#ffffff',
                  fontWeight: 700, fontSize: '15px',
                  padding: '14px 28px', borderRadius: '14px',
                  textDecoration: 'none', transition: 'opacity .15s',
                  boxShadow: '0 4px 16px rgba(0,74,198,0.35)',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit_document</span>
                Lihat Semua Template
              </a>
              <a
                href="#cara-kerja"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#ffffff', color: '#004ac6',
                  fontWeight: 700, fontSize: '15px',
                  padding: '14px 28px', borderRadius: '14px',
                  textDecoration: 'none', border: '1.5px solid rgba(0,74,198,0.2)',
                  transition: 'background .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f0f4ff')}
                onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
              >
                Cara Kerja
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
              </a>
            </div>
          </div>

          {/* Right — Stats cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'description', value: '20+',    label: 'Template Tersedia', color: '#dbe1ff' },
              { icon: 'download',    value: 'Instan', label: 'PDF Download',      color: '#d0e1fb' },
              { icon: 'verified',    value: '100%',   label: 'Format Resmi',      color: '#c9e6ff' },
              { icon: 'lock',        value: 'Aman',   label: 'Data Terlindungi',  color: '#dbe1ff' },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: '#ffffff', borderRadius: '20px', padding: '18px',
                display: 'flex', flexDirection: 'column', gap: '10px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  backgroundColor: stat.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#004ac6' }}>{stat.icon}</span>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#0d1c2f' }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', fontWeight: 500, color: '#434655' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CARA KERJA ══════════ */}
      <section id="cara-kerja" className="max-w-7xl mx-auto px-6 py-12 border-t border-white/60">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          {[
            { step: '1', icon: 'touch_app', title: 'Pilih Template', desc: 'Pilih jenis surat dari koleksi kami' },
            { step: '2', icon: 'edit', title: 'Isi Form', desc: 'Lengkapi data dan tambahkan tanda tangan' },
            { step: '3', icon: 'download', title: 'Download PDF', desc: 'Unduh surat siap cetak format A4' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-3"
                  style={{ boxShadow: '0 2px 12px rgba(0,74,198,0.12)' }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>{item.icon}</span>
                </div>
                <div className="text-xs font-bold text-primary mb-1">Langkah {item.step}</div>
                <div className="text-sm font-bold text-on-surface">{item.title}</div>
                <div className="text-xs text-on-surface-variant mt-0.5">{item.desc}</div>
              </div>
              {idx < 2 && (
                <span className="material-symbols-outlined text-outline hidden md:block" style={{ fontSize: '24px' }}>
                  arrow_forward
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ TEMPLATE SECTION ══════════ */}
      <section id="templates" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface">Template Surat</h2>
            <p className="text-on-surface-variant mt-1">Pilih template yang sesuai kebutuhan Anda</p>
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 w-full md:w-80"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
            <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari template..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-on-surface placeholder:text-gray-400"
            />
            {searchQuery && (
              <button onClick={() => handleSearch('')}>
                <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>close</span>
              </button>
            )}
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            const count = cat.id === 'semua' ? getAllTemplates().length : getAllTemplates().filter(t => t.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  active
                    ? 'bg-primary text-white'
                    : 'bg-white text-on-surface-variant border border-gray-200 hover:border-primary/40 hover:text-primary'
                }`}
                style={active ? { boxShadow: '0 2px 8px rgba(0,74,198,0.25)' } : {}}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>{cat.icon}</span>
                {cat.label}
                <span style={{
                  fontSize: '10px', fontWeight: 700, padding: '1px 6px', borderRadius: '999px',
                  background: active ? 'rgba(255,255,255,0.25)' : '#f0f4ff',
                  color: active ? '#fff' : '#004ac6',
                }}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Template Grid */}
        {templates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {templates.map((template) => {
              const free = isFreeTemplate(template);
              const catLabel: Record<string,string> = { pekerjaan:'Pekerjaan', 'jual-beli':'Jual Beli', pemerintahan:'Pemerintahan', sekolah:'Sekolah' };
              return (
                <div key={template.id}
                  className="flex flex-col bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                  {/* Icon + Badge row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #dbe1ff, #d0e1fb)' }}>
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px' }}>
                        {template.icon}
                      </span>
                    </div>
                    {free ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold"
                        style={{ background: '#dcfce7', color: '#166534' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>check_circle</span>
                        Gratis
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold"
                        style={{ background: '#fef3c7', color: '#92400e' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>star</span>
                        {formatRupiah(template.price)}
                      </span>
                    )}
                  </div>

                  {/* Category tag */}
                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#004ac6', marginBottom: '6px', opacity: 0.7 }}>
                    {catLabel[template.category] || template.category}
                  </span>

                  {/* Title & desc */}
                  <h3 className="text-base font-bold text-on-surface mb-1 group-hover:text-primary transition-colors leading-snug">
                    {template.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed flex-1 mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/editor/${template.id}`}
                    id={`btn-buat-${template.id}`}
                    className="w-full h-11 bg-primary text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
                    style={{ boxShadow: '0 2px 8px rgba(0,74,198,0.2)' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>edit</span>
                    Buat Sekarang
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-3xl bg-surface-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-outline" style={{ fontSize: '36px' }}>search_off</span>
            </div>
            <p className="text-base font-semibold text-on-surface-variant">Template tidak ditemukan.</p>
            <p className="text-sm text-outline mt-1">Coba kata kunci lain seperti &quot;Kuasa&quot; atau &quot;Izin&quot;</p>
          </div>
        )}
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-gray-100 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '12px' }}>description</span>
            </div>
            <span className="text-sm font-bold text-on-surface">SuratOtomatis</span>
          </div>
          <p className="text-xs text-outline">© 2025 SuratOtomatis. Generator surat resmi otomatis.</p>
          <div className="flex gap-4">
            {['Privasi', 'Syarat', 'Kontak'].map((link) => (
              <a key={link} href="#" className="text-xs text-outline hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
