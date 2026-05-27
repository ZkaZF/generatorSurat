import type { TemplateConfig } from '../types';

export const suratPeringatanKaryawanTemplate: TemplateConfig = {
  id: 'surat-peringatan-karyawan',
  name: 'Surat Peringatan Karyawan (SP)',
  description: 'Surat teguran resmi disiplin kerja (SP 1, SP 2, SP 3) dari HRD/Atasan kepada karyawan atas tindakan pelanggaran aturan kerja.',
  category: 'pekerjaan',
  icon: 'warning',
  price: 5000,
  previewComponent: 'SuratPeringatanKaryawanPreview',
  pdfComponent: 'SuratPeringatanKaryawanPDF',
  steps: [
    {
      id: 'data-sp',
      title: 'Detail Teguran Disiplin',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'Cth: PT. Sukses Bersama', required: true, colSpan: 2 },
        { name: 'namaAtasan', type: 'text', label: 'Nama Atasan / HRD', placeholder: 'Nama pejabat penandatangan', required: true, colSpan: 1 },
        { name: 'jabatanAtasan', type: 'text', label: 'Jabatan Atasan', placeholder: 'Cth: Manager HRD', required: true, colSpan: 1 },
        { name: 'namaKaryawan', type: 'text', label: 'Nama Lengkap Karyawan', placeholder: 'Karyawan yang melanggar', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK / ID Karyawan', placeholder: 'Nomor Induk Karyawan', required: true, colSpan: 1 },
        { name: 'jabatanKaryawan', type: 'text', label: 'Jabatan Karyawan', placeholder: 'Cth: Sales Staff', required: true, colSpan: 1 },
        { name: 'jenisSP', type: 'select', label: 'Tingkat Surat Peringatan (SP)', required: true, colSpan: 2,
          options: [
            { value: 'Surat Peringatan Kesatu (SP 1)', label: 'Surat Peringatan Kesatu (SP 1)' },
            { value: 'Surat Peringatan Kedua (SP 2)', label: 'Surat Peringatan Kedua (SP 2)' },
            { value: 'Surat Peringatan Ketiga - Terakhir (SP 3)', label: 'Surat Peringatan Ketiga - Terakhir (SP 3)' },
          ]
        },
        { name: 'alasanPelanggaran', type: 'textarea', label: 'Alasan / Uraian Pelanggaran', placeholder: 'Cth: Terlambat hadir lebih dari 5 kali dalam sebulan tanpa alasan yang dapat diterima.', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Surabaya', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penerbitan', required: true, colSpan: 1 },
      ],
    },
  ],
};

