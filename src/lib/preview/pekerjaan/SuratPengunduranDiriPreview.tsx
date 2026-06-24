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
  bold: { fontWeight: 'bold' as const },
  dataGrid: {
    display: 'grid', gridTemplateColumns: '90px 12px 1fr',
    gap: '1px 0', paddingLeft: '16px', marginBottom: '10px',
  },
  body: { textAlign: 'justify' as const, marginBottom: '8px' },
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

export default function SuratPengunduranDiriPreview({ formData }: Props) {
  const {
    namaKaryawan, jabatan, departemen, namaPerusahaan, namaAtasan,
    tanggalEfektif, alasan, kotaSurat, tanggalSurat, tandaTangan,
  } = formData;

  return (
    <div style={S.page}>
      {/* Date */}
      <div style={{ textAlign: 'right', marginBottom: '16px' }}>
        {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}
      </div>

      {/* Addressee */}
      <div style={{ marginBottom: '14px' }}>
        <div>Kepada Yth.</div>
        {namaAtasan && <div>{namaAtasan as string}</div>}
        <div>HRD / Pimpinan</div>
        <div style={S.bold}>{orDash(namaPerusahaan as string)}</div>
        <div>di Tempat</div>
      </div>

      {/* Subject */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
        <span style={S.bold}>Perihal</span>
        <span>:</span>
        <span>Surat Pengunduran Diri</span>
      </div>

      <div style={{ marginBottom: '8px' }}>Dengan hormat,</div>
      <div style={S.body}>Yang bertanda tangan di bawah ini:</div>

      <div style={S.dataGrid}>
        <span>Nama</span><span>:</span><span style={S.bold}>{orDash(namaKaryawan as string)}</span>
        <span>Jabatan</span><span>:</span><span style={S.bold}>{orDash(jabatan as string)}</span>
        <span>Departemen</span><span>:</span><span style={S.bold}>{orDash(departemen as string)}</span>
      </div>

      <div style={S.body}>
        Dengan ini menyatakan mengundurkan diri dari jabatan saya di{' '}
        <strong>{orDash(namaPerusahaan as string)}</strong> terhitung mulai tanggal{' '}
        <strong>{tanggalEfektif ? formatTanggalIndonesia(tanggalEfektif as string) : '_______________'}</strong>.
      </div>

      <div style={S.body}>Adapun alasan saya mengundurkan diri adalah:</div>
      <div style={{ ...S.body, fontStyle: 'italic', paddingLeft: '12px' }}>
        &ldquo;{orDash(alasan as string, 'tidak ada keterangan')}&rdquo;
      </div>

      <div style={S.body}>
        Saya mengucapkan terima kasih yang sebesar-besarnya kepada seluruh manajemen dan rekan kerja atas kesempatan dan pengalaman berharga yang telah diberikan selama ini.
      </div>

      <div style={S.body}>
        Demikian surat pengunduran diri ini saya buat dengan penuh kesadaran dan tanpa paksaan dari pihak manapun.
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
          <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{orDash(namaKaryawan as string)}</div>
        </div>
      </div>

      <div style={S.footer}>Dibuat oleh Suratin Dong.id</div>
    </div>
  );
}

