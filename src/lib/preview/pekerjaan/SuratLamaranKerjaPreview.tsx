import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratLamaranKerjaPreview({ formData }: Props) {
  const {
    namaPelamar, tempatLahir, tanggalLahir, alamat, noHp, email,
    pendidikanTerakhir, jurusan, namaPerusahaan, posisiDilamar,
    sumberInfo, motivasi, kotaSurat, tanggalSurat, tandaTangan,
  } = formData;

  return (
    <div style={PS.page}>
      <div style={PS.right}>
        {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}
      </div>

      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>HRD / Manajer Rekrutmen</div>
        <div style={PS.bold}>{orDash(namaPerusahaan as string)}</div>
        <div>di Tempat</div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Lamaran Pekerjaan sebagai {orDash(posisiDilamar as string)}</span>
      </div>

      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>
        Saya yang bertanda tangan di bawah ini mengajukan lamaran pekerjaan untuk posisi{' '}
        <strong>{orDash(posisiDilamar as string)}</strong> yang saya ketahui melalui{' '}
        {orDash(sumberInfo as string, 'informasi yang tersedia')}.
      </div>

      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(namaPelamar as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Pendidikan</span><span>:</span><span>{orDash(pendidikanTerakhir as string)}{jurusan ? ` — ${jurusan}` : ''}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
        <span>No. HP / Email</span><span>:</span><span>{orDash(noHp as string)} / {orDash(email as string)}</span>
      </div>

      {motivasi && (
        <div style={PS.p()}>
          <strong>Tentang Saya:</strong> {motivasi as string}
        </div>
      )}

      <div style={PS.p()}>
        Bersama surat ini, saya lampirkan dokumen pendukung. Saya berharap mendapat kesempatan untuk berdiskusi lebih lanjut. Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.
      </div>

      <div style={PS.sigBlock}>
        <div style={PS.sigBox}>
          <div>Hormat saya,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPelamar as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

