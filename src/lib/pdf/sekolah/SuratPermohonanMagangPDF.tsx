import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, DateLine, Perihal, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPermohonanMagangPDF({ formData, withWatermark = true }: Props) {
  const {
    namaMahasiswa, nim, jurusan, namaInstitusi, noHp, email,
    namaPerusahaan, divisiTujuan, tanggalMulai, tanggalSelesai,
    kemampuan, kotaSurat, tanggalSurat, tandaTangan,
  } = formData;

  return (
    <Document title={`Surat Permohonan Magang - ${namaMahasiswa || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}

        <DateLine kotaSurat={kotaSurat as string} tanggalSurat={tanggalSurat as string} />

        {/* Addressee */}
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>HRD / Manajer SDM</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaPerusahaan as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>

        <Perihal text={`Permohonan Magang / Internship — ${orDash(divisiTujuan as string)}`} />

        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini:</Body>

        <IndentedRows rows={[
          ['Nama', namaMahasiswa as string],
          ...(nim ? [['NIM', nim as string] as [string, string]] : []),
          ['Jurusan', jurusan as string],
          ['Institusi', namaInstitusi as string],
          ['No. HP / Email', noHp && email ? `${noHp} / ${email}` : orDash((noHp || email) as string)],
        ]} />

        <Body>
          Bermaksud mengajukan permohonan magang pada divisi {orDash(divisiTujuan as string)} di {orDash(namaPerusahaan as string)}, mulai{' '}
          {tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '___'} s.d.{' '}
          {tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '___'}.
        </Body>

        {kemampuan && <Body>{kemampuan as string}</Body>}

        <Body>
          Besar harapan saya untuk dapat diterima dan memberikan kontribusi yang berarti. Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.
        </Body>

        <SigRight
          label="Hormat saya,"
          name={orDash(namaMahasiswa as string)}
          src={tandaTangan as string | undefined}
        />

        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


