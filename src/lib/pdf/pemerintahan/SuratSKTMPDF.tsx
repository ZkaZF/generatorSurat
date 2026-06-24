import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratSKTMPDF({ formData, withWatermark = true }: Props) {
  const { namaKepalaKeluarga, nama, nik, tempatLahir, tanggalLahir, pekerjaan, alamat, keperluan, kotaSurat, tanggalSurat, namaPejabat, jabatanPejabat, tandaTangan } = formData;
  return (
    <Document title={`SKTM - ${nama || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT KETERANGAN TIDAK MAMPU (SKTM)" />
        <Body>Yang bertanda tangan di bawah ini, {orDash(jabatanPejabat as string || 'Lurah / Kepala Desa')}, dengan ini menerangkan bahwa:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', nama as string],
          ['NIK', nik as string],
          ['Tempat, Tgl Lahir', tempatLahir && tanggalLahir ? `${tempatLahir}, ${formatTanggalIndonesia(tanggalLahir as string)}` : (tempatLahir as string)],
          ['Pekerjaan', pekerjaan as string],
          ['Alamat Lengkap', alamat as string],
        ]} />
        <Body>Adalah benar warga yang bertempat tinggal di wilayah kami dan tergolong dalam keluarga prasejahtera / kurang mampu, di bawah tanggung jawab Kepala Keluarga:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8, paddingLeft: 12 }}>
          <Text style={styles.bodyBold}>{orDash(namaKepalaKeluarga as string)}</Text>
        </View>
        <Body>Surat keterangan ini diberikan atas dasar keadaan yang sebenarnya untuk dipergunakan sebagai: {orDash(keperluan as string)}.</Body>
        <Body>Demikian surat keterangan tidak mampu ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        <SigDual 
          label1="Pemohon," 
          name1={orDash(nama as string)} 
          src1={tandaTangan as string | undefined}
          label2={orDash(jabatanPejabat as string || 'Lurah / Kades,')}
          name2={orDash(namaPejabat as string)}
          src2={undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



