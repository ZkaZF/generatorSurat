import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPermohonanMagangPreview({ formData }: Props) {
  const { namaMahasiswa, nim, jurusan, namaInstitusi, noHp, email, namaPerusahaan, divisiTujuan, tanggalMulai, tanggalSelesai, kemampuan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>HRD / Manajer SDM</div>
        <div style={PS.bold}>{orDash(namaPerusahaan as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Permohonan Magang / Internship — {orDash(divisiTujuan as string)}</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Saya yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaMahasiswa as string)}</span>
        {nim && <><span>NIM</span><span>:</span><span>{nim as string}</span></>}
        <span>Jurusan</span><span>:</span><span>{orDash(jurusan as string)}</span>
        <span>Institusi</span><span>:</span><span>{orDash(namaInstitusi as string)}</span>
        <span>No. HP / Email</span><span>:</span><span>{orDash(noHp as string)} / {orDash(email as string)}</span>
      </div>
      <div style={PS.p()}>
        Bermaksud mengajukan permohonan magang pada divisi <strong>{orDash(divisiTujuan as string)}</strong> di <strong>{orDash(namaPerusahaan as string)}</strong>,
        mulai <strong>{tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'}</strong> s.d.{' '}
        <strong>{tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '___'}</strong>.
      </div>
      {kemampuan && <div style={PS.p()}>{kemampuan as string}</div>}
      <div style={PS.p()}>Besar harapan saya untuk dapat diterima dan berkontribusi. Atas perhatiannya, saya ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat saya,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaMahasiswa as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

