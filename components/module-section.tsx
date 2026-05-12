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
            <Visual />
          </div>
        </div>
      </div>
    </section>
  )
}
