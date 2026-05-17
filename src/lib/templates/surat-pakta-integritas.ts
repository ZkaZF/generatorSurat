import type { TemplateConfig } from './types';

export const suratPaktaIntegritasTemplate: TemplateConfig = {
  id: 'surat-pakta-integritas',
  name: 'Surat Pakta Integritas',
  description: 'Pernyataan komitmen integritas untuk keperluan CPNS, kontrak kerja, atau organisasi.',
  category: 'pekerjaan',
  icon: 'verified_user',
  price: 0,
  previewComponent: 'SuratPaktaIntegritasPreview',
  pdfComponent: 'SuratPaktaIntegrasPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Pakta Integritas',
      description: 'Isi data diri untuk pakta integritas.',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'jabatan', type: 'text', label: 'Jabatan / Posisi', placeholder: 'Cth: Staf Administrasi', required: true, colSpan: 1 },
        { name: 'instansi', type: 'text', label: 'Nama Instansi / Perusahaan', placeholder: 'Cth: Kementerian Keuangan', required: true, colSpan: 2 },
        { name: 'unitKerja', type: 'text', label: 'Unit Kerja / Divisi', placeholder: 'Cth: Bagian Pengadaan', required: false, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Jakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan', required: false, colSpan: 2 },
      ],
    },
  ],
};
