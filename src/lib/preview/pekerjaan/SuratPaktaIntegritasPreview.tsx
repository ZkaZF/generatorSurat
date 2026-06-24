import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPaktaIntegritasPreview({ formData }: Props) {
  const { nama, nik, jabatan, instansi, unitKerja, kotaSurat, tanggalSurat, tandaTangan } = formData;

  return (
    <div style={PS.page}>
      <div style={PS.title}>PAKTA INTEGRITAS</div>
      <div style={PS.divider} />

      <div style={PS.p()}>
        Saya yang bertanda tangan di bawah ini:
      </div>

      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(nama as string)}</span>
        <span>NIK</span><span>:</span><span>{orDash(nik as string)}</span>
        <span>Jabatan</span><span>:</span><span>{orDash(jabatan as string)}</span>
        <span>Instansi</span><span>:</span><span>{orDash(instansi as string)}</span>
        {unitKerja && <><span>Unit Kerja</span><span>:</span><span>{unitKerja as string}</span></>}
      </div>

      <div style={PS.p()}>Dengan ini menyatakan dan berkomitmen untuk:</div>

      <ol style={{ paddingLeft: '20px', marginBottom: '10px', fontSize: '10px', lineHeight: 1.8 }}>
        {[
          'Bertindak jujur, transparan, dan tidak koruptif dalam menjalankan tugas dan tanggung jawab.',
          'Tidak menyalahgunakan wewenang dan jabatan untuk kepentingan pribadi maupun golongan.',
          'Menghindari benturan kepentingan (conflict of interest) dalam setiap pengambilan keputusan.',
          'Menjaga kerahasiaan informasi dan data yang bersifat rahasia milik instansi.',
          'Melaporkan setiap dugaan pelanggaran integritas kepada pihak yang berwenang.',
          'Menerima sanksi sesuai ketentuan yang berlaku apabila melanggar pakta ini.',
        ].map((item, i) => (
          <li key={i} style={{ marginBottom: '2px' }}>{item}</li>
        ))}
      </ol>

      <div style={PS.p()}>
        Demikian pakta integritas ini saya buat dengan penuh kesadaran, tanpa paksaan, dan dalam keadaan sehat jasmani serta rohani.
      </div>

      <div style={{ ...PS.right, marginBottom: '4px' }}>
        {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '_______________'}
      </div>

      <div style={PS.sigBlock}>
        <div style={PS.sigBox}>
          <div>Yang Menyatakan,</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(nama as string)}</div>
          <div style={{ fontSize: '9px' }}>{orDash(jabatan as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


