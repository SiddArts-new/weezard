'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const CaseStudyCard = ({ description }) => {
  return (
    <motion.div 
      className="bg-black text-white p-4 md:p-6 rounded-lg"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <p className="mb-4 text-sm md:text-base">{description}</p>
      <Link href="/sorry">
        <button className="flex items-center text-xs md:text-sm text-white hover:opacity-75">
          Learn more
          <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Link>
    </motion.div>
  )
}

const CaseStudies = () => {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4 dark:text-white">
          Case Studies
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          Discover how we've helped businesses like yours achieve remarkable growth through our digital marketing expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {/* Case Study Card 1 */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-40 md:h-48 bg-gradient-to-r from-blue-500 to-purple-500">
            {/* Placeholder for case study image */}
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white">E-commerce Growth Strategy</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
              How we helped an online retailer increase their revenue by 150% through targeted digital marketing campaigns.
            </p>
            <button className="flex items-center text-xs md:text-sm text-gray-900 dark:text-white hover:opacity-75">
              Learn more
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Case Study Card 2 */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-40 md:h-48 bg-gradient-to-r from-green-500 to-teal-500">
            {/* Placeholder for case study image */}
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white">B2B Lead Generation</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
              Generating 200+ qualified leads per month for a SaaS company through content marketing and SEO.
            </p>
            <button className="flex items-center text-xs md:text-sm text-gray-900 dark:text-white hover:opacity-75">
              Learn more
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Case Study Card 3 */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-40 md:h-48 bg-gradient-to-r from-red-500 to-pink-500">
            {/* Placeholder for case study image */}
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white">Social Media Success</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
              Building a strong social media presence that increased engagement by 300% for a lifestyle brand.
            </p>
            <button className="flex items-center text-xs md:text-sm text-gray-900 dark:text-white hover:opacity-75">
              Learn more
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CaseStudies 