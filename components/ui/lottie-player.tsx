'use client'

import { useEffect } from 'react'

export function LottiePlayer() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs'
    script.type = 'module'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <dotlottie-player
      src="https://lottie.host/22f00aaf-90f5-4cf8-9176-c73704310583/UA3cutzh7U.lottie"
      background="transparent"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
    />
  )
} 