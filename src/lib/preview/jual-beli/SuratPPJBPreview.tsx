import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPPJBPreview({ formData }: Props) {
  const { namaPenjual, nikPenjual, namaPembeli, nikPembeli, deskripsiProperti, hargaTotal, uangMuka, sisaPembayaran, jumlahTenor, batasPelunasan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN PENGIKATAN JUAL BELI (PPJB)</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Perjanjian Pengikatan Jual Beli ini disepakati oleh:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Penjual)</span><span>:</span><span style={PS.bold}>{orDash(namaPenjual as string)}</span>
        <span>NIK Penjual</span><span>:</span><span>{orDash(nikPenjual as string)}</span>
        <span>PIHAK II (Pembeli)</span><span>:</span><span style={PS.bold}>{orDash(namaPembeli as string)}</span>
        <span>NIK Pembeli</span><span>:</span><span>{orDash(nikPembeli as string)}</span>
      </div>

      <div style={PS.p()}>Kedua belah pihak sepakat mengikatkan diri dalam PPJB atas objek properti berikut:</div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '8px', fontSize: '10px' }}>
        <strong>{orDash(deskripsiProperti as string)}</strong>
      </div>

      <div style={PS.dataGrid()}>
        <span>Harga Total Jual</span><span>:</span><span style={PS.bold}>{hargaTotal ? `Rp ${Number(hargaTotal).toLocaleString('id-ID')}` : '—'}</span>
        <span>Uang Muka (DP)</span><span>:</span><span>{uangMuka ? `Rp ${Number(uangMuka).toLocaleString('id-ID')}` : '—'}</span>
        <span>Sisa Pelunasan</span><span>:</span><span>{sisaPembayaran ? `Rp ${Number(sisaPembayaran).toLocaleString('id-ID')}` : '—'}</span>
        <span>Tenor Angsuran</span><span>:</span><span>{jumlahTenor ? `${jumlahTenor} kali / bulan` : '—'}</span>
        <span>Batas Pelunasan</span><span>:</span><span>{batasPelunasan ? formatTanggalIndonesia(batasPelunasan as string) : '—'}</span>
      </div>

      <div style={PS.p()}>Apabila terjadi pembatalan sepihak dari Pembeli, maka uang muka yang telah dibayarkan akan hangus atau dipotong sesuai kesepakatan. Hak kepemilikan penuh properti baru akan dipindahkan lewat Akta Jual Beli (AJB) Notaris setelah pelunasan selesai.</div>
      
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


