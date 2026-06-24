import Link from 'next/link';

interface HeaderProps {
  variant?: 'home' | 'editor';
}

export default function Header({ variant = 'home' }: HeaderProps) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      height: '56px', padding: '0 16px', width: '100%',
      background: 'rgba(253,248,240,0.92)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #D4C5A0',
      boxShadow: '0 1px 4px rgba(27,46,74,0.05)',
    }}>
      {/* Left icon */}
      <Link
        href="/"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '40px', height: '40px', borderRadius: '50%',
          color: '#5A6A7A', textDecoration: 'none', transition: 'background .15s',
        }}
        aria-label={variant === 'editor' ? 'Kembali ke beranda' : 'Beranda'}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#F5EFE3')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = 'transparent')}
      >
        {variant === 'editor' ? (
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>close</span>
        ) : (
          <span className="material-symbols-outlined icon-fill" style={{ fontSize: '22px', color: '#C8A45C' }}>description</span>
        )}
      </Link>

      {/* Center Logo */}
      <Link href="/" style={{
        fontFamily: 'var(--font-serif), Georgia, serif',
        fontSize: '18px', fontWeight: 400, color: '#1B2E4A',
        textDecoration: 'none', letterSpacing: '-0.2px',
      }}>
        Suratin Dong
      </Link>

      {/* Right icon */}
      <button
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '40px', height: '40px', borderRadius: '50%',
          border: 'none', background: 'transparent', cursor: 'pointer',
          color: '#5A6A7A', transition: 'background .15s',
        }}
        aria-label="Profil akun"
        onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F5EFE3')}
        onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>account_circle</span>
      </button>
    </header>
  );
}

