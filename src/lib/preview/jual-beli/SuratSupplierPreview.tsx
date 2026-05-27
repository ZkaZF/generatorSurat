import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratSupplierPreview({ formData }: Props) {
  const { namaSupplier, namaPembeliBisnis, jenisBahanBaku, hargaPerSatuan, satuanBarang, kuantitasMinimal, periodeKontrak, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KONTRAK PASOKAN BARANG (SUPPLIER)</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Kerja sama penyuplaian bahan baku/komoditas bisnis disepakati oleh:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Supplier)</span><span>:</span><span style={PS.bold}>{orDash(namaSupplier as string)}</span>
        <span>PIHAK II (Pembeli)</span><span>:</span><span style={PS.bold}>{orDash(namaPembeliBisnis as string)}</span>
      </div>

      <div style={PS.p()}>Klausul harga, kuantitas pasokan, serta durasi kerja sama diatur sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Bahan Baku / Komoditas</span><span>:</span><span>{orDash(jenisBahanBaku as string)}</span>
        <span>Harga Per Satuan</span><span>:</span><span style={PS.bold}>{hargaPerSatuan ? `Rp ${Number(hargaPerSatuan).toLocaleString('id-ID')} / ${satuanBarang || 'unit'}` : '—'}</span>
        <span>Minimal Pasok / Bulan</span><span>:</span><span>{kuantitasMinimal ? `${kuantitasMinimal} ${satuanBarang || 'unit'}` : '—'}</span>
        <span>Durasi Kontrak</span><span>:</span><span>{periodeKontrak ? `${periodeKontrak} bulan (harga mengikat)` : '—'}</span>
      </div>

      <div style={PS.p()}>Pihak I menjamin kualitas bahan baku konsisten sesuai sampel standar awal. Pihak II berkewajiban melakukan pembayaran penuh atas nota tagihan maksimal 7 hari setelah barang diterima secara aman.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Pembeli),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPembeliBisnis as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Supplier),</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaSupplier as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

