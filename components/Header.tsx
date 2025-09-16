'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Autos kaufen', href: '/kaufen' },
  { name: 'Auto verkaufen', href: '/verkaufen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isDark, mounted } = useTheme()

  // Function to check if a navigation item is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-800 text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                className="flex items-center space-x-1 hover:text-accent-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{process.env.NEXT_PUBLIC_CONTACT_PHONE || '+491725413020'}</span>
              </a>
              <a 
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="flex items-center space-x-1 hover:text-accent-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@sham-automobile.de'}</span>
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
          <Link href="/" className="flex items-center">
            <div className="h-12 w-64 flex items-center justify-center overflow-hidden">
              <Image 
                src={mounted && isDark ? "/images/logo-white.png" : "/images/logo-sham-automobile.png"} 
                alt="Sham Automobile Logo" 
                width={256}
                height={80}
                className="h-20 w-auto object-contain scale-[2.8]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-accent-600 border-b-2 border-accent-600 pb-1'
                    : 'text-primary-700 dark:text-gray-300 hover:text-accent-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/kaufen" className="btn-accent text-lg px-6 py-3">
              Auto kaufen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-primary-700 dark:text-gray-300 hover:text-accent-600 hover:bg-primary-100 dark:hover:bg-gray-800"
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
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-primary-200 dark:border-gray-700">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors py-2 ${
                    isActive(item.href)
                      ? 'text-accent-600 bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-600 pl-4'
                      : 'text-primary-700 dark:text-gray-300 hover:text-accent-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kaufen"
                className="btn-accent w-full text-center mt-4 text-lg py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Auto kaufen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
