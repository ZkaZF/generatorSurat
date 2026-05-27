import type { TemplateConfig } from '../types';

export const suratPengantarSKCKTemplate: TemplateConfig = {
  id: 'surat-pengantar-skck',
  name: 'Surat Pengantar Pembuatan SKCK',
  description: 'Surat pengantar resmi dari lingkungan RT/RW untuk melengkapi berkas permohonan SKCK di Polsek/Polres.',
  category: 'pemerintahan',
  icon: 'local_police',
  price: 0,
  previewComponent: 'SuratPengantarSKCKPreview',
  pdfComponent: 'SuratPengantarSKCKPDF',
  steps: [
    {
      id: 'data-skck',
      title: 'Data Diri & Keperluan',
      fields: [
        { name: 'nama', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Kota lahir', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'agama', type: 'text', label: 'Agama', placeholder: 'Cth: Islam', required: true, colSpan: 1 },
        { name: 'pekerjaan', type: 'text', label: 'Pekerjaan', placeholder: 'Cth: Karyawan Swasta', required: true, colSpan: 1 },
        { name: 'alamat', type: 'textarea', label: 'Alamat Lengkap', placeholder: 'Sesuai KTP/KK', required: true, colSpan: 2 },
        { name: 'keperluan', type: 'text', label: 'Keperluan Pembuatan SKCK', placeholder: 'Cth: Melamar Pekerjaan / Mendaftar CPNS', required: true, colSpan: 2 },
        { name: 'rtRw', type: 'text', label: 'RT / RW', placeholder: 'Cth: RT 002 / RW 009', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Depok', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaKetuaRT', type: 'text', label: 'Nama Ketua RT', placeholder: 'Nama Ketua RT setempat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

