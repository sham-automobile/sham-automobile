import Link from 'next/link'
import { ArrowRight, Car, DollarSign } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative gradient-hero text-white overflow-hidden h-[calc(100vh-100px)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/images/img2.jpg)'
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-primary-900/30" />
      </div>
      
      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-white">Ihr zuverlässiger Partner für</span>{' '}
            <span className="text-accent-300">Gebrauchtwagen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-200 mb-8 max-w-2xl mx-auto text-balance">
            Qualität, Vertrauen und faire Preise in Langenhagen. 
            Finden Sie Ihr Traumauto oder verkaufen Sie Ihr Fahrzeug zu einem fairen Preis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kaufen" className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
              <Car className="w-5 h-5 mr-2" />
              Autos kaufen
            </Link>
            
            <Link href="/verkaufen" className="btn btn-accent px-8 py-4 text-lg font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              Auto verkaufen
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-primary-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">20+</div>
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
