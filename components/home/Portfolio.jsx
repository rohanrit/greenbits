'use client';

import Image from 'next/image';
import Blob from './Blob';
import MorphBlob from './MorphBlob';

const images = [
  "/assets/images/standardbredtrader-01.jpg",
  "/assets/images/mobicomp-01.jpg",
  "/assets/images/beewise-employer-01.jpg",
  "/assets/images/beewise-employee-01.jpg",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-slate-50 py-16 md:py-24">
      <Blob className="-right-20 bottom-0 h-72 w-72" />
      <MorphBlob gradientFrom="#88d8b0" gradientTo="#3ab54b" className="-left-28 -top-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="24s" delay="-6s" opacity={0.4} />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#3ab54b] sm:text-sm">
          Our Recent Work
        </div>
        <h2 className="text-center font-bold text-[#010914]">
          Web Design Portfolio
        </h2>
        <div className="mx-auto mt-3 flex justify-center">
          <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-[#3ab54b] stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-sm transition hover:shadow-lg ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Portfolio item ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
