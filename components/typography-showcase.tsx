"use client"

export function TypographyShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Headings Font */}
      <div className="space-y-6">
        <div className="border-b border-[#2A2A2A] pb-4">
          <h4 className="text-[#0A5A8C] text-sm uppercase tracking-wider mb-2">Tipografía de Títulos</h4>
          <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Space Grotesk</h3>
          <p className="text-[#6B7280] text-sm mt-2">Google Fonts • Sans-serif geométrica</p>
        </div>
        
        <div className="space-y-4">
          <div style={{ fontFamily: 'var(--font-heading)' }}>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">Display / 72px / Bold</p>
            <h1 className="text-white text-6xl font-bold tracking-tight">kore.</h1>
          </div>
          
          <div style={{ fontFamily: 'var(--font-heading)' }}>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">H1 / 48px / Bold</p>
            <h1 className="text-white text-5xl font-bold">El Core de tu Gestión</h1>
          </div>
          
          <div style={{ fontFamily: 'var(--font-heading)' }}>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">H2 / 36px / Semibold</p>
            <h2 className="text-white text-4xl font-semibold">Software Inteligente</h2>
          </div>
          
          <div style={{ fontFamily: 'var(--font-heading)' }}>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">H3 / 24px / Medium</p>
            <h3 className="text-white text-2xl font-medium">Soluciones Digitales</h3>
          </div>
        </div>
      </div>

      {/* Body Font */}
      <div className="space-y-6">
        <div className="border-b border-[#2A2A2A] pb-4">
          <h4 className="text-[#0A5A8C] text-sm uppercase tracking-wider mb-2">Tipografía de Cuerpo</h4>
          <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-body)' }}>Inter</h3>
          <p className="text-[#6B7280] text-sm mt-2">Google Fonts • Optimizada para pantallas</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">Body Large / 18px / Regular</p>
            <p className="text-white text-lg leading-relaxed">
              Plataforma de gestión empresarial diseñada para optimizar tus procesos y maximizar la eficiencia operativa.
            </p>
          </div>
          
          <div>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">Body / 16px / Regular</p>
            <p className="text-[#E5E5E5] text-base leading-relaxed">
              Conecta todos tus sistemas en una sola plataforma. Automatiza flujos de trabajo, 
              analiza datos en tiempo real y toma decisiones basadas en información precisa.
            </p>
          </div>
          
          <div>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">Body Small / 14px / Regular</p>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Nuestra arquitectura modular permite escalar según las necesidades de tu negocio, 
              con integraciones nativas y APIs robustas para conectar con tu ecosistema existente.
            </p>
          </div>
          
          <div>
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">Caption / 12px / Medium</p>
            <p className="text-[#6B7280] text-xs font-medium uppercase tracking-wider">
              Última actualización: Mayo 2026 • Versión 3.2.1
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
