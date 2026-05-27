import type { TemplateConfig } from '../types';

// ─── Surat Izin Tidak Masuk Sekolah / Kuliah ──────────────────────────────────
// FREE | Kategori: Sekolah | price: 0
// ─────────────────────────────────────────────────────────────────────────────

export const suratIzinTidakMasukTemplate: TemplateConfig = {
  id: 'surat-izin-tidak-masuk',
  name: 'Surat Izin Tidak Masuk',
  description: 'Surat izin tidak masuk sekolah atau kuliah yang dibuat oleh orang tua/wali atau mahasiswa karena sakit atau keperluan mendesak.',
  category: 'sekolah',
  icon: 'event_busy',
  price: 0,
  previewComponent: 'SuratIzinTidakMasukPreview',
  pdfComponent: 'SuratIzinTidakMasukPDF',
  steps: [
    {
      id: 'data-surat',
      title: 'Data Surat',
      description: 'Lengkapi informasi untuk surat izin tidak masuk.',
      fields: [
        {
          name: 'namaPembuat',
          type: 'text',
          label: 'Nama Pembuat Surat (Orang Tua / Mahasiswa)',
          placeholder: 'Cth: Budi Santoso / Anisa Rahmawati',
          required: true,
          colSpan: 2,
        },
        {
          name: 'hubungan',
          type: 'select',
          label: 'Hubungan dengan Siswa',
          required: true,
          colSpan: 1,
          options: [
            { value: 'Orang Tua', label: 'Orang Tua' },
            { value: 'Wali', label: 'Wali' },
            { value: 'Mahasiswa yang bersangkutan', label: 'Mahasiswa Sendiri' },
            { value: 'Siswa yang bersangkutan', label: 'Siswa Sendiri' },
          ],
        },
        {
          name: 'namaSiswa',
          type: 'text',
          label: 'Nama Siswa / Mahasiswa',
          placeholder: 'Cth: Anisa Rahmawati',
          required: true,
          colSpan: 1,
        },
        {
          name: 'kelasJurusan',
          type: 'text',
          label: 'Kelas / Jurusan / NIM',
          placeholder: 'Cth: XI IPA 2 / Teknik Informatika / 2021001234',
          required: false,
          colSpan: 1,
        },
        {
          name: 'namaInstitusi',
          type: 'text',
          label: 'Nama Sekolah / Kampus',
          placeholder: 'Cth: SMA Negeri 1 Jakarta / Universitas Indonesia',
          required: true,
          colSpan: 1,
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
          label: 'Tanggal Selesai Tidak Masuk',
          required: true,
          colSpan: 1,
        },
        {
          name: 'alasan',
          type: 'select',
          label: 'Alasan Tidak Masuk',
          required: true,
          colSpan: 1,
          options: [
            { value: 'sakit', label: 'Sakit' },
            { value: 'keperluan keluarga mendesak', label: 'Keperluan Keluarga Mendesak' },
            { value: 'ada keperluan penting', label: 'Keperluan Penting Lainnya' },
            { value: 'mengikuti kegiatan di luar sekolah', label: 'Kegiatan di Luar Sekolah' },
          ],
        },
        {
          name: 'keterangan',
          type: 'textarea',
          label: 'Keterangan Tambahan (opsional)',
          placeholder: 'Cth: Demam tinggi sejak kemarin malam dan memerlukan istirahat penuh.',
          required: false,
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

