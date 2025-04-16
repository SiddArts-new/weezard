'use client'

import { motion, useScroll, useSpring } from "framer-motion"

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed left-0 right-0 h-[2px] bg-[#3ee366] origin-[0%] top-4 z-[9999] ] ${className}`}
    />
  )
} 