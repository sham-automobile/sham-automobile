'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Upload, CheckCircle, Car } from 'lucide-react'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { SellerFormData } from '@/types'

const MAKES = [
  'Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Opel', 'Ford', 
  'Renault', 'Peugeot', 'Citroën', 'Skoda', 'Seat', 'Fiat', 
  'Toyota', 'Honda', 'Nissan', 'Hyundai', 'Kia', 'Mazda'
]

export default function SellerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SellerFormData>()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    if (files.length > 0) {
      setUploadedImages(prev => [...prev, ...files].slice(0, 10)) // Max 10 images
      toast.success(`${files.length} Bild(er) hinzugefügt`)
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: SellerFormData) => {
    setIsSubmitting(true)
    
    try {
      // In a real implementation, you would send this to your API
      const formData = {
        ...data,
        images: uploadedImages,
        submittedAt: new Date().toISOString(),
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Anfrage erfolgreich gesendet!')
      setIsSubmitted(true)
      reset()
      setUploadedImages([])
    } catch (error) {
      toast.error('Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Anfrage gesendet!
        </h3>
        <p className="text-gray-600 mb-6">
          Vielen Dank für Ihre Verkaufsanfrage. Wir werden Ihr Fahrzeug bewerten und uns 
          innerhalb von 24 Stunden bei Ihnen melden.
        </p>
        <div className="bg-primary-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-primary-900 mb-2">Nächste Schritte:</h4>
          <ul className="text-sm text-primary-800 space-y-1">
            <li>• Wir bewerten Ihr Fahrzeug anhand der Angaben</li>
            <li>• Terminvereinbarung für eine Besichtigung</li>
            <li>• Faire Preisbewertung vor Ort</li>
            <li>• Unverbindliches Angebot</li>
          </ul>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Weitere Anfrage senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Car className="w-8 h-8 text-primary-600" />
        <h3 className="text-2xl font-semibold text-gray-900">
          Auto verkaufen - Kostenlose Bewertung
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name ist erforderlich' })}
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Ihr vollständiger Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'E-Mail ist erforderlich',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ungültige E-Mail-Adresse'
              }
            })}
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Telefonnummer ist erforderlich' })}
          className={`input ${errors.phone ? 'border-red-500' : ''}`}
          placeholder="+49 123 456789"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">
            Marke *
          </label>
          <select
            id="make"
            {...register('make', { required: 'Marke ist erforderlich' })}
            className={`input ${errors.make ? 'border-red-500' : ''}`}
          >
            <option value="">Marke wählen</option>
            {MAKES.map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
          {errors.make && (
            <p className="mt-1 text-sm text-red-600">{errors.make.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
            Modell *
          </label>
          <input
            type="text"
            id="model"
            {...register('model', { required: 'Modell ist erforderlich' })}
            className={`input ${errors.model ? 'border-red-500' : ''}`}
            placeholder="z.B. Golf, A4, 3er"
          />
          {errors.model && (
            <p className="mt-1 text-sm text-red-600">{errors.model.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
            Baujahr *
          </label>
          <select
            id="year"
            {...register('year', { 
              required: 'Baujahr ist erforderlich',
              valueAsNumber: true
            })}
            className={`input ${errors.year ? 'border-red-500' : ''}`}
          >
            <option value="">Baujahr wählen</option>
            {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          {errors.year && (
            <p className="mt-1 text-sm text-red-600">{errors.year.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-2">
            Kilometerstand *
          </label>
          <input
            type="number"
            id="mileage"
            {...register('mileage', { 
              required: 'Kilometerstand ist erforderlich',
              valueAsNumber: true,
              min: { value: 0, message: 'Kilometerstand muss positiv sein' }
            })}
            className={`input ${errors.mileage ? 'border-red-500' : ''}`}
            placeholder="z.B. 150000"
          />
          {errors.mileage && (
            <p className="mt-1 text-sm text-red-600">{errors.mileage.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Beschreibung
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description')}
          className="textarea"
          placeholder="Beschreiben Sie den Zustand Ihres Fahrzeugs, besondere Ausstattung, Unfallschäden, etc."
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bilder hochladen (max. 10)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-2">
            Ziehen Sie Bilder hierher oder klicken Sie zum Auswählen
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="btn-secondary cursor-pointer"
          >
            Bilder auswählen
          </label>
        </div>
        
        {uploadedImages.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              Hochgeladene Bilder ({uploadedImages.length}/10):
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {uploadedImages.map((file, index) => (
                <div key={index} className="relative">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Upload ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-20 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Wird gesendet...</span>
            </>
          ) : (
            <>
              <Car className="w-5 h-5" />
              <span>Kostenlose Bewertung anfordern</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-6 bg-primary-50 p-4 rounded-lg">
        <h4 className="font-semibold text-primary-900 mb-2">Warum Sham Automobile?</h4>
        <ul className="text-sm text-primary-800 space-y-1">
          <li>• Kostenlose und unverbindliche Bewertung</li>
          <li>• Faire Preise basierend auf aktuellen Marktwerten</li>
          <li>• Schnelle Abwicklung und sofortige Zahlung</li>
          <li>• Über 15 Jahre Erfahrung im Gebrauchtwagenhandel</li>
        </ul>
      </div>
    </form>
  )
}
