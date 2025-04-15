'use client'

import Image from 'next/image'

interface CompanyLogoProps {
  src: string
  alt: string
  color: string
  className?: string
}

export function CompanyLogo({ src, alt, color, className = "" }: CompanyLogoProps) {
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={90}
        height={90}
        className="object-contain"
        style={{ filter: `brightness(1) saturate(100%) ${color === '#000000' ? 'invert(0)' : ''}` }}
      />
    </div>
  )
} 