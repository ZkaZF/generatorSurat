'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import type { TemplateConfig, FormData } from '@/lib/templates/types';
import { isFreeTemplate } from '@/lib/templates/types';
import { formatRupiah } from '@/lib/utils';
import dynamic from 'next/dynamic';
import DynamicForm from '@/components/editor/DynamicForm';

const A4Preview = dynamic(() => import('@/components/editor/A4Preview'), {
  ssr: false,
  loading: () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#5f5f5d', fontSize: '14px', letterSpacing: '0.42px' }}>
      Memuat Preview...
    </div>
  )
});

interface EditorClientProps {
  template: TemplateConfig;
}

type EditorTab = 'form' | 'preview';

// ── Getburnt design tokens ────────────────────────────────────────────────────
const C = {
  charcoal: '#1a1a17',
  white:    '#ffffff',
  slate:    '#5f5f5d',
  border:   'rgba(26,26,23,0.10)',
  dust:     'rgba(26,26,23,0.04)',
} as const;

const serif: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 300,
};

export default function EditorClient({ template }: EditorClientProps) {
  const [activeTab, setActiveTab]       = useState<EditorTab>('form');
  const [formData, setFormData]         = useState<FormData>({});
  const [isDownloading, setIsDownloading] = useState(false);
  const free = isFreeTemplate(template);

  const handleFormChange = useCallback((data: FormData) => {
    setFormData(data);
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: template.id, formData }),
      });
      if (!response.ok) {
        const err = await response.json();
        alert(err.error || 'Gagal membuat PDF.');
        return;
      }
      const blob = await response.blob();
      const filename = `${template.name.replace(/\s+/g, '_')}.pdf`;

      // 1. Cek apakah browser mendukung Web Share API untuk File (solusi terbaik untuk HP & In-App Browser)
      let shareSuccess = false;
      if (navigator.canShare) {
        const file = new File([blob], filename, { type: 'application/pdf' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: template.name,
              text: 'Berikut adalah dokumen PDF yang Anda buat dari Suratin Dong.',
            });
            shareSuccess = true;
          } catch (err) {
            console.log('Share dibatalkan atau gagal', err);
            // Lanjut ke fallback download biasa jika gagal/batal
          }
        }
      }

      if (!shareSuccess) {
        // 2. Fallback: Download via tag <a> biasa
        // Beri peringatan jika user memakai Instagram Browser dan gagal menggunakan Web Share
        if (navigator.userAgent.includes('Instagram')) {
          alert("Perhatian: Anda sedang membuka web ini dari aplikasi Instagram. Browser bawaan Instagram seringkali memblokir fitur unduhan PDF.\n\nJika PDF gagal terunduh, silakan tekan ikon titik 3 (•••) di pojok kanan atas layar dan pilih 'Buka di Browser Eksternal' (Chrome/Safari).");
        }

        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href     = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }

    } catch (err) {
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: C.white }}>

      {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
      <header style={{
        flexShrink: 0, height: '56px',
        background: C.white,
        borderBottom: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center',
        padding: '0 20px', gap: '12px',
        zIndex: 40,
      }}>
        {/* Back button */}
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '32px', height: '32px',
          color: C.slate, textDecoration: 'none', flexShrink: 0,
          transition: 'color .15s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = C.charcoal)}
          onMouseLeave={e => (e.currentTarget.style.color = C.slate)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
        </Link>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: C.border, flexShrink: 0 }} />

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
          <Link href="/" className="editor-breadcrumb-brand" style={{
            ...serif,
            color: C.charcoal, fontSize: '16px', textDecoration: 'none', flexShrink: 0, letterSpacing: '-0.26px',
          }}>
            Suratin
          </Link>
          <span className="editor-breadcrumb-sep" style={{ color: C.border, fontSize: '16px' }}>/</span>
          <span className="editor-breadcrumb-icon material-symbols-outlined" style={{ fontSize: '14px', color: C.slate, flexShrink: 0 }}>description</span>
          <span className="editor-breadcrumb-name" style={{
            fontWeight: 500, fontSize: '14px', color: C.charcoal,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            letterSpacing: '0.42px',
          }}>
            {template.name}
          </span>
          {/* Price/free badge */}
          <span style={{
            flexShrink: 0,
            fontSize: '11px', fontWeight: 500,
            color: C.slate,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
          }}>
            {free ? 'Gratis' : formatRupiah(template.price)}
          </span>
        </div>

        {/* Desktop download button */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: isDownloading ? C.slate : C.charcoal,
            color: C.white, border: 'none', fontWeight: 500,
            fontSize: '13px', letterSpacing: '0.42px',
            padding: '8px 20px', borderRadius: '1440px',
            cursor: isDownloading ? 'not-allowed' : 'pointer',
            opacity: isDownloading ? 0.65 : 1,
            transition: 'opacity .15s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={e => { if (!isDownloading) (e.currentTarget as HTMLButtonElement).style.opacity = '0.82'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = isDownloading ? '0.65' : '1'; }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
            {isDownloading ? 'progress_activity' : 'download'}
          </span>
          {isDownloading ? 'Memproses...' : free ? 'Download PDF' : `Bayar · ${formatRupiah(template.price)}`}
        </button>
      </header>

      {/* ══ MOBILE TABS ═════════════════════════════════════════════════════ */}
      <div style={{
        flexShrink: 0, display: 'flex', borderBottom: `1px solid ${C.border}`,
        background: C.white,
      }} className="md:hidden">
        {(['form', 'preview'] as EditorTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '12px 0', fontSize: '13px', fontWeight: 500,
              border: 'none', cursor: 'pointer', background: 'transparent',
              borderBottom: activeTab === tab ? `2px solid ${C.charcoal}` : '2px solid transparent',
              color: activeTab === tab ? C.charcoal : C.slate,
              transition: 'all .15s', letterSpacing: '0.42px',
            }}
          >
            {tab === 'form' ? '✏️ Isi Data' : '👁️ Lihat Hasil'}
          </button>
        ))}
      </div>

      {/* ── Scoped responsive styles ─────────────────────────────────────── */}
      <style>{`
        .editor-split   { flex: 1; display: flex; overflow: hidden; min-height: 0; }
        .editor-panel-form {
          width: 420px; min-width: 380px; flex-shrink: 0;
          display: flex; flex-direction: column; overflow: hidden;
          background: ${C.white}; border-right: 1px solid ${C.border};
        }
        .editor-panel-preview {
          flex: 1; overflow-y: auto; min-width: 0;
          display: flex; flex-direction: column; align-items: center;
          padding: 32px 16px 48px;
          background: ${C.dust};
        }
        /* Mobile: only show the active tab panel */
        @media (max-width: 767px) {
          .editor-panel-form    { width: 100%; min-width: 0; border-right: none; }
          .editor-panel-form.mobile-hidden    { display: none; }
          .editor-panel-preview.mobile-hidden { display: none; }
        }
      `}</style>

      {/* ══ MAIN SPLIT ══════════════════════════════════════════════════════ */}
      <div className="editor-split">

        {/* ─── LEFT: FORM PANEL ─────────────────────────────────────────── */}
        <div className={`editor-panel-form${activeTab === 'preview' ? ' mobile-hidden' : ''}`}>
          <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '80px' }}>
            <DynamicForm template={template} onFormChange={handleFormChange} />
          </div>
        </div>

        {/* ─── RIGHT: PREVIEW PANEL ────────────────────────────────────── */}
        <div className={`editor-panel-preview${activeTab === 'form' ? ' mobile-hidden' : ''}`}>
          <A4Preview template={template} formData={formData} />
        </div>
      </div>
    </div>
  );
}
