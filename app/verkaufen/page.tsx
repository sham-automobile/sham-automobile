import { Metadata } from 'next'
import SellerForm from '@/components/SellerForm'
import FAQAccordion from '@/components/FAQAccordion'
import { CheckCircle, Clock, Shield, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Auto verkaufen - Kostenlose Bewertung in Langenhagen',
  description: 'Verkaufen Sie Ihr Auto zu einem fairen Preis bei Sham Automobile. Kostenlose Bewertung, schnelle Abwicklung und sofortige Zahlung. Jetzt Termin vereinbaren!',
  openGraph: {
    title: 'Auto verkaufen - Kostenlose Bewertung in Langenhagen',
    description: 'Verkaufen Sie Ihr Auto zu einem fairen Preis bei Sham Automobile. Kostenlose Bewertung, schnelle Abwicklung und sofortige Zahlung.',
  },
}

const verkaufenFAQs = [
  {
    question: "Wie lange dauert die Bewertung meines Fahrzeugs?",
    answer: "Wir prüfen den technischen Zustand, die Ausstattung und den allgemeinen Zustand Ihres Fahrzeugs gründlich und geben Ihnen ein schnellst mögliches Angebot."
  },
  {
    question: "Ist die Bewertung wirklich kostenlos?",
    answer: "Ja, die Bewertung ist vollständig kostenlos und unverbindlich. Sie gehen keine Verpflichtungen ein und können unser Angebot jederzeit ablehnen."
  },
  {
    question: "Wann erhalte ich mein Geld?",
    answer: "Bei Einigung auf einen Preis erhalten Sie Ihr Geld sofort nach Unterzeichnung des Kaufvertrags."
  },
  {
    question: "Welche Unterlagen benötige ich?",
    answer: "Sie benötigen den Fahrzeugbrief, den Fahrzeugschein, Ihren Personalausweis und eventuell vorhandene Servicehefte oder Rechnungen für Reparaturen."
  }
]

export default function VerkaufenPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="gradient-hero text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/verkaufen-hero.jpg)'
          }}
        />
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-primary-900/30" />
        </div>
        <div className="relative container-custom h-[40vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Auto verkaufen leicht gemacht
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Verkaufen Sie Ihr Auto zu einem fairen Preis. Kostenlose Bewertung, 
              schnelle Abwicklung und sofortige Zahlung bei Sham Automobile.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <SellerForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Warum Sham Automobile?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Euro className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Faire Preise</h4>
                    <p className="text-gray-600 text-sm">
                      Basierend auf aktuellen Marktwerten und dem tatsächlichen Zustand Ihres Fahrzeugs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Schnelle Abwicklung</h4>
                    <p className="text-gray-600 text-sm">
                      Unkomplizierte Prozesse und sofortige Zahlung nach Vertragsabschluss.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vertrauen & Sicherheit</h4>
                    <p className="text-gray-600 text-sm">
                      Über 15 Jahre Erfahrung und über 500 zufriedene Kunden in der Region.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Kostenlose Bewertung</h4>
                    <p className="text-gray-600 text-sm">
                      Unverbindliche und kostenlose Bewertung Ihres Fahrzeugs vor Ort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                So funktioniert's
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Anfrage senden</h4>
                    <p className="text-gray-600 text-sm">
                      Füllen Sie das Formular aus und senden Sie uns Bilder Ihres Fahrzeugs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Termin vereinbaren</h4>
                    <p className="text-gray-600 text-sm">
                      Wir melden uns bei Ihnen und vereinbaren einen Termin für die Besichtigung.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bewertung vor Ort</h4>
                    <p className="text-gray-600 text-sm">
                      Unser Experte bewertet Ihr Fahrzeug und macht Ihnen ein faires Angebot.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verkauf abschließen</h4>
                    <p className="text-gray-600 text-sm">
                      Bei Einigung wird der Kaufvertrag erstellt und Sie erhalten sofort Ihr Geld.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Direkter Kontakt
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-primary-700 font-medium">Telefon</p>
                  <a 
                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                    className="text-primary-900 hover:text-primary-700"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_PHONE || '+491725413020'}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-primary-700 font-medium">E-Mail</p>
                  <a 
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                    className="text-primary-900 hover:text-primary-700"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@sham-automobile.de'}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-primary-700 font-medium">Adresse</p>
                  <p className="text-primary-900">
                    Walsroder Straße 237<br />
                    30855 Langenhagen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQAccordion 
        title="Häufig gestellte Fragen" 
        faqs={verkaufenFAQs} 
      />
    </div>
  )
}
