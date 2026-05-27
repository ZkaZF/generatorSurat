import type { TemplateConfig } from '../types';

export const suratBedaNamaTemplate: TemplateConfig = {
  id: 'surat-keterangan-beda-nama',
  name: 'Surat Keterangan Beda Nama',
  description: 'Surat keterangan mandiri atau pengantar kelurahan untuk menerangkan perbedaan ejaan nama di dokumen resmi.',
  category: 'pemerintahan',
  icon: 'badge',
  price: 0,
  previewComponent: 'SuratBedaNamaPreview',
  pdfComponent: 'SuratBedaNamaPDF',
  steps: [
    {
      id: 'data-beda-nama',
      title: 'Identitas & Dokumen',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap (Sesuai KTP)', placeholder: 'Cth: Muhammad Dani', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Cth: Malang', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'alamat', type: 'textarea', label: 'Alamat Tempat Tinggal', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'namaDokumen1', type: 'text', label: 'Nama Dokumen 1 (Acuan)', placeholder: 'Cth: KTP / Kartu Keluarga', required: true, colSpan: 1 },
        { name: 'namaDiDokumen1', type: 'text', label: 'Ejaan Nama di Dokumen 1', placeholder: 'Cth: Muhammad Dani', required: true, colSpan: 1 },
        { name: 'namaDokumen2', type: 'text', label: 'Nama Dokumen 2 (Yang Berbeda)', placeholder: 'Cth: Ijazah SMA / Buku Nikah', required: true, colSpan: 1 },
        { name: 'namaDiDokumen2', type: 'text', label: 'Ejaan Nama di Dokumen 2', placeholder: 'Cth: M. Dani', required: true, colSpan: 1 },
        { name: 'alasan', type: 'textarea', label: 'Keterangan Tambahan / Alasan', placeholder: 'Cth: Terjadi penyingkatan nama saat pendaftaran sekolah', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Malang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

