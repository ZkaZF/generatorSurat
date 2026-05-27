import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratDudaJandaPreview({ formData }: Props) {
  const { nama, nik, status, namaPasanganSebelumnya, tanggalMeninggalPasangan, keperluan, alamat, kotaSurat, tanggalSurat, namaPejabat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KETERANGAN {status === 'Janda' ? 'JANDA' : 'DUDA'}</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini Kepala Desa / Lurah, menerangkan dengan sebenarnya bahwa:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Sejak ditinggal wafat oleh pasangan hidupnya pada tanggal **{tanggalMeninggalPasangan ? formatTanggalIndonesia(tanggalMeninggalPasangan as string) : '—'}**:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Pasangan</span><span>:</span><span style={PS.bold}>{orDash(namaPasanganSebelumnya as string)}</span>
        <span>Status Sekarang</span><span>:</span><span style={PS.bold}>{orDash(status as string)} (Belum Menikah Lagi)</span>
      </div>
      <div style={PS.p()}>Surat keterangan ini diberikan berdasarkan keaktifan data domisili serta laporan lingkungan setempat, untuk dipergunakan bagi: <strong>{orDash(keperluan as string)}</strong>.</div>
      <div style={PS.p()}>Demikian surat keterangan ini dibuat agar dapat dipergunakan dan difasilitasi dengan sebaik-baiknya.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemohon,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div>
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

