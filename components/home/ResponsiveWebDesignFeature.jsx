'use client';

import Image from 'next/image';
import { ArrowRight, Timer, Database, Store } from 'lucide-react';

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
              <div className="relative mt-6 w-full" style={{ aspectRatio: '1012/174', maxWidth: '400px' }}>
                <Image
                  src="/assets/images/AI-Website-Maintainance-Design-Development.png"
                  alt="Web Design & Development"
                  fill
                  className="rounded-xl object-contain"
                />
              </div>
            </div>
            <div className="mt-8 md:mt-12">
              <a
                href="#"
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
                Ecosystem
              </span>
              <h3 className="mb-6 text-lg font-bold text-slate-800">
                Modern Architecture
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: NodeIcon, color: 'text-green-600', label: 'Node.js' },
                  { icon: ReactIcon, color: 'text-cyan-500', label: 'React' },
                  { icon: PHPIcon, color: 'text-indigo-600', label: 'PHP' },
                  { icon: WPIcon, color: 'text-blue-500', label: 'WordPress' },
                  { icon: CSSIcon, color: 'text-blue-600', label: 'CSS3' },
                  { icon: () => <Database className="h-6 w-6" />, color: 'text-orange-500', label: 'Databases' },
                ].map(({ icon: Icon, color, label }) => (
                  <div
                    key={label}
                    title={label}
                    className="group flex flex-col items-center justify-center rounded-xl bg-slate-50 p-3 transition-colors hover:bg-emerald-50"
                  >
                    <Icon />
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

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-green-600">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-cyan-500">
      <path d="M12 10.11c1.04 0 1.89.85 1.89 1.89s-.85 1.89-1.89 1.89-1.89-.85-1.89-1.89.85-1.89 1.89-1.89zM12 2.5c-2.39 0-4.49 1.15-5.91 2.95 1.77 1.02 4.23 1.84 6.96 2.28.62-1.27 1.33-2.45 2.1-3.46C14.63 3.23 13.33 2.5 12 2.5zM8.71 6.08C7.71 7.33 6.83 8.74 6.12 10.26c1.78.26 3.76.46 5.85.58.69-1.24 1.46-2.4 2.29-3.44-1.87-.52-3.77-.8-5.55-.32zM5.56 12.37c-.11.52-.17 1.07-.17 1.63 0 3.78 2.53 6.99 6 7.93-1.81-2.36-3.02-5.68-3.02-9.56 0-.32.01-.63.03-.94-1.01-.22-2-.39-2.84-.06zM6.29 16.68c.63 1.66 1.53 3.1 2.62 4.25-1.55-.41-2.93-1.19-3.99-2.21.45-.7.9-1.38 1.37-2.04z"/>
    </svg>
  );
}

function PHPIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-indigo-600">
      <path d="M7.01 18.5L9.52 5.5h3.03c2.1 0 3.7.43 4.8 1.28 1.1.86 1.65 2.08 1.65 3.67 0 .99-.21 1.86-.63 2.6-.42.74-1.01 1.31-1.78 1.71-.77.4-1.67.6-2.71.6h-1.69l-1.15 5.13H7.01zm3.91-7.47h.89c.88 0 1.57-.22 2.07-.65s.76-1.03.76-1.78c0-.73-.25-1.26-.76-1.6s-1.2-.55-2.07-.55h-.89l-1 4.58z"/>
      <path d="M16.01 18.5l.75-3.46h1.28c.53 0 .98-.1 1.34-.31.36-.21.62-.52.77-.94.16-.42.23-.92.23-1.5 0-.48-.09-.91-.27-1.29.13-.04.27-.06.42-.06h1.15l.75-3.44h-2.88c-.83 0-1.49.19-1.96.58-.48.39-.8.91-.98 1.58h-1.23l-.75 3.46h1.23c-.18.67-.27 1.38-.27 2.14 0 .58.07 1.09.21 1.51.14.42.35.76.63 1.04.27.28.6.47.97.58.37.11.78.16 1.23.16h1.06z"/>
    </svg>
  );
}

function WPIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-blue-500">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 12v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );
}

function CSSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-blue-600">
      <path d="M4.5 2l1.64 18.24L12 22l5.86-1.76L19.5 2H4.5zm13.48 3.23l-.33 3.72H10.19l.14 1.57h7.21l-.55 6.17L12 18.03l-4.99-1.34-.35-3.89h2.43l.18 2.05 2.73.74 2.73-.74.28-3.16H6.54l-.52-5.7h12.12l-.16 1.7z"/>
    </svg>
  );
}
