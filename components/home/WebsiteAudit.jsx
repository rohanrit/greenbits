'use client';

import Blob from './Blob';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

export default function WebsiteAudit() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Blob className="-left-20 top-10 h-80 w-80" />
      <MorphBlob gradientFrom="#56ab91" gradientTo="#8fd3a8" className="-right-32 -bottom-32 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="19s" delay="-8s" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />

      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <CharReveal text="Website Audit" className="font-bold text-[#010914]" />
        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#3ab54b] sm:text-sm">
          Want to Increase Your Conversions?
        </p>
        <div className="mx-auto mt-3 flex justify-center">
          <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-[#3ab54b] stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
        </div>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#5a6564]">
          Our experts can suggest plenty of options to improve your website while boosting your
          rankings. We&apos;ll also help to increase your conversion rate with a brand new look!
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Request your website audit here and we will be in touch with you shortly to discuss your requirements.
        </p>
        <div className="mt-8">
          <a href="#contact" className="btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3ab54b] to-emerald-500 px-7 py-3.5 text-white shadow-lg shadow-emerald-200/50 transition-all duration-300 hover:from-[#2d8a3b] hover:to-emerald-600 hover:shadow-xl hover:shadow-emerald-300/50">
            Get in touch
            <span aria-hidden="true" className="text-lg">&rarr;</span>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
