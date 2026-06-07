'use client';

import Image from 'next/image';
import Blob from './Blob';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

export default function SEOWebDesignService() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <Blob className="-right-20 top-10 h-72 w-72" />
      <MorphBlob gradientFrom="#d4edda" gradientTo="#8fd3a8" className="-left-28 -bottom-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="23s" delay="-2s" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <CharReveal text="An SEO Web Design Service" className="font-bold text-[#010914]" />
            <p className="mt-4 leading-relaxed text-[#5a6564]">
              <span className="font-semibold text-[#010914]">
                Imagine this: you invest in a stunning website&hellip; and get the sound of crickets.
              </span>{' '}
              No leads, and no sales: just tumbleweed. That&apos;s the harsh reality when web design doesn&apos;t consider SEO.
            </p>
            <p className="mt-4 leading-relaxed text-[#5a6564]">
              When our team takes on a web design project, we go above and beyond to deliver
              exceptional results. We believe in putting our full effort into every aspect of the
              process, which is why some of the biggest brands across the country have chosen to
              partner with us.
            </p>
          </div>
          <div className="group relative w-full h-full" style={{ aspectRatio: '1024/1024' }}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-300 to-emerald-500 p-[3px] shadow-2xl shadow-emerald-200/50 transition-all duration-500 group-hover:shadow-emerald-300/70">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)] bg-white">
                <Image
                  src="/assets/images/Intro-preview-7.png"
                  alt="Web Design Process"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
