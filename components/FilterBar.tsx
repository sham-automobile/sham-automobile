'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { VehicleFilters } from '@/types'

interface FilterBarProps {
  filters: VehicleFilters
  onFiltersChange: (filters: VehicleFilters) => void
  onSortChange: (sort: string) => void
  sortBy: string
  vehicleCount: number
}

const MAKES = [
  'Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Opel', 'Ford', 
  'Renault', 'Peugeot', 'Citroën', 'Skoda', 'Seat', 'Fiat', 
  'Toyota', 'Honda', 'Nissan', 'Hyundai', 'Kia', 'Mazda'
]

const FUEL_TYPES = [
  { value: 'petrol', label: 'Benzin' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'electric', label: 'Elektro' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'lpg', label: 'LPG' },
  { value: 'cng', label: 'CNG' },
]

const TRANSMISSIONS = [
  { value: 'manual', label: 'Schaltgetriebe' },
  { value: 'automatic', label: 'Automatik' },
  { value: 'semi-automatic', label: 'Halbautomatik' },
]

const SORT_OPTIONS = [
  { value: 'newest', label: 'Neueste zuerst' },
  { value: 'price-asc', label: 'Preis aufsteigend' },
  { value: 'price-desc', label: 'Preis absteigend' },
  { value: 'mileage-asc', label: 'Kilometerstand aufsteigend' },
  { value: 'year-desc', label: 'Baujahr absteigend' },
]


export default function FilterBar({ 
  filters, 
  onFiltersChange, 
  onSortChange, 
  sortBy, 
  vehicleCount 
}: FilterBarProps) {

  const handleFilterChange = (key: keyof VehicleFilters, value: string | number | undefined) => {
    onFiltersChange({
      ...filters,
      [key]: value || undefined,
    })
  }

  const clearFilters = () => {
    onFiltersChange({})
  }

  const clearIndividualFilter = (key: keyof VehicleFilters) => {
    const newFilters = { ...filters }
    delete newFilters[key]
    onFiltersChange(newFilters)
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined && value !== '')

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container-custom">
        {/* Mobile Header */}
        <div className="lg:hidden py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-medium">Filter</span>
              {hasActiveFilters && (
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  {Object.values(filters).filter(v => v !== undefined && v !== '').length}
                </span>
              )}
            </div>
            
            <div className="flex items-center">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="text-sm border border-gray-300 rounded px-3 py-1"
              >
                {SORT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:block">
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Make */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marke
                </label>
                <select
                  value={filters.make || ''}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className="input text-sm"
                >
                  <option value="">Alle Marken</option>
                  {MAKES.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Modell
                </label>
                <input
                  type="text"
                  value={filters.model || ''}
                  onChange={(e) => handleFilterChange('model', e.target.value)}
                  placeholder="z.B. Golf"
                  className="input text-sm"
                />
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preis bis
                </label>
                <select
                  value={filters.maxPrice || ''}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                  className="input text-sm"
                >
                  <option value="">Kein Limit</option>
                  <option value="1000">1.000 €</option>
                  <option value="2000">2.000 €</option>
                  <option value="3000">3.000 €</option>
                  <option value="4000">4.000 €</option>
                  <option value="5000">5.000 €</option>
                  <option value="6000">6.000 €</option>
                  <option value="7000">7.000 €</option>
                  <option value="8000">8.000 €</option>
                  <option value="9000">9.000 €</option>
                  <option value="10000">10.000 €</option>
                  <option value="11000">11.000 €</option>
                  <option value="12000">12.000 €</option>
                  <option value="13000">13.000 €</option>
                  <option value="14000">14.000 €</option>
                  <option value="15000">15.000 €</option>
                </select>
              </div>

              {/* Year */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Baujahr ab
                </label>
                <select
                  value={filters.minYear || ''}
                  onChange={(e) => handleFilterChange('minYear', e.target.value ? Number(e.target.value) : undefined)}
                  className="input text-sm"
                >
                  <option value="">Kein Limit</option>
                  {Array.from({ length: new Date().getFullYear() - 1995 + 1 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kraftstoff
                </label>
                <select
                  value={filters.fuelType || ''}
                  onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                  className="input text-sm"
                >
                  <option value="">Alle</option>
                  {FUEL_TYPES.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sortierung
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="input text-sm"
                >
                  {SORT_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="text-sm text-gray-600">Aktive Filter:</span>
                  {filters.make && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      {filters.make}
                      <button
                        onClick={() => clearIndividualFilter('make')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.model && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      {filters.model}
                      <button
                        onClick={() => clearIndividualFilter('model')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.fuelType && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      {filters.fuelType}
                      <button
                        onClick={() => clearIndividualFilter('fuelType')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.maxPrice && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      bis {filters.maxPrice.toLocaleString()} €
                      <button
                        onClick={() => clearIndividualFilter('maxPrice')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.minPrice && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      ab {filters.minPrice.toLocaleString()} €
                      <button
                        onClick={() => clearIndividualFilter('minPrice')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.minYear && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      ab {filters.minYear}
                      <button
                        onClick={() => clearIndividualFilter('minYear')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.maxMileage && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      bis {filters.maxMileage.toLocaleString()} km
                      <button
                        onClick={() => clearIndividualFilter('maxMileage')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.transmission && (
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                      {TRANSMISSIONS.find(t => t.value === filters.transmission)?.label}
                      <button
                        onClick={() => clearIndividualFilter('transmission')}
                        className="hover:text-primary-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 flex items-center space-x-1"
                >
                  <X className="w-4 h-4" />
                  <span>Alle Filter löschen</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel - Always Visible */}
        <div className="lg:hidden border-t border-gray-200 py-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marke
                </label>
                <select
                  value={filters.make || ''}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className="input text-sm"
                >
                  <option value="">Alle Marken</option>
                  {MAKES.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kraftstoff
                </label>
                <select
                  value={filters.fuelType || ''}
                  onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                  className="input text-sm"
                >
                  <option value="">Alle</option>
                  {FUEL_TYPES.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preis bis
                </label>
                <select
                  value={filters.maxPrice || ''}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                  className="input text-sm"
                >
                  <option value="">Kein Limit</option>
                  <option value="1000">1.000 €</option>
                  <option value="2000">2.000 €</option>
                  <option value="3000">3.000 €</option>
                  <option value="4000">4.000 €</option>
                  <option value="5000">5.000 €</option>
                  <option value="6000">6.000 €</option>
                  <option value="7000">7.000 €</option>
                  <option value="8000">8.000 €</option>
                  <option value="9000">9.000 €</option>
                  <option value="10000">10.000 €</option>
                  <option value="11000">11.000 €</option>
                  <option value="12000">12.000 €</option>
                  <option value="13000">13.000 €</option>
                  <option value="14000">14.000 €</option>
                  <option value="15000">15.000 €</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Baujahr ab
                </label>
                <select
                  value={filters.minYear || ''}
                  onChange={(e) => handleFilterChange('minYear', e.target.value ? Number(e.target.value) : undefined)}
                  className="input text-sm"
                >
                  <option value="">Kein Limit</option>
                  {Array.from({ length: new Date().getFullYear() - 1995 + 1 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Modell
              </label>
              <input
                type="text"
                value={filters.model || ''}
                onChange={(e) => handleFilterChange('model', e.target.value)}
                placeholder="z.B. Golf"
                className="input text-sm"
              />
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full btn-secondary text-sm"
              >
                Alle Filter löschen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
