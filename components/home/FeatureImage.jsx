'use client';

import Image from 'next/image';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';

export default function FeatureImage() {
  return (
    <section className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-16 md:py-24" style={{ minHeight: '70vh' }}>
      <MorphBlob gradientFrom="#f5f7fa" gradientTo="#c3cfe2" className="-left-20 top-0 h-[40vh] w-[40vw] max-h-[350px] max-w-[350px]" duration="18s" delay="-5s" opacity={0.6} />
      <AnimatedSection className="group relative w-full max-h-[70vh]" style={{ aspectRatio: '1200/584' }}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-300 to-emerald-500 p-[3px] shadow-2xl shadow-emerald-200/40 transition-all duration-500 group-hover:shadow-emerald-300/60">
          <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
            <Image
              src="/assets/Feature-Image.png"
              alt="Feature Image"
              fill
              className="object-contain transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
