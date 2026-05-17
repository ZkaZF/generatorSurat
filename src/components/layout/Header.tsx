import Link from 'next/link';

interface HeaderProps {
  variant?: 'home' | 'editor';
}

export default function Header({ variant = 'home' }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center h-14 px-4 w-full bg-white/90 backdrop-blur-md border-b border-outline-variant/40 shadow-header">
      {/* Left icon */}
      <Link
        href="/"
        className="flex items-center justify-center w-10 h-10 rounded-full text-outline hover:bg-gray-50 transition-colors active:scale-95 duration-150"
        aria-label={variant === 'editor' ? 'Kembali ke beranda' : 'Beranda'}
      >
        {variant === 'editor' ? (
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>close</span>
        ) : (
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px' }}>description</span>
        )}
      </Link>

      {/* Center Logo */}
      <Link href="/" className="text-lg font-bold tracking-tight text-primary select-none">
        SuratOtomatis
      </Link>

      {/* Right icon */}
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full text-outline hover:bg-gray-50 transition-colors active:scale-95 duration-150"
        aria-label="Profil akun"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>account_circle</span>
      </button>
    </header>
  );
}
