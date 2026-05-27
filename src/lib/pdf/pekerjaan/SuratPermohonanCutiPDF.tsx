import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPermohonanCutiPDF({ formData, withWatermark = true }: Props) {
  const { namaKaryawan, nikKaryawan, jabatanKaryawan, divisiKaryawan, jenisCuti, tanggalMulaiCuti, tanggalSelesaiCuti, jumlahHari, alasanCuti, namaBackupKaryawan, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <Document title={`Cuti - ${namaKaryawan || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERMOHONAN CUTI KARYAWAN" />
        
        <Text style={{ fontSize: 10, textAlign: 'left', marginBottom: 12 }}>
          Kepada Yth,{"\n"}
          <Text style={styles.bodyBold}>HRD / Pimpinan Manajemen</Text>{"\n"}
          Di tempat
        </Text>
        
        <Body>Dengan hormat, saya yang bertanda tangan di bawah ini:</Body>
        <IndentedRows rows={[
          ['Nama Lengkap', namaKaryawan as string],
          ['NIK / ID Staff', nikKaryawan as string],
          ['Jabatan / Divisi', jabatanKaryawan && divisiKaryawan ? `${jabatanKaryawan} / ${divisiKaryawan}` : (jabatanKaryawan as string)],
        ]} />

        <Body>Mengajukan permohonan izin cuti kerja dengan rincian pelaksana tugas:</Body>
        <IndentedRows rows={[
          ['Jenis Cuti', jenisCuti as string],
          ['Jumlah Hari Cuti', jumlahHari ? `${jumlahHari} hari kerja` : undefined],
          ['Waktu Cuti', tanggalMulaiCuti && tanggalSelesaiCuti ? `${formatTanggalIndonesia(tanggalMulaiCuti as string)} s.d. ${formatTanggalIndonesia(tanggalSelesaiCuti as string)}` : undefined],
          ['Alasan Cuti', alasanCuti as string],
          ['Backup Personel', namaBackupKaryawan ? `Tugas dibackup oleh ${namaBackupKaryawan}` : undefined],
        ]} />

        <Body>Demikian surat permohonan cuti ini saya ajukan secara formal. Atas pertimbangan, perhatian, serta persetujuan Bapak/Ibu pimpinan, saya ucapkan terima kasih.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="Menyetujui, HRD / Atasan" 
          name1="( _________________ )" 
          src1={undefined}
          label2="Hormat saya, Pemohon,"
          name2={orDash(namaKaryawan as string)}
          src2={tandaTangan as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


