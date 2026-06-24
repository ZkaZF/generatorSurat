import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi — Suratin Dong',
  description: 'Pelajari bagaimana Suratin Dong melindungi privasi dan data pribadi Anda. Semua data diproses secara lokal di browser Anda.',
};

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

const sections = [
  {
    id: 'informasi-dikumpulkan',
    title: '1. Informasi yang Kami Kumpulkan',
    content: `Suratin Dong dirancang dengan prinsip privasi sejak awal (privacy by design). Kami secara sengaja meminimalkan pengumpulan data.

**Data yang TIDAK kami kumpulkan:**
- Nama, NIK, alamat, atau informasi pribadi apa pun yang Anda masukkan ke formulir surat
- Gambar tanda tangan digital yang Anda buat
- Isi atau konten surat yang Anda buat
- Riwayat surat yang pernah Anda buat

**Data yang mungkin kami kumpulkan secara anonim:**
- Data pengunjung secara agregat (jumlah kunjungan, halaman yang populer) melalui Vercel Analytics — tidak mengidentifikasi individu
- Log server standar (alamat IP, browser, waktu akses) yang disimpan sementara untuk keperluan keamanan dan performa`,
  },
  {
    id: 'cara-kerja-data',
    title: '2. Cara Kerja Data di Suratin Dong',
    content: `Semua data yang Anda masukkan ke Suratin Dong diproses **sepenuhnya di browser Anda sendiri** menggunakan JavaScript sisi klien (client-side). Artinya:

- Data formulir surat Anda **tidak pernah dikirim ke server kami**
- PDF dihasilkan langsung di browser Anda, bukan di server kami
- Ketika Anda menutup tab atau browser, semua data tersebut **hilang sepenuhnya** — kami tidak menyimpannya
- Tanda tangan digital Anda hanya ada di memori browser selama sesi tersebut berlangsung

Arsitektur ini bukan sekadar klaim — ini adalah konsekuensi teknis dari cara kami membangun aplikasi.`,
  },
  {
    id: 'cookies',
    title: '3. Cookies dan Teknologi Pelacak',
    content: `Suratin Dong menggunakan cookies minimal:

- **Cookies teknis:** Diperlukan untuk fungsionalitas dasar aplikasi (misalnya, menyimpan preferensi tampilan)
- **Analytics Anonim:** Kami menggunakan Vercel Analytics yang mengumpulkan data kunjungan secara agregat tanpa mengidentifikasi pengguna individual. Tidak ada cross-site tracking.

Kami **tidak menggunakan:**
- Google Analytics atau platform pelacak pihak ketiga yang agresif
- Cookies iklan atau profiling
- Pixel tracking`,
  },
  {
    id: 'berbagi-data',
    title: '4. Berbagi Data dengan Pihak Ketiga',
    content: `Kami tidak menjual, menyewakan, atau memperdagangkan data Anda kepada siapa pun.

Layanan pihak ketiga yang kami gunakan dan kebijakan privasinya:
- **Vercel** (hosting & infrastruktur): Kebijakan privasi Vercel berlaku untuk data infrastruktur
- **Google Fonts** (tipografi): Font dimuat dari CDN Google; Kebijakan privasi Google berlaku

Semua pihak ketiga tersebut dipilih karena rekam jejak privasi mereka yang baik.`,
  },
  {
    id: 'keamanan',
    title: '5. Keamanan Data',
    content: `Karena data sensitif Anda tidak pernah meninggalkan browser Anda, risiko kebocoran data dari sisi server diminimalkan secara fundamental.

Untuk keamanan tambahan:
- Seluruh lalu lintas ke Suratin Dong dienkripsi menggunakan HTTPS (TLS)
- Kami secara rutin memperbarui dependensi untuk menambal kerentanan keamanan
- Kode sumber kami tersedia untuk diaudit`,
  },
  {
    id: 'hak-pengguna',
    title: '6. Hak-hak Anda',
    content: `Karena kami tidak menyimpan data pribadi Anda, sebagian besar hak privasi tradisional (hak akses, koreksi, penghapusan) sudah terpenuhi secara otomatis — data Anda tidak ada di sistem kami.

Jika Anda memiliki pertanyaan tentang data yang mungkin kami miliki (seperti data analytics anonim), Anda berhak untuk:
- Meminta informasi tentang data apa yang tersimpan
- Meminta penghapusan data tersebut
- Mengajukan keberatan atas pemrosesan data

Hubungi kami di: suratindong18@gmail.com`,
  },
  {
    id: 'perubahan-kebijakan',
    title: '7. Perubahan Kebijakan Privasi',
    content: `Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Jika ada perubahan material, kami akan memberikan pemberitahuan yang wajar melalui website kami.

Tanggal efektif kebijakan ini: **1 Januari 2025**
Terakhir diperbarui: **Juni 2025**`,
  },
];

