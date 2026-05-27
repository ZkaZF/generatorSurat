import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratKeteranganAktifPreview({ formData }: Props) {
  const { namaSiswa, nimNis, kelasJurusan, namaInstitusi, keperluan, ditujukanKepada, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div style={PS.bold}>{orDash(ditujukanKepada as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Permohonan Surat Keterangan Aktif {kelasJurusan ? (kelasJurusan as string).includes('S1') || (kelasJurusan as string).includes('D') ? 'Kuliah' : 'Sekolah' : 'Sekolah/Kuliah'}</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Saya yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaSiswa as string)}</span>
        {nimNis && <><span>NIM/NIS</span><span>:</span><span>{nimNis as string}</span></>}
        <span>Kelas/Prodi</span><span>:</span><span>{orDash(kelasJurusan as string)}</span>
        <span>Institusi</span><span>:</span><span>{orDash(namaInstitusi as string)}</span>
      </div>
      <div style={PS.p()}>
        Dengan ini mengajukan permohonan penerbitan <strong>Surat Keterangan Aktif Sekolah/Kuliah</strong> untuk keperluan <strong>{orDash(keperluan as string)}</strong>.
      </div>
      <div style={PS.p()}>Demikian permohonan ini saya sampaikan. Atas perhatian dan bantuan Bapak/Ibu, saya ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat saya,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaSiswa as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

