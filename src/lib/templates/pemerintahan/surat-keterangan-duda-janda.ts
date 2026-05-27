import type { TemplateConfig } from '../types';

export const suratDudaJandaTemplate: TemplateConfig = {
  id: 'surat-keterangan-duda-janda',
  name: 'Surat Keterangan Duda / Janda',
  description: 'Surat keterangan resmi kelurahan/desa yang menerangkan status duda atau janda pemohon.',
  category: 'pemerintahan',
  icon: 'family_restroom',
  price: 0,
  previewComponent: 'SuratDudaJandaPreview',
  pdfComponent: 'SuratDudaJandaPDF',
  steps: [
    {
      id: 'data-duda-janda',
      title: 'Status & Identitas',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'status', type: 'select', label: 'Status Saat Ini', required: true, colSpan: 1,
          options: [
            { value: 'Duda', label: 'Duda' },
            { value: 'Janda', label: 'Janda' },
          ]
        },
        { name: 'namaPasanganSebelumnya', type: 'text', label: 'Nama Almarhum(ah) Pasangan', placeholder: 'Nama mendiang istri/suami', required: true, colSpan: 2 },
        { name: 'tanggalMeninggalPasangan', type: 'date', label: 'Tanggal Meninggal Pasangan', required: true, colSpan: 1 },
        { name: 'keperluan', type: 'text', label: 'Keperluan Surat', placeholder: 'Cth: Syarat administrasi pernikahan kembali / Klaim Taspen', required: true, colSpan: 2 },
        { name: 'alamat', type: 'textarea', label: 'Alamat Pemohon', placeholder: 'Alamat tempat tinggal', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Surakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaPejabat', type: 'text', label: 'Nama Lurah / Kades', placeholder: 'Nama pejabat berwenang', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

