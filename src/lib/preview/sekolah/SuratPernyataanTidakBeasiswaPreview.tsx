import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratPernyataanTidakBeasiswaPreview({ formData }: Props) {
  const { namaMahasiswa, nim, jurusan, namaInstitusi, namaBeasiswaDilamar, kotaSurat, tanggalSurat, tandaTangan } = formData;
  return (
    <div style={PS.page}>
      <div style={{ ...PS.center, ...PS.bold, fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
        SURAT PERNYATAAN
      </div>
      <div style={{ ...PS.center, marginBottom: '14px', fontSize: '10px' }}>
        Tidak Sedang Menerima Beasiswa Lain
      </div>
      <div style={{ borderBottom: '2px solid #000', marginBottom: '14px' }} />
      <div style={PS.p()}>Yang bertanda tangan di bawah ini:</div>
      <div style={PS.dataGrid()}>
        <span>Nama</span><span>:</span><span style={PS.bold}>{orDash(namaMahasiswa as string)}</span>
        {nim && <><span>NIM/NIS</span><span>:</span><span>{nim as string}</span></>}
        <span>Program Studi</span><span>:</span><span>{orDash(jurusan as string)}</span>
        <span>Institusi</span><span>:</span><span>{orDash(namaInstitusi as string)}</span>
      </div>
      <div style={PS.p()}>
        Dengan ini menyatakan dengan <strong>sesungguhnya</strong> dan <strong>penuh tanggung jawab</strong> bahwa saya <strong>tidak sedang menerima beasiswa</strong> dari pihak manapun pada saat mengajukan permohonan <strong>{orDash(namaBeasiswaDilamar as string)}</strong>.
      </div>
      <div style={PS.p()}>
        Apabila di kemudian hari pernyataan ini terbukti tidak benar, saya bersedia menerima sanksi sesuai dengan ketentuan yang berlaku.
      </div>
      <div style={PS.p()}>
        Demikian surat pernyataan ini saya buat dengan sebenar-benarnya.
      </div>
      <div style={{ ...PS.right, marginBottom: '6px', marginTop: '8px' }}>
        {orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}
      </div>
      <div style={PS.sigBlock}><div style={PS.sigBox}><div>Yang Menyatakan,</div><div style={{ fontSize: '8px', color: '#888', marginBottom: '2px' }}>(di atas meterai)</div><SigImg src={tandaTangan as string | undefined} /><div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaMahasiswa as string)}</div></div></div>
      {FOOTER}
    </div>
  );
}

