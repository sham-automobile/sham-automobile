import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt - Sham Automobile Langenhagen',
  description: 'Kontaktieren Sie Sham Automobile in Langenhagen. Telefon, E-Mail, Adresse und Öffnungszeiten. Wir sind für Sie da!',
  openGraph: {
    title: 'Kontakt - Sham Automobile Langenhagen',
    description: 'Kontaktieren Sie Sham Automobile in Langenhagen. Wir sind für Sie da!',
  },
}

const kontaktFAQs = [
  {
    question: "Wie kann ich einen Termin vereinbaren?",
    answer: `Sie können uns telefonisch unter ${process.env.NEXT_PUBLIC_CONTACT_PHONE} erreichen oder das Kontaktformular nutzen. Wir melden uns schnellstmöglich bei Ihnen zurück.`
  },
  {
    question: "Welche Unterlagen benötige ich für den Autokauf?",
    answer: "Für den Kauf benötigen Sie Ihren Personalausweis oder Reisepass."
  },
  {
    question: "Bieten Sie Finanzierungsmöglichkeiten an?",
    answer: "Nein, wir bieten keine Finanzierungsmöglichkeiten an. Alle Fahrzeuge werden ausschließlich gegen Barzahlung oder Banküberweisung verkauft."
  },
  {
    question: "Kann ich mein Auto auch am Wochenende abholen?",
    answer: "Ja, nach vorheriger Absprache können wir auch außerhalb der regulären Öffnungszeiten individuelle Termine vereinbaren."
  }
]

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="gradient-hero text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/kontakt-hero.jpg)'
          }}
        />
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-primary-900/30" />
        </div>
        <div className="relative container-custom h-[40vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kontakt
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
              Wir sind gerne für Sie da und helfen Ihnen weiter.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Map Section - Below the form, same width */}
            <div className="card p-6">
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
              </p>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Kontaktinformationen
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <a 
                      href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Mo-Fr: 08:00-18:00, Sa: 08:00-14:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                    <a 
                      href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Walsroder Straße 237<br />
                      30855 Langenhagen
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Kostenlose Parkplätze verfügbar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Öffnungszeiten
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <div className="flex justify-between w-full">
                    <span className="text-gray-600">Montag - Freitag</span>
                    <span className="font-medium text-gray-900">08:00 - 18:00</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <div className="flex justify-between w-full">
                    <span className="text-gray-600">Samstag</span>
                    <span className="font-medium text-gray-900">08:00 - 14:00</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div className="flex justify-between w-full">
                    <span className="text-gray-600">Sonntag</span>
                    <span className="font-medium text-gray-900">Geschlossen</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-800">
                  <strong>Terminvereinbarung:</strong> Wir empfehlen eine vorherige 
                  Terminvereinbarung, um Ihnen die beste Beratung zu gewährleisten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQAccordion 
        title="Häufig gestellte Fragen" 
        faqs={kontaktFAQs} 
      />
    </div>
  )
}
