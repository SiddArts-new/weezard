'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function PatternBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/repeatin-logo.svg)',
            backgroundRepeat: 'repeat',
            backgroundSize: '100px 100px',
            opacity: 0.4
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>
    </div>
  )
} 