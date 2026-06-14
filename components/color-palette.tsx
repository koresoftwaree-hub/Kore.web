"use client"

const colors = [
  {
    name: "Deep Matte Black",
    hex: "#0A0A0A",
    role: "Color Principal / Fondo",
    description: "Superficie principal, fondos, base de diseño"
  },
  {
    name: "Soft Black",
    hex: "#121212",
    role: "Color Secundario",
    description: "Tarjetas, contenedores, capas elevadas"
  },
  {
    name: "Chalk White",
    hex: "#FFFFFF",
    role: "Texto Principal",
    description: "Títulos, texto jerárquico, elementos de contraste"
  },
  {
    name: "Technical Cold-Blue",
    hex: "#0A5A8C",
    role: "Color de Acento",
    description: "CTAs, botones, puntos de datos, conexiones, elementos de enfoque"
  },
  {
    name: "Muted Gray",
    hex: "#6B7280",
    role: "Texto Secundario",
    description: "Texto de soporte, descripciones, metadata"
  }
]

export function ColorPalette() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {colors.map((color) => (
        <div key={color.hex} className="group">
          <div 
            className="aspect-square rounded-lg mb-4 border border-[#2A2A2A] transition-transform group-hover:scale-105"
            style={{ backgroundColor: color.hex }}
          />
          <h4 className="text-white font-medium text-sm mb-1">{color.name}</h4>
          <p className="text-[#0A5A8C] font-mono text-sm mb-2">{color.hex}</p>
          <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-1">{color.role}</p>
          <p className="text-[#6B7280] text-xs leading-relaxed">{color.description}</p>
        </div>
      ))}
    </div>
  )
}
