import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ModulesOverview } from "@/components/modules-overview"
import { ModuleSection } from "@/components/module-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { QrCode, Search, Zap } from "lucide-react"

// ==========================================
// COMPONENTES VISUALES INTERNOS PARA LOYALTY
// ==========================================

interface CupIconProps {
  isStamped: boolean
}

function CupIcon({ isStamped }: CupIconProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Humito animado sutil en gris Kore */}
      {isStamped && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-[3px] animate-[steam_2.5s_ease-out_infinite] opacity-0">
          <svg width="4" height="12" viewBox="0 0 4 12" fill="none">
            <path d="M2 0C2.5 1.5 1.5 2.5 2 4C2.5 5.5 1.5 6.5 2 8C2.5 9.5 1.5 10.5 2 12" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg width="4" height="10" viewBox="0 0 4 10" fill="none">
            <path d="M2 0C2.5 1.25 1.5 2 2 3.25C2.5 4.5 1.5 5.25 2 6.5C2.5 7.75 1.5 8.5 2 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      {/* Icono minimalista: Azul Kore si está activo, gris oscuro si está vacío */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="transition-all duration-300">
        <path d="M4 8H17C17.5 8 18 8.5 18 9V17C18 18.5 16.5 20 15 20H6C4.5 20 3 18.5 3 17V9C3 8.5 3.5 8 4 8Z" 
              className={isStamped ? "fill-[#0A5A8C]" : "stroke-[#2A2A2A] fill-transparent"} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 10C19.5 10 21 11.5 21 13C21 14.5 19.5 16 18 16" 
              className={isStamped ? "stroke-[#0A5A8C]" : "stroke-[#2A2A2A]"} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

function LoyaltyStampCardVisual() {
  const currentStamps = 5
  const totalStamps = 10
  
  return (
    <div className="border border-[#2A2A2A] bg-[#121212] p-5 rounded-lg w-full max-w-[320px] shadow-lg">
      <h5 className="text-sm font-heading text-white font-bold mb-4 text-center tracking-wide">TARJETA DIGITAL</h5>
      
      {/* Grilla técnica y minimalista */}
      <div className="grid grid-cols-5 gap-x-3 gap-y-5 mb-5 bg-[#0A0A0A] p-4 rounded-md border border-[#2A2A2A]">
        {Array.from({ length: totalStamps }, (_, i) => (
          <CupIcon key={i} isStamped={i < currentStamps} />
        ))}
      </div>

      <div className="text-center text-white mb-5">
        <p className="text-[#6B7280] text-[11px] mb-1 uppercase tracking-wider">Progreso de Recompensa</p>
        <p className="text-xl font-body font-bold"><span className="text-[#0A5A8C]">{currentStamps}</span><span className="text-[#6B7280]">/{totalStamps}</span></p>
      </div>

      <div className="flex flex-col items-center gap-3">
        {/* QR adaptado al modo oscuro */}
        <div className="bg-[#1A1A1A] p-3 rounded-md border border-[#2A2A2A]">
          <QrCode className="size-14 text-white" strokeWidth={1.2} />
        </div>
        <span className="text-[#6B7280] text-[10px] uppercase tracking-wider">ID: KORE-8492</span>
      </div>
    </div>
  )
}

interface CustomerRowProps {
  name: string
  points: number
  status: string
  initials: string
}

function CustomerRow({ name, points, status, initials }: CustomerRowProps) {
  const isVip = status === "VIP"
  return (
    <div className="flex items-center justify-between p-3 border-b border-[#2A2A2A] hover:bg-[#1A1A1A] transition-colors last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2A2A2A]">
          <span className="text-white font-mono text-xs">{initials}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-xs font-body font-medium">{name}</span>
          <div className="flex items-center gap-1">
            <Zap className="size-3 text-[#0A5A8C]" />
            <span className="text-[#0A5A8C] text-xs font-body font-medium">{points} pts</span>
          </div>
        </div>
      </div>
      <div className={`px-2 py-0.5 border rounded-full text-[10px] font-mono ${isVip ? "text-[#0A5A8C] border-[#0A5A8C]" : "text-[#6B7280] border-[#2A2A2A]"}`}>
        {status}
      </div>
    </div>
  )
}

function LoyaltyDashboardModifiedVisual() {
  const customers = [
    { name: "María García", points: 1240, status: "VIP", initials: "MG" },
    { name: "Carlos López", points: 890, status: "Gold", initials: "CL" },
    { name: "Ana Martínez", points: 650, status: "Silver", initials: "AM" },
  ]

  return (
    <div className="border border-[#2A2A2A] bg-[#121212] p-5 rounded-lg w-full max-w-[360px] shadow-lg">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <Search className="size-3.5 text-[#6B7280]" />
          <span className="text-[#6B7280] text-xs font-body">Buscar clientes...</span>
        </div>
        <span className="flex items-center gap-1 text-[#0A5A8C] text-[10px] font-mono tracking-wider">
          <span className="size-1.5 rounded-full bg-[#0A5A8C] animate-pulse"></span>
          EN VIVO
        </span>
      </div>

      <div className="space-y-0.5 mb-5">
        {customers.map((customer, index) => (
          <CustomerRow key={index} {...customer} />
        ))}
      </div>

      <div className="border border-[#2A2A2A] bg-[#0A0A0A] p-3 rounded-md text-center">
        <p className="text-xs font-body font-medium text-white mb-1">Reglas Activas</p>
        <p className="text-[#6B7280] text-[10px] font-mono uppercase tracking-wide">1000 pts = Descuento | 1240 pts = VIP Gratis</p>
      </div>
    </div>
  )
}

// ==========================================
// COMPONENTE PRINCIPAL DE LA PÁGINA
// ==========================================

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
        tagline="Construí una comunidad. Hacé que tus clientes siempre vuelvan."
        description="Mucho más que sumar puntos. Un sistema de fidelización escalable y 100% personalizable diseñado para conocer a tu público, automatizar el contacto directo y generar ventas recurrentes reales."
        iconName="heart"
        visualType="custom"
        visual={
          <div className="flex flex-col gap-6 w-full items-center justify-center pt-8">
            <LoyaltyStampCardVisual />
            <LoyaltyDashboardModifiedVisual />
          </div>
        }
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
