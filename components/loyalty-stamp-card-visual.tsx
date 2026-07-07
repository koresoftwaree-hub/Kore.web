import { QrCode } from 'lucide-react'

// Subcomponente reutilizable para la tacita con humito
interface CupIconProps {
  isStamped: boolean;
}

function CupIcon({ isStamped }: CupIconProps) {
  // Color del "humito" usando la variable de color kore
  const steamColor = "var(--kore-muted)";
  
  return (
    <div className="relative flex flex-col items-center">
      {/* Humito animado (solo si está sellada) */}
      {isStamped && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-[3px] animate-steam opacity-0">
          <svg width="4" height="12" viewBox="0 0 4 12" fill="none">
            <path d="M2 0C2.5 1.5 1.5 2.5 2 4C2.5 5.5 1.5 6.5 2 8C2.5 9.5 1.5 10.5 2 12" stroke={steamColor} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg width="4" height="10" viewBox="0 0 4 10" fill="none">
            <path d="M2 0C2.5 1.25 1.5 2 2 3.25C2.5 4.5 1.5 5.25 2 6.5C2.5 7.75 1.5 8.5 2 10" stroke={steamColor} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      {/* Tacita SVG */}
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="transition-all duration-300">
        {/* Cuerpo de la taza */}
        <path d="M4 8H17C17.5 8 18 8.5 18 9V17C18 18.5 16.5 20 15 20H6C4.5 20 3 18.5 3 17V9C3 8.5 3.5 8 4 8Z" 
              className={isStamped ? "fill-[#e67e22]" : "stroke-kore-muted fill-transparent"} strokeWidth="1.5" strokeLinecap="round"/>
        {/* Asa de la taza */}
        <path d="M18 10C19.5 10 21 11.5 21 13C21 14.5 19.5 16 18 16" 
              className={isStamped ? "stroke-[#e67e22]" : "stroke-kore-muted"} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function LoyaltyStampCardVisual() {
  const currentStamps = 5;
  const totalStamps = 10;
  
  // Generar las 10 tacitas
  const cups = Array.from({ length: totalStamps }, (_, i) => (
    <CupIcon key={i} isStamped={i < currentStamps} />
  ));

  return (
    <div className="border border-border bg-card p-6 rounded-lg w-full max-w-[340px] shadow-lg mb-6">
      <h4 className="text-xl font-heading text-foreground font-bold mb-6 text-center">Tu Tarjeta de Sellos Digital</h4>
      
      {/* Cuadrícula de tacitas (tipo Beki) */}
      <div className="grid grid-cols-5 gap-x-4 gap-y-6 mb-8 bg-kore-gray p-5 rounded-md border border-border">
        {cups}
      </div>

      <div className="text-center text-kore-white mb-6">
        <p className="text-kore-muted text-sm mb-1">Completa {totalStamps} tazas y lleva tu bebida gratis</p>
        <p className="text-2xl font-body font-bold"><span className="text-[#e67e22]">{currentStamps}</span> / {totalStamps} tazas</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        {/* Código QR (tipo Beki) */}
        <div className="bg-kore-white p-3 rounded-md border-border border">
          <QrCode className="size-20 text-kore-black" strokeWidth={1} />
        </div>
        <span className="text-kore-muted text-xs uppercase tracking-wider">Tu Código Personal</span>
      </div>
    </div>
  );
}