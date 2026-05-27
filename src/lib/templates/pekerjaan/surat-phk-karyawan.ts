import type { TemplateConfig } from '../types';

export const suratPHKKaryawanTemplate: TemplateConfig = {
  id: 'surat-phk-karyawan',
  name: 'Surat Pemutusan Hubungan Kerja (PHK)',
  description: 'Surat pemutusan hubungan kerja resmi dari manajemen kepada karyawan demi menjaga proses profesional dan meminimalisir risiko perselisihan.',
  category: 'pekerjaan',
  icon: 'gavel',
  price: 10000,
  previewComponent: 'SuratPHKKaryawanPreview',
  pdfComponent: 'SuratPHKKaryawanPDF',
  steps: [
    {
      id: 'data-phk',
      title: 'Detail Pemutusan Hubungan Kerja',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'Cth: PT. Global Sejahtera', required: true, colSpan: 2 },
        { name: 'namaAtasan', type: 'text', label: 'Nama Atasan / Direksi', placeholder: 'Nama penandatangan surat', required: true, colSpan: 1 },
        { name: 'jabatanAtasan', type: 'text', label: 'Jabatan Atasan', placeholder: 'Cth: Direktur Utama', required: true, colSpan: 1 },
        { name: 'namaKaryawan', type: 'text', label: 'Nama Lengkap Karyawan', placeholder: 'Karyawan yang bersangkutan', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK Karyawan (KTP)', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'jabatanKaryawan', type: 'text', label: 'Jabatan Karyawan', placeholder: 'Cth: Staff Operasional', required: true, colSpan: 1 },
        { name: 'alasanPHK', type: 'textarea', label: 'Alasan Pemutusan Hubungan Kerja', placeholder: 'Cth: Langkah efisiensi operasional dan perampingan struktur kepengurusan internal perusahaan.', required: true, colSpan: 2 },
        { name: 'tanggalEfektifPHK', type: 'date', label: 'Tanggal Efektif Berhenti Kerja', required: true, colSpan: 1 },
        { name: 'uangPesangon', type: 'number', label: 'Jumlah Sisa Hak / Uang Pesangon (Rp)', placeholder: 'Cth: 8500000', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Tangerang Selatan', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penerbitan Surat', required: true, colSpan: 1 },
      ],
    },
  ],
};

