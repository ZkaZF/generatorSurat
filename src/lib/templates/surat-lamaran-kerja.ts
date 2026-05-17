import type { TemplateConfig } from './types';

export const suratLamaranKerjaTemplate: TemplateConfig = {
  id: 'surat-lamaran-kerja',
  name: 'Surat Lamaran Kerja',
  description: 'Template surat lamaran kerja profesional untuk melamar posisi di perusahaan.',
  category: 'pekerjaan',
  icon: 'work',
  price: 0,
  previewComponent: 'SuratLamaranKerjaPreview',
  pdfComponent: 'SuratLamaranKerjaPDF',
  steps: [
    {
      id: 'data-pelamar',
      title: 'Data Pelamar',
      description: 'Isi data diri Anda sebagai pelamar.',
      fields: [
        { name: 'namaPelamar', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Cth: Jakarta', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'alamat', type: 'text', label: 'Alamat Lengkap', placeholder: 'Jl. ... No. ..., Kota', required: true, colSpan: 2 },
        { name: 'noHp', type: 'text', label: 'No. HP / WA', placeholder: '08xx-xxxx-xxxx', required: true, colSpan: 1 },
        { name: 'email', type: 'text', label: 'Email', placeholder: 'nama@email.com', required: true, colSpan: 1 },
        { name: 'pendidikanTerakhir', type: 'select', label: 'Pendidikan Terakhir', required: true, colSpan: 1,
          options: [
            { value: 'SMA/SMK', label: 'SMA/SMK' },
            { value: 'D3', label: 'D3' },
            { value: 'S1', label: 'S1' },
            { value: 'S2', label: 'S2' },
            { value: 'S3', label: 'S3' },
          ]
        },
        { name: 'jurusan', type: 'text', label: 'Jurusan / Bidang', placeholder: 'Cth: Teknik Informatika', required: false, colSpan: 1 },
      ],
    },
    {
      id: 'data-posisi',
      title: 'Posisi & Tujuan',
      description: 'Informasi posisi yang dilamar dan perusahaan tujuan.',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'Cth: PT. Maju Bersama', required: true, colSpan: 2 },
        { name: 'posisiDilamar', type: 'text', label: 'Posisi yang Dilamar', placeholder: 'Cth: Software Engineer', required: true, colSpan: 2 },
        { name: 'sumberInfo', type: 'select', label: 'Sumber Informasi Lowongan', required: false, colSpan: 2,
          options: [
            { value: 'LinkedIn', label: 'LinkedIn' },
            { value: 'Jobstreet', label: 'Jobstreet' },
            { value: 'Glints', label: 'Glints' },
            { value: 'website perusahaan', label: 'Website Perusahaan' },
            { value: 'referensi kenalan', label: 'Referensi Kenalan' },
            { value: 'iklan media sosial', label: 'Iklan Media Sosial' },
          ]
        },
        { name: 'motivasi', type: 'textarea', label: 'Motivasi / Kelebihan Singkat', placeholder: 'Ceritakan mengapa Anda tertarik dan apa yang Anda tawarkan...', required: false, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Bandung', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan', required: false, colSpan: 2 },
      ],
    },
  ],
};
