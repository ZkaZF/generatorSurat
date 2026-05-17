import type { TemplateConfig } from './types';

export const suratHibahTemplate: TemplateConfig = {
  id: 'surat-hibah',
  name: 'Surat Hibah',
  description: 'Surat serah terima barang berharga atau aset dari pemberi kepada penerima secara cuma-cuma.',
  category: 'jual-beli',
  icon: 'card_giftcard',
  price: 20000,
  previewComponent: 'SuratHibahPreview',
  pdfComponent: 'SuratHibahPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Hibah',
      description: 'Isi data pemberi hibah, penerima hibah, dan objek yang dihibahkan.',
      fields: [
        { name: 'namaPemberiHibah', type: 'text', label: 'Nama Pemberi Hibah (Pihak I)', placeholder: 'Nama lengkap', required: true, colSpan: 1 },
        { name: 'nikPemberi', type: 'text', label: 'NIK Pemberi', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'alamatPemberi', type: 'text', label: 'Alamat Pemberi', placeholder: 'Jl. ...', required: true, colSpan: 2 },
        { name: 'namaPenerimaHibah', type: 'text', label: 'Nama Penerima Hibah (Pihak II)', placeholder: 'Nama lengkap', required: true, colSpan: 1 },
        { name: 'nikPenerima', type: 'text', label: 'NIK Penerima', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'alamatPenerima', type: 'text', label: 'Alamat Penerima', placeholder: 'Jl. ...', required: true, colSpan: 2 },
        { name: 'objekHibah', type: 'textarea', label: 'Objek / Aset yang Dihibahkan', placeholder: 'Cth: 1 unit sepeda motor Honda Beat tahun 2020, warna putih, No. Pol: AA 1234 BB', required: true, colSpan: 2 },
        { name: 'nilaiTaksiran', type: 'text', label: 'Nilai Taksiran (Rp)', placeholder: 'Cth: 15.000.000 (opsional)', required: false, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Penandatanganan', placeholder: 'Cth: Yogyakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penandatanganan', required: true, colSpan: 1 },
        { name: 'tandaTanganPemberi', type: 'signature', label: 'TTD Pemberi Hibah', required: false, colSpan: 1 },
        { name: 'tandaTanganPenerima', type: 'signature', label: 'TTD Penerima Hibah', required: false, colSpan: 1 },
      ],
    },
  ],
};
