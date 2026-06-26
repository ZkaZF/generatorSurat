import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Ukuran ikon yang direkomendasikan Google (kelipatan 48px)
export const size = {
  width: 192,
  height: 192,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a17', // Warna C.charcoal dari desain
          borderRadius: '40px', // Sudut tumpul agar rapi
        }}
      >
        {/* Ikon 'description' SVG yang sama persis dengan logo navbar Anda */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          style={{ width: '110px', height: '110px', fill: '#ffffff' }}
        >
          <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
