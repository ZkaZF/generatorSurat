import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPengantarSKCKPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, agama, pekerjaan, alamat, keperluan, rtRw, kotaSurat, tanggalSurat, namaKetuaRT, tandaTangan } = formData;
  return (
    <Document title={`SKCK - ${nama || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PENGANTAR RT/RW (PEMBUATAN SKCK)" />
        <Body>Yang bertanda tangan di bawah ini Pengurus {orDash(rtRw as string || 'RT / RW')}, menerangkan bahwa:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK', nik as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Agama', agama as string],
          ['Pekerjaan', pekerjaan as string],
          ['Alamat Lengkap', alamat as string],
        ]} />
        <Body>Adalah benar warga kami yang berkelakuan baik, tidak sedang tersangkut perkara kriminalitas, dan terdaftar dalam wilayah kepengurusan kami.</Body>
        <Body>Surat pengantar ini dibuat untuk memenuhi syarat pengajuan Surat Keterangan Catatan Kepolisian (SKCK) dengan keperluan: {orDash(keperluan as string)}.</Body>
        <Body>Demikian surat pengantar ini dibuat agar pihak yang berwenang dapat memberikan bantuan dan fasilitas pembuatan SKCK sebagaimana mestinya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Pemohon," 
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


