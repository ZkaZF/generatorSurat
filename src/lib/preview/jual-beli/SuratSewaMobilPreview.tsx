import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratSewaMobilPreview({ formData }: Props) {
  const { namaPemilikRental, namaPenyewa, nikPenyewa, merkTipe, nomorPolisi, tanggalMulaiSewa, tanggalSelesaiSewa, tarifSewaPerHari, dendaKeterlambatan, tanggungJawabKerusakan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KONTRAK SEWA / RENTAL MOBIL</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Perjanjian sewa-menyewa kendaraan roda empat ini disepakati oleh:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Rental)</span><span>:</span><span style={PS.bold}>{orDash(namaPemilikRental as string)}</span>
        <span>PIHAK II (Penyewa)</span><span>:</span><span style={PS.bold}>{orDash(namaPenyewa as string)}</span>
        <span>NIK Penyewa</span><span>:</span><span>{orDash(nikPenyewa as string)}</span>
      </div>

      <div style={PS.p()}>Dengan rincian unit mobil rental dan ketentuan tarif sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Unit Mobil</span><span>:</span><span>{orDash(merkTipe as string)}</span>
        <span>Nomor Polisi (Plat)</span><span>:</span><span style={PS.bold}>{orDash(nomorPolisi as string)}</span>
        <span>Masa Sewa</span><span>:</span><span>{tanggalMulaiSewa ? formatTanggalIndonesia(tanggalMulaiSewa as string) : '—'} s.d. {tanggalSelesaiSewa ? formatTanggalIndonesia(tanggalSelesaiSewa as string) : '—'}</span>
        <span>Tarif Harian</span><span>:</span><span style={PS.bold}>{tarifSewaPerHari ? `Rp ${Number(tarifSewaPerHari).toLocaleString('id-ID')} / hari` : '—'}</span>
        <span>Denda Overtime</span><span>:</span><span>{dendaKeterlambatan ? `Rp ${Number(dendaKeterlambatan).toLocaleString('id-ID')} / jam` : '—'}</span>
        <span>Sistem Rental</span><span>:</span><span>{orDash(tanggungJawabKerusakan as string)}</span>
      </div>

      <div style={PS.p()}>Penyewa wajib menjaga kondisi fisik kendaraan dengan baik. Apabila terjadi kecelakaan, kehilangan, lecet atau kerusakan akibat kelalaian Penyewa, maka seluruh biaya perbaikan menjadi tanggung jawab penuh Penyewa.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Penyewa),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenyewa as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Rental),</div>
          <div style={PS.sigLineDash} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemilikRental as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


