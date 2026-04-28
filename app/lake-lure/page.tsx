import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingCard from '@/components/BookingCard'

export const metadata: Metadata = {
  title: 'Lake Lure Getaway — Mountain Views & Resort Access | Wellness Getaways',
  description: 'Modern mountain luxury at Rumbling Bald Resort. Panoramic Blue Ridge views, full resort amenities (pools, spa, golf, kayaks), organic linens, Reiki-charged. Up to 8 guests.',
}

const amenities = [
  { category: 'Resort Access', items: ['Two outdoor pools & one indoor pool', 'Full-service spa', 'Golf course (18 holes)', 'Kayaks & paddleboards on Lake Lure', 'Tennis & pickleball courts', 'Fitness center', 'Clubhouse & restaurant'] },
  { category: 'Wellness', items: ['Medical-grade air purifiers', 'Organic cotton linens & towels', 'No synthetic fragrances or dyes', 'Reiki Tummo® charged & grounded', 'Crystal placements at entryways', 'No Teflon cookware'] },
  { category: 'Property', items: ['2 Bedrooms + bonus sleeping area', '2.5 Bathrooms', 'Private balcony with mountain views', 'Full kitchen', 'Smart TV + high-speed WiFi', 'In-unit washer/dryer'] },
  { category: 'Location', items: ['Lake Lure, NC', 'Rumbling Bald Resort', '10 min to Chimney Rock State Park', 'Close to Hickory Nut Falls', 'Scenic mountain drives nearby', 'Blue Ridge Parkway accessible'] },
]

const reviews = [
  { text: 'Easy check-in, very clean and comfortable. Two living rooms, a beautiful kitchen, and the resort amenities made this the perfect family getaway. We\'ll absolutely be back.', author: 'Marie', date: 'February 2025' },
  { text: 'The views from the balcony alone are worth it. We kayaked on Lake Lure every morning and came back to the cleanest, most calming space I\'ve ever stayed in. Total reset.', author: 'Daniel T.', date: 'March 2025' },
  { text: 'We brought our whole extended family and everyone was blown away. The resort access is a huge bonus — the kids lived at the pool while the adults hiked. Perfect balance.', author: 'Rachel B.', date: 'January 2025' },
]

