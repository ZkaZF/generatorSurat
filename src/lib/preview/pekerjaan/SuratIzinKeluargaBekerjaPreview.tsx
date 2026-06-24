import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratIzinKeluargaBekerjaPreview({ formData }: Props) {
  const { namaPemberiIzin, hubungan, alamatPemberiIzin, namaKaryawan, nikKaryawan, alamatKaryawan, namaPerusahaan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT IZIN KELUARGA / ORANG TUA / SUAMI</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Yang bertanda tangan di bawah ini (Pemberi Izin):</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(namaPemberiIzin as string)}</span>
        <span>Hubungan Keluarga</span><span>:</span><span>{orDash(hubungan as string)}</span>
        <span>Alamat Lengkap</span><span>:</span><span>{orDash(alamatPemberiIzin as string)}</span>
      </div>

      <div style={PS.p()}>Dengan ini memberikan izin sepenuhnya kepada (Calon Karyawan):</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK / No. KTP</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
        <span>Alamat Lengkap</span><span>:</span><span>{orDash(alamatKaryawan as string)}</span>
      </div>

      <div style={PS.p()}>Untuk bekerja, melamar, dan menjalani masa penugasan shift/kerja lembur/penempatan tugas luar kota pada perusahaan: <strong>{orDash(namaPerusahaan as string)}</strong>.</div>
      
      <div style={PS.p()}>Kami selaku keluarga bertanggung jawab penuh mendukung kedisiplinan dan profesionalisme yang bersangkutan selama menjalankan kewajiban tugas kerja di bawah kepengurusan manajemen.</div>
      
      <div style={PS.p()}>Demikian surat izin keluarga ini kami buat dengan sadar dan penuh kesediaan untuk digunakan sebagaimana mestinya.</div>
      
      <div style={PS.sigBlock}>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>Pemberi Izin,</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemberiIzin as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


