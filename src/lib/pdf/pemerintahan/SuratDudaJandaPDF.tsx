import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratDudaJandaPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, status, namaPasanganSebelumnya, tanggalMeninggalPasangan, keperluan, alamat, kotaSurat, tanggalSurat, namaPejabat, tandaTangan } = formData;
  return (
    <Document title={`Surat Ket Duda Janda - ${nama || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title={`SURAT KETERANGAN ${status === 'Janda' ? 'JANDA' : 'DUDA'}`} />
        <Body>Yang bertanda tangan di bawah ini Kepala Desa / Lurah, menerangkan dengan sebenarnya bahwa:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK', nik as string],
          ['Alamat Lengkap', alamat as string],
        ]} />
        <Body>Sehat walafiat, dan sejak ditinggal wafat oleh pasangan hidupnya pada tanggal {tanggalMeninggalPasangan ? formatTanggalIndonesia(tanggalMeninggalPasangan as string) : '—'}:</Body>
        <IndentedRows rows={[
          ['Nama Pasangan', namaPasanganSebelumnya as string],
          ['Status Sekarang', `${status} (Belum Pernah Menikah Lagi)`],
        ]} />
        <Body>Surat keterangan ini diberikan berdasarkan keaktifan data domisili serta laporan lingkungan setempat, untuk dipergunakan bagi: {orDash(keperluan as string)}.</Body>
        <Body>Demikian surat keterangan ini dibuat agar dapat dipergunakan dan difasilitasi dengan sebaik-baiknya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Pemohon," 
          name1={orDash(nama as string)} 
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


