export interface Testimonial {
  _id: string
  name: string
  text: string
  rating: number
  vehicle?: string
  featured?: boolean
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
  images?: SanityImage[]
  status: 'new' | 'contacted' | 'evaluated' | 'completed' | 'rejected'
  notes?: string
  submittedAt: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}
