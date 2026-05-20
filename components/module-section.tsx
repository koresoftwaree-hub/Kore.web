"use client"

import { Check, Heart, DollarSign, Package, BarChart3, ShoppingCart, Calendar } from "lucide-react"
import { 
  LoyaltyVisual, 
  FinanceVisual, 
  InventoryVisual, 
  AnalyticsVisual, 
  POSVisual, 
  BookingVisual 
} from "@/components/module-visuals"

const iconMap = {
  heart: Heart,
  dollarSign: DollarSign,
  package: Package,
  barChart: BarChart3,
  shoppingCart: ShoppingCart,
  calendar: Calendar,
} as const

const visualMap = {
  loyalty: LoyaltyVisual,
  finance: FinanceVisual,
  inventory: InventoryVisual,
  analytics: AnalyticsVisual,
  pos: POSVisual,
  booking: BookingVisual,
} as const

type IconName = keyof typeof iconMap

interface Feature {
  title: string
  description: string
}

interface ModuleSectionProps {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  features: Feature[]
  iconName: IconName
  visualType: "loyalty" | "finance" | "inventory" | "analytics" | "pos" | "booking"
  reversed?: boolean
}

export function ModuleSection({
  id,
  number,
  name,
  tagline,
  description,
  features,
  iconName,
  visualType,
  reversed = false,
}: ModuleSectionProps) {
  const Icon = iconMap[iconName]
  const Visual = visualMap[visualType]
  
  return (
    <section 
      id={id} 
      className="py-24 px-6 lg:px-12 border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={reversed ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#0A5A8C] text-sm font-mono">{number}</span>
              <div className="h-px bg-[#2A2A2A] flex-1 max-w-12" />
              <div className="w-10 h-10 bg-[#0A5A8C]/10 border border-[#0A5A8C]/30 flex items-center justify-center">
                <Icon size={20} className="text-[#0A5A8C]" />
              </div>
            </div>
            
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Kore <span className="text-[#0A5A8C]">{name}</span>
            </h2>
            
            <p className="text-[#6B7280] text-xl mb-6">{tagline}</p>
            
            <p className="text-[#9CA3AF] leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-5 h-5 bg-[#0A5A8C]/10 border border-[#0A5A8C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#0A5A8C]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">{feature.title}</h4>
                    <p className="text-[#6B7280] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual */}
          <div className={reversed ? 'lg:order-1' : ''}>
            {visualType === 'loyalty' ? (
              <>
                {/* Estilos inyectados de forma segura para la animación del humito */}
                <style>{`
                  @keyframes safe-steam {
                    0% { transform: translateY(0); opacity: 0; }
                    20% { opacity: 0.7; }
                    100% { transform: translateY(-15px); opacity: 0; }
                  }
                  .animate-safe-steam {
                    animation: safe-steam 2.5s ease-out infinite;
                  }
                  .steam-delay-1 { animation-delay: 0s; }
                  .steam-delay-2 { animation-delay: 0.5s; }
                  .steam-delay-3 { animation-delay: 1s; }
                `}</style>

                {/* PANEL ESTATICO DE LOYALTY (Desplazado a la izquierda con lg:-ml-12) */}
                <div className="border border-[#2A2A2A] bg-[#121212] p-6 rounded-lg w-full max-w-[450px] shadow-lg flex flex-col gap-5 lg:-ml-12 relative z-10">
                  
                  {/* Cabecera */}
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-mono text-[#6B7280] uppercase tracking-wider">Tarjeta de Fidelización</h4>
                    <span className="flex items-center gap-1.5 text-[#0A5A8C] text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C] animate-pulse"></span>
                      En vivo
                    </span>
                  </div>

                  {/* Zona de Tacitas Beki (6 llenas, 4 vacías) */}
                  <div className="bg-[#0A0A0A] p-5 rounded-md border border-[#2A2A2A] flex flex-col gap-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[#6B7280] text-xs font-mono uppercase tracking-wider">Progreso Cliente</span>
                      <span className="text-[#0A5A8C] text-xs font-bold font-mono border border-[#0A5A8C]/30 bg-[#0A5A8C]/10 px-2 py-0.5 rounded">6/10</span>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-y-5 gap-x-2 justify-items-center mt-2">
                      {[...Array(10)].map((_, i) => {
                        const isFilled = i < 6;
                        // Variamos un poco el delay del humo para que no suban todos iguales
                        const delayClass = `steam-delay-${(i % 3) + 1}`;
                        
                        return (
                          <div key={i} className="flex justify-center items-center">
                            <svg viewBox="0 0 100 100" className={`w-9 h-9 ${isFilled ? 'scale-110' : 'scale-100'}`}>
                              {/* Borde de la taza */}
                              <path 
                                d="M20,35 H80 V75 Q80,90 65,90 H35 Q20,90 20,75 Z" 
                                fill="none" 
                                stroke={isFilled ? "#0A5A8C" : "#2A2A2A"} 
                                strokeWidth="5" 
                              />
                              {/* Relleno de la taza */}
                              {isFilled && (
                                <path 
                                  d="M24,39 H76 V73 Q76,86 64,86 H36 Q24,86 24,73 Z" 
                                  fill="#0A5A8C" 
                                />
                              )}
                              {/* Asa de la taza */}
                              <path 
                                d="M80,45 Q95,45 95,60 T80,75" 
                                fill="none" 
                                stroke={isFilled ? "#0A5A8C" : "#2A2A2A"} 
                                strokeWidth="6" 
                                strokeLinecap="round" 
                              />
                              {/* Humito Animado (solo si está llena) */}
                              {isFilled && (
                                <g className={`animate-safe-steam ${delayClass}`}>
                                  <path d="M38,30 V12 M50,32 V8 M62,30 V16" stroke="#0A5A8C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                                </g>
                              )}
                            </svg>
                          </div>
                        )
                      })}
                    </div>
                    <p className="text-[#6B7280] text-[10px] text-center mt-3 uppercase tracking-wider">Completa 10 tazas y lleva tu bebida gratis</p>
                  </div>

                  {/* LÍNEA DIVISORA SUPERIOR (Separando tazas de clientes) */}
                  <hr className="border-t border-[#2A2A2A] mt-1 mb-1" />

                  {/* Lista de Clientes */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2A2A2A]">
                          <span className="text-white font-mono text-xs">MG</span>
                        </div>
                        <span className="text-white text-sm font-medium">María García</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#0A5A8C] text-sm font-medium">1240 pts</span>
                        <span className="px-2 py-0.5 border border-[#0A5A8C] text-[#0A5A8C] rounded-full text-[10px] font-mono">VIP</span>
                      </div>
                    </div>

                    {/* LÍNEA DIVISORA ENTRE CLIENTES */}
                    <hr className="border-t border-[#2A2A2A] opacity-50" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2A2A2A]">
                          <span className="text-[#6B7280] font-mono text-xs">CL</span>
                        </div>
                        <span className="text-[#6B7280] text-sm font-medium">Carlos López</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#6B7280] text-sm font-medium">890 pts</span>
                        <span className="px-2 py-0.5 border border-[#2A2A2A] text-[#6B7280] rounded-full text-[10px] font-mono">Gold</span>
                      </div>
                    </div>
                  </div>

                  {/* Recuadros de Recompensas */}
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 rounded-md flex flex-col items-center justify-center text-center">
                      <span className="text-white text-sm font-bold">100 pts</span>
                      <span className="text-[#0A5A8C] text-[11px] font-mono mt-1 uppercase tracking-wider">10% Descuento</span>
                    </div>
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 rounded-md flex flex-col items-center justify-center text-center">
                      <span className="text-white text-sm font-bold">1000 pts</span>
                      <span className="text-[#0A5A8C] text-[11px] font-mono mt-1 uppercase tracking-wider">1 Café Gratis</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Visual />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
