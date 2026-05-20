import { Search, User, Zap } from 'lucide-react'

// Subcomponente para la tarjeta de cliente (reutilizado del panel original)
interface CustomerRowProps {
  name: string;
  points: number;
  status: string;
  initials: string;
}

function CustomerRow({ name, points, status, initials }: CustomerRowProps) {
  // Determinar el color del status badge
  const statusColor = status === "VIP" ? "text-accent border-accent" : "text-kore-muted border-kore-muted";

  return (
    <div className="flex items-center justify-between p-4 border-b border-border hover:bg-kore-gray transition-colors last:border-b-0">
      <div className="flex items-center gap-4">
        {/* Avatar con iniciales */}
        <div className="size-10 rounded-full bg-kore-gray flex items-center justify-center border border-border">
          <span className="text-kore-white font-mono text-xs">{initials}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-foreground text-sm font-body font-medium">{name}</span>
          <div className="flex items-center gap-1">
            <Zap className="size-3 text-accent" />
            {/* Puntos en azul/kore-blue */}
            <span className="text-accent text-sm font-body font-medium">{points} pts</span>
          </div>
        </div>
      </div>
      <div className={`px-3 py-1 border rounded-full text-xs font-mono ${statusColor}`}>
        {status}
      </div>
    </div>
  );
}

export function LoyaltyDashboardModifiedVisual() {
  const customers = [
    { name: "María García", points: 1240, status: "VIP", initials: "MG" },
    { name: "Carlos López", points: 890, status: "Gold", initials: "CL" },
    { name: "Ana Martínez", points: 650, status: "Silver", initials: "AM" },
  ];

  return (
    <div className="border border-border bg-card p-6 rounded-lg w-full max-w-[500px] shadow-lg">
      <h4 className="text-xs font-mono text-kore-muted uppercase tracking-wider mb-6">PANEL DE FIDELIZACIÓN</h4>
      
      {/* Barra de búsqueda superior simulada */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
            <Search className="size-4 text-kore-muted" />
            <span className="text-kore-muted text-sm font-body">Buscar clientes...</span>
        </div>
        <span className="flex items-center gap-1.5 text-accent text-xs font-mono">
            <span className="size-1.5 rounded-full bg-accent animate-pulse"></span>
            En vivo
        </span>
      </div>

      {/* Lista de clientes (lo que se mantiene del original) */}
      <div className="space-y-1 mb-8">
        {customers.map((customer, index) => (
          <CustomerRow key={index} {...customer} />
        ))}
      </div>

      {/* Pie de página con las nuevas reglas de fidelización (AGREGADO) */}
      <div className="border border-border bg-kore-gray p-4 rounded-md text-center">
        <p className="text-sm font-body font-medium text-kore-white">Reglas de fidelización actuales</p>
        <p className="text-kore-muted text-xs mt-1">1000 pts = $10 desc. | {customers.find(c => c.status === "VIP")?.points ?? ""} pts = Café gratis (VIP)</p>
      </div>
    </div>
  );
}
