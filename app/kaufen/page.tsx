'use client'

import { useState, useEffect, useMemo } from 'react'
import VehicleCard from '@/components/VehicleCard'
import FilterBar from '@/components/FilterBar'
import { Vehicle, VehicleFilters } from '@/types'

export default function KaufenPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<VehicleFilters>({})
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    async function fetchVehicles() {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('/api/vehicles')
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles')
        }
        
        const data = await response.json()
        setVehicles(data)
      } catch (error) {
        console.error('Error fetching vehicles:', error)
        setError('Fehler beim Laden der Fahrzeuge. Bitte versuchen Sie es später erneut.')
        setVehicles([]) // Fallback zu leeren Array bei Fehler
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
            <p className="text-gray-600 dark:text-gray-300">Fahrzeuge werden geladen...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-red-600">⚠️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fehler beim Laden
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
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
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {vehicles.length === 0 ? 'Noch keine Fahrzeuge verfügbar' : 'Keine Fahrzeuge gefunden'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {vehicles.length === 0 
                ? 'Wir arbeiten daran, Ihnen die besten Fahrzeuge zu präsentieren. Schauen Sie bald wieder vorbei!'
                : 'Versuchen Sie es mit anderen Suchkriterien oder schauen Sie später wieder vorbei.'
              }
            </p>
            {vehicles.length > 0 && (
              <button
                onClick={() => setFilters({})}
                className="btn-primary"
              >
                Alle Filter zurücksetzen
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300">
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
