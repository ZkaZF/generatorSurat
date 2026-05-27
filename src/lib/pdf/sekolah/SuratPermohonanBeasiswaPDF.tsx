import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPermohonanBeasiswaPDF({ formData, withWatermark = true }: Props) {
  const { namaMahasiswa, nim, jurusan, namaInstitusi, semester, ipk, namaBeasiswa, lembagaBeasiswa, motivasi, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Permohonan Beasiswa - ${namaMahasiswa || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Tim Seleksi / Panitia Beasiswa</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(lembagaBeasiswa as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan {orDash(namaBeasiswa as string)}</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaMahasiswa as string],
          ...(nim ? [['NIM', nim as string] as [string, string]] : []),
          ['Jurusan', jurusan as string],
          ['Institusi', namaInstitusi as string],
          ...(semester ? [['Semester', semester as string] as [string, string]] : []),
          ...(ipk ? [['IPK', ipk as string] as [string, string]] : []),
        ]} />
        <Body>Dengan ini mengajukan permohonan {orDash(namaBeasiswa as string)}.</Body>
        {motivasi && <Body>{motivasi as string}</Body>}
        <Body>Demikian surat permohonan ini saya buat. Atas perhatian dan pertimbangan yang diberikan, saya ucapkan terima kasih.</Body>
        <SigRight label="Hormat saya," name={orDash(namaMahasiswa as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


