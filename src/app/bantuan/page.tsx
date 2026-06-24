'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/layout/Footer';

// ── Design tokens ─────────────────────────────────────────────────────────────
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
                fontSize: '15px', fontWeight: item.href === '/bantuan' ? 600 : 400,
                color: item.href === '/bantuan' ? C.charcoal : C.slate,
                textDecoration: 'none', letterSpacing: '0.45px',
                transition: 'color .15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = C.charcoal)}
                onMouseLeave={e => (e.currentTarget.style.color = item.href === '/bantuan' ? C.charcoal : C.slate)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#templates"
            id="nav-cta-buat-surat-bantuan"
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

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    category: 'Umum',
    icon: 'info',
    questions: [
      {
        q: 'Apakah Suratin benar-benar gratis?',
        a: 'Ya, 100% gratis. Semua template yang tersedia di Suratin bisa digunakan tanpa biaya apapun — tanpa registrasi, tanpa berlangganan, dan tanpa watermark pada hasil PDF.',
      },
      {
        q: 'Apakah saya perlu membuat akun untuk menggunakan Suratin?',
        a: 'Tidak perlu. Suratin dirancang agar bisa langsung digunakan tanpa proses registrasi atau login. Buka website, pilih template, isi form, dan unduh PDF.',
      },
      {
        q: 'Apakah Suratin bisa digunakan di HP (smartphone)?',
        a: 'Ya. Suratin dioptimalkan untuk tampil dengan baik di semua ukuran layar, termasuk smartphone Android dan iPhone. Anda bahkan bisa menambahkan tanda tangan langsung dengan jari di layar sentuh.',
      },
    ],
  },
  {
    category: 'Privasi & Keamanan',
    icon: 'security',
    questions: [
      {
        q: 'Apakah data pribadi saya (NIK, alamat, tanda tangan) aman?',
        a: 'Sangat aman. Semua data yang Anda masukkan hanya diproses secara lokal di browser Anda sendiri. Tidak ada satu pun data yang dikirimkan atau disimpan di server kami. Setelah Anda menutup tab browser, data tersebut hilang sepenuhnya.',
      },
      {
        q: 'Apakah tanda tangan digital saya bisa disalahgunakan?',
        a: 'Tidak. Tanda tangan yang Anda buat hanya ada di browser Anda dan langsung disematkan ke dokumen PDF yang Anda unduh. Kami tidak menyimpan gambar tanda tangan Anda di mana pun.',
      },
      {
        q: 'Apakah Suratin menggunakan cookies atau pelacak?',
        a: 'Suratin menggunakan analytics anonimis minimal (hanya data pengunjung secara agregat, bukan data pribadi) untuk membantu kami memahami template apa yang paling dibutuhkan. Tidak ada profiling pengguna.',
      },
    ],
  },
  {
    category: 'Membuat Surat',
    icon: 'edit_note',
    questions: [
      {
        q: 'Bagaimana cara memilih template yang tepat?',
        a: 'Gunakan fitur pencarian atau filter kategori (Pekerjaan, Jual Beli, Pemerintahan, Sekolah) di halaman utama. Setiap template memiliki deskripsi singkat yang menjelaskan kegunaannya.',
      },
      {
        q: 'Bisakah saya mengubah isi surat setelah mengisi form?',
        a: 'Ya. Selama Anda masih berada di halaman editor, Anda bisa mengubah isian form kapan saja. Pratinjau surat akan diperbarui secara otomatis (real-time).',
      },
      {
        q: 'Bagaimana cara menambahkan tanda tangan digital?',
        a: 'Di halaman editor, gulir ke bagian "Tanda Tangan". Anda bisa menggambar tanda tangan menggunakan mouse (di PC) atau jari (di HP). Ada juga opsi untuk mengetik nama dan menggunakan gaya tulisan tangan otomatis.',
      },
      {
        q: 'Format file apa yang bisa diunduh?',
        a: 'Saat ini Suratin menghasilkan file dalam format PDF ukuran A4, yang merupakan standar untuk surat resmi dan siap dicetak langsung.',
      },
    ],
  },
  {
    category: 'Hasil PDF',
    icon: 'picture_as_pdf',
    questions: [
      {
        q: 'Mengapa hasil cetak PDF saya terpotong di tepi?',
        a: 'Pastikan pengaturan cetak di browser Anda menggunakan margin "Default" atau "Minimum" (bukan "None"), dan skala cetak diatur ke "Sesuaikan ke halaman" (Fit to page). Gunakan ukuran kertas A4.',
      },
      {
        q: 'Apakah ada watermark pada PDF yang diunduh?',
        a: 'Tidak ada. PDF yang Anda unduh bersih tanpa watermark, logo, atau tanda apapun dari Suratin. Dokumen terlihat profesional seperti dibuat dari awal.',
      },
      {
        q: 'Apakah surat dari Suratin sah secara hukum?',
        a: 'Suratin menghasilkan dokumen dengan format yang benar secara administratif. Keabsahan hukum sebuah surat bergantung pada kebenaran isi, tanda tangan pihak berwenang, dan stempel instansi — yang merupakan tanggung jawab pengguna, bukan tools pembuat formatnya.',
      },
    ],
  },
  {
    category: 'Template & Konten',
    icon: 'description',
    questions: [
      {
        q: 'Template surat yang saya butuhkan tidak ada. Bagaimana caranya?',
        a: 'Anda bisa mengirimkan request template melalui email kami. Kami secara aktif menambahkan template baru berdasarkan permintaan pengguna. Cantumkan nama jenis surat yang dibutuhkan dan kategorinya.',
      },
      {
        q: 'Apakah template mengikuti format resmi instansi pemerintah?',
        a: 'Ya. Setiap template dirancang mengikuti standar penulisan surat resmi Bahasa Indonesia sesuai Permendiknas dan pedoman tata naskah dinas instansi pemerintah.',
      },
    ],
  },
];

