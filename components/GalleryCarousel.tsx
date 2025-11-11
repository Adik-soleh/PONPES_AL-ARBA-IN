'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type GalleryItem = {
  image: string;
  title: string;
  caption: string;
  slug?: string;
  link?: string;
};

interface GalleryCarouselProps {
  items: GalleryItem[];
}

const getOffset = (index: number, active: number, length: number) => (index - active + length) % length;

const centerTransform = 'translate-x-[-50%]';
const nearRightTransform =
  'translate-x-[calc(-50%+3rem)] sm:translate-x-[calc(-50%+5rem)] lg:translate-x-[calc(-50%+10rem)] xl:translate-x-[calc(-50%+15rem)]';
const nearLeftTransform =
  'translate-x-[calc(-50%-3rem)] sm:translate-x-[calc(-50%-5rem)] lg:translate-x-[calc(-50%-10rem)] xl:translate-x-[calc(-50%-15rem)]';
const farRightTransform =
  'translate-x-[calc(-50%+6rem)] md:translate-x-[calc(-50%+12rem)] lg:translate-x-[calc(-50%+16rem)] xl:translate-x-[calc(-50%+22rem)]';
const farLeftTransform =
  'translate-x-[calc(-50%-6rem)] md:translate-x-[calc(-50%-12rem)] lg:translate-x-[calc(-50%-16rem)] xl:translate-x-[calc(-50%-22rem)]';

const cardClass = (offset: number, length: number) => {
  if (offset === 0) return `${centerTransform} z-30 scale-105 opacity-100 shadow-[0_35px_60px_rgba(12,18,34,0.18)]`;
  if (offset === 1 || (length > 2 && offset === length - 1))
    return `${offset === 1 ? nearRightTransform : nearLeftTransform} scale-95 opacity-80 z-10 shadow-[0_25px_40px_rgba(12,18,34,0.08)]`;
  if (offset === 2 || (length > 3 && offset === length - 2))
    return `${offset === 2 ? farRightTransform : farLeftTransform} scale-90 opacity-0 md:opacity-40 z-0`;
  return `${centerTransform} opacity-0 pointer-events-none`;
};

const imageTone = (offset: number) => (offset === 0 ? 'filter-none' : 'filter grayscale opacity-70');

export default function GalleryCarousel({ items }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) {
    return null;
  }

  const move = (direction: 'next' | 'prev') => {
    setActiveIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % items.length;
      }
      return (prev - 1 + items.length) % items.length;
    });
  };

  const selectIndex = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  const activeItem = items[activeIndex];
  const detailHref = useMemo(() => {
    if (activeItem.slug) {
      return `/galeri/${activeItem.slug}` as const;
    }
    return activeItem.link ?? 'https://www.instagram.com/pp.alarbain_official';
  }, [activeItem]);
  const useNextLink = detailHref.startsWith('/');

  return (
    <div className="space-y-10">
      <div className="relative mx-auto w-full max-w-5xl py-8">
        <button
          type="button"
          onClick={() => move('prev')}
          className="absolute left-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary-200/80 text-primary-700 shadow-lg transition hover:bg-primary-200"
          aria-label="Foto sebelumnya"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => move('next')}
          className="absolute right-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary-200/80 text-primary-700 shadow-lg transition hover:bg-primary-200"
          aria-label="Foto berikutnya"
        >
          ›
        </button>
        <div className="mx-auto flex max-w-4xl justify-center">
          <div className="relative h-[360px] w-full overflow-visible">
            {items.map((item, index) => {
              const offset = getOffset(index, activeIndex, items.length);
              return (
                <div
                  key={item.title}
                  className={`absolute inset-y-0 left-1/2 flex w-72 flex-col items-center rounded-[32px] bg-white p-5 text-center transition-all duration-500 ease-out md:w-80 ${cardClass(
                    offset,
                    items.length
                  )}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => selectIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      selectIndex(index);
                    }
                  }}
                >
                  <div className={`relative h-56 w-full overflow-hidden rounded-3xl bg-dark/5 ${imageTone(offset)}`}>
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="320px" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">{activeItem.caption}</p>
        <h3 className="mt-4 text-3xl font-semibold text-dark">{activeItem.title}</h3>
        <p className="mt-2 text-sm text-dark/60">Lihat versi lengkap dokumentasi santri kami.</p>
        {useNextLink ? (
          <a href={detailHref} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
            Lihat full? Klik di sini <span>→</span>
          </a>
        ) : (
          <a
            href={detailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
          >
            Lihat full? Klik di sini <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
}
