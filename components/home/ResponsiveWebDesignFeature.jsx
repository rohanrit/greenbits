'use client';

import Image from 'next/image';
import { ArrowRight, Timer, Store } from 'lucide-react';

export default function ResponsiveWebDesignFeature() {
  return (
    <section id="services" className="bg-[#f4f7f5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-800 p-8 text-white shadow-sm transition-transform duration-300 hover:scale-[1.01] md:col-span-2 md:p-12">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-emerald-300">
                Core Expertise
              </span>
              <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Responsive Web Design &amp; Development
              </h1>
            </div>
            <div className="mt-8 md:mt-12">
              <a
                 href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-emerald-900 shadow-md transition-colors hover:bg-emerald-50 group"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl text-emerald-600">
              <Timer className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 text-5xl font-black tracking-tight text-slate-800">
                7s
              </div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-emerald-600">
                First Impressions Count
              </span>
              <p className="text-sm leading-relaxed text-slate-500">
                You have just seven seconds to make a great impression before visitors judge your brand. We make every millisecond matter.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-slate-400">
                AI Ecosystem
              </span>
              <h3 className="mb-6 text-lg font-bold text-slate-800">
                AI Model Architecture
              </h3>

              <div className="grid grid-cols-4 gap-2">
                {[
                  { src: '/assets/images/chatgpt-ai-logo.png', label: 'ChatGPT' },
                  { src: '/assets/images/claude-ai-logo.png', label: 'Claude' },
                  { src: '/assets/images/copilot-ai-logo.png', label: 'Copilot' },
                  { src: '/assets/images/deepseak-ai-logo.png', label: 'DeepSeek' },
                  { src: '/assets/images/gemini-ai-logo.png', label: 'Gemini' },
                  { src: '/assets/images/gork-ai-logo.png', label: 'Grok' },
                  { src: '/assets/images/meta-ai-logo.png', label: 'Meta AI' },
                  { src: '/assets/images/perplexity-ai-logo.png', label: 'Perplexity' },
                ].map(({ src, label }) => (
                  <div
                    key={label}
                    title={label}
                    className="group flex flex-col items-center justify-center rounded-xl bg-white p-2 transition-colors hover:bg-emerald-50"
                  >
                    <div className="relative h-8 w-8">
                      <Image src={src} alt={label} fill className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-xs italic text-slate-400">
              Built using top-tier, scalable software standards.
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-transform duration-300 hover:scale-[1.01] md:col-span-2 md:flex-row md:items-center md:p-12">
            <div className="max-w-md">
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                Your Digital Storefront
              </h3>
              <p className="leading-relaxed text-slate-500">
                In the digital age, your website is your primary storefront. It entices customers, builds immediate trust, and drives scalable
                conversions just like a well-designed premium physical store would.
              </p>
            </div>
            <div className="flex w-full flex-shrink-0 items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 md:w-auto">
              <div className="rounded-xl bg-emerald-500 p-3 text-white">
                <Store className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-700">
                  Physical Charm
                </div>
                <div className="text-xs text-slate-400">
                  Meets Digital Power
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


