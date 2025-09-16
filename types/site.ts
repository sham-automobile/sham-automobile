export interface SiteSettings {
  _id: string
  title: string
  description: string
  contactEmail: string
  contactPhone: string
  contactAddress: string
  openingHours: OpeningHours[]
  socialLinks: SocialLinks
}

export interface OpeningHours {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  hours: string
}

export interface SocialLinks {
  facebook?: string
  instagram?: string
  google?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  // Honeypot field (should always be empty)
  website?: string
}

export interface SellerFormData {
  name: string
  email: string
  phone: string
  make: string
  model: string
  year: number
  mileage: number
  description?: string
  images?: File[]
  // Honeypot field (should always be empty)
  website?: string
}

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}
