import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratKematianPDF({ formData, withWatermark = true }: Props) {
  const { namaJenazah, nikJenazah, jenisKelamin, tanggalMeninggal, tempatMeninggal, penyebab, namaPelapor, hubunganPelapor, kotaSurat, tanggalSurat, namaPejabat, tandaTangan } = formData;
  return (
    <Document title={`Kematian - ${namaJenazah || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PENGANTAR KEMATIAN" />
        <Body>Yang bertanda tangan di bawah ini menerangkan bahwa telah meninggal dunia warga kami:</Body>
        <IndentedRows rows={[
          ['Nama Jenazah', namaJenazah as string],
          ['NIK Jenazah', nikJenazah as string],
          ['Jenis Kelamin', jenisKelamin as string],
          ['Tanggal Wafat', tanggalMeninggal ? formatTanggalIndonesia(tanggalMeninggal as string) : undefined],
          ['Tempat Wafat', tempatMeninggal as string],
          ['Penyebab Wafat', penyebab as string],
        ]} />
        <Body>Berdasarkan laporan yang diajukan oleh ahli waris / pelapor:</Body>
        <IndentedRows rows={[
          ['Nama Pelapor', namaPelapor as string],
          ['Hubungan Keluarga', hubunganPelapor as string],
        ]} />
        <Body>Demikian surat pengantar kematian ini dibuat untuk dipergunakan oleh pihak keluarga dalam mengurus Akta Kematian di dinas kependudukan setempat.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Pelapor / Waris," 
          name1={orDash(namaPelapor as string)} 
          src1={tandaTangan as string | undefined}
          label2="Kepala Desa / Lurah,"
          name2={orDash(namaPejabat as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



