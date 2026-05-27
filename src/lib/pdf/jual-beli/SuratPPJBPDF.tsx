import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratPPJBPDF({ formData, withWatermark = true }: Props) {
  const { namaPenjual, nikPenjual, namaPembeli, nikPembeli, deskripsiProperti, hargaTotal, uangMuka, sisaPembayaran, jumlahTenor, batasPelunasan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`PPJB - ${namaPembeli || 'Draft'}`} author="SuratOtomatis.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN PENGIKATAN JUAL BELI (PPJB)" />
        <Body>Perjanjian Pengikatan Jual Beli ini disepakati oleh:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Penjual)', namaPenjual as string],
          ['NIK Penjual', nikPenjual as string],
          ['PIHAK II (Pembeli)', namaPembeli as string],
          ['NIK Pembeli', nikPembeli as string],
        ]} />

        <Body>Kedua belah pihak sepakat mengikatkan diri dalam PPJB atas objek properti berikut:</Body>
        <View style={{ borderWidth: 1, borderColor: '#666', borderRadius: 3, padding: 8, marginBottom: 8 }}>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(deskripsiProperti as string)}</Text>
        </View>

        <IndentedRows rows={[
          ['Harga Jual Total', hargaTotal ? `Rp ${Number(hargaTotal).toLocaleString('id-ID')}` : undefined],
          ['Uang Muka (DP)', uangMuka ? `Rp ${Number(uangMuka).toLocaleString('id-ID')}` : undefined],
          ['Sisa Pelunasan', sisaPembayaran ? `Rp ${Number(sisaPembayaran).toLocaleString('id-ID')}` : undefined],
          ['Tenor Angsuran', jumlahTenor ? `${jumlahTenor} kali / bulan` : undefined],
          ['Batas Pelunasan', batasPelunasan ? formatTanggalIndonesia(batasPelunasan as string) : undefined],
        ]} />

        <Body>Apabila terjadi pembatalan sepihak dari Pembeli, maka uang muka yang telah dibayarkan akan hangus atau dipotong sesuai kesepakatan. Hak kepemilikan penuh properti baru akan dipindahkan lewat Akta Jual Beli (AJB) Notaris setelah pelunasan selesai.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Pembeli)," 
          name1={orDash(namaPembeli as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Penjual - Meterai),"
          name2={orDash(namaPenjual as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


