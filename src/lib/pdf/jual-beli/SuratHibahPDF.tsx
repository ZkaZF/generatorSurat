import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratHibahPDF({ formData, withWatermark = true }: Props) {
  const { namaPemberiHibah, nikPemberi, alamatPemberi, namaPenerimaHibah, nikPenerima, alamatPenerima, objekHibah, nilaiTaksiran, kotaSurat, tanggalSurat, tandaTanganPemberi, tandaTanganPenerima } = formData;
  return (
    <Document title="Surat Hibah" author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT HIBAH" />
        <Body>Pada hari ini, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, bertempat di {orDash(kotaSurat as string)}, yang bertanda tangan di bawah ini:</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>PEMBERI HIBAH (Pihak Pertama):</Text>
        <IndentedRows rows={[['Nama', namaPemberiHibah as string], ['NIK', nikPemberi as string], ['Alamat', alamatPemberi as string]]} />
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>PENERIMA HIBAH (Pihak Kedua):</Text>
        <IndentedRows rows={[['Nama', namaPenerimaHibah as string], ['NIK', nikPenerima as string], ['Alamat', alamatPenerima as string]]} />
        <Body>Menyatakan bahwa Pihak Pertama dengan ini menghibahkan kepada Pihak Kedua, berupa:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8 }}>
          <Text style={styles.body}>{orDash(objekHibah as string, 'Objek hibah belum diisi')}</Text>
          {nilaiTaksiran && <Text style={[styles.body, { marginTop: 4, color: '#444' }]}>Nilai taksiran: Rp {nilaiTaksiran as string}</Text>}
        </View>
        <Body>Hibah ini diberikan dengan sukarela, tanpa paksaan, dan tanpa imbalan apapun. Pihak Kedua menyatakan menerima hibah tersebut dengan penuh rasa terima kasih.</Body>
        <SigDual label1="Pemberi Hibah," name1={orDash(namaPemberiHibah as string)} src1={tandaTanganPemberi as string | undefined} label2="Penerima Hibah," name2={orDash(namaPenerimaHibah as string)} src2={tandaTanganPenerima as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


