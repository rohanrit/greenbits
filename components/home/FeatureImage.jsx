'use client';

import Image from 'next/image';
import MorphBlob from './MorphBlob';

export default function FeatureImage() {
  return (
    <section className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-16 md:py-24" style={{ minHeight: '70vh' }}>
      <MorphBlob gradientFrom="#f5f7fa" gradientTo="#c3cfe2" className="-left-20 top-0 h-[40vh] w-[40vw] max-h-[350px] max-w-[350px]" duration="18s" delay="-5s" opacity={0.6} />
      <div className="relative w-full max-h-[70vh]" style={{ aspectRatio: '1024/686' }}>
        <Image
          src="/assets/Feature-Image.png"
          alt="Feature Image"
          fill
          className="rounded-2xl shadow-lg object-contain"
        />
      </div>
    </section>
  );
}
