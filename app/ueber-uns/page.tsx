import { Metadata } from 'next'
import Image from 'next/image'
import { Users, Award, MapPin, Clock, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns - Sham Automobile Langenhagen',
  description: 'Erfahren Sie mehr über Sham Automobile, Ihren zuverlässigen Gebrauchtwagenhändler in Langenhagen. Über 15 Jahre Erfahrung, Qualität und Vertrauen.',
  openGraph: {
    title: 'Über uns - Sham Automobile Langenhagen',
    description: 'Erfahren Sie mehr über Sham Automobile, Ihren zuverlässigen Gebrauchtwagenhändler in Langenhagen.',
  },
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="gradient-hero text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/ueber-uns-hero.jpg)'
          }}
        />
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-primary-900/30" />
        </div>
        <div className="relative container-custom h-[40vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Über Sham Automobile
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Ihr zuverlässiger Partner für Gebrauchtwagen in Langenhagen. 
              Seit über 15 Jahren stehen Qualität, Vertrauen und faire Preise im Mittelpunkt unseres Handelns.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-primary-600">
                <p>
                  Sham Automobile wurde 2008 mit dem Ziel gegründet, den Gebrauchtwagenhandel 
                  in Langenhagen und Umgebung zu revolutionieren. Was als kleiner Familienbetrieb 
                  begann, ist heute zu einem etablierten Unternehmen mit über 500 zufriedenen 
                  Kunden geworden.
                </p>
                <p>
                  Unser Erfolg basiert auf drei Grundpfeilern: Qualität, Transparenz und 
                  Kundenzufriedenheit. Jedes Fahrzeug, das wir verkaufen, wird gründlich 
                  geprüft und mit einer umfassenden Garantie ausgeliefert.
                </p>
                <p>
                  Wir sind stolz darauf, dass viele unserer Kunden uns weiterempfehlen und 
                  auch bei ihrem nächsten Autokauf wieder zu uns kommen. Diese Vertrauensbasis 
                  ist das Fundament unseres Geschäftserfolgs.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Firmenbild Platzhalter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Was uns antreibt und wie wir arbeiten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Qualität
              </h3>
              <p className="text-primary-600">
                Jedes Fahrzeug wird gründlich geprüft und nur in bester Qualität verkauft.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Vertrauen
              </h3>
              <p className="text-primary-600">
                Ehrliche Beratung und transparente Preise schaffen Vertrauen bei unseren Kunden.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Erfahrung
              </h3>
              <p className="text-primary-600">
                Über 15 Jahre Erfahrung im Gebrauchtwagenhandel für optimale Beratung.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Service
              </h3>
              <p className="text-primary-600">
                Persönlicher Service und individuelle Betreuung für jeden Kunden.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Besuchen Sie uns
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-600">
                      Walsroder Straße 237<br />
                      30855 Langenhagen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Montag - Freitag: 08:00 - 18:00</p>
                      <p>Samstag: 08:00 - 14:00</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Kontakt</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`} className="hover:text-primary-600">
                          {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                        </a>
                      </p>
                      <p>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-primary-600">
                          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                So finden Sie uns
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.867891800124!2d9.73654837680028!3d52.46341994041689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b073ea176cef35%3A0x9526149df9045ffe!2sSham-Auto%20Mobile!5e0!3m2!1sde!2sde!4v1758029533336!5m2!1sde!2sde" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Wir befinden uns direkt an der Walsroder Straße in Langenhagen, 
                gut erreichbar mit dem Auto und öffentlichen Verkehrsmitteln. 
                Kostenlose Parkplätze sind vor Ort verfügbar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warum Sham Automobile?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Die Vorteile, die uns von anderen unterscheiden
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lokale Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                Als lokaler Händler kennen wir die Bedürfnisse unserer Kunden in Langenhagen 
                und Umgebung. Wir sind vor Ort und für Sie da.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Persönliche Beratung</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Lokale Marktkenntnis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Langfristige Betreuung</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qualitätssicherung
              </h3>
              <p className="text-gray-600 mb-4">
                Jedes Fahrzeug durchläuft eine umfassende technische Prüfung und 
                wird nur in bester Qualität verkauft.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Technische Überprüfung</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Unfallfreiheit geprüft</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>12 Monate Garantie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
