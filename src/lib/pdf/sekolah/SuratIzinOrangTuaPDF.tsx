import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratIzinOrangTuaPDF({ formData, withWatermark = true }: Props) {
  const { namaOrangTua, hubungan, noHp, namaAnak, namaInstitusi, kegiatan, tujuanKegiatan, tanggalMulai, tanggalSelesai, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Surat Izin Orang Tua - ${namaAnak || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Pimpinan / Panitia Kegiatan</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaInstitusi as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Izin Mengikuti Kegiatan</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaOrangTua as string],
          ['Hubungan', `${orDash(hubungan as string)} dari ${orDash(namaAnak as string)}`],
          ...(noHp ? [['No. HP', noHp as string] as [string, string]] : []),
        ]} />
        <Body>Dengan ini memberikan izin kepada anak saya, {orDash(namaAnak as string)}, untuk mengikuti kegiatan:</Body>
        <IndentedRows rows={[
          ['Nama Kegiatan', kegiatan as string],
          ['Tempat', tujuanKegiatan as string],
          ['Tanggal', `${tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'} s.d. ${tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '___'}`],
        ]} />
        <Body>Demikian surat izin ini saya buat dengan penuh kesadaran. Atas perhatiannya, saya ucapkan terima kasih.</Body>
        <SigRight label="Orang Tua / Wali," name={orDash(namaOrangTua as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



