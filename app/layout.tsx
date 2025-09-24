import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sham Automobile - Gebrauchtwagen Langenhagen',
    template: '%s | Sham Automobile'
  },
  description: 'Ihr zuverlässiger Gebrauchtwagenhändler in Langenhagen. Qualität, Vertrauen und faire Preise bei Sham Automobile. Autos kaufen und verkaufen.',
  keywords: ['Gebrauchtwagen', 'Langenhagen', 'Hannover', 'Auto kaufen', 'Auto verkaufen', 'Sham Automobile'],
  authors: [{ name: 'Sham Automobile' }],
  creator: 'Sham Automobile',
  publisher: 'Sham Automobile',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sham-automobile.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/',
    title: 'Sham Automobile - Gebrauchtwagen Langenhagen',
    description: 'Ihr zuverlässiger Gebrauchtwagenhändler in Langenhagen. Qualität, Vertrauen und faire Preise.',
    siteName: 'Sham Automobile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sham Automobile - Gebrauchtwagen Langenhagen',
    description: 'Ihr zuverlässiger Gebrauchtwagenhändler in Langenhagen. Qualität, Vertrauen und faire Preise.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth light">
      <body className={inter.className}>
        <ClientProviders>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
