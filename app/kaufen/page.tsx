'use client'

import { useState, useEffect, useMemo } from 'react'
import { Metadata } from 'next'
import VehicleCard from '@/components/VehicleCard'
import FilterBar from '@/components/FilterBar'
import { Vehicle, VehicleFilters } from '@/types'

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
  {
    _id: '4',
    title: 'Mercedes C-Klasse',
    slug: { current: 'mercedes-c-klasse' },
    make: 'Mercedes-Benz',
    model: 'C-Klasse',
    year: 2018,
    price: 25900,
    mileage: 72000,
    transmission: 'automatic',
    fuelType: 'diesel',
    power: 170,
    color: 'Silber',
    description: 'AMG Line, Ledersitze',
    images: [],
    mainImage: {
      url: '/placeholder-car.jpg',
      alt: 'Mercedes C-Klasse'
    },
    featured: false,
    publishedAt: '2024-01-12T10:00:00Z',
  },
  {
    _id: '5',
    title: 'Opel Astra',
    slug: { current: 'opel-astra' },
    make: 'Opel',
    model: 'Astra',
    year: 2020,
    price: 18900,
    mileage: 55000,
    transmission: 'manual',
    fuelType: 'petrol',
    power: 110,
    color: 'Blau',
    description: 'Gute Ausstattung, sparsam',
    images: [],
    mainImage: {
      url: '/placeholder-car.jpg',
      alt: 'Opel Astra'
    },
    featured: false,
    publishedAt: '2024-01-11T10:00:00Z',
  },
  {
    _id: '6',
    title: 'Ford Focus',
    slug: { current: 'ford-focus' },
    make: 'Ford',
    model: 'Focus',
    year: 2019,
    price: 16900,
    mileage: 48000,
    transmission: 'manual',
    fuelType: 'petrol',
    power: 125,
    color: 'Rot',
    description: 'Titanium Ausstattung',
    images: [],
    mainImage: {
      url: '/placeholder-car.jpg',
      alt: 'Ford Focus'
    },
    featured: false,
    publishedAt: '2024-01-10T10:00:00Z',
  },
]

export default function KaufenPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<VehicleFilters>({})
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    async function fetchVehicles() {
      try {
        setLoading(true)
        // In production, this would fetch from API
        // const data = await fetch('/api/vehicles').then(res => res.json())
        // setVehicles(data)
        
        // Mock data for development
        await new Promise(resolve => setTimeout(resolve, 500)) // Simulate loading
        setVehicles(mockVehicles)
      } catch (error) {
        console.error('Error fetching vehicles:', error)
        setVehicles(mockVehicles) // Fallback to mock data
      } finally {
        setLoading(false)
      }
    }

    fetchVehicles()
  }, [])

  const filteredAndSortedVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      if (filters.make && !vehicle.make.toLowerCase().includes(filters.make.toLowerCase())) {
        return false
      }
      if (filters.model && !vehicle.model.toLowerCase().includes(filters.model.toLowerCase())) {
        return false
      }
      if (filters.maxPrice && vehicle.price > filters.maxPrice) {
        return false
      }
      if (filters.minPrice && vehicle.price < filters.minPrice) {
        return false
      }
      if (filters.minYear && vehicle.year < filters.minYear) {
        return false
      }
      if (filters.maxYear && vehicle.year > filters.maxYear) {
        return false
      }
      if (filters.maxMileage && vehicle.mileage > filters.maxMileage) {
        return false
      }
      if (filters.transmission && vehicle.transmission !== filters.transmission) {
        return false
      }
      if (filters.fuelType && vehicle.fuelType !== filters.fuelType) {
        return false
      }
      return true
    })

    // Sort vehicles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'mileage-asc':
          return a.mileage - b.mileage
        case 'year-desc':
          return b.year - a.year
        case 'newest':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

    return filtered
  }, [vehicles, filters, sortBy])

  if (loading) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Fahrzeuge werden geladen...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/kaufen-hero.jpg)'
          }}
        />
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-primary-900/30" />
        </div>
        <div className="relative container-custom h-[40vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gebrauchtwagen kaufen
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Entdecken Sie unsere sorgfältig ausgewählten Gebrauchtwagen in bester Qualität. 
              Alle Fahrzeuge werden vor dem Verkauf gründlich geprüft.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        filters={filters}
        onFiltersChange={setFilters}
        onSortChange={setSortBy}
        sortBy={sortBy}
        vehicleCount={filteredAndSortedVehicles.length}
      />

      {/* Results */}
      <div className="container-custom py-8">
        {filteredAndSortedVehicles.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Keine Fahrzeuge gefunden
            </h3>
            <p className="text-gray-600 mb-6">
              Versuchen Sie es mit anderen Suchkriterien oder schauen Sie später wieder vorbei.
            </p>
            <button
              onClick={() => setFilters({})}
              className="btn-primary"
            >
              Alle Filter zurücksetzen
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredAndSortedVehicles.length} Fahrzeug{filteredAndSortedVehicles.length !== 1 ? 'e' : ''} gefunden
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedVehicles.map((vehicle) => (
                <VehicleCard key={vehicle._id} vehicle={vehicle} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
