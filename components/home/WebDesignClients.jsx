'use client';

import Image from 'next/image';
import SectionBackground from '@/components/backgrounds/SectionBackground';

export default function WebDesignClients() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 md:py-24">
      <SectionBackground variant="features" dark={true} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h3 className="font-semibold text-white/60">Web Design Clients</h3>
        <div className="mt-2 flex items-center gap-4">
          <svg width="87" height="10" viewBox="0 0 87 10" className="flex-shrink-0 fill-none stroke-teal-400 stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
          <h4 className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Featured Case Studies
          </h4>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {["Moneyline", "Blackpool Pleasure Beach", "AA Tyres", "Centre of Excellence"].map((name) => (
            <span key={name} className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 font-medium text-white/70">
              {name}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="leading-relaxed text-white/80">
              For 15 year&apos;s money line has operated as both an on and offline as a social lender
              aimed as a not for profit charity to help those most in need in an industry where in
              some cases the opposite can be the case.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              In an aggressive marketspace and saturated marketplace it was important to evolve the
              brand visually into something that really stood out.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="btn inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-white transition hover:bg-white hover:text-slate-900">
                VIEW CASE STUDY
              </button>
              <button className="btn inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-white/70 transition hover:bg-white hover:text-slate-900">
                View All Case Studies
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative" style={{ aspectRatio: '1/1' }}>
              <Image src="/assets/images/app-1.png" alt="Case study" fill className="rounded-xl object-cover" />
            </div>
            <div className="relative" style={{ aspectRatio: '1/1' }}>
              <Image src="/assets/images/app-3.png" alt="Case study" fill className="rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
