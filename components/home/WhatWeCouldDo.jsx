'use client';

import Image from 'next/image';
import Blob from './Blob';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

export default function WhatWeCouldDo() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Blob className="-right-20 top-10 h-72 w-72" />
      <MorphBlob gradientFrom="#a8e6cf" gradientTo="#dcedc1" className="-left-28 -bottom-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="25s" delay="-6s" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />

      <AnimatedSection className="grid gap-10 md:grid-cols-2">
        <div className="group relative rounded-2xl bg-gradient-to-br from-[#3ab54b] via-[#45c65a] to-[#2d8a3b] p-8 text-white shadow-lg shadow-emerald-200/50 transition-shadow duration-500 hover:shadow-2xl hover:shadow-emerald-300/50 md:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-grid-pattern-white opacity-20" />
          <CharReveal text="What We Could Do For You" as="h3" className="font-bold relative z-10" />
          <p className="relative z-10 mt-4 leading-relaxed text-white/80">
            If you&apos;d like help with your digital marketing and our work on this project has inspired
            you, why not get in touch with us to discuss your plans:
          </p>
          <a href="#contact" className="btn relative z-10 mt-6 inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900">
            Get in touch
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Related Web Design news:
          </h4>
          <div className="mt-4 space-y-4">
            {[
              { category: "Web Development, AI, Industry News", title: "Google WebMCP Origin Trial Goes Live in Chrome 149 — Paving the Way for the Agentic Web", img: "/assets/news-google-01.png" },
              { category: "AI, Web Development, Microsoft", title: "Microsoft Launches MAI-Code-1-Flash: New AI Coding Model Outperforms Claude Haiku 4.5 in GitHub Copilot", img: "/assets/news-microsoft-01.png" },
            ].map((post, i) => (
              <button key={i} className="group relative w-full rounded-2xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] text-left shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-300/40">
                <div className="flex gap-4 rounded-[calc(1rem-1px)] bg-white/95 p-4 backdrop-blur-sm transition group-hover:bg-white sm:p-5">
                  <Image src={post.img} alt={post.title} width={96} height={96} className="h-20 w-20 flex-shrink-0 rounded-xl object-cover shadow-md sm:h-24 sm:w-24" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-[#3ab54b]">{post.category}</p>
                    <h5 className="mt-1 text-[18px] font-semibold text-[#010914] transition group-hover:text-[#3ab54b]">
                      {post.title}
                    </h5>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
