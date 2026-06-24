import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigRight, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratIzinKeluargaBekerjaPDF({ formData, withWatermark = true }: Props) {
  const { namaPemberiIzin, hubungan, alamatPemberiIzin, namaKaryawan, nikKaryawan, alamatKaryawan, namaPerusahaan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Izin Kerja - ${namaKaryawan || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT IZIN KELUARGA / ORANG TUA / SUAMI" />
        
        <Body>Yang bertanda tangan di bawah ini menerangkan selaku Pemberi Izin:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', namaPemberiIzin as string],
          ['Hubungan Keluarga', hubungan as string],
          ['Alamat Lengkap', alamatPemberiIzin as string],
        ]} />

        <Body>Dengan ini memberikan izin sepenuhnya kepada calon karyawan:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', namaKaryawan as string],
          ['NIK / No. KTP', nikKaryawan as string],
          ['Alamat Lengkap', alamatKaryawan as string],
        ]} />

        <Body>Untuk bekerja, melamar, dan menjalani masa penugasan shift / kerja lembur / penempatan tugas luar kota pada perusahaan: <Text style={styles.bodyBold}>{orDash(namaPerusahaan as string)}</Text>.</Body>
        <Body>Kami selaku pihak keluarga bertanggung jawab mendukung kedisiplinan dan profesionalisme yang bersangkutan selama menjalankan kewajiban tugas kerja di bawah kepengurusan manajemen.</Body>
        <Body>Demikian surat izin keluarga ini kami buat dengan sadar dan penuh kesediaan untuk digunakan sebagaimana mestinya.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigRight 
          label="Pemberi Izin (Meterai)," 
          name={orDash(namaPemberiIzin as string)} 
          src={tandaTangan as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



