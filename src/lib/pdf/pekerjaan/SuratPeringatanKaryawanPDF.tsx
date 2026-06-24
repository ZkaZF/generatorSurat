import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPeringatanKaryawanPDF({ formData, withWatermark = true }: Props) {
  const { namaPerusahaan, namaAtasan, jabatanAtasan, namaKaryawan, nikKaryawan, jabatanKaryawan, jenisSP, alasanPelanggaran, kotaSurat, tanggalSurat } = formData;
  return (
    <Document title={`Teguran SP - ${namaKaryawan || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title={orDash(namaPerusahaan as string).toUpperCase()} sub="DEPARTEMEN SUMBER DAYA MANUSIA (HRD)" />
        
        <View style={{ alignItems: 'center', marginVertical: 8 }}>
          <Text style={[styles.bodyBold, { color: '#c00', fontSize: 12, letterSpacing: 0.8 }]}>
            {orDash(jenisSP as string || 'SURAT PERINGATAN (SP)')}
          </Text>
        </View>

        <Body>Surat teguran resmi disiplin kerja ini ditujukan kepada karyawan:</Body>
        <IndentedRows rows={[
          ['Nama Karyawan', namaKaryawan as string],
          ['NIK / ID Staff', nikKaryawan as string],
          ['Jabatan Terakhir', jabatanKaryawan as string],
        ]} />

        <Body>Diberikan atas dasar pelanggaran tata tertib / disiplin / target operasional sebagai berikut:</Body>
        <View style={{ borderWidth: 1, borderColor: '#c00', borderRadius: 3, padding: 8, marginBottom: 8, backgroundColor: '#fff5f5' }}>
          <Text style={[styles.bodyBold, { fontSize: 10, color: '#600' }]}>{orDash(alasanPelanggaran as string)}</Text>
        </View>

        <Body>Pihak manajemen meminta agar yang bersangkutan segera melakukan evaluasi sikap kerja dan tidak mengulangi kesalahan serupa. Apabila di kemudian hari masih ditemukan indisipliner, perusahaan berhak menempuh tindakan administrasi yang lebih keras hingga PHK.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="Diterima oleh, Karyawan," 
          name1={orDash(namaKaryawan as string)} 
          src1={undefined}
          label2="Dikeluarkan oleh, HRD,"
          name2={orDash(namaAtasan as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



