"use client"

import { Heart, DollarSign, Package, BarChart3, ShoppingCart, Calendar } from "lucide-react"

const modules = [
  {
    id: "loyalty",
    name: "Loyalty",
    icon: Heart,
    description: "Retención automatizada",
    color: "#0A5A8C",
  },
  {
    id: "finance",
    name: "Finance",
    icon: DollarSign,
    description: "Control financiero total",
    color: "#0A5A8C",
  },
  {
    id: "inventory",
    name: "Inventory",
    icon: Package,
    description: "Stock en tiempo real",
    color: "#0A5A8C",
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: BarChart3,
    description: "Métricas que importan",
    color: "#0A5A8C",
  },
  {
    id: "pos",
    name: "POS",
    icon: ShoppingCart,
    description: "Ventas integradas",
    color: "#0A5A8C",
  },
  {
    id: "booking",
    name: "Booking",
    icon: Calendar,
    description: "Agenda inteligente",
    color: "#0A5A8C",
  },
]

export function ModulesOverview() {
  return (
    <section id="modulos" className="py-24 px-6 lg:px-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0A5A8C] text-sm uppercase tracking-widest block mb-4">Ecosistema Modular</span>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Seis módulos.<br />Una plataforma.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            Cada módulo funciona de forma independiente, pero juntos crean un sistema de gestión 
            completamente integrado. Activa solo lo que tu negocio necesita.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {modules.map((module) => (
            <a
              key={module.id}
              href={`#${module.id}`}
              className="group bg-[#121212] border border-[#1A1A1A] p-6 transition-all duration-300 hover:border-[#0A5A8C] hover:bg-[#0A0A0A]"
            >
              <module.icon 
                size={32} 
                className="text-[#6B7280] group-hover:text-[#0A5A8C] transition-colors mb-4" 
              />
              <h3 className="text-white text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {module.name}
              </h3>
              <p className="text-[#6B7280] text-xs">
                {module.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
