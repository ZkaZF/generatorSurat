import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { getTemplate } from '@/lib/templates/registry';
import { isFreeTemplate } from '@/lib/templates/types';
import type { FormData } from '@/lib/templates/types';
import React from 'react';

// ── Dedicated PDF components ──────────────────────────────────────────────────
// Pekerjaan
import { SuratIzinSakitPDF } from '@/lib/pdf/pekerjaan/SuratIzinSakitPDF';
import { SuratPengunduranDiriPDF } from '@/lib/pdf/pekerjaan/SuratPengunduranDiriPDF';
import { SuratLamaranKerjaPDF } from '@/lib/pdf/pekerjaan/SuratLamaranKerjaPDF';
import { SuratPaktaIntegrasPDF } from '@/lib/pdf/pekerjaan/SuratPaktaIntegrasPDF';
import { SuratPerjanjianKerjaPDF } from '@/lib/pdf/pekerjaan/SuratPerjanjianKerjaPDF';
import { SuratRekomendasiKerjaPDF } from '@/lib/pdf/pekerjaan/SuratRekomendasiKerjaPDF';
import { SuratPengalamanKerjaPDF } from '@/lib/pdf/pekerjaan/SuratPengalamanKerjaPDF';
import { SuratPermohonanCutiPDF } from '@/lib/pdf/pekerjaan/SuratPermohonanCutiPDF';
import { SuratIzinKeluargaBekerjaPDF } from '@/lib/pdf/pekerjaan/SuratIzinKeluargaBekerjaPDF';
import { SuratPKWTTPDF } from '@/lib/pdf/pekerjaan/SuratPKWTTPDF';
import { SuratPeringatanKaryawanPDF } from '@/lib/pdf/pekerjaan/SuratPeringatanKaryawanPDF';
import { SuratTugasSPPDPDF } from '@/lib/pdf/pekerjaan/SuratTugasSppdPDF';
import { SuratPHKKaryawanPDF } from '@/lib/pdf/pekerjaan/SuratPhkKaryawanPDF';
import { SuratJobOfferPDF } from '@/lib/pdf/pekerjaan/SuratJobOfferPDF';
import { SuratFreelancePDF } from '@/lib/pdf/pekerjaan/SuratFreelancePDF';

// Jual Beli
import { SuratKuasaPDF } from '@/lib/pdf/jual-beli/SuratKuasaPDF';
import { SuratPerjanjianSewaPDF } from '@/lib/pdf/jual-beli/SuratPerjanjianSewaPDF';
import { SuratHutangPiutangPDF } from '@/lib/pdf/jual-beli/SuratHutangPiutangPDF';
import { SuratHibahPDF } from '@/lib/pdf/jual-beli/SuratHibahPDF';
import { KwitansiJualBeliPDF } from '@/lib/pdf/jual-beli/KwitansiJualBeliPDF';
import { SuratJualBeliTanahPDF } from '@/lib/pdf/jual-beli/SuratJualBeliTanahPDF';
import { SuratSewaRukoPDF } from '@/lib/pdf/jual-beli/SuratSewaRukoPDF';
import { SuratPPJBPDF } from '@/lib/pdf/jual-beli/SuratPPJBPDF';
import { SuratJualBeliKendaraanPDF } from '@/lib/pdf/jual-beli/SuratJualBeliKendaraanPDF';
import { SuratSewaMobilPDF } from '@/lib/pdf/jual-beli/SuratSewaMobilPDF';
import { SuratKonsinyasiPDF } from '@/lib/pdf/jual-beli/SuratKonsinyasiPDF';
import { SuratSupplierPDF } from '@/lib/pdf/jual-beli/SuratSupplierPDF';
import { SuratKemitraanPDF } from '@/lib/pdf/jual-beli/SuratKemitraanPDF';
import { SuratCicilanPDF } from '@/lib/pdf/jual-beli/SuratCicilanPDF';

