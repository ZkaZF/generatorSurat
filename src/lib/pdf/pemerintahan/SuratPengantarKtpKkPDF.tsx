import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPengantarKtpKkPDF({ formData, withWatermark = true }: Props) {
  const { nama, nik, tempatLahir, tanggalLahir, jenisPermohonan, alamat, rtRw, kotaSurat, tanggalSurat, namaKetuaRT, tandaTangan } = formData;
  return (
    <Document title={`KTP_KK_Pengantar - ${nama || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PENGANTAR RT/RW (KTP & KK BARU)" />
        <Body>Menerangkan bahwa warga yang bertanda tangan di bawah ini mengajukan permohonan penerbitan KTP / KK baru:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK (Jika ada)', nik as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Alamat Lengkap', alamat as string],
        ]} />
        <Body>Adapun jenis permohonan yang diajukan adalah:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8, paddingLeft: 12, backgroundColor: '#fafafa' }}>
          <Text style={styles.bodyBold}>{orDash(jenisPermohonan as string)}</Text>
        </View>
        <Body>Yang bersangkutan adalah benar warga berdomisili tetap di wilayah {orDash(rtRw as string || 'RT / RW')} kami. Surat pengantar ini dibuat sebagai syarat pengantar utama ke tingkat kelurahan dan kantor Dukcapil setempat.</Body>
        <Body>Demikian surat pengantar ini diberikan untuk dapat dipergunakan sebagaimana mestinya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Pemohon," 
          name1={orDash(nama as string)} 
          src1={tandaTangan as string | undefined}
          label2="Ketua RT / RW,"
          name2={orDash(namaKetuaRT as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



