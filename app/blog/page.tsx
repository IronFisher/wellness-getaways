import Link from 'next/link'

const posts = [
  {
    title: 'Why Reiki Tummo® is Transformative',
    href: '/blog/why-reiki-tummo-is-transformative',
    excerpt: 'A gentle yet powerful path to healing, balance, and spiritual growth.',
    status: 'Published',
  },
  {
    title: '7 Unforgettable Experiences to Awaken Your Senses in Asheville',
    href: '/blog/7-unforgettable-experiences-asheville',
    excerpt: 'A local guide to the best sensory-rich experiences in Asheville.',
    status: 'Published',
  },
  {
    title: 'More Wellness Stories Coming Soon',
    href: '/blog/coming-soon',
    excerpt: 'The rest of the content roadmap so the page feels real and expansive.',
    status: 'Preview',
  },
]

export default function BlogIndex() {
  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.title} className="bg-white rounded-2xl p-6 border border-stone-border">
            <p className="text-xs uppercase tracking-wide text-forest mb-3">{post.status}</p>
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-stone-600 mb-5">{post.excerpt}</p>
            <Link href={post.href} className="text-forest font-semibold">Read more →</Link>
          </article>
        ))}
      </div>
    </div>
  )
}
