import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '7 Unforgettable Experiences to Awaken Your Senses in Asheville | Wellness Getaways Blog',
  description: 'Wellness Getaways by Kelly McDade offers energetically curated vacation homes in Asheville that blend healing practices with immersive local experiences to awaken your senses.',
}

const experiences = [
  {
    number: '01',
    title: 'Catch the Sunrise at Craggy Pinnacle',
    body: 'Forget filters — the colors here are unreal. This short hike leads you to one of the best sunrise spots on the Blue Ridge Parkway. Bring a blanket, a warm drink, and a friend. You\'ll remember this one.',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/686d30fa701940c904b1a092_AsheCity_Sunrays-behind-Arras_11-22-24-14-large%20(1).jpg',
    imageAlt: 'Sunrise over the Blue Ridge Parkway near Asheville, NC',
  },
  {
    number: '02',
    title: 'Float in Stillness at Shoji Spa',
    body: 'Perched above the treetops, this Japanese-style spa offers private outdoor salt tubs with mountain views. Book a soak, follow it with a massage, and emerge feeling like your whole body just exhaled.',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/686d32f54281e2e7b0e7b25d_tub-option-1-1-scaled-1.webp',
    imageAlt: 'Private outdoor salt tub at Shoji Spa with mountain views',
  },
  {
    number: '03',
    title: 'Dance with Nature at The North Carolina Arboretum',
    body: 'This isn\'t just a walk in the park. Stroll through vibrant gardens, curated art installations, and hidden nature trails. It\'s like nature is showing off just for you.',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/686d33d0ebf2eb30caad354c_Biltmore-Gardens-Conservatory.jpeg',
    imageAlt: 'Gardens and conservatory at the North Carolina Arboretum',
  },
  {
    number: '04',
    title: 'Sip Something Wild at a Craft Cidery',
    body: 'Dry Ridge, Botanist & Barrel, Noble — take your pick. These aren\'t your average sips. From lavender-infused to barrel-aged, each taste tells a story (and makes a great Instagram post, let\'s be honest).',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/686d30b308ed904ee173a5c9_Cider.webp',
    imageAlt: 'Craft cider flight at an Asheville cidery',
  },
  {
    number: '05',
    title: 'Feel the Beat in Downtown Asheville',
    body: 'Buskers, drum circles, rooftop lounges, and pop-up art shows — downtown is a sensory playground. Whether you\'re catching live music or stumbling into an open-air market, the energy here is contagious.',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/686d315b790616b25e44c4ca_chr-photo-final-48.1200x900.jpg',
    imageAlt: 'Downtown Asheville street scene with live music and art',
  },
  {
    number: '06',
    title: 'Fuel Your Soul with Forest Therapy',
    body: 'Try a guided forest bathing walk (yes, it\'s a thing!) — where slow movement, mindful breathing, and nature connection help you decompress. You\'ll leave more grounded, calm, and connected.',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/686d334ec0ca0b19b17c4637_65C4F0F7-F8F4-1467-8E4A942B55C23281.jpg',
    imageAlt: 'Forest bathing walk through the Blue Ridge Mountains',
  },
  {
    number: '07',
    title: 'Stay Somewhere That Feels Like Magic',
    body: 'Skip the cookie-cutter hotels. At Asheville Getaway, every corner is infused with intention — from toxin-free bedding to heart-centered energy work. It\'s where vibrant design meets deep rest. Perfect for post-adventure restoration.',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/67ee6e14934bf68688415728_image_163230112.webp',
    imageAlt: 'Asheville Getaway vacation rental — low-tox, Reiki-charged',
  },
]

export default function AshevilleExperiencesPost() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/685ef9882d511476b554bff0_Asheville_at_dusk_(cropped).jpg"
          alt="Asheville NC at dusk — Blue Ridge Mountains"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-10 px-4">
          <div className="max-w-3xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">Travel Guide</span>
            <h1 className="font-lora text-4xl sm:text-5xl text-white font-semibold leading-tight">
              7 Unforgettable Experiences to Awaken Your Senses in Asheville
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
            <span className="text-forest-dark font-medium">7 Unforgettable Experiences</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-stone-muted text-sm mb-6">July 8, 2025 · 5 min read · Approximately 4–5 minutes</p>

          <p className="text-lg text-stone-muted leading-relaxed mb-6 font-medium">
            Wellness Getaways by Kelly McDade offers energetically curated vacation homes in Asheville that blend healing practices with immersive local experiences to awaken your senses and restore your spirit.
          </p>

          <p className="text-stone-muted leading-relaxed mb-5">
            At the intersection of healing and home, you&apos;ll find Kelly McDade and Wellness Getaways. Kelly&apos;s handpicked vacation homes are more than beautiful places to stay — they&apos;re restorative sanctuaries, energetically prepared to help you reconnect, recharge, and truly feel alive again. Each Wellness Getaway is infused with Reiki Tummo® energy, grounded in healing practices, and designed to support your well-being from the moment you arrive.
          </p>

          <p className="text-stone-muted leading-relaxed mb-10">
            Let&apos;s be honest — when it comes to a getaway, you&apos;re not just looking to &ldquo;relax.&rdquo; You&apos;re looking to <em>feel</em>. Whether it&apos;s the thrill of a scenic overlook, the warmth of the sun on your skin, or the taste of something wildly local and delicious — Asheville is the place to dive all the way in.
          </p>

          <p className="font-semibold text-forest-dark mb-8 text-lg">Here&apos;s how to turn your Wellness Getaway into an adventure that stirs every sense:</p>

          {/* Experiences */}
          <div className="space-y-14">
            {experiences.map((exp) => (
              <div key={exp.number}>
                <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-lora text-3xl font-semibold text-forest/30 flex-shrink-0 leading-none mt-1">{exp.number}</span>
                  <div>
                    <h2 className="font-lora text-xl text-forest-dark mb-2">{exp.title}</h2>
                    <p className="text-stone-muted leading-relaxed">{exp.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-forest/5 rounded-2xl p-8 border border-forest/20">
            <h2 className="font-lora text-2xl text-forest-dark mb-3">Book Your Soul-Filling Stay</h2>
            <p className="text-stone-muted leading-relaxed mb-4">
              At Wellness Getaways, you&apos;re not just booking a trip — you&apos;re choosing to feel more alive and connected to your heart. Each property is designed to support your body, mind, and spirit: organic linens, low-tox environments, Reiki Tummo® energy in every space, and virtual healing sessions or guided meditations available.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-stone-muted mb-6">
              {['Asheville Getaway — Bold & artsy', 'Lake Lure Getaway — Serene & scenic', 'Rumbling Bald Getaway — Cozy & nature-wrapped'].map(p => (
                <span key={p} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-forest" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  {p}
                </span>
              ))}
            </div>
            <Link href="/#properties" className="inline-flex items-center px-6 py-3 rounded-full bg-forest text-white font-semibold hover:bg-forest-dark transition-colors duration-200">
              Explore Properties →
            </Link>
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