// Pemerintahan
import { SuratPernyataanBelumMenikahPDF } from '@/lib/pdf/pemerintahan/SuratPernyataanBelumMenikahPDF';
import { SuratDomisiliPDF } from '@/lib/pdf/pemerintahan/SuratDomisiliPDF';
import { SuratSPTJMPDF } from '@/lib/pdf/pemerintahan/SuratSptjmPDF';
import { SuratSKTMPDF } from '@/lib/pdf/pemerintahan/SuratSKTMPDF';
import { SuratSKUPDF } from '@/lib/pdf/pemerintahan/SuratSKUPDF';
import { SuratBedaNamaPDF } from '@/lib/pdf/pemerintahan/SuratBedaNamaPDF';
import { SuratPengantarSKCKPDF } from '@/lib/pdf/pemerintahan/SuratPengantarSkckPDF';
import { SuratPindahPendudukPDF } from '@/lib/pdf/pemerintahan/SuratPindahPendudukPDF';
import { SuratKuasaBansosPDF } from '@/lib/pdf/pemerintahan/SuratKuasaBansosPDF';
import { SuratKematianPDF } from '@/lib/pdf/pemerintahan/SuratKematianPDF';
import { SuratDudaJandaPDF } from '@/lib/pdf/pemerintahan/SuratDudaJandaPDF';
import { SuratPengantarKtpKkPDF } from '@/lib/pdf/pemerintahan/SuratPengantarKtpKkPDF';
import { SuratIzinKeramaianPDF } from '@/lib/pdf/pemerintahan/SuratIzinKeramaianPDF';

// Sekolah
import { SuratIzinOrangTuaPDF } from '@/lib/pdf/sekolah/SuratIzinOrangTuaPDF';
import { SuratPermohonanBeasiswaPDF } from '@/lib/pdf/sekolah/SuratPermohonanBeasiswaPDF';
import { SuratPernyataanKehilanganPDF } from '@/lib/pdf/sekolah/SuratPernyataanKehilanganPDF';
import { SuratPermohonanMagangPDF } from '@/lib/pdf/sekolah/SuratPermohonanMagangPDF';
import { SuratIzinTidakMasukPDF } from '@/lib/pdf/sekolah/SuratIzinTidakMasukPDF';
import { SuratCutiAkademikPDF } from '@/lib/pdf/sekolah/SuratCutiAkademikPDF';
import { SuratKeteranganAktifPDF } from '@/lib/pdf/sekolah/SuratKeteranganAktifPDF';
import { SuratPindahSekolahPDF } from '@/lib/pdf/sekolah/SuratPindahSekolahPDF';
import { SuratPengunduranDiriSekolahPDF } from '@/lib/pdf/sekolah/SuratPengunduranDiriSekolahPDF';
import { SuratPermohonanRekomendasiPDF } from '@/lib/pdf/sekolah/SuratPermohonanRekomendasiPDF';
import { SuratPernyataanTidakBeasiswaPDF } from '@/lib/pdf/sekolah/SuratPernyataanTidakBeasiswaPDF';
import { SuratPeminjamanFasilitasPDF } from '@/lib/pdf/sekolah/SuratPeminjamanFasilitasPDF';
import { SuratPengantarPenelitianPDF } from '@/lib/pdf/sekolah/SuratPengantarPenelitianPDF';

// ── Factory helper ────────────────────────────────────────────────────────────
type PDFFactory = (props: { formData: FormData; withWatermark: boolean }) => React.ReactElement;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mk = (C: React.ComponentType<any>): PDFFactory =>
  ({ formData, withWatermark }) => React.createElement(C, { formData, withWatermark });

