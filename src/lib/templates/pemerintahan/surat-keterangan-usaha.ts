import type { TemplateConfig } from '../types';

export const suratSKUTemplate: TemplateConfig = {
  id: 'surat-keterangan-usaha',
  name: 'Surat Keterangan Usaha (SKU)',
  description: 'Surat keterangan resmi dari kelurahan/desa untuk menerangkan kepemilikan dan keaktifan usaha mikro/UMKM.',
  category: 'pemerintahan',
  icon: 'storefront',
  price: 0,
  previewComponent: 'SuratSKUPreview',
  pdfComponent: 'SuratSKUPDF',
  steps: [
    {
      id: 'data-pemilik-usaha',
      title: 'Data Pemilik & Usaha',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Pemilik', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK Pemilik', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Kota lahir', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'alamat', type: 'textarea', label: 'Alamat Tempat Tinggal', placeholder: 'Alamat domisili pemilik', required: true, colSpan: 2 },
        { name: 'namaUsaha', type: 'text', label: 'Nama Usaha / Toko', placeholder: 'Cth: Warung Makan Barokah', required: true, colSpan: 2 },
        { name: 'bidangUsaha', type: 'text', label: 'Jenis / Bidang Usaha', placeholder: 'Cth: Kuliner / Perdagangan Sembako', required: true, colSpan: 1 },
        { name: 'alamatUsaha', type: 'textarea', label: 'Alamat Tempat Usaha', placeholder: 'Alamat lengkap tempat usaha dijalankan', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Sidoarjo', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaPejabat', type: 'text', label: 'Nama Kades / Lurah', placeholder: 'Nama pejabat yang berwenang', required: true, colSpan: 1 },
        { name: 'jabatanPejabat', type: 'text', label: 'Jabatan', placeholder: 'Cth: Kepala Desa Sukamaju', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemilik', required: false, colSpan: 2 },
      ],
    },
  ],
};

