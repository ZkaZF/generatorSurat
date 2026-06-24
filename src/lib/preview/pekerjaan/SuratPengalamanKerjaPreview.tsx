import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPengalamanKerjaPreview({ formData }: Props) {
  const { namaPerusahaan, namaAtasan, jabatanAtasan, namaKaryawan, nikKaryawan, jabatanTerakhir, tanggalMulaiKerja, tanggalSelesaiKerja, prestasiKontribusi, kotaSurat, tanggalSurat } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.center, marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>{orDash(namaPerusahaan as string).toUpperCase()}</div>
        <div style={{ fontSize: '8px', color: '#666' }}>SURAT KETERANGAN PENGALAMAN KERJA</div>
        <div style={{ width: '120px', borderBottom: '1px solid #000', margin: '4px auto 0' }} />
      </div>

      <div style={PS.p()}>Menerangkan dengan sebenarnya bahwa:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK / No. KTP</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
        <span>Jabatan Terakhir</span><span>:</span><span>{orDash(jabatanTerakhir as string)}</span>
        <span>Masa Kerja</span><span>:</span><span>{tanggalMulaiKerja ? formatTanggalIndonesia(tanggalMulaiKerja as string) : '—'} s.d. {tanggalSelesaiKerja ? formatTanggalIndonesia(tanggalSelesaiKerja as string) : '—'}</span>
      </div>

      <div style={PS.p()}>Adalah benar pernah bekerja di <strong>{orDash(namaPerusahaan as string)}</strong> dalam kurun waktu tersebut di atas. Selama mengabdikan dirinya di perusahaan kami, yang bersangkutan memiliki catatan kontribusi:</div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px', fontSize: '10px', backgroundColor: '#fafafa' }}>
        <strong>{orDash(prestasiKontribusi as string)}</strong>
      </div>

      <div style={PS.p()}>Kami mengucapkan terima kasih sebesar-besarnya atas pengabdian dan kerja keras yang telah didedikasikan kepada perusahaan. Semoga sukses dalam karir di masa depan.</div>
      
      <div style={PS.sigBlock}>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div style={{ margin: '2px 0' }}>{orDash(namaPerusahaan as string)}</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaAtasan as string)}</div>
          <div style={{ fontSize: '8px', color: '#666' }}>{orDash(jabatanAtasan as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


