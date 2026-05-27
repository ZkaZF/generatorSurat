import type { TemplateConfig } from '../types';

export const suratPindahPendudukTemplate: TemplateConfig = {
  id: 'surat-keterangan-pindah-penduduk',
  name: 'Surat Keterangan Pindah Penduduk',
  description: 'Surat pengantar resmi dari kelurahan/kecamatan untuk melengkapi permohonan mutasi domisili keluar daerah.',
  category: 'pemerintahan',
  icon: 'moving',
  price: 0,
  previewComponent: 'SuratPindahPendudukPreview',
  pdfComponent: 'SuratPindahPendudukPDF',
  steps: [
    {
      id: 'data-pindah',
      title: 'Data Asal & Tujuan',
      fields: [
        { name: 'namaKepalaKeluarga', type: 'text', label: 'Nama Kepala Keluarga', placeholder: 'Sesuai Kartu Keluarga', required: true, colSpan: 2 },
        { name: 'nama', type: 'text', label: 'Nama Pemohon', placeholder: 'Nama yang mengajukan pindah', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK Pemohon', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'alamatAsal', type: 'textarea', label: 'Alamat Asal (Lengkap)', placeholder: 'Alamat daerah asal domisili', required: true, colSpan: 2 },
        { name: 'alamatTujuan', type: 'textarea', label: 'Alamat Tujuan (Lengkap)', placeholder: 'Alamat tujuan domisili baru', required: true, colSpan: 2 },
        { name: 'alasanPindah', type: 'text', label: 'Alasan Pindah', placeholder: 'Cth: Pekerjaan / Ikut Suami / Studi', required: true, colSpan: 2 },
        { name: 'jumlahPengikut', type: 'number', label: 'Jumlah Keluarga yang Ikut (Orang)', placeholder: 'Cth: 2', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Tangerang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaPejabat', type: 'text', label: 'Nama Lurah / Kades', placeholder: 'Nama pejabat yang bertanda tangan', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

