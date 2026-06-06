'use client';

import MorphBlob from './MorphBlob';

export default function ResponsiveWebDesign() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 md:py-24">
      <MorphBlob gradientFrom="#a8e6cf" gradientTo="#56ab91" className="-right-28 -top-28 h-[65vh] w-[60vw] max-h-[550px] max-w-[550px]" duration="20s" delay="-3s" opacity={0.45} />
      <MorphBlob gradientFrom="#56ab91" gradientTo="#8fd3a8" className="-left-28 -bottom-28 h-[60vh] w-[55vw] max-h-[500px] max-w-[500px]" duration="24s" delay="-8s" opacity={0.4} />

      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <h2 className="text-center font-bold text-[#010914] sm:text-center">
          Responsive Web Design &amp; Development
        </h2>
        <div className="mx-auto mt-3 flex justify-center">
          <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-[#3ab54b] stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
        </div>
        <p className="mx-auto mt-2 text-center text-xs font-semibold uppercase tracking-widest text-[#3ab54b] sm:text-sm">
          first impressions always count
        </p>

        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center leading-relaxed text-[#5a6564]">
          <p>
            <span className="font-semibold text-[#010914]">
              There&apos;s a lot of truth in the saying that &ldquo;first impressions always count&rdquo;.
            </span>{' '}
            In fact, you have just seven seconds to make a good impression before your visitors make up
            their mind about what they think about your brand.
          </p>
          <p>
            Your website is your storefront in the digital age. It entices customers and drives sales
            just like a well-designed physical store would do.
          </p>
        </div>
        <div className="mt-8 text-center">
          <button className="btn inline-flex items-center gap-2 rounded-xl bg-[#3ab54b] px-7 py-3.5 text-white shadow-md transition hover:bg-[#2d8a3b] hover:shadow-lg">
            CONTACT US
            <span aria-hidden="true" className="text-lg">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
