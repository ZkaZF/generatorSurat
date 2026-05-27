import type { TemplateConfig } from '../types';

export const suratPermohonanCutiTemplate: TemplateConfig = {
  id: 'surat-permohonan-cuti',
  name: 'Surat Permohonan Cuti Karyawan',
  description: 'Surat permohonan formal karyawan kepada pimpinan atau HRD untuk mengajukan cuti tahunan, melahirkan, atau menikah.',
  category: 'pekerjaan',
  icon: 'calendar_today',
  price: 0,
  previewComponent: 'SuratPermohonanCutiPreview',
  pdfComponent: 'SuratPermohonanCutiPDF',
  steps: [
    {
      id: 'data-cuti',
      title: 'Detail Pengajuan Cuti',
      fields: [
        { name: 'namaKaryawan', type: 'text', label: 'Nama Lengkap Karyawan', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK / Nomor Induk Karyawan', placeholder: 'ID Karyawan', required: true, colSpan: 1 },
        { name: 'jabatanKaryawan', type: 'text', label: 'Jabatan', placeholder: 'Cth: Staff Administrasi', required: true, colSpan: 1 },
        { name: 'divisiKaryawan', type: 'text', label: 'Divisi / Departemen', placeholder: 'Cth: Keuangan', required: true, colSpan: 1 },
        { name: 'jenisCuti', type: 'select', label: 'Jenis Cuti', required: true, colSpan: 1,
          options: [
            { value: 'Cuti Tahunan', label: 'Cuti Tahunan' },
            { value: 'Cuti Melahirkan', label: 'Cuti Melahirkan' },
            { value: 'Cuti Menikah', label: 'Cuti Menikah' },
            { value: 'Cuti Sakit (Dengan Surat Dokter)', label: 'Cuti Sakit (Dengan Surat Dokter)' },
            { value: 'Cuti Alasan Penting', label: 'Cuti Alasan Penting' },
          ]
        },
        { name: 'tanggalMulaiCuti', type: 'date', label: 'Mulai Cuti', required: true, colSpan: 1 },
        { name: 'tanggalSelesaiCuti', type: 'date', label: 'Selesai Cuti', required: true, colSpan: 1 },
        { name: 'jumlahHari', type: 'number', label: 'Jumlah Hari Kerja Cuti', placeholder: 'Cth: 3', required: true, colSpan: 1 },
        { name: 'alasanCuti', type: 'textarea', label: 'Alasan Mengambil Cuti', placeholder: 'Cth: Melangsungkan pernikahan di luar kota', required: true, colSpan: 2 },
        { name: 'namaBackupKaryawan', type: 'text', label: 'Nama Karyawan Pengganti (Backup)', placeholder: 'Personal yang membackup tugas selama cuti', required: true, colSpan: 1 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Surat', placeholder: 'Cth: Bandung', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Surat', required: true, colSpan: 1 },
        { name: 'tandaTangan', type: 'signature', label: 'Tanda Tangan Pemohon', required: false, colSpan: 2 },
      ],
    },
  ],
};

