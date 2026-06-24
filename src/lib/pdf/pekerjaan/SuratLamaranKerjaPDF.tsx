import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { DR, Body, DateLine, Addressee, Perihal, SigRight, Watermark, Footer, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratLamaranKerjaPDF({ formData, withWatermark = true }: Props) {
  const { namaPelamar, tempatLahir, tanggalLahir, alamat, noHp, email, pendidikanTerakhir, jurusan, namaPerusahaan, posisiDilamar, sumberInfo, motivasi, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Surat Lamaran Kerja - ${namaPelamar || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <DateLine kotaSurat={kotaSurat as string} tanggalSurat={tanggalSurat as string} />
        <Addressee lines={['Kepada Yth.', 'HRD / Manajer Rekrutmen', orDash(namaPerusahaan as string), 'di Tempat']} />
        <Perihal text={`Lamaran Pekerjaan sebagai ${orDash(posisiDilamar as string)}`} />
        <Body>Dengan hormat,</Body>
        <Body>Saya yang bertanda tangan di bawah ini mengajukan lamaran pekerjaan untuk posisi {orDash(posisiDilamar as string)} yang saya ketahui melalui {orDash(sumberInfo as string, 'informasi yang tersedia')}.</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', namaPelamar as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Pendidikan', pendidikanTerakhir ? `${pendidikanTerakhir}${jurusan ? ` — ${jurusan}` : ''}` : undefined],
          ['Alamat', alamat as string],
          ['No. HP / Email', noHp && email ? `${noHp} / ${email}` : (noHp as string)],
        ]} />
        {motivasi && <Body>{motivasi as string}</Body>}
        <Body>Bersama surat ini saya lampirkan dokumen pendukung. Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.</Body>
        <SigRight label="Hormat saya," name={orDash(namaPelamar as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



