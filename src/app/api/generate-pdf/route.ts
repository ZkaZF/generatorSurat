import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { getTemplate } from '@/lib/templates/registry';
import { isFreeTemplate } from '@/lib/templates/types';
import type { FormData } from '@/lib/templates/types';
import React from 'react';

// ── Dedicated PDF components ──────────────────────────────────────────────────
import { SuratIzinSakitPDF } from '@/lib/pdf/SuratIzinSakitPDF';
import { SuratKuasaPDF } from '@/lib/pdf/SuratKuasaPDF';
import { SuratPengunduranDiriPDF } from '@/lib/pdf/SuratPengunduranDiriPDF';
import { SuratLamaranKerjaPDF } from '@/lib/pdf/SuratLamaranKerjaPDF';
import { SuratPaktaIntegrasPDF } from '@/lib/pdf/SuratPaktaIntegrasPDF';
import { SuratPerjanjianKerjaPDF } from '@/lib/pdf/SuratPerjanjianKerjaPDF';
import { SuratRekomendasiKerjaPDF } from '@/lib/pdf/SuratRekomendasiKerjaPDF';
import { SuratPerjanjianSewaPDF } from '@/lib/pdf/SuratPerjanjianSewaPDF';
import { SuratHutangPiutangPDF } from '@/lib/pdf/SuratHutangPiutangPDF';
import { SuratHibahPDF } from '@/lib/pdf/SuratHibahPDF';
import { KwitansiJualBeliPDF } from '@/lib/pdf/KwitansiJualBeliPDF';
import { SuratPernyataanBelumMenikahPDF } from '@/lib/pdf/SuratPernyataanBelumMenikahPDF';
import { SuratDomisiliPDF } from '@/lib/pdf/SuratDomisiliPDF';
import { SuratSPTJMPDF } from '@/lib/pdf/SuratSPTJMPDF';
import { SuratIzinOrangTuaPDF } from '@/lib/pdf/SuratIzinOrangTuaPDF';
import { SuratPermohonanBeasiswaPDF } from '@/lib/pdf/SuratPermohonanBeasiswaPDF';
import { SuratPernyataanKehilanganPDF } from '@/lib/pdf/SuratPernyataanKehilanganPDF';
import { SuratPermohonanMagangPDF } from '@/lib/pdf/SuratPermohonanMagangPDF';

// ── Factory helper ────────────────────────────────────────────────────────────
type PDFFactory = (props: { formData: FormData; withWatermark: boolean }) => React.ReactElement;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mk = (C: React.ComponentType<any>): PDFFactory =>
  ({ formData, withWatermark }) => React.createElement(C, { formData, withWatermark });

// ── Registry ──────────────────────────────────────────────────────────────────
const PDF_COMPONENTS: Record<string, PDFFactory> = {
  // Existing
  SuratIzinSakitPDF:               mk(SuratIzinSakitPDF),
  SuratKuasaPDF:                   mk(SuratKuasaPDF),
  // Pekerjaan
  SuratPengunduranDiriPDF:         mk(SuratPengunduranDiriPDF),
  SuratLamaranKerjaPDF:            mk(SuratLamaranKerjaPDF),
  SuratPaktaIntegrasPDF:           mk(SuratPaktaIntegrasPDF),
  SuratPerjanjianKerjaPDF:         mk(SuratPerjanjianKerjaPDF),
  SuratRekomendasiKerjaPDF:        mk(SuratRekomendasiKerjaPDF),
  // Jual Beli
  SuratPerjanjianJualBeliPDF:      mk(SuratKuasaPDF), // reuse dual-sig layout
  SuratPerjanjianSewaPDF:          mk(SuratPerjanjianSewaPDF),
  SuratHutangPiutangPDF:           mk(SuratHutangPiutangPDF),
  SuratHibahPDF:                   mk(SuratHibahPDF),
  KwitansiJualBeliPDF:             mk(KwitansiJualBeliPDF),
  // Pemerintahan
  SuratPernyataanBelumMenikahPDF:  mk(SuratPernyataanBelumMenikahPDF),
  SuratDomisiliPDF:                mk(SuratDomisiliPDF),
  SuratSPTJMPDF:                   mk(SuratSPTJMPDF),
  // Sekolah
  SuratIzinOrangTuaPDF:            mk(SuratIzinOrangTuaPDF),
  SuratPermohonanBeasiswaPDF:      mk(SuratPermohonanBeasiswaPDF),
  SuratPernyataanKehilanganPDF:    mk(SuratPernyataanKehilanganPDF),
  SuratPermohonanMagangPDF:        mk(SuratPermohonanMagangPDF),
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { templateId, formData } = body as { templateId: string; formData: FormData };

    let template;
    try {
      template = getTemplate(templateId);
    } catch {
      return NextResponse.json({ error: `Template "${templateId}" not found.` }, { status: 404 });
    }

    const withWatermark = isFreeTemplate(template);

    const pdfFactory = PDF_COMPONENTS[template.pdfComponent];
    if (!pdfFactory) {
      return NextResponse.json(
        { error: `PDF component "${template.pdfComponent}" not registered.` },
        { status: 500 }
      );
    }

    const element = pdfFactory({ formData, withWatermark });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stream = await renderToStream(element as any);

    const readableStream = new ReadableStream({
      start(controller) {
        stream.on('data', (chunk: Buffer) => controller.enqueue(chunk));
        stream.on('end', () => controller.close());
        stream.on('error', (err: Error) => controller.error(err));
      },
    });

    const filename = `${template.name.replace(/\s+/g, '_')}.pdf`;
    return new NextResponse(readableStream, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('[generate-pdf] Error:', error);
    return NextResponse.json({ error: 'Gagal membuat PDF. Silakan coba lagi.' }, { status: 500 });
  }
}
