import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-lora text-white text-xl mb-3">Wellness Getaways</h3>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              Low-tox, Reiki-charged vacation rentals in Asheville and Lake Lure, NC.
              Curated for the chemically sensitive and the spiritually curious.
            </p>
            <a href="mailto:info@thewellnessgetaways.com"
              className="text-sm text-white/50 hover:text-white transition-colors">
              info@thewellnessgetaways.com
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['/asheville', 'Asheville Getaway'],
                ['/lake-lure', 'Lake Lure Getaway'],
                ['/rumbling-bald', 'Rumbling Bald Getaway'],
                ['/reiki', 'Reiki Sessions'],
                ['/blog', 'Blog'],
                ['/faq', 'FAQ'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Our Standards</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {['Medical-Grade Air Purifiers', 'Certified Organic Linens', 'Fragrance-Free & Dye-Free',
                'Teflon-Free Cookware', 'Reiki Tummo® Charged', 'No Pets · No Smoking'].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Wellness Getaways. All rights reserved.</p>
          <p>Asheville & Lake Lure, North Carolina</p>
        </div>
      </div>
    </footer>
  )
}
