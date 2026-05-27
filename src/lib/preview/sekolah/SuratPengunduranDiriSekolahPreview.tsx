import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPengunduranDiriSekolahPreview({ formData }: Props) {
  const { namaPemohon, nimNis, kelasJurusan, namaInstitusi, tanggalEfektif, alasanMundur, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.right, marginBottom: '14px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>Bapak/Ibu Kepala Sekolah / Rektor</div>
        <div style={PS.bold}>{orDash(namaInstitusi as string)}</div>
        <div>di Tempat</div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <span style={PS.bold}>Perihal</span><span>:</span>
        <span>Pengunduran Diri dari Institusi Pendidikan</span>
      </div>
      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>Saya yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPemohon as string)}</span>
        {nimNis && <><span>NIM/NIS</span><span>:</span><span>{nimNis as string}</span></>}
        <span>Kelas/Prodi</span><span>:</span><span>{orDash(kelasJurusan as string)}</span>
      </div>
      <div style={PS.p()}>
        Dengan ini menyatakan dengan sesungguhnya bahwa saya mengundurkan diri dari <strong>{orDash(namaInstitusi as string)}</strong>
        {tanggalEfektif ? ` terhitung sejak ${formatTanggalIndonesia(tanggalEfektif as string)}` : ''}, dengan alasan:
      </div>
      <div style={{ ...PS.p(), paddingLeft: '16px' }}>{orDash(alasanMundur as string)}</div>
      <div style={PS.p()}>Demikian surat pengunduran diri ini saya buat dengan penuh kesadaran dan tanpa paksaan dari pihak manapun.</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Hormat saya,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemohon as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

