'use client'
import React, { useState, Suspense } from 'react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { VelocityScroll } from "@/components/ui/velocity-scroll"
import dynamic from 'next/dynamic'
import { CompanyLogo } from "@/components/ui/company-logo"
import { ConsultationModal } from '@/components/ui/consultation-modal'

const SplineViewer = dynamic(() => import('@/components/ui/spline-viewer').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-8 h-8 border-4 border-gray-300 dark:border-gray-600 border-t-[#3ee366] rounded-full animate-spin" />
    </div>
  )
})

const COMPANIES = [
  { name: 'Amazon', color: '#FF9900', logo: '/amazon.svg' },
  { name: 'Dribble', color: '#EA4C89', logo: '/dribble.svg' },
  { name: 'HubSpot', color: '#FF7A59', logo: '/hubspot.svg' },
  { name: 'Notion', color: '#000000', logo: '/notion.svg' },
  { name: 'Netflix', color: '#E50914', logo: '/netfile.svg' },
  { name: 'Zoom', color: '#2DD4F4', logo: '/zoom.svg' },
]

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="container mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 dark:text-white">
              Navigating the digital landscape for success
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
              Our digital marketing agency helps businesses achieve their goals through comprehensive marketing services including SEO, PPC, social media marketing, and content creation.
            </p>
            <div className="flex justify-center md:justify-start">
              <InteractiveHoverButton 
                className="bg-black text-white top-8 dark:border-gray-700"
                onClick={() => setIsModalOpen(true)}
              >
                Book a consultation
              </InteractiveHoverButton>
            </div>
          </div>
          
          <div className="relative order-first md:order-last">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <div className="w-8 h-8 border-4 border-gray-300 dark:border-gray-600 border-t-[#3ee366] rounded-full animate-spin" />
                </div>
              }>
                <SplineViewer 
                  url="https://prod.spline.design/im34Q0bGwdMea0iP/scene.splinecode"
                  className="w-full h-full"
                />
              </Suspense>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 space-y-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 dark:text-white">
            Our Customers
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent" />
            <VelocityScroll 
              defaultVelocity={3} 
              numRows={2} 
              className="text-black/50 dark:text-white/50"
            >
              {COMPANIES.map((company, index) => (
                <React.Fragment key={company.name}>
                  <span className="inline-flex items-center mx-3 md:mx-6" style={{ color: company.color }}>
                    <CompanyLogo
                      src={company.logo}
                      alt={`${company.name} logo`}
                      color={company.color}
                    />
                    <span className="text-xl md:text-2xl font-medium ml-2 md:ml-3">{company.name}</span>
                  </span>
                </React.Fragment>
              ))}
            </VelocityScroll>
          </div>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default Hero 