'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface CookieContextType {
  hasConsented: boolean
  cookiesAccepted: boolean
  showBanner: boolean
  acceptCookies: () => void
  rejectCookies: () => void
  showSettings: () => void
}

const defaultContext: CookieContextType = {
  hasConsented: false,
  cookiesAccepted: false,
  showBanner: false,
  acceptCookies: () => {},
  rejectCookies: () => {},
  showSettings: () => {},
}

const CookieContext = createContext<CookieContextType>(defaultContext)

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [hasConsented, setHasConsented] = useState(false)
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      setHasConsented(true)
      setCookiesAccepted(true)
      setShowBanner(false)
    } else if (consent === 'rejected') {
      setHasConsented(true)
      setCookiesAccepted(false)
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setHasConsented(true)
    setCookiesAccepted(true)
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setHasConsented(true)
    setCookiesAccepted(false)
    setShowBanner(false)
  }

  const showSettings = () => {
    setShowBanner(true)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <CookieContext.Provider value={{ hasConsented, cookiesAccepted, showBanner, acceptCookies, rejectCookies, showSettings }}>
      {children}
    </CookieContext.Provider>
  )
}

export function useCookie() {
  return useContext(CookieContext)
}
