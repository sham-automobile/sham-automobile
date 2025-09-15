import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Autos kaufen', href: '/kaufen' },
    { name: 'Auto verkaufen', href: '/verkaufen' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
  ],
}

const openingHours = [
  { day: 'Montag - Freitag', hours: '09:00 - 18:00' },
  { day: 'Samstag', hours: '09:00 - 14:00' },
  { day: 'Sonntag', hours: 'Geschlossen' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sham Automobile</h3>
                  <p className="text-sm text-gray-400">Gebrauchtwagen Langenhagen</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6">
                Ihr zuverlässiger Partner für qualitativ hochwertige Gebrauchtwagen in Langenhagen. 
                Vertrauen, Transparenz und faire Preise stehen bei uns im Vordergrund.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Walsroder Straße 237<br />
                      30855 Langenhagen
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Öffnungszeiten</h4>
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">{schedule.day}</p>
                      <p className="text-gray-400 text-sm">{schedule.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Sham Automobile. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
