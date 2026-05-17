import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from './shared';

interface Props { formData: FormData; }

export default function SuratHibahPreview({ formData }: Props) {
  const {
    namaPemberiHibah, nikPemberi, alamatPemberi,
    namaPenerimaHibah, nikPenerima, alamatPenerima,
    objekHibah, nilaiTaksiran, kotaSurat, tanggalSurat,
    tandaTanganPemberi, tandaTanganPenerima,
  } = formData;

  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT HIBAH</div>
      <div style={PS.divider} />

      <div style={PS.p()}>
        Pada hari ini, <strong>{tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</strong>,{' '}
        bertempat di <strong>{orDash(kotaSurat as string)}</strong>, yang bertanda tangan di bawah ini:
      </div>

      <div style={PS.p('4px')}><strong>PEMBERI HIBAH (Pihak Pertama):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPemberiHibah as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPemberi as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPemberi as string)}</span>
      </div>

      <div style={PS.p('4px')}><strong>PENERIMA HIBAH (Pihak Kedua):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPenerimaHibah as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPenerima as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPenerima as string)}</span>
      </div>

      <div style={PS.thinDivider} />

      <div style={PS.p()}>
        Menyatakan bahwa Pihak Pertama dengan ini <strong>menghibahkan</strong> kepada Pihak Kedua, berupa:
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px', fontSize: '10px', background: '#fafafa' }}>
        {orDash(objekHibah as string, 'Objek hibah belum diisi')}
        {nilaiTaksiran && <div style={{ marginTop: '4px', color: '#666' }}>Nilai taksiran: <strong>Rp {nilaiTaksiran as string}</strong></div>}
      </div>

      <div style={PS.p()}>
        Hibah ini diberikan dengan <strong>sukarela</strong>, tanpa paksaan, dan tanpa imbalan apapun. Pihak Kedua menyatakan menerima hibah tersebut dengan penuh rasa terima kasih.
      </div>

      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemberi Hibah,</div>
          <SigImg src={tandaTanganPemberi as string | undefined} />
          <div style={PS.bold}>{orDash(namaPemberiHibah as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>Penerima Hibah,</div>
          <SigImg src={tandaTanganPenerima as string | undefined} />
          <div style={PS.bold}>{orDash(namaPenerimaHibah as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}
