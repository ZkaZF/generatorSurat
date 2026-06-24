import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPernyataanBelumMenikahPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, jenisKelamin, tempatLahir, tanggalLahir, pekerjaan, agama, alamat, keperluan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Pernyataan Belum Menikah - ${nama || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERNYATAAN BELUM MENIKAH" />
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK', nik as string],
          ['Jenis Kelamin', jenisKelamin as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Agama', agama as string],
          ['Pekerjaan', pekerjaan as string],
          ['Alamat', alamat as string],
        ]} />
        <Body>Dengan ini menyatakan dengan sesungguhnya bahwa saya BELUM MENIKAH sampai dengan surat pernyataan ini dibuat.</Body>
        {keperluan && <Body>Surat pernyataan ini dibuat untuk keperluan: {keperluan as string}.</Body>}
        <Body>Demikian surat pernyataan ini saya buat dengan sebenar-benarnya. Apabila pernyataan ini tidak benar, saya bersedia menerima segala konsekuensi hukum yang berlaku.</Body>
        <Text style={[styles.rightAlign, { marginBottom: 4 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <SigRight label="Yang Menyatakan," name={orDash(nama as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



