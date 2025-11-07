'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Slide = {
  image: string;
  heading: string;
  subheading: string;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
};

interface HeroCarouselProps {
  slides: Slide[];
}

const AUTOPLAY_INTERVAL = 6000;

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-dark">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/40" />
          <div className="relative flex h-full flex-col justify-center gap-6 px-8 py-10 text-white md:px-14">
            {slide.badge ? (
              <span className="inline-flex w-fit items-center rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
                {slide.badge}
              </span>
            ) : null}
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">{slide.heading}</h1>
            <p className="max-w-2xl text-base text-white/80 md:text-lg">{slide.subheading}</p>
            <div>
              <a
                href={slide.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
              >
                {slide.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.heading}
            aria-label={`Slide ${index + 1}`}
            className={`h-1.5 w-8 rounded-full transition ${
              index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
            }`}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
