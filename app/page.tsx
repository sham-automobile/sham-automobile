import { Metadata } from 'next'
import Hero from '@/components/Hero'
import VehicleCard from '@/components/VehicleCard'
import { Vehicle, Testimonial } from '@/types'
import { Star, CheckCircle, Users, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gebrauchtwagen kaufen und verkaufen in Langenhagen',
  description: 'Sham Automobile - Ihr zuverlässiger Partner für Gebrauchtwagen in Langenhagen. Qualität, Vertrauen und faire Preise. Jetzt Auto kaufen oder verkaufen!',
  openGraph: {
    title: 'Gebrauchtwagen kaufen und verkaufen in Langenhagen',
    description: 'Sham Automobile - Ihr zuverlässiger Partner für Gebrauchtwagen in Langenhagen. Qualität, Vertrauen und faire Preise.',
  },
}

// Mock data for development
const mockVehicles: Vehicle[] = [
  {
    _id: '1',
    title: 'BMW 3er Limousine',
    slug: { current: 'bmw-3er-limousine' },
    make: 'BMW',
    model: '3er',
    year: 2020,
    price: 28900,
    mileage: 45000,
    transmission: 'automatic',
    fuelType: 'diesel',
    power: 190,
    color: 'Schwarz',
    description: 'Sehr guter Zustand, vollständige Servicehistorie',
    images: [],
    mainImage: {
      url: '/placeholder-car.jpg',
      alt: 'BMW 3er Limousine'
    },
    featured: true,
    publishedAt: '2024-01-15T10:00:00Z',
  },
  {
    _id: '2',
    title: 'VW Golf 8',
    slug: { current: 'vw-golf-8' },
    make: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    price: 22900,
    mileage: 32000,
    transmission: 'manual',
    fuelType: 'petrol',
    power: 150,
    color: 'Weiß',
    description: 'Top Ausstattung, Garagenwagen',
    images: [],
    mainImage: {
      url: '/placeholder-car.jpg',
      alt: 'VW Golf 8'
    },
    featured: true,
    publishedAt: '2024-01-14T10:00:00Z',
  },
  {
    _id: '3',
    title: 'Audi A4 Avant',
    slug: { current: 'audi-a4-avant' },
    make: 'Audi',
    model: 'A4',
    year: 2019,
    price: 31900,
    mileage: 68000,
    transmission: 'automatic',
    fuelType: 'diesel',
    power: 190,
    color: 'Grau',
    description: 'S-Line Ausstattung, Panoramadach',
    images: [],
    mainImage: {
      url: '/placeholder-car.jpg',
      alt: 'Audi A4 Avant'
    },
    featured: true,
    publishedAt: '2024-01-13T10:00:00Z',
  },
]

const mockTestimonials: Testimonial[] = [
  {
    _id: '1',
    name: 'Michael Schmidt',
    text: 'Sehr professionelle Beratung und faire Preise. Mein Auto wurde schnell und unkompliziert verkauft. Gerne wieder!',
    rating: 5,
    vehicle: 'BMW 3er, 2018',
    featured: true,
  },
  {
    _id: '2',
    name: 'Sarah Müller',
    text: 'Endlich ein Händler, dem man vertrauen kann. Transparente Preise und ehrliche Beratung. Kann ich nur empfehlen.',
    rating: 5,
    vehicle: 'VW Golf, 2020',
    featured: true,
  },
  {
    _id: '3',
    name: 'Thomas Weber',
    text: 'Schnelle Abwicklung, fairer Preis. Das Team war sehr kompetent und hat alle Fragen beantwortet.',
    rating: 5,
    vehicle: 'Audi A4, 2019',
    featured: true,
  },
]

async function getFeaturedVehicles(): Promise<Vehicle[]> {
  // Using mock data for now - will be replaced with API data later
  return mockVehicles
}

async function getTestimonials(): Promise<Testimonial[]> {
  // Using mock data for now - will be replaced with API data later
  return mockTestimonials
}

export default async function HomePage() {
  const [featuredVehicles, testimonials] = await Promise.all([
    getFeaturedVehicles(),
    getTestimonials(),
  ])

  return (
    <>
      <Hero />
      
      {/* Featured Vehicles */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Unsere Empfehlungen
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Entdecken Sie unsere sorgfältig ausgewählten Gebrauchtwagen in bester Qualität
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/kaufen" className="btn-accent">
              Alle Fahrzeuge ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              So einfach geht's
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              In nur 3 Schritten zu Ihrem Traumauto oder fairem Verkaufspreis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Fahrzeug finden oder bewerten lassen
              </h3>
              <p className="text-primary-600">
                Durchsuchen Sie unsere Auswahl oder lassen Sie Ihr Auto kostenlos bewerten
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Termin vereinbaren
              </h3>
              <p className="text-primary-600">
                Besichtigen Sie das Fahrzeug oder lassen Sie Ihr Auto vor Ort bewerten
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Vertrag abschließen
              </h3>
              <p className="text-primary-600">
                Faire Preise, transparente Abwicklung und sofortige Zahlung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Über 500 zufriedene Kunden vertrauen auf Sham Automobile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-primary-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-primary-900">{testimonial.name}</p>
                  {testimonial.vehicle && (
                    <p className="text-sm text-primary-500">{testimonial.vehicle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Warum Sham Automobile?
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Über 15 Jahre Erfahrung im Gebrauchtwagenhandel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Qualität garantiert
              </h3>
              <p className="text-primary-600">
                Alle Fahrzeuge werden sorgfältig geprüft und mit Garantie verkauft
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Persönliche Beratung
              </h3>
              <p className="text-primary-600">
                Individuelle Beratung ohne Verkaufsdruck - Ihr Vertrauen ist uns wichtig
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Faire Preise
              </h3>
              <p className="text-primary-600">
                Transparente Preisgestaltung basierend auf aktuellen Marktwerten
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Schnelle Abwicklung
              </h3>
              <p className="text-primary-600">
                Unkomplizierte Prozesse und sofortige Zahlung beim Verkauf
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für Ihr nächstes Auto?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Entdecken Sie unsere Auswahl oder lassen Sie Ihr Auto kostenlos bewerten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kaufen" className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
              Autos kaufen
            </Link>
            <Link href="/verkaufen" className="btn btn-accent px-8 py-4 text-lg font-semibold">
              Auto verkaufen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
