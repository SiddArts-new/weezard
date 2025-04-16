'use client'

import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

type CompanionType = 'wizard' | 'ghost' | 'cat' | null

interface CompanionContextType {
  companion: CompanionType
  setCompanion: (type: CompanionType) => void
}

const CompanionContext = createContext<CompanionContextType | undefined>(undefined)

export function CompanionProvider({ children }: { children: React.ReactNode }) {
  const [companion, setCompanion] = useState<CompanionType>(null)
  return (
    <CompanionContext.Provider value={{ companion, setCompanion }}>
      {children}
    </CompanionContext.Provider>
  )
}

export function useCompanion() {
  const context = useContext(CompanionContext)
  if (!context) throw new Error('useCompanion must be used within CompanionProvider')
  return context
}

const WizardCompanion = () => (
  <div className="h-12 w-12 rounded-full bg-purple-500">
    <div className="relative h-full w-full">
      {/* Wizard hat */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#3ee366]" />
      </div>
      {/* Eyes */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
    </div>
  </div>
)

const GhostCompanion = () => (
  <div className="relative h-12 w-12">
    <div className="h-8 w-12 rounded-t-full bg-[#E8E6E3] dark:bg-gray-300">
      {/* Eyes */}
      <div className="absolute left-1/2 top-3 -translate-x-1/2 flex gap-2">
        <div className="h-2 w-2 rounded-full bg-gray-700 dark:bg-gray-800" />
        <div className="h-2 w-2 rounded-full bg-gray-700 dark:bg-gray-800" />
      </div>
    </div>
    {/* Wavy bottom */}
    <div className="flex">
      <div className="h-4 w-4 rounded-b-full bg-[#E8E6E3] dark:bg-gray-300" />
      <div className="h-4 w-4 rounded-b-full bg-[#E8E6E3] dark:bg-gray-300" />
      <div className="h-4 w-4 rounded-b-full bg-[#E8E6E3] dark:bg-gray-300" />
    </div>
  </div>
)

const CatCompanion = () => (
  <div className="relative h-12 w-12">
    <div className="h-10 w-12 rounded-full bg-[#3ee366]">
      {/* Ears */}
      <div className="absolute -top-2 flex w-full justify-between">
        <div className="h-4 w-4 -rotate-45 transform rounded-tr-full bg-[#3ee366]" />
        <div className="h-4 w-4 rotate-45 transform rounded-tl-full bg-[#3ee366]" />
      </div>
      {/* Eyes */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3">
        <div className="h-2 w-[3px] rounded-full bg-black" />
        <div className="h-2 w-[3px] rounded-full bg-black" />
      </div>
      {/* Whiskers */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="h-[2px] w-2 rounded-full bg-black" />
      </div>
    </div>
  </div>
)

export function CursorCompanion() {
  const { companion } = useCompanion()
  const cursorRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const companionX = useSpring(mouseX, springConfig)
  const companionY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 20)
      mouseY.set(e.clientY + 20)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!companion) return null

  const renderCompanion = () => {
    switch (companion) {
      case 'wizard':
        return <WizardCompanion />
      case 'ghost':
        return <GhostCompanion />
      case 'cat':
        return <CatCompanion />
      default:
        return <WizardCompanion />
    }
  }

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] select-none"
      style={{
        x: companionX,
        y: companionY
      }}
    >
      <motion.div
        className="relative"
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, -3, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {renderCompanion()}
      </motion.div>
    </motion.div>
  )
} 