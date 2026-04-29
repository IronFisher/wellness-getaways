'use client'

import { useState } from 'react'
import Link from 'next/link'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('https://formspree.io/f/xovdkqwb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', interest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-14 bg-forest-dark border-b border-forest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-light">Get in Touch</span>
          <h1 className="font-lora text-5xl text-white mt-3 mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Questions about a property, a Reiki session, or just want to say hello — Kelly will get back to you personally.
          </p>
        </div>
      </section>

      {/* Form */}
      <div className="bg-cream py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">

          {status === 'success' ? (
            <div className="bg-white rounded-2xl border border-stone-border shadow-sm p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-lora text-2xl text-forest-dark mb-2">Message Sent</h2>
              <p className="text-stone-muted mb-6">Kelly will be in touch with you shortly. Thank you for reaching out.</p>
              <Link href="/" className="inline-flex items-center px-6 py-3 rounded-full bg-forest text-white font-semibold hover:bg-forest-dark transition-colors duration-200">
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-stone-border shadow-sm p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-forest-dark mb-1.5" htmlFor="name">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-border bg-cream-warm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-forest-dark mb-1.5" htmlFor="email">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-border bg-cream-warm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-forest-dark mb-1.5" htmlFor="phone">
                      Phone <span className="text-stone-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-stone-border bg-cream-warm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-forest-dark mb-1.5" htmlFor="interest">
                      I&apos;m interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-border bg-cream-warm text-stone-800 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition text-sm"
                    >
                      <option value="">Select a property or topic</option>
                      <option value="Asheville Getaway">Asheville Getaway</option>
                      <option value="Lake Lure Getaway">Lake Lure Getaway</option>
                      <option value="Rumbling Bald Getaway">Rumbling Bald Getaway</option>
                      <option value="Reiki Session">Reiki Session</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest-dark mb-1.5" htmlFor="message">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for or any questions you have..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-border bg-cream-warm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or email us directly at{' '}
                    <a href="mailto:info@thewellnessgetaways.com" className="underline">info@thewellnessgetaways.com</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-full bg-forest text-white font-semibold text-sm hover:bg-forest-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-xs text-stone-muted text-center">
                  Kelly responds personally — usually within 24 hours.
                </p>

              </form>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-stone-muted">
            Prefer email?{' '}
            <a href="mailto:info@thewellnessgetaways.com" className="text-forest font-semibold hover:text-forest-dark transition-colors">
              info@thewellnessgetaways.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
