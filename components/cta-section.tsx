"use client"

import React, { useState } from "react"
import { KoreLogo } from "./kore-logo"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const easeOut = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export function CTASection() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5492216714779" 
    let message = "Hola! Vengo desde la web de Kore y me gustaría hacer una consulta."

    switch (selectedOption) {
      case "links":
        message = "Hola, me interesó el sistema de links."
        break
      case "loyalty":
        message = "Hola, me interesó el sistema de fidelización / tarjetas de sello."
        break
      case "control":
        message = "Hola, me interesó el sistema de control y gestión."
        break
      case "booking":
        message = "Hola, me interesó el sistema de reservas (booking)."
        break
      case "web":
        message = "Hola, me interesa el servicio de desarrollo web."
        break
      case "medida":
        message = "Hola, me interesa solicitar un sistema o desarrollo más a medida."
        break
      case "otra":
        message = "Hola, tengo una consulta general sobre las soluciones de Kore."
        break
    }

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  return (
    <section id="contacto" className="py-24 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A5A8C]/5 to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#0A5A8C]/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item}>
          <KoreLogo size="lg" className="mx-auto mb-6" />
        </motion.div>

        <motion.h2
          variants={item}
          className="text-white text-3xl lg:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Potenciá tu infraestructura digital.
          <br />
          <span className="text-[#0A5A8C]">Hablemos hoy.</span>
        </motion.h2>

        <motion.p variants={item} className="text-[#6B7280] text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Hablemos sobre cómo implementar nuestras soluciones modulares en tu negocio. 
          Sistemas escalables, robustos y a medida.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-[#0A5A8C] hover:bg-[#0A5A8C] text-white px-8 py-4 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_28px_rgba(10,90,140,0.5)] group"
          >
            Contáctame
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>

      {/* Modal de Contacto Controlado */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#09090b] border-white/10 text-white backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium tracking-tight">¿En qué estás interesado?</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="app-options" className="text-neutral-400 text-xs">Selecciona una opción</Label>
              <Select onValueChange={(value) => setSelectedOption(value)}>
                <SelectTrigger id="app-options" className="w-full bg-black border-white/10 text-white focus:ring-1 focus:ring-[#0A5A8C]">
                  <SelectValue placeholder="Elegir tipo de solución" />
                </SelectTrigger>
                <SelectContent className="bg-[#09090b] border-white/10 text-white">
                  <SelectItem value="links">Sistema de Links</SelectItem>
                  <SelectItem value="loyalty">Sistema de Fidelización</SelectItem>
                  <SelectItem value="control">Sistema de Control</SelectItem>
                  <SelectItem value="booking">Sistema de Reservas (Booking)</SelectItem>
                  <SelectItem value="web">Desarrollo Web</SelectItem>
                  <SelectItem value="medida">Quiero algo más a medida</SelectItem>
                  <SelectItem value="otra">Otra consulta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <Button 
              onClick={handleWhatsAppRedirect}
              disabled={!selectedOption}
              className="w-full bg-[#0A5A8C] text-white hover:bg-[#0A5A8C]/80 disabled:opacity-50 transition-colors font-medium"
            >
              Continuar a WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
