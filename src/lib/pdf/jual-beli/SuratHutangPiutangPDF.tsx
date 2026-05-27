import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, ThinLine, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratHutangPiutangPDF({ formData, withWatermark = true }: Props) {
  const { namaPemberiPinjaman, nikPemberi, namaPeminjam, nikPeminjam, alamatPeminjam, jumlahPinjaman, bungaPerBulan, lamaPinjaman, caraPembayaran, jaminan, kotaSurat, tanggalSurat, tandaTanganPemberi, tandaTanganPenerima } = formData;
  return (
    <Document title="Surat Perjanjian Hutang Piutang" author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN HUTANG PIUTANG" />
        <Body>Perjanjian ini dibuat di {orDash(kotaSurat as string)} pada {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, antara:</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>PIHAK PERTAMA (Pemberi Pinjaman / Kreditur):</Text>
        <IndentedRows rows={[['Nama', namaPemberiPinjaman as string], ['NIK', nikPemberi as string]]} />
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>PIHAK KEDUA (Peminjam / Debitur):</Text>
        <IndentedRows rows={[['Nama', namaPeminjam as string], ['NIK', nikPeminjam as string], ['Alamat', alamatPeminjam as string]]} />
        <ThinLine />
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>Pasal 1 — Jumlah Pinjaman</Text>
        <Body>Pihak Pertama meminjamkan kepada Pihak Kedua sejumlah Rp {orDash(jumlahPinjaman as string)} dengan jangka waktu {orDash(lamaPinjaman as string)}.</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>Pasal 2 — Bunga & Cara Pembayaran</Text>
        <Body>Bunga: {bungaPerBulan && bungaPerBulan !== '0' ? `${bungaPerBulan}% per bulan` : 'Tanpa bunga'}. Pembayaran dilakukan secara {orDash(caraPembayaran as string)}.{jaminan ? ` Jaminan: ${jaminan}.` : ''}</Body>
        <Text style={[styles.bodyBold, { fontSize: 10, marginBottom: 3 }]}>Pasal 3 — Wanprestasi</Text>
        <Body>Apabila Pihak Kedua tidak memenuhi kewajiban sesuai perjanjian, Pihak Pertama berhak menagih seluruh sisa hutang beserta denda yang disepakati.</Body>
        <SigDual label1="Pemberi Pinjaman," name1={orDash(namaPemberiPinjaman as string)} src1={tandaTanganPemberi as string | undefined} label2="Peminjam," name2={orDash(namaPeminjam as string)} src2={tandaTanganPenerima as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


