import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratSewaRukoPreview({ formData }: Props) {
  const { namaPemilik, nikPemilik, alamatPemilik, namaPenyewa, nikPenyewa, alamatPenyewa, alamatRuko, nomorPBB, durasiSewa, tanggalMulai, tanggalSelesai, hargaSewaPerTahun, uangJaminan, jamOperasional, izinRenovasi, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN SEWA RUKO / KIOS</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Kami yang bertanda tangan di bawah ini menerangkan hak sewa tempat usaha ruko/kios:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Pemilik)</span><span>:</span><span style={PS.bold}>{orDash(namaPemilik as string)}</span>
        <span>NIK Pemilik</span><span>:</span><span>{orDash(nikPemilik as string)}</span>
        <span>PIHAK II (Penyewa)</span><span>:</span><span style={PS.bold}>{orDash(namaPenyewa as string)}</span>
        <span>NIK Penyewa</span><span>:</span><span>{orDash(nikPenyewa as string)}</span>
      </div>

      <div style={PS.p()}>Menyepakati perjanjian sewa dengan rincian objek dan operasional sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Lokasi Ruko / Kios</span><span>:</span><span>{orDash(alamatRuko as string)}</span>
        <span>Durasi Sewa</span><span>:</span><span>{durasiSewa ? `${durasiSewa} tahun` : '—'} ({tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '—'} s.d. {tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '—'})</span>
        <span>Harga Sewa / Tahun</span><span>:</span><span style={PS.bold}>{hargaSewaPerTahun ? `Rp ${Number(hargaSewaPerTahun).toLocaleString('id-ID')}` : '—'}</span>
        <span>Uang Jaminan (Dep)</span><span>:</span><span>{uangJaminan ? `Rp ${Number(uangJaminan).toLocaleString('id-ID')}` : '—'}</span>
        <span>Jam Operasional</span><span>:</span><span>{orDash(jamOperasional as string)}</span>
        <span>Izin Renovasi</span><span>:</span><span>{orDash(izinRenovasi as string)}</span>
      </div>

      <div style={PS.p()}>Penyewa wajib mengembalikan kondisi ruko dalam keadaan bersih dan terpelihara setelah masa kontrak berakhir. Uang jaminan akan dikembalikan utuh bila tidak ada kerusakan struktural yang disebabkan oleh Penyewa.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Penyewa),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenyewa as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Pemilik),</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTanganPenjual as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemilik as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

