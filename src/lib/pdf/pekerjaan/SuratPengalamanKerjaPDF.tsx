import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPengalamanKerjaPDF({ formData, withWatermark = true }: Props) {
  const { namaPerusahaan, namaAtasan, jabatanAtasan, namaKaryawan, nikKaryawan, jabatanTerakhir, tanggalMulaiKerja, tanggalSelesaiKerja, prestasiKontribusi, kotaSurat, tanggalSurat } = formData;
  return (
    <Document title={`Paklaring - ${namaKaryawan || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title={orDash(namaPerusahaan as string).toUpperCase()} sub="SURAT KETERANGAN PENGALAMAN KERJA" />
        
        <Body mb={12}>Menerangkan dengan sebenarnya bahwa mantan karyawan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', namaKaryawan as string],
          ['NIK / No. KTP', nikKaryawan as string],
          ['Jabatan Terakhir', jabatanTerakhir as string],
          ['Masa Kerja', tanggalMulaiKerja && tanggalSelesaiKerja ? `${formatTanggalIndonesia(tanggalMulaiKerja as string)} s.d. ${formatTanggalIndonesia(tanggalSelesaiKerja as string)}` : undefined],
        ]} />

        <Body>Adalah benar pernah bekerja di {orDash(namaPerusahaan as string)} dalam kurun waktu tersebut di atas. Selama mengabdikan dirinya di perusahaan kami, yang bersangkutan menunjukkan kontribusi dan kompetensi:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8 }}>
          <Text style={styles.bodyBold}>{orDash(prestasiKontribusi as string)}</Text>
        </View>

        <Body>Kami mengucapkan terima kasih sebesar-besarnya atas pengabdian dan kerja keras yang telah didedikasikan kepada perusahaan. Semoga sukses dalam karir di masa depan.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigRight 
          label={orDash(namaPerusahaan as string)} 
          name={orDash(namaAtasan as string)} 
          src={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



