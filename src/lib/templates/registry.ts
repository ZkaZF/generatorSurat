import type { TemplateConfig, TemplateCategory } from './types';
import { isFreeTemplate } from './types';

// ── Pekerjaan ───────────────────────────────────────────────────────────────
import { suratIzinSakitTemplate } from './pekerjaan/surat-izin-sakit';
import { suratPengunduranDiriTemplate } from './pekerjaan/surat-pengunduran-diri';
import { suratLamaranKerjaTemplate } from './pekerjaan/surat-lamaran-kerja';
import { suratPaktaIntegritasTemplate } from './pekerjaan/surat-pakta-integritas';
import { suratPengalamanKerjaTemplate } from './pekerjaan/surat-pengalaman-kerja';
import { suratPermohonanCutiTemplate } from './pekerjaan/surat-permohonan-cuti';
import { suratIzinKeluargaBekerjaTemplate } from './pekerjaan/surat-izin-keluarga-bekerja';
import { suratPKWTTTemplate } from './pekerjaan/surat-perjanjian-pkwtt';
import { suratPeringatanKaryawanTemplate } from './pekerjaan/surat-peringatan-karyawan';
import { suratTugasSPPDTemplate } from './pekerjaan/surat-tugas-sppd';
import { suratPHKKaryawanTemplate } from './pekerjaan/surat-phk-karyawan';
import { suratJobOfferTemplate } from './pekerjaan/surat-job-offer';
import { suratKontrakFreelanceTemplate } from './pekerjaan/surat-kontrak-freelance';
import { suratRekomendasiKerjaTemplate } from './pekerjaan/surat-rekomendasi-kerja';
import { suratPerjanjianKerjaTemplate } from './pekerjaan/surat-perjanjian-kerja';

// ── Jual Beli ───────────────────────────────────────────────────────────────
import { suratKuasaTemplate } from './jual-beli/surat-kuasa';
import { suratPerjanjianJualBeliTemplate } from './jual-beli/surat-perjanjian-jual-beli';
import { kwitansiJualBeliTemplate } from './jual-beli/kwitansi-jual-beli';
import { suratPerjanjianSewaTemplate } from './jual-beli/surat-perjanjian-sewa';
import { suratHutangPiutangTemplate } from './jual-beli/surat-hutang-piutang';
import { suratHibahTemplate } from './jual-beli/surat-hibah';
import { suratJualBeliTanahTemplate } from './jual-beli/surat-perjanjian-jual-beli-tanah';
import { suratSewaRukoTemplate } from './jual-beli/surat-perjanjian-sewa-ruko';
import { suratPPJBTemplate } from './jual-beli/surat-perjanjian-ppjb';
import { suratJualBeliKendaraanTemplate } from './jual-beli/surat-perjanjian-jual-beli-kendaraan';
import { suratSewaMobilTemplate } from './jual-beli/surat-perjanjian-sewa-mobil';
import { suratKonsinyasiTemplate } from './jual-beli/surat-perjanjian-konsinyasi';
import { suratSupplierTemplate } from './jual-beli/surat-perjanjian-supplier';
import { suratKemitraanTemplate } from './jual-beli/surat-perjanjian-kemitraan';
import { suratCicilanTemplate } from './jual-beli/surat-perjanjian-cicilan';

// ── Pemerintahan ────────────────────────────────────────────────────────────
import { suratPernyataanBelumMenikahTemplate } from './pemerintahan/surat-pernyataan-belum-menikah';
import { suratDomisiliTemplate } from './pemerintahan/surat-pernyataan-domisili';
import { suratSPTJMTemplate } from './pemerintahan/surat-sptjm';
import { suratSKTMTemplate } from './pemerintahan/surat-keterangan-tidak-mampu';
import { suratSKUTemplate } from './pemerintahan/surat-keterangan-usaha';
import { suratBedaNamaTemplate } from './pemerintahan/surat-keterangan-beda-nama';
import { suratPengantarSKCKTemplate } from './pemerintahan/surat-pengantar-skck';
import { suratPindahPendudukTemplate } from './pemerintahan/surat-keterangan-pindah-penduduk';
import { suratKuasaBansosTemplate } from './pemerintahan/surat-kuasa-bansos';
import { suratKematianTemplate } from './pemerintahan/surat-keterangan-kematian';
import { suratDudaJandaTemplate } from './pemerintahan/surat-keterangan-duda-janda';
import { suratPengantarKtpKkTemplate } from './pemerintahan/surat-pengantar-ktp-kk';
import { suratIzinKeramaianTemplate } from './pemerintahan/surat-izin-keramaian';

