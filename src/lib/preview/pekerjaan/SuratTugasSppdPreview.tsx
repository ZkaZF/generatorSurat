import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratTugasSPPDPreview({ formData }: Props) {
  const { namaPerusahaan, namaPemberiTugas, jabatanPemberiTugas, namaKaryawan, nikKaryawan, jabatanKaryawan, maksudPerjalanan, lokasiTujuan, tanggalMulaiDinas, tanggalSelesaiDinas, kotaSurat, tanggalSurat } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.center, marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>{orDash(namaPerusahaan as string).toUpperCase()}</div>
        <div style={{ fontSize: '8px', color: '#666' }}>SURAT PERINTAH PERJALANAN DINAS (SPPD)</div>
        <div style={{ width: '120px', borderBottom: '1px solid #000', margin: '4px auto 0' }} />
      </div>

      <div style={PS.p()}>Diberikan wewenang penuh kepada staf di bawah ini untuk mengemban tugas dinas luar kota:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Karyawan</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK / ID Staff</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
        <span>Jabatan Resmi</span><span>:</span><span>{orDash(jabatanKaryawan as string)}</span>
      </div>

      <div style={PS.p()}>Detail penugasan, lokasi, serta rentang masa tugas perjalanan dinas diatur sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Maksud Dinas</span><span>:</span><span>{orDash(maksudPerjalanan as string)}</span>
        <span>Kota Tujuan</span><span>:</span><span style={PS.bold}>{orDash(lokasiTujuan as string)}</span>
        <span>Masa Dinas</span><span>:</span><span>{tanggalMulaiDinas ? formatTanggalIndonesia(tanggalMulaiDinas as string) : '—'} s.d. {tanggalSelesaiDinas ? formatTanggalIndonesia(tanggalSelesaiDinas as string) : '—'}</span>
      </div>

      <div style={PS.p()}>Seluruh instansi, mitra bisnis, dan perwakilan kantor cabang di lokasi tujuan dimohon memberikan bantuan serta fasilitas operasional yang diperlukan agar penugasan dinas ini berjalan dengan lancar.</div>
      
      <div style={PS.sigBlock}>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div style={{ margin: '2px 0' }}>{orDash(namaPerusahaan as string)}</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemberiTugas as string)}</div>
          <div style={{ fontSize: '8px', color: '#666' }}>{orDash(jabatanPemberiTugas as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

