import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratKeteranganAktifPDF({ formData, withWatermark = true }: Props) {
  const { namaSiswa, nimNis, kelasJurusan, namaInstitusi, keperluan, ditujukanKepada, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Keterangan Aktif - ${namaSiswa || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(ditujukanKepada as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan Surat Keterangan Aktif Sekolah/Kuliah</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaSiswa as string],
          ...(nimNis ? [['NIM/NIS', nimNis as string] as [string, string]] : []),
          ['Kelas/Prodi', kelasJurusan as string],
          ['Institusi', namaInstitusi as string],
        ]} />
        <Body>Dengan ini mengajukan permohonan penerbitan Surat Keterangan Aktif Sekolah/Kuliah untuk keperluan {orDash(keperluan as string)}.</Body>
        <Body>Demikian permohonan ini saya sampaikan. Atas perhatian dan bantuan Bapak/Ibu, saya ucapkan terima kasih.</Body>
        <SigRight label="Hormat saya," name={orDash(namaSiswa as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



