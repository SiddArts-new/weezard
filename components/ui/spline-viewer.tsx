'use client'

import React, { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        url: string;
        'loading-anim-type'?: string;
      }, HTMLElement>;
    }
  }
}

interface SplineViewerProps {
  url: string
  className?: string
}

export const SplineViewer: React.FC<SplineViewerProps> = ({ url, className }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <spline-viewer 
      loading-anim-type="none" 
      url={url}
      className={className}
    />
  )
} 
