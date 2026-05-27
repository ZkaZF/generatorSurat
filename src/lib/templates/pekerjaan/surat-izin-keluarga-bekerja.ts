import type { TemplateConfig } from '../types';

export const suratIzinKeluargaBekerjaTemplate: TemplateConfig = {
  id: 'surat-izin-keluarga-bekerja',
  name: 'Surat Izin Orang Tua / Suami Bekerja',
  description: 'Surat izin tertulis formal dari keluarga (suami, istri, atau orang tua) untuk memperbolehkan pemohon bekerja di perusahaan tertentu.',
  category: 'pekerjaan',
  icon: 'family_restroom',
  price: 0,
  previewComponent: 'SuratIzinKeluargaBekerjaPreview',
  pdfComponent: 'SuratIzinKeluargaBekerjaPDF',
  steps: [
    {
      id: 'data-pemberi-izin',
      title: 'Pemberi Izin & Calon Karyawan',
      fields: [
        { name: 'namaPemberiIzin', type: 'text', label: 'Nama Lengkap Pemberi Izin', placeholder: 'Nama Suami / Orang Tua', required: true, colSpan: 2 },
        { name: 'hubungan', type: 'select', label: 'Hubungan dengan Calon Karyawan', required: true, colSpan: 1,
          options: [
            { value: 'Orang Tua (Ayah / Ibu)', label: 'Orang Tua (Ayah / Ibu)' },
            { value: 'Suami', label: 'Suami' },
            { value: 'Istri', label: 'Istri' },
            { value: 'Wali', label: 'Wali' },
          ]
        },
        { name: 'alamatPemberiIzin', type: 'textarea', label: 'Alamat Pemberi Izin', placeholder: 'Alamat lengkap', required: true, colSpan: 2 },
        { name: 'namaKaryawan', type: 'text', label: 'Nama Lengkap Calon Karyawan', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK Calon Karyawan', placeholder: '16 digit NIK', required: true, colSpan: 1 },
        { name: 'alamatKaryawan', type: 'textarea', label: 'Alamat Calon Karyawan', placeholder: 'Alamat tinggal calon karyawan', required: true, colSpan: 2 },
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan Tujuan Bekerja', placeholder: 'Cth: PT. Prakarsa Utama', required: true, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Bekasi', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemberi Izin', required: false, colSpan: 2 },
      ],
    },
  ],
};

