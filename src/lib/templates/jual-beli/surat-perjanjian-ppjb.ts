import type { TemplateConfig } from '../types';

export const suratPPJBTemplate: TemplateConfig = {
  id: 'surat-perjanjian-ppjb',
  name: 'Surat Perjanjian Pengikatan Jual Beli (PPJB)',
  description: 'Surat kesepakatan awal transaksi properti (rumah/tanah) dengan skema pembayaran uang muka (DP) dan cicilan pelunasan.',
  category: 'jual-beli',
  icon: 'draw',
  price: 20000,
  previewComponent: 'SuratPPJBPreview',
  pdfComponent: 'SuratPPJBPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Para Pihak',
      fields: [
        { name: 'namaPenjual', type: 'text', label: 'Nama Penjual (Pihak I)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPenjual', type: 'text', label: 'NIK Penjual', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'namaPembeli', type: 'text', label: 'Nama Pembeli (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPembeli', type: 'text', label: 'NIK Pembeli', placeholder: '16 digit NIK', required: true, colSpan: 1 },
      ],
    },
    {
      id: 'data-objek-ppjb',
      title: 'Detail Properti & Angsuran',
      fields: [
        { name: 'deskripsiProperti', type: 'textarea', label: 'Deskripsi & Bukti Properti', placeholder: 'Cth: Sebidang tanah seluas 200 m² beserta bangunan di atasnya, SHM No. 992', required: true, colSpan: 2 },
        { name: 'hargaTotal', type: 'number', label: 'Harga Jual Total (Rp)', placeholder: 'Total kesepakatan harga', required: true, colSpan: 1 },
        { name: 'uangMuka', type: 'number', label: 'Uang Muka / DP (Rp)', placeholder: 'Uang muka yang disepakati', required: true, colSpan: 1 },
        { name: 'sisaPembayaran', type: 'number', label: 'Sisa Pembayaran (Rp)', placeholder: 'Sisa nominal yang belum terbayar', required: true, colSpan: 1 },
        { name: 'jumlahTenor', type: 'number', label: 'Jumlah Cicilan / Angsuran (Kali)', placeholder: 'Tenor angsuran (Cth: 5)', required: true, colSpan: 1 },
        { name: 'batasPelunasan', type: 'date', label: 'Batas Waktu Pelunasan Akhir', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Tangerang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal PPJB', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Penjual', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Pembeli', required: false, colSpan: 1 },
      ],
    },
  ],
};

