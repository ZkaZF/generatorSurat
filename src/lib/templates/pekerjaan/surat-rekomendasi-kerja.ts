import type { TemplateConfig } from '../types';

export const suratRekomendasiKerjaTemplate: TemplateConfig = {
  id: 'surat-rekomendasi-kerja',
  name: 'Surat Rekomendasi Kerja',
  description: 'Surat referensi dari atasan atau perusahaan lama yang merekomendasikan karyawan ke tempat baru.',
  category: 'pekerjaan',
  icon: 'recommend',
  price: 5000,
  previewComponent: 'SuratRekomendasiKerjaPreview',
  pdfComponent: 'SuratRekomendasiKerjaPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Rekomendasi',
      description: 'Isi data pemberi dan penerima rekomendasi.',
      fields: [
        { name: 'namaPemberiRekom', type: 'text', label: 'Nama Pemberi Rekomendasi', placeholder: 'Nama atasan / HRD', required: true, colSpan: 2 },
        { name: 'jabatanPemberi', type: 'text', label: 'Jabatan Pemberi', placeholder: 'Cth: Manajer SDM', required: true, colSpan: 1 },
        { name: 'namaPerusahaanLama', type: 'text', label: 'Nama Perusahaan Lama', placeholder: 'PT. ...', required: true, colSpan: 1 },
        { name: 'namaKaryawan', type: 'text', label: 'Nama Karyawan (Direkomendasikan)', placeholder: 'Nama lengkap', required: true, colSpan: 2 },
        { name: 'jabatanKaryawan', type: 'text', label: 'Jabatan Terakhir Karyawan', placeholder: 'Cth: Senior Developer', required: true, colSpan: 1 },
        { name: 'lamaMasa', type: 'text', label: 'Lama Bekerja', placeholder: 'Cth: 3 tahun 2 bulan', required: true, colSpan: 1 },
        { name: 'penilaian', type: 'textarea', label: 'Penilaian / Kelebihan Karyawan', placeholder: 'Jelaskan kinerja, etos kerja, dan kelebihan karyawan...', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Jakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemberi Rekom', required: false, colSpan: 2 },
      ],
    },
  ],
};

