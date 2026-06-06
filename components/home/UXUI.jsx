'use client';

import Blob from './Blob';
import MorphBlob from './MorphBlob';

export default function UXUI() {
  return (
    <section className="relative bg-slate-50 py-16 md:py-24">
      <Blob className="-right-20 top-10 h-80 w-80" />
      <MorphBlob gradientFrom="#a8e6cf" gradientTo="#88d8b0" className="-left-28 -bottom-28 h-[55vh] w-[55vw] max-h-[450px] max-w-[450px]" duration="25s" delay="-3s" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-bold text-[#010914]">
            UX &amp; UI in Web Design
          </h2>
          <div className="mt-4 flex justify-start">
            <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-[#3ab54b] stroke-[4]">
              <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
            </svg>
          </div>
          <p className="mt-6 leading-relaxed text-[#5a6564]">
            UX and UI often get lumped together within the context of web design, but are actually
            very different. UI (user interface) covers visual and interactive website elements that
            allow users to navigate, engage with content, and accomplish tasks. Everything from
            buttons and forms to menus comes under the umbrella of UI. On the other hand, UX (user
            experience) encompasses everything that a user may experience whilst browsing your site,
            both good and bad, emotional and physical. Both are vital for building positive
            connections between users and brands.
          </p>
          <p className="mt-5 leading-relaxed text-[#5a6564]">
            The primary goal of UI design is to create interfaces that are intuitive, visually
            appealing, and user-friendly. This involves considering key factors like usability,
            accessibility, and responsiveness across various devices and screen sizes.
          </p>
          <p className="mt-5 leading-relaxed text-[#5a6564]">
            Good user experience (UX) is crucial for retaining visitors, encouraging engagement, and
            driving conversions. No single thing creates a positive experience for a user. Aesthetics,
            technology and emotion all play important roles.
          </p>
        </div>
      </div>
    </section>
  );
}
