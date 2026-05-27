import type { TemplateConfig } from '../types';

export const suratPermohonanBeasiswaTemplate: TemplateConfig = {
  id: 'surat-permohonan-beasiswa',
  name: 'Surat Permohonan Beasiswa',
  description: 'Surat formal permohonan beasiswa yang profesional ke lembaga penyedia beasiswa.',
  category: 'sekolah',
  icon: 'school',
  price: 0,
  previewComponent: 'SuratPermohonanBeasiswaPreview',
  pdfComponent: 'SuratPermohonanBeasiswaPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Permohonan',
      fields: [
        { name: 'namaMahasiswa', type: 'text', label: 'Nama Lengkap', placeholder: 'Sesuai KTP/KTM', required: true, colSpan: 2 },
        { name: 'nim', type: 'text', label: 'NIM / No. Siswa', placeholder: 'Cth: 2102212345', required: false, colSpan: 1 },
        { name: 'jurusan', type: 'text', label: 'Jurusan / Program Studi', placeholder: 'Cth: Teknik Elektro', required: true, colSpan: 1 },
        { name: 'namaInstitusi', type: 'text', label: 'Nama Kampus / Sekolah', placeholder: 'Cth: Universitas Brawijaya', required: true, colSpan: 2 },
        { name: 'semester', type: 'text', label: 'Semester / Kelas', placeholder: 'Cth: Semester 5', required: false, colSpan: 1 },
        { name: 'ipk', type: 'text', label: 'IPK / Nilai Rata-rata', placeholder: 'Cth: 3.75', required: false, colSpan: 1 },
        { name: 'namaBeasiswa', type: 'text', label: 'Nama Beasiswa yang Dilamar', placeholder: 'Cth: Beasiswa KIP Kuliah 2025', required: true, colSpan: 2 },
        { name: 'lembagaBeasiswa', type: 'text', label: 'Nama Lembaga / Instansi Pemberi', placeholder: 'Cth: Kementerian Pendidikan RI', required: true, colSpan: 2 },
        { name: 'motivasi', type: 'textarea', label: 'Motivasi & Kondisi Ekonomi', placeholder: 'Jelaskan kondisi ekonomi keluarga dan motivasi Anda membutuhkan beasiswa ini...', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota', placeholder: 'Cth: Malang', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

