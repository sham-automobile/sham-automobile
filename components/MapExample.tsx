'use client'

import GoogleMaps from './GoogleMaps'

// Beispiel für die Verwendung der GoogleMaps Komponente
export default function MapExample() {
  // Beispiel Google Maps Embed URL (ersetze mit deiner echten URL)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.123456789!2d9.7384!3d52.3702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzEyLjciTiA5wrA0NCcxOC4yIkU!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"

  return (
    <div className="container-custom py-8">
      <h2 className="text-2xl font-bold mb-6">Unser Standort</h2>
      <GoogleMaps 
        src={mapUrl}
        title="Sham Automobile Standort"
        className="w-full h-96"
      />
    </div>
  )
}
