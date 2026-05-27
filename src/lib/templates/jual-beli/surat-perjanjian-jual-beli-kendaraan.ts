import type { TemplateConfig } from '../types';

export const suratJualBeliKendaraanTemplate: TemplateConfig = {
  id: 'surat-perjanjian-jual-beli-kendaraan',
  name: 'Surat Perjanjian Jual Beli Kendaraan',
  description: 'Surat perjanjian jual beli mobil atau motor bekas/baru dilengkapi rincian nomor mesin, nomor rangka, plat nomor, dan surat-surat.',
  category: 'jual-beli',
  icon: 'directions_car',
  price: 15000,
  previewComponent: 'SuratJualBeliKendaraanPreview',
  pdfComponent: 'SuratJualBeliKendaraanPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Penjual & Pembeli',
      fields: [
        { name: 'namaPenjual', type: 'text', label: 'Nama Lengkap Penjual (Pihak I)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPenjual', type: 'text', label: 'NIK Penjual', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'namaPembeli', type: 'text', label: 'Nama Lengkap Pembeli (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPembeli', type: 'text', label: 'NIK Pembeli', placeholder: '16 digit NIK', required: true, colSpan: 1 },
      ],
    },
    {
      id: 'data-kendaraan',
      title: 'Rincian Kendaraan & Transaksi',
      fields: [
        { name: 'jenisKendaraan', type: 'select', label: 'Jenis Kendaraan', required: true, colSpan: 1,
          options: [
            { value: 'Mobil', label: 'Mobil' },
            { value: 'Sepeda Motor', label: 'Sepeda Motor' },
          ]
        },
        { name: 'merkTipe', type: 'text', label: 'Merk & Tipe Kendaraan', placeholder: 'Cth: Toyota Avanza 1.3 G', required: true, colSpan: 1 },
        { name: 'tahunPembuatan', type: 'number', label: 'Tahun Pembuatan', placeholder: 'Cth: 2019', required: true, colSpan: 1 },
        { name: 'nomorPolisi', type: 'text', label: 'Nomor Polisi (Plat)', placeholder: 'Cth: B 1234 ABC', required: true, colSpan: 1 },
        { name: 'nomorRangka', type: 'text', label: 'Nomor Rangka (VIN)', placeholder: 'Sesuai STNK/BPKB', required: true, colSpan: 1 },
        { name: 'nomorMesin', type: 'text', label: 'Nomor Mesin', placeholder: 'Sesuai STNK/BPKB', required: true, colSpan: 1 },
        { name: 'warna', type: 'text', label: 'Warna Kendaraan', placeholder: 'Cth: Hitam Metalik', required: true, colSpan: 1 },
        { name: 'hargaKendaraan', type: 'number', label: 'Harga Penjualan (Rp)', placeholder: 'Cth: 120000000', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Surabaya', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Transaksi', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Penjual', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Pembeli', required: false, colSpan: 1 },
      ],
    },
  ],
};

