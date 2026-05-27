import type { TemplateConfig } from '../types';

export const suratKemitraanTemplate: TemplateConfig = {
  id: 'surat-perjanjian-kemitraan',
  name: 'Surat Perjanjian Kemitraan Bisnis',
  description: 'Surat perjanjian bagi hasil antara pengelola modal (aktif) dengan penyedia modal / investor (pasif) lengkap pembagian kerja dan keuntungan.',
  category: 'jual-beli',
  icon: 'groups',
  price: 20000,
  previewComponent: 'SuratKemitraanPreview',
  pdfComponent: 'SuratKemitraanPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Pengelola & Investor',
      fields: [
        { name: 'mitra1', type: 'text', label: 'Nama Pengelola Modal / Mitra Aktif (Pihak I)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikMitra1', type: 'text', label: 'NIK Pengelola Modal', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'mitra2', type: 'text', label: 'Nama Penyedia Modal / Mitra Pasif (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikMitra2', type: 'text', label: 'NIK Penyedia Modal', placeholder: '16 digit NIK', required: true, colSpan: 1 },
      ],
    },
    {
      id: 'skema-kemitraan',
      title: 'Skema Modal & Pembagian Hasil',
      fields: [
        { name: 'namaUsaha', type: 'text', label: 'Nama Usaha / Proyek', placeholder: 'Cth: Franchise Kopi Kenangan Manis', required: true, colSpan: 2 },
        { name: 'nominalModal', type: 'number', label: 'Nominal Modal Awal (Rp)', placeholder: 'Dana patungan / investasi', required: true, colSpan: 1 },
        { name: 'persentaseBagiHasilMitra1', type: 'number', label: 'Bagi Hasil Mitra Aktif (%)', placeholder: 'Persentase bagian pengelola (Cth: 60)', required: true, colSpan: 1 },
        { name: 'persentaseBagiHasilMitra2', type: 'number', label: 'Bagi Hasil Mitra Pasif (%)', placeholder: 'Persentase bagian investor (Cth: 40)', required: true, colSpan: 1 },
        { name: 'tugasTanggungJawab', type: 'textarea', label: 'Tugas Utama Mitra Aktif', placeholder: 'Detail operasional yang harus dijalankan', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Jakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Kesepakatan', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Pengelola', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Investor', required: false, colSpan: 1 },
      ],
    },
  ],
};

