import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wellness Getaways — Low-Tox, Reiki-Charged Vacation Rentals in NC',
  description: 'Escape to a truly clean stay. Low-allergen, fragrance-free, Reiki-charged vacation rentals in Asheville and Lake Lure, NC. Perfect for the chemically sensitive and spiritually curious.',
}

const properties = [
  {
    name: 'Asheville Getaway',
    location: 'Asheville, NC · Cedar Cliff Village',
    badge: 'Asheville',
    specs: ['2 Beds', '2 Baths', 'Up to 4'],
    highlights: ['Hot Tub', 'Electric Fireplace', 'NC Green Built'],
    description: 'Newly constructed green-certified home minutes from downtown Asheville and the Blue Ridge Parkway. Private hot tub, dual en-suite bedrooms, full wellness amenity suite.',
    price: '$189',
    href: '/asheville',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/67ee6e14934bf68688415728_image_163230112.webp',
  },
  {
    name: 'Lake Lure Getaway',
    location: 'Lake Lure, NC · Rumbling Bald Resort',
    badge: 'Lake Lure',
    specs: ['2 Beds', '2.5 Baths', 'Up to 8'],
    highlights: ['Mountain Views', 'Resort Access', 'Private Balcony'],
    description: 'Modern mountain luxury with panoramic Blue Ridge views. Full Rumbling Bald Resort access — pools, spa, golf, kayaks, tennis, and more.',
    price: '$169',
    href: '/lake-lure',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/67ee7a651968d42ce95c63bd_image_165663209.webp',
  },
  {
    name: 'Rumbling Bald Getaway',
    location: 'Lake Lure, NC · Apple Valley Villas',
    badge: 'Lake Lure',
    specs: ['Studio', '1 Bath', 'Up to 4'],
    highlights: ['Hillside Views', 'Resort Access', 'Top Floor'],
    description: 'Private top-floor studio with hillside patio views and full resort access. Perfect for couples or a cozy nature escape near Chimney Rock.',
    price: '$109',
    href: '/rumbling-bald',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/67ee732821adada1ff16a22a_image_165673654.webp',
  },
]

const pillars = [
  { icon: '🌬️', title: 'Medical-Grade Air Quality', body: 'Medical-grade air purifiers in every room. No Teflon cookware. No synthetic fragrances or dyes in any cleaning product, soap, or detergent.' },
  { icon: '🌿', title: 'Certified Organic Linens', body: 'Organic sheets and towels only. No harsh chemical treatments, artificial softeners, or dyes that trigger sensitive skin or respiratory reactions.' },
  { icon: '✨', title: 'Reiki Tummo® Charged', body: 'Every property is energetically cleansed and charged with Reiki Tummo® — crystals at the entryways, prayers, and intentional grounding into the earth.' },
  { icon: '🔮', title: 'Connected to True Source', body: 'The space is programmed to support healing, clarity, and spiritual connection. Guests arrive in a field that actively supports their well-being.' },
  { icon: '🚫', title: 'Zero Allergen Triggers', body: 'No pets. No smoking. No synthetic perfumes. Designed for guests with MCS, allergies, autoimmune conditions, or high chemical sensitivity.' },
  { icon: '🙏', title: 'Live Reiki Sessions Available', body: 'Book a live Reiki Tummo® or open heart meditation session with your host — from anywhere in the world.' },
]

const reviews = [
  { text: '"One of the very few 5-star Airbnbs I\'ve stayed at that truly lives up to every detail. Immaculate, thoughtfully designed, and the hot tub was absolutely perfect after a day on the Parkway."', author: 'Adam', property: 'Asheville Getaway' },
  { text: '"Easy check-in, very clean and comfortable. Two living rooms, a beautiful kitchen, and the resort amenities made this the perfect family getaway. We\'ll absolutely be back."', author: 'Marie', property: 'Lake Lure Getaway' },
  { text: '"Quiet, peaceful, and exactly what I needed. Something about this place just feels different — genuinely clean, not just surface-level clean."', author: 'Allison', property: 'Rumbling Bald Getaway' },
]

