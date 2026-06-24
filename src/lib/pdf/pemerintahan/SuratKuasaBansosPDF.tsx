import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratKuasaBansosPDF({ formData, withWatermark = true }: Props) {
  const { namaPemberi, nikPemberi, alamatPemberi, namaPenerima, nikPenerima, alamatPenerima, namaBansosDokumen, kotaSurat, tanggalSurat, tandaTangan, tandaTanganPenerima } = formData;
  return (
    <Document title={`Surat Kuasa - ${namaPemberi || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT KUASA" />
        <Body>Yang bertanda tangan di bawah ini (selaku Pemberi Kuasa):</Body>
        <IndentedRows rows={[
          ['Nama Pemberi Kuasa', namaPemberi as string],
          ['NIK', nikPemberi as string],
          ['Alamat Lengkap', alamatPemberi as string],
        ]} />
        <Body>Memberikan kuasa sepenuhnya kepada (selaku Penerima Kuasa):</Body>
        <IndentedRows rows={[
          ['Nama Penerima Kuasa', namaPenerima as string],
          ['NIK', nikPenerima as string],
          ['Alamat Lengkap', alamatPenerima as string],
        ]} />
        <Body>Untuk bertindak atas nama Pemberi Kuasa dalam melakukan pengambilan / pencairan: {orDash(namaBansosDokumen as string)}.</Body>
        <Body>Penerima Kuasa berhak melakukan segala tindakan administrasi yang sah guna keperluan tersebut. Surat kuasa ini dibuat karena Pemberi Kuasa berhalangan hadir secara langsung (sakit / lansia / kesibukan mendesak).</Body>
        <Body>Demikian surat kuasa ini dibuat dengan sebenarnya agar dapat digunakan sebagaimana mestinya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Penerima Kuasa," 
          name1={orDash(namaPenerima as string)} 
          src1={tandaTanganPenerima as string | undefined}
          label2="Pemberi Kuasa (Meterai 10k),"
          name2={orDash(namaPemberi as string)}
          src2={tandaTangan as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



