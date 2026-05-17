import type { TemplateConfig } from './types';

export const suratPerjanjianKerjaTemplate: TemplateConfig = {
  id: 'surat-perjanjian-kerja',
  name: 'Surat Perjanjian Kerja (PKWT)',
  description: 'Draft kontrak kerja waktu tertentu antara pemberi kerja dan karyawan, lengkap dengan pasal-pasal.',
  category: 'pekerjaan',
  icon: 'handshake',
  price: 15000,
  previewComponent: 'SuratPerjanjianKerjaPreview',
  pdfComponent: 'SuratPerjanjianKerjaPDF',
  steps: [
    {
      id: 'pihak-pertama',
      title: 'Pihak Pertama (Pemberi Kerja)',
      description: 'Data perusahaan atau pemberi kerja.',
      fields: [
        { name: 'namaPerusahaan', type: 'text', label: 'Nama Perusahaan', placeholder: 'PT. / CV. / UD. ...', required: true, colSpan: 2 },
        { name: 'namaWakil', type: 'text', label: 'Nama Perwakilan', placeholder: 'Direktur / HRD', required: true, colSpan: 1 },
        { name: 'jabatanWakil', type: 'text', label: 'Jabatan Perwakilan', placeholder: 'Cth: Direktur Utama', required: true, colSpan: 1 },
        { name: 'alamatPerusahaan', type: 'text', label: 'Alamat Perusahaan', placeholder: 'Jl. ... No. ...', required: true, colSpan: 2 },
      ],
    },
    {
      id: 'pihak-kedua',
      title: 'Pihak Kedua (Karyawan)',
      description: 'Data karyawan yang akan dipekerjakan.',
      fields: [
        { name: 'namaKaryawan', type: 'text', label: 'Nama Karyawan', placeholder: 'Sesuai KTP', required: true, colSpan: 2 },
        { name: 'nikKaryawan', type: 'text', label: 'NIK Karyawan', placeholder: '3271xxxxxxxxxxxx', required: true, colSpan: 1 },
        { name: 'alamatKaryawan', type: 'text', label: 'Alamat Karyawan', placeholder: 'Jl. ... No. ...', required: true, colSpan: 1 },
        { name: 'posisi', type: 'text', label: 'Posisi / Jabatan', placeholder: 'Cth: Staff Marketing', required: true, colSpan: 1 },
        { name: 'departemen', type: 'text', label: 'Departemen', placeholder: 'Cth: Marketing', required: false, colSpan: 1 },
      ],
    },
    {
      id: 'detail-kontrak',
      title: 'Detail Kontrak',
      description: 'Masa kerja, gaji, dan ketentuan lainnya.',
      fields: [
        { name: 'tanggalMulai', type: 'date', label: 'Tanggal Mulai Kerja', required: true, colSpan: 1 },
        { name: 'tanggalBerakhir', type: 'date', label: 'Tanggal Berakhir Kontrak', required: true, colSpan: 1 },
        { name: 'gajiPokok', type: 'text', label: 'Gaji Pokok (Rp)', placeholder: 'Cth: 5.000.000', required: true, colSpan: 1 },
        { name: 'tunjanganLain', type: 'text', label: 'Tunjangan Lain (Rp)', placeholder: 'Cth: 500.000 (opsional)', required: false, colSpan: 1 },
        { name: 'jamKerja', type: 'text', label: 'Jam Kerja', placeholder: 'Cth: 08.00 - 17.00 WIB', required: false, colSpan: 2 },
        { name: 'kotaSurat', type: 'text', label: 'Kota Penandatanganan', placeholder: 'Cth: Surabaya', required: true, colSpan: 1 },
        { name: 'tanggalSurat', type: 'date', label: 'Tanggal Penandatanganan', required: true, colSpan: 1 },
        { name: 'tandaTanganPemberi', type: 'signature', label: 'TTD Pemberi Kerja', required: false, colSpan: 1 },
        { name: 'tandaTanganPenerima', type: 'signature', label: 'TTD Karyawan', required: false, colSpan: 1 },
      ],
    },
  ],
};
