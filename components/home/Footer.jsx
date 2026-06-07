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
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-16">
        {/* Logo — horizontal lines hidden on mobile */}
        <div className="flex items-center justify-center">
          <div className="hidden md:block h-px flex-1 bg-white/20" />
          <div className="px-10 text-center">
            <Image
              src="/assets/gb-1000x250-bw.png"
              alt="Greenbits"
              width={1000}
              height={250}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/20" />
        </div>

        {/* Mobile: all links in a single row */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-2 md:hidden mb-8">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
            { label: "Services", href: "#services" },
            { label: "Portfolio", href: "#portfolio" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[2px] text-white/50 transition hover:text-[#3ab54b] py-3"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-5 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Left nav — desktop only */}
          <nav className="hidden md:block">
            <ul className="space-y-5 text-center">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs font-semibold uppercase tracking-[2px] text-white/50 transition hover:text-[#3ab54b]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tech stack badges */}
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Vercel", color: "#fff", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2L2 21h20L12 2z"/></svg> },
                { name: "Netlify", color: "#00AD9F", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">N</text></svg> },
                { name: "AWS", color: "#FF9900", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M8 4l-4 6 4 6h10l4-6-4-6H8z"/><text x="12" y="16" textAnchor="middle" fill="#0a0a0a" fontSize="9" fontWeight="bold" fontFamily="sans-serif">aws</text></svg> },
                { name: "DigitalOcean", color: "#0080FF", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><path d="M12 2v20" stroke="#0a0a0a" strokeWidth="2"/></svg> },
                { name: "GoDaddy", color: "#1DB954", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">G</text></svg> },
                { name: "cPanel", color: "#FF6C2C", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><rect x="4" y="4" width="16" height="16" rx="3"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">cP</text></svg> },
                { name: "Hostinger", color: "#673DE6", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">H</text></svg> },
                { name: "Namecheap", color: "#E37222", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">NC</text></svg> },
                { name: "Google Analytics", color: "#E37400", icon: <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/><path d="M8 14l-3 5h14l-4-7-3 4-4-6z" fill="#fff"/></svg> },
                { name: "Meta", color: "#1877F2", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">M</text></svg> },
                { name: "Google Workspace", color: "#4285F4", icon: <svg viewBox="0 0 24 24" className="h-4 w-4"><circle cx="12" cy="12" r="10" fill="#4285F4"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">G</text></svg> },
                { name: "Microsoft", color: "#00A4EF", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg> },
                { name: "Oracle", color: "#F80000", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><ellipse cx="12" cy="12" rx="10" ry="6"/><text x="12" y="15" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">O</text></svg> },
              ].map((brand) => (
                <span
                  key={brand.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/50 transition hover:border-white/30 hover:text-white/80"
                >
                  <span style={{ color: brand.color }} className="shrink-0">
                    {brand.icon}
                  </span>
                  {brand.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right nav — desktop only */}
          <nav className="hidden md:block">
            <ul className="space-y-5 text-center">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
              ].map((item) => (
                <li key={item.href}>
                  <a
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

        <div className="mt-6 border-t border-white/5 pt-6 text-center text-xs text-white/30 md:mt-12">
          &copy; {new Date().getFullYear()} Greenbits. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
