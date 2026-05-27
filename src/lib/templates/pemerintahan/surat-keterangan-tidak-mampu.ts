import type { TemplateConfig } from '../types';

export const suratSKTMTemplate: TemplateConfig = {
  id: 'surat-keterangan-tidak-mampu',
  name: 'Surat Keterangan Tidak Mampu (SKTM)',
  description: 'Surat keterangan resmi dari RT/RW/Kelurahan untuk mengajukan keringanan biaya, beasiswa, atau bantuan sosial.',
  category: 'pemerintahan',
  icon: 'sentiment_very_dissatisfied',
  price: 0,
  previewComponent: 'SuratSKTMPreview',
  pdfComponent: 'SuratSKTMPDF',
  steps: [
    {
      id: 'data-pemohon',
      title: 'Data Diri & Pengajuan',
      fields: [
        { name: 'namaKepalaKeluarga', type: 'text', label: 'Nama Kepala Keluarga', placeholder: 'Nama kepala keluarga pemohon', required: true, colSpan: 2 },
        { name: 'nama', type: 'text', label: 'Nama Pemohon', placeholder: 'Nama lengkap pemohon', required: true, colSpan: 2 },
        { name: 'nik', type: 'text', label: 'NIK Pemohon', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'tempatLahir', type: 'text', label: 'Tempat Lahir', placeholder: 'Kota lahir', required: true, colSpan: 1 },
        { name: 'tanggalLahir', type: 'date', label: 'Tanggal Lahir', required: true, colSpan: 1 },
        { name: 'pekerjaan', type: 'text', label: 'Pekerjaan', placeholder: 'Cth: Buruh Harian Lepas', required: true, colSpan: 1 },
        { name: 'alamat', type: 'textarea', label: 'Alamat Tinggal', placeholder: 'Sesuai domisili/KTP', required: true, colSpan: 2 },
        { name: 'keperluan', type: 'textarea', label: 'Keperluan Surat', placeholder: 'Cth: Syarat pengajuan keringanan biaya rumah sakit', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Bandung', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'namaPejabat', type: 'text', label: 'Nama Pejabat Kelurahan/Kades', placeholder: 'Nama Lurah/Kades', required: true, colSpan: 1 },
        { name: 'jabatanPejabat', type: 'text', label: 'Jabatan Resmi', placeholder: 'Cth: Lurah Merdeka', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

