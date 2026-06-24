import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../components';
import { Body, SigDual, Watermark, Footer, TitleHeader, IndentedRows, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function SuratCicilanPDF({ formData, withWatermark = true }: Props) {
  const { namaKreditur, namaDebitur, nominalHutang, alasanHutang, nominalCicilanPerBulan, jumlahTenor, tanggalJatuhTempo, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <Document title={`Cicilan Angsuran - ${namaDebitur || 'Draft'}`} author="Suratin Dong.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        <TitleHeader title="SURAT KESEPAKATAN PEMBAYARAN CICILAN" />
        <Body>Surat pernyataan komitmen pembayaran cicilan/angsuran hutang disepakati oleh:</Body>
        
        <IndentedRows rows={[
          ['PIHAK I (Kreditur)', namaKreditur as string],
          ['PIHAK II (Debitur)', namaDebitur as string],
        ]} />

        <Body>Debitur mengakui adanya kewajiban hutang yang belum lunas dan berkomitmen melakukan pelunasan dengan skema angsuran:</Body>
        <IndentedRows rows={[
          ['Hutang Pokok', nominalHutang ? `Rp ${Number(nominalHutang).toLocaleString('id-ID')}` : undefined],
          ['Keterangan Kewajiban', alasanHutang as string],
          ['Besar Angsuran / Bulan', nominalCicilanPerBulan ? `Rp ${Number(nominalCicilanPerBulan).toLocaleString('id-ID')}` : undefined],
          ['Tenor Pelunasan', jumlahTenor ? `${jumlahTenor} bulan` : undefined],
          ['Cutoff Jatuh Tempo', tanggalJatuhTempo ? `Setiap tanggal ${formatTanggalIndonesia(tanggalJatuhTempo as string).split(' ')[0]} per bulan` : undefined],
        ]} />

        <Body>Keterlambatan pembayaran cicilan dari tanggal jatuh tempo yang disepakati akan dikenakan sanksi administrasi atau langkah hukum penagihan secara kekeluargaan terlebih dahulu. Perjanjian ini dibuat secara sadar demi kenyamanan bertransaksi bersama.</Body>
        
        <Text style={[styles.rightAlign, { marginBottom: 4, marginRight: 40 }]}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
        </Text>
        
        <SigDual 
          label1="PIHAK II (Debitur)," 
          name1={orDash(namaDebitur as string)} 
          src1={tandaTanganPembeli as string | undefined}
          label2="PIHAK I (Kreditur - Meterai),"
          name2={orDash(namaKreditur as string)}
          src2={tandaTanganPenjual as string | undefined}
        />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}



