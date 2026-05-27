import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPKWTTPDF({ formData, withWatermark = true }: Props) {
  const { namaPerusahaan, namaPenanggungJawab, jabatanPenanggungJawab, namaKaryawan, nikKaryawan, alamatKaryawan, jabatanKaryawan, tanggalMulaiBekerja, gajiPokok, tunjanganBulanan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`PKWTT - ${namaKaryawan || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="PERJANJIAN KERJA WAKTU TIDAK TENTU (PKWTT)" />
        <Body>Kesepakatan pengangkatan karyawan tetap PKWTT disetujui bersama oleh para pihak:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Perusahaan)', namaPerusahaan as string],
          ['Penanggung Jawab', `${namaPenanggungJawab as string} (${jabatanPenanggungJawab as string})`],
          ['PIHAK II (Karyawan)', namaKaryawan as string],
          ['NIK Karyawan', nikKaryawan as string],
          ['Alamat Karyawan', alamatKaryawan as string],
        ]} />

        <Body>Kedua belah pihak sepakat mengikatkan diri dalam kontrak kerja tetap dengan ketentuan:</Body>
        <IndentedRows rows={[
          ['Jabatan Karyawan', jabatanKaryawan as string],
          ['Mulai Efektif Kerja', tanggalMulaiBekerja ? `${formatTanggalIndonesia(tanggalMulaiBekerja as string)} (Status Karyawan Tetap)` : undefined],
          ['Gaji Pokok Bulanan', gajiPokok ? `Rp ${Number(gajiPokok).toLocaleString('id-ID')}` : undefined],
          ['Tunjangan Bulanan', tunjanganBulanan ? `Rp ${Number(tunjanganBulanan).toLocaleString('id-ID')}` : undefined],
        ]} />

        <Body>Pihak II bersedia mematuhi seluruh tata tertib, hak rahasia dagang, serta target Key Performance Indicator (KPI) Perusahaan. Kontrak PKWTT ini berlaku efektif tanpa batasan waktu purna tugas kecuali dibubarkan secara hukum kesepakatan tripartit.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Karyawan)," 
          name1={orDash(namaKaryawan as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Perusahaan - Meterai),"
          name2={orDash(namaPenanggungJawab as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


