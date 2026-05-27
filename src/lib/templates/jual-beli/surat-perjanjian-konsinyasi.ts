import type { TemplateConfig } from '../types';

export const suratKonsinyasiTemplate: TemplateConfig = {
  id: 'surat-perjanjian-konsinyasi',
  name: 'Surat Perjanjian Titip Jual (Konsinyasi)',
  description: 'Surat perjanjian kemitraan dagang dengan menitipkan stok barang di toko/kafe menggunakan skema bagi hasil/komisi.',
  category: 'jual-beli',
  icon: 'handshake',
  price: 10000,
  previewComponent: 'SuratKonsinyasiPreview',
  pdfComponent: 'SuratKonsinyasiPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Pemilik & Toko',
      fields: [
        { name: 'namaPemilikBarang', type: 'text', label: 'Nama Pemilik Barang (Consignor / Pihak I)', placeholder: 'Nama pemilik/supplier', required: true, colSpan: 2 },
        { name: 'namaToko', type: 'text', label: 'Nama Toko / Kafe (Consignee / Pihak II)', placeholder: 'Nama badan usaha/toko', required: true, colSpan: 2 },
        { name: 'namaPenanggungJawab', type: 'text', label: 'Nama Penanggung Jawab Toko', placeholder: 'Sesuai KTP penanggung jawab toko', required: true, colSpan: 1 },
      ],
    },
    {
      id: 'skema-konsinyasi',
      title: 'Skema Titip Jual & Pembagian Hasil',
      fields: [
        { name: 'namaProduk', type: 'text', label: 'Nama / Jenis Produk', placeholder: 'Cth: Kopi Bubuk Kemasan / Kaos Polo', required: true, colSpan: 2 },
        { name: 'hargaJualRekomendasi', type: 'number', label: 'Harga Jual Rekomendasi (Rp)', placeholder: 'Harga konsumen', required: true, colSpan: 1 },
        { name: 'persentaseBagiHasil', type: 'number', label: 'Komisi Bagi Hasil Toko (%)', placeholder: 'Cth: 20 (untuk Toko)', required: true, colSpan: 1 },
        { name: 'periodeKonsinyasi', type: 'number', label: 'Periode Uji Coba Titip (Hari)', placeholder: 'Cth: 30', required: true, colSpan: 1 },
        { name: 'sistemPembayaran', type: 'text', label: 'Sistem Pembayaran / Rekonsiliasi', placeholder: 'Cth: Setiap tanggal 5 di bulan berikutnya', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Solo', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Kesepakatan', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Pemilik Barang', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Pengelola Toko', required: false, colSpan: 1 },
      ],
    },
  ],
};

