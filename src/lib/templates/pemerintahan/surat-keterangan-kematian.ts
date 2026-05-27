import type { TemplateConfig } from '../types';

export const suratKematianTemplate: TemplateConfig = {
  id: 'surat-keterangan-kematian',
  name: 'Surat Keterangan Kematian (Pengantar)',
  description: 'Surat pengantar kelurahan/desa untuk melaporkan kejadian meninggal dunia guna penerbitan Akta Kematian.',
  category: 'pemerintahan',
  icon: 'sentiment_very_dissatisfied',
  price: 0,
  previewComponent: 'SuratKematianPreview',
  pdfComponent: 'SuratKematianPDF',
  steps: [
    {
      id: 'data-kematian',
      title: 'Identitas Jenazah & Pelapor',
      fields: [
        { name: 'namaJenazah', type: 'text', label: 'Nama Lengkap Jenazah', placeholder: 'Sesuai KTP/KK almarhum(ah)', required: true, colSpan: 2 },
        { name: 'nikJenazah', type: 'text', label: 'NIK Jenazah', placeholder: '16 digit NIK almarhum(ah)', required: true, colSpan: 1 },
        { name: 'jenisKelamin', type: 'select', label: 'Jenis Kelamin', required: true, colSpan: 1,
          options: [
            { value: 'Laki-laki', label: 'Laki-laki' },
            { value: 'Perempuan', label: 'Perempuan' },
          ]
        },
        { name: 'tanggalMeninggal', type: 'date', label: 'Tanggal Meninggal', required: true, colSpan: 1 },
        { name: 'tempatMeninggal', type: 'text', label: 'Tempat Meninggal', placeholder: 'Cth: RS Medika / Rumah Duka', required: true, colSpan: 1 },
        { name: 'penyebab', type: 'text', label: 'Penyebab Meninggal', placeholder: 'Cth: Sakit Biasa / Usia Lanjut', required: true, colSpan: 2 },
        { name: 'namaPelapor', type: 'text', label: 'Nama Pelapor (Ahli Waris)', placeholder: 'Sesuai KTP pelapor', required: true, colSpan: 2 },
        { name: 'hubunganPelapor', type: 'text', label: 'Hubungan Pelapor', placeholder: 'Cth: Anak Kandung / Suami / Istri', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Purwokerto', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaPejabat', type: 'text', label: 'Nama Kades / Lurah', placeholder: 'Nama pejabat yang berwenang', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pelapor', required: false, colSpan: 2 },
      ],
    },
  ],
};

