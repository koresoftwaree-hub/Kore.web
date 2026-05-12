import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ModulesOverview } from "@/components/modules-overview"
import { ModuleSection } from "@/components/module-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
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
        tagline="Retención automatizada que fideliza"
        description="Sistema de puntos y recompensas que trabaja solo. Segmenta clientes, envía notificaciones personalizadas y genera campañas automáticas basadas en comportamiento de compra."
        iconName="heart"
        visualType="loyalty"
        features={[
          {
            title: "Programa de puntos configurable",
            description: "Define reglas de acumulación y canje adaptadas a tu modelo de negocio."
          },
          {
            title: "Notificaciones automáticas",
            description: "SMS, email y push que se disparan según eventos: cumpleaños, inactividad, logros."
          },
          {
            title: "Segmentación inteligente",
            description: "Clasifica clientes en VIP, Gold, Silver automáticamente según su historial."
          },
        ]}
      />
      
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
            description: "Vista diaria, semanal y mensual. Drag & drop para reprogramar al instante."
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
