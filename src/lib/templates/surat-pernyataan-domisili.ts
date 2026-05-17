import type { TemplateConfig } from './types';

export const suratDomisiliTemplate: TemplateConfig = {
  id: 'surat-pernyataan-domisili',
  name: 'Surat Pernyataan Domisili',
  description: 'Surat pernyataan mandiri tentang domisili tempat tinggal sebelum divalidasi oleh RT/RW.',
  category: 'pemerintahan',
  icon: 'location_on',
  price: 0,
  previewComponent: 'SuratDomisiliPreview',
  pdfComponent: 'SuratDomisiliPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Domisili',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Cth: Malang', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'pekerjaan', type: 'text', label: 'Pekerjaan', placeholder: 'Cth: Karyawan Swasta', required: true, colSpan: 1 },
        { name: 'alamatKTP', type: 'text', label: 'Alamat Sesuai KTP', placeholder: 'Jl. ...', required: true, colSpan: 2 },
        { name: 'alamatDomisili', type: 'text', label: 'Alamat Domisili Saat Ini', placeholder: 'Jl. ...', required: true, colSpan: 2 },
        { name: 'rtRw', type: 'text', label: 'RT / RW', placeholder: 'Cth: RT 003 / RW 007', required: false, colSpan: 1 },
        { name: 'kelurahan', type: 'text', label: 'Kelurahan / Desa', placeholder: 'Cth: Kelurahan Merdeka', required: false, colSpan: 1 },
        { name: 'keperluan', type: 'text', label: 'Keperluan Surat', placeholder: 'Cth: Syarat pembuatan SKCK', required: false, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Bekasi', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan', required: false, colSpan: 2 },
      ],
    },
  ],
};
