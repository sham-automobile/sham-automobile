'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageAsset } from '@/types'
import { urlFor } from '@/lib/sanity'

interface ImageCarouselProps {
  images?: ImageAsset[]
  mainImage?: ImageAsset
  alt: string
}

export default function ImageCarousel({ images, mainImage, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Combine main image with additional images, with fallback for empty arrays
  const allImages = useMemo(() => {
    return mainImage ? [mainImage, ...(images || [])] : (images || [])
  }, [mainImage, images])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !allImages || allImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, allImages])

  const goToPrevious = () => {
    if (!allImages || allImages.length === 0) return
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    if (!allImages || allImages.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  if (!allImages || allImages.length === 0) {
    return (
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-500 text-lg">Kein Bild verfügbar</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden group">
        <Image
          src={allImages[currentIndex]?.asset ? urlFor(allImages[currentIndex].asset).url() : (allImages[currentIndex]?.url || '/placeholder-car.jpg')}
          alt={allImages[currentIndex]?.alt || alt}
          fill
          className="object-cover transition-opacity duration-300"
          priority={currentIndex === 0}
        />
        
        {/* Navigation Arrows */}
        {allImages && allImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {allImages && allImages.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {allImages.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {allImages && allImages.length > 1 && (
        <div className="relative">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-primary-600 ring-2 ring-primary-200'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <Image
                  src={image.asset ? urlFor(image.asset).url() : (image.url || '/placeholder-car.jpg')}
                  alt={image.alt || alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
