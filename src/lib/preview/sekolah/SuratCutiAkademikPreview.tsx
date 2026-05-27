import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratCutiAkademikPreview({ formData }: Props) {
  const { namaMahasiswa, nim, jurusan, semester, namaKampus, semesterCuti, alasanCuti, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>Bapak/Ibu Rektor / Wakil Rektor Bidang Akademik</div>
        <div style={PS.bold}>{orDash(namaKampus as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Permohonan Cuti Akademik</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Saya yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaMahasiswa as string)}</span>
        {nim && <><span>NIM</span><span>:</span><span>{nim as string}</span></>}
        <span>Program Studi</span><span>:</span><span>{orDash(jurusan as string)}</span>
        {semester && <><span>Semester</span><span>:</span><span>{semester as string}</span></>}
      </div>
      <div style={PS.p()}>
        Dengan ini mengajukan permohonan <strong>cuti akademik</strong> pada <strong>{orDash(semesterCuti as string)}</strong> dengan alasan sebagai berikut:
      </div>
      <div style={{ ...PS.p(), paddingLeft: '16px' }}>{orDash(alasanCuti as string)}</div>
      <div style={PS.p()}>Demikian permohonan ini saya sampaikan. Besar harapan saya agar permohonan ini dapat dikabulkan. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat saya,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaMahasiswa as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

