import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratDomisiliPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, pekerjaan, alamatKTP, alamatDomisili, rtRw, kelurahan, keperluan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Pernyataan Domisili - ${nama || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERNYATAAN DOMISILI" />
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK', nik as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Pekerjaan', pekerjaan as string],
          ['Alamat KTP', alamatKTP as string],
        ]} />
        <Body>Menyatakan dengan sesungguhnya bahwa saat ini saya berdomisili di:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8 }}>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(alamatDomisili as string)}</Text>
          {(rtRw || kelurahan) && <Text style={styles.body}>{[rtRw, kelurahan].filter(Boolean).join(', ')}</Text>}
        </View>
        {keperluan && <Body>Surat ini dibuat untuk keperluan: {keperluan as string}.</Body>}
        <Body>Demikian surat pernyataan domisili ini saya buat dengan sebenar-benarnya untuk dipergunakan sebagaimana mestinya.</Body>
        <Text style={[styles.rightAlign, { marginBottom: 4 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <SigRight label="Yang Menyatakan," name={orDash(nama as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


