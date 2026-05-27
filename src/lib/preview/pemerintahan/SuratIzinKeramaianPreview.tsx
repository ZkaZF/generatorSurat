import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratIzinKeramaianPreview({ formData }: Props) {
  const { nama, nik, acara, tanggalAcara, waktuAcara, tempatAcara, rtRw, kotaSurat, tanggalSurat, namaKetuaRT, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PENGANTAR RT/RW (IZIN KERAMAIAN)</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini menerangkan rencana penyelenggaraan acara keramaian oleh warga:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Penanggung Jawab</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Nama Acara</span><span>:</span><span style={PS.bold}>{orDash(acara as string)}</span>
        <span>Tanggal Pelaksanaan</span><span>:</span><span>{tanggalAcara ? formatTanggalIndonesia(tanggalAcara as string) : '—'}</span>
        <span>Waktu Acara</span><span>:</span><span>{orDash(waktuAcara as string)}</span>
        <span>Tempat / Lokasi</span><span>:</span><span>{orDash(tempatAcara as string)}</span>
      </div>
      <div style={PS.p()}>Pihak pengurus {orDash(rtRw as string || 'RT / RW')} setempat pada dasarnya **tidak keberatan** atas rencana acara tersebut selama penyelenggara bersedia menjaga ketertiban, kebersihan, serta keamanan lingkungan sekitar.</div>
      <div style={PS.p()}>Surat pengantar ini dibuat sebagai prasyarat permohonan izin keramaian resmi ke Kepolisian Sektor (Polsek) setempat.</div>
      <div style={PS.p()}>Demikian pengantar ini dibuat untuk dipergunakan sebagaimana mestinya.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Penyelenggara,</div>
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

