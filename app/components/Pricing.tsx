'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SparkleButton } from '@/components/ui/sparkle-button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Basic SEO optimization',
      'Social media presence',
      'Monthly analytics report',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '99',
    description: 'Ideal for growing businesses looking to expand',
    features: [
      'Advanced SEO strategies',
      'Content marketing',
      'Weekly analytics reports',
      'Priority email support',
      'Social media management',
      'PPC campaign setup'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '299',
    description: 'For large organizations requiring full service',
    features: [
      'Custom marketing strategy',
      'Dedicated account manager',
      'Daily analytics & reports',
      '24/7 priority support',
      'Advanced content marketing',
      'Full social media management',
      'Custom integrations'
    ]
  }
]

export default function Pricing() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900">
      <section className="container mx-auto py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 dark:text-white">Our Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: tier.popular ? -3 : 0,
                scale: tier.popular ? 1.05 : 1
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
              className={cn(
                "relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 h-full flex flex-col",
                tier.popular ? "shadow-xl hover:shadow-2xl z-10" : "shadow-sm hover:shadow-md"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black dark:bg-white px-3 py-1 rounded-full text-xs font-semibold text-white dark:text-black tracking-wide uppercase transform">
                  Best Value
                </div>
              )}
              <div className="flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold dark:text-white">${tier.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">{tier.description}</p>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
                      <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {tier.name === 'Professional' ? (
                    <Link href="/sorry">
                      <SparkleButton className="w-full bg-black text-white dark:bg-black dark:text-white hover:bg-[#3ee366] dark:hover:bg-[#3ee366] dark:hover:text-white">
                        Get Started
                      </SparkleButton>
                    </Link>
                  ) : (
                    <Link href="/sorry">
                      <button className="w-full py-2 px-4 rounded-lg bg-black text-white dark:bg-black dark:text-white hover:bg-[#3ee366] dark:hover:bg-[#3ee366] dark:hover:text-white transition-colors">
                        Get Started
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
} 