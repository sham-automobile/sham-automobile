'use client'

import { useCookie } from '@/contexts/CookieContext'
import { MapPin, ExternalLink } from 'lucide-react'

interface GoogleMapsProps {
  src: string
  title?: string
  className?: string
  width?: string
  height?: string
}

export default function GoogleMaps({ 
  src, 
  title = "Google Maps", 
  className = "w-full h-96",
  width = "100%",
  height = "400"
}: GoogleMapsProps) {
  const { cookiesAccepted, showSettings } = useCookie()

  // If user hasn't accepted cookies, show placeholder
  if (!cookiesAccepted) {
    return (
      <div className={`${className} bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center p-8 text-center`}>
        <MapPin className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Interaktive Karte
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-md">
          Um Ihnen unsere Standorte anzuzeigen, benötigen wir Ihre Einwilligung für externe Dienste.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={showSettings}
            className="btn-accent text-sm px-4 py-2"
          >
            Einstellungen öffnen
          </button>
          <a
            href="https://www.google.com/maps/place/Sham-Auto+Mobile/@52.4634199,9.7365484,17z/data=!3m1!4b1!4m6!3m5!1s0x47b073ea176cef35:0x9526149df9045ffe!8m2!3d52.4634199!4d9.7387484!16s%2Fg%2F11c0v8q8q8?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Google Maps öffnen
          </a>
        </div>
      </div>
    )
  }

  // If user has consented, show the actual iframe
  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      className={`${className} border-0 rounded-lg`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
