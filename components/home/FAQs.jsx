'use client';

import Blob from './Blob';
import MorphBlob from './MorphBlob';
import Accordion from './Accordion';

export default function FAQs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      <Blob className="-left-20 top-10 h-72 w-72" />
      <MorphBlob gradientFrom="#dcedc1" gradientTo="#88d8b0" className="-right-28 -bottom-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="21s" delay="-4s" opacity={0.35} />
      <div className="relative z-20 mx-auto max-w-4xl px-6">
        <h2 className="font-bold text-[#010914]">
          Web Design FAQs
        </h2>
        <div className="mt-4 flex justify-start">
          <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-teal-400 stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
        </div>
        <div className="mt-8">
          <Accordion
            items={[
              { q: "What is Responsive Web Design?", a: "Responsive web design delivers a website that dynamically responds to the screen size, platform and orientation of the device that's viewing it. As a user switches between a mobile device, a laptop, desktop or tablet, the website's display, resolution, image size and scripting abilities will accommodate those changes." },
              { q: "What is UX Design?", a: "User Experience (UX) design is the process of creating digital products that are intuitive, efficient, and enjoyable to use. UX design is all about putting the user's needs at the forefront of the design process. This involves understanding user journeys, preferences, and pain points." },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
