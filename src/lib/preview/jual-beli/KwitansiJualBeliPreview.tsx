import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import { PS, SigImg, FOOTER } from '../shared';

interface Props { formData: FormData; }

export default function KwitansiJualBeliPreview({ formData }: Props) {
  const {
    namaPembeli, namaPenjual, deskripsiBarang, jumlahUang,
    metodePembayaran, kotaSurat, tanggalSurat, tandaTangan,
  } = formData;

  // Format angka
  const formatNominal = (val: string | undefined) => {
    if (!val) return '_______________';
    const num = parseInt(val.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? val : `Rp ${num.toLocaleString('id-ID')},-`;
  };

  // Terbilang sederhana
  const terbilang = (val: string | undefined) => {
    if (!val) return '';
    const num = parseInt(val.replace(/[^0-9]/g, ''), 10);
    if (isNaN(num)) return '';
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)} Juta Rupiah`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)} Ribu Rupiah`;
    return `${num} Rupiah`;
  };

  return (
    <div style={PS.page}>
      {/* Header */}
      <div style={{ ...PS.center, borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '12px' }}>
        <div style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '2px' }}>KWITANSI</div>
        <div style={{ fontSize: '9px', color: '#666' }}>Bukti Penerimaan Pembayaran</div>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '80px 10px 1fr', gap: '4px 0', marginBottom: '12px' }}>
        <span style={PS.bold}>Nomor</span><span>:</span><span>__________ / {new Date().getFullYear()}</span>
        <span style={PS.bold}>Tanggal</span><span>:</span>
        <span>{tanggalSurat ? formatTanggalIndonesia(tanggalSurat as string) : '___'}, {orDash(kotaSurat as string)}</span>
        <span style={PS.bold}>Diterima dari</span><span>:</span><span style={PS.bold}>{orDash(namaPembeli as string)}</span>
        <span style={PS.bold}>Jumlah</span><span>:</span>
        <span style={{ ...PS.bold, fontSize: '13px', color: '#004ac6' }}>{formatNominal(jumlahUang as string)}</span>
        <span style={PS.bold}>Terbilang</span><span>:</span>
        <span style={PS.italic}>{terbilang(jumlahUang as string) || '___'}</span>
        <span style={PS.bold}>Pembayaran</span><span>:</span><span>{orDash(metodePembayaran as string)}</span>
      </div>

      {/* Description box */}
      <div style={{ marginBottom: '12px' }}>
        <div style={PS.bold}>Untuk Pembayaran:</div>
        <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginTop: '4px', minHeight: '36px', background: '#fafafa', fontSize: '10px' }}>
          {orDash(deskripsiBarang as string)}
        </div>
      </div>

      {/* Penjual area */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
        <div style={PS.sigBox}>
          <div>Yang Menerima,</div>
          <div style={{ fontSize: '9px', color: '#666', marginBottom: '4px' }}>{orDash(namaPenjual as string)}</div>
          <SigImg src={tandaTangan as string | undefined} />
          <div style={{ ...PS.bold, textDecoration: 'underline' }}>{orDash(namaPenjual as string)}</div>
        </div>
      </div>
      {FOOTER}
    </div>
  );
}

