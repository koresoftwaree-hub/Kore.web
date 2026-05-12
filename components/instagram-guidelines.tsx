"use client"

import { ArrowUp, BarChart3, Zap, MessageSquare, CheckCircle2, TrendingUp } from "lucide-react"

// Story Template Components
function StoryProductUpdate() {
  return (
    <div className="w-full aspect-[9/16] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#2A2A2A] p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#0A5A8C] text-xs font-medium uppercase tracking-wider">Nueva Actualización</span>
        <div className="w-8 h-8 rounded-full bg-[#0A5A8C]/20 flex items-center justify-center">
          <Zap className="w-4 h-4 text-[#0A5A8C]" />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Dashboard 3.0
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
          Nuevo panel de control con métricas en tiempo real y visualizaciones interactivas.
        </p>
        
        <div className="bg-[#121212] rounded-lg p-4 border border-[#2A2A2A]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#0A5A8C]" />
            <span className="text-white text-sm">40% más rápido</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#0A5A8C]" />
            <span className="text-white text-sm">Nuevos widgets</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#0A5A8C]" />
            <span className="text-white text-sm">Modo oscuro mejorado</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-6">
        <div className="flex items-center justify-center gap-2 text-[#0A5A8C]">
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-medium">Desliza para más</span>
        </div>
      </div>
    </div>
  )
}

