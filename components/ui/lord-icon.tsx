'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'

interface LordIconProps {
  src: string
  trigger?: string
  colors?: {
    primary?: string
    secondary?: string
  }
  size?: number
  className?: string
}

export function LordIcon({ 
  src, 
  trigger = "hover",
  colors = { primary: "#121331", secondary: "#3ee366" },
  size = 250,
  className 
}: LordIconProps) {
  useEffect(() => {
    // This ensures the lord-icon element is defined after the script loads
    return () => {
      const element = document.querySelector('lord-icon');
      if (element) {
        element.remove();
      }
    }
  }, []);

  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js" />
      <div
        dangerouslySetInnerHTML={{
          __html: `<lord-icon
            src="${src}"
            trigger="${trigger}"
            colors="primary:${colors.primary},secondary:${colors.secondary}"
            style="width: ${size}px; height: ${size}px"
            class="${className || ''}"
          ></lord-icon>`
        }}
      />
    </>
  )
}