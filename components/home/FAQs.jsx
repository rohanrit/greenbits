'use client';

import Blob from './Blob';
import MorphBlob from './MorphBlob';
import Accordion from './Accordion';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

export default function FAQs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <Blob className="-left-20 top-10 h-72 w-72" />
      <MorphBlob gradientFrom="#dcedc1" gradientTo="#88d8b0" className="-right-28 -bottom-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]" duration="21s" delay="-4s" opacity={0.35} />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />
      <AnimatedSection className="relative z-20 mx-auto max-w-4xl px-6">
        <CharReveal text="Web Design FAQs" className="font-bold text-[#010914]" />
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
              { q: "What is WebMCP and how will it change web development?", a: "WebMCP (Web Model Context Protocol) is a proposed open web standard from Google that allows websites to expose structured tools — like JavaScript functions and HTML forms — so browser-based AI agents can execute complex tasks directly instead of screen-scraping. Entering origin trial in Chrome 149, it marks a shift toward the 'agentic web' where AI agents act as first-class users of the internet." },
              { q: "What are Core Web Vitals and why do they matter for SEO?", a: "Core Web Vitals are a set of real-world metrics Google uses to measure user experience, including Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Starting in 2026, Google uses them as direct ranking signals, making performance optimization essential for search visibility." },
              { q: "What is the difference between SSR, SSG, and ISR?", a: "Server-Side Rendering (SSR) generates pages dynamically on each request, ideal for personalized content. Static Site Generation (SSG) pre-builds pages at compile time for blazing-fast delivery. Incremental Static Regeneration (ISR) combines both — it serves pre-built static pages while regenerating updated versions in the background when content changes." },
              { q: "What is edge computing in web development?", a: "Edge computing runs server-side code at CDN edge locations closest to the user, drastically reducing latency. Platforms like Vercel Edge Functions, Cloudflare Workers, and Netlify Edge let developers deploy logic globally without managing infrastructure, enabling personalized experiences with near-zero cold starts." },
            ]}
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
