import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, DateLine, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratRekomendasiKerjaPDF({ formData, withWatermark = true }: Props) {
  const { namaPemberiRekom, jabatanPemberi, namaPerusahaanLama, namaKaryawan, jabatanKaryawan, lamaMasa, penilaian, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Surat Rekomendasi - ${namaKaryawan || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.bodyBold, { fontSize: 11, marginBottom: 2 }]}>{orDash(namaPerusahaanLama as string)}</Text>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#aaa', marginBottom: 10 }} />
        <DateLine kotaSurat={kotaSurat as string} tanggalSurat={tanggalSurat as string} />
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>HRD / Pimpinan</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <Text style={[styles.bodyBold, { textAlign: 'center', fontSize: 11, marginBottom: 10 }]}>SURAT REKOMENDASI</Text>
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini, {orDash(namaPemberiRekom as string)}, selaku {orDash(jabatanPemberi as string)} di {orDash(namaPerusahaanLama as string)}, dengan ini memberikan rekomendasi kepada:</Body>
        <IndentedRows rows={[['Nama', namaKaryawan as string], ['Jabatan Terakhir', jabatanKaryawan as string], ['Lama Bekerja', lamaMasa as string]]} />
        <Body>Selama masa kerja, yang bersangkutan telah menunjukkan kinerja yang baik. {orDash(penilaian as string, 'Beliau dikenal sebagai individu yang berdedikasi, profesional, dan dapat diandalkan.')}</Body>
        <Body>Dengan demikian, saya merekomendasikan yang bersangkutan dengan sepenuh hati untuk posisi yang lebih baik.</Body>
        <SigRight label="Hormat saya," name={`${orDash(namaPemberiRekom as string)}\n${orDash(jabatanPemberi as string)}`} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



