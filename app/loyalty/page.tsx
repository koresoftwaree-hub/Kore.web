import { ArrowLeft } from "lucide-react"
import Link from "next/link"
// Aquí importas tu visual interactivo que tenías en la landing
import { LoyaltyStampCardVisual } from "@/components/loyalty-stamp-card-visual"

export default function LoyaltyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-12 max-w-6xl mx-auto">
      
      {/* Botón de volver */}
      <Link href="/#modulos" className="inline-flex items-center text-[#6B7280] hover:text-white transition-colors mb-12">
        <ArrowLeft size={16} className="mr-2" />
        Volver al inicio
      </Link>

      {/* Hero de la página interna (Aquí va el Dibujo) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <div className="inline-block bg-[#0A5A8C]/20 text-[#0A5A8C] px-3 py-1 rounded-full text-xs font-semibold mb-4">
            Módulo Activo
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kore <span className="font-medium">Loyalty</span>
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
            Reemplaza las viejas tarjetas de cartón por una experiencia 100% digital. Tus clientes acumulan puntos directamente desde su celular, escaneando un código QR en tu local. Aumenta la retención y conoce exactamente quiénes son tus mejores compradores.
          </p>
          <button className="bg-[#0A5A8C] text-white px-8 py-3 rounded-md font-medium hover:scale-105 transition-transform">
            Quiero este módulo
          </button>
        </div>

        {/* El "Dibujo" Interactivo que sacamos de la landing principal */}
        <div className="relative flex justify-center items-center p-8">
           <div className="absolute inset-0 bg-[#0A5A8C]/10 blur-[100px] rounded-full" />
           <div className="relative z-10 w-full max-w-sm">
             <LoyaltyStampCardVisual />
           </div>
        </div>
      </div>

      <hr className="border-white/5 mb-24" />

      {/* Sección de Ejemplos / Casos de uso (Los Videos "Fake GIFs") */}
      <div>
        <h2 className="text-3xl text-white font-light mb-12 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Casos de Aplicación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Ejemplo 1 */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-2">Cafetería de Especialidad</h3>
            <p className="text-[#6B7280] text-sm mb-6">El cliente obtiene el 5to café gratis escaneando el mostrador.</p>
            {/* Aquí va tu video sin sonido (autoPlay) */}
            <div className="bg-[#1A1A1A] rounded-xl aspect-[4/3] overflow-hidden border border-white/10 relative">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/demo-cafeteria.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Ejemplo 2 */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-2">Estudio de Belleza</h3>
            <p className="text-[#6B7280] text-sm mb-6">Descuentos escalonados según la cantidad de visitas en el mes.</p>
            {/* Aquí va tu video sin sonido (autoPlay) */}
            <div className="bg-[#1A1A1A] rounded-xl aspect-[4/3] overflow-hidden border border-white/10 relative">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/demo-estudio.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}