'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import Blob from './Blob';
import MorphBlob from './MorphBlob';
import AnimatedSection from './AnimatedSection';
import CharReveal from './CharReveal';

export default function Consultation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  return (
    <section id="contact" className="relative bg-gradient-to-b from-white to-slate-50 px-6 py-16 md:py-24">
      <Blob className="-right-20 top-10 h-80 w-80" />
      <MorphBlob gradientFrom="#d4edda" gradientTo="#a8e6cf" className="-left-28 -bottom-28 h-[55vh] w-[55vw] max-h-[450px] max-w-[450px]" duration="23s" delay="-5s" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />

      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mx-auto max-w-4xl">
          <CharReveal text="Get Your Free Consultation" className="font-bold text-[#010914]" />
          <div className="mt-4 flex items-start gap-4">
            <svg width="87" height="10" viewBox="0 0 87 10" className="mt-1.5 flex-shrink-0 fill-none stroke-teal-400 stroke-[4]">
              <path d="M0 2c7 0 7 6 14 6 8 0 8-6 15-6s7 6 15 6c7 0 7-6 14-6s7 6 14 6c8 0 8-6 15-6" />
            </svg>
            <h3 className="font-semibold text-[#272727]">
              User-centred web design is now more vital than ever. Our UX-focused, accessible and
              data-backed web design can bring you consistent streams of high-value leads.
            </h3>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12" delay={0.15}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;

              const requiredMissing = [];
              if (!firstName.trim()) requiredMissing.push('First Name');
              if (!lastName.trim()) requiredMissing.push('Last Name');
              if (!email.trim()) requiredMissing.push('Email');
              if (!phone.trim()) requiredMissing.push('Phone');
              if (!message.trim()) requiredMissing.push('Project details');

              if (requiredMissing.length) {
                setStatus({
                  type: 'error',
                  message: `Please provide: ${requiredMissing.join(', ')}`,
                });
                return;
              }

              setSubmitting(true);
              setStatus(null);

              try {
                const res = await fetch('/api/consultation-submit', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phone,
                    website: website.trim(),
                    message,
                    newsletterOptIn,
                  }),
                });

                const data = await res.json().catch(() => null);

                if (!res.ok) {
                  setStatus({
                    type: 'error',
                    message:
                      data?.error === 'Missing or invalid fields'
                        ? 'Some required fields are missing or invalid.'
                        : 'Something went wrong. Please try again.',
                  });
                  return;
                }

                setStatus({
                  type: 'success',
                  message:
                    'Details submitted successfully, We will connect shortly withn 24 hours. thanks for connecting',
                });

                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setWebsite('');
                setMessage('');
                setNewsletterOptIn(false);
              } catch {
                setStatus({ type: 'error', message: 'Network error. Please try again.' });
              } finally {
                setSubmitting(false);
              }
            }}
            className="rounded-2xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] shadow-lg"
          >
            <div className="grid gap-5 rounded-[calc(1rem-1px)] bg-white/95 p-6 backdrop-blur-sm md:grid-cols-2 md:p-10">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                First Name <span className="text-[#3ab54b]">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-emerald-200"
                autoComplete="given-name"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Last Name <span className="text-[#3ab54b]">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200"
                autoComplete="family-name"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email <span className="text-[#3ab54b]">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Phone <span className="text-[#3ab54b]">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200"
                autoComplete="tel"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Website
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200"
                autoComplete="url"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Tell us more about your project or campaign <span className="text-[#3ab54b]">*</span>
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#3ab54b] focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-[#3ab54b]"
                />
                Join our quarterly newsletter
              </label>
            </div>

            {status && (
              <div
                className={
                  'md:col-span-2 rounded-xl border px-4 py-3 text-sm ' +
                  (status.type === 'success'
                    ? 'border-green-200 bg-green-50 text-green-800'
                    : 'border-red-200 bg-red-50 text-red-800')
                }
              >
                {status.message}
              </div>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                onClick={() => {
                  // Ensures the form is visible even if user triggered submission via CTA
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="btn inline-flex items-center gap-2 rounded-xl bg-[#3ab54b] px-7 py-3.5 text-white shadow-md transition hover:bg-[#2d8a3b] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Saving...' : 'Schedule a Call'}
              </button>
              <p className="mt-4 text-xs text-slate-400">
                By submitting this form you agree to our{' '}
                <a href="/privacy-policy/" className="text-[#3ab54b] underline">privacy policy</a>.
              </p>
            </div>
            </div>
          </form>


          <div className="flex flex-col gap-6">
            {[
              { num: "1", title: "Lay The Foundations", text: "Defining your ideal customers and identifying your target audience allows us to construct user journeys that are expertly crafted for the people who are most valuable to your business." },
              { num: "2", title: "Multi Platform Performance", text: "We'll help you to look beyond the visuals to understand the true power of high-performance responsive web design, and see what it could mean for your business." },
              { num: "3", title: "User Centred Strategy", text: "We'll keep the focus on your refined buyer persona, maximising their positive experience. Our optimisations will engage your ideal customer and keep them coming back for more." },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl bg-gradient-to-br from-emerald-400/80 via-teal-300/80 to-emerald-500/80 p-[1px] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/50">
                <div className="flex gap-4 rounded-[calc(1rem-1px)] bg-white/95 p-5 backdrop-blur-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 font-bold text-white shadow-md">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#272727]">{item.title}</h4>
                    <p className="mt-1 leading-relaxed text-[#5a6564]">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
