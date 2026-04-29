import Image from 'next/image'

export default function ReikiBlog() {
  return (
    <article className="pt-28 pb-20 max-w-4xl mx-auto px-4 prose prose-stone prose-lg">
      <Image
        src="https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef23/67ee03ef8aaa8b2ff966f052_Bg-Gallery.jpg"
        alt="Reiki Tummo"
        width={1200}
        height={675}
        className="rounded-3xl mb-8"
      />
      <h1>Why Reiki Tummo® is Transformative</h1>
      <p>
        A unique blend of Divine and Kundalini energy, Reiki Tummo® promotes healing,
        balance, and spiritual growth. Learn how it helps calm the mind, restore well-being,
        and open the heart to deeper connection.
      </p>
      <p>
        For more than 20 years, over 20,000 people worldwide have experienced the safe, gentle
        awakening of Kundalini energy and the deeply restorative healing of Reiki Tummo®.
      </p>
      <p>
        At Wellness Getaways, every property is intentionally infused with Reiki Tummo® energy.
        This creates an environment filled with positive vibrations, helping you feel grounded,
        peaceful, and supported the moment you arrive.
      </p>
    </article>
  )
}
