'use client';

import Link from 'next/link';

type MenuItem = {
  label: string;
  description: string;
  href: string;
  emoji: string;
  comingSoon?: boolean;
};

interface CircularMenuProps {
  items: MenuItem[];
}

export default function CircularMenu({ items }: CircularMenuProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.comingSoon ? '#' : item.href}
          className={`group relative overflow-hidden rounded-3xl border border-dark/10 p-5 shadow-[0_20px_40px_rgba(12,18,34,0.06)] transition ${
            item.comingSoon
              ? 'pointer-events-none bg-white/70 opacity-70'
              : 'bg-white/90 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(12,18,34,0.12)]'
          }`}
          aria-disabled={item.comingSoon}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden>
              {item.emoji}
            </span>
            <div>
              <p className="text-base font-semibold text-dark">{item.label}</p>
              <p className="text-xs text-dark/60">{item.description}</p>
            </div>
          </div>
          {item.comingSoon ? (
            <span className="mt-5 inline-flex rounded-full bg-dark/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-dark/50">
              Akan datang
            </span>
          ) : (
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              Kunjungi
              <span className="text-lg text-primary-400 transition group-hover:translate-x-1">→</span>
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
