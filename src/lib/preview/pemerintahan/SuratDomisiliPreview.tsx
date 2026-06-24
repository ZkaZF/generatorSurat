import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratDomisiliPreview({ formData }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, pekerjaan, alamatKTP, alamatDomisili, rtRw, kelurahan, keperluan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERNYATAAN DOMISILI</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Pekerjaan</span><span>:</span><span>{orDash(pekerjaan as string)}</span>
        <span>Alamat KTP</span><span>:</span><span>{orDash(alamatKTP as string)}</span>
      </div>
      <div style={PS.p()}>Menyatakan dengan sesungguhnya bahwa saat ini saya <strong>berdomisili</strong> di:</div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px', fontSize: '10px' }}>
        <strong>{orDash(alamatDomisili as string)}</strong>
        {rtRw && <div style={{ marginTop: '2px' }}>{rtRw as string}{kelurahan ? `, ${kelurahan}` : ''}</div>}
      </div>
      {keperluan && <div style={PS.p()}>Surat ini dibuat untuk keperluan: <strong>{keperluan as string}</strong>.</div>}
      <div style={PS.p()}>Demikian surat pernyataan domisili ini saya buat dengan sebenar-benarnya untuk dipergunakan sebagaimana mestinya.</div>
      <div style={{ ...PS.right, marginBottom: '4px' }}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Yang Menyatakan,</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}


