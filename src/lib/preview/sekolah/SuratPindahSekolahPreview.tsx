import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPindahSekolahPreview({ formData }: Props) {
  const { namaOrangTua, namaAnak, kelasAnak, namaSekolahAsal, namaSekolahTujuan, alasanPindah, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>Bapak/Ibu Kepala Sekolah</div>
        <div style={PS.bold}>{orDash(namaSekolahAsal as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Permohonan Pindah Sekolah (Mutasi)</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaOrangTua as string)}</span>
        <span>Orang Tua / Wali dari</span><span>:</span><span style={PS.bold}>{orDash(namaAnak as string)}</span>
        {kelasAnak && <><span>Kelas</span><span>:</span><span>{kelasAnak as string}</span></>}
      </div>
      <div style={PS.p()}>
        Dengan ini mengajukan permohonan <strong>pindah sekolah (mutasi)</strong> anak kami dari <strong>{orDash(namaSekolahAsal as string)}</strong> ke <strong>{orDash(namaSekolahTujuan as string)}</strong> dengan alasan sebagai berikut:
      </div>
      <div style={{ ...PS.p(), paddingLeft: '16px' }}>{orDash(alasanPindah as string)}</div>
      <div style={PS.p()}>Demikian permohonan ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat kami,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaOrangTua as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

