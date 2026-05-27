import type { TemplateConfig } from '../types';

export const suratCicilanTemplate: TemplateConfig = {
  id: 'surat-perjanjian-cicilan',
  name: 'Surat Perjanjian Pembayaran Cicilan',
  description: 'Surat komitmen dan pengakuan hutang resmi bermaterai yang mengikat debitur untuk melakukan angsuran pembayaran secara rutin.',
  category: 'jual-beli',
  icon: 'payments',
  price: 10000,
  previewComponent: 'SuratCicilanPreview',
  pdfComponent: 'SuratCicilanPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Kreditur & Debitur',
      fields: [
        { name: 'namaKreditur', type: 'text', label: 'Nama Penerima Pembayaran / Kreditur (Pihak I)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'namaDebitur', type: 'text', label: 'Nama Pembayar / Debitur (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'angsuran-detail',
      title: 'Rincian Hutang & Skema Angsuran',
      fields: [
        { name: 'nominalHutang', type: 'number', label: 'Nominal Hutang Pokok / Transaksi (Rp)', placeholder: 'Cth: 15000000', required: true, colSpan: 1 },
        { name: 'alasanHutang', type: 'text', label: 'Keperluan / Latar Belakang Hutang', placeholder: 'Cth: Sisa pelunasan pembelian barang / pinjaman uang', required: true, colSpan: 2 },
        { name: 'nominalCicilanPerBulan', type: 'number', label: 'Nominal Cicilan Per Bulan (Rp)', placeholder: 'Angsuran bulanan', required: true, colSpan: 1 },
        { name: 'jumlahTenor', type: 'number', label: 'Tenor Angsuran (Bulan)', placeholder: 'Cth: 10', required: true, colSpan: 1 },
        { name: 'tanggalJatuhTempo', type: 'date', label: 'Tanggal Cutoff Jatuh Tempo Bulanan', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Yogyakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penandatanganan', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Penerima (Pihak I)', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Pembayar (Pihak II)', required: false, colSpan: 1 },
      ],
    },
  ],
};

