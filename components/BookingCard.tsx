interface BookingCardProps {
  price: string
  beds: string
  baths: string
  guests: string
  highlights: string[]
  airbnbUrl?: string
  yonderUrl?: string
  reikiUrl?: string
}

export default function BookingCard({
  price,
  beds,
  baths,
  guests,
  highlights,
  airbnbUrl = '#',
  yonderUrl,
  reikiUrl = '/reiki',
}: BookingCardProps) {
  return (
    <div className="sticky top-28 bg-white border border-stone-border rounded-2xl shadow-md p-6">
      <div className="flex items-baseline gap-1 mb-5">
        <span className="font-lora text-3xl font-semibold text-forest-dark">From {price}</span>
        <span className="text-stone-muted text-sm">/night</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5 text-sm text-stone-muted">
        <div className="bg-cream rounded-xl p-3 text-center">
          <div className="font-semibold text-forest-dark text-base">{beds}</div>
          <div>Beds</div>
        </div>
        <div className="bg-cream rounded-xl p-3 text-center">
          <div className="font-semibold text-forest-dark text-base">{baths}</div>
          <div>Baths</div>
        </div>
        <div className="bg-cream rounded-xl p-3 text-center">
          <div className="font-semibold text-forest-dark text-base">{guests}</div>
          <div>Guests</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {highlights.map((h) => (
          <span key={h} className="px-2.5 py-1 bg-cream-warm rounded-full text-xs text-forest font-medium">
            {h}
          </span>
        ))}
      </div>

      <a
        href={airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3.5 rounded-full bg-forest text-white font-semibold hover:bg-forest-dark transition-colors duration-200 mb-3"
      >
        Book on Airbnb
      </a>
      {yonderUrl && (
        <a
          href={yonderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3.5 rounded-full border border-forest text-forest font-semibold hover:bg-forest hover:text-white transition-colors duration-200 mb-3"
        >
          Book on Yonder
        </a>
      )}
      <a
        href={reikiUrl}
        className="block w-full text-center py-3 rounded-full border border-stone-border text-stone-muted text-sm hover:border-forest hover:text-forest transition-colors duration-200"
      >
        ✨ Add a Reiki Session
      </a>

      <p className="text-center text-xs text-stone-muted mt-4">★ 5.0 · Verified low-tox standards</p>
    </div>
  )
}
