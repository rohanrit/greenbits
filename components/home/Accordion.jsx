'use client';

import { useState } from 'react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="faq-head flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-[#010914] transition hover:text-[#3ab54b]"
          >
            {item.q}
            <span
              className={`ml-4 flex-shrink-0 text-[#3ab54b] text-2xl transition-transform duration-300 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div className="faq-body border-t border-slate-100 px-6 py-4 leading-relaxed text-[#010914]">
                {item.a}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
