'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import ToasterProvider from '@/components/ToasterProvider'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}
