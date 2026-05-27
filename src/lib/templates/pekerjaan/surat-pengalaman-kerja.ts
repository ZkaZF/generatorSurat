import type { TemplateConfig } from '../types';

export const suratPengalamanKerjaTemplate: TemplateConfig = {
  id: 'surat-pengalaman-kerja',
  name: 'Surat Pengalaman Kerja (Paklaring)',
  description: 'Surat keterangan resmi dari perusahaan/HRD untuk menerangkan masa bakti dan kontribusi kerja eks-karyawan sebagai syarat pencairan dana BPJS.',
  category: 'pekerjaan',
  icon: 'work_history',
  price: 0,
  previewComponent: 'SuratPengalamanKerjaPreview',
  pdfComponent: 'SuratPengalamanKerjaPDF',
  steps: [
    {
      id: 'data-paklaring',
      title: 'Identitas Perusahaan & Karyawan',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'Cth: PT. Digital Nusantara', required: true, colSpan: 2 },
        { name: 'namaAtasan', type: 'text', label: 'Nama Atasan / HRD', placeholder: 'Nama pejabat yang berwenang', required: true, colSpan: 1 },
        { name: 'jabatanAtasan', type: 'text', label: 'Jabatan Atasan', placeholder: 'Cth: HRD Manager', required: true, colSpan: 1 },
        { name: 'namaKaryawan', type: 'text', label: 'Nama Lengkap Karyawan', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK Karyawan (KTP)', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'jabatanTerakhir', type: 'text', label: 'Jabatan Terakhir Karyawan', placeholder: 'Cth: Senior Accountant', required: true, colSpan: 1 },
        { name: 'tanggalMulaiKerja', type: 'date', label: 'Mulai Bekerja', required: true, colSpan: 1 },
        { name: 'tanggalSelesaiKerja', type: 'date', label: 'Selesai Bekerja', required: true, colSpan: 1 },
        { name: 'prestasiKontribusi', type: 'textarea', label: 'Penilaian / Kontribusi Kerja', placeholder: 'Cth: Selama bekerja yang bersangkutan menunjukkan integritas, loyalitas, dan dedikasi yang sangat baik bagi perusahaan.', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Jakarta Selatan', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
      ],
    },
  ],
};

