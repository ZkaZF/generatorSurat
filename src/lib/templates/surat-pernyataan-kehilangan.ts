import type { TemplateConfig } from './types';

export const suratPernyataanKehilanganTemplate: TemplateConfig = {
  id: 'surat-pernyataan-kehilangan',
  name: 'Surat Pernyataan Kehilangan',
  description: 'Surat pernyataan kehilangan dokumen penting seperti KTM, ijazah, atau kartu identitas lainnya.',
  category: 'sekolah',
  icon: 'search_off',
  price: 0,
  previewComponent: 'SuratPernyataanKehilanganPreview',
  pdfComponent: 'SuratPernyataanKehilanganPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Kehilangan',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK / NIM', placeholder: 'NIK atau Nomor Identitas', required: true, colSpan: 1 },
        { name: 'alamat', type: 'text', label: 'Alamat Lengkap', placeholder: 'Jl. ...', required: true, colSpan: 1 },
        { name: 'dokumenHilang', type: 'text', label: 'Dokumen yang Hilang', placeholder: 'Cth: Kartu Tanda Mahasiswa (KTM)', required: true, colSpan: 2 },
        { name: 'nomorDokumen', type: 'text', label: 'Nomor Dokumen (jika ada)', placeholder: 'Cth: 2102212345 / - jika tidak ingat', required: false, colSpan: 1 },
        { name: 'tempatHilang', type: 'text', label: 'Perkiraan Tempat/Waktu Hilang', placeholder: 'Cth: Di lingkungan kampus, Senin 21 April 2025', required: false, colSpan: 1 },
        { name: 'tujuanSurat', type: 'text', label: 'Tujuan / Keperluan Surat', placeholder: 'Cth: Pengurusan penggantian KTM baru', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Yogyakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan', required: false, colSpan: 2 },
      ],
    },
  ],
};
