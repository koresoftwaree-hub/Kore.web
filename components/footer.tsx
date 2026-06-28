"use client"

import { KoreLogo } from "./kore-logo"

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-white/5 bg-[#09090b] relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Izquierda: Logo original (con size="lg" que ya sabemos que funciona) y Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <KoreLogo size="lg" />
          </div>
          <span className="text-[#6B7280] text-sm">
            © 2026 Kore. Todos los derechos reservados.
          </span>
        </div>
        
        {/* Derecha: Links mínimos de contacto sin distraer */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/digital.kore?igsh=MTNvdzE0aWdvMHVrNQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#0A5A8C] transition-colors text-sm font-medium"
          >
            Instagram
          </a>
          <a 
            href="kore.softwaree@gmail.com" 
            className="text-[#6B7280] hover:text-[#0A5A8C] transition-colors text-sm font-medium"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}
