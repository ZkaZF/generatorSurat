import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPermohonanRekomendasiPreview({ formData }: Props) {
  const { namaPemohon, nim, jurusan, namaInstitusi, namaGuruDosen, tujuanRekomendasi, alasan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div style={PS.bold}>{orDash(namaGuruDosen as string)}</div>
        <div>{orDash(namaInstitusi as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Permohonan Surat Rekomendasi</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Saya yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPemohon as string)}</span>
        {nim && <><span>NIM/NIS</span><span>:</span><span>{nim as string}</span></>}
        <span>Prodi/Jurusan</span><span>:</span><span>{orDash(jurusan as string)}</span>
        <span>Institusi</span><span>:</span><span>{orDash(namaInstitusi as string)}</span>
      </div>
      <div style={PS.p()}>
        Dengan hormat memohon kesediaan Bapak/Ibu <strong>{orDash(namaGuruDosen as string)}</strong> untuk memberikan <strong>surat rekomendasi</strong> guna keperluan <strong>{orDash(tujuanRekomendasi as string)}</strong>.
      </div>
      {alasan && <div style={PS.p()}>{alasan as string}</div>}
      <div style={PS.p()}>Demikian permohonan ini saya sampaikan. Atas kesediaan dan kebaikan Bapak/Ibu, saya ucapkan terima kasih yang sebesar-besarnya.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat saya,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemohon as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}


