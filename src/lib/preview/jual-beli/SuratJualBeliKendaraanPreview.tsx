import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratJualBeliKendaraanPreview({ formData }: Props) {
  const { namaPenjual, nikPenjual, namaPembeli, nikPembeli, jenisKendaraan, merkTipe, tahunPembuatan, nomorPolisi, nomorRangka, nomorMesin, warna, hargaKendaraan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN JUAL BELI KENDARAAN</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Kami yang bertanda tangan di bawah ini menerangkan transaksi jual beli kendaraan:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Penjual)</span><span>:</span><span style={PS.bold}>{orDash(namaPenjual as string)}</span>
        <span>NIK Penjual</span><span>:</span><span>{orDash(nikPenjual as string)}</span>
        <span>PIHAK II (Pembeli)</span><span>:</span><span style={PS.bold}>{orDash(namaPembeli as string)}</span>
        <span>NIK Pembeli</span><span>:</span><span>{orDash(nikPembeli as string)}</span>
      </div>

      <div style={PS.p()}>Menyepakati transaksi jual beli 1 (satu) unit <strong>{orDash(jenisKendaraan as string || 'Kendaraan')}</strong> dengan spesifikasi:</div>
      <div style={PS.dataGrid()}>
        <span>Merk / Tipe</span><span>:</span><span>{orDash(merkTipe as string)}</span>
        <span>Tahun Pembuatan</span><span>:</span><span>{tahunPembuatan || '—'}</span>
        <span>Nomor Polisi (Plat)</span><span>:</span><span style={PS.bold}>{orDash(nomorPolisi as string)}</span>
        <span>Nomor Rangka</span><span>:</span><span>{orDash(nomorRangka as string)}</span>
        <span>Nomor Mesin</span><span>:</span><span>{orDash(nomorMesin as string)}</span>
        <span>Warna Fisik</span><span>:</span><span>{orDash(warna as string)}</span>
        <span>Harga Penjualan</span><span>:</span><span style={PS.bold}>{hargaKendaraan ? `Rp ${Number(hargaKendaraan).toLocaleString('id-ID')}` : '—'}</span>
      </div>

      <div style={PS.p()}>Penjual menjamin kendaraan tersebut adalah hak milik sah pribadi, bebas dari tuntutan hukum, serta tidak dalam kondisi digadaikan atau disita. Surat-surat asli (BPKB dan STNK) diserahkan penuh saat pelunasan.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Pembeli),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPembeli as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Penjual),</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTanganPenjual as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenjual as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


