import Image from 'next/image'

export default function AshevilleBlog() {
  return (
    <article className="pt-28 pb-20 max-w-4xl mx-auto px-4 prose prose-stone prose-lg">
      <Image
        src="https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef23/67ee03ef8aaa8b2ff966ef52_Excursions-1.jpg"
        alt="Asheville experiences"
        width={1200}
        height={675}
        className="rounded-3xl mb-8"
      />
      <h1>7 Unforgettable Experiences to Awaken Your Senses in Asheville</h1>
      <p>
        Asheville is a sensory-rich mountain city full of food, nature, art, and wellness.
        Here are seven ways to slow down and savor it.
      </p>
      <ol>
        <li>Blue Ridge Parkway drives</li>
        <li>Waterfalls and forest hikes</li>
        <li>Farm-to-table meals</li>
        <li>Local art and galleries</li>
        <li>Spas and wellness spaces</li>
        <li>Historic neighborhoods</li>
        <li>Live music and mountain views</li>
      </ol>
    </article>
  )
}
