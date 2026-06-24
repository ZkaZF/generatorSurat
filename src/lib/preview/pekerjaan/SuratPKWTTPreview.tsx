import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPKWTTPreview({ formData }: Props) {
  const { namaPerusahaan, namaPenanggungJawab, jabatanPenanggungJawab, namaKaryawan, nikKaryawan, alamatKaryawan, jabatanKaryawan, tanggalMulaiBekerja, gajiPokok, tunjanganBulanan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>PERJANJIAN KERJA WAKTU TIDAK TENTU (PKWTT)</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Kesepakatan pengangkatan karyawan tetap PKWTT disetujui bersama oleh para pihak:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Perusahaan)</span><span>:</span><span style={PS.bold}>{orDash(namaPerusahaan as string)}</span>
        <span>Penanggung Jawab</span><span>:</span><span>{orDash(namaPenanggungJawab as string)} ({orDash(jabatanPenanggungJawab as string)})</span>
        <span>PIHAK II (Karyawan)</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK Karyawan</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
      </div>

      <div style={PS.p()}>Kedua belah pihak sepakat mengikatkan diri dalam kontrak kerja tetap dengan ketentuan:</div>
      <div style={PS.dataGrid()}>
        <span>Jabatan Karyawan</span><span>:</span><span style={PS.bold}>{orDash(jabatanKaryawan as string)}</span>
        <span>Tanggal Mulai Efektif</span><span>:</span><span>{tanggalMulaiBekerja ? formatTanggalIndonesia(tanggalMulaiBekerja as string) : '—'} (Status Karyawan Tetap)</span>
        <span>Gaji Pokok Bulanan</span><span>:</span><span style={PS.bold}>{gajiPokok ? `Rp ${Number(gajiPokok).toLocaleString('id-ID')}` : '—'}</span>
        <span>Tunjangan Bulanan</span><span>:</span><span>{tunjanganBulanan ? `Rp ${Number(tunjanganBulanan).toLocaleString('id-ID')}` : '—'}</span>
      </div>

      <div style={PS.p()}>Pihak II bersedia mematuhi seluruh tata tertib, hak rahasia dagang, serta target Key Performance Indicator (KPI) Perusahaan. Kontrak PKWTT ini berlaku efektif tanpa batasan waktu purna tugas kecuali dibubarkan secara hukum kesepakatan tripartit.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Karyawan),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaKaryawan as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Perusahaan),</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTanganPenjual as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenanggungJawab as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


