"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Blob from "./Blob";
import MorphBlob from "./MorphBlob";
import AnimatedSection from "./AnimatedSection";
import CharReveal from "./CharReveal";

const steps = [
  {
    num: "1.0",
    id: "step-1.0",
    title: "Audit & Objectives",
    text: "We'll scour market reports and analytics to uncover the current state of your website and identify areas of potential improvement that a rebuild or redesign could solve.",
  },
  {
    num: "2.0",
    id: "step-2.0",
    title: "Competitor Analysis",
    text: "We'll scout out how your competitors are solving similar problems to yours. By taking a look at what your competitors' websites look like, we can get a better picture of what works – and also what doesn't.",
  },
  {
    num: "3.0",
    id: "step-3.0",
    title: "User Feedback",
    text: "Your customers are the ultimate judges. We'll speak to your customers and customer service team to gain further insight into how your site is performing.",
  },
  {
    num: "4.0",
    id: "step-4.0",
    title: "User Personas",
    text: "Don't design for everyone: design for someone specific. Having taken the time to thoroughly understand the audiences that you want to market your business to, we'll define and create identities for the user groups that you want to target.",
  },
  {
    num: "5.0",
    id: "step-5.0",
    title: "Technical Scoping",
    text: "Armed with all of this information, we'll fully scope out your web design project – regardless of whether it's reliant on bespoke software or using an existing open-source CMS/eCommerce platform.",
  },
  {
    num: "6.0",
    id: "step-6.0",
    title: "Information Architecture",
    text: "Think of IA as the organisation of your website's content. We'll create the optimal website architecture that will allow your pages to be crawled properly.",
  },
  {
    num: "7.0",
    id: "step-7.0",
    title: "User Flows",
    text: "We'll map out user flows based on scenarios that we develop using real-life data. This lets us review the full customer journey, identify potential roadblocks and optimise the conversion process.",
  },
  {
    num: "8.0",
    id: "step-8.0",
    title: "Wireframes & UX Web Design",
    text: "Creating a UX-focused visual design is the final step of our process. We will ensure your designs cover all aspects of content and user requirements, designing each page structure based on all the data that's been collated.",
  },
];

export default function WebDesignProcess() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <Blob className="-left-20 bottom-0 h-72 w-72" />
      <MorphBlob
        gradientFrom="#56ab91"
        gradientTo="#88d8b0"
        className="-right-28 -top-28 h-[50vh] w-[50vw] max-h-[400px] max-w-[400px]"
        duration="20s"
        delay="-7s"
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />

      <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start">
        {/* Left Column (Sticky Parallax Container) */}
        <div className="lg:sticky lg:top-24 lg:col-span-2">
          <motion.div style={{ y: parallaxY }}>
            <CharReveal text="Our Web Design Process" as="h2" className="font-bold uppercase text-[#010914]" />

            <div className="mt-6 flex items-start gap-4">
              <svg
                width="87"
                height="10"
                viewBox="0 0 87 10"
                className="mt-1.5 flex-shrink-0 fill-none stroke-[#3ab54b] stroke-[4]"
              >
                <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
              </svg>
              <h3 className="font-semibold text-[#010914]">
                Research &amp; Planning
              </h3>
            </div>

            <div className="mt-4 space-y-4 leading-relaxed text-[#5a6564]">
              <p>
                Websites are supposed to encourage a conversation between you and
                your customers. When it comes to investing in the perfect website
                design to balance emotion, function and brand values, Greenbits is
                here to guide you.
              </p>
              <p>
                Providing a responsive web design that not only works but delivers
                a fully integrated service is a top priority for our team.
              </p>
              <p>Understanding your business is at the heart of how we work.</p>
              <p>
                As with all our services, we believe a robust and thorough process
                is the key to success, our design process includes:
              </p>
            </div>

            <div className="mt-6">
              <a href="#contact" className="btn inline-flex items-center gap-2 rounded-xl bg-[#3ab54b] px-6 py-3 text-white shadow-md transition hover:bg-[#2d8a3b] hover:shadow-lg">
                Speak to Our Experts
                <span aria-hidden="true" className="text-lg">
                  &rarr;
                </span>
              </a>
            </div>

            <div className="mt-8 hidden flex-wrap gap-3 lg:flex">
              {["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"].map(
                (s) => (
                  <a
                    key={s}
                    href={`#step-${s}`}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:border-[#3ab54b] hover:text-[#3ab54b]"
                  >
                    {s}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column — Stacking Cards */}
        <div className="relative mt-12 lg:col-span-3 lg:mt-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              id={step.id}
              className="sticky top-24 scroll-mt-24 mb-3"
              style={{ zIndex: steps.length - i }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="relative rounded-2xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] shadow-lg"
              >
                <div className="rounded-[calc(1rem-1px)] bg-white/95 p-6 backdrop-blur-sm md:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 font-bold text-white shadow-md">
                      {step.num.replace('.0','')}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#010914]">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-[#5a6564]">{step.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
