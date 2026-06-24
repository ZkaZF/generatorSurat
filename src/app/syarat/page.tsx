import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan — Suratin Dong',
  description: 'Syarat dan ketentuan penggunaan layanan Suratin Dong, generator surat resmi otomatis gratis untuk kebutuhan administratif Indonesia.',
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
    id: 'penerimaan',
    title: '1. Penerimaan Syarat',
    content: `Dengan mengakses dan menggunakan layanan Suratin Dong ("Layanan"), Anda menyetujui untuk terikat dengan Syarat dan Ketentuan ini. Jika Anda tidak menyetujui salah satu ketentuan ini, Anda tidak diperbolehkan menggunakan Layanan kami.

Syarat ini berlaku untuk semua pengunjung, pengguna, dan pihak lain yang mengakses atau menggunakan Layanan.`,
  },
  {
    id: 'deskripsi-layanan',
    title: '2. Deskripsi Layanan',
    content: `Suratin Dong adalah generator surat resmi otomatis berbasis web yang memungkinkan pengguna untuk:

- Membuat berbagai jenis surat resmi menggunakan template yang tersedia
- Mengisi formulir data yang diperlukan untuk surat tersebut
- Menambahkan tanda tangan digital ke dokumen
- Mengunduh hasil surat dalam format PDF

Layanan ini disediakan secara gratis tanpa memerlukan registrasi akun. Semua pemrosesan data dilakukan secara lokal di browser pengguna.`,
  },
  {
    id: 'penggunaan-yang-diizinkan',
    title: '3. Penggunaan yang Diizinkan',
    content: `Anda diizinkan menggunakan Suratin Dong untuk:

- Membuat surat resmi untuk keperluan pribadi, profesional, atau bisnis yang sah
- Menghasilkan dokumen administratif yang diperlukan untuk interaksi dengan instansi pemerintah, perusahaan, atau lembaga pendidikan
- Berbagi template yang tersedia dengan orang lain

Anda **dilarang** menggunakan Suratin Dong untuk:

- Membuat dokumen palsu atau memalsukan identitas
- Menghasilkan dokumen yang dimaksudkan untuk menipu, memeras, atau merugikan pihak lain
- Mencoba membobol, merusak, atau mengganggu Layanan
- Menggunakan Layanan untuk tujuan yang melanggar hukum Indonesia atau hukum internasional yang berlaku`,
  },
  {
    id: 'kekayaan-intelektual',
    title: '4. Kekayaan Intelektual',
    content: `**Hak Cipta Suratin Dong:**
Seluruh konten Layanan ini, termasuk desain, kode sumber, teks, grafik, dan template surat, adalah hak milik Suratin Dong dan dilindungi oleh undang-undang hak cipta Indonesia.

**Hak Anda:**
Anda mempertahankan semua hak atas konten yang Anda buat menggunakan Layanan. Suratin Dong tidak mengklaim kepemilikan atas dokumen yang Anda hasilkan.

**Penggunaan Template:**
Template surat yang tersedia di Suratin Dong dapat digunakan secara bebas untuk keperluan pribadi dan profesional. Anda tidak diperbolehkan menjual kembali atau mendistribusikan template tersebut sebagai produk komersial.`,
  },
  {
    id: 'penafian',
    title: '5. Penafian dan Batasan Tanggung Jawab',
    content: `**Tidak Ada Jaminan Hukum:**
Suratin Dong menghasilkan dokumen dengan format yang secara administratif umum diterima, namun **tidak memberikan jaminan hukum atas keabsahan** dokumen yang dihasilkan. Keabsahan hukum sebuah dokumen bergantung pada:
- Kebenaran isi yang dimasukkan pengguna
- Tanda tangan pihak yang berwenang
- Stempel atau cap resmi instansi terkait
- Kepatuhan dengan peraturan yang berlaku di yurisdiksi pengguna

**Konsultasikan dengan Profesional:**
Untuk dokumen yang memiliki konsekuensi hukum signifikan, kami sangat menyarankan untuk berkonsultasi dengan notaris, pengacara, atau profesional hukum yang berwenang.

**Batasan Tanggung Jawab:**
Sejauh diizinkan oleh hukum yang berlaku, Suratin Dong tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan Layanan.`,
  },
  {
    id: 'perubahan-layanan',
    title: '6. Perubahan Layanan',
    content: `Kami berhak untuk:

- Mengubah, menangguhkan, atau menghentikan Layanan (atau bagian darinya) kapan saja
- Mengubah template yang tersedia, menambah template baru, atau menghapus template lama
- Memperbarui Syarat dan Ketentuan ini

Kami akan berupaya memberikan pemberitahuan yang wajar untuk perubahan material. Penggunaan Layanan yang berlanjut setelah perubahan dianggap sebagai penerimaan atas perubahan tersebut.`,
  },
  {
    id: 'hukum-yang-berlaku',
    title: '7. Hukum yang Berlaku',
    content: `Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau berkaitan dengan Syarat ini akan diselesaikan melalui pengadilan yang berwenang di Indonesia.

Jika ada ketentuan dalam Syarat ini yang ditemukan tidak dapat diberlakukan oleh pengadilan yang berwenang, ketentuan tersebut akan dibatasi atau dihapus seminimal mungkin, dan sisa ketentuan akan tetap berlaku penuh.`,
  },
  {
    id: 'kontak',
    title: '8. Hubungi Kami',
    content: `Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:

- **Email:** suratindong18@gmail.com
- **Subject:** Pertanyaan Syarat & Ketentuan

Kami berupaya merespons semua pertanyaan dalam 3-5 hari kerja.

Tanggal efektif: **1 Januari 2025**
Terakhir diperbarui: **Juni 2025**`,
  },
];

