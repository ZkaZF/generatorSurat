import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPindahSekolahPDF({ formData, withWatermark = true }: Props) {
  const { namaOrangTua, namaAnak, kelasAnak, namaSekolahAsal, namaSekolahTujuan, alasanPindah, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Pindah Sekolah - ${namaAnak || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Bapak/Ibu Kepala Sekolah</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaSekolahAsal as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan Pindah Sekolah (Mutasi)</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaOrangTua as string],
          ['Orang Tua/Wali dari', namaAnak as string],
          ...(kelasAnak ? [['Kelas', kelasAnak as string] as [string, string]] : []),
        ]} />
        <Body>Dengan ini mengajukan permohonan pindah sekolah (mutasi) anak kami dari {orDash(namaSekolahAsal as string)} ke {orDash(namaSekolahTujuan as string)} dengan alasan sebagai berikut:</Body>
        <Body>{orDash(alasanPindah as string)}</Body>
        <Body>Demikian permohonan ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih.</Body>
        <SigRight label="Hormat kami," name={orDash(namaOrangTua as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


