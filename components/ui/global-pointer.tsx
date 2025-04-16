'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function GlobalPointer() {
  const pointerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pointer = pointerRef.current
    if (!pointer) return

    let animationFrame: number
    let lastX = 0
    let lastY = 0

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      // Use requestAnimationFrame for smooth animation
      animationFrame = requestAnimationFrame(() => {
        // Calculate the distance moved
        const deltaX = clientX - lastX
        const deltaY = clientY - lastY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        
        // Only update if moved more than 1px to reduce unnecessary updates
        if (distance > 1) {
          pointer.style.transform = `translate(${clientX}px, ${clientY}px)`
          lastX = clientX
          lastY = clientY
        }
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <motion.div
      ref={pointerRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
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
        className="will-change-transform"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="will-change-transform"
        >
          <circle cx="12" cy="12" r="10" fill="#3ee366" />
          <circle cx="12" cy="12" r="5" fill="white" />
        </svg>
      </motion.div>
    </motion.div>
  )
} 