'use client';

import Blob from './Blob';
import MorphBlob from './MorphBlob';

export default function Consultation() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Blob className="-right-20 top-10 h-80 w-80" />
      <MorphBlob gradientFrom="#d4edda" gradientTo="#a8e6cf" className="-left-28 -bottom-28 h-[55vh] w-[55vw] max-h-[450px] max-w-[450px]" duration="23s" delay="-5s" />

      <div className="mx-auto max-w-4xl">
        <h2 className="font-bold text-[#010914]">
          Get Your Free Consultation
        </h2>
        <div className="mt-4 flex items-start gap-4">
          <svg width="87" height="10" viewBox="0 0 87 10" className="mt-1.5 flex-shrink-0 fill-none stroke-teal-400 stroke-[4]">
            <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
          </svg>
          <h3 className="font-semibold text-[#272727]">
            User-centred web design is now more vital than ever. Our UX-focused, accessible and
            data-backed web design can bring you consistent streams of high-value leads.
          </h3>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { num: "1", title: "Lay The Foundations", text: "Defining your ideal customers and identifying your target audience allows us to construct user journeys that are expertly crafted for the people who are most valuable to your business." },
            { num: "2", title: "Multi Platform Performance", text: "We'll help you to look beyond the visuals to understand the true power of high-performance responsive web design, and see what it could mean for your business." },
            { num: "3", title: "User Centred Strategy", text: "We'll keep the focus on your refined buyer persona, maximising their positive experience. Our optimisations will engage your ideal customer and keep them coming back for more." },
          ].map((item) => (
            <div key={item.num} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="step-number flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-bold text-[#2d8a3b]">
                {item.num}
              </span>
              <h4 className="mt-3 font-semibold text-[#272727]">{item.title}</h4>
              <p className="mt-2 leading-relaxed text-[#5a6564]">{item.text}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-2 md:p-10"
        >
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              First Name <span className="text-[#3ab54b]">*</span>
            </label>
            <input type="text" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Last Name <span className="text-[#3ab54b]">*</span>
            </label>
            <input type="text" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Email <span className="text-[#3ab54b]">*</span>
            </label>
            <input type="email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Phone <span className="text-[#3ab54b]">*</span>
            </label>
            <input type="tel" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Website
            </label>
            <input type="text" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Tell us more about your project or campaign <span className="text-[#3ab54b]">*</span>
            </label>
            <textarea rows={4} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200" />
          </div>
          <div className="md:col-span-2">
            <label className="flex items-center gap-3 text-sm text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#3ab54b]" />
              Join our quarterly newsletter
            </label>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="btn inline-flex items-center gap-2 rounded-xl bg-[#3ab54b] px-7 py-3.5 text-white shadow-md transition hover:bg-[#2d8a3b] hover:shadow-lg">
              Schedule a Call
            </button>
            <p className="mt-4 text-xs text-slate-400">
              By submitting this form you agree to our{' '}
              <a href="/privacy-policy/" className="text-[#3ab54b] underline">privacy policy</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
