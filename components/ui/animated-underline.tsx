'use client'

import { cn } from "@/lib/utils"

interface AnimatedUnderlineProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedUnderline({ children, className }: AnimatedUnderlineProps) {
  return (
    <span className={cn("group/underline relative inline-block", className)}>
      {children}
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#3ee366] transition-all duration-300 ease-out group-hover/underline:w-full" />
    </span>
  )
} 