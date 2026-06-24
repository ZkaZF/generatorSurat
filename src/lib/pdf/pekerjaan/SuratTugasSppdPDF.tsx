import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratTugasSPPDPDF({ formData, withWatermark = true }: Props) {
  const { namaPerusahaan, namaPemberiTugas, jabatanPemberiTugas, namaKaryawan, nikKaryawan, jabatanKaryawan, maksudPerjalanan, lokasiTujuan, tanggalMulaiDinas, tanggalSelesaiDinas, kotaSurat, tanggalSurat } = formData;
  return (
    <Document title={`Surat Tugas - ${namaKaryawan || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title={orDash(namaPerusahaan as string).toUpperCase()} sub="SURAT PERINTAH PERJALANAN DINAS (SPPD)" />
        
        <Body>Diberikan wewenang penuh kepada staf di bawah ini untuk mengemban tugas dinas luar kota:</Body>
        <IndentedRows rows={[
          ['Nama Karyawan', namaKaryawan as string],
          ['NIK / ID Staff', nikKaryawan as string],
          ['Jabatan Resmi', jabatanKaryawan as string],
        ]} />

        <Body>Detail penugasan, lokasi, serta rentang masa tugas perjalanan dinas diatur sebagai berikut:</Body>
        <IndentedRows rows={[
          ['Maksud Dinas', maksudPerjalanan as string],
          ['Kota Tujuan', lokasiTujuan as string],
          ['Masa Dinas', tanggalMulaiDinas && tanggalSelesaiDinas ? `${formatTanggalIndonesia(tanggalMulaiDinas as string)} s.d. ${formatTanggalIndonesia(tanggalSelesaiDinas as string)}` : undefined],
        ]} />

        <Body>Seluruh instansi, mitra bisnis, dan perwakilan kantor cabang di lokasi tujuan dimohon memberikan bantuan serta fasilitas operasional yang diperlukan agar penugasan dinas ini berjalan dengan lancar.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigRight 
          label={`Pemberi Tugas, ${orDash(namaPerusahaan as string)}`} 
          name={orDash(namaPemberiTugas as string)} 
          src={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



