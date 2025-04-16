'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GifIconProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export function GifIcon({ 
  src, 
  alt,
  size = 64,
  className 
}: GifIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Convert GIF src to static image src (first frame)
  const staticSrc = src.replace('.gif', '.png'); // We'll use a static PNG version

  return (
    <div 
      className={`relative flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm p-4 border-2 border-[#3ee366]/30 hover:border-[#3ee366] hover:bg-[#3ee366]/10 transition-all duration-300 ${className}`} 
      style={{ width: size + 32, height: size + 32 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? src : staticSrc}
        alt={alt}
        width={size}
        height={size}
        className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
        unoptimized={true} // This is needed for GIF animation
      />
    </div>
  )
} 