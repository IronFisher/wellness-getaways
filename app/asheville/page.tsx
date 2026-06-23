import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingCard from '@/components/BookingCard'

export const metadata: Metadata = {
  title: 'Asheville Getaway — Low-Tox Green-Certified Cabin | Wellness Getaways',
  description: 'NC Green Built certified home minutes from downtown Asheville. Private hot tub, dual en-suite bedrooms, medical-grade air purifiers, organic linens, and Reiki Tummo® charged.',
}

const images = [
  { src: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/67ee6e14934bf68688415728_image_163230112.webp', alt: 'Asheville Getaway exterior' },
]

const amenities = [
  { category: 'Wellness', items: ['Medical-grade air purifiers (one per floor)', 'Organic cotton linens & towels', 'No synthetic fragrances or dyes', 'No Teflon cookware', 'Reiki Tummo® charged & grounded', 'Crystal placements at entryways'] },
  { category: 'Comfort', items: ['Private hot tub', 'Electric fireplace', 'Dual en-suite bedrooms', 'Full gourmet kitchen', 'Smart TV + high-speed WiFi', 'In-unit washer/dryer'] },
  { category: 'Location', items: ['Minutes to downtown Asheville', 'Close to Blue Ridge Parkway', 'Cedar Cliff Village neighborhood', 'NC Green Built certified', 'Quiet residential setting', 'Mountain views'] },
]

const reviews = [
  { text: "A beautiful comfortable home nestled between Asheville and Black Mountain. Loved getting together with family and spending time in the mountains.", author: 'Deanna', date: 'Verified Yonder guest · July 2025' },
  { text: "Great location to Asheville and Black Mountain. Lots of hiking nearby. House was very clean. Exactly as pictured. Would recommend.", author: 'Christine', date: 'Verified Yonder guest · August 2024' },
  { text: "This property was very clean. The location was great. We visited the Biltmore and ate downtown Asheville and everything was only 15 minutes and less away.", author: 'Diana', date: 'Verified Yonder guest · May 2024' },
  { text: "This quaint little property was perfectly removed from the busyness of Asheville. The house was beautifully decorated and had everything we needed for our weekend away. We had a great time with our 1 year old. Would definitely come again!", author: 'Christopher', date: 'Verified Yonder guest · June 2023' },
  { text: "Location is really good. Neighborhood is very safe. Rental is very clean. Rooms get a little warm if you dont keep the doors open.", author: 'Tom', date: 'Verified Yonder guest · May 2024' },
]

export default function AshevillePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />
        <div className="absolute inset-0 flex items-end pb-10 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-forest text-white text-xs font-semibold rounded-full mb-3">Asheville</span>
            <h1 className="font-lora text-4xl sm:text-5xl text-white font-semibold mb-2">Asheville Getaway</h1>
            <p className="text-white/80 text-lg">Cedar Cliff Village · NC Green Built Certified</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-10">

            {/* Quick specs */}
            <div className="flex flex-wrap gap-6 pb-8 border-b border-stone-border">
              {[
                { label: 'Bedrooms', value: '2' },
                { label: 'Bathrooms', value: '2' },
                { label: 'Max Guests', value: '4' },
                { label: 'Certification', value: 'NC Green Built' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-lora text-2xl font-semibold text-forest-dark">{s.value}</div>
                  <div className="text-sm text-stone-muted">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-lora text-2xl text-forest-dark mb-4">About This Property</h2>
              <div className="space-y-4 text-stone-muted leading-relaxed">
                <p>
                  Newly constructed and NC Green Built certified, this Asheville cabin is one of the cleanest vacation rentals in Western North Carolina. Located in quiet Cedar Cliff Village, it sits minutes from downtown Asheville and the Blue Ridge Parkway — giving you the best of mountain wilderness and vibrant arts culture.
                </p>
                <p>
                  Both bedrooms are fully en-suite with private baths — perfect for couples traveling together or a family that values individual space. A private hot tub on the back deck and a cozy electric fireplace in the living room complete the setting.
                </p>
                <p>
                  Soaps, detergents, and cleaning products throughout the home are dye-free and fragrance-free — the same conservative standard we hold across every Wellness Getaways property. Medical-grade air purifiers run continuously (one per floor). The cookware is free of Teflon and PFAS. Linens are organic cotton. This is what a truly clean stay feels like.
                </p>
              </div>
            </div>

            {/* Wellness Standards */}
            <div className="bg-cream-soft rounded-2xl p-6 border border-stone-border">
              <h3 className="font-lora text-xl text-forest-dark mb-3">✨ Wellness Standards</h3>
              <p className="text-sm text-stone-muted mb-4">
                This property has been energetically cleansed and charged with Reiki Tummo® before every guest stay. Crystals are placed at the entryways and in each room. The space is intentionally programmed to support healing, rest, and clarity.
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
              <div className="grid sm:grid-cols-3 gap-6">
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

            {/* Location */}
            <div className="pb-4">
              <h2 className="font-lora text-2xl text-forest-dark mb-4">Location</h2>
              <p className="text-stone-muted leading-relaxed">
                Cedar Cliff Village, Asheville, NC — minutes to the Blue Ridge Parkway, Biltmore Estate, and downtown Asheville&apos;s restaurants, galleries, and breweries. A quiet residential neighborhood with easy access to hiking trails and mountain views.
              </p>
            </div>
          </div>

          {/* Right: Booking */}
          <div>
            <BookingCard
              price="$189"
              beds="2"
              baths="2"
              guests="4"
              highlights={['Hot Tub', 'Electric Fireplace', 'NC Green Built', 'Dual En-Suite', 'Low-Tox']}
              bookingUrl="https://www.yondervacationrentals.com/vacation-rentals/rental/asheville-getaway/?utm_source=thewellnessgetaways&utm_medium=referral"
            />
          </div>
        </div>
      </div>

      {/* Back CTA */}
      <div className="bg-cream-soft border-t border-stone-border py-10 text-center">
        <Link href="/#properties" className="text-forest font-semibold hover:text-forest-dark transition-colors">
          ← View All Properties
        </Link>
      </div>
    </>
  )
}
