"use client";

import Image from "next/image";
import SectionBackground from "@/components/backgrounds/SectionBackground";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
      <SectionBackground variant="footer" dark={true} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/bg-footer-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-0 select-none opacity-20 h-full w-auto max-h-[700px]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/bg-footer-right.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 select-none opacity-20 h-full w-auto max-h-[700px]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        {/* Footer top section - Carbon Beauty */}
        <div className="mb-16">
          <div className="flex items-center justify-center">
            <div className="h-px flex-1 bg-white/20" />
            <div className="px-10 text-center">
              <Image
                src="/assets/gb-1000x250-bw.png"
                alt="Greenbits"
                width={1000}
                height={250}
                className="mb-5 h-10 w-auto"
              />
            </div>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            <nav>
              <ul className="space-y-5 text-center">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item}>
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-xs font-semibold uppercase tracking-[2px] text-white/50 transition hover:text-[#3ab54b]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col items-center">
              <div className="flex gap-10 items-center text-white/50">
                <a href="#" className="transition hover:text-[#3ab54b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
                  </svg>
                </a>
                <a href="#" className="transition hover:text-[#3ab54b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="transition hover:text-[#3ab54b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                </a>
              </div>
              <div className="my-7 h-10 w-px bg-white/20" />
            </div>

            <nav>
              <ul className="space-y-5 text-center">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Portfolio", href: "#portfolio" },
                ].map((item) => (
                  <li key={item}>
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-xs font-semibold uppercase tracking-[2px] text-white/50 transition hover:text-[#3ab54b]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Greenbits. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
