'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { ContactFormData } from '@/types'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // In a real implementation, you would send this to your API
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Nachricht erfolgreich gesendet!')
      setIsSubmitted(true)
      reset()
    } catch (error) {
      toast.error('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Nachricht gesendet!
        </h3>
        <p className="text-gray-600 mb-6">
          Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Neue Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Kontaktieren Sie uns
      </h3>
      
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
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="input"
          placeholder="+49 123 456789"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Betreff *
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject', { required: 'Betreff ist erforderlich' })}
          className={`input ${errors.subject ? 'border-red-500' : ''}`}
          placeholder="Worum geht es?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Nachricht ist erforderlich' })}
          className={`textarea ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
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
              <Send className="w-5 h-5" />
              <span>Nachricht senden</span>
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center">
        Mit dem Absenden stimmen Sie zu, dass Ihre Daten zur Bearbeitung Ihrer Anfrage verwendet werden.
      </p>
    </form>
  )
}
