'use client';

import useCarousel from './useCarousel';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

const reviews = [
  {
    name: "Clutch",
    role: "Digital Agency",
    text: "Greenbits has been recognized as a top-performing digital agency, delivering outstanding web design and development services that drive real business results.",
    rating: 5,
  },
  {
    name: "Google Reviews",
    role: "Verified Client",
    text: "Excellent web design agency! They transformed our outdated website into a modern, responsive, and conversion-focused platform. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Trustpilot",
    role: "Verified Client",
    text: "Professional team with great attention to detail. Our new website has significantly improved our lead generation and overall online presence.",
    rating: 5,
  },
  {
    name: "DesignRush",
    role: "Agency Ranking",
    text: "Ranked among the top web design agencies for their innovative approach, technical expertise, and commitment to delivering exceptional user experiences.",
    rating: 5,
  },
];

export default function ReviewCarousel() {
  const { idx, next, prev, setIdx } = useCarousel(reviews);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3ab54b] via-[#45c65a] to-[#2d8a3b] py-16 md:py-24">
      <MorphBlob gradientFrom="#a8e6cf" gradientTo="#dcedc1" className="-right-32 -top-32 h-[55vh] w-[55vw] max-h-[450px] max-w-[450px]" duration="20s" delay="-2s" opacity={0.15} />
      <MorphBlob gradientFrom="#a8e6cf" gradientTo="#88d8b0" className="-left-32 -bottom-32 h-[45vh] w-[45vw] max-h-[350px] max-w-[350px]" duration="24s" delay="-8s" opacity={0.15} />
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <CharReveal text="What Our Clients Say" className="text-center text-white sm:text-center" />
        <div className="mx-auto mt-4 flex justify-center">
          <svg width="87" height="10" viewBox="0 0 87 10" className="fill-none stroke-white/60 stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
        </div>
          <div className="relative mx-auto mt-10 max-w-3xl">
            <div className="overflow-hidden rounded-3xl bg-white/10 p-8 text-center shadow-2xl shadow-emerald-900/20 backdrop-blur-xl md:p-12 ring-1 ring-white/20">
            <div className="flex justify-center gap-1">
              {Array.from({ length: reviews[idx].rating }).map((_, i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-white/90">
              &ldquo;{reviews[idx].text}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold text-white">{reviews[idx].name}</p>
              <p className="text-sm text-white/70">{reviews[idx].role}</p>
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-[#3ab54b] shadow-md hover:bg-green-50"
            aria-label="Previous review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-[#3ab54b] shadow-md hover:bg-green-50"
            aria-label="Next review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === idx ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