// ── FAQ Accordion Item ────────────────────────────────────────────────────────
function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{
      borderBottom: `1px solid ${C.border}`,
      transition: 'background .15s',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: '16px', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '15px', fontWeight: 500, color: C.charcoal, lineHeight: 1.5, letterSpacing: '0.45px', flex: 1 }}>{q}</span>
        <span className="material-symbols-outlined" style={{
          fontSize: '20px', color: C.slate, flexShrink: 0, marginTop: '1px',
          transition: 'transform .2s',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>expand_more</span>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: '20px', paddingRight: '36px' }}>
          <p style={{ fontSize: '14px', color: C.slate, lineHeight: 1.75, letterSpacing: '0.42px' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
function BantuanPageInner() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCat, setActiveCat] = useState('Umum');
  const searchParams = useSearchParams();

  useEffect(() => {
    const topik = searchParams.get('topik');
    if (topik === 'tanda-tangan') {
      setActiveCat('Membuat Surat');
    } else if (topik === 'hasil-pdf') {
      setActiveCat('Hasil PDF');
    }
  }, [searchParams]);

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCategory = FAQ_ITEMS.find(c => c.category === activeCat);

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
          <span style={{ fontSize: '13px', color: C.charcoal, fontWeight: 500, letterSpacing: '0.42px' }}>Bantuan</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              border: `1px solid ${C.border}`,
              borderRadius: '1440px', padding: '5px 14px', marginBottom: '32px',
              fontSize: '12px', fontWeight: 500, color: C.slate, letterSpacing: '0.42px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>help</span>
              Pusat Bantuan
            </div>

            <h1 style={{
              ...serif,
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.64px',
              color: C.charcoal,
              marginBottom: '24px',
            }}>
              Ada yang bisa<br />kami bantu?
            </h1>

            <p style={{
              fontSize: '16px', color: C.slate,
              lineHeight: 1.7, letterSpacing: '0.48px',
              maxWidth: '480px', marginBottom: '32px',
            }}>
              Temukan jawaban dari pertanyaan yang paling sering ditanyakan seputar penggunaan Suratin, keamanan data, dan hasil dokumen PDF.
            </p>

            <a
              href="mailto:suratindong18@gmail.com"
              id="bantuan-kontak-email"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: `1px solid ${C.border}`,
                color: C.charcoal, background: 'transparent',
                fontSize: '14px', fontWeight: 500,
                padding: '10px 20px', borderRadius: '1440px',
                textDecoration: 'none', letterSpacing: '0.42px',
                transition: 'border-color .15s, color .15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = C.charcoal; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = C.border; }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>mail</span>
              Kirim pertanyaan via email
            </a>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: `1px solid ${C.border}` }}>
            {[
              { icon: 'touch_app',     label: 'Cara Memilih Template',   desc: 'Panduan memilih template yang sesuai kebutuhan' },
              { icon: 'edit',          label: 'Mengisi Formulir',         desc: 'Tips mengisi form dengan tepat dan cepat' },
              { icon: 'draw',          label: 'Tanda Tangan Digital',     desc: 'Cara menambahkan tanda tangan ke surat' },
              { icon: 'picture_as_pdf', label: 'Mengunduh & Mencetak PDF', desc: 'Pengaturan optimal saat mencetak dokumen' },
            ].map((item, idx) => (
              <button
                key={item.label}
                onClick={() => {
                  // Map quick links to FAQ category
                  const catMap: Record<string, string> = {
                    'Cara Memilih Template': 'Membuat Surat',
                    'Mengisi Formulir': 'Membuat Surat',
                    'Tanda Tangan Digital': 'Membuat Surat',
                    'Mengunduh & Mencetak PDF': 'Hasil PDF',
                  };
                  setActiveCat(catMap[item.label] || 'Umum');
                  document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '18px 20px', background: 'none', border: 'none',
                  borderBottom: idx < 3 ? `1px solid ${C.border}` : 'none',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'background .15s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = C.dustFaint}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = 'transparent'}
              >
                <div style={{
                  width: '36px', height: '36px', flexShrink: 0,
                  border: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: C.charcoal }}>{item.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: C.charcoal, letterSpacing: '0.42px', marginBottom: '2px' }}>{item.label}</div>
                  <div style={{ fontSize: '12px', color: C.slate, letterSpacing: '0.36px' }}>{item.desc}</div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: C.slate }}>arrow_forward</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ SECTION ══════════ */}
      <section id="faq-section" style={{ borderTop: `1px solid ${C.border}`, background: C.dustFaint }}>
        <div className="toc-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* ── Sidebar kategori ── */}
          <div className="toc-sidebar">
            <div style={{ fontSize: '11px', fontWeight: 600, color: C.slate, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '0 24px', marginBottom: '16px' }}>
              Kategori
            </div>
            {FAQ_ITEMS.map((cat) => {
              const active = activeCat === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCat(cat.category)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 24px', background: 'none', border: 'none',
                    borderLeft: active ? `2px solid ${C.charcoal}` : '2px solid transparent',
                    cursor: 'pointer', textAlign: 'left',
                    transition: 'all .15s',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: active ? C.charcoal : C.slate }}>{cat.icon}</span>
                  <span style={{ fontSize: '14px', fontWeight: active ? 600 : 400, color: active ? C.charcoal : C.slate, letterSpacing: '0.42px' }}>
                    {cat.category}
                  </span>
                  <span style={{
                    marginLeft: 'auto', fontSize: '11px', fontWeight: 600,
                    padding: '1px 7px', borderRadius: '1440px',
                    background: active ? C.charcoal : C.dustFaint,
                    color: active ? C.white : C.slate,
                  }}>
                    {cat.questions.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── FAQ list ── */}
          <div className="toc-main" style={{ minHeight: '600px' }}>
            {activeCategory && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <div style={{
                    width: '40px', height: '40px', background: C.charcoal,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px', color: C.white }}>{activeCategory.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: C.slate, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Kategori</div>
                    <h2 style={{ ...serif, fontSize: '28px', color: C.charcoal, lineHeight: 1, letterSpacing: '-0.28px' }}>{activeCategory.category}</h2>
                  </div>
                </div>

                <div>
                  {activeCategory.questions.map((item, idx) => {
                    const key = `${activeCat}-${idx}`;
                    return (
                      <AccordionItem
                        key={key}
                        q={item.q}
                        a={item.a}
                        isOpen={!!openItems[key]}
                        onToggle={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>

        </div>
      </section>

      {/* ══════════ KONTAK ══════════ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', border: `1px solid ${C.border}`, borderRight: 'none' }}>
          {[
            {
              icon: 'mail',
              title: 'Email',
              value: 'suratindong18@gmail.com',
              desc: 'Kirim pertanyaan atau saran via email. Kami merespons dalam 1–2 hari kerja.',
              cta: 'Kirim Email',
              href: 'mailto:suratindong18@gmail.com',
              id: 'bantuan-kontak-email-card',
            },
            {
              icon: 'description',
              title: 'Request Template',
              value: 'Template baru',
              desc: 'Butuh jenis surat yang belum ada? Request template baru dan kami akan menambahkannya.',
              cta: 'Request Template',
              href: 'mailto:suratindong18@gmail.com?subject=Request%20Template&body=Nama%20surat%20yang%20dibutuhkan%3A%0AKategori%3A%0AKeterangan%20tambahan%3A',
              id: 'bantuan-request-template',
            },
            {
              icon: 'bug_report',
              title: 'Laporkan Bug',
              value: 'Ada masalah?',
              desc: 'Temukan error atau tampilan yang aneh? Laporkan kepada kami agar segera diperbaiki.',
              cta: 'Laporkan Masalah',
              href: 'mailto:suratindong18@gmail.com?subject=Bug%20Report',
              id: 'bantuan-laporkan-bug',
            },
          ].map((card) => (
            <div key={card.title} style={{
              padding: '40px 32px',
              borderRight: `1px solid ${C.border}`,
              display: 'flex', flexDirection: 'column', gap: '16px',
              transition: 'background .15s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = C.dustFaint}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
            >
              <div style={{
                width: '44px', height: '44px',
                border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: C.charcoal }}>{card.icon}</span>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: C.slate, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{card.title}</div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: C.charcoal, letterSpacing: '0.48px', marginBottom: '8px' }}>{card.value}</div>
                <p style={{ fontSize: '13px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.42px' }}>{card.desc}</p>
              </div>
              <a
                href={card.href}
                id={card.id}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: 'auto', fontSize: '13px', fontWeight: 500, color: C.charcoal,
                  textDecoration: 'none', letterSpacing: '0.42px',
                  transition: 'opacity .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {card.cta}
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function BantuanPage() {
  return (
    <Suspense>
      <BantuanPageInner />
    </Suspense>
  );
}
