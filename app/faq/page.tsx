import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — Wellness Getaways by Kelly McDade',
  description: 'Answers to common questions about our low-tox, Reiki-charged vacation rentals in Asheville and Lake Lure, NC — including booking, amenities, chemical sensitivity, and Reiki sessions.',
}

const categories = [
  {
    title: 'About the Properties',
    faqs: [
      {
        q: 'What makes Wellness Getaways different from a regular vacation rental?',
        a: 'Every Wellness Getaways property is intentionally designed to support your body, mind, and spirit. That means organic linens, toxin-free cleaning products, fragrance-free environments, Teflon-free cookware, and medical-grade air purification. Each space is also regularly cleansed and charged with Reiki Tummo® energy, so the healing begins the moment you walk in the door.',
      },
      {
        q: 'Are your properties truly fragrance-free?',
        a: 'Yes. We use only unscented, non-toxic cleaning products throughout each property. No synthetic air fresheners, scented candles, or fragranced laundry products are used. If you have chemical sensitivities or MCS, this is exactly the kind of environment we\'ve built for you.',
      },
      {
        q: 'What does "low-tox" mean in practice?',
        a: 'Low-tox means we\'ve replaced common household chemical offenders with safer alternatives: fragrance-free detergents, non-toxic surface cleaners, VOC-reduced furnishings where possible, and Teflon-free cookware. We won\'t claim zero exposure, but we take it seriously and have made it a core part of how we operate.',
      },
      {
        q: 'Are pets allowed?',
        a: 'No. To protect guests with pet allergies and maintain our low-allergen environment, pets are not permitted at any Wellness Getaways property.',
      },
      {
        q: 'Is smoking allowed?',
        a: 'No. All properties are strictly non-smoking, indoors and out.',
      },
    ],
  },
  {
    title: 'Booking & Policies',
    faqs: [
      {
        q: 'How do I book a stay?',
        a: 'You can book directly through Airbnb or Yonder — links are on each property page. For direct inquiries or questions before booking, reach out via the contact form or email.',
      },
      {
        q: 'What are your check-in and check-out times?',
        a: 'Standard check-in is at 4:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available depending on the reservation schedule — just ask.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellation policies are managed through your booking platform (Airbnb or Yonder). Please refer to the policy listed at the time of your booking for specific terms.',
      },
      {
        q: 'Can I book for a longer stay or extended retreat?',
        a: 'Absolutely. We love hosting guests on multi-week stays or longer wellness retreats. Reach out directly for extended stay inquiries — we\'re happy to work with you.',
      },
      {
        q: 'Is there a minimum stay requirement?',
        a: 'Minimum stay requirements vary by property and season. Current minimums are listed on each property\'s Airbnb and Yonder listing.',
      },
    ],
  },
  {
    title: 'Wellness Amenities',
    faqs: [
      {
        q: 'What wellness amenities are included?',
        a: 'Every property includes: Reiki Tummo® energy charging throughout the space, organic linens, toxin-free cleaning products, Teflon-free cookware, and medical-grade air purification. Crystals are placed at every entryway to amplify the healing field. Each stay is also eligible to add on a virtual or in-person Reiki session with Kelly.',
      },
      {
        q: 'What is Reiki Tummo® and why does it matter for my stay?',
        a: 'Reiki Tummo® is an advanced form of energy healing that connects to True Source energy — a higher, cleaner form of energy that supports healing on physical, emotional, and spiritual levels. Kelly regularly cleanses and charges each property with this energy, so you\'re stepping into a space that\'s been intentionally prepared to support your well-being.',
      },
      {
        q: 'What nearby amenities are available?',
        a: 'Amenities vary by property and location. The Lake Lure and Rumbling Bald properties have resort access to pools, golf, tennis, kayaks, paddleboards, a spa, fitness facilities, and more. The Asheville property puts you close to the city\'s wellness scene — hiking, float spas, forest bathing, cideries, and live music. Reach out with specific questions about what\'s available near each property.',
      },
      {
        q: 'Is the air filtration medical-grade?',
        a: 'Yes. Each property is equipped with medical-grade air purification to reduce allergens, VOCs, and particulates. This is especially beneficial for guests with respiratory sensitivities or MCS.',
      },
    ],
  },
  {
    title: 'Chemical Sensitivity & MCS',
    faqs: [
      {
        q: 'Is this a good fit for guests with Multiple Chemical Sensitivity (MCS)?',
        a: 'Yes — these properties were built with you in mind. We use fragrance-free products throughout, no synthetic air fresheners, unscented laundry detergent, and non-toxic cleaners. While no space can guarantee zero exposure, we have gone significantly further than any standard rental to create a safe and supportive environment.',
      },
      {
        q: 'Can I request additional accommodations for severe sensitivities?',
        a: 'Yes. Please reach out before booking to describe your specific needs. We\'ll be honest with you about whether our space is a good fit and what we can do to accommodate you.',
      },
      {
        q: 'Are the linens washed in fragrance-free detergent?',
        a: 'Yes. All linens are laundered with fragrance-free, non-toxic detergent. We use organic linens where possible.',
      },
    ],
  },
  {
    title: 'Reiki Sessions',
    faqs: [
      {
        q: 'Can I book a Reiki session during my stay?',
        a: 'Yes. Kelly offers in-person Reiki Tummo® sessions at both the Asheville and Lake Lure properties. She\'ll come to your rental for a full hands-on session in your already-charged space. She also offers remote sessions for guests who can\'t be there in person.',
      },
      {
        q: 'Do I need to believe in energy healing for it to work?',
        a: 'No. Reiki Tummo® works regardless of belief or background. Many skeptics have reported profound shifts. An open mind is helpful, but not required.',
      },
      {
        q: 'How do I book a Reiki session?',
        a: 'Visit the Reiki Sessions page to view session types and pricing, then book directly through the booking link. You can also reach out to Kelly by email to discuss what\'s right for you.',
      },
      {
        q: 'Are remote sessions really effective?',
        a: 'Yes. Distance is not a barrier for energy. During a remote session, Kelly sets a clear intention and channels energy directly to you. Many guests report feeling warmth, tingling, emotional releases, or simply deep relaxation — even from across the world.',
      },
    ],
  },
  {
    title: 'Contact & More',
    faqs: [
      {
        q: 'How do I get in touch with Kelly directly?',
        a: 'You can reach Kelly at info@thewellnessgetaways.com. She\'s responsive and happy to answer any questions before you book.',
      },
      {
        q: 'Do you offer gift certificates?',
        a: 'Reach out directly — we can accommodate gift stays and Reiki session gifts on a case-by-case basis.',
      },
      {
        q: 'Are the properties accessible for guests with mobility limitations?',
        a: 'Accessibility varies by property. Please contact us before booking if you have specific mobility needs and we\'ll give you an honest assessment.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-14 bg-forest-dark border-b border-forest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-light">Have Questions?</span>
          <h1 className="font-lora text-5xl text-white mt-3 mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Everything you need to know about our low-tox, Reiki-charged properties and how to make the most of your stay.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-14">
          {categories.map((cat) => (
            <section key={cat.title}>
              <h2 className="font-lora text-2xl text-forest-dark mb-6 pb-3 border-b border-stone-border">
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.faqs.map((faq) => (
                  <div key={faq.q} className="bg-white rounded-2xl p-6 border border-stone-border shadow-sm">
                    <h3 className="font-semibold text-forest-dark mb-2 leading-snug">{faq.q}</h3>
                    <p className="text-sm text-stone-muted leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-lora text-3xl mb-3">Still Have Questions?</h2>
          <p className="text-white/70 mb-8">Kelly is responsive and happy to help before you book.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@thewellnessgetaways.com" className="px-8 py-3.5 rounded-full bg-white text-forest font-semibold hover:bg-cream transition-colors duration-200">
              Email Kelly
            </a>
            <Link href="/#properties" className="px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors duration-200">
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
