'use client';

import Image from 'next/image';
import { ArrowRight, Timer, Store } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

export default function ResponsiveWebDesignFeature() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-[#f4f7f5] to-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-800 p-8 text-white shadow-xl shadow-emerald-200/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-300/60 md:col-span-2 md:p-12">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-emerald-300">
                Core Expertise
              </span>
              <CharReveal text="Responsive Web Design & Development" as="h1" className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl text-white" />
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

          <div className="group rounded-3xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/50">
            <div className="flex flex-col justify-between rounded-[calc(1.5rem-1px)] bg-white/95 p-8 backdrop-blur-sm transition group-hover:bg-white">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-md">
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
          </div>

          <div className="group rounded-3xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/50">
            <div className="flex flex-col justify-between rounded-[calc(1.5rem-1px)] bg-white/95 p-8 backdrop-blur-sm transition group-hover:bg-white">
              <div>
                <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-emerald-500">
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
                      className="group/logo flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-white to-emerald-50/50 p-2 shadow-sm transition-all hover:shadow-md hover:shadow-emerald-200/50 hover:scale-105"
                    >
                      <div className="relative h-8 w-8">
                        <Image src={src} alt={label} fill className="object-contain transition-all duration-300 group-hover/logo:scale-110" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs italic text-emerald-600/70">
                Built using top-tier, scalable software standards.
              </p>
            </div>
          </div>

          <div className="group rounded-3xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/50 md:col-span-2">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[calc(1.5rem-1px)] bg-white/95 p-8 backdrop-blur-sm transition group-hover:bg-white md:flex-row md:items-center md:p-12">
              <div className="max-w-md">
                <h3 className="mb-3 text-xl font-bold text-slate-800">
                  Your Digital Storefront
                </h3>
                <p className="leading-relaxed text-slate-500">
                  In the digital age, your website is your primary storefront. It entices customers, builds immediate trust, and drives scalable
                  conversions just like a well-designed premium physical store would.
                </p>
              </div>
              <div className="flex w-full flex-shrink-0 items-center gap-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 shadow-inner md:w-auto ring-1 ring-emerald-100">
                <div className="rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 text-white shadow-md">
                  <Store className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-700">
                    Physical Charm
                  </div>
                  <div className="text-xs text-emerald-600">
                    Meets Digital Power
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}


