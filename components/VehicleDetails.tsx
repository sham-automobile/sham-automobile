import { Vehicle, TRANSMISSION_LABELS, FUEL_TYPE_LABELS, BODY_TYPE_LABELS } from '@/types'

interface VehicleDetailsProps {
  vehicle: Vehicle
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('de-DE').format(mileage) + ' km'
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Nicht angegeben'
    return new Date(dateString).toLocaleDateString('de-DE')
  }

  return (
    <div className="space-y-8">
      {/* Basis Daten */}
      <div className="card p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Basis Daten</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Fahrzeugtyp</h4>
            <p className="text-gray-600">
              {vehicle.bodyType ? BODY_TYPE_LABELS[vehicle.bodyType] : 'Nicht angegeben'}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Farbe</h4>
            <p className="text-gray-600">{vehicle.color || 'Nicht angegeben'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Anzahl Türen</h4>
            <p className="text-gray-600">{vehicle.doors || 'Nicht angegeben'}</p>
          </div>
        </div>
      </div>

      {/* Fahrzeughistorie */}
      <div className="card p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Fahrzeughistorie</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Kilometerstand</h4>
            <p className="text-gray-600">{formatMileage(vehicle.mileage)}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Erstzulassung</h4>
            <p className="text-gray-600">{formatDate(vehicle.firstRegistration)}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Baujahr</h4>
            <p className="text-gray-600">{vehicle.year}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">TÜV/Hauptuntersuchung</h4>
            <p className="text-gray-600">{formatDate(vehicle.inspection)}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Anzahl Vorbesitzer</h4>
            <p className="text-gray-600">{vehicle.owners || 'Nicht angegeben'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Serviceheft</h4>
            <p className="text-gray-600">
              {vehicle.serviceBook === true ? 'Vorhanden' : vehicle.serviceBook === false ? 'Nicht vorhanden' : 'Nicht angegeben'}
            </p>
          </div>
        </div>
      </div>

      {/* Technische Daten */}
      <div className="card p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Technische Daten</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Leistung (kW)</h4>
            <p className="text-gray-600">{vehicle.powerKw || 'Nicht angegeben'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Leistung (PS)</h4>
            <p className="text-gray-600">{vehicle.power || 'Nicht angegeben'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Getriebe</h4>
            <p className="text-gray-600">{TRANSMISSION_LABELS[vehicle.transmission]}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Anzahl Gänge</h4>
            <p className="text-gray-600">{vehicle.gears || 'Nicht angegeben'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Anzahl Zylinder</h4>
            <p className="text-gray-600">{vehicle.cylinders || 'Nicht angegeben'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Kraftstoff</h4>
            <p className="text-gray-600">{FUEL_TYPE_LABELS[vehicle.fuelType]}</p>
          </div>
        </div>
      </div>

      {/* Beschreibung */}
      {vehicle.description && (
        <div className="card p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Beschreibung</h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {vehicle.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
