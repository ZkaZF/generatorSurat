import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratSKUPreview({ formData }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, alamat, namaUsaha, bidangUsaha, alamatUsaha, kotaSurat, tanggalSurat, namaPejabat, jabatanPejabat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KETERANGAN USAHA (SKU)</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini, {orDash(jabatanPejabat as string || 'Lurah / Kepala Desa')}, menerangkan bahwa:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Pemilik</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Adalah benar nama tersebut di atas memiliki dan menjalankan usaha mandiri / UMKM sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Usaha</span><span>:</span><span style={PS.bold}>{orDash(namaUsaha as string)}</span>
        <span>Bidang Usaha</span><span>:</span><span>{orDash(bidangUsaha as string)}</span>
        <span>Alamat Usaha</span><span>:</span><span>{orDash(alamatUsaha as string)}</span>
      </div>
      <div style={PS.p()}>Berdasarkan pengamatan kami, usaha tersebut berjalan dengan aktif dan produktif hingga saat ini.</div>
      <div style={PS.p()}>Demikian surat keterangan usaha ini diberikan kepada yang bersangkutan untuk dapat dipergunakan sebagai syarat pengajuan administrasi pendanaan atau pengembangan usaha.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemilik Usaha,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div style={{ margin: '2px 0' }}>{orDash(jabatanPejabat as string || 'Lurah/Kades')}</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPejabat as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

