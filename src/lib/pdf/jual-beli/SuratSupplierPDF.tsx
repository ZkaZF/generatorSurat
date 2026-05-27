import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratSupplierPDF({ formData, withWatermark = true }: Props) {
  const { namaSupplier, namaPembeliBisnis, jenisBahanBaku, hargaPerSatuan, satuanBarang, kuantitasMinimal, periodeKontrak, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Supplier - ${namaPembeliBisnis || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT KONTRAK PASOKAN BARANG (SUPPLIER)" />
        <Body>Kerja sama penyuplaian bahan baku/komoditas bisnis disepakati oleh:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Supplier)', namaSupplier as string],
          ['PIHAK II (Pembeli)', namaPembeliBisnis as string],
        ]} />

        <Body>Klausul harga, kuantitas pasokan, serta durasi kerja sama diatur sebagai berikut:</Body>
        <IndentedRows rows={[
          ['Bahan Baku / Komoditas', jenisBahanBaku as string],
          ['Harga Per Satuan', hargaPerSatuan ? `Rp ${Number(hargaPerSatuan).toLocaleString('id-ID')} / ${satuanBarang || 'unit'}` : undefined],
          ['Minimal Pasok / Bulan', kuantitasMinimal ? `${kuantitasMinimal} ${satuanBarang || 'unit'}` : undefined],
          ['Durasi Kontrak', periodeKontrak ? `${periodeKontrak} bulan (harga mengikat)` : undefined],
        ]} />

        <Body>Pihak I menjamin kualitas bahan baku konsisten sesuai sampel standar awal. Pihak II berkewajiban melakukan pembayaran penuh atas nota tagihan maksimal 7 hari setelah barang diterima secara aman.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Pembeli)," 
          name1={orDash(namaPembeliBisnis as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Supplier),"
          name2={orDash(namaSupplier as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