function StoryTechnicalData() {
  return (
    <div className="w-full aspect-[9/16] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#2A2A2A] p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#0A5A8C] text-xs font-medium uppercase tracking-wider">Dato Técnico</span>
        <div className="w-8 h-8 rounded-full bg-[#0A5A8C]/20 flex items-center justify-center">
          <BarChart3 className="w-4 h-4 text-[#0A5A8C]" />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="text-7xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          99.9<span className="text-[#0A5A8C]">%</span>
        </div>
        <p className="text-[#6B7280] text-sm mb-6">Tiempo de actividad garantizado</p>
        
        <div className="w-full bg-[#121212] rounded-lg p-4 border border-[#2A2A2A]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#6B7280] text-xs">Uptime</span>
            <span className="text-white text-xs font-medium">Últimos 30 días</span>
          </div>
          <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
            <div className="h-full w-[99.9%] bg-[#0A5A8C] rounded-full" />
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-6 text-center">
        <p className="text-[#6B7280] text-xs">
          Infraestructura cloud con redundancia global
        </p>
      </div>
    </div>
  )
}

function StoryInteraction() {
  return (
    <div className="w-full aspect-[9/16] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#2A2A2A] p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#0A5A8C] text-xs font-medium uppercase tracking-wider">Encuesta</span>
        <div className="w-8 h-8 rounded-full bg-[#0A5A8C]/20 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-[#0A5A8C]" />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-white text-lg font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          ¿Qué funcionalidad necesitas más?
        </h3>
        
        <div className="space-y-3">
          <button className="w-full bg-[#121212] hover:bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 text-left transition-colors group">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">Reportes automáticos</span>
              <CheckCircle2 className="w-5 h-5 text-[#0A5A8C] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
          
          <button className="w-full bg-[#121212] hover:bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 text-left transition-colors group">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">Integraciones API</span>
              <CheckCircle2 className="w-5 h-5 text-[#0A5A8C] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
          
          <button className="w-full bg-[#121212] hover:bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 text-left transition-colors group">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">App móvil nativa</span>
              <CheckCircle2 className="w-5 h-5 text-[#0A5A8C] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        </div>
      </div>
      
      <div className="mt-auto pt-6 text-center">
        <p className="text-[#6B7280] text-xs">
          Tu opinión define nuestro roadmap
        </p>
      </div>
    </div>
  )
}

// Feed Post Component
function FeedPostExample() {
  return (
    <div className="aspect-square bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#2A2A2A] p-8 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#0A5A8C]/20 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-[#0A5A8C]" />
        </div>
        <div>
          <span className="text-[#0A5A8C] text-xs font-medium uppercase tracking-wider block">Caso de Éxito</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-white text-3xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          +250% de eficiencia operativa
        </h2>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
          Empresa del sector retail optimizó sus procesos de inventario con nuestra plataforma de gestión integrada.
        </p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#121212] rounded-lg p-3 text-center border border-[#2A2A2A]">
            <div className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>45</div>
            <div className="text-[#6B7280] text-xs">Días</div>
          </div>
          <div className="bg-[#121212] rounded-lg p-3 text-center border border-[#2A2A2A]">
            <div className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>12</div>
            <div className="text-[#6B7280] text-xs">Integraciones</div>
          </div>
          <div className="bg-[#121212] rounded-lg p-3 text-center border border-[#2A2A2A]">
            <div className="text-[#0A5A8C] text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>∞</div>
            <div className="text-[#6B7280] text-xs">Escalabilidad</div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-6 flex items-center justify-between">
        <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>kore<span className="text-[#0A5A8C]">.</span></span>
        <span className="text-[#6B7280] text-xs">elcoredetugestion.com</span>
      </div>
    </div>
  )
}

export function InstagramGuidelines() {
  return (
    <div className="space-y-16">
      {/* Feed Guidelines */}
      <div>
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Feed (Publicaciones)
          </h3>
          <div className="space-y-4 text-[#E5E5E5] leading-relaxed">
            <p>
              <strong className="text-white">Composición visual:</strong> Utilizar fondos sólidos en negro (#0A0A0A o #121212) 
              con elementos gráficos minimalistas. Evitar fotografías con mucho ruido visual. 
              Preferir mockups de interfaz, gráficos de datos abstractos y visualizaciones técnicas.
            </p>
            <p>
              <strong className="text-white">Aplicación de colores:</strong> El azul técnico (#0A5A8C) se reserva exclusivamente 
              para acentos, puntos de datos y elementos que requieran atención. El blanco (#FFFFFF) para títulos y 
              jerarquía principal. Los grises (#6B7280) para texto de soporte y metadata.
            </p>
            <p>
              <strong className="text-white">Tipografía en posts:</strong> Space Grotesk para títulos impactantes y métricas destacadas. 
              Inter para textos explicativos y descripciones. Mantener alta jerarquía visual entre ambas.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeedPostExample />
          <div className="bg-[#121212] rounded-2xl border border-[#2A2A2A] p-6 flex flex-col justify-center">
            <h4 className="text-[#0A5A8C] text-sm uppercase tracking-wider mb-4">Reglas del Feed</h4>
            <ul className="space-y-3 text-[#E5E5E5] text-sm">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C] mt-2 shrink-0" />
                <span>Mantener formato cuadrado (1:1) para consistencia visual</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C] mt-2 shrink-0" />
                <span>Usar métricas y datos como protagonistas del contenido</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C] mt-2 shrink-0" />
                <span>Incluir logo "kore." con punto azul en esquina inferior</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C] mt-2 shrink-0" />
                <span>Evitar degradados, sombras excesivas o efectos 3D complejos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C] mt-2 shrink-0" />
                <span>Carruseles: máximo 5 slides, mantener coherencia visual entre todos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C] mt-2 shrink-0" />
                <span>Nunca usar emojis, stickers o elementos informales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stories Guidelines */}
      <div>
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Historias (Stories)
          </h3>
          <p className="text-[#E5E5E5] leading-relaxed">
            Las historias deben mantener el tono técnico y profesional. Usar fondos oscuros sólidos, 
            tipografía limpia y elementos interactivos minimalistas. A continuación, tres plantillas base:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-[#0A5A8C] text-sm uppercase tracking-wider mb-4">1. Actualización de Producto</h4>
            <StoryProductUpdate />
          </div>
          <div>
            <h4 className="text-[#0A5A8C] text-sm uppercase tracking-wider mb-4">2. Dato Técnico / Estadística</h4>
            <StoryTechnicalData />
          </div>
          <div>
            <h4 className="text-[#0A5A8C] text-sm uppercase tracking-wider mb-4">3. Interacción con Usuario</h4>
            <StoryInteraction />
          </div>
        </div>
      </div>
    </div>
  )
}
