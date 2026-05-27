import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPengunduranDiriSekolahPDF({ formData, withWatermark = true }: Props) {
  const { namaPemohon, nimNis, kelasJurusan, namaInstitusi, tanggalEfektif, alasanMundur, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Pengunduran Diri - ${namaPemohon || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <Text style={[styles.rightAlign, { marginBottom: 10 }]}>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>Bapak/Ibu Kepala Sekolah / Rektor</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaInstitusi as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>
        <View style={[styles.dataRow, { marginBottom: 10 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Pengunduran Diri dari Institusi Pendidikan</Text>
        </View>
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama', namaPemohon as string],
          ...(nimNis ? [['NIM/NIS', nimNis as string] as [string, string]] : []),
          ['Kelas/Prodi', kelasJurusan as string],
        ]} />
        <Body>
          Dengan ini menyatakan dengan sesungguhnya bahwa saya mengundurkan diri dari {orDash(namaInstitusi as string)}{tanggalEfektif ? ` terhitung sejak ${formatTanggalIndonesia(tanggalEfektif as string)}` : ''}, dengan alasan:
        </Body>
        <Body>{orDash(alasanMundur as string)}</Body>
        <Body>Demikian surat pengunduran diri ini saya buat dengan penuh kesadaran dan tanpa paksaan dari pihak manapun.</Body>
        <SigRight label="Hormat saya," name={orDash(namaPemohon as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


