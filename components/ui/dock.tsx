'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'

interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  mouseX?: MotionValue<number>
}

export function Dock({ children }: { children: React.ReactElement<DockIconProps>[] }) {
  let mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-16 items-end gap-4 rounded-2xl bg-black/5 px-4 dark:bg-white/5"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<DockIconProps>(child)) {
          return React.cloneElement(child, { mouseX })
        }
        return child
      })}
    </motion.div>
  )
}

export function DockIcon({ children, mouseX, ...props }: DockIconProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square h-full items-center justify-center"
      {...props}
    >
      {children}
    </motion.div>
  )
} 