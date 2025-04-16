'use client'

import React from 'react'
import Script from 'next/script'

interface LordIconProps {
  src: string
  trigger?: string
  colors?: string
  size?: number
  className?: string
}

export function LordIcon({ 
  src, 
  trigger = "hover",
  colors = "primary:#121331,secondary:#3ee366",
  size = 64,
  className = ""
}: LordIconProps) {
  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js" />
      <div 
        className={`relative flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm p-4 border-2 border-[#3ee366]/30 hover:border-[#3ee366] hover:bg-[#3ee366]/10 transition-all duration-300 ${className}`} 
        style={{ width: size + 32, height: size + 32 }}
        dangerouslySetInnerHTML={{
          __html: `<lord-icon
            src="${src}"
            trigger="${trigger}"
            colors="${colors}"
            style="width: ${size}px; height: ${size}px"
          ></lord-icon>`
        }}
      />
    </>
  )
}