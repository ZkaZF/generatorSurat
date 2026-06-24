import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { DR, Body, DateLine, Addressee, Perihal, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPengunduranDiriPDF({ formData, withWatermark = true }: Props) {
  const { namaKaryawan, jabatan, departemen, namaPerusahaan, namaAtasan, tanggalEfektif, alasan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Surat Pengunduran Diri - ${namaKaryawan || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <DateLine kotaSurat={kotaSurat as string} tanggalSurat={tanggalSurat as string} />
        <Addressee lines={['Kepada Yth.', ...(namaAtasan ? [namaAtasan as string] : []), 'HRD / Pimpinan', orDash(namaPerusahaan as string), 'di Tempat']} />
        <Perihal text="Surat Pengunduran Diri" />
        <Body>Dengan hormat,</Body>
        <Body>Yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[['Nama', namaKaryawan as string], ['Jabatan', jabatan as string], ['Departemen', departemen as string]]} />
        <Body>Dengan ini menyatakan mengundurkan diri dari jabatan saya di {orDash(namaPerusahaan as string)} terhitung mulai tanggal {tanggalEfektif ? formatTanggalIndonesia(tanggalEfektif as string) : '_______________'}.</Body>
        <Body>Adapun alasan saya mengundurkan diri adalah: &quot;{orDash(alasan as string, 'tidak ada keterangan')}&quot;</Body>
        <Body>Saya mengucapkan terima kasih kepada seluruh manajemen dan rekan kerja atas pengalaman berharga yang telah diberikan selama ini.</Body>
        <Body>Demikian surat pengunduran diri ini saya buat dengan penuh kesadaran dan tanpa paksaan dari pihak manapun.</Body>
        <SigRight label="Hormat saya," name={orDash(namaKaryawan as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



