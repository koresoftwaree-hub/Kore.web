"use client"

import { KoreLogo } from "./kore-logo"
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Accent gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0A5A8C]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 mb-8 border border-[#2A2A2A]">
              <div className="w-2 h-2 bg-[#0A5A8C] rounded-full animate-pulse" />
              <span className="text-[#6B7280] text-xs uppercase tracking-wider">Ecosistema de Aplicaciones</span>
            </div>
            
            <KoreLogo size="xl" className="mb-6" />
            
            <h1 className="text-white text-3xl lg:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              El <span className="text-[#0A5A8C] font-medium">core</span> de tu gestión.
              <br />
              Todo digitalizado, todo automatizado.
            </h1>
            
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-xl">
              Una suite de herramientas digitales a tu medida. No te atamos a una plataforma rígida: ofrecemos aplicaciones web separadas que se adaptan al ritmo de tu proyecto. Software seguro, rápido y enfocado en escalar tus ideas sin complicaciones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#modulos"
                className="inline-flex items-center justify-center gap-2 bg-[#0A5A8C] hover:bg-[#0A5A8C]/90 text-white px-8 py-4 text-sm font-medium transition-all duration-200 group"
              >
                Conocer Herramientas
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] hover:border-[#0A5A8C] text-white px-8 py-4 text-sm font-medium transition-all duration-200"
              >
                Solicitar Demo
              </a>
            </div>
            
            {/* Key features (Los 3 Pilares) */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1A1A1A]">
              <div className="flex flex-col gap-2">
                <Smartphone size={20} className="text-[#0A5A8C]" />
                <span className="text-white text-sm font-medium">Digitalizado</span>
                <span className="text-[#6B7280] text-xs leading-relaxed">Todos tus datos al alcance de tu mano</span>
              </div>
              <div className="flex flex-col gap-2">
                <Zap size={20} className="text-[#0A5A8C]" />
                <span className="text-white text-sm font-medium">Automatizado</span>
                <span className="text-[#6B7280] text-xs leading-relaxed">Procesos que funcionan solos, sin intervención</span>
              </div>
              <div className="flex flex-col gap-2">
                <Shield size={20} className="text-[#0A5A8C]" />
                <span className="text-white text-sm font-medium">Seguro</span>
                <span className="text-[#6B7280] text-xs leading-relaxed">Tus datos siempre protegidos en la nube</span>
              </div>
            </div>
          </div>
          
          {/* Visual element (Gráfico de la derecha) */}
          <div className="relative mt-12 lg:mt-0 flex justify-center">
            {/* Agregué scale-[0.65] para celulares, md:scale-90 para tablets, lg:scale-100 para PC */}
            <div className="relative w-full aspect-square max-w-lg mx-auto scale-[0.65] md:scale-90 lg:scale-100">
              
              {/* Central hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#0A5A8C] flex items-center justify-center shadow-[0_0_30px_rgba(10,90,140,0.3)] z-20">
                  <span className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>kore.</span>
                </div>
              </div>
              
              {/* Orbiting modules (Ahora son 5, separados por 72 grados) */}
              {[
                { name: "Loyalty", angle: -90 }, // Arriba
                { name: "Control", angle: -18 }, // Derecha arriba
                { name: "Booking", angle: 54 },  // Derecha abajo
                { name: "Web", angle: 126 },     // Izquierda abajo
                { name: "Link", angle: 198 },    // Izquierda arriba
              ].map((module, i) => {
                const radius = 160
                const x = Math.cos((module.angle * Math.PI) / 180) * radius
                const y = Math.sin((module.angle * Math.PI) / 180) * radius
                return (
                  <div
                    key={module.name}
                    className="absolute w-20 h-20 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center transition-all hover:border-[#0A5A8C] hover:bg-[#121212] z-10"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                  >
                    <span className="text-white text-xs font-medium">{module.name}</span>
                  </div>
                )
              })}
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                {[-90, -18, 54, 126, 198].map((angle, i) => {
                  const x = Math.cos((angle * Math.PI) / 180) * 120 + 200
                  const y = Math.sin((angle * Math.PI) / 180) * 120 + 200
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="#0A5A8C"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.4"
                    />
                  )
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
