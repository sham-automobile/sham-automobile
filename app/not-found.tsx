'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-gray-600 mb-8">
            Die gesuchte Seite konnte leider nicht gefunden werden. 
            Möglicherweise wurde sie verschoben oder existiert nicht mehr.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Zur Startseite</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-outline w-full flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück</span>
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Oder besuchen Sie eine unserer Hauptseiten:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/kaufen" className="text-primary-600 hover:text-primary-700">
              Autos kaufen
            </Link>
            <Link href="/verkaufen" className="text-primary-600 hover:text-primary-700">
              Auto verkaufen
            </Link>
            <Link href="/kontakt" className="text-primary-600 hover:text-primary-700">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
