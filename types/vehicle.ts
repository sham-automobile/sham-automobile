export interface Vehicle {
  _id: string
  title: string
  slug: {
    current: string
  }
  make: string
  model: string
  year: number
  price: number
  mileage: number
  transmission: 'manual' | 'automatic' | 'semi-automatic'
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid' | 'lpg' | 'cng'
  power?: number
  color?: string
  description?: string
  images: ImageAsset[]
  mainImage?: ImageAsset
  featured?: boolean
  publishedAt: string
}

export interface ImageAsset {
  url: string
  alt?: string
  width?: number
  height?: number
}

export interface VehicleFilters {
  make?: string
  model?: string
  minPrice?: number
  maxPrice?: number
  minYear?: number
  maxYear?: number
  maxMileage?: number
  transmission?: string
  fuelType?: string
}

export interface VehicleSortOption {
  value: string
  label: string
}

export const VEHICLE_SORT_OPTIONS: VehicleSortOption[] = [
  { value: 'newest', label: 'Neueste zuerst' },
  { value: 'price-asc', label: 'Preis aufsteigend' },
  { value: 'price-desc', label: 'Preis absteigend' },
  { value: 'mileage-asc', label: 'Kilometerstand aufsteigend' },
  { value: 'year-desc', label: 'Baujahr absteigend' },
]

export const TRANSMISSION_LABELS = {
  manual: 'Schaltgetriebe',
  automatic: 'Automatik',
  'semi-automatic': 'Halbautomatik',
}

export const FUEL_TYPE_LABELS = {
  petrol: 'Benzin',
  diesel: 'Diesel',
  electric: 'Elektro',
  hybrid: 'Hybrid',
  lpg: 'LPG',
  cng: 'CNG',
}
