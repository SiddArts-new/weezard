'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        url: string;
        'loading-anim-type'?: string;
        'hide-logo'?: boolean;
      }, HTMLElement>;
    }
  }
}

interface SplineViewerProps {
  url: string
  className?: string
}

const SplineViewer: React.FC<SplineViewerProps> = ({ url, className }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js'
    script.async = true
    script.onload = () => setIsLoading(false)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className={cn("relative w-full h-full", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="w-8 h-8 border-4 border-gray-300 dark:border-gray-600 border-t-[#3ee366] rounded-full animate-spin" />
        </div>
      )}
      <spline-viewer 
        loading-anim-type="none" 
        hide-logo={true}
        url={url}
        className={cn("w-full h-full", isLoading && "opacity-0")}
      />
    </div>
  )
}

export default SplineViewer 
