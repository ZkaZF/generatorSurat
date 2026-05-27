import type { TemplateConfig } from '../types';

export const suratTugasSPPDTemplate: TemplateConfig = {
  id: 'surat-tugas-sppd',
  name: 'Surat Tugas / SPPD Dinas Karyawan',
  description: 'Surat perintah penugasan dinas resmi dari manajemen kepada karyawan untuk melakukan perjalanan bisnis/tugas luar kota.',
  category: 'pekerjaan',
  icon: 'business_center',
  price: 0,
  previewComponent: 'SuratTugasSPPDPreview',
  pdfComponent: 'SuratTugasSPPDPDF',
  steps: [
    {
      id: 'data-tugas',
      title: 'Detail Penugasan Dinas',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'Cth: PT. Nusantara Abadi', required: true, colSpan: 2 },
        { name: 'namaPemberiTugas', type: 'text', label: 'Nama Pemberi Tugas', placeholder: 'Direktur / HRD', required: true, colSpan: 1 },
        { name: 'jabatanPemberiTugas', type: 'text', label: 'Jabatan Pemberi Tugas', placeholder: 'Cth: Operational Manager', required: true, colSpan: 1 },
        { name: 'namaKaryawan', type: 'text', label: 'Nama Lengkap Penerima Tugas', placeholder: 'Nama Karyawan', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK / ID Karyawan', placeholder: 'ID Karyawan', required: true, colSpan: 1 },
        { name: 'jabatanKaryawan', type: 'text', label: 'Jabatan Karyawan', placeholder: 'Cth: Senior Engineer', required: true, colSpan: 1 },
        { name: 'maksudPerjalanan', type: 'textarea', label: 'Maksud & Uraian Tugas Dinas', placeholder: 'Cth: Melakukan supervisi teknis pemasangan turbin pembangkit di lokasi proyek.', required: true, colSpan: 2 },
        { name: 'lokasiTujuan', type: 'text', label: 'Kota / Lokasi Tujuan Dinas', placeholder: 'Cth: Balikpapan, Kalimantan Timur', required: true, colSpan: 2 },
        { name: 'tanggalMulaiDinas', type: 'date', label: 'Mulai Penugasan', required: true, colSpan: 1 },
        { name: 'tanggalSelesaiDinas', type: 'date', label: 'Selesai Penugasan', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Balikpapan', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penerbitan Surat', required: true, colSpan: 1 },
      ],
    },
  ],
};

