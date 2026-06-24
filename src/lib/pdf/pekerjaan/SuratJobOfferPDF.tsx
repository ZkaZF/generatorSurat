import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratJobOfferPDF({ formData, withWatermark = true }: Props) {
  const { namaPerusahaan, namaHRD, namaKandidat, posisiTawaran, gajiTawaran, tanggalMulaiOffer, batasWaktuRespon, kotaSurat, tanggalSurat } = formData;
  return (
    <Document title={`Job Offer - ${namaKandidat || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title={orDash(namaPerusahaan as string).toUpperCase()} sub="DEPARTEMEN REKRUTMEN & SDM" />
        
        <Text style={{ fontSize: 10, textAlign: 'left', marginBottom: 12 }}>
          Kepada Yth,{"\n"}
          <Text style={styles.bodyBold}>{orDash(namaKandidat as string)}</Text>{"\n"}
          Di tempat
        </Text>
        
        <Body>Dengan hormat, berdasarkan hasil tahapan seleksi rekrutmen yang telah Anda lalui, kami dengan bangga menawarkan posisi bergabung di {orDash(namaPerusahaan as string)} dengan spesifikasi penawaran:</Body>
        <IndentedRows rows={[
          ['Posisi Pekerjaan', posisiTawaran as string],
          ['Gaji Pokok / Bulan', gajiTawaran ? `Rp ${Number(gajiTawaran).toLocaleString('id-ID')}` : undefined],
          ['Tanggal Mulai Kerja', tanggalMulaiOffer ? formatTanggalIndonesia(tanggalMulaiOffer as string) : undefined],
          ['Batas Konfirmasi', batasWaktuRespon ? formatTanggalIndonesia(batasWaktuRespon as string) : undefined],
        ]} />

        <Body>Kami meyakini bahwa bakat, keahlian, serta integritas diri Anda akan membawa kontribusi berharga bagi kemajuan tim kami. Silakan memberikan respon persetujuan atas penawaran ini sebelum batas konfirmasi yang ditentukan.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="Disetujui oleh, Kandidat," 
          name1={orDash(namaKandidat as string)} 
          src1={undefined}
          label2="Hormat kami, HRD,"
          name2={orDash(namaHRD as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



