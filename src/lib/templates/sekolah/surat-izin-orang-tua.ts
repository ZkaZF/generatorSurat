import type { TemplateConfig } from '../types';

export const suratIzinOrangTuaTemplate: TemplateConfig = {
  id: 'surat-izin-orang-tua',
  name: 'Surat Izin Orang Tua',
  description: 'Surat persetujuan orang tua/wali untuk kegiatan anak, seperti magang, lomba, atau kegiatan kampus.',
  category: 'sekolah',
  icon: 'family_restroom',
  price: 0,
  previewComponent: 'SuratIzinOrangTuaPreview',
  pdfComponent: 'SuratIzinOrangTuaPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Surat Izin',
      fields: [
        { name: 'namaOrangTua', type: 'text', label: 'Nama Orang Tua / Wali', placeholder: 'Nama lengkap', required: true, colSpan: 2 },
        { name: 'hubungan', type: 'select', label: 'Hubungan dengan Anak', required: true, colSpan: 1,
          options: [
            { value: 'Ayah', label: 'Ayah' },
            { value: 'Ibu', label: 'Ibu' },
            { value: 'Wali', label: 'Wali' },
          ]
        },
        { name: 'noHp', type: 'text', label: 'No. HP Orang Tua', placeholder: '08xx-xxxx-xxxx', required: false, colSpan: 1 },
        { name: 'namaAnak', type: 'text', label: 'Nama Anak / Mahasiswa', placeholder: 'Nama lengkap anak', required: true, colSpan: 2 },
        { name: 'namaInstitusi', type: 'text', label: 'Nama Sekolah / Kampus', placeholder: 'Cth: Universitas Diponegoro', required: true, colSpan: 2 },
        { name: 'kegiatan', type: 'text', label: 'Nama Kegiatan', placeholder: 'Cth: Program Magang Mandiri 2025', required: true, colSpan: 2 },
        { name: 'tujuanKegiatan', type: 'text', label: 'Tempat / Tujuan Kegiatan', placeholder: 'Cth: PT. Telkom Indonesia, Bandung', required: true, colSpan: 2 },
        { name: 'tanggalMulai', type: 'date', label: 'Tanggal Mulai', required: true, colSpan: 1 },
        { name: 'tanggalSelesai', type: 'date', label: 'Tanggal Selesai', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Semarang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Orang Tua/Wali', required: false, colSpan: 2 },
      ],
    },
  ],
};

