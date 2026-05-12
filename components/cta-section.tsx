"use client"

import { KoreLogo } from "./kore-logo"
import { ArrowRight, Check } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="py-24 px-6 lg:px-12 border-t border-[#1A1A1A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A5A8C]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <KoreLogo size="lg" className="mx-auto mb-6" />
        
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Automatiza tu gestión.
          <br />
          <span className="text-[#0A5A8C]">Empieza hoy.</span>
        </h2>
        
        <p className="text-[#6B7280] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Únete a negocios que ya optimizaron sus operaciones con Kore. 
          Sin compromisos, sin costos ocultos.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Configuración asistida",
            "30 días de prueba",
            "Soporte incluido",
            "Sin tarjeta requerida",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check size={16} className="text-[#0A5A8C]" />
              <span className="text-[#9CA3AF] text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[#0A5A8C] hover:bg-[#0A5A8C]/90 text-white px-8 py-4 text-sm font-medium transition-all duration-200 group"
          >
            Solicitar Demo Gratuita
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] hover:border-[#0A5A8C] text-white px-8 py-4 text-sm font-medium transition-all duration-200"
          >
            Contactar Ventas
          </a>
        </div>
      </div>
    </section>
  )
}
