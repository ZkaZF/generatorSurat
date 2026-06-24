import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import { styles } from '../components';
import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';

interface Props {
  formData: FormData;
  withWatermark?: boolean;
}

const DataRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.dataRow}>
    <Text style={styles.dataLabel}>{label}</Text>
    <Text style={styles.dataColon}>:</Text>
    <Text style={styles.dataValue}>{value}</Text>
  </View>
);

export function SuratIzinSakitPDF({ formData, withWatermark = true }: Props) {
  const {
    namaKaryawan, jabatan, departemen, namaPerusahaan,
    tanggalMulai, tanggalSelesai, keterangan,
    kotaSurat, tanggalSurat, tandaTangan,
  } = formData;

  const hitungHari = () => {
    if (!tanggalMulai || !tanggalSelesai) return '_';
    const start = new Date(tanggalMulai as string);
    const end = new Date(tanggalSelesai as string);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return days > 0 ? `${days}` : '_';
  };

  return (
    <Document title={`Surat Izin Sakit - ${namaKaryawan || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {/* Watermark */}
        {withWatermark && (
          <View style={styles.watermarkContainer} fixed>
            <Text style={styles.watermarkText}>Suratin.id</Text>
          </View>
        )}

        {/* Location & Date */}
        <Text style={styles.rightAlign}>
          {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}
        </Text>

        {/* Addressee */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
          <Text style={{ fontSize: 10 }}>HRD / Atasan</Text>
          <Text style={[styles.bodyBold, { fontSize: 10 }]}>{orDash(namaPerusahaan as string)}</Text>
          <Text style={{ fontSize: 10 }}>di Tempat</Text>
        </View>

        {/* Subject */}
        <View style={[styles.dataRow, { marginBottom: 12 }]}>
          <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
          <Text style={styles.dataColon}>:</Text>
          <Text style={styles.dataValue}>Permohonan Izin Tidak Masuk Kerja</Text>
        </View>

        <Text style={[styles.body, { marginBottom: 8 }]}>Dengan hormat,</Text>
        <Text style={styles.body}>Saya yang bertanda tangan di bawah ini:</Text>

        <View style={styles.indented}>
          <DataRow label="Nama" value={orDash(namaKaryawan as string)} />
          <DataRow label="Jabatan" value={orDash(jabatan as string)} />
          <DataRow label="Departemen" value={orDash(departemen as string)} />
        </View>

        <Text style={styles.body}>
          bermaksud mengajukan permohonan izin tidak masuk kerja dikarenakan sakit, yaitu pada:
        </Text>

        <View style={styles.indented}>
          <DataRow label="Tanggal Mulai" value={tanggalMulai ? formatTanggalIndonesia(tanggalMulai as string) : '_______________'} />
          <DataRow label="Tanggal Selesai" value={tanggalSelesai ? formatTanggalIndonesia(tanggalSelesai as string) : '_______________'} />
          <DataRow label="Lama Izin" value={`${hitungHari()} hari`} />
        </View>

        <Text style={styles.body}>
          Adapun alasan ketidakhadiran saya adalah: &quot;{orDash(keterangan as string, 'tidak ada keterangan')}&quot;
        </Text>

        <Text style={styles.body}>
          Demikian surat izin ini saya buat dengan sebenar-benarnya. Atas perhatian dan izin yang diberikan, saya ucapkan terima kasih.
        </Text>

        {/* Signature */}
        <View style={[styles.signatureRow, { justifyContent: 'flex-end' }]}>
          <View style={styles.signatureBlock}>
            <Text style={styles.signatureLabel}>Hormat saya,</Text>
            {tandaTangan ? (
              <Image src={tandaTangan as string} style={styles.signatureImage} />
            ) : (
              <View style={styles.signatureLine} />
            )}
            <Text style={styles.signatureName}>{orDash(namaKaryawan as string)}</Text>
          </View>
        </View>

        {/* Footer watermark */}
        {withWatermark && (
          <Text style={styles.footer} fixed>
            Dibuat oleh Suratin.id — Dokumen ini merupakan salinan yang sah
          </Text>
        )}
      </Page>
    </Document>
  );
}


