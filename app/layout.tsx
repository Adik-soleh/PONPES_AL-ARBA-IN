import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'Pondok Pesantren Al Arba\'in',
  description:
    'Pondok Pesantren Al Arba\'in – pusat pendidikan Islam terpadu dengan program tahfidz, sains, dan kemandirian santri.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} font-body bg-[#f7f8fb] text-dark`}>
        {children}
      </body>
    </html>
  );
}
