import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratKuasaBansosPreview({ formData }: Props) {
  const { namaPemberi, nikPemberi, alamatPemberi, namaPenerima, nikPenerima, alamatPenerima, namaBansosDokumen, kotaSurat, tanggalSurat, tandaTangan, tandaTanganPenerima } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KUASA</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini (selaku Pemberi Kuasa):</div>
      <div style={PS.dataGrid()}>
        <span>Nama Pemberi Kuasa</span><span>:</span><span style={PS.bold}>{orDash(namaPemberi as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPemberi as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPemberi as string)}</span>
      </div>
      <div style={PS.p()}>Memberikan kuasa sepenuhnya kepada (selaku Penerima Kuasa):</div>
      <div style={PS.dataGrid()}>
        <span>Nama Penerima Kuasa</span><span>:</span><span style={PS.bold}>{orDash(namaPenerima as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPenerima as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPenerima as string)}</span>
      </div>
      <div style={PS.p()}>Untuk bertindak atas nama Pemberi Kuasa dalam melakukan **pengambilan / pencairan**: <strong style={{ textDecoration: 'underline' }}>{orDash(namaBansosDokumen as string)}</strong>.</div>
      <div style={PS.p()}>Penerima Kuasa berhak melakukan segala tindakan administrasi yang sah guna keperluan tersebut. Surat kuasa ini dibuat karena Pemberi Kuasa berhalangan hadir secara langsung (sakit / lansia / kesibukan mendesak).</div>
      <div style={PS.p()}>Demikian surat kuasa ini dibuat dengan sebenarnya agar dapat digunakan sebagaimana mestinya.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Penerima Kuasa,</div>
          <SigImg src={tandaTanganPenerima as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenerima as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>Pemberi Kuasa,</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemberi as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

