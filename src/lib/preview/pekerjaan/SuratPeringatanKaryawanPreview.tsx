import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPeringatanKaryawanPreview({ formData }: Props) {
  const { namaPerusahaan, namaAtasan, jabatanAtasan, namaKaryawan, nikKaryawan, jabatanKaryawan, jenisSP, alasanPelanggaran, kotaSurat, tanggalSurat } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.center, marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>{orDash(namaPerusahaan as string).toUpperCase()}</div>
        <div style={{ fontSize: '8px', color: '#666' }}>DEPARTEMEN SUMBER DAYA MANUSIA (HRD)</div>
        <div style={{ width: '120px', borderBottom: '1px solid #000', margin: '4px auto 0' }} />
      </div>

      <div style={{ ...PS.title, fontSize: '11px', color: '#c00' }}>{orDash(jenisSP as string || 'SURAT PERINGATAN (SP)')}</div>
      <div style={PS.thinDivider} />
      
      <div style={PS.p()}>Surat teguran resmi disiplin kerja ini ditujukan kepada karyawan:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Karyawan</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK / ID Staff</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
        <span>Jabatan Terakhir</span><span>:</span><span>{orDash(jabatanKaryawan as string)}</span>
      </div>

      <div style={PS.p()}>Diberikan atas pelanggaran tata tertib / disiplin / target operasional sebagai berikut:</div>
      <div style={{ border: '1px solid #c00', borderRadius: '4px', padding: '8px', marginBottom: '10px', fontSize: '10px', backgroundColor: '#fff5f5', color: '#600' }}>
        <strong>{orDash(alasanPelanggaran as string)}</strong>
      </div>

      <div style={PS.p()}>Pihak manajemen meminta agar yang bersangkutan segera melakukan evaluasi sikap kerja dan tidak mengulangi kesalahan serupa. Apabila di kemudian hari masih ditemukan indisipliner, perusahaan berhak menempuh tindakan administrasi yang lebih keras hingga PHK.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Diterima oleh,<br />Karyawan</div>
          <div style={PS.sigLineDash} />
          <div>{orDash(namaKaryawan as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>Dikeluarkan oleh,<br />{orDash(namaPerusahaan as string)}</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaAtasan as string)}</div>
          <div style={{ fontSize: '8px', color: '#666' }}>{orDash(jabatanAtasan as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


