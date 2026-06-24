import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratSPTJMPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, pekerjaan, alamat, pernyataan, keperluan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`SPTJM - ${nama || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK" sub="(SPTJM)" />
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK', nik as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Pekerjaan', pekerjaan as string],
          ['Alamat', alamat as string],
        ]} />
        <Body>Dengan ini menyatakan dengan penuh tanggung jawab bahwa:</Body>
        <View style={{ borderWidth: 1.5, borderColor: '#333', borderRadius: 3, padding: 10, marginBottom: 8 }}>
          <Text style={styles.body}>{orDash(pernyataan as string, 'Isi pernyataan belum dimasukkan.')}</Text>
        </View>
        {keperluan && <Body>Keperluan: {keperluan as string}.</Body>}
        <Body>Demikian pernyataan ini saya buat dengan penuh kesadaran dan rasa tanggung jawab. Apabila dikemudian hari pernyataan ini tidak benar, saya siap menerima sanksi sesuai ketentuan peraturan perundang-undangan yang berlaku.</Body>
        <Text style={[styles.rightAlign, { marginBottom: 4 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <SigRight label="Yang Menyatakan,\n(di atas materai)" name={orDash(nama as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



