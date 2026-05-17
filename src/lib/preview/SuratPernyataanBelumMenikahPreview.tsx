import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from './shared';

interface Props { formData: FormData; }

export default function SuratPernyataanBelumMenikahPreview({ formData }: Props) {
  const { nama, nik, jenisKelamin, tempatLahir, tanggalLahir, pekerjaan, agama, alamat, keperluan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERNYATAAN BELUM MENIKAH</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Jenis Kelamin</span><span>:</span><span>{orDash(jenisKelamin as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Agama</span><span>:</span><span>{orDash(agama as string)}</span>
        <span>Pekerjaan</span><span>:</span><span>{orDash(pekerjaan as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Dengan ini menyatakan dengan sesungguhnya bahwa saya <strong>BELUM MENIKAH</strong> sampai dengan surat pernyataan ini dibuat.</div>
      {keperluan && <div style={PS.p()}>Surat pernyataan ini dibuat untuk keperluan: <strong>{keperluan as string}</strong>.</div>}
      <div style={PS.p()}>Demikian surat pernyataan ini saya buat dengan sebenar-benarnya. Apabila pernyataan ini tidak benar, saya bersedia menerima segala konsekuensi hukum yang berlaku.</div>
      <div style={{ ...PS.right, marginBottom: '4px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Yang Menyatakan,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}
