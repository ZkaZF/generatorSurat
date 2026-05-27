import type { TemplateConfig } from '../types';

export const suratSewaMobilTemplate: TemplateConfig = {
  id: 'surat-perjanjian-sewa-mobil',
  name: 'Surat Perjanjian Sewa Mobil / Rental',
  description: 'Surat kontrak rental mobil untuk memitigasi risiko kerusakan, lepas kunci/dengan supir, keterlambatan, dan denda.',
  category: 'jual-beli',
  icon: 'car_rental',
  price: 15000,
  previewComponent: 'SuratSewaMobilPreview',
  pdfComponent: 'SuratSewaMobilPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Rental & Penyewa',
      fields: [
        { name: 'namaPemilikRental', type: 'text', label: 'Nama Pemilik / Usaha Rental (Pihak I)', placeholder: 'Cth: Bintang Rental / Ahmad', required: true, colSpan: 2 },
        { name: 'namaPenyewa', type: 'text', label: 'Nama Penyewa Kendaraan (Pihak II)', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikPenyewa', type: 'text', label: 'NIK Penyewa', placeholder: '16 digit NIK', required: true, colSpan: 1 },
      ],
    },
    {
      id: 'detail-sewa',
      title: 'Detail Sewa & Kendaraan',
      fields: [
        { name: 'merkTipe', type: 'text', label: 'Merk & Tipe Kendaraan', placeholder: 'Cth: Toyota Avanza 2022', required: true, colSpan: 1 },
        { name: 'nomorPolisi', type: 'text', label: 'Nomor Polisi (Plat)', placeholder: 'Cth: D 9821 XY', required: true, colSpan: 1 },
        { name: 'tanggalMulaiSewa', type: 'date', label: 'Tanggal Mulai Sewa', required: true, colSpan: 1 },
        { name: 'tanggalSelesaiSewa', type: 'date', label: 'Tanggal Selesai Sewa', required: true, colSpan: 1 },
        { name: 'tarifSewaPerHari', type: 'number', label: 'Tarif Sewa Per Hari (Rp)', placeholder: 'Biaya rental harian', required: true, colSpan: 1 },
        { name: 'dendaKeterlambatan', type: 'number', label: 'Denda Overtime Per Jam (Rp)', placeholder: 'Biaya kelebihan waktu', required: true, colSpan: 1 },
        { name: 'tanggungJawabKerusakan', type: 'select', label: 'Sistem Pengambilan / Driver', required: true, colSpan: 2,
          options: [
            { value: 'Sewa Lepas Kunci (Penyewa bertanggung jawab penuh atas segala kerusakan)', label: 'Sewa Lepas Kunci (Penyewa bertanggung jawab penuh)' },
            { value: 'Sewa Dengan Driver (Driver tanggung jawab operasional)', label: 'Sewa Dengan Driver (Driver tanggung jawab operasional)' },
          ]
        },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Bandung', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Rental (Pihak I)', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Penyewa (Pihak II)', required: false, colSpan: 1 },
      ],
    },
  ],
};

