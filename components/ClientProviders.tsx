'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import { CookieProvider } from '@/contexts/CookieContext'
import ToasterProvider from '@/components/ToasterProvider'
// import CookieBanner from '@/components/CookieBanner'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CookieProvider>
        {children}
        <ToasterProvider />
        {/* <CookieBanner /> */}
      </CookieProvider>
    </ThemeProvider>
  )
}
