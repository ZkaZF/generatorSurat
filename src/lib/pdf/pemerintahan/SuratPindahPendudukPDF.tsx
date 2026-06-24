import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPindahPendudukPDF({ formData, withWatermark = true }: Props) {
  const { namaKepalaKeluarga, nama, nik, alamatAsal, alamatTujuan, alasanPindah, jumlahPengikut, kotaSurat, tanggalSurat, namaPejabat, tandaTangan } = formData;
  return (
    <Document title={`Pindah Penduduk - ${nama || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PENGANTAR PINDAH PENDUDUK" />
        <Body>Yang bertanda tangan di bawah ini, menerangkan bahwa warga di bawah ini mengajukan pindah domisili kependudukan:</Body>
        <IndentedRows rows={[
          ['Nama Pemohon', nama as string],
          ['NIK Pemohon', nik as string],
          ['Kepala Keluarga', namaKepalaKeluarga as string],
          ['Alamat Asal', alamatAsal as string],
        ]} />
        <Body>Adapun data daerah tujuan pemindahan kependudukan adalah sebagai berikut:</Body>
        <IndentedRows rows={[
          ['Alamat Tujuan', alamatTujuan as string],
          ['Alasan Pindah', alasanPindah as string],
          ['Jumlah Pengikut', jumlahPengikut ? `${jumlahPengikut} orang` : undefined],
        ]} />
        <Body>Seluruh berkas administrasi pendukung kependudukan asal telah dinyatakan dicabut dari database RT/RW setempat untuk dipindahkan ke daerah baru.</Body>
        <Body>Demikian surat pengantar pindah ini dibuat agar dapat dipergunakan untuk mengurus kepindahan di kantor Dukcapil daerah tujuan.</Body>
        
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



