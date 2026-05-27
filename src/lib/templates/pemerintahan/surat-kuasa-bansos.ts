import type { TemplateConfig } from '../types';

export const suratKuasaBansosTemplate: TemplateConfig = {
  id: 'surat-kuasa-bansos',
  name: 'Surat Kuasa Pengambilan Bansos / Dokumen',
  description: 'Surat pelimpahan wewenang resmi dari lansia/sakit/halangan kepada kerabat untuk mengambil bantuan atau dokumen resmi.',
  category: 'pemerintahan',
  icon: 'how_to_reg',
  price: 0,
  previewComponent: 'SuratKuasaBansosPreview',
  pdfComponent: 'SuratKuasaBansosPDF',
  steps: [
    {
      id: 'data-kuasa',
      title: 'Pemberi & Penerima Kuasa',
      fields: [
        { name: 'namaPemberi', type: 'text', label: 'Nama Pemberi Kuasa', placeholder: 'Sesuai KTP pemberi', required: true, colSpan: 2 },
        { name: 'nikPemberi', type: 'text', label: 'NIK Pemberi Kuasa', placeholder: '16 digit NIK pemberi', required: true, colSpan: 1 },
        { name: 'alamatPemberi', type: 'textarea', label: 'Alamat Pemberi Kuasa', placeholder: 'Alamat sesuai KTP pemberi', required: true, colSpan: 2 },
        { name: 'namaPenerima', type: 'text', label: 'Nama Penerima Kuasa', placeholder: 'Sesuai KTP penerima', required: true, colSpan: 2 },
        { name: 'nikPenerima', type: 'text', label: 'NIK Penerima Kuasa', placeholder: '16 digit NIK penerima', required: true, colSpan: 1 },
        { name: 'alamatPenerima', type: 'textarea', label: 'Alamat Penerima Kuasa', placeholder: 'Alamat sesuai KTP penerima', required: true, colSpan: 2 },
        { name: 'namaBansosDokumen', type: 'text', label: 'Nama Bantuan / Dokumen Resmi', placeholder: 'Cth: Bantuan Sosial BPNT / Sertifikat Tanah', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Surakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemberi Kuasa', required: false, colSpan: 1 },
        { name: 'tandaTanganPenerima', type: 'signature', label: 'Tanda Tangan Penerima Kuasa', required: false, colSpan: 1 },
      ],
    },
  ],
};

