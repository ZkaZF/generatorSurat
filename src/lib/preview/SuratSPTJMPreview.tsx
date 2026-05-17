import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from './shared';

interface Props { formData: FormData; }

export default function SuratSPTJMPreview({ formData }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, pekerjaan, alamat, pernyataan, keperluan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK</div>
      <div style={{ ...PS.center, fontSize: '9px', marginBottom: '4px' }}>(SPTJM)</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Pekerjaan</span><span>:</span><span>{orDash(pekerjaan as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Dengan ini menyatakan dengan penuh tanggung jawab bahwa:</div>
      <div style={{ border: '1px solid #333', borderRadius: '3px', padding: '10px', marginBottom: '10px', fontSize: '10px', lineHeight: 1.8 }}>
        {orDash(pernyataan as string, 'Isi pernyataan belum dimasukkan.')}
      </div>
      {keperluan && <div style={PS.p()}>Keperluan: <strong>{keperluan as string}</strong>.</div>}
      <div style={PS.p()}>Demikian pernyataan ini saya buat dengan penuh kesadaran dan rasa tanggung jawab. Apabila dikemudian hari pernyataan ini tidak benar, saya siap menerima sanksi sesuai ketentuan peraturan perundang-undangan yang berlaku.</div>
      <div style={{ ...PS.right, marginBottom: '4px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Yang Menyatakan,</div><div style={{ fontSize: '8px', color: '#666' }}>(di atas materai)</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}
