'use client';

import Image from 'next/image';
import Blob from './Blob';
import MorphBlob from './MorphBlob';

export default function SEOWebDesignService() {
  return (
    <section className="relative bg-slate-50 py-16 md:py-24">
      <Blob className="-right-20 top-10 h-72 w-72" />
      <MorphBlob gradientFrom="#d4edda" gradientTo="#8fd3a8" className="-left-28 -bottom-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="23s" delay="-2s" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-bold text-[#010914]">
              An SEO Web Design Service
            </h2>
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
          <div className="relative w-full max-w-sm" style={{ aspectRatio: '1024/1024' }}>
            <Image
              src="/assets/images/Intro-preview-7.png"
              alt="Web Design Process"
              fill
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
