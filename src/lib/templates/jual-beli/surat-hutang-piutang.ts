import type { TemplateConfig } from '../types';

export const suratHutangPiutangTemplate: TemplateConfig = {
  id: 'surat-hutang-piutang',
  name: 'Surat Perjanjian Hutang Piutang',
  description: 'Perjanjian pinjam-meminjam uang yang sah secara hukum, dengan ketentuan cicilan dan bunga opsional.',
  category: 'jual-beli',
  icon: 'account_balance_wallet',
  price: 15000,
  previewComponent: 'SuratHutangPiutangPreview',
  pdfComponent: 'SuratHutangPiutangPDF',
  steps: [
    {
      id: 'pihak-pihak',
      title: 'Data Para Pihak',
      description: 'Identitas pemberi dan penerima pinjaman.',
      fields: [
        { name: 'namaPemberiPinjaman', type: 'text', label: 'Nama Pemberi Pinjaman (Pihak I)', placeholder: 'Nama lengkap', required: true, colSpan: 1 },
        { name: 'nikPemberi', type: 'text', label: 'NIK Pemberi', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'namaPeminjam', type: 'text', label: 'Nama Peminjam (Pihak II)', placeholder: 'Nama lengkap', required: true, colSpan: 1 },
        { name: 'nikPeminjam', type: 'text', label: 'NIK Peminjam', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'alamatPeminjam', type: 'text', label: 'Alamat Peminjam', placeholder: 'Jl. ...', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'detail-pinjaman',
      title: 'Detail Pinjaman',
      description: 'Jumlah pinjaman, bunga, dan cara pembayaran.',
      fields: [
        { name: 'jumlahPinjaman', type: 'text', label: 'Jumlah Pinjaman (Rp)', placeholder: 'Cth: 10.000.000', required: true, colSpan: 2 },
        { name: 'bungaPerBulan', type: 'text', label: 'Bunga per Bulan (%)', placeholder: 'Cth: 2 (isi 0 jika tanpa bunga)', required: false, colSpan: 1 },
        { name: 'lamaPinjaman', type: 'text', label: 'Jangka Waktu', placeholder: 'Cth: 12 bulan', required: true, colSpan: 1 },
        { name: 'caraPembayaran', type: 'select', label: 'Cara Pembayaran', required: true, colSpan: 2,
          options: [
            { value: 'cicilan bulanan', label: 'Cicilan Bulanan' },
            { value: 'lunas sekaligus', label: 'Lunas Sekaligus' },
            { value: 'kesepakatan bersama', label: 'Sesuai Kesepakatan' },
          ]
        },
        { name: 'jaminan', type: 'text', label: 'Jaminan (Opsional)', placeholder: 'Cth: BPKB Motor, Sertifikat Tanah', required: false, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Penandatanganan', placeholder: 'Cth: Semarang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penandatanganan', required: true, colSpan: 1 },
        { name: 'tandaTanganPemberi', type: 'signature', label: 'TTD Pemberi Pinjaman', required: false, colSpan: 1 },
        { name: 'tandaTanganPenerima', type: 'signature', label: 'TTD Peminjam', required: false, colSpan: 1 },
      ],
    },
  ],
};

