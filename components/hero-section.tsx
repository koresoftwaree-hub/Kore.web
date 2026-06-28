"use client"

import { KoreLogo } from "./kore-logo"
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react"
import { motion } from "motion/react"
import { LightRays } from "@/components/ui/light-rays" 

const easeOut = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* Light Rays Background - Aureola Azul detrás del contenido */}
      <div className="absolute inset-0 z-0">
        <LightRays 
          className="opacity-50" 
          color="#0A5A8C" 
        />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 relative z-10 flex flex-col items-center text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center w-full">
          
          {/* Logo (Ahora es el primer elemento, sin la píldora arriba) */}
          <motion.div variants={item}>
            <KoreLogo size="xl" className="mb-6" />
          </motion.div>

          {/* Título */}
          <motion.h1 
            variants={item} 
            className="text-white text-4xl lg:text-5xl font-light leading-tight mb-6" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            El <span className="text-[#0A5A8C] font-medium">core</span> de tu gestión.
            <br />
            Todo digitalizado, todo automatizado.
          </motion.h1>

          {/* Descripción restaurada */}
          <motion.p variants={item} className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Una suite de herramientas digitales a tu medida. No te atamos a una plataforma rígida: ofrecemos aplicaciones web separadas que se adaptan al ritmo de tu proyecto. Software seguro, rápido y enfocado en escalar tus ideas sin complicaciones.
          </motion.p>

          {/* Botones */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full">
            <a
              href="#modulos"
              className="inline-flex items-center justify-center gap-2 bg-[#0A5A8C] hover:bg-[#0A5A8C] text-white px-8 py-4 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_28px_rgba(10,90,140,0.5)] group"
            >
              Conocer Herramientas
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#0A5A8C] bg-white/[0.02] hover:bg-white/[0.04] text-white px-8 py-4 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105"
            >
              Solicitar Demo
            </a>
          </motion.div>

          {/* Key features (Los 3 Pilares) */}
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/5 w-full max-w-3xl mx-auto">
            {[
              { Icon: Smartphone, title: "Digitalizado", desc: "Todos tus datos al alcance de tu mano" },
              { Icon: Zap, title: "Automatizado", desc: "Procesos que funcionan solos, sin intervención" },
              { Icon: Shield, title: "Seguro", desc: "Tus datos siempre protegidos en la nube" },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-3 group cursor-default transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-[#0A5A8C]/30 transition-colors duration-300">
                  <Icon size={24} className="text-[#0A5A8C] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-white text-sm font-medium">{title}</span>
                <span className="text-[#6B7280] text-xs leading-relaxed max-w-[200px]">{desc}</span>
              </div>
            ))}
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  )
}