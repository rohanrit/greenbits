'use client';

import Image from 'next/image';
import Blob from './Blob';
import MorphBlob from './MorphBlob';

export default function WhatWeCouldDo() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Blob className="-right-20 top-10 h-72 w-72" />
      <MorphBlob gradientFrom="#a8e6cf" gradientTo="#dcedc1" className="-left-28 -bottom-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="25s" delay="-6s" />

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-br from-[#3ab54b] via-[#45c65a] to-[#2d8a3b] p-8 text-white md:p-10">
          <h3 className="font-bold">What We Could Do For You</h3>
          <p className="mt-4 leading-relaxed text-white/80">
            If you&apos;d like help with your digital marketing and our work on this project has inspired
            you, why not get in touch with us to discuss your plans:
          </p>
          <button className="btn mt-6 inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-white transition hover:bg-white hover:text-slate-900">
            Get in touch
          </button>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Related Web Design news:
          </h4>
          <div className="mt-4 space-y-4">
            {[
              { category: "Ducks in a Row, Industry Insights, Opinion Piece, Web Design", title: "The Future of Digital Design in 2026: Our Predictions", img: "/assets/The-future-of-digital-design-768x488.png" },
              { category: "Ducks in a Row, Web Design, Web Development", title: "WordPress Statistics Show Why it Should STILL Be Your CMS of Choice in 2026", img: "/assets/Why-Wordpress-Blog-Hero@2x-1-768x488.png" },
            ].map((post, i) => (
              <a key={i} href="#" className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                <Image src={post.img} alt={post.title} width={96} height={96} className="h-20 w-20 flex-shrink-0 rounded-xl object-cover sm:h-24 sm:w-24" />
                <div>
                  <p className="text-xs font-medium text-[#3ab54b]">{post.category}</p>
                  <h5 className="mt-1 font-semibold text-[#010914] transition group-hover:text-[#3ab54b]">
                    {post.title}
                  </h5>
                  <p className="mt-1 text-xs font-medium text-[#3ab54b]">Read more &rarr;</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
