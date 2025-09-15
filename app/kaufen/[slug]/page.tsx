import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Gauge, Settings, Fuel, Power, Palette, Phone, Mail } from 'lucide-react'
import { Vehicle, FUEL_TYPE_LABELS, TRANSMISSION_LABELS } from '@/types'
import ContactForm from '@/components/ContactForm'

interface VehiclePageProps {
  params: Promise<{
    slug: string
  }>
}

// Mock data for development
const mockVehicle: Vehicle = {
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
  description: 'Sehr guter Zustand, vollständige Servicehistorie. Das Fahrzeug wurde regelmäßig gewartet und befindet sich in einem ausgezeichneten technischen und optischen Zustand. Alle Serviceintervalle wurden eingehalten und dokumentiert.',
  images: [],
  mainImage: {
    url: '/placeholder-car.jpg',
    alt: 'BMW 3er Limousine'
  },
  featured: true,
  publishedAt: '2024-01-15T10:00:00Z',
}

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params
  const vehicle = mockVehicle // In production: await getVehicle(slug)
  
  if (!vehicle) {
    return {
      title: 'Fahrzeug nicht gefunden',
    }
  }

  const title = `${vehicle.make} ${vehicle.model} ${vehicle.year} - ${vehicle.price.toLocaleString()} €`
  const description = `${vehicle.make} ${vehicle.model} aus ${vehicle.year} mit ${vehicle.mileage.toLocaleString()} km. ${vehicle.description?.substring(0, 150)}...`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [],
    },
  }
}

async function getVehicle(slug: string): Promise<Vehicle | null> {
  // Mock data for development - will be replaced with API data later 
  if (slug === 'bmw-3er-limousine') {
    return mockVehicle
  }
  return null
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params
  const vehicle = await getVehicle(slug)

  if (!vehicle) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('de-DE').format(mileage) + ' km'
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": `${vehicle.make} ${vehicle.model}`,
    "brand": {
      "@type": "Brand",
      "name": vehicle.make
    },
    "model": vehicle.model,
    "vehicleModelDate": vehicle.year,
    "mileageFromOdometer": {
      "@type": "QuantitativeValue",
      "value": vehicle.mileage,
      "unitCode": "KMT"
    },
    "offers": {
      "@type": "Offer",
      "price": vehicle.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "AutoDealer",
        "name": "Sham Automobile",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Walsroder Straße 237",
          "addressLocality": "Langenhagen",
          "postalCode": "30855",
          "addressCountry": "DE"
        },
        "telephone": process.env.NEXT_PUBLIC_CONTACT_PHONE,
        "email": process.env.NEXT_PUBLIC_CONTACT_EMAIL
      }
    },
    "fuelType": FUEL_TYPE_LABELS[vehicle.fuelType],
    "vehicleTransmission": TRANSMISSION_LABELS[vehicle.transmission],
    "color": vehicle.color,
    "description": vehicle.description
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-primary-600">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/kaufen" className="text-gray-500 hover:text-primary-600">
                Autos kaufen
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">
                {vehicle.make} {vehicle.model}
              </span>
            </nav>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="card p-6">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder-car.jpg"
                    alt={vehicle.mainImage?.alt || `${vehicle.make} ${vehicle.model}`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Additional Images Placeholder */}
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-200 rounded overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">+</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="card p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {vehicle.make} {vehicle.model}
                </h1>
                <p className="text-xl text-gray-600 mb-6">{vehicle.title}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Baujahr</p>
                    <p className="font-semibold text-gray-900">{vehicle.year}</p>
                  </div>
                  
                  <div className="text-center">
                    <Gauge className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Kilometerstand</p>
                    <p className="font-semibold text-gray-900">{formatMileage(vehicle.mileage)}</p>
                  </div>
                  
                  <div className="text-center">
                    <Settings className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Getriebe</p>
                    <p className="font-semibold text-gray-900">{TRANSMISSION_LABELS[vehicle.transmission]}</p>
                  </div>
                  
                  <div className="text-center">
                    <Fuel className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Kraftstoff</p>
                    <p className="font-semibold text-gray-900">{FUEL_TYPE_LABELS[vehicle.fuelType]}</p>
                  </div>
                </div>

                {vehicle.power && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <Power className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Leistung</p>
                      <p className="font-semibold text-gray-900">{vehicle.power} PS</p>
                    </div>
                    
                    {vehicle.color && (
                      <div className="text-center">
                        <Palette className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Farbe</p>
                        <p className="font-semibold text-gray-900">{vehicle.color}</p>
                      </div>
                    )}
                  </div>
                )}

                {vehicle.description && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Beschreibung</h3>
                    <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="card p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {formatPrice(vehicle.price)}
                  </div>
                  <p className="text-gray-600">Unverbindlicher Preis</p>
                </div>
                
                <div className="space-y-4">
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Anrufen</span>
                  </a>
                  
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Anfrage zu ${vehicle.make} ${vehicle.model}`}
                    className="btn-outline w-full flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>E-Mail senden</span>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Inklusive:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>12 Monate Gewährleistung</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Technische Überprüfung</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Unfallfreiheit geprüft</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Servicehistorie verfügbar</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fahrzeug anfragen
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
