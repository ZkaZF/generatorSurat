import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratSewaRukoPDF({ formData, withWatermark = true }: Props) {
  const { namaPemilik, nikPemilik, alamatPemilik, namaPenyewa, nikPenyewa, alamatPenyewa, alamatRuko, nomorPBB, durasiSewa, tanggalMulai, tanggalSelesai, hargaSewaPerTahun, uangJaminan, jamOperasional, izinRenovasi, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Sewa Ruko - ${namaPenyewa || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN SEWA RUKO / KIOS" />
        <Body>Kami yang bertanda tangan di bawah ini menyepakati sewa tempat usaha ruko/kios:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Pemilik)', namaPemilik as string],
          ['NIK Pemilik', nikPemilik as string],
          ['PIHAK II (Penyewa)', namaPenyewa as string],
          ['NIK Penyewa', nikPenyewa as string],
        ]} />

        <Body>Menyepakati perjanjian sewa dengan rincian objek dan operasional sebagai berikut:</Body>
        <IndentedRows rows={[
          ['Lokasi Ruko / Kios', alamatRuko as string],
          ['Nomor PBB Ruko', nomorPBB as string],
          ['Masa Sewa', durasiSewa ? `${durasiSewa} tahun (${tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '—'} s.d. ${tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '—'})` : undefined],
          ['Harga Sewa / Tahun', hargaSewaPerTahun ? `Rp ${Number(hargaSewaPerTahun).toLocaleString('id-ID')}` : undefined],
          ['Uang Jaminan (Dep)', uangJaminan ? `Rp ${Number(uangJaminan).toLocaleString('id-ID')}` : undefined],
          ['Jam Operasional', jamOperasional as string],
          ['Izin Renovasi', izinRenovasi as string],
        ]} />

        <Body>Penyewa wajib mengembalikan kondisi ruko dalam keadaan bersih dan terpelihara setelah masa kontrak berakhir. Uang jaminan akan dikembalikan utuh bila tidak ada kerusakan struktural yang disebabkan oleh Penyewa.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Penyewa)," 
          name1={orDash(namaPenyewa as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Pemilik - Meterai),"
          name2={orDash(namaPemilik as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


