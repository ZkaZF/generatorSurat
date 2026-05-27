import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPengantarPenelitianPDF({ formData, withWatermark = true }: Props) {
  const { namaMahasiswa, nim, jurusan, namaKampus, judulPenelitian, instansiTujuan, jenisKegiatan, tanggalMulai, tanggalSelesai, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Pengantar Penelitian - ${namaMahasiswa || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Pimpinan / Manajer HRD</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(instansiTujuan as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan Izin Penelitian / Pengambilan Data</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaMahasiswa as string],
          ...(nim ? [['NIM', nim as string] as [string, string]] : []),
          ['Program Studi', jurusan as string],
          ['Perguruan Tinggi', namaKampus as string],
        ]} />
        <Body>Dengan ini mengajukan permohonan izin untuk melakukan penelitian/pengambilan data di instansi yang Bapak/Ibu pimpin, dalam rangka penyusunan skripsi/tugas akhir dengan judul:</Body>
        <Body>{orDash(judulPenelitian as string)}</Body>
        <IndentedRows rows={[
          ['Jenis Kegiatan', jenisKegiatan as string],
          ['Waktu Pelaksanaan', `${tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'} s.d. ${tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '___'}`],
        ]} />
        <Body>Demikian permohonan ini saya sampaikan. Atas perhatian dan izin yang diberikan, saya ucapkan terima kasih.</Body>
        <SigRight label="Hormat saya," name={orDash(namaMahasiswa as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