export default function SyaratPage() {
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
          <span style={{ fontSize: '13px', color: C.charcoal, fontWeight: 500, letterSpacing: '0.42px' }}>Syarat &amp; Ketentuan</span>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          border: `1px solid ${C.border}`, borderRadius: '1440px',
          padding: '5px 14px', marginBottom: '24px',
          fontSize: '12px', fontWeight: 500, color: C.slate, letterSpacing: '0.42px',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>gavel</span>
          Syarat &amp; Ketentuan
        </div>

        <h1 style={{ ...serif, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.64px', color: C.charcoal, marginBottom: '20px', maxWidth: '600px' }}>
          Syarat &amp; Ketentuan
        </h1>
        <p style={{ fontSize: '16px', color: C.slate, lineHeight: 1.7, letterSpacing: '0.48px', maxWidth: '580px' }}>
          Harap baca syarat dan ketentuan ini dengan seksama sebelum menggunakan layanan Suratin Dong.
        </p>
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
                  if (para.startsWith('- ')) {
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
                  const parts = para.split(/(\*\*[^*]+\*\*)/g);
                  const hasBold = parts.some(p => p.startsWith('**'));
                  if (hasBold) {
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
                  return (
                    <p key={i} style={{ fontSize: '15px', color: C.slate, lineHeight: 1.8, letterSpacing: '0.45px', marginBottom: '16px' }}>
                      {para}
                    </p>
                  );
                })}
              </div>
            ))}

            {/* CTA */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/privasi"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '10px 20px', border: `1px solid ${C.border}`,
                  fontSize: '14px', color: C.charcoal, textDecoration: 'none', letterSpacing: '0.42px',
                  transition: 'border-color .15s',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
                Kebijakan Privasi
              </Link>
              <a
                href="mailto:suratindong18@gmail.com?subject=Pertanyaan%20Syarat%20Ketentuan"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '10px 20px', background: C.charcoal,
                  fontSize: '14px', color: C.white, textDecoration: 'none', letterSpacing: '0.42px',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>mail</span>
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

