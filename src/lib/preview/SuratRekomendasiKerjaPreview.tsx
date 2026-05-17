import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from './shared';

interface Props { formData: FormData; }

export default function SuratRekomendasiKerjaPreview({ formData }: Props) {
  const {
    namaPemberiRekom, jabatanPemberi, namaPerusahaanLama,
    namaKaryawan, jabatanKaryawan, lamaMasa, penilaian,
    kotaSurat, tanggalSurat, tandaTangan,
  } = formData;

  return (
    <div style={PS.page}>
      <div style={{ ...PS.bold, marginBottom: '2px' }}>{orDash(namaPerusahaanLama as string)}</div>
      <div style={{ ...PS.thinDivider, marginBottom: '12px' }} />

      <div style={PS.right}>
        {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}
      </div>

      <div style={PS.section()}>
        <div>Kepada Yth.</div>
        <div>HRD / Pimpinan</div>
        <div>di Tempat</div>
      </div>

      <div style={{ ...PS.bold, ...PS.center, fontSize: '12px', marginBottom: '12px', letterSpacing: '0.5px' }}>
        SURAT REKOMENDASI
      </div>

      <div style={PS.p()}>Dengan hormat,</div>
      <div style={PS.p()}>
        Saya yang bertanda tangan di bawah ini, <strong>{orDash(namaPemberiRekom as string)}</strong>, selaku{' '}
        <strong>{orDash(jabatanPemberi as string)}</strong> di <strong>{orDash(namaPerusahaanLama as string)}</strong>,{' '}
        dengan ini memberikan rekomendasi kepada:
      </div>

      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaKaryawan as string)}</span>
        <span>Jabatan Terakhir</span><span>:</span><span>{orDash(jabatanKaryawan as string)}</span>
        <span>Lama Bekerja</span><span>:</span><span>{orDash(lamaMasa as string)}</span>
      </div>

      <div style={PS.p()}>
        Selama masa kerja, yang bersangkutan telah menunjukkan kinerja yang baik. {orDash(penilaian as string, 'Beliau dikenal sebagai individu yang berdedikasi, profesional, dan dapat diandalkan.')}
      </div>

      <div style={PS.p()}>
        Dengan demikian, saya merekomendasikan yang bersangkutan dengan sepenuh hati. Semoga dapat diterima dan memberikan kontribusi terbaik di tempat yang baru.
      </div>

      <div style={PS.sigBlock}>
        <div style={PS.sigBox}>
          <div>Hormat saya,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPemberiRekom as string)}</div>
          <div style={{ fontSize: '9px' }}>{orDash(jabatanPemberi as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}
