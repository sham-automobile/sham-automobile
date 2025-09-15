'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Autos kaufen', href: '/kaufen' },
  { name: 'Auto verkaufen', href: '/verkaufen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                className="flex items-center space-x-1 hover:text-primary-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{process.env.NEXT_PUBLIC_CONTACT_PHONE}</span>
              </a>
              <a 
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="flex items-center space-x-1 hover:text-primary-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Walsroder Straße 237, 30855 Langenhagen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sham Automobile</h1>
              <p className="text-sm text-gray-600">Gebrauchtwagen Langenhagen</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/verkaufen" className="btn-primary">
              Auto verkaufen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/verkaufen"
                className="btn-primary w-full text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Auto verkaufen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
