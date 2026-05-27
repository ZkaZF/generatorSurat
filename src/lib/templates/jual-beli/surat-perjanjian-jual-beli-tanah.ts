import type { TemplateConfig } from '../types';

export const suratJualBeliTanahTemplate: TemplateConfig = {
  id: 'surat-perjanjian-jual-beli-tanah',
  name: 'Surat Perjanjian Jual Beli Tanah',
  description: 'Surat perjanjian transaksi jual beli bidang tanah bermaterai untuk mengikat hak dan kewajiban hukum para pihak.',
  category: 'jual-beli',
  icon: 'landscape',
  price: 20000,
  previewComponent: 'SuratJualBeliTanahPreview',
  pdfComponent: 'SuratJualBeliTanahPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Para Pihak',
      fields: [
        { name: 'namaPenjual', type: 'text', label: 'Nama Lengkap Penjual (Pihak I)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPenjual', type: 'text', label: 'NIK Penjual', placeholder: '16 digit NIK Penjual', required: true, colSpan: 1 },
        { name: 'alamatPenjual', type: 'textarea', label: 'Alamat Tinggal Penjual', placeholder: 'Alamat lengkap Penjual', required: true, colSpan: 2 },
        { name: 'namaPembeli', type: 'text', label: 'Nama Lengkap Pembeli (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPembeli', type: 'text', label: 'NIK Pembeli', placeholder: '16 digit NIK Pembeli', required: true, colSpan: 1 },
        { name: 'alamatPembeli', type: 'textarea', label: 'Alamat Tinggal Pembeli', placeholder: 'Alamat lengkap Pembeli', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'data-objek',
      title: 'Detail Objek & Pembayaran',
      fields: [
        { name: 'luasTanah', type: 'number', label: 'Luas Tanah (m²)', placeholder: 'Cth: 150', required: true, colSpan: 1 },
        { name: 'nomorSertifikat', type: 'text', label: 'Nomor Sertifikat (SHM/HGB/Girik)', placeholder: 'Cth: SHM No. 1234/Desa', required: true, colSpan: 1 },
        { name: 'lokasiTanah', type: 'textarea', label: 'Lokasi Bidang Tanah', placeholder: 'Alamat lengkap/letak tanah yang ditransaksikan', required: true, colSpan: 2 },
        { name: 'hargaKesepakatan', type: 'number', label: 'Harga Kesepakatan (Rp)', placeholder: 'Total harga tanah', required: true, colSpan: 1 },
        { name: 'metodePembayaran', type: 'select', label: 'Metode Pembayaran', required: true, colSpan: 1,
          options: [
            { value: 'Tunai / Cash Keras', label: 'Tunai / Cash Keras' },
            { value: 'Transfer Bank', label: 'Transfer Bank' },
            { value: 'Pembayaran Bertahap (Cicilan)', label: 'Pembayaran Bertahap (Cicilan)' },
          ]
        },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Yogyakarta', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penandatanganan', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Penjual', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Pembeli', required: false, colSpan: 1 },
      ],
    },
  ],
};

