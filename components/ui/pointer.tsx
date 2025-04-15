'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface PointerProps {
  children?: React.ReactNode
  className?: string
}

export function Pointer({ children, className }: PointerProps) {
  const pointerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pointer = pointerRef.current
    if (!pointer) return

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = pointer.parentElement?.getBoundingClientRect()
      
      if (rect) {
        const x = clientX - rect.left
        const y = clientY - rect.top
        pointer.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    const parent = pointer.parentElement
    parent?.addEventListener('mousemove', onMouseMove)
    
    return () => {
      parent?.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={pointerRef}
      className={`pointer-events-none absolute left-0 top-0 z-50 ${className || ''}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      {children || (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" className="fill-purple-500" />
          <circle cx="12" cy="12" r="5" className="fill-white" />
        </svg>
      )}
    </motion.div>
  )
} 