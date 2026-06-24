import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratIzinKeramaianPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, acara, tanggalAcara, waktuAcara, tempatAcara, rtRw, kotaSurat, tanggalSurat, namaKetuaRT, tandaTangan } = formData;
  return (
    <Document title={`Izin Keramaian - ${nama || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PENGANTAR RT/RW (IZIN KERAMAIAN)" />
        <Body>Yang bertanda tangan di bawah ini menerangkan rencana penyelenggaraan acara keramaian oleh warga:</Body>
        <IndentedRows rows={[
          ['Nama Penanggung Jawab', nama as string],
          ['NIK', nik as string],
          ['Nama Acara', acara as string],
          ['Tanggal Pelaksanaan', tanggalAcara ? formatTanggalIndonesia(tanggalAcara as string) : undefined],
          ['Waktu Acara', waktuAcara as string],
          ['Tempat / Lokasi', tempatAcara as string],
        ]} />
        <Body>Pihak pengurus {orDash(rtRw as string || 'RT / RW')} setempat pada dasarnya tidak keberatan atas rencana acara tersebut selama penyelenggara bersedia menjaga ketertiban, kebersihan, serta keamanan lingkungan sekitar.</Body>
        <Body>Surat pengantar ini dibuat sebagai prasyarat permohonan izin keramaian resmi ke Kepolisian Sektor (Polsek) setempat.</Body>
        <Body>Demikian pengantar ini dibuat untuk dipergunakan sebagaimana mestinya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Penyelenggara," 
          name1={orDash(nama as string)} 
          src1={tandaTangan as string | undefined}
          label2="Ketua RT / RW,"
          name2={orDash(namaKetuaRT as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



