'use client';

type EditorTab = 'form' | 'preview';

interface EditorTabsProps {
  activeTab: EditorTab;
  onChange: (tab: EditorTab) => void;
}

export default function EditorTabs({ activeTab, onChange }: EditorTabsProps) {
  return (
    <div className="flex border-b border-outline-variant/30 bg-white shrink-0 md:hidden">
      <button
        id="tab-isi-data"
        onClick={() => onChange('form')}
        aria-selected={activeTab === 'form'}
        role="tab"
        className={`flex-1 py-3 text-center transition-colors duration-200 ${
          activeTab === 'form'
            ? 'text-primary text-label-md font-label-md border-b-2 border-primary'
            : 'text-on-surface-variant text-body-sm font-body-sm hover:bg-surface-container-low'
        }`}
      >
        Isi Data
      </button>
      <button
        id="tab-lihat-hasil"
        onClick={() => onChange('preview')}
        aria-selected={activeTab === 'preview'}
        role="tab"
        className={`flex-1 py-3 text-center transition-colors duration-200 ${
          activeTab === 'preview'
            ? 'text-primary text-label-md font-label-md border-b-2 border-primary'
            : 'text-on-surface-variant text-body-sm font-body-sm hover:bg-surface-container-low'
        }`}
      >
        Lihat Hasil
      </button>
    </div>
  );
}

