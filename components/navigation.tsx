"use client"

import { useState } from "react"
import { KoreLogo } from "./kore-logo"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Apps", href: "#modulos" },
  { name: "Loyalty", href: "#loyalty" },
  { name: "Control", href: "#finance" },
  { name: "Booking", href: "#booking" },
  { name: "Web", href: "#web" },
  { name: "Link", href: "#link" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <KoreLogo size="sm" />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#6B7280] hover:text-white text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contacto"
              className="bg-[#0A5A8C] hover:bg-[#0A5A8C]/90 text-white px-5 py-2 text-sm font-medium transition-colors duration-200"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-[#1A1A1A]">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#6B7280] hover:text-white text-sm py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="block bg-[#0A5A8C] text-white px-5 py-3 text-sm font-medium text-center mt-4"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
