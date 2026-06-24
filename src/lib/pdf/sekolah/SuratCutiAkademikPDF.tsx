import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratCutiAkademikPDF({ formData, withWatermark = true }: Props) {
  const { namaMahasiswa, nim, jurusan, semester, namaKampus, semesterCuti, alasanCuti, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Cuti Akademik - ${namaMahasiswa || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Bapak/Ibu Rektor / Wakil Rektor Bidang Akademik</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaKampus as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan Cuti Akademik</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaMahasiswa as string],
          ...(nim ? [['NIM', nim as string] as [string, string]] : []),
          ['Program Studi', jurusan as string],
          ...(semester ? [['Semester', semester as string] as [string, string]] : []),
        ]} />
        <Body>Dengan ini mengajukan permohonan cuti akademik pada {orDash(semesterCuti as string)} dengan alasan sebagai berikut:</Body>
        <Body>{orDash(alasanCuti as string)}</Body>
        <Body>Demikian permohonan ini saya sampaikan. Besar harapan saya agar permohonan ini dapat dikabulkan. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.</Body>
        <SigRight label="Hormat saya," name={orDash(namaMahasiswa as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



