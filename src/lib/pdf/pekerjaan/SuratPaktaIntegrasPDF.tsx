import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, DateLine, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPaktaIntegrasPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, jabatan, instansi, unitKerja, kotaSurat, tanggalSurat, tandaTangan } = formData;
  const items = [
    'Bertindak jujur, transparan, dan tidak koruptif dalam menjalankan tugas dan tanggung jawab.',
    'Tidak menyalahgunakan wewenang dan jabatan untuk kepentingan pribadi maupun golongan.',
    'Menghindari benturan kepentingan (conflict of interest) dalam setiap pengambilan keputusan.',
    'Menjaga kerahasiaan informasi dan data yang bersifat rahasia milik instansi.',
    'Melaporkan setiap dugaan pelanggaran integritas kepada pihak yang berwenang.',
    'Menerima sanksi sesuai ketentuan yang berlaku apabila melanggar pakta ini.',
  ];
  return (
    <Document title={`Pakta Integritas - ${nama || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="PAKTA INTEGRITAS" />
        <Body>Saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[['Nama', nama as string], ['NIK', nik as string], ['Jabatan', jabatan as string], ['Instansi', instansi as string], ...(unitKerja ? [['Unit Kerja', unitKerja as string] as [string, string]] : [])]} />
        <Body>Dengan ini menyatakan dan berkomitmen untuk:</Body>
        <View style={{ paddingLeft: 14, marginBottom: 8 }}>
          {items.map((item, i) => <Text key={i} style={[styles.body, { marginBottom: 3 }]}>{i + 1}. {item}</Text>)}
        </View>
        <Body>Demikian pakta integritas ini saya buat dengan penuh kesadaran, tanpa paksaan, dan dalam keadaan sehat jasmani serta rohani.</Body>
        <Text style={[styles.rightAlign, { marginBottom: 4 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}
        </Text>
        <SigRight label="Yang Menyatakan," name={`${orDash(nama as string)}${jabatan ? `\n${jabatan}` : ''}`} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



