import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratJobOfferPreview({ formData }: Props) {
  const { namaPerusahaan, namaHRD, namaKandidat, posisiTawaran, gajiTawaran, tanggalMulaiOffer, batasWaktuRespon, kotaSurat, tanggalSurat } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.center, marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>{orDash(namaPerusahaan as string).toUpperCase()}</div>
        <div style={{ fontSize: '8px', color: '#666' }}>DEPARTEMEN REKRUTMEN & SDM</div>
        <div style={{ width: '120px', borderBottom: '1px solid #000', margin: '4px auto 0' }} />
      </div>

      <div style={PS.p()}>Kepada Yth,<br /><strong>{orDash(namaKandidat as string)}</strong><br />Di tempat</div>
      
      <div style={PS.p()}>Dengan hormat,<br />Berdasarkan hasil tahapan seleksi rekrutmen yang telah Anda lalui, kami dengan bangga menawarkan posisi bergabung di <strong>{orDash(namaPerusahaan as string)}</strong> dengan spesifikasi penawaran:</div>
      
      <div style={PS.dataGrid()}>
        <span>Posisi Pekerjaan</span><span>:</span><span style={PS.bold}>{orDash(posisiTawaran as string)}</span>
        <span>Gaji Pokok / Bulan</span><span>:</span><span style={PS.bold}>{gajiTawaran ? `Rp ${Number(gajiTawaran).toLocaleString('id-ID')}` : '—'}</span>
        <span>Tanggal Mulai Kerja</span><span>:</span><span>{tanggalMulaiOffer ? formatTanggalIndonesia(tanggalMulaiOffer as string) : '—'}</span>
        <span>Batas Konfirmasi</span><span>:</span><span>{batasWaktuRespon ? formatTanggalIndonesia(batasWaktuRespon as string) : '—'}</span>
      </div>

      <div style={PS.p()}>Kami meyakini bahwa bakat, keahlian, serta integritas diri Anda akan membawa kontribusi berharga bagi kemajuan tim kami. Silakan memberikan respon persetujuan atas penawaran ini sebelum batas konfirmasi yang ditentukan.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Disetujui oleh,<br />Calon Karyawan</div>
          <div style={PS.sigLineDash} />
          <div>{orDash(namaKandidat as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>Hormat kami,<br />{orDash(namaPerusahaan as string)}</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaHRD as string)}</div>
          <div style={{ fontSize: '8px', color: '#666' }}>HRD / Recruiter</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

