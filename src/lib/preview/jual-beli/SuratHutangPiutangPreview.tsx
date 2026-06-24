import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratHutangPiutangPreview({ formData }: Props) {
  const {
    namaPemberiPinjaman, nikPemberi, namaPeminjam, nikPeminjam, alamatPeminjam,
    jumlahPinjaman, bungaPerBulan, lamaPinjaman, caraPembayaran, jaminan,
    kotaSurat, tanggalSurat, tandaTanganPemberi, tandaTanganPenerima,
  } = formData;

  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN HUTANG PIUTANG</div>
      <div style={PS.divider} />

      <div style={PS.p()}>
        Perjanjian ini dibuat di <strong>{orDash(kotaSurat as string)}</strong> pada{' '}
        <strong>{tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</strong>, antara:
      </div>

      <div style={PS.p('4px')}><strong>PIHAK PERTAMA (Pemberi Pinjaman / Kreditur):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPemberiPinjaman as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPemberi as string)}</span>
      </div>

      <div style={PS.p('4px')}><strong>PIHAK KEDUA (Peminjam / Debitur):</strong></div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaPeminjam as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPeminjam as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPeminjam as string)}</span>
      </div>

      <div style={PS.thinDivider} />

      <div style={PS.p('4px')}><strong>Pasal 1 — Jumlah Pinjaman</strong></div>
      <div style={PS.p()}>
        Pihak Pertama meminjamkan kepada Pihak Kedua sejumlah <strong>Rp {orDash(jumlahPinjaman as string)}</strong>{' '}
        dengan jangka waktu <strong>{orDash(lamaPinjaman as string)}</strong>.
      </div>

      <div style={PS.p('4px')}><strong>Pasal 2 — Bunga & Cara Pembayaran</strong></div>
      <div style={PS.p()}>
        Bunga: <strong>{bungaPerBulan ? `${bungaPerBulan}% per bulan` : 'Tanpa bunga'}</strong>.{' '}
        Pembayaran dilakukan secara <strong>{orDash(caraPembayaran as string)}</strong>.
        {jaminan && <> Jaminan: <strong>{jaminan as string}</strong>.</>}
      </div>

      <div style={PS.p('4px')}><strong>Pasal 3 — Wanprestasi</strong></div>
      <div style={{ ...PS.p(), paddingLeft: '8px' }}>
        Apabila Pihak Kedua tidak memenuhi kewajiban sesuai perjanjian ini, Pihak Pertama berhak menagih seluruh sisa hutang beserta denda yang telah disepakati secara lisan.
      </div>

      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>Pemberi Pinjaman,</div>
          <SigImg src={tandaTanganPemberi as string | undefined} />
          <div style={PS.bold}>{orDash(namaPemberiPinjaman as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>Peminjam,</div>
          <SigImg src={tandaTanganPenerima as string | undefined} />
          <div style={PS.bold}>{orDash(namaPeminjam as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


