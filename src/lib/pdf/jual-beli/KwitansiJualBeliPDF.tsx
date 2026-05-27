import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../components';
import { SigRight, Watermark, Footer, orDash, formatTanggalIndonesia } from '../pdfHelpers';
import type { FormData } from '@/lib/templates/types';

interface Props { formData: FormData; withWatermark?: boolean; }

export function KwitansiJualBeliPDF({ formData, withWatermark = true }: Props) {
  const { namaPembeli, namaPenjual, deskripsiBarang, jumlahUang, metodePembayaran, kotaSurat, tanggalSurat, tandaTangan } = formData;

  const formatNominal = (val: string | undefined) => {
    if (!val) return '_______________';
    const num = parseInt(String(val).replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? String(val) : `Rp ${num.toLocaleString('id-ID')},-`;
  };

  const DR = ({ label, value }: { label: string; value: string }) => (
    <View style={styles.dataRow}>
      <Text style={[styles.dataLabel, styles.bodyBold]}>{label}</Text>
      <Text style={styles.dataColon}>:</Text>
      <Text style={styles.dataValue}>{value}</Text>
    </View>
  );

  return (
    <Document title="Kwitansi Jual Beli" author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && <Watermark />}
        {/* Header */}
        <View style={{ alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#000', paddingBottom: 8, marginBottom: 14 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Times-Bold', letterSpacing: 2 }}>KWITANSI</Text>
          <Text style={{ fontSize: 9, color: '#666' }}>Bukti Penerimaan Pembayaran</Text>
        </View>

        {/* Info rows */}
        <View style={{ marginBottom: 12 }}>
          <DR label="Nomor" value={`__________ / ${new Date().getFullYear()}`} />
          <DR label="Tanggal" value={`${tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, ${orDash(kotaSurat as string)}`} />
          <DR label="Diterima dari" value={orDash(namaPembeli as string)} />
          <View style={styles.dataRow}>
            <Text style={[styles.dataLabel, styles.bodyBold]}>Jumlah</Text>
            <Text style={styles.dataColon}>:</Text>
            <Text style={[styles.dataValue, styles.bodyBold, { fontSize: 13 }]}>{formatNominal(jumlahUang as string)}</Text>
          </View>
          <DR label="Pembayaran" value={orDash(metodePembayaran as string)} />
        </View>

        {/* Description */}
        <Text style={[styles.bodyBold, { marginBottom: 4 }]}>Untuk Pembayaran:</Text>
        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 3, padding: 8, marginBottom: 14, minHeight: 36 }}>
          <Text style={styles.body}>{orDash(deskripsiBarang as string)}</Text>
        </View>

        <SigRight label={`Yang Menerima,\n${orDash(namaPenjual as string)}`} name={orDash(namaPenjual as string)} src={tandaTangan as string | undefined} />
        {withWatermark && <Footer />}
      </Page>
    </Document>
  );
}


