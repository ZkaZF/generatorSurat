import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratKonsinyasiPDF({ formData, withWatermark = true }: Props) {
  const { namaPemilikBarang, namaToko, namaPenanggungJawab, namaProduk, hargaJualRekomendasi, persentaseBagiHasil, periodeKonsinyasi, sistemPembayaran, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Konsinyasi - ${namaToko || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN KONSINYASI (TITIP JUAL)" />
        <Body>Surat perjanjian kemitraan dagang konsinyasi ini disepakati oleh:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Consignor)', namaPemilikBarang as string],
          ['PIHAK II (Consignee)', namaToko as string],
          ['Penanggung Jawab', namaPenanggungJawab as string],
        ]} />

        <Body>Kedua belah pihak bersepakat mengadakan kerja sama titip jual produk barang dagangan dengan rincian:</Body>
        <IndentedRows rows={[
          ['Nama Produk / Barang', namaProduk as string],
          ['Harga Konsumen (Eceran)', hargaJualRekomendasi ? `Rp ${Number(hargaJualRekomendasi).toLocaleString('id-ID')}` : undefined],
          ['Komisi Bagi Hasil Toko', persentaseBagiHasil ? `${persentaseBagiHasil}% dari omset penjualan` : undefined],
          ['Masa Kontrak / Uji Coba', periodeKonsinyasi ? `${periodeKonsinyasi} hari` : undefined],
          ['Periode Rekonsiliasi', sistemPembayaran as string],
        ]} />

        <Body>Pihak Kedua berkewajiban merawat fisik barang titipan dengan baik dan melaporkan rekapitulasi penjualan secara jujur sesuai jadwal rekonsiliasi. Retur produk sisa yang tidak terjual sepenuhnya ditanggung Pihak Pertama.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Consignee)," 
          name1={orDash(namaPenanggungJawab as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Consignor),"
          name2={orDash(namaPemilikBarang as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


