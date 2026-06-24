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

export function SuratKuasaPDF({ formData, withWatermark = false }: Props) {
  const {
    namaPemberi, nikPemberi, tempatLahirPemberi, tanggalLahirPemberi,
    alamatPemberi, pekerjaanPemberi,
    namaPenerima, nikPenerima, tempatLahirPenerima, tanggalLahirPenerima,
    alamatPenerima, pekerjaanPenerima,
    perihalKuasa, isiKuasa, kotaSurat, tanggalSurat,
    tandaTanganPemberi, tandaTanganPenerima,
  } = formData;

  const PERIHAL_LABELS: Record<string, string> = {
    'pengambilan-bpkb': 'Pengambilan BPKB',
    'pengurusan-bpkb': 'Pengurusan BPKB',
    'balik-nama-bpkb': 'Balik Nama BPKB',
    'pengambilan-dokumen': 'Pengambilan Dokumen',
    'lainnya': 'Lainnya',
  };

  return (
    <Document title={`Surat Kuasa - ${namaPemberi || 'Draft'}`} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && (
          <View style={styles.watermarkContainer} fixed>
            <Text style={styles.watermarkText}>Suratin.id</Text>
          </View>
        )}

        {/* Header */}
        <View style={styles.headerDivider}>
          <Text style={styles.sectionTitle}>Surat Kuasa</Text>
          {perihalKuasa && (
            <Text style={styles.subTitle}>{PERIHAL_LABELS[perihalKuasa as string] || (perihalKuasa as string)}</Text>
          )}
        </View>

        <Text style={styles.body}>Yang bertanda tangan di bawah ini:</Text>

        {/* Pemberi Kuasa */}
        <View style={styles.indented}>
          <DataRow label="Nama" value={orDash(namaPemberi as string)} />
          <DataRow label="NIK" value={orDash(nikPemberi as string)} />
          <DataRow label="Tempat/Tgl Lahir" value={
            tempatLahirPemberi && tanggalLahirPemberi
              ? `${tempatLahirPemberi}, ${formatTanggalIndonesia(tanggalLahirPemberi as string)}`
              : '_____________'
          } />
          <DataRow label="Alamat" value={orDash(alamatPemberi as string)} />
          <DataRow label="Pekerjaan" value={orDash(pekerjaanPemberi as string)} />
        </View>

        <Text style={styles.body}>
          selanjutnya disebut sebagai <Text style={styles.bodyBold}>PEMBERI KUASA</Text>.
        </Text>

        <Text style={styles.body}>Dengan ini memberikan kuasa kepada:</Text>

        {/* Penerima Kuasa */}
        <View style={styles.indented}>
          <DataRow label="Nama" value={orDash(namaPenerima as string)} />
          <DataRow label="NIK" value={orDash(nikPenerima as string)} />
          <DataRow label="Tempat/Tgl Lahir" value={
            tempatLahirPenerima && tanggalLahirPenerima
              ? `${tempatLahirPenerima}, ${formatTanggalIndonesia(tanggalLahirPenerima as string)}`
              : '_____________'
          } />
          <DataRow label="Alamat" value={orDash(alamatPenerima as string)} />
          <DataRow label="Pekerjaan" value={orDash(pekerjaanPenerima as string)} />
        </View>

        <Text style={styles.body}>
          selanjutnya disebut sebagai <Text style={styles.bodyBold}>PENERIMA KUASA</Text>.
        </Text>

        <Text style={styles.body}>
          Untuk melakukan: <Text style={{ fontStyle: 'italic' }}>{orDash(isiKuasa as string, 'mengurus keperluan yang tersebut di atas')}</Text>
        </Text>

        <Text style={styles.body}>
          Demikian surat kuasa ini dibuat dengan sebenar-benarnya untuk dapat dipergunakan sebagaimana mestinya di {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}.
        </Text>

        {/* Dual Signatures */}
        <View style={styles.signatureRow}>
          <View style={styles.signatureBlock}>
            <Text style={styles.signatureLabel}>Pemberi Kuasa</Text>
            {tandaTanganPemberi ? (
              <Image src={tandaTanganPemberi as string} style={styles.signatureImage} />
            ) : (
              <View style={styles.signatureLine} />
            )}
            <Text style={styles.signatureName}>{orDash(namaPemberi as string, '_____________')}</Text>
          </View>
          <View style={styles.signatureBlock}>
            <Text style={styles.signatureLabel}>Penerima Kuasa</Text>
            {tandaTanganPenerima ? (
              <Image src={tandaTanganPenerima as string} style={styles.signatureImage} />
            ) : (
              <View style={styles.signatureLine} />
            )}
            <Text style={styles.signatureName}>{orDash(namaPenerima as string, '_____________')}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}


