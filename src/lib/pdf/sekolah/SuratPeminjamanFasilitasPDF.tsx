import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPeminjamanFasilitasPDF({ formData, withWatermark = true }: Props) {
  const { namaOrganisasi, namaKetua, kontakPJ, namaInstitusi, fasilitasDipinjam, namaKegiatan, tanggalPeminjaman, waktuPeminjaman, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Peminjaman Fasilitas - ${namaKegiatan || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Bapak/Ibu Kepala Sekolah / Rektor / Wakil Sarana Prasarana</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaInstitusi as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan Peminjaman Fasilitas</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Kami yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Organisasi', namaOrganisasi as string],
          ['Ketua / PJ', namaKetua as string],
          ...(kontakPJ ? [['No. HP', kontakPJ as string] as [string, string]] : []),
        ]} />
        <Body>Bermaksud mengajukan permohonan peminjaman fasilitas untuk kegiatan berikut:</Body>
        <IndentedRows rows={[
          ['Nama Kegiatan', namaKegiatan as string],
          ['Fasilitas', fasilitasDipinjam as string],
          ['Tanggal', tanggalPeminjaman ? formatTanggalIndonesia(tanggalPeminjaman as string) : '___'],
          ['Waktu', waktuPeminjaman as string],
        ]} />
        <Body>Kami berkomitmen untuk menjaga dan merawat fasilitas yang dipinjam serta mengembalikannya dalam kondisi baik setelah kegiatan selesai.</Body>
        <Body>Demikian permohonan ini kami sampaikan. Atas perhatian dan izin yang diberikan, kami ucapkan terima kasih.</Body>
        <SigRight label="Hormat kami," name={orDash(namaKetua as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



