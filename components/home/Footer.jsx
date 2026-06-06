'use client';

import Image from 'next/image';
import SectionBackground from '@/components/backgrounds/SectionBackground';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
      <SectionBackground variant="footer" dark={true} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/bg-footer-left.png" alt="" aria-hidden="true" className="pointer-events-none absolute -left-10 top-0 select-none opacity-20 h-full w-auto max-h-[700px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/bg-footer-right.png" alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 top-0 select-none opacity-20 h-full w-auto max-h-[700px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Image src="/assets/gb-1000x250-bw.png" alt="Greenbits" width={1000} height={250} className="mb-5 h-10 w-auto" />
            <p className="text-sm leading-relaxed text-white/40">
              Delivering exceptional web design and digital solutions that drive real business results.
            </p>
            <div className="mt-5 flex gap-3">
              {["FB","X","IG","LI","YT"].map((s) => (
                <a key={s} href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white/40 transition hover:bg-[#3ab54b] hover:text-white">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">Visit Our Offices</h4>
            <div className="mt-5 space-y-5">
              <div>
                <p className="font-semibold text-white/80">New Delhi</p>
                <a href="tel:01618506677" className="text-sm text-[#3ab54b] hover:underline">0000000000</a>
                <p className="mt-1 text-sm text-white/40">Dwarka-14<br />122017</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">Awards &amp; Accreditations</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Google Ads","Meta Partner","Prolific North","Drum Award","Shopify Partner","Cyber Essentials"].map((a) => (
                <span key={a} className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/40">{a}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">Quick Links</h4>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-white/40">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-[#3ab54b]">{item.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Greenbits. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
