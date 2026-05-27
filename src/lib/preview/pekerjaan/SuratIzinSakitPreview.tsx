import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';

interface Props { formData: FormData; }

// Shared inner styles for A4 letter
const S = {
  page: {
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '10px',
    lineHeight: 1.7,
    padding: '36px 40px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    color: '#1a1a1a',
    boxSizing: 'border-box' as const,
  },
  rightAlign: { textAlign: 'right' as const, marginBottom: '16px' },
  section: { marginBottom: '14px' },
  bold: { fontWeight: 'bold' as const },
  dataGrid: {
    display: 'grid',
    gridTemplateColumns: '90px 12px 1fr',
    gap: '1px 0',
    paddingLeft: '16px',
    marginBottom: '10px',
  },
  subject: { display: 'flex', gap: '16px', marginBottom: '14px' },
  body: { textAlign: 'justify' as const, marginBottom: '8px' },
  italic: { fontStyle: 'italic' as const, paddingLeft: '12px' },
  sigBlock: { marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'flex-end' },
  sigBox: { textAlign: 'center' as const, width: '140px' },
  sigLine: { width: '90px', borderBottom: '1px dashed #aaa', margin: '40px auto 4px' },
  footer: {
    marginTop: '12px', paddingTop: '8px',
    borderTop: '0.5px solid #e0e0e0',
    textAlign: 'center' as const,
    fontSize: '8px', color: '#aaa', fontStyle: 'italic' as const,
  },
};

export default function SuratIzinSakitPreview({ formData }: Props) {
  const {
    namaKaryawan, jabatan, departemen, namaPerusahaan,
    tanggalMulai, tanggalSelesai, keterangan,
    kotaSurat, tanggalSurat, tandaTangan,
  } = formData;

  const hitungHari = () => {
    if (!tanggalMulai || !tanggalSelesai) return '___';
    const start = new Date(tanggalMulai as string);
    const end = new Date(tanggalSelesai as string);
    const days = Math.ceil((end.getTime() - start.getTime()) / 86400000) + 1;
    return days > 0 ? `${days}` : '___';
  };

  return (
    <div style={S.page}>
      {/* Date */}
      <div style={S.rightAlign}>
        {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}
      </div>

      {/* Addressee */}
      <div style={S.section}>
        <div>Kepada Yth.</div>
        <div>HRD / Atasan</div>
        <div style={S.bold}>{orDash(namaPerusahaan as string)}</div>
        <div>di Tempat</div>
      </div>

      {/* Subject */}
      <div style={S.subject}>
        <span style={S.bold}>Perihal</span>
        <span>:</span>
        <span>Permohonan Izin Tidak Masuk Kerja</span>
      </div>

      <div style={{ marginBottom: '8px' }}>Dengan hormat,</div>
      <div style={S.body}>Saya yang bertanda tangan di bawah ini:</div>

      <div style={S.dataGrid}>
        <span>Nama</span><span>:</span><span style={S.bold}>{orDash(namaKaryawan as string)}</span>
        <span>Jabatan</span><span>:</span><span style={S.bold}>{orDash(jabatan as string)}</span>
        <span>Departemen</span><span>:</span><span style={S.bold}>{orDash(departemen as string)}</span>
      </div>

      <div style={S.body}>bermaksud mengajukan permohonan izin tidak masuk kerja dikarenakan sakit, pada:</div>

      <div style={S.dataGrid}>
        <span>Tanggal Mulai</span><span>:</span>
        <span style={S.bold}>{tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '_______________'}</span>
        <span>Tanggal Selesai</span><span>:</span>
        <span style={S.bold}>{tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '_______________'}</span>
        <span>Lama Izin</span><span>:</span>
        <span style={S.bold}>{hitungHari()} hari</span>
      </div>

      <div style={S.body}>
        Adapun alasan ketidakhadiran saya adalah: <span style={S.italic}>&ldquo;{orDash(keterangan as string, 'tidak ada keterangan')}&rdquo;</span>
      </div>

      <div style={S.body}>
        Demikian surat izin ini saya buat dengan sebenar-benarnya. Atas perhatian dan izin yang diberikan, saya ucapkan terima kasih.
      </div>

      {/* Signature */}
      <div style={S.sigBlock}>
        <div style={S.sigBox}>
          <div>Hormat saya,</div>
          {tandaTangan ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tandaTangan as string} alt="TTD" style={{ height: '40px', maxWidth: '100%', objectFit: 'contain', margin: '8px auto' }} />
          ) : (
            <div style={S.sigLine} />
          )}
          <div style={{ ...S.bold, textDecoration: 'underline' }}>{orDash(namaKaryawan as string)}</div>
        </div>
      </div>

      <div style={S.footer}>Dibuat oleh SuratOtomatis.id</div>
    </div>
  );
}
