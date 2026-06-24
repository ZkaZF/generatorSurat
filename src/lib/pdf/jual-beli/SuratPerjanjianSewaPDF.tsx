import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, ThinLine, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPerjanjianSewaPDF({ formData, withWatermark = true }: Props) {
  const { namaPemilik, nikPemilik, alamatPemilik, namaPenyewa, nikPenyewa, alamatPenyewa, alamatProperti, jenisProperti, hargaSewa, periodeSewa, tanggalMulaiSewa, tanggalAkhirSewa, uangDeposit, kotaSurat, tanggalSurat, tandaTanganPemberi, tandaTanganPenerima } = formData;
  const dateStr = `${orDash(kotaSurat as string)}, ${tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}`;
  return (
    <Document title="Surat Perjanjian Sewa Menyewa" author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN SEWA MENYEWA" />
        <Body>Perjanjian ini dibuat di {orDash(kotaSurat as string)} pada {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, antara:</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>PIHAK PERTAMA (Pemilik):</Text>
        <IndentedRows rows={[['Nama', namaPemilik as string], ['NIK', nikPemilik as string], ['Alamat', alamatPemilik as string]]} />
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>PIHAK KEDUA (Penyewa):</Text>
        <IndentedRows rows={[['Nama', namaPenyewa as string], ['NIK', nikPenyewa as string], ['Alamat', alamatPenyewa as string]]} />
        <ThinLine />
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>Pasal 1 — Objek Sewa</Text>
        <Body>Pihak Pertama menyewakan kepada Pihak Kedua sebuah {orDash(jenisProperti as string)} yang berlokasi di: {orDash(alamatProperti as string)}.</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>Pasal 2 — Masa & Harga Sewa</Text>
        <Body>Masa sewa: {tanggalMulaiSewa ? formatTanggalIndonesia(tanggalMulaiSewa as string) : '___'} s.d. {tanggalAkhirSewa ? formatTanggalIndonesia(tanggalAkhirSewa as string) : '___'}. Harga sewa: Rp {orDash(hargaSewa as string)} ({orDash(periodeSewa as string)}).{uangDeposit ? ` Uang deposit: Rp ${uangDeposit}.` : ''}</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>Pasal 3 — Kewajiban & Larangan</Text>
        <Body>Pihak Kedua wajib menjaga kondisi properti dan dilarang menyewakan kembali tanpa izin tertulis Pihak Pertama.</Body>
        <SigDual label1="Pihak Pertama," name1={orDash(namaPemilik as string)} src1={tandaTanganPemberi as string | undefined} label2="Pihak Kedua," name2={orDash(namaPenyewa as string)} src2={tandaTanganPenerima as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



