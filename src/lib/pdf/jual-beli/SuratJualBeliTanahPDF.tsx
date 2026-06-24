import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratJualBeliTanahPDF({ formData, withWatermark = true }: Props) {
  const { namaPenjual, nikPenjual, alamatPenjual, namaPembeli, nikPembeli, alamatPembeli, luasTanah, nomorSertifikat, lokasiTanah, hargaKesepakatan, metodePembayaran, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Jual Beli Tanah - ${namaPembeli || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN JUAL BELI TANAH" />
        <Body>Pada hari ini, tanggal {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, kami yang bertanda tangan di bawah ini sepakat mengadakan transaksi jual beli tanah:</Body>
        
        <Text style={[styles.bodyBold, { fontSize: 10, textDecoration: 'underline', marginBottom: 2 }]}>PIHAK PERTAMA (PENJUAL)</Text>
        <IndentedRows rows={[
          ['Nama Lengkap', namaPenjual as string],
          ['NIK', nikPenjual as string],
          ['Alamat Lengkap', alamatPenjual as string],
        ]} />

        <Text style={[styles.bodyBold, { fontSize: 10, textDecoration: 'underline', marginTop: 4, marginBottom: 2 }]}>PIHAK KEDUA (PEMBELI)</Text>
        <IndentedRows rows={[
          ['Nama Lengkap', namaPembeli as string],
          ['NIK', nikPembeli as string],
          ['Alamat Lengkap', alamatPembeli as string],
        ]} />

        <Body>Kedua belah pihak sepakat melakukan transaksi jual beli sebidang tanah dengan spesifikasi berikut:</Body>
        <IndentedRows rows={[
          ['Luas Tanah', luasTanah ? `${luasTanah} m²` : undefined],
          ['Nomor Sertifikat', nomorSertifikat as string],
          ['Lokasi Tanah', lokasiTanah as string],
          ['Harga Jual Total', hargaKesepakatan ? `Rp ${Number(hargaKesepakatan).toLocaleString('id-ID')}` : undefined],
          ['Metode Bayar', metodePembayaran as string],
        ]} />

        <Body>Perjanjian ini mengikat kedua belah pihak secara hukum. Segala sengketa atau perselisihan di kemudian hari akan diselesaikan secara kekeluargaan sebelum menempuh jalur hukum.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK KEDUA (Pembeli)," 
          name1={orDash(namaPembeli as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK PERTAMA (Penjual - Meterai),"
          name2={orDash(namaPenjual as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



