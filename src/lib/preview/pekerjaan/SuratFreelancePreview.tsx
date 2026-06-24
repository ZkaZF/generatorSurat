import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratFreelancePreview({ formData }: Props) {
  const { namaKlien, namaFreelancer, alamatFreelancer, namaProject, hargaJasaTotal, uangMuka, sisaPelunasan, jumlahRevisi, batasWaktuProject, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KONTRAK KERJA SAMA JASA (FREELANCE)</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Surat perjanjian kerja sama jasa/freelance ini disepakati oleh:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Klien)</span><span>:</span><span style={PS.bold}>{orDash(namaKlien as string)}</span>
        <span>PIHAK II (Freelancer)</span><span>:</span><span style={PS.bold}>{orDash(namaFreelancer as string)}</span>
        <span>Alamat Freelancer</span><span>:</span><span>{orDash(alamatFreelancer as string)}</span>
      </div>

      <div style={PS.p()}>Menyetujui pengerjaan project/jasa dengan rincian klausul kerja sebagai berikut:</div>
      <div style={PS.dataGrid()}>
        <span>Nama / Detail Project</span><span>:</span><span style={PS.bold}>{orDash(namaProject as string)}</span>
        <span>Harga Jasa Total</span><span>:</span><span style={PS.bold}>{hargaJasaTotal ? `Rp ${Number(hargaJasaTotal).toLocaleString('id-ID')}` : '—'}</span>
        <span>Uang Muka / DP</span><span>:</span><span>{uangMuka ? `Rp ${Number(uangMuka).toLocaleString('id-ID')}` : '—'}</span>
        <span>Sisa Pelunasan</span><span>:</span><span>{sisaPelunasan ? `Rp ${Number(sisaPelunasan).toLocaleString('id-ID')}` : '—'}</span>
        <span>Jumlah Max Revisi</span><span>:</span><span>{jumlahRevisi ? `${jumlahRevisi} kali` : '—'}</span>
        <span>Batas Pengiriman (DL)</span><span>:</span><span>{batasWaktuProject ? formatTanggalIndonesia(batasWaktuProject as string) : '—'}</span>
      </div>

      <div style={PS.p()}>Pekerjaan akan dimulai setelah Pihak I membayarkan Uang Muka (DP). Pelunasan sisa biaya jasa wajib ditransfer maksimal 3 hari setelah project diserahkan final dan disetujui bersama. Hak cipta hasil karya berpindah penuh setelah pelunasan selesai.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK I (Klien),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaKlien as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK II (Freelancer),</div>
          <SigImg src={tandaTanganPenjual as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaFreelancer as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


