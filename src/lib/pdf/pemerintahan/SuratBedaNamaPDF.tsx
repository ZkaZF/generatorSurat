import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratBedaNamaPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, alamat, namaDokumen1, namaDiDokumen1, namaDokumen2, namaDiDokumen2, alasan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Beda Nama - ${nama || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERNYATAAN BEDA NAMA" />
        <Body>Yang bertanda tangan di bawah ini, menyatakan identitas diri saya:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK', nik as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Alamat Lengkap', alamat as string],
        ]} />
        <Body>Dengan ini menyatakan dengan sesungguhnya bahwa nama yang tertera pada dokumen-dokumen resmi berikut:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8, paddingLeft: 12 }}>
          <View style={{ flexDirection: 'row', marginBottom: 2 }}>
            <Text style={{ width: 140, fontSize: 10 }}>1. {orDash(namaDokumen1 as string)}</Text>
            <Text style={{ width: 16, fontSize: 10 }}>:</Text>
            <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaDiDokumen1 as string)}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: 140, fontSize: 10 }}>2. {orDash(namaDokumen2 as string)}</Text>
            <Text style={{ width: 16, fontSize: 10 }}>:</Text>
            <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaDiDokumen2 as string)}</Text>
          </View>
        </View>
        <Body>Adalah benar merupakan satu orang yang sama (yaitu diri saya sendiri). Perbedaan ejaan atau penulisan nama tersebut disebabkan oleh: {orDash(alasan as string)}.</Body>
        <Body>Demikian surat pernyataan beda nama ini saya buat dengan sadar tanpa paksaan dari pihak mana pun, dan bersedia bertanggung jawab secara hukum atas kebenarannya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginTop: 16 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigRight label="Yang Menyatakan," name={orDash(nama as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



