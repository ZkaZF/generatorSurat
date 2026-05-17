import type { TemplateConfig } from './types';

export const suratSPTJMTemplate: TemplateConfig = {
  id: 'surat-sptjm',
  name: 'Surat Pernyataan Tanggung Jawab Mutlak (SPTJM)',
  description: 'Surat pernyataan tanggung jawab mutlak yang banyak digunakan untuk urusan kependudukan dan administrasi.',
  category: 'pemerintahan',
  icon: 'gavel',
  price: 0,
  previewComponent: 'SuratSPTJMPreview',
  pdfComponent: 'SuratSPTJMPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data SPTJM',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Cth: Surabaya', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'pekerjaan', type: 'text', label: 'Pekerjaan', placeholder: 'Cth: Wiraswasta', required: true, colSpan: 1 },
        { name: 'alamat', type: 'text', label: 'Alamat Lengkap', placeholder: 'Jl. ...', required: true, colSpan: 2 },
        { name: 'pernyataan', type: 'textarea', label: 'Isi Pernyataan', placeholder: 'Cth: Menyatakan dengan sesungguhnya bahwa data kependudukan yang saya ajukan adalah benar dan dapat dipertanggungjawabkan.', required: true, colSpan: 2 },
        { name: 'keperluan', type: 'text', label: 'Keperluan / Tujuan', placeholder: 'Cth: Pengurusan Kartu Keluarga (KK)', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Depok', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan di Atas Materai', required: false, colSpan: 2 },
      ],
    },
  ],
};
