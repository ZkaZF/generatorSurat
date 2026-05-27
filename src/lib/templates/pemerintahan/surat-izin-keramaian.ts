import type { TemplateConfig } from '../types';

export const suratIzinKeramaianTemplate: TemplateConfig = {
  id: 'surat-izin-keramaian',
  name: 'Surat Izin Keramaian (Pengantar)',
  description: 'Surat pengantar resmi lingkungan RT/RW untuk pengajuan izin keramaian / acara besar ke kepolisian setempat.',
  category: 'pemerintahan',
  icon: 'celebration',
  price: 0,
  previewComponent: 'SuratIzinKeramaianPreview',
  pdfComponent: 'SuratIzinKeramaianPDF',
  steps: [
    {
      id: 'data-izin-keramaian',
      title: 'Data Penyelenggara & Acara',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Penyelenggara', placeholder: 'Sesuai KTP penanggung jawab', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK Penyelenggara', placeholder: '16 digit NIK penanggung jawab', required: true, colSpan: 1 },
        { name: 'acara', type: 'text', label: 'Nama / Jenis Acara', placeholder: 'Cth: Resepsi Pernikahan / Panggung Seni HUT RI', required: true, colSpan: 2 },
        { name: 'tanggalAcara', type: 'date', label: 'Tanggal Acara', required: true, colSpan: 1 },
        { name: 'waktuAcara', type: 'text', label: 'Waktu / Jam Acara', placeholder: 'Cth: 08:00 WIB s.d. Selesai', required: true, colSpan: 1 },
        { name: 'tempatAcara', type: 'textarea', label: 'Lokasi / Tempat Acara', placeholder: 'Alamat lengkap lokasi penyelenggaraan acara', required: true, colSpan: 2 },
        { name: 'rtRw', type: 'text', label: 'RT / RW Lokasi', placeholder: 'Cth: RT 004 / RW 008', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Bekasi', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaKetuaRT', type: 'text', label: 'Nama Ketua RT', placeholder: 'Nama Ketua RT setempat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Penyelenggara', required: false, colSpan: 2 },
      ],
    },
  ],
};

