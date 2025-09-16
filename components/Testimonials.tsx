import { Star } from 'lucide-react'
import { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
  showAll?: boolean
  maxItems?: number
}

export default function Testimonials({ 
  testimonials, 
  title = "Was unsere Kunden sagen",
  subtitle = "Über 500 zufriedene Kunden vertrauen auf Sham Automobile",
  showAll = false,
  maxItems = 3
}: TestimonialsProps) {
  // Filtere Testimonials basierend auf showAll und maxItems
  const displayTestimonials = showAll 
    ? testimonials 
    : testimonials.slice(0, maxItems)

  if (displayTestimonials.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card p-6 h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <blockquote className="text-primary-600 mb-4 italic flex-grow">
        "{testimonial.text}"
      </blockquote>
      
      {/* Customer Info */}
      <div className="mt-auto">
        <p className="font-semibold text-primary-900">{testimonial.name}</p>
        {testimonial.vehicle && (
          <p className="text-sm text-primary-500">{testimonial.vehicle}</p>
        )}
      </div>
    </div>
  )
}