// ── Registry ──────────────────────────────────────────────────────────────────
const PDF_COMPONENTS: Record<string, PDFFactory> = {
  // Pekerjaan
  SuratIzinSakitPDF:               mk(SuratIzinSakitPDF),
  SuratPengunduranDiriPDF:         mk(SuratPengunduranDiriPDF),
  SuratLamaranKerjaPDF:            mk(SuratLamaranKerjaPDF),
  SuratPaktaIntegrasPDF:           mk(SuratPaktaIntegrasPDF),
  SuratPerjanjianKerjaPDF:         mk(SuratPerjanjianKerjaPDF),
  SuratRekomendasiKerjaPDF:        mk(SuratRekomendasiKerjaPDF),
  SuratPengalamanKerjaPDF:         mk(SuratPengalamanKerjaPDF),
  SuratPermohonanCutiPDF:          mk(SuratPermohonanCutiPDF),
  SuratIzinKeluargaBekerjaPDF:     mk(SuratIzinKeluargaBekerjaPDF),
  SuratPKWTTPDF:                   mk(SuratPKWTTPDF),
  SuratPeringatanKaryawanPDF:      mk(SuratPeringatanKaryawanPDF),
  SuratTugasSPPDPDF:               mk(SuratTugasSPPDPDF),
  SuratPHKKaryawanPDF:             mk(SuratPHKKaryawanPDF),
  SuratJobOfferPDF:                mk(SuratJobOfferPDF),
  SuratFreelancePDF:               mk(SuratFreelancePDF),
  // Jual Beli
  SuratKuasaPDF:                   mk(SuratKuasaPDF),
  SuratPerjanjianJualBeliPDF:      mk(SuratKuasaPDF), // reuse dual-sig layout
  SuratPerjanjianSewaPDF:          mk(SuratPerjanjianSewaPDF),
  SuratHutangPiutangPDF:           mk(SuratHutangPiutangPDF),
  SuratHibahPDF:                   mk(SuratHibahPDF),
  KwitansiJualBeliPDF:             mk(KwitansiJualBeliPDF),
  SuratJualBeliTanahPDF:           mk(SuratJualBeliTanahPDF),
  SuratSewaRukoPDF:                mk(SuratSewaRukoPDF),
  SuratPPJBPDF:                    mk(SuratPPJBPDF),
  SuratJualBeliKendaraanPDF:       mk(SuratJualBeliKendaraanPDF),
  SuratSewaMobilPDF:               mk(SuratSewaMobilPDF),
  SuratKonsinyasiPDF:              mk(SuratKonsinyasiPDF),
  SuratSupplierPDF:                mk(SuratSupplierPDF),
  SuratKemitraanPDF:               mk(SuratKemitraanPDF),
  SuratCicilanPDF:                 mk(SuratCicilanPDF),
  // Pemerintahan
  SuratPernyataanBelumMenikahPDF:  mk(SuratPernyataanBelumMenikahPDF),
  SuratDomisiliPDF:                mk(SuratDomisiliPDF),
  SuratSPTJMPDF:                   mk(SuratSPTJMPDF),
  SuratSKTMPDF:                    mk(SuratSKTMPDF),
  SuratSKUPDF:                     mk(SuratSKUPDF),
  SuratBedaNamaPDF:                mk(SuratBedaNamaPDF),
  SuratPengantarSKCKPDF:           mk(SuratPengantarSKCKPDF),
  SuratPindahPendudukPDF:          mk(SuratPindahPendudukPDF),
  SuratKuasaBansosPDF:             mk(SuratKuasaBansosPDF),
  SuratKematianPDF:                mk(SuratKematianPDF),
  SuratDudaJandaPDF:               mk(SuratDudaJandaPDF),
  SuratPengantarKtpKkPDF:          mk(SuratPengantarKtpKkPDF),
  SuratIzinKeramaianPDF:           mk(SuratIzinKeramaianPDF),
  // Sekolah
  SuratIzinOrangTuaPDF:            mk(SuratIzinOrangTuaPDF),
  SuratPermohonanBeasiswaPDF:      mk(SuratPermohonanBeasiswaPDF),
  SuratPernyataanKehilanganPDF:    mk(SuratPernyataanKehilanganPDF),
  SuratPermohonanMagangPDF:        mk(SuratPermohonanMagangPDF),
  SuratIzinTidakMasukPDF:          mk(SuratIzinTidakMasukPDF),
  SuratCutiAkademikPDF:            mk(SuratCutiAkademikPDF),
  SuratKeteranganAktifPDF:         mk(SuratKeteranganAktifPDF),
  SuratPindahSekolahPDF:           mk(SuratPindahSekolahPDF),
  SuratPengunduranDiriSekolahPDF:  mk(SuratPengunduranDiriSekolahPDF),
  SuratPermohonanRekomendasiPDF:   mk(SuratPermohonanRekomendasiPDF),
  SuratPernyataanTidakBeasiswaPDF: mk(SuratPernyataanTidakBeasiswaPDF),
  SuratPeminjamanFasilitasPDF:     mk(SuratPeminjamanFasilitasPDF),
  SuratPengantarPenelitianPDF:     mk(SuratPengantarPenelitianPDF),
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

    const withWatermark = false; // Disable watermark since all templates are free

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
