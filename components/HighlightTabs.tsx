'use client';

import { useState } from 'react';

type Highlight = {
  title: string;
  pill: string;
  content: string;
};

interface HighlightTabsProps {
  highlights: Highlight[];
}

export default function HighlightTabs({ highlights }: HighlightTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!highlights.length) {
    return null;
  }

  return (
    <div className="rounded-[32px] border border-dark/5 bg-white/90 p-6 shadow-[0_25px_70px_rgba(12,18,34,0.08)] md:p-10">
      <div className="flex flex-wrap gap-3">
        {highlights.map((highlight, index) => (
          <button
            key={highlight.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeIndex === index ? 'bg-primary-500 text-white shadow-glow' : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
            }`}
          >
            {highlight.pill}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4 text-dark">
        <h3 className="text-2xl font-semibold md:text-3xl">{highlights[activeIndex].title}</h3>
        <p className="text-base text-dark/70 md:text-lg">{highlights[activeIndex].content}</p>
      </div>
    </div>
  );
}

