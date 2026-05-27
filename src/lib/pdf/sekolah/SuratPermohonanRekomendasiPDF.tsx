import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPermohonanRekomendasiPDF({ formData, withWatermark = true }: Props) {
  const { namaPemohon, nim, jurusan, namaInstitusi, namaGuruDosen, tujuanRekomendasi, alasan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Permohonan Rekomendasi - ${namaPemohon || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaGuruDosen as string)}</Text>
          <Text style={{ fontSize: 10 }}>{orDash(namaInstitusi as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan Surat Rekomendasi</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaPemohon as string],
          ...(nim ? [['NIM/NIS', nim as string] as [string, string]] : []),
          ['Prodi/Jurusan', jurusan as string],
          ['Institusi', namaInstitusi as string],
        ]} />
        <Body>Dengan hormat memohon kesediaan Bapak/Ibu {orDash(namaGuruDosen as string)} untuk memberikan surat rekomendasi guna keperluan {orDash(tujuanRekomendasi as string)}.</Body>
        {alasan && <Body>{alasan as string}</Body>}
        <Body>Demikian permohonan ini saya sampaikan. Atas kesediaan dan kebaikan Bapak/Ibu, saya ucapkan terima kasih yang sebesar-besarnya.</Body>
        <SigRight label="Hormat saya," name={orDash(namaPemohon as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


