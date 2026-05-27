import type { TemplateConfig } from '../types';

export const suratPKWTTTemplate: TemplateConfig = {
  id: 'surat-perjanjian-pkwtt',
  name: 'Surat Kontrak Kerja Tetap (PKWTT)',
  description: 'Surat perjanjian kerja resmi waktu tidak tertentu untuk mengangkat staf/karyawan tetap lengkap dengan rincian gaji dan tunjangan.',
  category: 'pekerjaan',
  icon: 'assignment_ind',
  price: 15000,
  previewComponent: 'SuratPKWTTPreview',
  pdfComponent: 'SuratPKWTTPDF',
  steps: [
    {
      id: 'data-pihak',
      title: 'Identitas Perusahaan & Karyawan',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'Cth: PT. Global Tekno', required: true, colSpan: 2 },
        { name: 'namaPenanggungJawab', type: 'text', label: 'Nama Pejabat Penanggung Jawab', placeholder: 'Nama Direktur / HRD Manager', required: true, colSpan: 1 },
        { name: 'jabatanPenanggungJawab', type: 'text', label: 'Jabatan Penanggung Jawab', placeholder: 'Cth: Direktur Utama', required: true, colSpan: 1 },
        { name: 'namaKaryawan', type: 'text', label: 'Nama Lengkap Karyawan', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK Karyawan (KTP)', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'alamatKaryawan', type: 'textarea', label: 'Alamat Tinggal Karyawan', placeholder: 'Alamat lengkap', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'detail-pekerjaan',
      title: 'Jabatan, Gaji & Masa Kerja',
      fields: [
        { name: 'jabatanKaryawan', type: 'text', label: 'Jabatan Karyawan', placeholder: 'Cth: Marketing Executive', required: true, colSpan: 1 },
        { name: 'tanggalMulaiBekerja', type: 'date', label: 'Mulai Efektif Kerja Tetap', required: true, colSpan: 1 },
        { name: 'gajiPokok', type: 'number', label: 'Gaji Pokok Bulanan (Rp)', placeholder: 'Nominal Gaji Pokok', required: true, colSpan: 1 },
        { name: 'tunjanganBulanan', type: 'number', label: 'Total Tunjangan Bulanan (Rp)', placeholder: 'Cth: Tunjangan Makan / Transportasi', required: false, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Jakarta Pusat', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penandatanganan', required: true, colSpan: 1 },
        { name: 'tandaTanganPenjual', type: 'signature', label: 'Tanda Tangan Pejabat (Pihak I)', required: false, colSpan: 1 },
        { name: 'tandaTanganPembeli', type: 'signature', label: 'Tanda Tangan Karyawan (Pihak II)', required: false, colSpan: 1 },
      ],
    },
  ],
};

