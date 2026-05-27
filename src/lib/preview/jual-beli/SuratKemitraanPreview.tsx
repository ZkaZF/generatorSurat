import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratKemitraanPreview({ formData }: Props) {
  const { mitra1, nikMitra1, mitra2, nikMitra2, namaUsaha, nominalModal, persentaseBagiHasilMitra1, persentaseBagiHasilMitra2, tugasTanggungJawab, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT PERJANJIAN KEMITRAAN BISNIS</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Surat kesepakatan kemitraan usaha patungan modal dan bagi hasil disepakati oleh:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Pengelola)</span><span>:</span><span style={PS.bold}>{orDash(mitra1 as string)}</span>
        <span>NIK Pengelola</span><span>:</span><span>{orDash(nikMitra1 as string)}</span>
        <span>PIHAK II (Investor)</span><span>:</span><span style={PS.bold}>{orDash(mitra2 as string)}</span>
        <span>NIK Investor</span><span>:</span><span>{orDash(nikMitra2 as string)}</span>
      </div>

      <div style={PS.p()}>Bakat dan modal disatukan untuk mendirikan kemitraan dengan skema:</div>
      <div style={PS.dataGrid()}>
        <span>Nama Usaha / Proyek</span><span>:</span><span>{orDash(namaUsaha as string)}</span>
        <span>Modal Awal Investasi</span><span>:</span><span style={PS.bold}>{nominalModal ? `Rp ${Number(nominalModal).toLocaleString('id-ID')}` : '—'}</span>
        <span>Porsi Pengelola (PIHAK I)</span><span>:</span><span>{persentaseBagiHasilMitra1 ? `${persentaseBagiHasilMitra1}% keuntungan bersih` : '—'}</span>
        <span>Porsi Investor (PIHAK II)</span><span>:</span><span>{persentaseBagiHasilMitra2 ? `${persentaseBagiHasilMitra2}% keuntungan bersih` : '—'}</span>
      </div>

      <div style={PS.p()}>Tugas pokok Mitra Aktif (PIHAK I) di lapangan meliputi:</div>
      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '8px', fontSize: '10px' }}>
        <strong>{orDash(tugasTanggungJawab as string)}</strong>
      </div>

      <div style={PS.p()}>Pembagian dividen / profit sharing disepakati dilakukan secara bulanan. Apabila usaha mengalami force majeure atau kerugian bukan karena kelalaian kriminal Pihak I, risiko kerugian modal ditanggung proporsional.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Investor),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(mitra2 as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Pengelola),</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTanganPenjual as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(mitra1 as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

