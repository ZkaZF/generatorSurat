import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratSewaMobilPDF({ formData, withWatermark = true }: Props) {
  const { namaPemilikRental, namaPenyewa, nikPenyewa, merkTipe, nomorPolisi, tanggalMulaiSewa, tanggalSelesaiSewa, tarifSewaPerHari, dendaKeterlambatan, tanggungJawabKerusakan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Rental Mobil - ${namaPenyewa || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT KONTRAK SEWA / RENTAL MOBIL" />
        <Body>Perjanjian sewa-menyewa kendaraan roda empat ini disepakati oleh:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Rental)', namaPemilikRental as string],
          ['PIHAK II (Penyewa)', namaPenyewa as string],
          ['NIK Penyewa', nikPenyewa as string],
        ]} />

        <Body>Dengan rincian unit mobil rental dan ketentuan tarif sebagai berikut:</Body>
        <IndentedRows rows={[
          ['Unit Mobil', merkTipe as string],
          ['Nomor Polisi (Plat)', nomorPolisi as string],
          ['Masa Sewa', tanggalMulaiSewa && tanggalSelesaiSewa ? `${formatTanggalIndonesia(tanggalMulaiSewa as string)} s.d. ${formatTanggalIndonesia(tanggalSelesaiSewa as string)}` : undefined],
          ['Tarif Harian', tarifSewaPerHari ? `Rp ${Number(tarifSewaPerHari).toLocaleString('id-ID')} / hari` : undefined],
          ['Denda Overtime', dendaKeterlambatan ? `Rp ${Number(dendaKeterlambatan).toLocaleString('id-ID')} / jam` : undefined],
          ['Sistem Rental', tanggungJawabKerusakan as string],
        ]} />

        <Body>Penyewa wajib menjaga kondisi fisik kendaraan dengan baik. Apabila terjadi kecelakaan, kehilangan, lecet atau kerusakan akibat kelalaian Penyewa, maka seluruh biaya perbaikan menjadi tanggung jawab penuh Penyewa.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Penyewa)," 
          name1={orDash(namaPenyewa as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Rental),"
          name2={orDash(namaPemilikRental as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



