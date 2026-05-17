'use client';

import type { TemplateConfig } from '@/lib/templates/types';
import type { FormData } from '@/lib/templates/types';
import { isFreeTemplate } from '@/lib/templates/types';
import { formatRupiah } from '@/lib/utils';

interface StickyActionBarProps {
  template: TemplateConfig;
  formData: FormData;
  onDownload: () => void;
  isLoading?: boolean;
}

export default function StickyActionBar({
  template,
  onDownload,
  isLoading = false,
}: StickyActionBarProps) {
  const free = isFreeTemplate(template);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 shadow-bottom-bar z-50 flex justify-between items-center px-4 py-3 pb-safe">
      {/* Price */}
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold text-outline uppercase tracking-wide">Total Biaya</span>
        <span className="text-2xl font-bold" style={{ color: free ? '#004ac6' : '#0d1c2f' }}>
          {free ? 'Gratis' : formatRupiah(template.price)}
        </span>
      </div>

      {/* Action Button */}
      <button
        id="btn-download-pdf"
        type="button"
        onClick={onDownload}
        disabled={isLoading}
        className="bg-primary text-white text-sm font-semibold rounded-xl px-6 py-3.5 flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label={free ? 'Download PDF' : `Bayar dan Download - ${formatRupiah(template.price)}`}
      >
        {isLoading ? (
          <>
            <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }}>progress_activity</span>
            Memproses...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              {free ? 'download' : 'payments'}
            </span>
            {free ? 'Download PDF' : 'Bayar & Download'}
          </>
        )}
      </button>
    </div>
  );
}
