import type { Metadata } from 'next'
import './globals.css'
import { CookieBanner } from '@/ui/CookieBanner'
import { Footer } from '@/ui/Footer'
import { Header } from '@/ui/Header'

export const metadata: Metadata = {
  metadataBase: new URL('https://antonioarjona.dev'),
  title: {
    default: 'Antonio Arjona',
    template: '%s - Antonio Arjona',
  },
  description:
    'Antonio Arjona brings over 20 years in automotive manufacturing to software projects for supplier operations, electronics and industrial workflows.',
  openGraph: {
    title: 'Antonio Arjona',
    description:
      'I build software for problems I know from the factory floor. Web applications and design studies informed by over 20 years in automotive manufacturing.',
    url: 'https://antonioarjona.dev',
    siteName: 'Antonio Arjona',
    images: ['/profil.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chemistdev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <CookieBanner />
        <div className="mx-auto grid min-h-screen w-[min(100%-2rem,76rem)] grid-rows-[auto_1fr_auto] gap-12 py-4 md:gap-20 md:py-8">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
