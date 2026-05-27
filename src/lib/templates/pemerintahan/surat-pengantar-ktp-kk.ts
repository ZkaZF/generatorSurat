import type { TemplateConfig } from '../types';

export const suratPengantarKtpKkTemplate: TemplateConfig = {
  id: 'surat-pengantar-ktp-kk',
  name: 'Surat Pengantar KTP / KK Baru',
  description: 'Surat pengantar resmi dari RT/RW untuk pengurusan KTP baru (usia 17 tahun) atau penerbitan Kartu Keluarga (KK) baru.',
  category: 'pemerintahan',
  icon: 'contact_page',
  price: 0,
  previewComponent: 'SuratPengantarKtpKkPreview',
  pdfComponent: 'SuratPengantarKtpKkPDF',
  steps: [
    {
      id: 'data-pengantar-ktp-kk',
      title: 'Identitas & Permohonan',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP/KK', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK (Jika sudah ada)', placeholder: '16 digit NIK atau kosongkan jika perekaman pertama', required: false, colSpan: 1 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Kota lahir', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'jenisPermohonan', type: 'select', label: 'Jenis Permohonan', required: true, colSpan: 2,
          options: [
            { value: 'Perekaman KTP Baru', label: 'Perekaman KTP Baru' },
            { value: 'Penerbitan KK Baru (Menikah)', label: 'Penerbitan KK Baru (Menikah)' },
            { value: 'Penerbitan KK Baru (Hilang/Rusak)', label: 'Penerbitan KK Baru (Hilang/Rusak)' },
            { value: 'Penggantian KTP Rusak/Hilang', label: 'Penggantian KTP Rusak/Hilang' },
          ]
        },
        { name: 'alamat', type: 'textarea', label: 'Alamat Lengkap', placeholder: 'Sesuai domisili RT/RW setempat', required: true, colSpan: 2 },
        { name: 'rtRw', type: 'text', label: 'RT / RW', placeholder: 'Cth: RT 005 / RW 002', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Bogor', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaKetuaRT', type: 'text', label: 'Nama Ketua RT', placeholder: 'Nama Ketua RT setempat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

