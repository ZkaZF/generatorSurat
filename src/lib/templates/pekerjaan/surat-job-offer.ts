import type { TemplateConfig } from '../types';

export const suratJobOfferTemplate: TemplateConfig = {
  id: 'surat-job-offer',
  name: 'Surat Penawaran Kerja (Job Offer)',
  description: 'Surat penawaran formal (job offer) dari pemilik usaha atau HRD kepada kandidat terpilih sebelum penandatanganan kontrak kerja resmi.',
  category: 'pekerjaan',
  icon: 'mark_email_unread',
  price: 0,
  previewComponent: 'SuratJobOfferPreview',
  pdfComponent: 'SuratJobOfferPDF',
  steps: [
    {
      id: 'data-offer',
      title: 'Detail Penawaran Kerja',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'Cth: PT. Inovasi Bangsa', required: true, colSpan: 2 },
        { name: 'namaHRD', type: 'text', label: 'Nama HRD / Recruiter', placeholder: 'Nama pejabat rekrutmen', required: true, colSpan: 1 },
        { name: 'namaKandidat', type: 'text', label: 'Nama Lengkap Kandidat', placeholder: 'Kandidat penerima penawaran', required: true, colSpan: 2 },
        { name: 'posisiTawaran', type: 'text', label: 'Posisi Yang Ditawarkan', placeholder: 'Cth: Junior React Developer', required: true, colSpan: 1 },
        { name: 'gajiTawaran', type: 'number', label: 'Gaji Pokok Ditawarkan (Rp)', placeholder: 'Nominal gaji bulanan', required: true, colSpan: 1 },
        { name: 'tanggalMulaiOffer', type: 'date', label: 'Tanggal Mulai Bekerja', required: true, colSpan: 1 },
        { name: 'batasWaktuRespon', type: 'date', label: 'Batas Waktu Respon Kandidat', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Jakarta Timur', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
      ],
    },
  ],
};

