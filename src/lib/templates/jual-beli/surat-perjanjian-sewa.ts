import type { TemplateConfig } from '../types';

export const suratPerjanjianSewaTemplate: TemplateConfig = {
  id: 'surat-perjanjian-sewa',
  name: 'Surat Perjanjian Sewa Rumah/Kos',
  description: 'Perjanjian sewa menyewa properti antara pemilik dan penyewa, lengkap dengan pasal hak & kewajiban.',
  category: 'jual-beli',
  icon: 'home',
  price: 15000,
  previewComponent: 'SuratPerjanjianSewaPreview',
  pdfComponent: 'SuratPerjanjianSewaPDF',
  steps: [
    {
      id: 'pihak-pihak',
      title: 'Data Para Pihak',
      description: 'Identitas pemilik dan penyewa.',
      fields: [
        { name: 'namaPemilik', type: 'text', label: 'Nama Pemilik (Pihak I)', placeholder: 'Nama lengkap pemilik', required: true, colSpan: 1 },
        { name: 'nikPemilik', type: 'text', label: 'NIK Pemilik', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'alamatPemilik', type: 'text', label: 'Alamat Pemilik', placeholder: 'Jl. ...', required: true, colSpan: 2 },
        { name: 'namaPenyewa', type: 'text', label: 'Nama Penyewa (Pihak II)', placeholder: 'Nama lengkap penyewa', required: true, colSpan: 1 },
        { name: 'nikPenyewa', type: 'text', label: 'NIK Penyewa', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'alamatPenyewa', type: 'text', label: 'Alamat Asal Penyewa', placeholder: 'Jl. ...', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'detail-sewa',
      title: 'Detail Properti & Sewa',
      description: 'Informasi properti, harga sewa, dan masa berlaku.',
      fields: [
        { name: 'alamatProperti', type: 'text', label: 'Alamat Properti yang Disewa', placeholder: 'Alamat lengkap rumah/kos', required: true, colSpan: 2 },
        { name: 'jenisProperti', type: 'select', label: 'Jenis Properti', required: true, colSpan: 1,
          options: [
            { value: 'Rumah', label: 'Rumah' },
            { value: 'Kos/Kamar', label: 'Kos / Kamar' },
            { value: 'Ruko', label: 'Ruko' },
            { value: 'Kontrakan', label: 'Kontrakan' },
          ]
        },
        { name: 'hargaSewa', type: 'text', label: 'Harga Sewa (Rp)', placeholder: 'Cth: 3.500.000', required: true, colSpan: 1 },
        { name: 'periodeSewa', type: 'select', label: 'Periode Sewa', required: true, colSpan: 1,
          options: [
            { value: 'per bulan', label: 'Per Bulan' },
            { value: 'per tahun', label: 'Per Tahun' },
          ]
        },
        { name: 'tanggalMulaiSewa', type: 'date', label: 'Tanggal Mulai Sewa', required: true, colSpan: 1 },
        { name: 'tanggalAkhirSewa', type: 'date', label: 'Tanggal Akhir Sewa', required: true, colSpan: 1 },
        { name: 'uangDeposit', type: 'text', label: 'Uang Deposit (Rp)', placeholder: 'Cth: 1.000.000 (opsional)', required: false, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Penandatanganan', placeholder: 'Cth: Bandung', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penandatanganan', required: true, colSpan: 1 },
        { name: 'tandaTanganPemberi', type: 'signature', label: 'TTD Pemilik', required: false, colSpan: 1 },
        { name: 'tandaTanganPenerima', type: 'signature', label: 'TTD Penyewa', required: false, colSpan: 1 },
      ],
    },
  ],
};

