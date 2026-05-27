import type { TemplateConfig } from '../types';

export const suratSupplierTemplate: TemplateConfig = {
  id: 'surat-perjanjian-supplier',
  name: 'Surat Perjanjian Supplier / Pasok Barang',
  description: 'Surat kesepakatan penyuplaian bahan baku/barang dagangan berkala guna mengikat kestabilan harga dan volume pasokan.',
  category: 'jual-beli',
  icon: 'local_shipping',
  price: 15000,
  previewComponent: 'SuratSupplierPreview',
  pdfComponent: 'SuratSupplierPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Supplier & Pembeli',
      fields: [
        { name: 'namaSupplier', type: 'text', label: 'Nama Supplier / Perusahaan (Pihak I)', placeholder: 'Cth: CV. Tani Maju / Rian', required: true, colSpan: 2 },
        { name: 'namaPembeliBisnis', type: 'text', label: 'Nama Pembeli / Usaha (Pihak II)', placeholder: 'Cth: PT. Kopi Sukses / Cafe Barokah', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'pasokan-kontrak',
      title: 'Rincian Pasokan & Kontrak',
      fields: [
        { name: 'jenisBahanBaku', type: 'text', label: 'Jenis Bahan Baku / Barang', placeholder: 'Cth: Biji Kopi Arabika Lintong', required: true, colSpan: 2 },
        { name: 'hargaPerSatuan', type: 'number', label: 'Harga Per Satuan (Rp)', placeholder: 'Harga mengikat per unit', required: true, colSpan: 1 },
        { name: 'satuanBarang', type: 'text', label: 'Satuan Barang', placeholder: 'Cth: kg / box / liter', required: true, colSpan: 1 },
        { name: 'kuantitasMinimal', type: 'number', label: 'Kuantitas Minimal Pasokan', placeholder: 'Volume pasok minimum per periode (Cth: 100)', required: true, colSpan: 1 },
        { name: 'periodeKontrak', type: 'number', label: 'Durasi Kontrak (Bulan)', placeholder: 'Batas mengikatnya kontrak (Cth: 12)', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Medan', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Supplier', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Pembeli', required: false, colSpan: 1 },
      ],
    },
  ],
};

