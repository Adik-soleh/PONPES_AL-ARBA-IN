'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div key={item.question} className="rounded-2xl border border-dark/10 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold text-dark">{item.question}</span>
              <span className="text-primary-500">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen ? <p className="px-5 pb-5 text-sm text-dark/70">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
