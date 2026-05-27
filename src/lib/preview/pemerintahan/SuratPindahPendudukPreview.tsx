import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPindahPendudukPreview({ formData }: Props) {
  const { namaKepalaKeluarga, nama, nik, alamatAsal, alamatTujuan, alasanPindah, jumlahPengikut, kotaSurat, tanggalSurat, namaPejabat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PENGANTAR PINDAH PENDUDUK</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini, menerangkan bahwa warga di bawah ini mengajukan pindah domisili kependudukan:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Pemohon</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK Pemohon</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Kepala Keluarga</span><span>:</span><span>{orDash(namaKepalaKeluarga as string)}</span>
        <span>Alamat Asal</span><span>:</span><span>{orDash(alamatAsal as string)}</span>
      </div>
      <div style={PS.p()}>Adapun data daerah tujuan pemindahan kependudukan adalah sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Alamat Tujuan</span><span>:</span><span style={PS.bold}>{orDash(alamatTujuan as string)}</span>
        <span>Alasan Pindah</span><span>:</span><span>{orDash(alasanPindah as string)}</span>
        <span>Jumlah Pengikut</span><span>:</span><span>{jumlahPengikut ? `${jumlahPengikut} orang` : '—'}</span>
      </div>
      <div style={PS.p()}>Seluruh berkas administrasi pendukung kependudukan asal telah dinyatakan dicabut dari database RT/RW setempat untuk dipindahkan ke daerah baru.</div>
      <div style={PS.p()}>Demikian surat pengantar pindah ini dibuat agar dapat dipergunakan untuk mengurus kepindahan di kantor Dukcapil daerah tujuan.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemohon,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div style={{ margin: '2px 0' }}>Kepala Desa / Lurah</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPejabat as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

