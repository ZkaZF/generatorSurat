import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import { styles } from './components';
import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';

interface Props {
  formData: FormData;
  withWatermark?: boolean;
  title: string;
  subtitle?: string;
  isFormal?: boolean;
}

const DataRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.dataRow}>
    <Text style={styles.dataLabel}>{label}</Text>
    <Text style={styles.dataColon}>:</Text>
    <Text style={styles.dataValue}>{value}</Text>
  </View>
);

export function GenericLetterPDF({ formData, withWatermark = true, title, subtitle, isFormal = false }: Props) {
  const { kotaSurat, tanggalSurat, tandaTangan, tandaTanganPemberi, tandaTanganPenerima } = formData;

  const dateStr = `${orDash(kotaSurat as string)}, ${tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}`;

  // Pick signature name smartly
  const sig1Name = orDash((formData.nama || formData.namaPelamar || formData.namaMahasiswa || formData.namaKaryawan || formData.namaPemberiHibah || formData.namaPemberiPinjaman || formData.namaPemilik || formData.namaOrangTua || formData.namaPemberiRekom || '') as string);
  const sig2Name = orDash((formData.namaPenerimaHibah || formData.namaPeminjam || formData.namaPenyewa || formData.namaKaryawan || '') as string);

  const sig1Src = (tandaTangan || tandaTanganPemberi) as string | undefined;
  const sig2Src = tandaTanganPenerima as string | undefined;
  const hasDualSig = !!sig2Src;

  // Build addressee block
  const namaInstansi = (formData.namaPerusahaan || formData.instansi || formData.lembagaBeasiswa || formData.namaInstitusi || '') as string;

  // Separate fields into identity rows vs content
  const SKIP = new Set(['kotaSurat', 'tanggalSurat', 'tandaTangan', 'tandaTanganPemberi', 'tandaTanganPenerima', 'motivasi', 'kemampuan', 'penilaian', 'pernyataan', 'isiKuasa', 'keterangan', 'objekHibah', 'alasan']);
  const TEXTAREA_KEYS = ['motivasi', 'kemampuan', 'penilaian', 'pernyataan', 'isiKuasa', 'keterangan', 'objekHibah', 'alasan'];

  const dataRows: [string, string][] = [];
  const textareas: [string, string][] = [];

  const LABELS: Record<string, string> = {
    nama: 'Nama Lengkap', namaPelamar: 'Nama', namaMahasiswa: 'Nama', namaKaryawan: 'Nama Karyawan',
    nik: 'NIK', nikPemberi: 'NIK', nikPenerima: 'NIK', nikKaryawan: 'NIK',
    tempatLahir: 'Tempat Lahir', tanggalLahir: 'Tanggal Lahir', jenisKelamin: 'Jenis Kelamin',
    agama: 'Agama', pekerjaan: 'Pekerjaan', jabatan: 'Jabatan', departemen: 'Departemen',
    alamat: 'Alamat', alamatKTP: 'Alamat KTP', alamatDomisili: 'Alamat Domisili',
    alamatPemberi: 'Alamat', alamatPenerima: 'Alamat', alamatPeminjam: 'Alamat',
    namaPerusahaan: 'Nama Perusahaan', instansi: 'Instansi', unitKerja: 'Unit Kerja',
    posisi: 'Posisi', posisiDilamar: 'Posisi Dilamar', divisiTujuan: 'Divisi Tujuan',
    jurusan: 'Jurusan', nim: 'NIM', semester: 'Semester', ipk: 'IPK',
    namaBeasiswa: 'Nama Beasiswa', lembagaBeasiswa: 'Lembaga Beasiswa',
    noHp: 'No. HP', email: 'Email',
    tanggalMulai: 'Tanggal Mulai', tanggalSelesai: 'Tanggal Selesai',
    tanggalEfektif: 'Tanggal Efektif', tanggalBerakhir: 'Tanggal Berakhir',
    lamaMasa: 'Lama Bekerja', lamaPinjaman: 'Jangka Waktu',
    jumlahPinjaman: 'Jumlah Pinjaman', bungaPerBulan: 'Bunga/Bulan',
    caraPembayaran: 'Cara Pembayaran', jaminan: 'Jaminan',
    dokumenHilang: 'Dokumen Hilang', nomorDokumen: 'Nomor Dokumen',
    tempatHilang: 'Perkiraan Hilang', tujuanSurat: 'Keperluan',
    keperluan: 'Keperluan', rtRw: 'RT/RW', kelurahan: 'Kelurahan',
    sumberInfo: 'Sumber Info', pendidikanTerakhir: 'Pendidikan',
    kegiatan: 'Kegiatan', tujuanKegiatan: 'Tujuan',
    namaAnak: 'Nama Anak', namaInstitusi: 'Institusi', hubungan: 'Hubungan',
    hargaSewa: 'Harga Sewa', periodeSewa: 'Periode', uangDeposit: 'Deposit',
    alamatProperti: 'Alamat Properti', jenisProperti: 'Jenis Properti',
    tanggalMulaiSewa: 'Mulai Sewa', tanggalAkhirSewa: 'Akhir Sewa',
    gajiPokok: 'Gaji Pokok', tunjanganLain: 'Tunjangan', jamKerja: 'Jam Kerja',
    nilaiTaksiran: 'Nilai Taksiran', objekHibah: 'Objek Hibah',
    metodePembayaran: 'Metode', deskripsiBarang: 'Deskripsi Barang',
    namaPembeli: 'Pembeli', namaPenjual: 'Penjual', jumlahUang: 'Jumlah',
  };

  for (const [key, val] of Object.entries(formData)) {
    if (!val || typeof val !== 'string') continue;
    if (SKIP.has(key)) continue;
    let display = val;
    if (key.includes('tanggal') || key.includes('Tanggal')) {
      try { display = formatTanggalIndonesia(val); } catch { /* noop */ }
    }
    const label = LABELS[key] || key;
    dataRows.push([label, display]);
  }

  for (const key of TEXTAREA_KEYS) {
    const val = formData[key];
    if (val && typeof val === 'string') {
      textareas.push([LABELS[key] || key, val]);
    }
  }

  return (
    <Document title={title} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {withWatermark && (
          <View style={styles.watermarkContainer} fixed>
            <Text style={styles.watermarkText}>Suratin.id</Text>
          </View>
        )}

        {/* Formal title */}
        {isFormal && (
          <View style={{ alignItems: 'center', marginBottom: 4 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Times-Bold', letterSpacing: 0.8 }}>{title}</Text>
            {subtitle && <Text style={{ fontSize: 10, marginTop: 2 }}>{subtitle}</Text>}
            <View style={{ borderBottomWidth: 1.5, borderBottomColor: '#000', width: '100%', marginTop: 6 }} />
          </View>
        )}

        {/* Date */}
        {!isFormal && (
          <Text style={styles.rightAlign}>{dateStr}</Text>
        )}

        {/* Addressee */}
        {namaInstansi && !isFormal && (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 10 }}>Kepada Yth.</Text>
            <Text style={[styles.bodyBold, { fontSize: 10 }]}>{namaInstansi}</Text>
            <Text style={{ fontSize: 10 }}>di Tempat</Text>
          </View>
        )}

        {/* Subject */}
        {!isFormal && (
          <View style={[styles.dataRow, { marginBottom: 10 }]}>
            <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
            <Text style={styles.dataColon}>:</Text>
            <Text style={styles.dataValue}>{title}</Text>
          </View>
        )}

        <Text style={[styles.body, { marginBottom: 8 }]}>Dengan hormat,</Text>
        <Text style={styles.body}>Yang bertanda tangan di bawah ini:</Text>

        {/* Data rows */}
        <View style={styles.indented}>
          {dataRows.map(([label, value], i) => (
            <DataRow key={i} label={label} value={value} />
          ))}
        </View>

        {/* Textarea content */}
        {textareas.map(([label, value], i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={[styles.body, styles.bodyBold]}>{label}:</Text>
            <Text style={[styles.body, { paddingLeft: 8, fontFamily: 'Times-Italic' }]}>{value}</Text>
          </View>
        ))}

        <Text style={styles.body}>
          Demikian surat ini dibuat dengan sebenar-benarnya untuk dapat dipergunakan sebagaimana mestinya.
        </Text>

        {isFormal && (
          <Text style={[styles.rightAlign, { marginTop: 8 }]}>{dateStr}</Text>
        )}

        {/* Signature */}
        <View style={[
          styles.signatureRow,
          hasDualSig ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' }
        ]}>
          <View style={styles.signatureBlock}>
            <Text style={styles.signatureLabel}>{hasDualSig ? 'Pihak Pertama,' : 'Hormat saya,'}</Text>
            {sig1Src ? <Image src={sig1Src} style={styles.signatureImage} /> : <View style={styles.signatureLine} />}
            <Text style={styles.signatureName}>{sig1Name}</Text>
          </View>
          {hasDualSig && (
            <View style={styles.signatureBlock}>
              <Text style={styles.signatureLabel}>Pihak Kedua,</Text>
              <Image src={sig2Src!} style={styles.signatureImage} />
              <Text style={styles.signatureName}>{sig2Name}</Text>
            </View>
          )}
        </View>

        {withWatermark && (
          <Text style={styles.footer} fixed>
            Dibuat oleh Suratin.id — Dokumen ini merupakan salinan yang sah
          </Text>
        )}
      </Page>
    </Document>
  );
}