export default function PrivasiPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.white, fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif", color: C.charcoal }}>
      <style>{`
        .toc-link { color: #5f5f5d; border-left: 2px solid transparent; transition: color .15s, border-color .15s; }
        .toc-link:hover { color: #1a1a17 !important; border-left-color: #1a1a17 !important; }
      `}</style>

      {/* ── Navbar ── */}
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
            <span style={{ ...serif, fontSize: '20px', color: C.charcoal, letterSpacing: '-0.26px' }}>Suratin Dong</span>
          </Link>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '14px', color: C.slate, textDecoration: 'none', letterSpacing: '0.42px',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_back</span>
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
          <Link href="/" style={{ fontSize: '13px', color: C.slate, textDecoration: 'none', letterSpacing: '0.42px' }}>Beranda</Link>
          <span className="material-symbols-outlined" style={{ fontSize: '14px', color: C.slate }}>chevron_right</span>
          <span style={{ fontSize: '13px', color: C.charcoal, fontWeight: 500, letterSpacing: '0.42px' }}>Kebijakan Privasi</span>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          border: `1px solid ${C.border}`, borderRadius: '1440px',
          padding: '5px 14px', marginBottom: '24px',
          fontSize: '12px', fontWeight: 500, color: C.slate, letterSpacing: '0.42px',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>lock</span>
          Privasi &amp; Keamanan
        </div>

        <h1 style={{ ...serif, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.64px', color: C.charcoal, marginBottom: '20px', maxWidth: '600px' }}>
          Kebijakan Privasi
        </h1>
        <p style={{ fontSize: '16px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.48px', maxWidth: '580px' }}>
          Kami membangun Suratin Dong dengan prinsip bahwa data Anda adalah milik Anda. Baca bagaimana kami melindungi privasi Anda.
        </p>

        {/* Privacy highlight */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          marginTop: '32px', padding: '16px 20px',
          background: C.dustFaint, border: `1px solid ${C.border}`,
        }}>
          <span className="material-symbols-outlined icon-fill" style={{ fontSize: '20px', color: C.charcoal }}>verified_user</span>
          <span style={{ fontSize: '14px', color: C.charcoal, fontWeight: 500, letterSpacing: '0.42px' }}>
            Data Anda tidak pernah meninggalkan browser — diproses 100% secara lokal
          </span>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ borderTop: `1px solid ${C.border}` }}>
        <div className="toc-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Sidebar TOC */}
          <aside className="toc-sidebar">
            <div style={{ fontSize: '11px', fontWeight: 700, color: C.slate, letterSpacing: '1.4px', textTransform: 'uppercase', padding: '0 24px', marginBottom: '16px' }}>
              Daftar Isi
            </div>
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="toc-link"
                style={{
                  display: 'block', padding: '10px 24px',
                  fontSize: '13px',
                  textDecoration: 'none', letterSpacing: '0.42px',
                }}
              >
                {sec.title}
              </a>
            ))}
          </aside>

          {/* Main content */}
          <div className="toc-main">
            {sections.map((sec, idx) => (
              <div
                key={sec.id}
                id={sec.id}
                style={{
                  paddingBottom: '48px',
                  marginBottom: '48px',
                  borderBottom: idx < sections.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <h2 style={{ fontSize: '22px', fontWeight: 600, color: C.charcoal, marginBottom: '20px', letterSpacing: '0.44px' }}>
                  {sec.title}
                </h2>
                {sec.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') || para.includes('**')) {
                    // Render paragraphs with bold
                    const parts = para.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={i} style={{ fontSize: '15px', color: C.slate, lineHeight: 1.8, letterSpacing: '0.45px', marginBottom: '16px' }}>
                        {parts.map((part, j) =>
                          part.startsWith('**') && part.endsWith('**')
                            ? <strong key={j} style={{ color: C.charcoal, fontWeight: 600 }}>{part.slice(2, -2)}</strong>
                            : part
                        )}
                      </p>
                    );
                  }
                  if (para.startsWith('- ')) {
                    // Render as list
                    const items = para.split('\n').filter(l => l.startsWith('- '));
                    return (
                      <ul key={i} style={{ margin: '0 0 16px 0', padding: '0 0 0 20px' }}>
                        {items.map((item, j) => (
                          <li key={j} style={{ fontSize: '15px', color: C.slate, lineHeight: 1.8, letterSpacing: '0.45px', marginBottom: '6px' }}>
                            {item.slice(2).replace(/\*\*([^*]+)\*\*/g, '$1')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} style={{ fontSize: '15px', color: C.slate, lineHeight: 1.8, letterSpacing: '0.45px', marginBottom: '16px' }}>
                      {para}
                    </p>
                  );
                })}
              </div>
            ))}

            {/* Contact CTA */}
            <div style={{ padding: '24px', background: C.dustFaint, border: `1px solid ${C.border}` }}>
              <p style={{ fontSize: '14px', color: C.slate, letterSpacing: '0.42px', marginBottom: '12px' }}>
                Ada pertanyaan tentang privasi Anda?
              </p>
              <a
                href="mailto:suratindong18@gmail.com?subject=Pertanyaan%20Privasi"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '14px', fontWeight: 500, color: C.charcoal,
                  textDecoration: 'none', letterSpacing: '0.42px',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>mail</span>
                suratindong18@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

