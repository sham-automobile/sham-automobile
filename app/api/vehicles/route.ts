import { NextResponse } from 'next/server'
import { getAllVehiclesUncached } from '@/lib/sanity'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    
    // Immer alle Fahrzeuge laden (ohne Cache)
    const allVehicles = await getAllVehiclesUncached()
    
    if (featured === 'true') {
      // Filtere nur die empfohlenen Fahrzeuge
      const featuredVehicles = allVehicles.filter(vehicle => vehicle.featured === true)
      return NextResponse.json(featuredVehicles)
    } else {
      return NextResponse.json(allVehicles)
    }
  } catch (error) {
    console.error('Error fetching vehicles:', error)
    return NextResponse.json([])
  }
}
