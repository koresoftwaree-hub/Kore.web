"use client"

export function HexagonVisual() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      <svg 
        viewBox="0 0 400 200" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background hexagons */}
        <g transform="translate(50, 50)">
          {/* Dark hexagon 1 */}
          <polygon 
            points="30,0 60,17 60,52 30,69 0,52 0,17" 
            fill="#1A1A1A" 
            stroke="#2A2A2A" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: '0s' }}
          />
          {/* Dark hexagon 2 */}
          <polygon 
            points="90,17 120,34 120,69 90,86 60,69 60,34" 
            fill="#121212" 
            stroke="#2A2A2A" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          {/* Blue accent hexagon */}
          <polygon 
            points="150,0 180,17 180,52 150,69 120,52 120,17" 
            fill="#0A5A8C" 
            stroke="#0A5A8C" 
            strokeWidth="1"
          />
          {/* Dark hexagon 3 */}
          <polygon 
            points="210,17 240,34 240,69 210,86 180,69 180,34" 
            fill="#1A1A1A" 
            stroke="#2A2A2A" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          {/* White accent hexagon */}
          <polygon 
            points="270,0 300,17 300,52 270,69 240,52 240,17" 
            fill="#FFFFFF" 
            stroke="#FFFFFF" 
            strokeWidth="1"
          />
        </g>
        
        {/* Second row */}
        <g transform="translate(20, 110)">
          {/* Dark hexagon */}
          <polygon 
            points="30,0 60,17 60,52 30,69 0,52 0,17" 
            fill="#121212" 
            stroke="#2A2A2A" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: '0.3s' }}
          />
          {/* Gray hexagon */}
          <polygon 
            points="90,17 120,34 120,69 90,86 60,69 60,34" 
            fill="#1A1A1A" 
            stroke="#2A2A2A" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: '0.7s' }}
          />
          {/* Dark hexagon */}
          <polygon 
            points="150,0 180,17 180,52 150,69 120,52 120,17" 
            fill="#121212" 
            stroke="#2A2A2A" 
            strokeWidth="1"
          />
          {/* Blue small accent */}
          <polygon 
            points="210,17 240,34 240,69 210,86 180,69 180,34" 
            fill="#0A5A8C" 
            stroke="#0A5A8C" 
            strokeWidth="1"
            opacity="0.6"
          />
          {/* Dark hexagon */}
          <polygon 
            points="270,0 300,17 300,52 270,69 240,52 240,17" 
            fill="#1A1A1A" 
            stroke="#2A2A2A" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: '1.2s' }}
          />
          {/* Gray hexagon */}
          <polygon 
            points="330,17 360,34 360,69 330,86 300,69 300,34" 
            fill="#121212" 
            stroke="#2A2A2A" 
            strokeWidth="1"
          />
        </g>
        
        {/* Connection lines */}
        <g stroke="#0A5A8C" strokeWidth="1" opacity="0.4">
          <line x1="200" y1="67" x2="200" y2="127" />
          <line x1="140" y1="102" x2="170" y2="117" />
          <line x1="260" y1="102" x2="230" y2="117" />
        </g>
        
        {/* Data points */}
        <circle cx="200" cy="67" r="3" fill="#0A5A8C" />
        <circle cx="200" cy="127" r="3" fill="#0A5A8C" />
        <circle cx="140" cy="102" r="2" fill="#0A5A8C" opacity="0.6" />
        <circle cx="260" cy="102" r="2" fill="#0A5A8C" opacity="0.6" />
      </svg>
    </div>
  )
}
