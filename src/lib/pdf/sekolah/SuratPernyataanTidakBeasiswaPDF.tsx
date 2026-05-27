import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPernyataanTidakBeasiswaPDF({ formData, withWatermark = true }: Props) {
  const { namaMahasiswa, nim, jurusan, namaInstitusi, namaBeasiswaDilamar, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Pernyataan Tidak Beasiswa - ${namaMahasiswa || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.sectionTitle, { marginBottom: 2 }]}>SURAT PERNYATAAN</Text>
        <Text style={[styles.rightAlign, { fontSize: 10, marginBottom: 14 }]}>Tidak Sedang Menerima Beasiswa Lain</Text>
        <View style={{ borderBottom: '2px solid #000', marginBottom: 14 }} />
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaMahasiswa as string],
          ...(nim ? [['NIM/NIS', nim as string] as [string, string]] : []),
          ['Program Studi', jurusan as string],
          ['Institusi', namaInstitusi as string],
        ]} />
        <Body>
          Dengan ini menyatakan dengan sesungguhnya dan penuh tanggung jawab bahwa saya tidak sedang menerima beasiswa dari pihak manapun pada saat mengajukan permohonan {orDash(namaBeasiswaDilamar as string)}.
        </Body>
        <Body>
          Apabila di kemudian hari pernyataan ini terbukti tidak benar, saya bersedia menerima sanksi sesuai dengan ketentuan yang berlaku.
        </Body>
        <Body>Demikian surat pernyataan ini saya buat dengan sebenar-benarnya.</Body>
        <Text style={[styles.rightAlign, { marginBottom: 6, marginTop: 8, fontSize: 10 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigRight label="Yang Menyatakan," name={orDash(namaMahasiswa as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