// ── Sekolah ─────────────────────────────────────────────────────────────────
import { suratIzinOrangTuaTemplate } from './sekolah/surat-izin-orang-tua';
import { suratPermohonanBeasiswaTemplate } from './sekolah/surat-permohonan-beasiswa';
import { suratPernyataanKehilanganTemplate } from './sekolah/surat-pernyataan-kehilangan';
import { suratPermohonanMagangTemplate } from './sekolah/surat-permohonan-magang';
import { suratIzinTidakMasukTemplate } from './sekolah/surat-izin-tidak-masuk';
import { suratCutiAkademikTemplate } from './sekolah/surat-cuti-akademik';
import { suratKeteranganAktifTemplate } from './sekolah/surat-keterangan-aktif';
import { suratPindahSekolahTemplate } from './sekolah/surat-pindah-sekolah';
import { suratPengunduranDiriSekolahTemplate } from './sekolah/surat-pengunduran-diri-sekolah';
import { suratPermohonanRekomendasiTemplate } from './sekolah/surat-permohonan-rekomendasi';
import { suratPernyataanTidakBeasiswaTemplate } from './sekolah/surat-pernyataan-tidak-beasiswa';
import { suratPeminjamanFasilitasTemplate } from './sekolah/surat-peminjaman-fasilitas';
import { suratPengantarPenelitianTemplate } from './sekolah/surat-pengantar-penelitian';

// ─── Template Registry ────────────────────────────────────────────────────────
// Order: Pekerjaan → Jual Beli → Pemerintahan → Sekolah
// Within category: Free first, then Paid
// ─────────────────────────────────────────────────────────────────────────────

const TEMPLATE_LIST: TemplateConfig[] = [
  // ── Pekerjaan (Free) ──────────────────────────────────────────────────────
  suratIzinSakitTemplate,
  suratPengunduranDiriTemplate,
  suratLamaranKerjaTemplate,
  suratPaktaIntegritasTemplate,
  suratPengalamanKerjaTemplate,
  suratPermohonanCutiTemplate,
  suratIzinKeluargaBekerjaTemplate,
  suratTugasSPPDTemplate,
  suratJobOfferTemplate,

  // ── Pekerjaan (Paid) ──────────────────────────────────────────────────────
  suratRekomendasiKerjaTemplate,
  suratPerjanjianKerjaTemplate,
  suratPKWTTTemplate,
  suratPeringatanKaryawanTemplate,
  suratPHKKaryawanTemplate,
  suratKontrakFreelanceTemplate,

  // ── Jual Beli (Free) ──────────────────────────────────────────────────────
  kwitansiJualBeliTemplate,

  // ── Jual Beli (Paid) ──────────────────────────────────────────────────────
  suratKuasaTemplate,
  suratPerjanjianJualBeliTemplate,
  suratPerjanjianSewaTemplate,
  suratHutangPiutangTemplate,
  suratHibahTemplate,
  suratJualBeliTanahTemplate,
  suratSewaRukoTemplate,
  suratPPJBTemplate,
  suratJualBeliKendaraanTemplate,
  suratSewaMobilTemplate,
  suratKonsinyasiTemplate,
  suratSupplierTemplate,
  suratKemitraanTemplate,
  suratCicilanTemplate,

  // ── Pemerintahan (Free) ───────────────────────────────────────────────────
  suratPernyataanBelumMenikahTemplate,
  suratDomisiliTemplate,
  suratSPTJMTemplate,
  suratSKTMTemplate,
  suratSKUTemplate,
  suratBedaNamaTemplate,
  suratPengantarSKCKTemplate,
  suratPindahPendudukTemplate,
  suratKuasaBansosTemplate,
  suratKematianTemplate,
  suratDudaJandaTemplate,
  suratPengantarKtpKkTemplate,
  suratIzinKeramaianTemplate,

  // ── Sekolah (Free) ────────────────────────────────────────────────────────
  suratIzinOrangTuaTemplate,
  suratPermohonanBeasiswaTemplate,
  suratPernyataanKehilanganTemplate,
  suratPermohonanMagangTemplate,
  suratIzinTidakMasukTemplate,
  suratCutiAkademikTemplate,
  suratKeteranganAktifTemplate,
  suratPindahSekolahTemplate,
  suratPengunduranDiriSekolahTemplate,
  suratPermohonanRekomendasiTemplate,
  suratPernyataanTidakBeasiswaTemplate,
  suratPeminjamanFasilitasTemplate,
  suratPengantarPenelitianTemplate,
];

/** Map of templateId → TemplateConfig for O(1) lookup */
const TEMPLATE_MAP = new Map<string, TemplateConfig>(
  TEMPLATE_LIST.map((t) => [t.id, t])
);

// ─── Lookup Functions ─────────────────────────────────────────────────────────

export function getTemplate(id: string): TemplateConfig {
  const template = TEMPLATE_MAP.get(id);
  if (!template) {
    throw new Error(`Template with id "${id}" not found.`);
  }
  return template;
}

export function getAllTemplates(): TemplateConfig[] {
  return TEMPLATE_LIST;
}

export function getTemplatesByCategory(category: TemplateCategory): TemplateConfig[] {
  return TEMPLATE_LIST.filter((t) => t.category === category);
}

export function getFreeTemplates(): TemplateConfig[] {
  return TEMPLATE_LIST.filter(isFreeTemplate);
}

export function getPaidTemplates(): TemplateConfig[] {
  return TEMPLATE_LIST.filter((t) => !isFreeTemplate(t));
}

export function searchTemplates(query: string): TemplateConfig[] {
  if (!query.trim()) return TEMPLATE_LIST;
  const q = query.toLowerCase();
  return TEMPLATE_LIST.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
  );
}

export type { TemplateConfig, TemplateCategory };
