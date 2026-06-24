'use client';

import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/layout/Footer';

// ── Design tokens (same Getburnt palette) ────────────────────────────────────
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

const serif: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 300,
};

// ── Nav ──────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: C.charcoal, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span className="material-symbols-outlined icon-fill" style={{ fontSize: '16px', color: C.white }}>description</span>
          </div>
          <span style={{ ...serif, fontSize: '20px', color: C.charcoal, letterSpacing: '-0.26px' }}>Suratin</span>
        </Link>

        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '40px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {[
              { label: 'Tentang', href: '/tentang' },
              { label: 'Bantuan', href: '/bantuan' },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{
                fontSize: '15px', fontWeight: item.href === '/tentang' ? 600 : 400,
                color: item.href === '/tentang' ? C.charcoal : C.slate,
                textDecoration: 'none', letterSpacing: '0.45px',
                transition: 'color .15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = C.charcoal)}
                onMouseLeave={e => (e.currentTarget.style.color = item.href === '/tentang' ? C.charcoal : C.slate)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#templates"
            id="nav-cta-buat-surat-tentang"
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
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function TentangPage() {
  const values = [
    {
      icon: 'lock',
      title: 'Data Aman & Privat',
      desc: 'Semua data yang Anda isi — termasuk nama, NIK, alamat, dan tanda tangan — diproses sepenuhnya di browser Anda. Tidak ada satu pun data yang dikirimkan ke server kami.',
    },
    {
      icon: 'verified',
      title: '100% Gratis Selamanya',
      desc: 'Seluruh koleksi template tersedia gratis tanpa biaya tersembunyi, tanpa iklan mengganggu, dan tanpa batas penggunaan.',
    },
    {
      icon: 'description',
      title: 'Format Resmi & Terstandar',
      desc: 'Setiap template dirancang mengikuti format dan tata bahasa surat resmi Indonesia yang sesuai standar instansi pemerintah dan swasta.',
    },
    {
      icon: 'bolt',
      title: 'Cepat, Tanpa Software Tambahan',
      desc: 'Tidak perlu install Microsoft Word atau aplikasi lain. Cukup buka browser, isi form, dan PDF Anda siap diunduh dalam hitungan detik.',
    },
  ];

  const stats = [
    { value: '56+', label: 'Template Surat' },
    { value: '4',   label: 'Kategori Surat' },
    { value: '0',   label: 'Data Dikirim ke Server' },
    { value: '∞',   label: 'Batas Penggunaan' },
  ];

  const team = [
    {
      name: 'Pengembang Utama',
      role: 'Frontend & Template Design',
      icon: 'code',
      desc: 'Merancang dan membangun antarmuka, sistem template, dan pengalaman pengguna Suratin.',
    },
    {
      name: 'Tim Hukum & Bahasa',
      role: 'Konten Template',
      icon: 'gavel',
      desc: 'Memastikan setiap template mengikuti kaidah penulisan surat resmi yang benar secara hukum dan bahasa.',
    },
    {
      name: 'Komunitas',
      role: 'Kontributor & Penguji',
      icon: 'group',
      desc: 'Ribuan pengguna yang memberikan masukan, melaporkan bug, dan me-request template baru setiap harinya.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: C.white, fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif", color: C.charcoal }}>
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 24px 80px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
          <Link href="/" style={{ fontSize: '13px', color: C.slate, textDecoration: 'none', letterSpacing: '0.42px', transition: 'color .15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = C.charcoal)}
            onMouseLeave={e => (e.currentTarget.style.color = C.slate)}
          >Beranda</Link>
          <span className="material-symbols-outlined" style={{ fontSize: '14px', color: C.slate }}>chevron_right</span>
          <span style={{ fontSize: '13px', color: C.charcoal, fontWeight: 500, letterSpacing: '0.42px' }}>Tentang</span>
        </div>

        <div style={{ maxWidth: '720px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            border: `1px solid ${C.border}`,
            borderRadius: '1440px', padding: '5px 14px', marginBottom: '32px',
            fontSize: '12px', fontWeight: 500, color: C.slate, letterSpacing: '0.42px',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>info</span>
            Tentang Suratin
          </div>

          <h1 style={{
            ...serif,
            fontSize: 'clamp(42px, 6vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.72px',
            color: C.charcoal,
            marginBottom: '28px',
          }}>
            Generator surat<br />
            resmi untuk semua<br />
            <em>orang Indonesia</em>
          </h1>

          <p style={{
            fontSize: '17px', color: C.slate,
            lineHeight: 1.7, letterSpacing: '0.48px',
            maxWidth: '560px',
          }}>
            Suratin lahir dari satu keresahan sederhana: mengapa membuat surat resmi di Indonesia masih harus ribet?
            Template yang susah dicari, format yang tidak konsisten, dan risiko kesalahan penulisan.
            Kami hadir untuk mengubah itu.
          </p>
        </div>
      </section>

      {/* ══════════ DIVIDER + STATS ══════════ */}
      <div style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: `1px solid ${C.border}` }}>
            {stats.map((s) => (
              <div key={s.label} style={{
                padding: '40px 32px',
                borderRight: `1px solid ${C.border}`,
                borderBottom: `1px solid ${C.border}`,
              }}>
                <div style={{ ...serif, fontSize: '52px', fontWeight: 300, color: C.charcoal, lineHeight: 1, letterSpacing: '-0.48px', marginBottom: '8px' }}>{s.value}</div>
                <div style={{ fontSize: '14px', color: C.slate, letterSpacing: '0.42px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ MISI ══════════ */}
      <section style={{ background: C.dustFaint, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: C.slate, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Misi Kami</span>
              <h2 style={{ ...serif, fontSize: '48px', lineHeight: 1.1, letterSpacing: '-0.48px', color: C.charcoal, marginBottom: '24px' }}>
                Dokumen resmi,<br />mudah untuk<br />semua
              </h2>
              <p style={{ fontSize: '15px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.45px' }}>
                Kami percaya bahwa setiap orang berhak atas akses ke dokumen resmi yang benar, tanpa harus bergantung pada jasa pembuatan surat berbayar, software mahal, atau pengetahuan teknis khusus.
              </p>
            </div>
            <div style={{ paddingTop: '32px' }}>
              <div style={{ borderLeft: `2px solid ${C.charcoal}`, paddingLeft: '24px', marginBottom: '32px' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, color: C.charcoal, marginBottom: '8px', letterSpacing: '0.45px' }}>Visi</div>
                <p style={{ fontSize: '14px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.42px' }}>
                  Menjadi platform pembuatan surat resmi Indonesia yang paling mudah, tepercaya, dan dapat diakses oleh seluruh lapisan masyarakat.
                </p>
              </div>
              <div style={{ borderLeft: `2px solid ${C.border}`, paddingLeft: '24px' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, color: C.charcoal, marginBottom: '8px', letterSpacing: '0.45px' }}>Nilai</div>
                <p style={{ fontSize: '14px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.42px' }}>
                  Kesederhanaan, privasi pengguna, ketepatan format, dan aksesibilitas tanpa syarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ VALUES / KEUNGGULAN ══════════ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: C.slate, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Keunggulan</span>
          <h2 style={{ ...serif, fontSize: '48px', lineHeight: 1.1, letterSpacing: '-0.48px', color: C.charcoal }}>
            Kenapa Suratin?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: `1px solid ${C.border}`, borderBottom: 'none', borderRight: 'none' }}>
          {values.map((v, idx) => (
            <div key={v.title} style={{
              padding: '40px 32px',
              borderRight: `1px solid ${C.border}`,
              borderBottom: `1px solid ${C.border}`,
              transition: 'background .15s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = C.dustFaint}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
            >
              <div style={{
                width: '44px', height: '44px',
                border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '20px', color: C.charcoal }}>{v.icon}</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: C.charcoal, marginBottom: '10px', letterSpacing: '0.5px' }}>{v.title}</h3>
              <p style={{ fontSize: '14px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.42px' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ TIM ══════════ */}
      <section style={{ background: C.dustFaint, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: C.slate, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Dibalik Suratin</span>
            <h2 style={{ ...serif, fontSize: '48px', lineHeight: 1.1, letterSpacing: '-0.48px', color: C.charcoal }}>
              Tim kami
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: `1px solid ${C.border}`, borderRight: 'none' }}>
            {team.map((t) => (
              <div key={t.name} style={{
                padding: '40px 32px',
                borderRight: `1px solid ${C.border}`,
                transition: 'background .15s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = C.white}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
              >
                <div style={{
                  width: '48px', height: '48px', background: C.charcoal,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: '22px', color: C.white }}>{t.icon}</span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: C.slate, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>{t.role}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: C.charcoal, marginBottom: '12px', letterSpacing: '0.5px' }}>{t.name}</h3>
                <p style={{ fontSize: '14px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.42px' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 24px' }}>
        <div style={{
          background: C.charcoal,
          padding: '64px 48px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
          gap: '24px',
        }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Mulai Sekarang</span>
          <h2 style={{ ...serif, fontSize: '48px', lineHeight: 1.1, letterSpacing: '-0.48px', color: C.white }}>
            Siap membuat surat<br />resmi pertama Anda?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, letterSpacing: '0.45px', maxWidth: '440px' }}>
            Pilih dari 56+ template gratis dan buat surat resmi dalam 2 menit — tanpa registrasi, tanpa biaya.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
            <Link href="/#templates" id="tentang-cta-template" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: C.white, color: C.charcoal,
              fontWeight: 500, fontSize: '15px', letterSpacing: '0.45px',
              padding: '12px 28px', borderRadius: '1440px',
              textDecoration: 'none', transition: 'opacity .15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>description</span>
              Lihat Semua Template
            </Link>
            <Link href="/bantuan" id="tentang-cta-bantuan" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.08)', color: C.white,
              border: '1px solid rgba(255,255,255,0.18)',
              fontWeight: 500, fontSize: '15px', letterSpacing: '0.45px',
              padding: '12px 28px', borderRadius: '1440px',
              textDecoration: 'none', transition: 'background .15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>help</span>
              Pusat Bantuan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

