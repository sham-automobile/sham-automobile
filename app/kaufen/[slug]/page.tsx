import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Vehicle, FUEL_TYPE_LABELS, TRANSMISSION_LABELS } from '@/types'
import { getVehicleBySlug } from '@/lib/sanity'
import Breadcrumbs from '@/components/Breadcrumbs'
import ImageCarousel from '@/components/ImageCarousel'
import VehicleInfo from '@/components/VehicleInfo'
import VehicleDetails from '@/components/VehicleDetails'
import ContactForm from '@/components/ContactForm'

interface VehiclePageProps {
  params: Promise<{
    slug: string
  }>
}


export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params
  const vehicle = await getVehicleBySlug(slug)
  
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
  try {
    return await getVehicleBySlug(slug)
  } catch (error) {
    console.error('Error fetching vehicle:', error)
    return null
  }
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params
  const vehicle = await getVehicle(slug)

  if (!vehicle) {
    notFound()
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
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Autos kaufen', href: '/kaufen' },
                { label: `${vehicle.make} ${vehicle.model}` }
              ]} 
            />
          </div>
        </div>

        <div className="container-custom py-8">
          {/* First Section - Image Carousel and Vehicle Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image Carousel */}
            <div className="card p-3">
              <ImageCarousel 
                images={vehicle.images}
                mainImage={vehicle.mainImage}
                alt={`${vehicle.make} ${vehicle.model}`}
              />
            </div>

            {/* Vehicle Info */}
            <div className="card p-6">
              <VehicleInfo vehicle={vehicle} />
            </div>
          </div>

          {/* Second Section - Detailed Information */}
          <div className="space-y-8">
            {/* Vehicle Details */}
            <VehicleDetails vehicle={vehicle} />

            {/* Contact Form */}
            <div id="contact-form" className="card p-6 scroll-mt-20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fahrzeug anfragen
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
