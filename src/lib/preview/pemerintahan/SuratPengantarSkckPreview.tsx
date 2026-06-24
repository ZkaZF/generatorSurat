import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPengantarSKCKPreview({ formData }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, agama, pekerjaan, alamat, keperluan, rtRw, kotaSurat, tanggalSurat, namaKetuaRT, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PENGANTAR RT/RW (PEMBUATAN SKCK)</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini Pengurus {orDash(rtRw as string || 'RT / RW')}, menerangkan bahwa:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Tempat, Tgl Lahir</span><span>:</span>
        <span>{tempatLahir ? `${tempatLahir}, ${tanggalLahir ? formatTanggalIndonesia(tanggalLahir as string) : '—'}` : '—'}</span>
        <span>Agama</span><span>:</span><span>{orDash(agama as string)}</span>
        <span>Pekerjaan</span><span>:</span><span>{orDash(pekerjaan as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamat as string)}</span>
      </div>
      <div style={PS.p()}>Adalah benar warga kami yang berkelakuan baik, tidak sedang tersangkut perkara kriminalitas, dan terdaftar dalam wilayah kepengurusan kami.</div>
      <div style={PS.p()}>Surat pengantar ini dibuat untuk memenuhi syarat pengajuan **Surat Keterangan Catatan Kepolisian (SKCK)** dengan keperluan: <strong>{orDash(keperluan as string)}</strong>.</div>
      <div style={PS.p()}>Demikian surat pengantar ini dibuat agar pihak yang berwenang dapat memberikan bantuan dan fasilitas pembuatan SKCK sebagaimana mestinya.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemohon,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div style={{ margin: '2px 0' }}>Ketua RT / RW</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaKetuaRT as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


