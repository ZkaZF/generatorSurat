import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPengantarKtpKkPreview({ formData }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, jenisPermohonan, alamat, rtRw, kotaSurat, tanggalSurat, namaKetuaRT, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PENGANTAR RT/RW (KTP & KK BARU)</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Menerangkan bahwa warga yang bertanda tangan di bawah ini mengajukan permohonan penerbitan KTP / KK baru:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK (Jika ada)</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Adapun jenis permohonan yang diajukan adalah:</div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px', fontSize: '10px', backgroundColor: '#fafafa' }}>
        <strong>{orDash(jenisPermohonan as string)}</strong>
      </div>
      <div style={PS.p()}>Yang bersangkutan adalah benar warga berdomisili tetap di wilayah {orDash(rtRw as string || 'RT / RW')} kami. Surat pengantar ini dibuat sebagai syarat pengantar utama ke tingkat kelurahan dan kantor Dukcapil setempat.</div>
      <div style={PS.p()}>Demikian surat pengantar ini diberikan untuk dapat dipergunakan sebagaimana mestinya.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemohon,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>Ketua RT / RW</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaKetuaRT as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

