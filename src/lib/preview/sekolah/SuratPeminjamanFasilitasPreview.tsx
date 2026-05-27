import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPeminjamanFasilitasPreview({ formData }: Props) {
  const { namaOrganisasi, namaKetua, kontakPJ, namaInstitusi, fasilitasDipinjam, namaKegiatan, tanggalPeminjaman, waktuPeminjaman, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>Bapak/Ibu Kepala Sekolah / Rektor / Wakil Sarana Prasarana</div>
        <div style={PS.bold}>{orDash(namaInstitusi as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Permohonan Peminjaman Fasilitas</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Kami yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Organisasi</span><span>:</span><span style={PS.bold}>{orDash(namaOrganisasi as string)}</span>
        <span>Ketua / PJ</span><span>:</span><span>{orDash(namaKetua as string)}</span>
        {kontakPJ && <><span>No. HP</span><span>:</span><span>{kontakPJ as string}</span></>}
      </div>
      <div style={PS.p()}>Bermaksud mengajukan permohonan peminjaman fasilitas untuk kegiatan berikut:</div>
      <div style={PS.dataGrid('120px')}>
        <span>Nama Kegiatan</span><span>:</span><span style={PS.bold}>{orDash(namaKegiatan as string)}</span>
        <span>Fasilitas</span><span>:</span><span>{orDash(fasilitasDipinjam as string)}</span>
        <span>Tanggal</span><span>:</span><span>{tanggalPeminjaman ? formatTanggalIndonesia(tanggalPeminjaman as string) : '___'}</span>
        <span>Waktu</span><span>:</span><span>{orDash(waktuPeminjaman as string)}</span>
      </div>
      <div style={PS.p()}>Kami berkomitmen untuk menjaga dan merawat fasilitas yang dipinjam serta mengembalikannya dalam kondisi baik setelah kegiatan selesai.</div>
      <div style={PS.p()}>Demikian permohonan ini kami sampaikan. Atas perhatian dan izin yang diberikan, kami ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat kami,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaKetua as string)}</div><div style={{ fontSize: '8.5px' }}>{orDash(namaOrganisasi as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

