import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Reiki Tummo® is Transformative | Wellness Getaways Blog',
  description: 'A unique blend of Divine and Kundalini energy, Reiki Tummo® promotes healing, balance, and spiritual growth. Learn how it calms the mind, restores well-being, and opens the heart.',
}

const benefits = [
  'Greater grounding and mental clarity',
  'Improved sleep and mood',
  'Relief for physical and emotional stress',
  'Boosted immune system and energy levels',
  'Faster recovery and overall well-being',
  'Relaxation of mind and body',
  'Reduced worries and anxiety',
  'Cleansing of energy channels and chakras',
  'Rapid acceleration of spiritual growth',
  'A deeper connection to the heart and True Source',
]

export default function ReikiTummoPost() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="/reiki-transformative-hero.jpg"
          alt="Reiki healing session — hands-on energy work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-10 px-4">
          <div className="max-w-3xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-3">Reiki &amp; Healing</span>
            <h1 className="font-lora text-4xl sm:text-5xl text-white font-semibold leading-tight">
              Why Reiki Tummo® is Transformative
            </h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-warm border-b border-stone-border">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <nav className="text-sm text-stone-muted flex gap-2 flex-wrap">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-forest-dark font-medium">Why Reiki Tummo® is Transformative</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-stone-muted text-sm mb-6">July 1, 2025 · 4 min read</p>

          <p className="text-lg text-stone-muted leading-relaxed mb-10 font-medium">
            A unique blend of Divine and Kundalini energy, Reiki Tummo® promotes healing, balance, and spiritual growth. Learn how it helps calm the mind, restore well-being, and open the heart to deeper connection.
          </p>

          {/* Section 1 */}
          <h2 className="font-lora text-2xl text-forest-dark mb-4">
            The Harmony of Divine Energy and Kundalini for Healing &amp; Spiritual Growth
          </h2>

          <p className="text-stone-muted leading-relaxed mb-5">
            For more than 20 years, over 20,000 people worldwide have experienced the safe, gentle awakening of Kundalini energy and the deeply restorative healing of Reiki Tummo®.
          </p>

          <p className="text-stone-muted leading-relaxed mb-5">
            What makes Reiki Tummo® unique is its synergy of two powerful forces: Divine Energy (Reiki) flowing from above and Kundalini Energy (Tummo) rising from below. Together, they cleanse emotional and energetic blockages, quiet the mind, and open the heart to greater peace, joy, and spiritual connection.
          </p>

          <p className="text-stone-muted leading-relaxed mb-5">
            This practice also opens the spiritual heart, chakras, and main energy channels, ensuring a smooth, safe, and uplifting Kundalini awakening experience.
          </p>

          <p className="text-stone-muted leading-relaxed mb-10">
            While Reiki Tummo® allows you to channel energy instantly for yourself and others — across time and distance — its true gift lies in opening the Spiritual Heart. This connection is the key to experiencing your true self and deepening your relationship with the Creator, the True Source.
          </p>

          {/* Section 2 */}
          <h2 className="font-lora text-2xl text-forest-dark mb-4">
            The True Goal of Reiki Tummo®
          </h2>

          <p className="text-stone-muted leading-relaxed mb-10">
            The purpose isn&apos;t about gaining powers, mantras, or techniques. It&apos;s about transforming everyday life — living with more clarity, peace, and joy — while strengthening your connection to True Source through an open heart.
          </p>

          {/* Benefits */}
          <h2 className="font-lora text-2xl text-forest-dark mb-6">
            Reported Benefits from Participants
          </h2>

          <div className="bg-forest/5 rounded-2xl p-7 border border-forest/15 mb-10">
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-stone-muted">
                  <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="font-lora text-2xl text-forest-dark mb-4">
            Who Can Benefit
          </h2>

          <p className="text-stone-muted leading-relaxed mb-5">
            Reiki Tummo® is universal, welcoming, and non-denominational. Anyone — from age five and up — can safely experience its benefits.
          </p>

          <p className="text-stone-muted leading-relaxed mb-10">
            Whether you&apos;re seeking inner peace, emotional healing, or deeper spiritual growth, Reiki Tummo® offers a gentle yet powerful path to well-being. It can also complement other therapies to support overall health and balance.
          </p>

          {/* CTA */}
          <div className="mt-6 bg-forest/5 rounded-2xl p-8 border border-forest/20">
            <h2 className="font-lora text-2xl text-forest-dark mb-3">Ready to Experience Reiki Tummo® for Yourself?</h2>
            <p className="text-stone-muted leading-relaxed mb-6">
              At Wellness Getaways, every property is intentionally infused with Reiki Tummo® energy. This creates an environment filled with positive vibrations, helping you feel grounded, peaceful, and supported the moment you arrive. It&apos;s more than just a stay — it&apos;s a healing space designed to nurture your body, mind, and spirit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/reiki" className="inline-flex items-center px-6 py-3 rounded-full bg-forest text-white font-semibold hover:bg-forest-dark transition-colors duration-200">
                Book a Session →
              </Link>
              <Link href="/#properties" className="inline-flex items-center px-6 py-3 rounded-full border border-forest text-forest font-semibold hover:bg-forest/5 transition-colors duration-200">
                Explore Properties
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-stone-border">
            <Link href="/blog" className="text-forest font-semibold hover:text-forest-dark transition-colors">
              ← Back to Blog
            </Link>
          </div>

        </div>
      </article>
    </>
  )
}
