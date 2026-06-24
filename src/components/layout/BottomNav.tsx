'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-white border-t border-gray-100 shadow-bottom-nav pb-safe md:hidden">
      {[
        { href: '/', icon: 'explore', label: 'Eksplor' },
        { href: '/drafts', icon: 'edit_note', label: 'Draft' },
        { href: '/profile', icon: 'person', label: 'Profil' },
      ].map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center px-4 py-1 transition-transform active:scale-90 duration-200"
            style={{ color: active ? '#1B2E4A' : '#8A9AAA' }}
          >
            <div style={{
              padding: '4px 16px', borderRadius: '999px', display: 'flex', flexDirection: 'column', alignItems: 'center',
              background: active ? '#F0E4C4' : 'transparent',
            }}>
              <span className={`material-symbols-outlined mb-0.5 ${active ? 'icon-fill' : ''}`}
                style={{ fontSize: '22px', color: active ? '#C8A45C' : '#8A9AAA' }}>
                {item.icon}
              </span>
            </div>
            <span className="text-[10px] font-semibold">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

