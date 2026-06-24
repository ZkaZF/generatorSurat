import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPerjanjianSewaPreview({ formData }: Props) {
  const {
    namaPemilik, nikPemilik, alamatPemilik, namaPenyewa, nikPenyewa, alamatPenyewa,
    alamatProperti, jenisProperti, hargaSewa, periodeSewa, tanggalMulaiSewa, tanggalAkhirSewa,
    uangDeposit, kotaSurat, tanggalSurat, tandaTanganPemberi, tandaTanganPenerima,
  } = formData;

  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN SEWA MENYEWA</div>
      <div style={PS.divider} />

      <div style={PS.p()}>
        Perjanjian ini dibuat di <strong>{orDash(kotaSurat as string)}</strong> pada{' '}
        <strong>{tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</strong>, antara:
      </div>

      <div style={PS.p('4px')}><strong>PIHAK PERTAMA (Pemilik):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPemilik as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPemilik as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPemilik as string)}</span>
      </div>

      <div style={PS.p('4px')}><strong>PIHAK KEDUA (Penyewa):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPenyewa as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPenyewa as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPenyewa as string)}</span>
      </div>

      <div style={PS.thinDivider} />
      <div style={PS.p('4px')}><strong>Pasal 1 — Objek Sewa</strong></div>
      <div style={PS.p()}>
        Pihak Pertama menyewakan kepada Pihak Kedua sebuah <strong>{orDash(jenisProperti as string)}</strong>{' '}
        yang berlokasi di: <strong>{orDash(alamatProperti as string)}</strong>.
      </div>

      <div style={PS.p('4px')}><strong>Pasal 2 — Masa & Harga Sewa</strong></div>
      <div style={PS.p()}>
        Masa sewa: <strong>{tanggalMulaiSewa ? formatTanggalIndonesia(tanggalMulaiSewa as string) : '___'}</strong> s.d.{' '}
        <strong>{tanggalAkhirSewa ? formatTanggalIndonesia(tanggalAkhirSewa as string) : '___'}</strong>.{' '}
        Harga sewa: <strong>Rp {orDash(hargaSewa as string)}</strong> ({orDash(periodeSewa as string)}).
        {uangDeposit && <> Uang deposit: <strong>Rp {uangDeposit as string}</strong>.</>}
      </div>

      <div style={PS.p('4px')}><strong>Pasal 3 — Kewajiban & Larangan</strong></div>
      <div style={{ ...PS.p(), paddingLeft: '8px' }}>
        Pihak Kedua wajib menjaga kondisi properti dan dilarang menyewakan kembali tanpa izin tertulis. Pembayaran dilakukan sesuai jadwal yang disepakati bersama.
      </div>

      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pihak Pertama,</div>
          <SigImg src={tandaTanganPemberi as string | undefined} />
          <div style={PS.bold}>{orDash(namaPemilik as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>Pihak Kedua,</div>
          <SigImg src={tandaTanganPenerima as string | undefined} />
          <div style={PS.bold}>{orDash(namaPenyewa as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


