'use client'
import React, { useState } from 'react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { VelocityScroll } from "@/components/ui/velocity-scroll"
import { SplineViewer } from "@/components/ui/spline-viewer"
import { CompanyLogo } from "@/components/ui/company-logo"
import { ConsultationModal } from '@/components/ui/consultation-modal'

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
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6 dark:text-white">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our digital marketing agency helps businesses achieve their goals through comprehensive marketing services including SEO, PPC, social media marketing, and content creation.
            </p>
            <InteractiveHoverButton 
              className="bg-black text-white top-8 dark:border-gray-700"
              onClick={() => setIsModalOpen(true)}
            >
              Book a consultation
            </InteractiveHoverButton>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[400px]">
              <SplineViewer 
                url="https://prod.spline.design/im34Q0bGwdMea0iP/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 space-y-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Our Customers
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent" />
            <VelocityScroll 
              defaultVelocity={3} 
              numRows={2} 
              className="text-black/50 dark:text-white/50"
            >
              {COMPANIES.map((company, index) => (
                <React.Fragment key={company.name}>
                  <span className="inline-flex items-center mx-6" style={{ color: company.color }}>
                    <CompanyLogo
                      src={company.logo}
                      alt={`${company.name} logo`}
                      color={company.color}
                    />
                    <span className="text-2xl font-medium ml-3">{company.name}</span>
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