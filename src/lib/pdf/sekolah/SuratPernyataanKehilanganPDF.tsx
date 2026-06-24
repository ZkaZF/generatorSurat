import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPernyataanKehilanganPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, alamat, dokumenHilang, nomorDokumen, tempatHilang, tujuanSurat, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Pernyataan Kehilangan - ${nama || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERNYATAAN KEHILANGAN" />
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[['Nama Lengkap', nama as string], ['NIK / No. ID', nik as string], ['Alamat', alamat as string]]} />
        <Body>Dengan ini menyatakan dengan sesungguhnya bahwa saya telah kehilangan:</Body>
        <View style={{ borderWidth: 1.5, borderColor: '#333', borderRadius: 3, padding: 10, marginBottom: 8 }}>
          <Text style={styles.body}>Dokumen        : {orDash(dokumenHilang as string)}</Text>
          {nomorDokumen && <Text style={styles.body}>Nomor Dokumen  : {nomorDokumen as string}</Text>}
          {tempatHilang && <Text style={styles.body}>Perkiraan Hilang: {tempatHilang as string}</Text>}
        </View>
        {tujuanSurat && <Body>Surat pernyataan ini dibuat untuk keperluan: {tujuanSurat as string}.</Body>}
        <Body>Demikian surat pernyataan ini saya buat dengan sebenar-benarnya. Saya bertanggung jawab penuh atas kebenaran pernyataan di atas.</Body>
        <Text style={[styles.rightAlign, { marginBottom: 4 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <SigRight label="Yang Menyatakan," name={orDash(nama as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



