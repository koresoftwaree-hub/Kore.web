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
        visualType="custom" // <-- ACÁ ESTÁ EL CAMBIO CLAVE
        visual={
          // Pasamos nuestros componentes directamente como la imagen del módulo
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

      {/* Nota: Borrá todo el bloque del <div className="container..."> 
          que tenía el <button> adentro, ya no lo necesitamos porque 
          el visual está directo en el módulo. */}
      
      {/* Kore Finance */}
      <ModuleSection
        id="finance"
        number="02"
        // ... (el resto sigue igual)
