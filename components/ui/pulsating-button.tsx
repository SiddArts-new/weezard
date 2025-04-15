'use client'

import React from "react"
import { cn } from "@/lib/utils"

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(({ className, children, pulseColor = "rgba(62, 227, 102, 0.2)", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center rounded-lg bg-black px-8 py-3 text-center text-white transition-colors hover:bg-[#3ee366] dark:hover:bg-[#3ee366] dark:hover:text-white",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div 
        className="absolute inset-0 rounded-lg bg-opacity-20 animate-pulse-magic"
        style={{
          backgroundColor: pulseColor,
        }}
      />
    </button>
  )
})

PulsatingButton.displayName = "PulsatingButton" 