import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity Client Configuration
export const client = createClient({
  projectId: '7cogdhza',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Optional, für schreibende Operationen
})

// Image URL Builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  // Alle Fahrzeuge abrufen
  allVehicles: `*[_type == "vehicle"] | order(publishedAt desc) {
    _id,
    title,
    slug,
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
    images,
    mainImage,
    featured,
    publishedAt,
    bodyType,
    doors,
    firstRegistration,
    inspection,
    owners,
    serviceBook,
    powerKw,
    gears,
    cylinders
  }`,

  // Einzelnes Fahrzeug nach Slug
  vehicleBySlug: `*[_type == "vehicle" && slug.current == $slug][0] {
    _id,
    title,
    slug,
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
    images,
    mainImage,
    featured,
    publishedAt,
    bodyType,
    doors,
    firstRegistration,
    inspection,
    owners,
    serviceBook,
    powerKw,
    gears,
    cylinders
  }`,

  // Featured Fahrzeuge
  featuredVehicles: `*[_type == "vehicle" && featured == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
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
    images,
    mainImage,
    featured,
    publishedAt,
    bodyType,
    doors,
    firstRegistration,
    inspection,
    owners,
    serviceBook,
    powerKw,
    gears,
    cylinders
  }`,

  // Alle verfügbaren Marken
  allMakes: `array::unique(*[_type == "vehicle"].make) | order(@ asc)`,

  // Alle verfügbaren Modelle
  allModels: `array::unique(*[_type == "vehicle"].model) | order(@ asc)`,
}

// API Functions
export async function getAllVehicles() {
  return await client.fetch(queries.allVehicles)
}

export async function getVehicleBySlug(slug: string) {
  return await client.fetch(queries.vehicleBySlug, { slug })
}

export async function getFeaturedVehicles() {
  return await client.fetch(queries.featuredVehicles)
}

export async function getAllMakes() {
  return await client.fetch(queries.allMakes)
}

export async function getAllModels() {
  return await client.fetch(queries.allModels)
}
