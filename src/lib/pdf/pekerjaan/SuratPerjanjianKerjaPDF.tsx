import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, ThinLine, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPerjanjianKerjaPDF({ formData, withWatermark = true }: Props) {
  const { namaPerusahaan, namaWakil, jabatanWakil, alamatPerusahaan, namaKaryawan, nikKaryawan, alamatKaryawan, posisi, departemen, tanggalMulai, tanggalBerakhir, gajiPokok, tunjanganLain, jamKerja, kotaSurat, tanggalSurat, tandaTanganPemberi, tandaTanganPenerima } = formData;
  return (
    <Document title={`PKWT - ${namaKaryawan || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN KERJA WAKTU TERTENTU" sub="(PKWT)" />
        <Body>Perjanjian ini dibuat dan ditandatangani di {orDash(kotaSurat as string)} pada {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, oleh dan antara:</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 4 }]}>PIHAK PERTAMA (Pemberi Kerja):</Text>
        <IndentedRows rows={[['Perusahaan', namaPerusahaan as string], ['Diwakili', `${orDash(namaWakil as string)} (${orDash(jabatanWakil as string)})`], ['Alamat', alamatPerusahaan as string]]} />
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 4 }]}>PIHAK KEDUA (Karyawan):</Text>
        <IndentedRows rows={[['Nama', namaKaryawan as string], ['NIK', nikKaryawan as string], ['Alamat', alamatKaryawan as string], ['Jabatan', posisi ? `${posisi}${departemen ? ` / ${departemen}` : ''}` : undefined]]} />
        <ThinLine />
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 4 }]}>Pasal 1 — Masa Kerja</Text>
        <Body>PKWT ini berlaku mulai {tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'} s.d. {tanggalBerakhir ? formatTanggalIndonesia(tanggalBerakhir as string) : '___'}.{jamKerja ? ` Jam kerja: ${jamKerja}.` : ''}</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 4 }]}>Pasal 2 — Kompensasi</Text>
        <Body>Gaji pokok: Rp {orDash(gajiPokok as string)}/bulan.{tunjanganLain ? ` Tunjangan: Rp ${tunjanganLain}/bulan.` : ''}</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 4 }]}>Pasal 3 — Ketentuan Lain</Text>
        <Body>Perjanjian ini mengikat kedua belah pihak dan hanya dapat diubah atas persetujuan tertulis bersama.</Body>
        <SigDual label1="Pihak Pertama," name1={orDash(namaWakil as string)} src1={tandaTanganPemberi as string | undefined} label2="Pihak Kedua," name2={orDash(namaKaryawan as string)} src2={tandaTanganPenerima as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


