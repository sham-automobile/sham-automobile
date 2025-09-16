import { NextResponse } from 'next/server'
import { getAllVehicles, getFeaturedVehicles } from '@/lib/sanity'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    
    let vehicles
    
    if (featured === 'true') {
      vehicles = await getFeaturedVehicles()
    } else {
      vehicles = await getAllVehicles()
    }
    
    return NextResponse.json(vehicles)
  } catch (error) {
    console.error('Error fetching vehicles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch vehicles' },
      { status: 500 }
    )
  }
}
