import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPHKKaryawanPreview({ formData }: Props) {
  const { namaPerusahaan, namaAtasan, jabatanAtasan, namaKaryawan, nikKaryawan, jabatanKaryawan, alasanPHK, tanggalEfektifPHK, uangPesangon, kotaSurat, tanggalSurat } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.center, marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>{orDash(namaPerusahaan as string).toUpperCase()}</div>
        <div style={{ fontSize: '8px', color: '#666' }}>SURAT KEPUTUSAN DIREKSI / MANAJEMEN</div>
        <div style={{ width: '120px', borderBottom: '1px solid #000', margin: '4px auto 0' }} />
      </div>

      <div style={{ ...PS.title, fontSize: '11px', color: '#333' }}>SURAT PEMUTUSAN HUBUNGAN KERJA (PHK)</div>
      <div style={PS.thinDivider} />
      
      <div style={PS.p()}>Dengan ini memberitahukan keputusan pemutusan hubungan kerja kepada:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Karyawan</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>NIK / ID Staff</span><span>:</span><span>{orDash(nikKaryawan as string)}</span>
        <span>Jabatan Terakhir</span><span>:</span><span>{orDash(jabatanKaryawan as string)}</span>
      </div>

      <div style={PS.p()}>Langkah PHK ini diambil oleh jajaran manajemen atas pertimbangan:</div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px', fontSize: '10px', backgroundColor: '#fafafa' }}>
        <strong>{orDash(alasanPHK as string)}</strong>
      </div>

      <div style={PS.dataGrid()}>
        <span>Tanggal Efektif PHK</span><span>:</span><span style={PS.bold}>{tanggalEfektifPHK ? formatTanggalIndonesia(tanggalEfektifPHK as string) : '—'}</span>
        <span>Hak Sisa / Pesangon</span><span>:</span><span style={PS.bold}>{uangPesangon ? `Rp ${Number(uangPesangon).toLocaleString('id-ID')}` : '—'}</span>
      </div>

      <div style={PS.p()}>Perusahaan mengucapkan terima kasih sebesar-besarnya atas segala kontribusi dan dedikasi yang telah diberikan selama menjadi bagian dari staf kerja kami. Surat pengalaman kerja formal akan dilampirkan terpisah.</div>
      
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

