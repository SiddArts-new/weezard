'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function GlobalPointer() {
  const pointerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pointer = pointerRef.current
    if (!pointer) return

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      pointer.style.transform = `translate(${clientX}px, ${clientY}px)`
    }

    document.addEventListener('mousemove', onMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={pointerRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{
          scale: [0.8, 1, 0.8],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#3ee366" />
          <circle cx="12" cy="12" r="5" fill="white" />
        </svg>
      </motion.div>
    </motion.div>
  )
} 