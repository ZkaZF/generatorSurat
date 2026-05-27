import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratBedaNamaPreview({ formData }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, alamat, namaDokumen1, namaDiDokumen1, namaDokumen2, namaDiDokumen2, alasan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERNYATAAN BEDA NAMA</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini, menyatakan identitas diri saya:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Dengan ini menyatakan dengan sesungguhnya bahwa nama yang tertera pada dokumen-dokumen resmi berikut:</div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '8px', fontSize: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '150px 10px 1fr', gap: '2px 0' }}>
          <span>1. {orDash(namaDokumen1 as string)}</span><span>:</span><span style={PS.bold}>{orDash(namaDiDokumen1 as string)}</span>
          <span>2. {orDash(namaDokumen2 as string)}</span><span>:</span><span style={PS.bold}>{orDash(namaDiDokumen2 as string)}</span>
        </div>
      </div>
      <div style={PS.p()}>Adalah benar merupakan **satu orang yang sama** (yaitu diri saya sendiri). Perbedaan ejaan atau penulisan nama tersebut disebabkan oleh: <strong>{orDash(alasan as string)}</strong>.</div>
      <div style={PS.p()}>Demikian surat pernyataan beda nama ini saya buat dengan sadar tanpa paksaan dari pihak mana pun, dan bersedia bertanggung jawab secara hukum atas kebenarannya.</div>
      
      <div style={{ ...PS.right, marginBottom: '4px', marginTop: '20px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.sigBlock}>
        <div style={PS.sigBox}>
          <div>Yang Menyatakan,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

