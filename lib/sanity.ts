import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
})

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  vehicles: `*[_type == "vehicle" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    make,
    model,
    year,
    price,
    mileage,
    transmission,
    fuelType,
    slug,
    publishedAt,
    "mainImage": images[0],
    images
  }`,
  
  vehicleBySlug: `*[_type == "vehicle" && slug.current == $slug][0] {
    _id,
    title,
    make,
    model,
    year,
    price,
    mileage,
    transmission,
    fuelType,
    power,
    color,
    description,
    slug,
    publishedAt,
    images,
    "mainImage": images[0]
  }`,
  
  featuredVehicles: `*[_type == "vehicle" && defined(slug.current) && featured == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    make,
    model,
    year,
    price,
    mileage,
    transmission,
    fuelType,
    slug,
    publishedAt,
    "mainImage": images[0]
  }`,
  
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    text,
    rating,
    vehicle
  }`,
  
  siteSettings: `*[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    contactEmail,
    contactPhone,
    contactAddress,
    openingHours,
    socialLinks
  }`
}
