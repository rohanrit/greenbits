'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-neutral-950/80 px-6 py-3 shadow-lg backdrop-blur-xl md:px-10 lg:px-16">
      <Link href="/" className="flex-shrink-0">
        <Image src="/assets/gb-1000x250.png" alt="Greenbits" width={1000} height={250} className="h-8 md:h-10 w-auto" />
      </Link>
      <a href="#contact" className="rounded-xl bg-[#3ab54b] px-5 py-2.5 text-sm font-semibold uppercase text-white shadow-md transition hover:bg-[#2d8a3b]">
        Contact Us
      </a>
    </nav>
  );
}
