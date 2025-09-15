'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Gauge, Settings, Fuel } from 'lucide-react'
import { Vehicle, FUEL_TYPE_LABELS, TRANSMISSION_LABELS } from '@/types'

interface VehicleCardProps {
  vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
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
    <div className="card group hover:shadow-lg transition-all duration-300">
      <Link href={`/kaufen/${vehicle.slug.current}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/placeholder-car.jpg"
            alt={vehicle.mainImage?.alt || `${vehicle.make} ${vehicle.model}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Featured Badge */}
          {vehicle.featured && (
            <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Empfohlen
            </div>
          )}
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary-900 px-3 py-1 rounded-full text-lg font-bold shadow-sm">
            {formatPrice(vehicle.price)}
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-primary-900 mb-1">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-primary-600">{vehicle.title}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2 text-primary-600">
              <Calendar className="w-4 h-4 text-accent-500" />
              <span className="text-sm">{vehicle.year}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-primary-600">
              <Gauge className="w-4 h-4 text-accent-500" />
              <span className="text-sm">{formatMileage(vehicle.mileage)}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-primary-600">
              <Settings className="w-4 h-4 text-accent-500" />
              <span className="text-sm">{TRANSMISSION_LABELS[vehicle.transmission]}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-primary-600">
              <Fuel className="w-4 h-4 text-accent-500" />
              <span className="text-sm">{FUEL_TYPE_LABELS[vehicle.fuelType]}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary-700">
              {formatPrice(vehicle.price)}
            </div>
            
            <div className="text-accent-600 group-hover:text-accent-700 transition-colors">
              <span className="text-sm font-medium">Details ansehen</span>
              <span className="ml-1">→</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
