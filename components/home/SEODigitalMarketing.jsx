'use client';

import { RefreshCw, GitCompare, Search, BarChart3, FileText, Megaphone } from 'lucide-react';
import Blob from './Blob';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

const cards = [
  { title: "Expert Redesigns", text: "Our SEO, web design and web development teams will work together to ensure that any changes to your site not only preserve existing performance and brand perception, but also boost future potential.", icon: RefreshCw },
  { title: "A/B Testing", text: "A/B Testing ensures that any changes we make will improve conversion rates. We'll perform tests against the current design of your site to understand what produces the best results.", icon: GitCompare },
  { title: "SEO Ready", text: "Any website we provide will be fully SEO ready. We provide optimal code and navigation structures, plus fast load times, so that you have all the right tools for effective optimisation.", icon: Search },
  { title: "Search Engine Optimisation", text: "We'll uncover the search terms that your target audience is using. Then we'll optimise your site for Google's guidelines, checking site speed, metadata, internal linking, social media integration, and eliminating duplicate content.", icon: BarChart3 },
  { title: "High-Quality Content", text: "We'll populate your website with SEO-friendly content (think blogs, infographics, explainer videos… anything that educates and engages), conveying your messages efficiently and providing value to your customers.", icon: FileText },
  { title: "Digital Marketing", text: "We also provide a plethora of digital marketing services to help you on an ongoing basis, such as PPC, social media, and email marketing to help you achieve your online goals.", icon: Megaphone },
];

export default function SEODigitalMarketing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <Blob className="-left-20 top-10 h-80 w-80" />
      <MorphBlob gradientFrom="#a8e6cf" gradientTo="#56ab91" className="-right-32 -top-32 h-[55vh] w-[55vw] max-h-[450px] max-w-[450px]" duration="21s" delay="-4s" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />

      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <CharReveal text="SEO Web Design & Digital Marketing" className="font-bold text-[#010914]" />
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#3ab54b] sm:text-sm">
            Reach a Wider Audience
          </p>
          <div className="mt-3 flex justify-start">
            <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-[#3ab54b] stroke-[4]">
              <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
            </svg>
          </div>
          <p className="mt-6 leading-relaxed text-[#5a6564]">
            Pretty web design and great code aren&apos;t everything! In the long term, you&apos;ll need to
            complement your web design objectives with a solid SEO strategy along with other services like social media ads.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-8 overflow-hidden" delay={0.15}>
        <div className="flex gap-6" style={{ width: 'max-content', animation: 'scrollLeft 30s linear infinite' }}>
          {[...cards, ...cards].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={`${item.title}-${i}`} className="group w-72 flex-shrink-0 md:w-96">
                <div className="h-full rounded-2xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/50">
                  <div className="flex h-full flex-col rounded-[calc(1rem-1px)] bg-white/95 p-6 backdrop-blur-sm transition group-hover:bg-white md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-md transition group-hover:shadow-lg md:h-[72px] md:w-[72px]">
                      <Icon className="h-6 w-6 md:h-9 md:w-9" strokeWidth={2} />
                    </div>
                    <h3 className="font-semibold text-[#010914]">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#5a6564]">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
