import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratSKTMPreview({ formData }: Props) {
  const { namaKepalaKeluarga, nama, nik, tempatLahir, tanggalLahir, pekerjaan, alamat, keperluan, kotaSurat, tanggalSurat, namaPejabat, jabatanPejabat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KETERANGAN TIDAK MAMPU (SKTM)</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini, {orDash(jabatanPejabat as string || 'Lurah / Kepala Desa')}, menerangkan dengan sebenarnya bahwa:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Pekerjaan</span><span>:</span><span>{orDash(pekerjaan as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Adalah benar warga yang bertempat tinggal di wilayah kami dan tergolong dalam keluarga prasejahtera / kurang mampu, di bawah tanggung jawab Kepala Keluarga: <strong>{orDash(namaKepalaKeluarga as string)}</strong>.</div>
      <div style={PS.p()}>Surat keterangan ini diberikan atas dasar keadaan yang sebenarnya untuk dipergunakan sebagai: <strong>{orDash(keperluan as string)}</strong>.</div>
      <div style={PS.p()}>Demikian surat keterangan tidak mampu ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemohon,</div>
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


