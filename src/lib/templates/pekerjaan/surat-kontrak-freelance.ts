import type { TemplateConfig } from '../types';

export const suratKontrakFreelanceTemplate: TemplateConfig = {
  id: 'surat-kontrak-freelance',
  name: 'Surat Kontrak Kerja Jasa / Freelance',
  description: 'Surat kontrak kerja sama freelance terstruktur dilengkapi rincian project, nominal DP, batas waktu, dan batasan revisi.',
  category: 'pekerjaan',
  icon: 'laptop_mac',
  price: 10000,
  previewComponent: 'SuratFreelancePreview',
  pdfComponent: 'SuratFreelancePDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Klien & Freelancer',
      fields: [
        { name: 'namaKlien', type: 'text', label: 'Nama Lengkap Klien (Pihak I)', placeholder: 'Klien perorangan / perusahaan', required: true, colSpan: 2 },
        { name: 'namaFreelancer', type: 'text', label: 'Nama Lengkap Freelancer (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'alamatFreelancer', type: 'textarea', label: 'Alamat Lengkap Freelancer', placeholder: 'Alamat tinggal freelancer', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'data-project',
      title: 'Rincian Kerja & Pembayaran',
      fields: [
        { name: 'namaProject', type: 'text', label: 'Nama / Deskripsi Project', placeholder: 'Cth: Pembuatan Website E-Commerce Toko Baju', required: true, colSpan: 2 },
        { name: 'hargaJasaTotal', type: 'number', label: 'Harga Jasa Total (Rp)', placeholder: 'Total kesepakatan jasa', required: true, colSpan: 1 },
        { name: 'uangMuka', type: 'number', label: 'Uang Muka / DP (Rp)', placeholder: 'Cth: 50% dari harga total', required: true, colSpan: 1 },
        { name: 'sisaPelunasan', type: 'number', label: 'Sisa Pelunasan (Rp)', placeholder: 'Nominal sisa setelah DP', required: true, colSpan: 1 },
        { name: 'jumlahRevisi', type: 'number', label: 'Jumlah Maksimal Revisi (Kali)', placeholder: 'Cth: 3', required: true, colSpan: 1 },
        { name: 'batasWaktuProject', type: 'date', label: 'Batas Waktu Pengiriman Project (Deadline)', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Bandung', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Perjanjian', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Freelancer (Pihak II)', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Klien (Pihak I)', required: false, colSpan: 1 },
      ],
    },
  ],
};

