import { Phone, Mail, Calendar, Gauge, Settings, Fuel, Power } from 'lucide-react'
import { Vehicle, TRANSMISSION_LABELS, FUEL_TYPE_LABELS } from '@/types'

interface VehicleInfoProps {
  vehicle: Vehicle
}

export default function VehicleInfo({ vehicle }: VehicleInfoProps) {
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

  return (
    <div className="space-y-6">
      {/* Title and Price */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {vehicle.make} {vehicle.model}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{vehicle.title}</p>
        
        <div className="text-4xl font-bold text-primary-600 mb-2">
          {formatPrice(vehicle.price)}
        </div>
        <p className="text-gray-600">Unverbindlicher Preis</p>
      </div>

      {/* Key Information */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Calendar className="w-6 h-6 text-primary-600" />
          <div>
            <p className="text-sm text-gray-600">Baujahr</p>
            <p className="font-semibold text-gray-900">{vehicle.year}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Gauge className="w-6 h-6 text-primary-600" />
          <div>
            <p className="text-sm text-gray-600">Kilometerstand</p>
            <p className="font-semibold text-gray-900">{formatMileage(vehicle.mileage)}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Settings className="w-6 h-6 text-primary-600" />
          <div>
            <p className="text-sm text-gray-600">Getriebe</p>
            <p className="font-semibold text-gray-900">{TRANSMISSION_LABELS[vehicle.transmission]}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Fuel className="w-6 h-6 text-primary-600" />
          <div>
            <p className="text-sm text-gray-600">Kraftstoff</p>
            <p className="font-semibold text-gray-900">{FUEL_TYPE_LABELS[vehicle.fuelType]}</p>
          </div>
        </div>
        
        {vehicle.power && (
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Power className="w-6 h-6 text-primary-600" />
            <div>
              <p className="text-sm text-gray-600">Leistung</p>
              <p className="font-semibold text-gray-900">{vehicle.power} PS</p>
            </div>
          </div>
        )}
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <a
          href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
          className="w-full flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          <Phone className="w-5 h-5" />
          <span>Jetzt anrufen</span>
        </a>
        
        <a
          href="#contact-form"
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <Mail className="w-5 h-5" />
          <span>Kontaktformular</span>
        </a>
      </div>

    </div>
  )
}
