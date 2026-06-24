import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratJualBeliKendaraanPDF({ formData, withWatermark = true }: Props) {
  const { namaPenjual, nikPenjual, namaPembeli, nikPembeli, jenisKendaraan, merkTipe, tahunPembuatan, nomorPolisi, nomorRangka, nomorMesin, warna, hargaKendaraan, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Jual Beli Kendaraan - ${merkTipe || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT PERJANJIAN JUAL BELI KENDARAAN" />
        <Body>Kami yang bertanda tangan di bawah ini menerangkan transaksi jual beli kendaraan:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Penjual)', namaPenjual as string],
          ['NIK Penjual', nikPenjual as string],
          ['PIHAK II (Pembeli)', namaPembeli as string],
          ['NIK Pembeli', nikPembeli as string],
        ]} />

        <Body>Menyepakati transaksi jual beli 1 (satu) unit {orDash(jenisKendaraan as string || 'Kendaraan')} dengan rincian:</Body>
        <IndentedRows rows={[
          ['Merk / Tipe', merkTipe as string],
          ['Tahun Pembuatan', tahunPembuatan ? String(tahunPembuatan) : undefined],
          ['Nomor Polisi (Plat)', nomorPolisi as string],
          ['Nomor Rangka', nomorRangka as string],
          ['Nomor Mesin', nomorMesin as string],
          ['Warna Fisik', warna as string],
          ['Harga Penjualan', hargaKendaraan ? `Rp ${Number(hargaKendaraan).toLocaleString('id-ID')}` : undefined],
        ]} />

        <Body>Penjual menjamin kendaraan tersebut adalah hak milik sah pribadi, bebas dari tuntutan hukum, serta tidak dalam kondisi digadaikan atau disita. Surat-surat asli (BPKB dan STNK) diserahkan penuh saat pelunasan.</Body>
        
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



