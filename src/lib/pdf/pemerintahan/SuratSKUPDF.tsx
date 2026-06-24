import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratSKUPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, alamat, namaUsaha, bidangUsaha, alamatUsaha, kotaSurat, tanggalSurat, namaPejabat, jabatanPejabat, tandaTangan } = formData;
  return (
    <Document title={`SKU - ${nama || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT KETERANGAN USAHA (SKU)" />
        <Body>Yang bertanda tangan di bawah ini, {orDash(jabatanPejabat as string || 'Lurah / Kepala Desa')}, menerangkan bahwa:</Body>
        <IndentedRows rows={[
          ['Nama Pemilik', nama as string],
          ['NIK Pemilik', nik as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Alamat Rumah', alamat as string],
        ]} />
        <Body>Adalah benar nama tersebut di atas memiliki dan menjalankan usaha mandiri / UMKM sebagai berikut:</Body>
        <IndentedRows rows={[
          ['Nama Usaha', namaUsaha as string],
          ['Bidang Usaha', bidangUsaha as string],
          ['Alamat Usaha', alamatUsaha as string],
        ]} />
        <Body>Berdasarkan pengamatan kami, usaha tersebut berjalan dengan aktif dan produktif hingga saat ini.</Body>
        <Body>Demikian surat keterangan usaha ini diberikan kepada yang bersangkutan untuk dapat dipergunakan sebagai syarat pengajuan administrasi pendanaan atau pengembangan usaha.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Pemilik Usaha," 
          name1={orDash(nama as string)} 
          src1={tandaTangan as string | undefined}
          label2={orDash(jabatanPejabat as string || 'Lurah / Kades,')}
          name2={orDash(namaPejabat as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



