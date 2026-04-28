import type { Metadata } from 'next'
import { Lora, Raleway } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Wellness Getaways — Low-Tox, Reiki-Charged Vacation Rentals in NC',
    template: '%s | Wellness Getaways',
  },
  description:
    'Escape to a truly clean stay. Low-allergen, fragrance-free, Reiki-charged vacation rentals in Asheville and Lake Lure, NC.',
  metadataBase: new URL('https://www.thewellnessgetaways.com'),
  openGraph: {
    type: 'website',
    siteName: 'Wellness Getaways',
    images: [{
      url: 'https://cdn.prod.website-files.com/67ee03ef8aaa8b2ff966ef23/67ee03ef8aaa8b2ff966f052_Bg-Gallery.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${raleway.variable}`}>
      <body className="font-raleway">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
