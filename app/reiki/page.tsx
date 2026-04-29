import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reiki Tummo® Sessions — Live Energy Healing | Wellness Getaways',
  description: 'Book a live Reiki Tummo® or open heart meditation session with Kelly — remotely from anywhere in the world, or in-person during your stay in Asheville or Lake Lure, NC.',
}

const sessions = [
  {
    name: 'Remote Reiki Tummo®',
    duration: '60 min',
    price: '$111',
    description: 'A full distance healing session. You relax at home while Kelly channels Reiki Tummo® energy to support your physical, emotional, and spiritual well-being. No location required — energy has no boundaries.',
    includes: ['Pre-session intake form', '60-minute live distance healing', 'Post-session voice message with impressions', 'Follow-up grounding guidance'],
    best: 'Best for: deep clearing, chronic stress, emotional release, spiritual support',
  },
  {
    name: 'Open Heart Meditation',
    duration: '45 min',
    price: '$88',
    description: 'A guided meditation session using the Open Heart method — a gentle, heart-centered practice that helps you connect with True Source energy. Perfect for beginners and experienced meditators alike.',
    includes: ['Live Zoom or phone session', 'Heart-opening guided meditation', 'Personal energy transmission', 'Recorded audio to keep'],
    best: 'Best for: first-timers, stress relief, spiritual connection, clarity',
  },
  {
    name: 'In-Person Session',
    duration: '75 min',
    price: '$155',
    description: 'Available to guests staying at either Wellness Getaways property. Kelly visits your rental for a full hands-on Reiki Tummo® session in the comfort of your already-charged space.',
    includes: ['In-room arrival and setup', '75-minute hands-on session', 'Crystal placement', 'Post-session grounding tea and guidance'],
    best: 'Best for: guests staying at Asheville or Lake Lure properties',
  },
]

const faqs = [
  { q: 'What is Reiki Tummo®?', a: 'Reiki Tummo® is an advanced form of energy healing that combines traditional Reiki with the inner fire energy of Tummo. It was developed by Irmansyah Effendi and works by connecting the practitioner to True Source energy — a higher, cleaner form of energy that actively supports healing on all levels.' },
  { q: 'Do I need to believe in energy healing for it to work?', a: 'No. Reiki Tummo® works regardless of belief. Many skeptics have reported profound shifts. An open mind is helpful, but not required. The energy does what it does.' },
  { q: 'How does remote healing work?', a: 'Distance is not a barrier for energy. During a remote session, Kelly sets a clear intention and channels energy directly to you using your name and location. You may feel warmth, tingling, emotional releases, or simply deep relaxation during the session.' },
  { q: 'What should I do during a remote session?', a: 'Find a quiet, comfortable place to lie down or sit. Turn off notifications. You can play soft music or stay in silence. Just rest and receive — there\'s nothing you need to "do."' },
  { q: 'Can I book a session even if I\'m not staying at one of your properties?', a: 'Absolutely. Remote sessions are available to anyone, anywhere in the world. You don\'t need to be a guest to book.' },
]

export default function ReikiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-forest-dark to-forest text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #a8c5a8 0%, transparent 60%), radial-gradient(circle at 70% 30%, #7a9e7a 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-light mb-4 block">Energy Healing Sessions</span>
          <h1 className="font-lora text-5xl sm:text-6xl font-semibold mb-6 leading-tight">
            Reiki Tummo®<br /><em>Sessions with Kelly</em>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you&apos;re across the world or staying down the hall, Kelly channels True Source energy to support your healing, clarity, and spiritual connection. Available remotely or in-person at our properties.
          </p>
          <a href="#sessions" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-forest font-semibold hover:bg-cream transition-colors duration-200 shadow-lg">
            View Sessions & Pricing
          </a>
        </div>
      </section>

      {/* What is Reiki Tummo */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-forest">About the Practice</span>
              <h2 className="font-lora text-3xl text-forest-dark mt-2 mb-4">What is Reiki Tummo®?</h2>
              <div className="space-y-4 text-stone-muted leading-relaxed">
                <p>
                  Reiki Tummo® is an advanced form of energy healing developed by Irmansyah Effendi. It goes beyond traditional Reiki by connecting to True Source — a higher, unconditional form of energy that supports healing on physical, emotional, and spiritual levels.
                </p>
                <p>
                  Every Wellness Getaways property is regularly cleansed and charged with Reiki Tummo® energy. Crystals are placed at every entryway. The space itself is intentionally programmed to hold a healing field — so your healing begins the moment you arrive.
                </p>
                <p>
                  Kelly has been a certified Reiki Tummo® practitioner for years, working with guests locally and remotely across the world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✨', title: 'True Source Energy', desc: 'Connected to the highest, cleanest form of healing energy' },
                { icon: '🌍', title: 'Distance Healing', desc: 'Just as effective remotely as in person' },
                { icon: '💎', title: 'Crystal Support', desc: 'Amplified by intentionally placed crystals' },
                { icon: '🙏', title: 'No Belief Required', desc: 'Works regardless of background or skepticism' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-4 border border-stone-border text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm text-forest-dark mb-1">{item.title}</div>
                  <div className="text-xs text-stone-muted leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="py-16 bg-cream-soft" id="sessions">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest">Book a Session</span>
            <h2 className="font-lora text-4xl text-forest-dark mt-2 mb-4">Choose Your Session</h2>
            <p className="text-stone-muted max-w-xl mx-auto">All sessions are conducted by Kelly personally. Remote sessions are available worldwide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sessions.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-stone-border shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-forest bg-forest/10 px-3 py-1 rounded-full">{s.duration}</span>
                  <span className="font-lora text-2xl font-semibold text-forest-dark">{s.price}</span>
                </div>
                <h3 className="font-lora text-xl text-forest-dark mb-3">{s.name}</h3>
                <p className="text-sm text-stone-muted leading-relaxed mb-4 flex-1">{s.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-muted">
                      <svg className="w-3.5 h-3.5 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-forest font-medium mb-4 italic">{s.best}</p>
                <a
                  href="https://www.thewellnessgetaways.com/reiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-full bg-forest text-white font-semibold text-sm hover:bg-forest-dark transition-colors duration-200"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest">Common Questions</span>
            <h2 className="font-lora text-3xl text-forest-dark mt-2">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 border border-stone-border">
                <h3 className="font-semibold text-forest-dark mb-2">{item.q}</h3>
                <p className="text-sm text-stone-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-lora text-3xl mb-4">Ready to Experience It?</h2>
          <p className="text-white/70 mb-8">Book a session or pair it with a stay at one of our properties for a complete wellness retreat.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.thewellnessgetaways.com/reiki" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white text-forest font-semibold hover:bg-cream transition-colors duration-200">
              Book a Session
            </a>
            <Link href="/#properties" className="px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors duration-200">
              View Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
