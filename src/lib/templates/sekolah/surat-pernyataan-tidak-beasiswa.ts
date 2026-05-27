import type { TemplateConfig } from '../types';

export const suratPernyataanTidakBeasiswaTemplate: TemplateConfig = {
  id: 'surat-pernyataan-tidak-beasiswa',
  name: 'Surat Pernyataan Tidak Menerima Beasiswa Lain',
  description: 'Surat pernyataan bermeterai yang menyatakan pemohon tidak sedang menerima beasiswa lain — syarat wajib pengajuan beasiswa baru.',
  category: 'sekolah',
  icon: 'gavel',
  price: 0,
  previewComponent: 'SuratPernyataanTidakBeasiswaPreview',
  pdfComponent: 'SuratPernyataanTidakBeasiswaPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Pernyataan',
      description: 'Lengkapi informasi surat pernyataan tidak menerima beasiswa lain.',
      fields: [
        {
          name: 'namaMahasiswa',
          type: 'text',
          label: 'Nama Lengkap',
          placeholder: 'Cth: Wulandari Putri',
          required: true,
          colSpan: 2,
        },
        {
          name: 'nim',
          type: 'text',
          label: 'NIM / NIS',
          placeholder: 'Cth: 2021007890',
          required: false,
          colSpan: 1,
        },
        {
          name: 'jurusan',
          type: 'text',
          label: 'Program Studi / Jurusan',
          placeholder: 'Cth: S1 Pendidikan Matematika',
          required: true,
          colSpan: 1,
        },
        {
          name: 'namaInstitusi',
          type: 'text',
          label: 'Nama Perguruan Tinggi / Sekolah',
          placeholder: 'Cth: Universitas Negeri Yogyakarta',
          required: true,
          colSpan: 2,
        },
        {
          name: 'namaBeasiswaDilamar',
          type: 'text',
          label: 'Nama Beasiswa yang Dilamar',
          placeholder: 'Cth: Beasiswa KIP Kuliah 2025',
          required: true,
          colSpan: 2,
        },
        {
          name: 'kotaSurat',
          type: 'text',
          label: 'Kota Pembuatan Surat',
          placeholder: 'Cth: Yogyakarta',
          required: true,
          colSpan: 1,
        },
        {
          name: 'tanggalSurat',
          type: 'date',
          label: 'Tanggal Surat',
          required: true,
          colSpan: 1,
        },
        {
          name: 'tandaTangan',
          type: 'signature',
          label: 'Tanda Tangan (di atas Meterai)',
          required: false,
          colSpan: 2,
        },
      ],
    },
  ],
};

