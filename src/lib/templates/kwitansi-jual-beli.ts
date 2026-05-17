import type { TemplateConfig } from './types';

export const kwitansiJualBeliTemplate: TemplateConfig = {
  id: 'kwitansi-jual-beli',
  name: 'Kwitansi Jual Beli Formal',
  description: 'Template kwitansi transaksi jual beli yang rapi dan resmi, siap cetak.',
  category: 'jual-beli',
  icon: 'receipt_long',
  price: 0,
  previewComponent: 'KwitansiJualBeliPreview',
  pdfComponent: 'KwitansiJualBeliPDF',
  steps: [
    {
      id: 'data-transaksi',
      title: 'Data Transaksi',
      description: 'Isi detail transaksi jual beli.',
      fields: [
        { name: 'namaPembeli', type: 'text', label: 'Nama Pembeli', placeholder: 'Nama lengkap pembeli', required: true, colSpan: 2 },
        { name: 'namaPenjual', type: 'text', label: 'Nama Penjual / Toko', placeholder: 'Nama penjual / nama toko', required: true, colSpan: 2 },
        { name: 'deskripsiBarang', type: 'textarea', label: 'Deskripsi Barang / Jasa', placeholder: 'Cth: 1 unit laptop ASUS VivoBook X415, warna abu-abu', required: true, colSpan: 2 },
        { name: 'jumlahUang', type: 'text', label: 'Jumlah Uang (Rp)', placeholder: 'Cth: 8.500.000', required: true, colSpan: 1 },
        { name: 'metodePembayaran', type: 'select', label: 'Metode Pembayaran', required: true, colSpan: 1,
          options: [
            { value: 'Tunai', label: 'Tunai' },
            { value: 'Transfer Bank', label: 'Transfer Bank' },
            { value: 'QRIS', label: 'QRIS' },
            { value: 'Cicilan', label: 'Cicilan' },
          ]
        },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Surabaya', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Transaksi', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Penjual', required: false, colSpan: 2 },
      ],
    },
  ],
};
