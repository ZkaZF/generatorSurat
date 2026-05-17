import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ─── Tailwind Merge ───────────────────────────────────────────────────────────

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Currency Formatting ──────────────────────────────────────────────────────

/**
 * Format a number as Indonesian Rupiah.
 * @example formatRupiah(10000) → "Rp 10.000"
 */
export function formatRupiah(amount: number): string {
  if (amount === 0) return 'Gratis';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace('Rp', 'Rp ');
}

// ─── Date Formatting ──────────────────────────────────────────────────────────

const BULAN_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

const HARI_ID = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',
];

/**
 * Format date string to Indonesian short format.
 * @example formatTanggalIndonesia("2023-10-10") → "10 Oktober 2023"
 */
export function formatTanggalIndonesia(dateStr: string): string {
  if (!dateStr) return '_______________';
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    return `${day} ${BULAN_ID[month - 1]} ${year}`;
  } catch {
    return dateStr;
  }
}

/**
 * Format date string including day name.
 * @example formatTanggalDenganHari("2023-10-10") → "Selasa, 10 Oktober 2023"
 */
export function formatTanggalDenganHari(dateStr: string): string {
  if (!dateStr) return '_______________';
  try {
    const date = new Date(dateStr + 'T00:00:00');
    const hari = HARI_ID[date.getDay()];
    const [year, month, day] = dateStr.split('-').map(Number);
    return `${hari}, ${day} ${BULAN_ID[month - 1]} ${year}`;
  } catch {
    return dateStr;
  }
}

// ─── Text Helpers ─────────────────────────────────────────────────────────────

/**
 * Return a placeholder dash line if value is empty.
 */
export function orDash(value: string | number | undefined, fallback = '_____________'): string {
  if (value === undefined || value === null || value === '') return fallback;
  return String(value);
}

/**
 * Capitalize first letter of each word.
 */
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
