import type { FormData } from '@/lib/templates/types';
import { orDash, formatTanggalIndonesia, formatRupiah } from '@/lib/utils';

interface Props { formData: FormData; }

const DataRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-[100px_12px_1fr]">
    <span>{label}</span><span>:</span><span className="font-bold">{value}</span>
  </div>
);

const METODE_LABELS: Record<string, string> = {
  'tunai': 'Tunai / Cash',
  'transfer': 'Transfer Bank',
  'cicilan': 'Cicilan',
  'lainnya': 'Lainnya',
};

export default function SuratPerjanjianJualBeliPreview({ formData }: Props) {
  const {
    namaPenjual, nikPenjual, alamatPenjual, pekerjaanPenjual,
    namaPembeli, nikPembeli, alamatPembeli, pekerjaanPembeli,
    objekJualBeli, hargaJualBeli, metodePembayaran,
    deskripsiObjek, ketentuanTambahan,
    kotaSurat, tanggalSurat,
    tandaTanganPenjual, tandaTanganPembeli,
  } = formData;

  return (
    <div className="serif-text text-[9px] leading-relaxed p-6 h-full flex flex-col text-gray-900">
      {/* Header */}
      <div className="text-center border-b-2 border-double border-black pb-3 mb-3">
        <h2 className="font-bold uppercase text-sm tracking-wide">Surat Perjanjian Jual Beli</h2>
        {kotaSurat && tanggalSurat && (
          <p className="text-[8px] mt-0.5">
            {orDash(kotaSurat as string)}, {formatTanggalIndonesia(tanggalSurat as string)}
          </p>
        )}
      </div>

      <div className="space-y-2 flex-1 text-justify">
        <p>Yang bertanda tangan di bawah ini:</p>

        {/* Pihak Pertama */}
        <div className="pl-3 space-y-0.5">
          <DataRow label="Nama" value={orDash(namaPenjual as string)} />
          <DataRow label="NIK" value={orDash(nikPenjual as string)} />
          <DataRow label="Alamat" value={orDash(alamatPenjual as string)} />
          {pekerjaanPenjual && <DataRow label="Pekerjaan" value={pekerjaanPenjual as string} />}
        </div>
        <p>selanjutnya disebut sebagai <strong>PIHAK PERTAMA (Penjual)</strong>.</p>

        {/* Pihak Kedua */}
        <div className="pl-3 space-y-0.5">
          <DataRow label="Nama" value={orDash(namaPembeli as string)} />
          <DataRow label="NIK" value={orDash(nikPembeli as string)} />
          <DataRow label="Alamat" value={orDash(alamatPembeli as string)} />
          {pekerjaanPembeli && <DataRow label="Pekerjaan" value={pekerjaanPembeli as string} />}
        </div>
        <p>selanjutnya disebut sebagai <strong>PIHAK KEDUA (Pembeli)</strong>.</p>

        <p>Kedua belah pihak sepakat mengadakan perjanjian jual beli dengan ketentuan:</p>

        <ol className="list-decimal pl-5 space-y-1">
          <li>
            PIHAK PERTAMA menjual kepada PIHAK KEDUA:{' '}
            <strong>{orDash(objekJualBeli as string, 'objek jual beli')}</strong>.
            {deskripsiObjek && <span> {deskripsiObjek as string}</span>}
          </li>
          <li>
            Harga jual beli disepakati sebesar{' '}
            <strong>{hargaJualBeli ? formatRupiah(Number(hargaJualBeli)) : '_____________'}</strong>{' '}
            dengan metode pembayaran{' '}
            <strong>{metodePembayaran ? METODE_LABELS[metodePembayaran as string] || (metodePembayaran as string) : '_____________'}</strong>.
          </li>
          {ketentuanTambahan && (
            <li>{ketentuanTambahan as string}</li>
          )}
        </ol>

        <p>Demikian perjanjian ini dibuat dalam rangkap 2 (dua), bermaterai cukup, dan memiliki kekuatan hukum yang sama.</p>
      </div>

      {/* Dual Signatures */}
      <div className="mt-3 flex justify-between">
        <div className="text-center w-2/5">
          <p>Pihak Pertama</p>
          <p className="text-[8px] text-gray-500">(Penjual)</p>
          <div className="h-10 flex items-center justify-center my-1">
            {tandaTanganPenjual ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tandaTanganPenjual as string} alt="TTD Penjual" className="max-h-9 object-contain" />
            ) : (
              <div className="w-20 h-px border-b border-dashed border-gray-400" />
            )}
          </div>
          <p className="font-bold underline">{orDash(namaPenjual as string, '_____________')}</p>
        </div>
        <div className="text-center w-2/5">
          <p>Pihak Kedua</p>
          <p className="text-[8px] text-gray-500">(Pembeli)</p>
          <div className="h-10 flex items-center justify-center my-1">
            {tandaTanganPembeli ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tandaTanganPembeli as string} alt="TTD Pembeli" className="max-h-9 object-contain" />
            ) : (
              <div className="w-20 h-px border-b border-dashed border-gray-400" />
            )}
          </div>
          <p className="font-bold underline">{orDash(namaPembeli as string, '_____________')}</p>
        </div>
      </div>
    </div>
  );
}

