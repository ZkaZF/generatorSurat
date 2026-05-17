import type { TemplateConfig } from './types';

export const suratPermohonanMagangTemplate: TemplateConfig = {
  id: 'surat-permohonan-magang',
  name: 'Surat Permohonan Magang / Internship',
  description: 'Surat formal permohonan magang ke perusahaan, lengkap dengan pitch singkat kemampuan diri.',
  category: 'sekolah',
  icon: 'work_history',
  price: 0,
  previewComponent: 'SuratPermohonanMagangPreview',
  pdfComponent: 'SuratPermohonanMagangPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Permohonan Magang',
      fields: [
        { name: 'namaMahasiswa', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP/KTM', required: true, colSpan: 2 },
        { name: 'nim', type: 'text', label: 'NIM', placeholder: 'Cth: 2102212345', required: false, colSpan: 1 },
        { name: 'jurusan', type: 'text', label: 'Jurusan / Program Studi', placeholder: 'Cth: Sistem Informasi', required: true, colSpan: 1 },
        { name: 'namaInstitusi', type: 'text', label: 'Nama Kampus', placeholder: 'Cth: Universitas Negeri Semarang', required: true, colSpan: 2 },
        { name: 'noHp', type: 'text', label: 'No. HP / WA', placeholder: '08xx-xxxx-xxxx', required: true, colSpan: 1 },
        { name: 'email', type: 'text', label: 'Email', placeholder: 'nama@email.com', required: true, colSpan: 1 },
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan Tujuan', placeholder: 'Cth: PT. Tokopedia', required: true, colSpan: 2 },
        { name: 'divisiTujuan', type: 'text', label: 'Divisi / Bidang yang Dituju', placeholder: 'Cth: Software Engineering / Backend Developer', required: true, colSpan: 2 },
        { name: 'tanggalMulai', type: 'date', label: 'Rencana Mulai Magang', required: true, colSpan: 1 },
        { name: 'tanggalSelesai', type: 'date', label: 'Rencana Selesai Magang', required: true, colSpan: 1 },
        { name: 'kemampuan', type: 'textarea', label: 'Kemampuan & Motivasi', placeholder: 'Jelaskan skill yang relevan dan mengapa tertarik magang di sini...', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Semarang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan', required: false, colSpan: 2 },
      ],
    },
  ],
};
