import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';

interface Props { formData: FormData; }

const S = {
  page: {
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '10px', lineHeight: 1.7, padding: '36px 40px',
    height: '100%', display: 'flex', flexDirection: 'column' as const,
    color: '#1a1a1a', boxSizing: 'border-box' as const,
  },
  title: { textAlign: 'center' as const, fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' as const },
  divider: { borderBottom: '2px solid #000', margin: '8px 0 16px' },
  bold: { fontWeight: 'bold' as const },
  dataGrid: {
    display: 'grid', gridTemplateColumns: '110px 12px 1fr',
    gap: '1px 0', paddingLeft: '16px', marginBottom: '10px',
  },
  body: { textAlign: 'justify' as const, marginBottom: '8px' },
  sigRow: { display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '12px' },
  sigBox: { textAlign: 'center' as const, width: '130px' },
  sigLine: { width: '80px', borderBottom: '1px dashed #aaa', margin: '32px auto 4px' },
  footer: {
    marginTop: '10px', paddingTop: '6px',
    borderTop: '0.5px solid #e0e0e0',
    textAlign: 'center' as const, fontSize: '8px', color: '#aaa', fontStyle: 'italic' as const,
  },
};

const PERIHAL_LABELS: Record<string, string> = {
  'pengambilan-bpkb': 'Pengambilan BPKB',
  'pengurusan-bpkb': 'Pengurusan BPKB',
  'balik-nama-bpkb': 'Balik Nama BPKB',
  'pengambilan-dokumen': 'Pengambilan Dokumen',
  'lainnya': 'Lainnya',
};

export default function SuratKuasaPreview({ formData }: Props) {
  const {
    namaPemberi, nikPemberi, tempatLahirPemberi, tanggalLahirPemberi, alamatPemberi, pekerjaanPemberi,
    namaPenerima, nikPenerima, tempatLahirPenerima, tanggalLahirPenerima, alamatPenerima, pekerjaanPenerima,
    perihalKuasa, isiKuasa, kotaSurat, tanggalSurat,
    tandaTanganPemberi, tandaTanganPenerima,
  } = formData;

  return (
    <div style={S.page}>
      <div style={S.title}>SURAT KUASA</div>
      {perihalKuasa && (
        <div style={{ textAlign: 'center', fontSize: '10px', marginBottom: '4px' }}>
          {PERIHAL_LABELS[perihalKuasa as string] || (perihalKuasa as string)}
        </div>
      )}
      <div style={S.divider} />

      <div style={S.body}>Yang bertanda tangan di bawah ini:</div>

      <div style={S.dataGrid}>
        <span>Nama</span><span>:</span><span style={S.bold}>{orDash(namaPemberi as string)}</span>
        <span>NIK</span><span>:</span><span style={S.bold}>{orDash(nikPemberi as string)}</span>
        <span>Tempat/Tgl Lahir</span><span>:</span>
        <span style={S.bold}>
          {tempatLahirPemberi && tanggalLahirPemberi
            ? `${tempatLahirPemberi}, ${formatTanggalIndonesia(tanggalLahirPemberi as string)}`
            : '_______________'}
        </span>
        <span>Alamat</span><span>:</span><span style={S.bold}>{orDash(alamatPemberi as string)}</span>
        <span>Pekerjaan</span><span>:</span><span style={S.bold}>{orDash(pekerjaanPemberi as string)}</span>
      </div>

      <div style={S.body}>
        selanjutnya disebut sebagai <strong>PEMBERI KUASA</strong>.
      </div>

      <div style={S.body}>Dengan ini memberikan kuasa kepada:</div>

      <div style={S.dataGrid}>
        <span>Nama</span><span>:</span><span style={S.bold}>{orDash(namaPenerima as string)}</span>
        <span>NIK</span><span>:</span><span style={S.bold}>{orDash(nikPenerima as string)}</span>
        <span>Tempat/Tgl Lahir</span><span>:</span>
        <span style={S.bold}>
          {tempatLahirPenerima && tanggalLahirPenerima
            ? `${tempatLahirPenerima}, ${formatTanggalIndonesia(tanggalLahirPenerima as string)}`
            : '_______________'}
        </span>
        <span>Alamat</span><span>:</span><span style={S.bold}>{orDash(alamatPenerima as string)}</span>
        <span>Pekerjaan</span><span>:</span><span style={S.bold}>{orDash(pekerjaanPenerima as string)}</span>
      </div>

      <div style={S.body}>
        selanjutnya disebut sebagai <strong>PENERIMA KUASA</strong>.
      </div>

      <div style={S.body}>
        Untuk melakukan: <span style={{ fontStyle: 'italic' }}>{orDash(isiKuasa as string, 'mengurus keperluan yang tersebut di atas')}</span>
      </div>

      <div style={S.body}>
        Demikian surat kuasa ini dibuat dengan sebenar-benarnya untuk dapat dipergunakan sebagaimana mestinya di{' '}
        {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}.
      </div>

      {/* Dual Signatures */}
      <div style={S.sigRow}>
        <div style={S.sigBox}>
          <div>Pemberi Kuasa</div>
          {tandaTanganPemberi ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tandaTanganPemberi as string} alt="TTD Pemberi" style={{ height: '32px', maxWidth: '100%', objectFit: 'contain', margin: '6px auto' }} />
          ) : (
            <div style={S.sigLine} />
          )}
          <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{orDash(namaPemberi as string, '_______________')}</div>
        </div>
        <div style={S.sigBox}>
          <div>Penerima Kuasa</div>
          {tandaTanganPenerima ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tandaTanganPenerima as string} alt="TTD Penerima" style={{ height: '32px', maxWidth: '100%', objectFit: 'contain', margin: '6px auto' }} />
          ) : (
            <div style={S.sigLine} />
          )}
          <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{orDash(namaPenerima as string, '_______________')}</div>
        </div>
      </div>

      <div style={S.footer}>Dibuat oleh Suratin.id</div>
    </div>
  );
}

