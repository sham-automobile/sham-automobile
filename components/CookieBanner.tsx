'use client'

import { useCookie } from '@/contexts/CookieContext'
import { MapPin, Shield } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const { showBanner, acceptCookies, rejectCookies } = useCookie()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-primary-200 dark:border-gray-700 shadow-lg" data-cookie-banner>
      <div className="container-custom py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-accent-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary-900 dark:text-white mb-1">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-primary-600 dark:text-gray-300 mb-2">
                  Wir verwenden Cookies und externe Dienste, um Ihnen die bestmögliche Erfahrung zu bieten. 
                  Dazu gehören interaktive Karten und andere Funktionen.
                  <Link 
                    href="/datenschutz" 
                    className="text-accent-600 hover:text-accent-700 underline ml-1"
                  >
                    Mehr erfahren
                  </Link>
                </p>
                <div className="flex items-center gap-2 text-xs text-primary-500 dark:text-gray-400">
                  <Shield className="w-3 h-3" />
                  <span>Ihre Einwilligung ist freiwillig und kann jederzeit widerrufen werden.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <button
              onClick={rejectCookies}
              className="btn-secondary text-sm px-4 py-2 order-2 sm:order-1"
            >
              Ablehnen
            </button>
            <button
              onClick={acceptCookies}
              className="btn-accent text-sm px-6 py-2 order-1 sm:order-2"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
