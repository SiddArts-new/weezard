import * as React from "react"
import { cn } from "@/lib/utils"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientColor?: string
}

export function MagicCard({
  className,
  gradientColor = "#D9D9D955",
  ...props
}: MagicCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background p-6",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${gradientColor}, transparent)`,
          opacity: 0.5,
        }}
      />
      <div className="relative z-10">{props.children}</div>
    </div>
  )
} 