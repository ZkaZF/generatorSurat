import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function SuratCicilanPreview({ formData }: Props) {
  const { namaKreditur, namaDebitur, nominalHutang, alasanHutang, nominalCicilanPerBulan, jumlahTenor, tanggalJatuhTempo, kotaSurat, tanggalSurat, tandaTanganPenjual, tandaTanganPembeli } = formData;
  return (
    <div style={PS.page}>
      <div style={PS.title}>SURAT KESEPAKATAN PEMBAYARAN CICILAN</div>
      <div style={PS.divider} />
      
      <div style={PS.p()}>Surat pernyataan komitmen pembayaran cicilan/angsuran hutang disepakati oleh:</div>
      <div style={PS.dataGrid()}>
        <span>PIHAK I (Kreditur)</span><span>:</span><span style={PS.bold}>{orDash(namaKreditur as string)}</span>
        <span>PIHAK II (Debitur)</span><span>:</span><span style={PS.bold}>{orDash(namaDebitur as string)}</span>
      </div>

      <div style={PS.p()}>Debitur mengakui adanya kewajiban hutang yang belum lunas dan berkomitmen melakukan pelunasan dengan skema angsuran:</div>
      <div style={PS.dataGrid()}>
        <span>Hutang Pokok</span><span>:</span><span style={PS.bold}>{nominalHutang ? `Rp ${Number(nominalHutang).toLocaleString('id-ID')}` : '—'}</span>
        <span>Keterangan Kewajiban</span><span>:</span><span>{orDash(alasanHutang as string)}</span>
        <span>Besar Angsuran / Bulan</span><span>:</span><span style={PS.bold}>{nominalCicilanPerBulan ? `Rp ${Number(nominalCicilanPerBulan).toLocaleString('id-ID')}` : '—'}</span>
        <span>Tenor Pelunasan</span><span>:</span><span>{jumlahTenor ? `${jumlahTenor} bulan` : '—'}</span>
        <span>Cutoff Jatuh Tempo</span><span>:</span><span>Setiap tanggal {tanggalJatuhTempo ? formatTanggalIndonesia(tanggalJatuhTempo as string).split(' ')[0] : '___'} per bulan</span>
      </div>

      <div style={PS.p()}>Keterlambatan pembayaran cicilan dari tanggal jatuh tempo yang disepakati akan dikenakan sanksi administrasi atau langkah hukum penagihan secara kekeluargaan terlebih dahulu. Perjanjian ini dibuat secara sadar demi kenyamanan bertransaksi bersama.</div>
      
      <div style={PS.sigRow}>
        <div style={PS.sigBox}>
          <div>PIHAK II (Debitur),</div>
          <SigImg src={tandaTanganPembeli as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaDebitur as string)}</div>
        </div>
        <div style={PS.sigBox}>
          <div>{orDash(kotaSurat as string)}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}</div>
          <div>PIHAK I (Kreditur),</div>
          <div style={{ ...PS.italic, fontSize: '8px', color: '#999', margin: '2px 0' }}>(Meterai 10.000)</div>
          <SigImg src={tandaTanganPenjual as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaKreditur as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}


