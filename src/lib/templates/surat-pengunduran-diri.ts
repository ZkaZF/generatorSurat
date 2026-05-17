import type { TemplateConfig } from './types';

// ─── Surat Pengunduran Diri ───────────────────────────────────────────────────
// FREE | Kategori: Pekerjaan | price: 0 | Watermark on PDF
// ─────────────────────────────────────────────────────────────────────────────

export const suratPengunduranDiriTemplate: TemplateConfig = {
  id: 'surat-pengunduran-diri',
  name: 'Surat Pengunduran Diri',
  description: 'Surat resmi untuk menyampaikan pengunduran diri dari jabatan atau pekerjaan secara profesional.',
  category: 'pekerjaan',
  icon: 'work_off',
  price: 0, // GRATIS
  previewComponent: 'SuratPengunduranDiriPreview',
  pdfComponent: 'SuratPengunduranDiriPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Surat',
      description: 'Lengkapi informasi untuk surat pengunduran diri Anda.',
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
          name: 'namaAtasan',
          type: 'text',
          label: 'Nama Atasan / HRD',
          placeholder: 'Cth: Bapak Budi Santoso',
          required: false,
          colSpan: 1,
        },
        {
          name: 'tanggalEfektif',
          type: 'date',
          label: 'Tanggal Efektif Pengunduran Diri',
          required: true,
          colSpan: 1,
        },
        {
          name: 'alasan',
          type: 'textarea',
          label: 'Alasan Pengunduran Diri',
          placeholder: 'Cth: Saya bermaksud untuk mengundurkan diri karena ingin mengembangkan karir di bidang lain...',
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
