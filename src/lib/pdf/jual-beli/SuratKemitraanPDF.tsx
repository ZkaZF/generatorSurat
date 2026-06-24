import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratKemitraanPDF({ formData, withWatermark = true }: Props) {
  const { mitra1, nikMitra1, mitra2, nikMitra2, namaUsaha, nominalModal, persentaseBagiHasilMitra1, persentaseBagiHasilMitra2, tugasTanggungJawab, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Kemitraan - ${namaUsaha || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN KEMITRAAN BISNIS" />
        <Body>Surat kesepakatan kemitraan usaha patungan modal dan bagi hasil disepakati oleh:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Pengelola)', mitra1 as string],
          ['NIK Pengelola', nikMitra1 as string],
          ['PIHAK II (Investor)', mitra2 as string],
          ['NIK Investor', nikMitra2 as string],
        ]} />

        <Body>Bakat dan modal disatukan untuk mendirikan kemitraan dengan skema:</Body>
        <IndentedRows rows={[
          ['Nama Usaha / Proyek', namaUsaha as string],
          ['Modal Awal Investasi', nominalModal ? `Rp ${Number(nominalModal).toLocaleString('id-ID')}` : undefined],
          ['Mitra Aktif (PIHAK I)', persentaseBagiHasilMitra1 ? `${persentaseBagiHasilMitra1}% keuntungan bersih` : undefined],
          ['Mitra Pasif (PIHAK II)', persentaseBagiHasilMitra2 ? `${persentaseBagiHasilMitra2}% keuntungan bersih` : undefined],
        ]} />

        <Body>Tugas pokok Mitra Aktif (PIHAK I) di lapangan meliputi:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8 }}>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(tugasTanggungJawab as string)}</Text>
        </View>

        <Body>Pembagian dividen / profit sharing disepakati dilakukan secara bulanan. Apabila usaha mengalami force majeure atau kerugian bukan karena kelalaian kriminal Pihak I, risiko kerugian modal ditanggung proporsional.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Investor)," 
          name1={orDash(mitra2 as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Pengelola - Meterai),"
          name2={orDash(mitra1 as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



