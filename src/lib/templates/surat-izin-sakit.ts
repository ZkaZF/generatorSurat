import type { TemplateConfig } from './types';

// ─── Surat Izin Sakit ─────────────────────────────────────────────────────────
// FREE | Kategori: Pekerjaan | price: 0 | Watermark on PDF
// ─────────────────────────────────────────────────────────────────────────────

export const suratIzinSakitTemplate: TemplateConfig = {
  id: 'surat-izin-sakit',
  name: 'Surat Izin Sakit',
  description: 'Surat resmi untuk memberitahukan ketidakhadiran karena alasan kesehatan kepada atasan atau perusahaan.',
  category: 'pekerjaan',
  icon: 'local_hospital',
  price: 0, // GRATIS
  previewComponent: 'SuratIzinSakitPreview',
  pdfComponent: 'SuratIzinSakitPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Surat',
      description: 'Lengkapi informasi untuk surat izin sakit Anda.',
      fields: [
        {
          name: 'namaKaryawan',
          type: 'text',
          label: 'Nama Lengkap',
          placeholder: 'Masukkan nama sesuai KTP',
          required: true,
          colSpan: 2,
        },
        {
          name: 'jabatan',
          type: 'text',
          label: 'Jabatan / Posisi',
          placeholder: 'Cth: Staff Akuntansi, Sales Manager',
          required: true,
          colSpan: 1,
        },
        {
          name: 'departemen',
          type: 'text',
          label: 'Departemen',
          placeholder: 'Cth: Keuangan, Marketing',
          required: false,
          colSpan: 1,
        },
        {
          name: 'namaPerusahaan',
          type: 'text',
          label: 'Nama Perusahaan / Instansi',
          placeholder: 'Cth: PT. Maju Bersama Indonesia',
          required: true,
          colSpan: 2,
        },
        {
          name: 'tanggalMulai',
          type: 'date',
          label: 'Tanggal Mulai Tidak Masuk',
          required: true,
          colSpan: 1,
        },
        {
          name: 'tanggalSelesai',
          type: 'date',
          label: 'Tanggal Selesai Izin',
          required: true,
          colSpan: 1,
        },
        {
          name: 'keterangan',
          type: 'textarea',
          label: 'Keterangan Sakit',
          placeholder: 'Cth: Demam tinggi disertai flu dan batuk berdahak sehingga membutuhkan istirahat total.',
          required: true,
          colSpan: 2,
        },
        {
          name: 'kotaSurat',
          type: 'text',
          label: 'Kota Pembuatan Surat',
          placeholder: 'Cth: Jakarta',
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
          label: 'Tanda Tangan',
          required: false,
          colSpan: 2,
        },
      ],
    },
  ],
};
