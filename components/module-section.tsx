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
              
              /* NUESTRO PANEL ESTATICO DE LOYALTY */
              <div className="border border-[#2A2A2A] bg-[#121212] p-6 rounded-lg w-full max-w-[450px] shadow-lg flex flex-col gap-6">
                
                {/* Cabecera */}
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-mono text-[#6B7280] uppercase tracking-wider">Panel de Fidelización</h4>
                  <span className="flex items-center gap-1.5 text-[#0A5A8C] text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A5A8C]"></span>
                    En vivo
                  </span>
                </div>

                {/* Zona de Tacitas (6 de 10) */}
                <div className="bg-[#0A0A0A] p-5 rounded-md border border-[#2A2A2A] flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-body">Tarjeta del Cliente</span>
                    <span className="text-[#0A5A8C] text-sm font-bold font-mono">6/10</span>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-y-4 gap-x-2">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={i < 6 ? "text-[#0A5A8C]" : "text-[#2A2A2A]"}>
                          <path d="M4 8H17C17.5 8 18 8.5 18 9V17C18 18.5 16.5 20 15 20H6C4.5 20 3 18.5 3 17V9C3 8.5 3.5 8 4 8Z" 
                                className={i < 6 ? "fill-current" : "stroke-current fill-transparent"} strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M18 10C19.5 10 21 11.5 21 13C21 14.5 19.5 16 18 16" 
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lista de Clientes con Divisores Blancos Sutiles */}
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

                  {/* LÍNEA DIVISORA */}
                  <hr className="border-t border-white/10" />

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
                    <span className="text-[#0A5A8C] text-xs font-medium mt-1">10% Descuento</span>
                  </div>
                  <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 rounded-md flex flex-col items-center justify-center text-center">
                    <span className="text-white text-sm font-bold">1000 pts</span>
                    <span className="text-[#0A5A8C] text-xs font-medium mt-1">1 Café Gratis</span>
                  </div>
                </div>
              </div>
              
            ) : (
              <Visual />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
