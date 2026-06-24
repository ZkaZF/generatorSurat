'use client';

import type { TemplateCategory } from '@/lib/templates/types';

const CATEGORIES: { id: TemplateCategory | 'semua'; label: string }[] = [
  { id: 'semua', label: 'Semua' },
  { id: 'pekerjaan', label: 'Pekerjaan' },
  { id: 'pemerintahan', label: 'Pemerintahan' },
  { id: 'jual-beli', label: 'Jual Beli' },
  { id: 'sekolah', label: 'Sekolah' },
];

interface CategoryPillsProps {
  activeCategory: TemplateCategory | 'semua';
  onChange: (category: TemplateCategory | 'semua') => void;
}

export default function CategoryPills({ activeCategory, onChange }: CategoryPillsProps) {
  return (
    <section className="mb-8">
      <div className="flex overflow-x-auto hide-scrollbar gap-2 py-1 -mx-5 px-5">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`category-${cat.id}`}
              onClick={() => onChange(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 flex-shrink-0 ${
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-on-surface-variant border border-outline-variant hover:bg-surface-container'
              }`}
              aria-pressed={isActive}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

