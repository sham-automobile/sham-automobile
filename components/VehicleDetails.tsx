import { Vehicle, TRANSMISSION_LABELS, FUEL_TYPE_LABELS, BODY_TYPE_LABELS } from '@/types'

interface VehicleDetailsProps {
  vehicle: Vehicle
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('de-DE').format(mileage) + ' km'
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleDateString('de-DE')
  }

  return (
    <div className="space-y-8">
      {/* Basis Daten */}
      <div className="card p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Basis Daten</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Fahrzeugtyp</span>
            <span className="font-semibold text-gray-900">
              {vehicle.bodyType ? BODY_TYPE_LABELS[vehicle.bodyType] : '-'}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Farbe</span>
            <span className="font-semibold text-gray-900">{vehicle.color || '-'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Anzahl Türen</span>
            <span className="font-semibold text-gray-900">{vehicle.doors || '-'}</span>
          </div>
        </div>
      </div>

      {/* Fahrzeughistorie */}
      <div className="card p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Fahrzeughistorie</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Kilometerstand</span>
            <span className="font-semibold text-gray-900">{formatMileage(vehicle.mileage)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Erstzulassung</span>
            <span className="font-semibold text-gray-900">{formatDate(vehicle.firstRegistration)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Baujahr</span>
            <span className="font-semibold text-gray-900">{vehicle.year}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">TÜV/Hauptuntersuchung</span>
            <span className="font-semibold text-gray-900">{formatDate(vehicle.inspection)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Anzahl Vorbesitzer</span>
            <span className="font-semibold text-gray-900">{vehicle.owners || '-'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Serviceheft</span>
            <span className="font-semibold text-gray-900">
              {vehicle.serviceBook === true ? 'Vorhanden' : vehicle.serviceBook === false ? 'Nicht vorhanden' : '-'}
            </span>
          </div>
        </div>
      </div>

      {/* Technische Daten */}
      <div className="card p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Technische Daten</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Leistung (kW)</span>
            <span className="font-semibold text-gray-900">{vehicle.powerKw || '-'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Leistung (PS)</span>
            <span className="font-semibold text-gray-900">{vehicle.power || '-'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Getriebe</span>
            <span className="font-semibold text-gray-900">{TRANSMISSION_LABELS[vehicle.transmission]}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Anzahl Gänge</span>
            <span className="font-semibold text-gray-900">{vehicle.gears || '-'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Anzahl Zylinder</span>
            <span className="font-semibold text-gray-900">{vehicle.cylinders || '-'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Kraftstoff</span>
            <span className="font-semibold text-gray-900">{FUEL_TYPE_LABELS[vehicle.fuelType]}</span>
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
