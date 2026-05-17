import type { TemplateConfig, TemplateCategory } from './types';
import { isFreeTemplate } from './types';

// ── Existing templates ──────────────────────────────────────────────────────
import { suratIzinSakitTemplate } from './surat-izin-sakit';
import { suratPengunduranDiriTemplate } from './surat-pengunduran-diri';
import { suratKuasaTemplate } from './surat-kuasa';
import { suratPerjanjianJualBeliTemplate } from './surat-perjanjian-jual-beli';

// ── Pekerjaan ───────────────────────────────────────────────────────────────
import { suratLamaranKerjaTemplate } from './surat-lamaran-kerja';
import { suratPaktaIntegritasTemplate } from './surat-pakta-integritas';
import { suratPerjanjianKerjaTemplate } from './surat-perjanjian-kerja';
import { suratRekomendasiKerjaTemplate } from './surat-rekomendasi-kerja';

// ── Jual Beli ───────────────────────────────────────────────────────────────
import { suratPerjanjianSewaTemplate } from './surat-perjanjian-sewa';
import { suratHutangPiutangTemplate } from './surat-hutang-piutang';
import { suratHibahTemplate } from './surat-hibah';
import { kwitansiJualBeliTemplate } from './kwitansi-jual-beli';

// ── Pemerintahan ────────────────────────────────────────────────────────────
import { suratPernyataanBelumMenikahTemplate } from './surat-pernyataan-belum-menikah';
import { suratDomisiliTemplate } from './surat-pernyataan-domisili';
import { suratSPTJMTemplate } from './surat-sptjm';

// ── Sekolah ─────────────────────────────────────────────────────────────────
import { suratIzinOrangTuaTemplate } from './surat-izin-orang-tua';
import { suratPermohonanBeasiswaTemplate } from './surat-permohonan-beasiswa';
import { suratPernyataanKehilanganTemplate } from './surat-pernyataan-kehilangan';
import { suratPermohonanMagangTemplate } from './surat-permohonan-magang';

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

  // ── Pekerjaan (Paid) ──────────────────────────────────────────────────────
  suratRekomendasiKerjaTemplate,
  suratPerjanjianKerjaTemplate,

  // ── Jual Beli (Free) ──────────────────────────────────────────────────────
  kwitansiJualBeliTemplate,

  // ── Jual Beli (Paid) ──────────────────────────────────────────────────────
  suratKuasaTemplate,
  suratPerjanjianJualBeliTemplate,
  suratPerjanjianSewaTemplate,
  suratHutangPiutangTemplate,
  suratHibahTemplate,

  // ── Pemerintahan (Free) ───────────────────────────────────────────────────
  suratPernyataanBelumMenikahTemplate,
  suratDomisiliTemplate,
  suratSPTJMTemplate,

  // ── Sekolah (Free) ────────────────────────────────────────────────────────
  suratIzinOrangTuaTemplate,
  suratPermohonanBeasiswaTemplate,
  suratPernyataanKehilanganTemplate,
  suratPermohonanMagangTemplate,
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
