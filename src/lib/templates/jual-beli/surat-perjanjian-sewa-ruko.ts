import type { TemplateConfig } from '../types';

export const suratSewaRukoTemplate: TemplateConfig = {
  id: 'surat-perjanjian-sewa-ruko',
  name: 'Surat Perjanjian Sewa Ruko / Kios',
  description: 'Surat kontrak sewa-menyewa ruko, kios, atau tempat usaha lengkap dengan klausul renovasi, perizinan, dan jam operasional.',
  category: 'jual-beli',
  icon: 'store',
  price: 15000,
  previewComponent: 'SuratSewaRukoPreview',
  pdfComponent: 'SuratSewaRukoPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Pemilik & Penyewa',
      fields: [
        { name: 'namaPemilik', type: 'text', label: 'Nama Pemilik Ruko (Pihak I)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPemilik', type: 'text', label: 'NIK Pemilik', placeholder: '16 digit NIK Pemilik', required: true, colSpan: 1 },
        { name: 'alamatPemilik', type: 'textarea', label: 'Alamat Tinggal Pemilik', placeholder: 'Alamat lengkap', required: true, colSpan: 2 },
        { name: 'namaPenyewa', type: 'text', label: 'Nama Penyewa (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPenyewa', type: 'text', label: 'NIK Penyewa', placeholder: '16 digit NIK Penyewa', required: true, colSpan: 1 },
        { name: 'alamatPenyewa', type: 'textarea', label: 'Alamat Tinggal Penyewa', placeholder: 'Alamat lengkap', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'detail-kontrak',
      title: 'Objek Sewa & Aturan Operasional',
      fields: [
        { name: 'alamatRuko', type: 'textarea', label: 'Alamat / Lokasi Ruko', placeholder: 'Letak ruko yang disewakan', required: true, colSpan: 2 },
        { name: 'nomorPBB', type: 'text', label: 'Nomor PBB Ruko', placeholder: 'Cth: NOP 32.71.xxx', required: false, colSpan: 1 },
        { name: 'durasiSewa', type: 'number', label: 'Durasi Sewa (Tahun)', placeholder: 'Cth: 2', required: true, colSpan: 1 },
        { name: 'tanggalMulai', type: 'date', label: 'Mulai Sewa', required: true, colSpan: 1 },
        { name: 'tanggalSelesai', type: 'date', label: 'Selesai Sewa', required: true, colSpan: 1 },
        { name: 'hargaSewaPerTahun', type: 'number', label: 'Harga Sewa Per Tahun (Rp)', placeholder: 'Biaya sewa tahunan', required: true, colSpan: 1 },
        { name: 'uangJaminan', type: 'number', label: 'Uang Jaminan / Deposit (Rp)', placeholder: 'Cth: 5000000', required: true, colSpan: 1 },
        { name: 'jamOperasional', type: 'text', label: 'Batas Jam Operasional Ruko', placeholder: 'Cth: 08:00 - 22:00 WIB', required: true, colSpan: 1 },
        { name: 'izinRenovasi', type: 'select', label: 'Izin Renovasi / Perubahan Ruko', required: true, colSpan: 1,
          options: [
            { value: 'Diizinkan dengan batasan tertulis', label: 'Diizinkan dengan batasan tertulis' },
            { value: 'Tidak diizinkan merubah struktur utama', label: 'Tidak diizinkan merubah struktur utama' },
          ]
        },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Semarang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Pemilik (Pihak I)', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Penyewa (Pihak II)', required: false, colSpan: 1 },
      ],
    },
  ],
};

