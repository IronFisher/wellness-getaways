'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/#properties', label: 'Properties' },
  { href: '/#wellness', label: 'The Experience' },
  { href: '/reiki', label: 'Reiki Sessions' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-stone-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className={`font-lora text-lg font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-forest' : 'text-white'
          }`}>
            Wellness Getaways
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-forest ${
                  scrolled ? 'text-stone-800' : 'text-white/90 hover:text-white'
                }`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/#properties"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-forest text-white hover:bg-forest-light transition-colors duration-200 shadow-sm">
            Browse Properties
          </Link>

          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-stone-800' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-stone-border px-4 pb-6 pt-4 space-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-stone-muted font-medium hover:text-forest transition-colors border-b border-stone-border/50">
              {l.label}
            </Link>
          ))}
          <Link href="/#properties" onClick={() => setOpen(false)}
            className="block mt-4 text-center px-5 py-3 rounded-full text-sm font-semibold bg-forest text-white hover:bg-forest-light transition-colors">
            Browse Properties
          </Link>
        </div>
      )}
    </header>
  )
}
