'use client'

import { HyperText } from '@/components/ui/hyper-text'
import { PatternBackground } from '@/components/ui/pattern-background'
import { LottiePlayer } from '@/components/ui/lottie-player'
import Footer from '@/app/components/Footer'

export default function SorryPage() {
  return (
    <div className="min-h-screen relative">
      <PatternBackground />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">
          <HyperText>SORRY, FEATURE NOT AVAILABLE YET</HyperText>
        </h1>
        
        <div className="mb-8">
          <LottiePlayer />
        </div>
      </div>

      <Footer />
    </div>
  )
} 