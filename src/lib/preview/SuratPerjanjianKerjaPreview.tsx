import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from './shared';

interface Props { formData: FormData; }

export default function SuratPerjanjianKerjaPreview({ formData }: Props) {
  const {
    namaPerusahaan, namaWakil, jabatanWakil, alamatPerusahaan,
    namaKaryawan, nikKaryawan, alamatKaryawan, posisi, departemen,
    tanggalMulai, tanggalBerakhir, gajiPokok, tunjanganLain, jamKerja,
    kotaSurat, tanggalSurat, tandaTanganPemberi, tandaTanganPenerima,
  } = formData;

  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN KERJA WAKTU TERTENTU</div>
      <div style={{ ...PS.center, fontSize: '10px', marginBottom: '4px' }}>(PKWT)</div>
      <div style={PS.divider} />

      <div style={PS.p()}>
        Perjanjian ini dibuat dan ditandatangani di <strong>{orDash(kotaSurat as string)}</strong> pada{' '}
        <strong>{tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}</strong>, oleh dan antara:
      </div>

      <div style={PS.p('4px')}><strong>PIHAK PERTAMA (Pemberi Kerja):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Perusahaan</span><span>:</span><span style={PS.bold}>{orDash(namaPerusahaan as string)}</span>
        <span>Diwakili oleh</span><span>:</span><span>{orDash(namaWakil as string)} ({orDash(jabatanWakil as string)})</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPerusahaan as string)}</span>
      </div>

      <div style={PS.p('4px')}><strong>PIHAK KEDUA (Karyawan):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatKaryawan as string)}</span>
        <span>Jabatan</span><span>:</span><span>{orDash(posisi as string)}{departemen ? ` / ${departemen}` : ''}</span>
      </div>

      <div style={PS.thinDivider} />
      <div style={PS.p('4px')}><strong>Pasal 1 — Masa Kerja</strong></div>
      <div style={PS.p()}>
        PKWT ini berlaku mulai <strong>{tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'}</strong> s.d.{' '}
        <strong>{tanggalBerakhir ? formatTanggalIndonesia(tanggalBerakhir as string) : '___'}</strong>.
        {jamKerja && <> Jam kerja: <strong>{jamKerja as string}</strong>.</>}
      </div>

      <div style={PS.p('4px')}><strong>Pasal 2 — Kompensasi</strong></div>
      <div style={PS.p()}>
        Gaji pokok: <strong>Rp {orDash(gajiPokok as string)}</strong>/bulan.
        {tunjanganLain && <> Tunjangan lain: <strong>Rp {tunjanganLain as string}</strong>/bulan.</>}
      </div>

      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pihak Pertama,</div>
          <SigImg src={tandaTanganPemberi as string | undefined} />
          <div style={PS.bold}>{orDash(namaWakil as string, namaPerusahaan as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>Pihak Kedua,</div>
          <SigImg src={tandaTanganPenerima as string | undefined} />
          <div style={PS.bold}>{orDash(namaKaryawan as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}