export default function LakeLurePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/67ee7a651968d42ce95c63bd_image_165663209.webp"
          alt="Lake Lure Getaway — panoramic Blue Ridge mountain views"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />
        <div className="absolute inset-0 flex items-end pb-10 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-forest text-white text-xs font-semibold rounded-full mb-3">Lake Lure</span>
            <h1 className="font-lora text-4xl sm:text-5xl text-white font-semibold mb-2">Lake Lure Getaway</h1>
            <p className="text-white/80 text-lg">Rumbling Bald Resort · Lake Lure, NC</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-warm border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-stone-muted flex gap-2">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <span className="text-forest-dark font-medium">Lake Lure Getaway</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}
          <div className="lg:col-span-2 space-y-10">

            {/* Quick specs */}
            <div className="flex flex-wrap gap-6 pb-8 border-b border-stone-border">
              {[
                { label: 'Bedrooms', value: '2' },
                { label: 'Bathrooms', value: '2.5' },
                { label: 'Max Guests', value: '8' },
                { label: 'Resort Access', value: 'Full' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-lora text-2xl font-semibold text-forest-dark">{s.value}</div>
                  <div className="text-sm text-stone-muted">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-lora text-2xl text-forest-dark mb-4">Mountain Luxury Meets Wellness</h2>
              <div className="space-y-4 text-stone-muted leading-relaxed">
                <p>
                  Nestled within Rumbling Bald Resort on the shores of Lake Lure, this property delivers what most vacation rentals never attempt: a genuinely clean, intentionally healing space with access to world-class resort amenities.
                </p>
                <p>
                  Wake up to panoramic Blue Ridge Mountain views from your private balcony. Spend the day kayaking on Lake Lure, lounging at the pool, playing golf, or hiking to Hickory Nut Falls — all steps from your door. Come home to a space that breathes clean air, where every product was chosen to support your body rather than burden it.
                </p>
                <p>
                  With room for up to 8 guests, this is ideal for family gatherings, friend groups, or a restorative retreat. Two bedrooms plus additional sleeping space, 2.5 baths, a full kitchen, and the energy of a space that has been cleared, charged, and held with Reiki Tummo® before your arrival.
                </p>
              </div>
            </div>

            {/* Resort Highlight Banner */}
            <div className="bg-forest/5 rounded-2xl p-6 border border-forest/20">
              <h3 className="font-lora text-xl text-forest-dark mb-2">Full Rumbling Bald Resort Access Included</h3>
              <p className="text-sm text-stone-muted mb-4">Your stay includes complete access to all Rumbling Bald Resort amenities — no extra fees.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['🏊 3 Pools', '⛳ Golf Course', '🚣 Kayaks & Paddleboards', '💆 Full Spa', '🎾 Tennis Courts', '🏋️ Fitness Center'].map((item) => (
                  <div key={item} className="text-sm text-stone-muted bg-white rounded-xl px-3 py-2 border border-stone-border text-center">{item}</div>
                ))}
              </div>
            </div>

            {/* Wellness Standards */}
            <div className="bg-cream-soft rounded-2xl p-6 border border-stone-border">
              <h3 className="font-lora text-xl text-forest-dark mb-3">✨ Wellness Standards</h3>
              <p className="text-sm text-stone-muted mb-4">
                Like all Wellness Getaways properties, this home is energetically cleansed and charged with Reiki Tummo® before every guest stay. Crystals are placed at every entryway. The space is intentionally held to support healing, rest, and clarity.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {['No synthetic fragrances or dyes', 'No Teflon or PFAS cookware', 'Organic cotton linens & towels', 'Medical-grade air purifiers', 'Reiki Tummo® charged', 'No pets / no smoking'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-stone-muted">
                    <svg className="w-4 h-4 text-forest flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-lora text-2xl text-forest-dark mb-6">Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {amenities.map((cat) => (
                  <div key={cat.category}>
                    <h4 className="font-semibold text-forest mb-3 text-sm uppercase tracking-wider">{cat.category}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-stone-muted flex items-start gap-2">
                          <span className="text-sage mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="font-lora text-2xl text-forest-dark mb-6">Guest Reviews</h2>
              <div className="space-y-4">
                {reviews.map((r) => (
                  <div key={r.author} className="bg-white rounded-2xl p-5 border border-stone-border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center text-sm font-semibold">{r.author[0]}</div>
                        <div>
                          <div className="font-semibold text-sm text-forest-dark">{r.author}</div>
                          <div className="text-xs text-stone-muted">{r.date}</div>
                        </div>
                      </div>
                      <div className="text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <p className="text-sm text-stone-muted leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pb-4">
              <h2 className="font-lora text-2xl text-forest-dark mb-4">Location</h2>
              <p className="text-stone-muted leading-relaxed">
                Rumbling Bald Resort, Lake Lure, NC — nestled in the Blue Ridge Mountains, 10 minutes from Chimney Rock State Park and Hickory Nut Falls. The resort sits directly on Lake Lure, made famous by the film Dirty Dancing. Easy drives to Asheville (45 min) and Charlotte (90 min).
              </p>
            </div>
          </div>

          {/* Right: Booking */}
          <div>
            <BookingCard
              price="$169"
              beds="2"
              baths="2.5"
              guests="8"
              highlights={['Mountain Views', 'Resort Access', 'Private Balcony', 'Sleeps 8', 'Low-Tox']}
            />
          </div>
        </div>
      </div>

      <div className="bg-cream-soft border-t border-stone-border py-10 text-center">
        <Link href="/#properties" className="text-forest font-semibold hover:text-forest-dark transition-colors">
          ← View All Properties
        </Link>
      </div>
    </>
  )
}
