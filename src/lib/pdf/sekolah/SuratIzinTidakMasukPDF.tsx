import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratIzinTidakMasukPDF({ formData, withWatermark = true }: Props) {
  const { namaPembuat, hubungan, namaSiswa, kelasJurusan, namaInstitusi, tanggalMulai, tanggalSelesai, alasan, keterangan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  const isMultiDay = tanggalMulai !== tanggalSelesai;
  return (
    <Document title={`Surat Izin Tidak Masuk - ${namaSiswa || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Bapak/Ibu Guru / Wali Kelas / Dosen</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaInstitusi as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Pemberitahuan Ketidakhadiran</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaPembuat as string],
          ['Hubungan', hubungan as string],
        ]} />
        <Body>
          Dengan ini memberitahukan bahwa {orDash(namaSiswa as string)}{kelasJurusan ? ` (${kelasJurusan})` : ''} tidak dapat hadir pada:
        </Body>
        <IndentedRows rows={[
          ['Tanggal', `${tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'}${isMultiDay && tanggalSelesai ? ` s.d. ${formatTanggalIndonesia(tanggalSelesai as string)}` : ''}`],
          ['Alasan', alasan as string],
        ]} />
        {keterangan && <Body>{keterangan as string}</Body>}
        <Body>Demikian surat pemberitahuan ini kami sampaikan. Atas perhatian dan pengertiannya, kami ucapkan terima kasih.</Body>
        <SigRight label="Hormat kami," name={orDash(namaPembuat as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


