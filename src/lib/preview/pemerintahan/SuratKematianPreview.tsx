import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratKematianPreview({ formData }: Props) {
  const { namaJenazah, nikJenazah, jenisKelamin, tanggalMeninggal, tempatMeninggal, penyebab, namaPelapor, hubunganPelapor, kotaSurat, tanggalSurat, namaPejabat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PENGANTAR KEMATIAN</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini menerangkan bahwa telah meninggal dunia warga kami:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Jenazah</span><span>:</span><span style={PS.bold}>{orDash(namaJenazah as string)}</span>
        <span>NIK Jenazah</span><span>:</span><span>{orDash(nikJenazah as string)}</span>
        <span>Jenis Kelamin</span><span>:</span><span>{orDash(jenisKelamin as string)}</span>
        <span>Tanggal Wafat</span><span>:</span><span>{tanggalMeninggal ? formatTanggalIndonesia(tanggalMeninggal as string) : '—'}</span>
        <span>Tempat Wafat</span><span>:</span><span>{orDash(tempatMeninggal as string)}</span>
        <span>Penyebab Wafat</span><span>:</span><span>{orDash(penyebab as string)}</span>
      </div>
      <div style={PS.p()}>Berdasarkan laporan yang diajukan oleh ahli waris / pelapor:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Pelapor</span><span>:</span><span style={PS.bold}>{orDash(namaPelapor as string)}</span>
        <span>Hubungan Keluarga</span><span>:</span><span>{orDash(hubunganPelapor as string)}</span>
      </div>
      <div style={PS.p()}>Demikian surat pengantar kematian ini dibuat untuk dipergunakan oleh pihak keluarga dalam mengurus Akta Kematian di dinas kependudukan setempat.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pelapor / Waris,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPelapor as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>Kepala Desa / Lurah</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPejabat as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

