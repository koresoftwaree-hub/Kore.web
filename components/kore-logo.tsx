"use client"

interface KoreLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function KoreLogo({ className = "", size = "md" }: KoreLogoProps) {
  const sizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl"
  }

  return (
    <div className={`font-[var(--font-heading)] font-bold tracking-tight ${sizes[size]} ${className}`}>
      <span className="text-white">kore</span>
      <span className="text-[#0A5A8C]">.</span>
    </div>
  )
}
