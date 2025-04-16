'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HyperText } from '@/components/ui/hyper-text'
import Footer from '@/app/components/Footer'
import { PatternBackground } from '@/components/ui/pattern-background'
import { AnimatedUnderline } from '@/components/ui/animated-underline'
import { LordIcon } from '@/components/ui/lord-icon'
import Script from 'next/script'
import { ConsultationModal } from '@/components/ui/consultation-modal'

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen relative">
      <Script src="https://cdn.lordicon.com/lordicon.js" />
      <PatternBackground />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            <HyperText>Weezard.YOU KNOW THE WHAT.WE KNOW THE HOW.</HyperText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Reach wider audiences with content built to scale
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Photography',
                icon: <LordIcon src="https://cdn.lordicon.com/wsaaegar.json" />
              },
              { 
                title: 'Video',
                icon: <LordIcon src="https://cdn.lordicon.com/ugllxeyl.json" />
              },
              { 
                title: 'Animation',
                icon: <LordIcon src="https://cdn.lordicon.com/dvrtzmia.json" />
              },
              { 
                title: 'UGC',
                icon: <LordIcon src="https://cdn.lordicon.com/fikcyfpp.json" />
              },
              { 
                title: 'Production',
                icon: <LordIcon src="https://cdn.lordicon.com/tamskqkf.json" />
              },
              { 
                title: 'Design',
                icon: <LordIcon src="https://cdn.lordicon.com/exymduqj.json" />
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-[#3ee366]/50 cursor-pointer"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white text-center group-hover:text-[#3ee366] transition-colors duration-300">
                  <AnimatedUnderline>
                    {service.title}
                  </AnimatedUnderline>
                </h3>
                <p className="text-white/90 text-center">
                  Professional {service.title.toLowerCase()} services tailored to your needs
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-sm p-12 rounded-lg border border-white/20">
            <h2 className="text-4xl font-bold mb-8 text-white">
              <AnimatedUnderline>A space made for more</AnimatedUnderline>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Room to get more creative. Built to create more content. We're ready with all the equipment, 
              expertise and unique spaces to bring every stage of your story to life.
            </p>
            <p className="text-xl text-white/90">
              We share a roof, a wall and a strong disbelief in compartmentalizing creativity. 
              With easy access to art directors, set stylists, writers and other specialists, 
              we leave nothing to be desired for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-lg border border-white/20">
            <h2 className="text-4xl font-bold mb-8 text-white">
              <AnimatedUnderline>Ready to collaborate?</AnimatedUnderline>
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block group/contact relative"
            >
              <span className="block bg-white text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#3ee366] hover:text-black dark:bg-black dark:text-white hover:dark:bg-[#3ee366] hover:dark:text-black transition-colors">
                Get in Touch
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
} 