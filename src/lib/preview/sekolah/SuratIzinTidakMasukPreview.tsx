import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratIzinTidakMasukPreview({ formData }: Props) {
  const { namaPembuat, hubungan, namaSiswa, kelasJurusan, namaInstitusi, tanggalMulai, tanggalSelesai, alasan, keterangan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  const isMultiDay = tanggalMulai !== tanggalSelesai;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>Bapak/Ibu Guru / Wali Kelas / Dosen</div>
        <div style={PS.bold}>{orDash(namaInstitusi as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Pemberitahuan Ketidakhadiran</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPembuat as string)}</span>
        <span>Hubungan</span><span>:</span><span>{orDash(hubungan as string)}</span>
      </div>
      <div style={PS.p()}>
        Dengan ini memberitahukan bahwa <strong>{orDash(namaSiswa as string)}</strong>
        {kelasJurusan ? ` (${kelasJurusan})` : ''} tidak dapat hadir pada:
      </div>
      <div style={PS.dataGrid()}>
        <span>Tanggal</span><span>:</span>
        <span>
          {tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'}
          {isMultiDay && tanggalSelesai ? ` s.d. ${formatTanggalIndonesia(tanggalSelesai as string)}` : ''}
        </span>
        <span>Alasan</span><span>:</span><span>{orDash(alasan as string)}</span>
      </div>
      {keterangan && <div style={PS.p()}>{keterangan as string}</div>}
      <div style={PS.p()}>Demikian surat pemberitahuan ini kami sampaikan. Atas perhatian dan pengertiannya, kami ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat kami,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPembuat as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}


