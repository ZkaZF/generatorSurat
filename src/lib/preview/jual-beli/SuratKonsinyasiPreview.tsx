import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratKonsinyasiPreview({ formData }: Props) {
  const { namaPemilikBarang, namaToko, namaPenanggungJawab, namaProduk, hargaJualRekomendasi, persentaseBagiHasil, periodeKonsinyasi, sistemPembayaran, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN KONSINYASI (TITIP JUAL)</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Surat perjanjian kemitraan dagang konsinyasi ini disepakati oleh:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Consignor)</span><span>:</span><span style={PS.bold}>{orDash(namaPemilikBarang as string)}</span>
        <span>PIHAK II (Consignee)</span><span>:</span><span style={PS.bold}>{orDash(namaToko as string)}</span>
        <span>Penanggung Jawab</span><span>:</span><span>{orDash(namaPenanggungJawab as string)}</span>
      </div>

      <div style={PS.p()}>Kedua belah pihak bersepakat mengadakan kerja sama titip jual produk barang dagangan dengan rincian:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Produk / Barang</span><span>:</span><span>{orDash(namaProduk as string)}</span>
        <span>Harga Konsumen (Eceran)</span><span>:</span><span style={PS.bold}>{hargaJualRekomendasi ? `Rp ${Number(hargaJualRekomendasi).toLocaleString('id-ID')}` : '—'}</span>
        <span>Komisi Bagi Hasil Toko</span><span>:</span><span>{persentaseBagiHasil ? `${persentaseBagiHasil}% dari omset penjualan` : '—'}</span>
        <span>Masa Kontrak / Uji Coba</span><span>:</span><span>{periodeKonsinyasi ? `${periodeKonsinyasi} hari` : '—'}</span>
        <span>Periode Rekonsiliasi</span><span>:</span><span>{orDash(sistemPembayaran as string)}</span>
      </div>

      <div style={PS.p()}>Pihak Kedua berkewajiban merawat fisik barang titipan dengan baik dan melaporkan rekapitulasi penjualan secara jujur sesuai jadwal rekonsiliasi. Retur produk sisa yang tidak terjual sepenuhnya ditanggung Pihak Pertama.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Consignee),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenanggungJawab as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Consignor),</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemilikBarang as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

