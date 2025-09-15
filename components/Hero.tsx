import Link from 'next/link'
import { ArrowRight, Car, DollarSign } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Ihr zuverlässiger Partner für{' '}
            <span className="text-primary-200">Gebrauchtwagen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto text-balance">
            Qualität, Vertrauen und faire Preise in Langenhagen. 
            Finden Sie Ihr Traumauto oder verkaufen Sie Ihr Fahrzeug zu einem fairen Preis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kaufen" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Car className="w-5 h-5 mr-2" />
              Autos kaufen
            </Link>
            
            <Link href="/verkaufen" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              Auto verkaufen
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-primary-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm">Transparenz</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-6 h-6 text-white rotate-90" />
      </div>
    </section>
  )
}
