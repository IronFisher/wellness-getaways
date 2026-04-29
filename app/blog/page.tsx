import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Wellness Travel, Low-Tox Living & Reiki | Wellness Getaways',
  description: 'Guides, tips, and stories about low-tox travel, chemical sensitivity, Reiki Tummo® healing, and wellness retreats in the Blue Ridge Mountains of North Carolina.',
}

const featured = {
  href: '/blog/why-reiki-tummo-is-transformative',
  category: 'Reiki & Healing',
  title: 'Why Reiki Tummo® is Transformative',
  excerpt: 'A unique blend of Divine and Kundalini energy, Reiki Tummo® promotes healing, balance, and spiritual growth — and every Wellness Getaways property is intentionally infused with it.',
  date: 'July 1, 2025',
  readTime: '4 min read',
  image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef23/67ee03ef8aaa8b2ff966f052_Bg-Gallery.jpg',
}

const posts = [
  {
    href: '/blog/7-unforgettable-experiences-asheville',
    category: 'Travel Guide',
    title: '7 Unforgettable Experiences to Awaken Your Senses in Asheville',
    excerpt: 'A local guide to the best sensory-rich experiences in Asheville — from sunrise hikes to forest bathing to craft cideries.',
    date: 'July 8, 2025',
    readTime: '5 min read',
    image: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef93/685ef9882d511476b554bff0_Asheville_at_dusk_(cropped).jpg',
  },
  {
    href: '#',
    category: 'Low-Tox Living',
    title: 'Why Most Vacation Rentals Make Chemically Sensitive Guests Sick (And What We Do Differently)',
    excerpt: 'Most rentals are loaded with synthetic fragrances, chemical cleaning products, and off-gassing materials. Here\'s the full list of what we eliminated — and what we replaced it with.',
    date: 'Coming soon',
    readTime: '6 min read',
    image: null,
  },
  {
    href: '#',
    category: 'Reiki & Healing',
    title: 'What It Actually Feels Like to Stay in a Reiki-Charged Space',
    excerpt: 'Guests describe it as "a different quality of air," "the best sleep of my life," and "something I can\'t explain but definitely felt." Here\'s what\'s actually happening energetically.',
    date: 'Coming soon',
    readTime: '5 min read',
    image: null,
  },
  {
    href: '#',
    category: 'Travel Guide',
    title: 'The Best Wellness Hikes Near Asheville, NC',
    excerpt: 'From the Black Balsam Knob to the Art Loeb Trail, these are the hikes worth doing when you\'re staying near downtown Asheville — ranked by scenery, difficulty, and how good you\'ll feel after.',
    date: 'Coming soon',
    readTime: '7 min read',
    image: null,
  },
  {
    href: '#',
    category: 'Reiki & Healing',
    title: 'Reiki Tummo® vs Traditional Reiki: What\'s the Difference?',
    excerpt: 'Both are energy healing modalities, but Reiki Tummo® operates from a fundamentally different source. Here\'s a plain-language breakdown of how they differ — and why it matters for your healing.',
    date: 'Coming soon',
    readTime: '8 min read',
    image: null,
  },
  {
    href: '#',
    category: 'Travel Guide',
    title: 'Planning a Wellness Weekend at Lake Lure: The Full Itinerary',
    excerpt: 'Kayaking at sunrise, a Reiki session before lunch, Chimney Rock in the afternoon, and a hot springs soak in the evening. Here\'s a perfect two-day wellness itinerary at Rumbling Bald Resort.',
    date: 'Coming soon',
    readTime: '9 min read',
    image: null,
  },
]

const categoryColors: Record<string, string> = {
  'Low-Tox Living': 'bg-green-50 text-green-700',
  'Reiki & Healing': 'bg-purple-50 text-purple-700',
  'Travel Guide': 'bg-blue-50 text-blue-700',
}

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-14 bg-forest-dark border-b border-forest">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-light">The Wellness Getaways Blog</span>
          <h1 className="font-lora text-5xl text-white mt-3 mb-4">Low-Tox Travel &amp; Healing</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Guides, stories, and honest advice on chemical sensitivity, energy healing, and finding truly restorative places to stay.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">

        {/* Featured post */}
        <div className="mb-14">
          <div className="bg-white rounded-2xl border border-stone-border shadow-sm overflow-hidden md:grid md:grid-cols-5">
            <div className="md:col-span-2 relative h-56 md:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="md:col-span-3 p-8">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[featured.category]}`}>
                {featured.category}
              </span>
              <h2 className="font-lora text-2xl text-forest-dark mb-3 leading-snug">{featured.title}</h2>
              <p className="text-stone-muted text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-muted">{featured.date} · {featured.readTime}</span>
                <Link href={featured.href} className="text-sm font-semibold text-forest hover:text-forest-dark transition-colors">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-2xl border border-stone-border shadow-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200">
              <div className="relative h-36">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cream-warm to-cream-soft flex items-center justify-center">
                    <span className="text-forest/20 font-lora text-6xl select-none">✦</span>
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 w-fit ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <h3 className="font-lora text-lg text-forest-dark mb-2 leading-snug flex-1">{post.title}</h3>
                <p className="text-stone-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-border/60">
                  <span className="text-xs text-stone-muted">{post.date} · {post.readTime}</span>
                  <Link href={post.href} className="text-xs font-semibold text-forest hover:text-forest-dark transition-colors">
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-lora text-3xl mb-3">Get New Posts in Your Inbox</h2>
          <p className="text-white/70 mb-8">Low-tox travel tips, healing practices, and new property updates — no spam, ever.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 text-sm"
            />
            <button className="px-6 py-3 rounded-full bg-white text-forest font-semibold text-sm hover:bg-cream transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
