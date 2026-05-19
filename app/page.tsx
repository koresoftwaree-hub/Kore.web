"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ModulesOverview } from "@/components/modules-overview"
import { ModuleSection } from "@/components/module-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  // Estado para controlar la visualización del ejemplo de Loyalty
  const [showLoyaltyExample, setShowLoyaltyExample] = useState(false)

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <HeroSection />
      <ModulesOverview />
      
      {/* Kore Loyalty */}
      <ModuleSection
        id="loyalty"
        number="01"
        name="Loyalty"
        tagline="Construí una comunidad. Hacé que tus clientes siempre vuelvan."
        description="Mucho más que sumar puntos. Un sistema de fidelización escalable y 100% personalizable diseñado para conocer a tu público, automatizar el contacto directo y generar ventas recurrentes reales."
        iconName="heart"
        visualType="loyalty"
        features={[
          {
            title: "Modalidad a tu medida",
            description: "Elegí entre un sistema clásico de acumulación de puntos por monto, o la tradicional 'tarjeta de sellos' digital (ej: 1 gratis cada 10 tacitas). Adaptable al 100%."
          },
          {
            title: "Conexión Directa (WhatsApp & Email)",
            description: "Aprovechá la base de datos de tus clientes registrados. Enviá promociones automatizadas, novedades o mensajes de 'te extrañamos' directo a su bolsillo."
          },
          {
            title: "Diseño y Experiencia Personalizada",
            description: "Interfaz fluida alineada por completo a tu identidad visual, tanto para el operador en el local como para la app del cliente final."
          },
        ]}
      />

      {/* Botón interactivo y sección desplegable de Ejemplo Real */}
      <div className="container mx-auto px-4 pb-16 flex flex-col items-center justify-center">
        <button
          onClick={() => setShowLoyaltyExample(!showLoyaltyExample)}
          className="px-6 py-3 bg-[#0A5A8C] text-white rounded-md font-heading font-medium hover:bg-[#0A5A8C]/80 transition-all cursor-pointer shadow-md"
        >
          {showLoyaltyExample ? "Ocultar Ejemplo Real" : "Mira cómo lo hizo tal lugar →"}
        </button>

        {showLoyaltyExample && (
          <div className="mt-8 p-6 bg-[#121212] border border-[#2A2A2A] rounded-lg max-w-3xl w-full text-center transition-all animate-in fade-in duration-300">
            <h4 className="text-xl font-heading font-bold text-white mb-2">
              Caso de Uso: Cafetería de Especialidad
            </h4>
            <p className="text-[#6B7280] text-sm mb-6 max-w-xl mx-auto">
              Reemplazaron los tradicionales cartoncitos de papel por nuestra interfaz digital de tacitas. Lograron un 30% más de visitas recurrentes en el primer mes y automatizaron avisos de promociones directo por WhatsApp.
            </p>
            
            {/* Contenedor para la Foto/Mockup del carrusel */}
            <div className="aspect-video bg-[#1A1A1A] rounded-md flex items-center justify-center border border-[#2A2A2A] relative overflow-hidden">
              <span className="text-xs text-[#6B7280] uppercase tracking-wider">
                [ Aquí va la foto/mockup del carrusel de la interfaz de Loyalty ]
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Kore Finance */}
      <ModuleSection
        id="finance"
        number="02"
        name="Finance"
        tagline="Control total de tu flujo de caja"
        description="Visualiza ingresos, egresos y rentabilidad en tiempo real. Registra gastos fijos y variables, genera reportes fiscales y mantén tus números siempre claros."
        iconName="dollarSign"
        visualType="finance"
        features={[
          {
            title: "Caja diaria automatizada",
            description: "Registro automático de cada transacción. Arqueo de caja sin errores."
          },
          {
            title: "Categorización de gastos",
            description: "Clasifica egresos por tipo: proveedores, servicios, personal, impuestos."
          },
          {
            title: "Reportes de rentabilidad",
            description: "Márgenes por producto, servicio y período. Datos para decisiones reales."
          },
        ]}
        reversed
      />
      
      {/* Kore Inventory */}
      <ModuleSection
        id="inventory"
        number="03"
        name="Inventory"
        tagline="Stock en tiempo real, sin sorpresas"
        description="Monitorea niveles de inventario mientras vendes. Recibe alertas de bajo stock antes de quedarte sin producto y programa reposiciones automáticas con proveedores."
        iconName="package"
        visualType="inventory"
        features={[
          {
            title: "Sincronización con POS",
            description: "Cada venta descuenta stock instantáneamente. Sin desfases ni ajustes manuales."
          },
          {
            title: "Alertas configurables",
            description: "Define umbrales críticos por producto. Notificaciones antes del quiebre de stock."
          },
          {
            title: "Historial de movimientos",
            description: "Trazabilidad completa: entradas, salidas, ajustes y transferencias."
          },
        ]}
      />
      
      {/* Kore Analytics */}
      <ModuleSection
        id="analytics"
        number="04"
        name="Analytics"
        tagline="Métricas que impulsan decisiones"
        description="Dashboard técnico con KPIs de ventas, rendimiento por categoría, tendencias temporales y comparativas. Datos procesados, no solo números crudos."
        iconName="barChart"
        visualType="analytics"
        features={[
          {
            title: "Dashboard ejecutivo",
            description: "Vista consolidada de métricas clave: ingresos, tickets, conversión, frecuencia."
          },
          {
            title: "Análisis de tendencias",
            description: "Patrones de venta por hora, día, semana y mes. Anticipa demanda."
          },
          {
            title: "Reportes exportables",
            description: "Genera informes PDF y Excel para reuniones, inversores o contabilidad."
          },
        ]}
        reversed
      />
      
      {/* Kore POS */}
      <ModuleSection
        id="pos"
        number="05"
        name="POS"
        tagline="Ventas fluidas, integración total"
        description="Interfaz de cobro rápida e intuitiva que alimenta automáticamente Finance e Inventory. Múltiples métodos de pago, descuentos, y facturación electrónica."
        iconName="shoppingCart"
        visualType="pos"
        features={[
          {
            title: "Cobro en segundos",
            description: "Interfaz optimizada para velocidad. Búsqueda rápida, escaneo de códigos, favoritos."
          },
          {
            title: "Métodos de pago flexibles",
            description: "Efectivo, tarjeta, transferencia, QR. Pagos mixtos y cuentas corrientes."
          },
          {
            title: "Sincronización automática",
            description: "Cada venta actualiza caja, inventario, puntos y analíticas sin intervención."
          },
        ]}
      />
      
      {/* Kore Booking */}
      <ModuleSection
        id="booking"
        number="06"
        name="Booking"
        tagline="Agenda inteligente, cero ausencias"
        description="Gestiona turnos, citas y reservas con recordatorios automáticos. Reduce no-shows con confirmaciones por WhatsApp o SMS y optimiza la ocupación de tu equipo."
        iconName="calendar"
        visualType="booking"
        features={[
          {
            title: "Calendario visual",
            description: "Vista diaria, semanal and mensual. Drag & drop para reprogramar al instante."
          },
          {
            title: "Recordatorios automáticos",
            description: "24h antes, 2h antes: configura cuándo y cómo avisar. Reduce no-shows 40%."
          },
          {
            title: "Reservas online",
            description: "Link de reserva para clientes. Eligen horario disponible sin llamar."
          },
        ]}
        reversed
      />
      
      <CTASection />
      <Footer />
    </main>
  )
}