const trustItems = ['Organic Linens & Towels', 'No Fragrances or Dyes', 'Medical-Grade Air Purification', 'Reiki Tummo® Charged', 'Asheville & Lake Lure, NC']

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest to-forest-light" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef23/67ee03ef8aaa8b2ff966f052_Bg-Gallery.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 mb-5">North Carolina Wellness Retreats</p>
          <h1 className="font-lora text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            Stay Clean.<br /><em>Breathe Easy.</em><br />Come Alive.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Vacation rentals curated for the chemically sensitive, spiritually curious, and anyone who deserves more than a standard stay. Low-tox, Reiki-charged, and intentionally designed — in Asheville and Lake Lure, NC.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link href="#properties" className="px-7 py-3.5 rounded-full bg-white text-forest font-semibold hover:bg-cream transition-colors duration-200 shadow-lg">
              Explore Properties
            </Link>
            <Link href="/reiki" className="px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors duration-200">
              Book a Reiki Session
            </Link>
            <Link href="/blog" className="px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors duration-200">
              Read the Blog
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {['Medical-Grade Air Purifiers', 'No Dyes or Fragrances', 'Reiki-Charged & Grounded', '5-Star Rated'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-sage-light" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className="bg-forest border-y border-forest-light/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {trustItems.map(t => (
            <span key={t} className="text-xs font-medium text-white/80 uppercase tracking-wider">{t}</span>
          ))}
        </div>
      </div>

      {/* ── Properties ── */}
      <section className="py-20 bg-cream" id="properties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest">Our Properties</span>
            <h2 className="font-lora text-4xl text-forest-dark mt-2 mb-4">Three Intentional Retreats</h2>
            <p className="text-stone-muted max-w-xl mx-auto">Each property is personally curated, energetically prepared, and held to strict low-tox standards.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {properties.map((p) => (
              <article key={p.name} className="group bg-white rounded-2xl overflow-hidden border border-stone-border shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="relative h-56 overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-forest text-white">{p.badge}</span>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-forest">★ 5.0</span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-stone-muted font-medium mb-1">{p.location}</p>
                  <h3 className="font-lora text-xl text-forest-dark mb-3">{p.name}</h3>
                  <div className="flex gap-3 mb-3 text-sm text-stone-muted">
                    {p.specs.map(s => <span key={s}>{s}</span>)}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.highlights.map(h => (
                      <span key={h} className="px-2.5 py-0.5 bg-cream-warm rounded-full text-xs text-forest font-medium">{h}</span>
                    ))}
                  </div>
                  <p className="text-sm text-stone-muted leading-relaxed line-clamp-2">{p.description}</p>
                </div>
                <div className="px-5 pb-5 flex items-center justify-between border-t border-stone-border/50 pt-4">
                  <div>
                    <span className="font-lora text-2xl font-semibold text-forest-dark">From {p.price}</span>
                    <span className="text-sm text-stone-muted">/night</span>
                  </div>
                  <Link href={p.href} className="px-4 py-2 rounded-full border border-forest text-forest text-sm font-semibold hover:bg-forest hover:text-white transition-colors duration-200">
                    View →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wellness Pillars ── */}
      <section className="py-20 bg-cream-soft" id="wellness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest">The Wellness Difference</span>
            <h2 className="font-lora text-4xl text-forest-dark mt-2 mb-4">Not Your Average Rental</h2>
            <p className="text-stone-muted max-w-xl mx-auto">Every property is held to a standard most rentals don't think about — and most guests have never experienced.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-stone-border shadow-sm">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="font-lora text-lg text-forest-dark mb-2">{p.title}</h4>
                <p className="text-sm text-stone-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest">Guest Reviews</span>
            <h2 className="font-lora text-4xl text-forest-dark mt-2">What Guests Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.author} className="bg-white rounded-2xl p-6 border border-stone-border shadow-sm">
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-stone-700 leading-relaxed mb-5 italic text-sm">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center text-sm font-semibold">{r.author[0]}</div>
                  <div>
                    <div className="font-semibold text-sm text-forest-dark">{r.author}</div>
                    <div className="text-xs text-stone-muted">{r.property}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reiki CTA ── */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-light">Add to Your Stay</span>
          <h2 className="font-lora text-4xl mt-2 mb-4">Book a Live Reiki Session</h2>
          <p className="text-white/70 text-lg mb-8">Connect with your host for a personal Reiki Tummo® or open heart meditation session — remotely or in-person during your stay.</p>
          <Link href="/reiki" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-forest font-semibold hover:bg-cream transition-colors duration-200 shadow-lg">
            Explore Reiki Sessions →
          </Link>
        </div>
      </section>
    </>
  )
}
