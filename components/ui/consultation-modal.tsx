'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MagicCard } from "@/registry/magicui/magic-card"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from 'framer-motion'
import { Toast } from './toast'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { theme } = useTheme()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setShowToast(true)
      // Close modal after showing toast
      setTimeout(() => {
        onClose()
      }, 3000)
    }, 2000)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-50"
            >
              <Card className="p-0 max-w-sm w-full shadow-none border-none">
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="p-0"
                >
                  <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                    <CardTitle>Book a Consultation</CardTitle>
                    <CardDescription>
                      Let's discuss your project and how we can help
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" type="text" placeholder="Your name" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="name@example.com" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="project">Project Type</Label>
                          <Input id="project" type="text" placeholder="What type of project?" required />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
                    <Button 
                      className="w-full bg-white dark:bg-black text-black dark:text-white hover:bg-[#3ee366] dark:hover:bg-[#3ee366] hover:text-white dark:hover:text-black" 
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                    >
                      {isSubmitting ? 'Sending...' : 'Book Now'}
                    </Button>
                  </CardFooter>
                </MagicCard>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toast
        message="Thank you! We'll get back to you soon."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
} 