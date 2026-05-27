import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPermohonanCutiPreview({ formData }: Props) {
  const { namaKaryawan, nikKaryawan, jabatanKaryawan, divisiKaryawan, jenisCuti, tanggalMulaiCuti, tanggalSelesaiCuti, jumlahHari, alasanCuti, namaBackupKaryawan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, fontSize: '9px', marginBottom: '8px' }}>
        <div>Perihal: Permohonan {orDash(jenisCuti as string || 'Cuti')}</div>
      </div>
      <div style={PS.title}>SURAT PERMOHONAN CUTI KARYAWAN</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Kepada Yth,<br /><strong>HRD / Pimpinan Manajemen</strong><br />Di tempat</div>
      <div style={PS.p()}>Dengan hormat, saya yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK / ID Staff</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
        <span>Jabatan / Divisi</span><span>:</span><span>{orDash(jabatanKaryawan as string)} / {orDash(divisiKaryawan as string)}</span>
      </div>

      <div style={PS.p()}>Mengajukan permohonan izin cuti kerja dengan spesifikasi rincian:</div>
      <div style={PS.dataGrid()}>
        <span>Jenis Cuti</span><span>:</span><span style={PS.bold}>{orDash(jenisCuti as string)}</span>
        <span>Durasi Cuti</span><span>:</span><span>{jumlahHari ? `${jumlahHari} hari kerja` : '—'}</span>
        <span>Waktu Pelaksanaan</span><span>:</span><span>{tanggalMulaiCuti ? formatTanggalIndonesia(tanggalMulaiCuti as string) : '—'} s.d. {tanggalSelesaiCuti ? formatTanggalIndonesia(tanggalSelesaiCuti as string) : '—'}</span>
        <span>Alasan Cuti</span><span>:</span><span>{orDash(alasanCuti as string)}</span>
        <span>Serah Terima Tugas</span><span>:</span><span>Tugas dibackup sementara oleh <strong>{orDash(namaBackupKaryawan as string)}</strong></span>
      </div>

      <div style={PS.p()}>Demikian surat permohonan cuti ini saya ajukan secara formal. Atas pertimbangan, perhatian, serta persetujuan Bapak/Ibu pimpinan, saya ucapkan terima kasih.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Menyetujui,<br />HRD / Atasan</div>
          <div style={PS.sigLineDash} />
          <div>( _________________ )</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>Hormat saya,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaKaryawan as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

