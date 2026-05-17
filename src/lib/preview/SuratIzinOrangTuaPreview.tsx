import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from './shared';

interface Props { formData: FormData; }

export default function SuratIzinOrangTuaPreview({ formData }: Props) {
  const { namaOrangTua, hubungan, noHp, namaAnak, namaInstitusi, kegiatan, tujuanKegiatan, tanggalMulai, tanggalSelesai, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>Pimpinan / Panitia Kegiatan</div>
        <div style={PS.bold}>{orDash(namaInstitusi as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Izin Mengikuti Kegiatan</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaOrangTua as string)}</span>
        <span>Hubungan</span><span>:</span><span>{orDash(hubungan as string)} dari {orDash(namaAnak as string)}</span>
        {noHp && <><span>No. HP</span><span>:</span><span>{noHp as string}</span></>}
      </div>
      <div style={PS.p()}>Dengan ini memberikan <strong>izin</strong> kepada anak saya, <strong>{orDash(namaAnak as string)}</strong>, untuk mengikuti kegiatan:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Kegiatan</span><span>:</span><span style={PS.bold}>{orDash(kegiatan as string)}</span>
        <span>Tempat</span><span>:</span><span>{orDash(tujuanKegiatan as string)}</span>
        <span>Tanggal</span><span>:</span>
        <span>{tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'} s.d. {tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '___'}</span>
      </div>
      <div style={PS.p()}>Demikian surat izin ini saya buat dengan penuh kesadaran. Atas perhatiannya, saya ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Orang Tua / Wali,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaOrangTua as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}
