'use client';

import type { ComponentType } from 'react';
import type { TemplateConfig, FormData } from '@/lib/templates/types';
import { isFreeTemplate } from '@/lib/templates/types';

import dynamic from 'next/dynamic';

interface A4PreviewProps {
  template: TemplateConfig;
  formData: FormData;
}

const PREVIEW_COMPONENTS: Record<string, ComponentType<{ formData: FormData }>> = {
  // Existing
  SuratIzinSakitPreview: dynamic(() => import('@/lib/preview/SuratIzinSakitPreview')),
  SuratPengunduranDiriPreview: dynamic(() => import('@/lib/preview/SuratPengunduranDiriPreview')),
  SuratKuasaPreview: dynamic(() => import('@/lib/preview/SuratKuasaPreview')),
  SuratPerjanjianJualBeliPreview: dynamic(() => import('@/lib/preview/SuratPerjanjianJualBeliPreview')),
  // Pekerjaan
  SuratLamaranKerjaPreview: dynamic(() => import('@/lib/preview/SuratLamaranKerjaPreview')),
  SuratPaktaIntegritasPreview: dynamic(() => import('@/lib/preview/SuratPaktaIntegritasPreview')),
  SuratPerjanjianKerjaPreview: dynamic(() => import('@/lib/preview/SuratPerjanjianKerjaPreview')),
  SuratRekomendasiKerjaPreview: dynamic(() => import('@/lib/preview/SuratRekomendasiKerjaPreview')),
  // Jual Beli
  SuratPerjanjianSewaPreview: dynamic(() => import('@/lib/preview/SuratPerjanjianSewaPreview')),
  SuratHutangPiutangPreview: dynamic(() => import('@/lib/preview/SuratHutangPiutangPreview')),
  SuratHibahPreview: dynamic(() => import('@/lib/preview/SuratHibahPreview')),
  KwitansiJualBeliPreview: dynamic(() => import('@/lib/preview/KwitansiJualBeliPreview')),
  // Pemerintahan
  SuratPernyataanBelumMenikahPreview: dynamic(() => import('@/lib/preview/SuratPernyataanBelumMenikahPreview')),
  SuratDomisiliPreview: dynamic(() => import('@/lib/preview/SuratDomisiliPreview')),
  SuratSPTJMPreview: dynamic(() => import('@/lib/preview/SuratSPTJMPreview')),
  // Sekolah
  SuratIzinOrangTuaPreview: dynamic(() => import('@/lib/preview/SuratIzinOrangTuaPreview')),
  SuratPermohonanBeasiswaPreview: dynamic(() => import('@/lib/preview/SuratPermohonanBeasiswaPreview')),
  SuratPernyataanKehilanganPreview: dynamic(() => import('@/lib/preview/SuratPernyataanKehilanganPreview')),
  SuratPermohonanMagangPreview: dynamic(() => import('@/lib/preview/SuratPermohonanMagangPreview')),
};

export default function A4Preview({ template, formData }: A4PreviewProps) {
  const free = isFreeTemplate(template);
  const PreviewComponent = PREVIEW_COMPONENTS[template.previewComponent];

  return (
    <div style={{ width: '100%', maxWidth: '540px', margin: '0 auto' }}>
      {/* Caption row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', paddingInline: '2px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#004ac6', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '14px' }}>📄</span> Preview A4
        </span>
        {free && (
          <span style={{ fontSize: '10px', color: '#737686', fontStyle: 'italic' }}>Versi gratis · ada watermark</span>
        )}
      </div>

      {/* A4 Paper — padding-bottom trick for reliable aspect ratio */}
      <div style={{
        width: '100%',
        position: 'relative',
        paddingBottom: '141.4%',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 40px rgba(0,0,0,0.12)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {/* Watermark */}
          {free && (
            <div style={{
              position: 'absolute', inset: 0, zIndex: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none', userSelect: 'none',
            }}>
              <span style={{
                fontSize: '28px', fontWeight: 900, color: '#004ac6',
                opacity: 0.04, transform: 'rotate(-35deg)',
                whiteSpace: 'nowrap', letterSpacing: '6px',
              }}>SuratOtomatis.id</span>
            </div>
          )}

          {/* Premium badge */}
          {!free && (
            <div style={{
              position: 'absolute', top: '10px', right: '10px', zIndex: 30,
              background: '#004ac6', color: '#fff', fontSize: '9px',
              fontWeight: 700, padding: '3px 10px', borderRadius: '999px',
            }}>PREMIUM</div>
          )}

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 20, width: '100%', height: '100%' }}>
            {PreviewComponent ? (
              <PreviewComponent formData={formData} />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#aaa', fontSize: '12px' }}>
                Preview tidak tersedia
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingInline: '2px' }}>
        <span style={{ fontSize: '10px', color: '#aaa' }}>A4 · 210 × 297 mm</span>
        <span style={{ fontSize: '10px', color: '#aaa' }}>Diperbarui otomatis</span>
      </div>
    </div>
  );
}
