import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPernyataanKehilanganPreview({ formData }: Props) {
  const { nama, nik, alamat, dokumenHilang, nomorDokumen, tempatHilang, tujuanSurat, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERNYATAAN KEHILANGAN</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK / No. ID</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Dengan ini menyatakan dengan sesungguhnya bahwa saya telah <strong>kehilangan</strong>:</div>
      <div style={{ border: '1.5px solid #333', borderRadius: '4px', padding: '10px', marginBottom: '10px', fontSize: '10px', lineHeight: 1.8 }}>
        <div><strong>Dokumen</strong>: {orDash(dokumenHilang as string)}</div>
        {nomorDokumen && <div><strong>Nomor Dokumen</strong>: {nomorDokumen as string}</div>}
        {tempatHilang && <div><strong>Perkiraan Hilang</strong>: {tempatHilang as string}</div>}
      </div>
      {tujuanSurat && <div style={PS.p()}>Surat pernyataan ini dibuat untuk keperluan: <strong>{tujuanSurat as string}</strong>.</div>}
      <div style={PS.p()}>Demikian surat pernyataan ini saya buat dengan sebenar-benarnya. Saya bertanggung jawab penuh atas kebenaran pernyataan di atas.</div>
      <div style={{ ...PS.right, marginBottom: '4px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Yang Menyatakan,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

