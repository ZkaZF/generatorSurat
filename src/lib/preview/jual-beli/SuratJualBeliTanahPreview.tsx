import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratJualBeliTanahPreview({ formData }: Props) {
  const { namaPenjual, nikPenjual, alamatPenjual, namaPembeli, nikPembeli, alamatPembeli, luasTanah, nomorSertifikat, lokasiTanah, hargaKesepakatan, metodePembayaran, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN JUAL BELI TANAH</div>
      <div style={PS.divider} />
      <div style={PS.p()}>Pada hari ini, tanggal {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, kami yang bertanda tangan di bawah ini sepakat mengadakan perjanjian jual beli tanah:</div>
      
      <div style={{ ...PS.bold, textDecoration: 'underline', marginBottom: '4px' }}>PIHAK PERTAMA (PENJUAL)</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span>{orDash(namaPenjual as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPenjual as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPenjual as string)}</span>
      </div>

      <div style={{ ...PS.bold, textDecoration: 'underline', marginBottom: '4px' }}>PIHAK KEDUA (PEMBELI)</div>
      <div style={PS.dataGrid()}>
        <span>Nama Lengkap</span><span>:</span><span>{orDash(namaPembeli as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nikPembeli as string)}</span>
        <span>Alamat</span><span>:</span><span>{orDash(alamatPembeli as string)}</span>
      </div>

      <div style={PS.p()}>Kedua belah pihak sepakat untuk melakukan transaksi jual beli sebidang tanah dengan spesifikasi sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Luas Tanah</span><span>:</span><span>{luasTanah ? `${luasTanah} m²` : '—'}</span>
        <span>Nomor Sertifikat</span><span>:</span><span>{orDash(nomorSertifikat as string)}</span>
        <span>Lokasi Tanah</span><span>:</span><span>{orDash(lokasiTanah as string)}</span>
        <span>Harga Jual Total</span><span>:</span><span style={PS.bold}>{hargaKesepakatan ? `Rp ${Number(hargaKesepakatan).toLocaleString('id-ID')}` : '—'}</span>
        <span>Sistem Bayar</span><span>:</span><span>{orDash(metodePembayaran as string)}</span>
      </div>

      <div style={PS.p()}>Perjanjian ini mengikat kedua belah pihak secara hukum. Segala sengketa atau perselisihan di kemudian hari akan diselesaikan secara kekeluargaan sebelum menempuh jalur hukum.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK KEDUA (Pembeli),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPembeli as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK PERTAMA (Penjual),</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTanganPenjual as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenjual as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

