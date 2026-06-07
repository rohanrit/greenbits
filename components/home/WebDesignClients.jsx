'use client';

import Image from 'next/image';
import SectionBackground from '@/components/backgrounds/SectionBackground';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

export default function WebDesignClients() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
      <SectionBackground variant="features" dark={true} />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern-white" />
      <AnimatedSection className="relative z-10 mx-auto max-w-6xl px-6">
        <CharReveal text="Web Design Clients" as="h3" className="font-semibold text-white/60" />
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
            <div className="hidden">
              <button>VIEW CASE STUDY</button>
              <button>View All Case Studies</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative" style={{ aspectRatio: '1/1' }}>
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-400/60 via-teal-300/60 to-emerald-500/60 p-[2px] shadow-lg shadow-emerald-900/20 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-emerald-500/30">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
                  <Image src="/assets/images/app-1.png" alt="Case study" fill className="object-cover transition duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
            <div className="group relative" style={{ aspectRatio: '1/1' }}>
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-400/60 via-teal-300/60 to-emerald-500/60 p-[2px] shadow-lg shadow-emerald-900/20 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-emerald-500/30">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
                  <Image src="/assets/images/app-3.png" alt="Case study" fill className="object-cover transition duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
