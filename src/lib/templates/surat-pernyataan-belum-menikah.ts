import type { TemplateConfig } from './types';

export const suratPernyataanBelumMenikahTemplate: TemplateConfig = {
  id: 'surat-pernyataan-belum-menikah',
  name: 'Surat Pernyataan Belum Menikah',
  description: 'Surat pernyataan resmi status belum menikah untuk keperluan kerja, bank, atau administrasi.',
  category: 'pemerintahan',
  icon: 'person',
  price: 0,
  previewComponent: 'SuratPernyataanBelumMenikahPreview',
  pdfComponent: 'SuratPernyataanBelumMenikahPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Pernyataan',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'jenisKelamin', type: 'select', label: 'Jenis Kelamin', required: true, colSpan: 1,
          options: [
            { value: 'Laki-laki', label: 'Laki-laki' },
            { value: 'Perempuan', label: 'Perempuan' },
          ]
        },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Cth: Semarang', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'pekerjaan', type: 'text', label: 'Pekerjaan', placeholder: 'Cth: Mahasiswa / Karyawan Swasta', required: true, colSpan: 1 },
        { name: 'agama', type: 'select', label: 'Agama', required: true, colSpan: 1,
          options: [
            { value: 'Islam', label: 'Islam' },
            { value: 'Kristen', label: 'Kristen' },
            { value: 'Katolik', label: 'Katolik' },
            { value: 'Hindu', label: 'Hindu' },
            { value: 'Buddha', label: 'Buddha' },
            { value: 'Konghucu', label: 'Konghucu' },
          ]
        },
        { name: 'alamat', type: 'text', label: 'Alamat Lengkap (KTP)', placeholder: 'Jl. ...', required: true, colSpan: 2 },
        { name: 'keperluan', type: 'text', label: 'Keperluan Surat', placeholder: 'Cth: Persyaratan melamar kerja di PT. XYZ', required: false, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Jakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan', required: false, colSpan: 2 },
      ],
    },
  ],
};
