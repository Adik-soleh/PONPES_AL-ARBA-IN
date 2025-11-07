'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

interface HeaderProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#bg" className="flex items-center gap-3" onClick={closeMenu}>
          <Image src="/images/logo-symbol.svg" width={44} height={44} alt="Logo Pondok Pesantren Al Arba'in" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-200">Pondok Pesantren</p>
            <p className="text-base font-semibold">Al Arba&apos;in</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <div className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
            <span className={`block h-0.5 w-6 bg-white transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-dark/95 px-6 py-4 text-sm text-white/80 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a key={`${item.href}-mobile`} href={item.href} className="transition hover:text-white" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
