import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratFreelancePDF({ formData, withWatermark = true }: Props) {
  const { namaKlien, namaFreelancer, alamatFreelancer, namaProject, hargaJasaTotal, uangMuka, sisaPelunasan, jumlahRevisi, batasWaktuProject, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Kontrak Freelance - ${namaFreelancer || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT KONTRAK KERJA SAMA JASA (FREELANCE)" />
        <Body>Surat perjanjian kerja sama jasa/freelance ini disepakati oleh:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Klien)', namaKlien as string],
          ['PIHAK II (Freelancer)', namaFreelancer as string],
          ['Alamat Freelancer', alamatFreelancer as string],
        ]} />

        <Body>Menyetujui pengerjaan project/jasa dengan rincian klausul kerja sebagai berikut:</Body>
        <IndentedRows rows={[
          ['Nama / Detail Project', namaProject as string],
          ['Harga Jasa Total', hargaJasaTotal ? `Rp ${Number(hargaJasaTotal).toLocaleString('id-ID')}` : undefined],
          ['Uang Muka / DP', uangMuka ? `Rp ${Number(uangMuka).toLocaleString('id-ID')}` : undefined],
          ['Sisa Pelunasan', sisaPelunasan ? `Rp ${Number(sisaPelunasan).toLocaleString('id-ID')}` : undefined],
          ['Jumlah Max Revisi', jumlahRevisi ? `${jumlahRevisi} kali` : undefined],
          ['Batas Pengiriman (DL)', batasWaktuProject ? formatTanggalIndonesia(batasWaktuProject as string) : undefined],
        ]} />

        <Body>Pekerjaan akan dimulai setelah Pihak I membayarkan Uang Muka (DP). Pelunasan sisa biaya jasa wajib ditransfer maksimal 3 hari setelah project diserahkan final dan disetujui bersama. Hak cipta hasil karya berpindah penuh setelah pelunasan selesai.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK I (Klien)," 
          name1={orDash(namaKlien as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK II (Freelancer),"
          name2={orDash(namaFreelancer as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


