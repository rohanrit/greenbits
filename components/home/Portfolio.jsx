'use client';

import Image from 'next/image';
import Blob from './Blob';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

const images = [
  "/assets/images/standardbredtrader-01.jpg",
  "/assets/images/mobicomp-01.jpg",
  "/assets/images/beewise-employer-01.jpg",
  "/assets/images/beewise-employee-01.jpg",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <Blob className="-right-20 bottom-0 h-72 w-72" />
      <MorphBlob gradientFrom="#88d8b0" gradientTo="#3ab54b" className="-left-28 -top-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="24s" delay="-6s" opacity={0.4} />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#3ab54b] sm:text-sm">
          Our Recent Work
        </div>
        <CharReveal text="Web Design Portfolio" className="text-center font-bold text-[#010914]" />
        <div className="mx-auto mt-3 flex justify-center">
          <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-[#3ab54b] stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className={`group relative ${
                i === 0 ? "col-span-2 row-span-2 min-h-[400px]" : "min-h-[200px]"
              }`}
            >
              <div className={`h-full w-full rounded-2xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[2px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/50`}>
                <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
                  <Image
                    src={src}
                    alt={`Portfolio item ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition group-hover:opacity-100">
                    <span className="text-sm font-semibold text-white">View Project &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
