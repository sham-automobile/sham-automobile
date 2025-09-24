import { ImageAsset } from './vehicle'

export interface Testimonial {
  _id: string
  name: string
  text: string
  rating: number
  vehicle?: string
  featured?: boolean
  isExternal?: boolean
  externalUrl?: string
}

export interface SellerLead {
  _id: string
  name: string
  email: string
  phone: string
  make: string
  model: string
  year: number
  mileage: number
  description?: string
  images?: ImageAsset[]
  status: 'new' | 'contacted' | 'evaluated' | 'completed' | 'rejected'
  notes?: string
  submittedAt: string
}
