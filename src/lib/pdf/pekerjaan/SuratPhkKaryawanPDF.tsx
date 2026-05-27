import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPHKKaryawanPDF({ formData, withWatermark = true }: Props) {
  const { namaPerusahaan, namaAtasan, jabatanAtasan, namaKaryawan, nikKaryawan, jabatanKaryawan, alasanPHK, tanggalEfektifPHK, uangPesangon, kotaSurat, tanggalSurat } = formData;
  return (
    <Document title={`PHK Karyawan - ${namaKaryawan || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title={orDash(namaPerusahaan as string).toUpperCase()} sub="SURAT KEPUTUSAN DIREKSI / MANAJEMEN" />
        
        <View style={{ alignItems: 'center', marginVertical: 8 }}>
          <Text style={[styles.bodyBold, { fontSize: 12, letterSpacing: 0.8 }]}>
            SURAT PEMUTUSAN HUBUNGAN KERJA (PHK)
          </Text>
        </View>

        <Body>Dengan ini memberitahukan keputusan pemutusan hubungan kerja kepada:</Body>
        <IndentedRows rows={[
          ['Nama Karyawan', namaKaryawan as string],
          ['NIK / ID Staff', nikKaryawan as string],
          ['Jabatan Terakhir', jabatanKaryawan as string],
        ]} />

        <Body>Langkah PHK ini diambil oleh jajaran manajemen atas pertimbangan:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8 }}>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(alasanPHK as string)}</Text>
        </View>

        <IndentedRows rows={[
          ['Tanggal Efektif PHK', tanggalEfektifPHK ? formatTanggalIndonesia(tanggalEfektifPHK as string) : undefined],
          ['Hak Sisa / Pesangon', uangPesangon ? `Rp ${Number(uangPesangon).toLocaleString('id-ID')}` : undefined],
        ]} />

        <Body>Perusahaan mengucapkan terima kasih sebesar-besarnya atas segala kontribusi dan dedikasi yang telah diberikan selama menjadi bagian dari staf kerja kami. Surat pengalaman kerja formal akan dilampirkan terpisah.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="Diterima oleh, Karyawan," 
          name1={orDash(namaKaryawan as string)} 
          src1={undefined}
          label2="Dikeluarkan oleh, Direksi,"
          name2={orDash(namaAtasan as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


