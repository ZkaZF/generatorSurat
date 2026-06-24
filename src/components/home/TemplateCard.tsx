import Link from 'next/link';
import type { TemplateConfig } from '@/lib/templates/types';
import { isFreeTemplate, getPriceTier } from '@/lib/templates/types';
import { formatRupiah } from '@/lib/utils';

interface TemplateCardProps {
  template: TemplateConfig;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const free = isFreeTemplate(template);

  return (
    <div className="flex flex-col bg-white border border-outline-variant rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-primary/30 group">
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center mb-3 flex-shrink-0">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>
          {template.icon}
        </span>
      </div>

      {/* Name + Badge */}
      <div className="flex-1 mb-3">
        <h3 className="text-sm font-semibold text-on-surface mb-1.5 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
          {template.name}
        </h3>

        {/* ─── Price Badge ───────────────────────────────────────────────────
         * FREE  → bg-secondary-container text-on-secondary-container
         * PAID  → bg-surface-variant    text-on-surface-variant
         */}
        {free ? (
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold"
            style={{ backgroundColor: '#d0e1fb', color: '#0d2745' }}
            data-price-tier="free"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>check_circle</span>
            Gratis
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold"
            style={{ backgroundColor: '#d5e3fd', color: '#434655' }}
            data-price-tier="paid"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>payments</span>
            {formatRupiah(template.price)}
          </span>
        )}
      </div>

      {/* CTA Button */}
      <Link
        href={`/editor/${template.id}`}
        id={`btn-buat-${template.id}`}
        className="w-full h-10 bg-primary text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-[0.98] transition-all duration-150"
        aria-label={`Buat ${template.name}`}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>edit</span>
        Buat Sekarang
      </Link>
    </div>
  );
}

