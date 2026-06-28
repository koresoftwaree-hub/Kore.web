"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ModulesOverview } from "@/components/modules-overview"
import { ModuleSection } from "@/components/module-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AuroraBackground } from "@/components/aurora-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      <Navigation /> 
      <HeroSection />
      <ModulesOverview />
      
      {/* 01 | LOYALTY */}
      <ModuleSection
        id="loyalty"
        number="01"
        name="Loyalty"
        tagline="Fidelización real y activa para tu comunidad."
        description="Convertimos cada visita en una oportunidad de conexión. Nuestra aplicación de fidelización permite premiar a tus clientes de forma automática, creando una comunidad que valora tu marca y elige volver."
        features={[
          {
            title: "Sistema de puntos digital",
            description: "Olvidate de las tarjetas de cartón. Tus clientes suman puntos automáticamente con cada compra."
          },
          {
            title: "Recompensas automáticas",
            description: "Definí los premios (descuentos, productos gratis) y el sistema avisa al cliente cuando los alcanza."
          },
          {
            title: "Base de clientes en vivo",
            description: "Conocé quiénes son tus mejores clientes y cuánto consumen para armar promociones inteligentes."
          }
        ]}
        iconName="heart"
        visualType="loyalty"
      />

      {/* 02 | CONTROL (La fusión) */}
      <ModuleSection
        id="finance"
        number="02"
        name="Control"
        tagline="Finanzas, stock y métricas en un solo lugar."
        description="Olvidate de tener tres sistemas distintos. Control centraliza tu flujo de caja diario, actualiza tu inventario en tiempo real con cada venta y te muestra gráficos claros para que entiendas la rentabilidad de tu proyecto sin tener que ser contador."
        features={[
          {
            title: "Caja y métricas unificadas",
            description: "Registrá ingresos, egresos y calculá tu rentabilidad neta automáticamente sin tocar un Excel."
          },
          {
            title: "Stock en tiempo real",
            description: "El sistema descuenta productos al instante y te avisa cuando te estás quedando sin insumos clave."
          },
          {
            title: "Gráficos inteligentes",
            description: "Visualizá de forma simple las tendencias de ventas para descubrir qué es lo que más elige tu público."
          }
        ]}
        iconName="dollarSign"
        visualType="finance"
        reversed={true}
      />

      {/* 03 | BOOKING */}
      <ModuleSection
        id="booking"
        number="03"
        name="Booking"
        tagline="Agenda inteligente y gestión de turnos sin fricción."
        description="Simplificá la manera en que tus clientes reservan. Un sistema 24/7 que organiza tu calendario, envía recordatorios automáticos para evitar ausencias y te deja enfocarte en dar un buen servicio en lugar de contestar mensajes todo el día."
        features={[
          {
            title: "Reservas 24/7",
            description: "Tus clientes agendan solos desde su celular en cualquier momento, viendo únicamente tus horarios disponibles."
          },
          {
            title: "Recordatorios automáticos",
            description: "Notificaciones directas para reducir cancelaciones y mantener tu agenda siempre optimizada."
          },
          {
            title: "Gestión de equipo",
            description: "Asigná turnos, bloqueá horarios y organizá el día a día de tu proyecto en un par de clics."
          }
        ]}
        iconName="calendar"
        visualType="booking"
      />
  
  
  
  
  
  {/* 04 | WEB */}
      <ModuleSection
        id="web"
        number="04"
        name="Web"
        tagline="Presencia digital de alto nivel para tu negocio."
        description="Una página web estática, ultrarrápida y elegante, diseñada para exhibir tus servicios y portafolio al mundo. Transmití máxima autoridad con un diseño a medida, sin depender de plataformas pesadas o complejas."
        features={[
          {
            title: "Diseño institucional a medida",
            description: "Estética profesional que respira la identidad de tu marca, ideal para mostrar tu catálogo o servicios."
          },
          {
            title: "Velocidad extrema",
            description: "Al ser una web estática, carga al instante en cualquier dispositivo, mejorando la experiencia del usuario."
          },
          {
            title: "Cero mantenimiento técnico",
            description: "Nosotros nos encargamos del hosting y la seguridad. Tu página simplemente funciona 24/7."
          }
        ]}
        iconName="package" // Podrías cambiar esto a "globe" si lo agregas a tu iconMap en module-section.tsx
        visualType="web"   // <-- Asegurate de mapear "web" en tu module-section.tsx
        reversed={true}
      />

      {/* 05 | LINK */}
      <ModuleSection
        id="link"
        number="05"
        name="Link"
        tagline="Tu puerta de entrada unificada estilo Linktree."
        description="Consolidá todas tus redes sociales, vías de contacto y enlaces importantes en un solo link inteligente. Totalmente personalizado con tu identidad visual, es ideal para optimizar la biografía de tu Instagram o TikTok."
        features={[
          {
            title: "Todos tus links en un solo lugar",
            description: "Derivá tráfico a tu WhatsApp, reservas, menú o sitio web desde una única pantalla optimizada para celular."
          },
          {
            title: "Diseño 100% propio",
            description: "A diferencia de Linktree, acá no hay logos de terceros. Lleva tus colores, tu tipografía y tu estilo."
          },
          {
            title: "Fácil de actualizar",
            description: "Cambia el orden, agrega o quita botones rápidamente según las necesidades o promociones de tu local."
          }
        ]}
        iconName="barChart" // Podrías cambiar esto a "share" o algo similar en tu iconMap
        visualType="link"   // <-- Asegurate de mapear "link" en tu module-section.tsx
      />

      {/* 06 | INTEGRACIONES */}
      <ModuleSection
        id="integraciones"
        number="06"
        name="Integraciones"
        tagline="Conexión directa con tu comunidad."
        description="Conecta tus apps directamente con los canales que tus clientes ya utilizan. Automatiza tu comunicación a través de WhatsApp y Correo Electrónico para mantener a tu comunidad activa y notificada en tiempo real."
        features={[
          {
            title: "Loyalty (Fidelización)",
            description: "Notificá a tus clientes por WhatsApp/Gmail, arma una comunidad, avisa de evento y descuentos exclusivos."
          },
          {
            title: "Booking (Reservas)",
            description: "Asegurá la asistencia enviando confirmaciones y recordatorios de turnos de forma automática al WhatsApp de tu cliente para reducir el ausentismo al mínimo."
          }
        ]}
        iconName="messageCircle" 
        visualType="integraciones" 
        reversed={true}   // <-- Esto hace que la imagen quede a la izquierda y el texto a la derecha, alternando el diseño.
      />

  
        <CTASection />
      <Footer />
    </main>
  )
}
