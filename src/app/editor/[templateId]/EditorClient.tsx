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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#004ac6', fontSize: '14px', fontWeight: 600 }}>
      Memuat Preview...
    </div>
  ) 
});

interface EditorClientProps {
  template: TemplateConfig;
}

type EditorTab = 'form' | 'preview';

export default function EditorClient({ template }: EditorClientProps) {
  const [activeTab, setActiveTab] = useState<EditorTab>('form');
  const [formData, setFormData] = useState<FormData>({});
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
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${template.name.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsDownloading(false);
    }
  };

  // ─── Shared button style ───────────────────────────────────────────────────
  const dlBtnStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: '#1B2E4A', color: '#ffffff',
    fontWeight: 700, fontSize: '14px',
    padding: '10px 22px', borderRadius: '12px',
    border: 'none', cursor: isDownloading ? 'not-allowed' : 'pointer',
    opacity: isDownloading ? 0.65 : 1,
    boxShadow: '0 3px 14px rgba(27,46,74,0.3)',
    transition: 'opacity .15s',
    whiteSpace: 'nowrap' as const,
  };

  return (
    // Outer shell — full viewport height, flex column
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#FDF8F0' }}>

      {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
      <header style={{
        flexShrink: 0, height: '56px',
        background: 'rgba(253,248,240,0.96)', borderBottom: '1px solid #D4C5A0',
        display: 'flex', alignItems: 'center',
        padding: '0 20px', gap: '12px',
        boxShadow: '0 1px 4px rgba(27,46,74,0.06)',
        zIndex: 40,
      }}>
        {/* Back button */}
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '36px', height: '36px', borderRadius: '10px',
          color: '#5A6A7A', textDecoration: 'none', flexShrink: 0,
          transition: 'background .15s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = '#F5EFE3')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
        </Link>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            color: '#1B2E4A', fontWeight: 400, fontSize: '15px', textDecoration: 'none', flexShrink: 0,
          }}>
            Surat<span style={{ color: '#C8A45C' }}>Otomatis</span>
          </Link>
          <span style={{ color: '#D4C5A0', fontSize: '14px' }}>/</span>
          <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#8A9AAA', flexShrink: 0 }}>description</span>
          <span style={{ fontWeight: 700, fontSize: '14px', color: '#1B2E4A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {template.name}
          </span>
          {/* Price badge */}
          <span style={{
            flexShrink: 0,
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            padding: '3px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 700,
            ...(free
              ? { background: '#DCFCE7', color: '#166534' }
              : { background: '#F0E4C4', color: '#A88B3D' }),
          }}>
            {free ? '✓ Gratis' : formatRupiah(template.price)}
          </span>
        </div>

        {/* Desktop download button */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          style={{
            ...dlBtnStyle,
            background: isDownloading ? '#5A6A7A' : '#1B2E4A',
            boxShadow: isDownloading ? 'none' : '0 3px 14px rgba(27,46,74,0.3)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            {isDownloading ? 'progress_activity' : free ? 'download' : 'payments'}
          </span>
          {isDownloading ? 'Memproses...' : free ? 'Download PDF' : `Bayar · ${formatRupiah(template.price)}`}
        </button>
      </header>

      {/* ══ MOBILE TABS ═════════════════════════════════════════════════════ */}
      <div style={{
        flexShrink: 0, display: 'flex', borderBottom: '1px solid #D4C5A0',
        background: '#FEFCF8',
      }} className="md:hidden">
        {(['form', 'preview'] as EditorTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '12px 0', fontSize: '13px', fontWeight: 700,
              border: 'none', cursor: 'pointer', background: 'transparent',
              borderBottom: activeTab === tab ? '2px solid #1B2E4A' : '2px solid transparent',
              color: activeTab === tab ? '#1B2E4A' : '#8A9AAA',
              transition: 'all .2s',
            }}
          >
            {tab === 'form' ? '📝 Isi Data' : '👁️ Lihat Hasil'}
          </button>
        ))}
      </div>

      {/* ══ MAIN SPLIT ══════════════════════════════════════════════════════ */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>

        {/* ─── LEFT: FORM PANEL ─────────────────────────────────────────── */}
        <div style={{
          width: '420px', minWidth: '380px', flexShrink: 0,
          display: activeTab === 'preview' ? 'none' : 'flex',
          flexDirection: 'column', overflow: 'hidden',
          background: '#FEFCF8', borderRight: '1px solid #D4C5A0',
        }}
          className="md-always-flex"
        >
          {/* This extra wrapper ensures form panel is always visible on desktop */}
          <style>{`
            @media (min-width: 768px) {
              .md-always-flex { display: flex !important; }
              .md-hidden { display: none !important; }
            }
          `}</style>

          <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '80px' }}>
            <DynamicForm template={template} onFormChange={handleFormChange} />
          </div>
        </div>

        {/* ─── RIGHT: PREVIEW PANEL ────────────────────────────────────── */}
        <div
          style={{
            flex: 1, overflowY: 'auto', minWidth: 0,
            display: activeTab === 'form' ? 'none' : 'flex',
            flexDirection: 'column', alignItems: 'center',
            padding: '24px 16px 48px',
            background: 'linear-gradient(160deg, #EDE5D5 0%, #F5EFE3 100%)',
          }}
          className="md-always-flex"
        >
          <div style={{ width: '100%', maxWidth: '580px' }}>
            <A4Preview template={template} formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}
