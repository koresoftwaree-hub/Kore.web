"use client"

import { Heart, LayoutDashboard, Calendar, Globe, Share2 } from "lucide-react"

const tools = [
  {
    name: "Loyalty",
    description: "Retención automatizada y fidelización real.",
    icon: Heart,
    href: "#loyalty",
  },
  {
    name: "Control",
    description: "Finanzas, stock y métricas en un solo lugar.",
    icon: LayoutDashboard,
    href: "#finance",
  },
  {
    name: "Booking",
    description: "Agenda inteligente y gestión de turnos.",
    icon: Calendar,
    href: "#booking",
  },
  {
    name: "Web",
    description: "Tu identidad digital y presencia en la nube.",
    icon: Globe,
    href: "#web",
  },
  {
    name: "Link",
    description: "Conectá todas tus redes en un solo punto.",
    icon: Share2,
    href: "#link",
  },
]

export function ModulesOverview() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-[#0A5A8C] text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
            Automatización Digital
          </span>
          <h2 className="text-white text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            Tu proyecto en <span className="text-[#0A5A8C]">piloto automático.</span>
          </h2>
          <p className="text-[#6B7280] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Aplicaciones web enfocadas en eliminar las tareas repetitivas y optimizar tus procesos. 
            Ganá horas libres todos los días, evitá errores manuales y tomá el control de tus datos 
            en tiempo real desde cualquier dispositivo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              className="group p-8 bg-[#121212] border border-[#1A1A1A] hover:border-[#0A5A8C]/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-6 group-hover:bg-[#0A5A8C]/10 group-hover:border-[#0A5A8C]/30 transition-all duration-300">
                <tool.icon size={24} className="text-[#6B7280] group-hover:text-[#0A5A8C]" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2 font-heading tracking-wide">
                kore.<span className="text-[#0A5A8C]">{tool.name}</span>
              </h3>
              <p className="text-[#6B7280] text-xs leading-relaxed">
                {tool.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
