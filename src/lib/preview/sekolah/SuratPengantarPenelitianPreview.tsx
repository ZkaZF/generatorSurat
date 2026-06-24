import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPengantarPenelitianPreview({ formData }: Props) {
  const { namaMahasiswa, nim, jurusan, namaKampus, judulPenelitian, instansiTujuan, jenisKegiatan, tanggalMulai, tanggalSelesai, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>Pimpinan / Manajer HRD</div>
        <div style={PS.bold}>{orDash(instansiTujuan as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Permohonan Izin Penelitian / Pengambilan Data</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Saya yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaMahasiswa as string)}</span>
        {nim && <><span>NIM</span><span>:</span><span>{nim as string}</span></>}
        <span>Program Studi</span><span>:</span><span>{orDash(jurusan as string)}</span>
        <span>Perguruan Tinggi</span><span>:</span><span>{orDash(namaKampus as string)}</span>
      </div>
      <div style={PS.p()}>
        Dengan ini mengajukan permohonan izin untuk melakukan <strong>penelitian/pengambilan data</strong> di instansi yang Bapak/Ibu pimpin, dalam rangka penyusunan skripsi/tugas akhir dengan judul:
      </div>
      <div style={{ ...PS.p(), paddingLeft: '16px', fontStyle: 'italic' }}>{orDash(judulPenelitian as string)}</div>
      <div style={PS.dataGrid('120px')}>
        <span>Jenis Kegiatan</span><span>:</span><span>{orDash(jenisKegiatan as string)}</span>
        <span>Waktu Pelaksanaan</span><span>:</span>
        <span>{tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'} s.d. {tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '___'}</span>
      </div>
      <div style={PS.p()}>Demikian permohonan ini saya sampaikan. Atas perhatian dan izin yang diberikan, saya ucapkan terima kasih.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat saya,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaMahasiswa as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}


