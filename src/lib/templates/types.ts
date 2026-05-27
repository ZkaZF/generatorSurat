// ─── Field Types ────────────────────────────────────────────────────────────────

export type FieldType =
  | 'text'
  | 'number'
  | 'date'
  | 'textarea'
  | 'select'
  | 'signature';

export type TemplateCategory =
  | 'pekerjaan'
  | 'pemerintahan'
  | 'jual-beli'
  | 'sekolah';

/** Price tier determines badge styling and download flow */
export type PriceTier = 'free' | 'paid';

// ─── Form Field Definition ───────────────────────────────────────────────────

export interface SelectOption {
  value: string;
  label: string;
}

export interface FieldValidation {
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  message?: string;
}

export interface FormField {
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  /** Grid layout: 1 = half width, 2 = full width (default: 2) */
  colSpan?: 1 | 2;
  validation?: FieldValidation;
  /** Only for type: 'select' */
  options?: SelectOption[];
}

// ─── Form Step Definition ────────────────────────────────────────────────────

export interface FormStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}

// ─── Template Config ─────────────────────────────────────────────────────────

export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  /** Material Symbols icon name */
  icon: string;
  /** 0 = free, > 0 = paid in IDR (e.g. 10000 = Rp 10.000) */
  price: number;
  steps: FormStep[];
  /** Used to look up the correct HTML preview component */
  previewComponent: string;
  /** Used to look up the correct @react-pdf/renderer component */
  pdfComponent: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Derive price tier from template config */
export function getPriceTier(template: TemplateConfig): PriceTier {
  return 'free';
}

/** Check if a template is free */
export function isFreeTemplate(template: TemplateConfig): boolean {
  return true;
}

// ─── Form Data ───────────────────────────────────────────────────────────────

export type FormData = Record<string, string | number | undefined>;
