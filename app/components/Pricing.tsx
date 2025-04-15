'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SparkleButton } from '@/components/ui/sparkle-button'
import { cn } from '@/lib/utils'

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
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: tier.popular ? -20 : 0,
                scale: tier.popular ? 1.05 : 1
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300",
                tier.popular ? "shadow-xl hover:shadow-2xl z-10" : "shadow-sm hover:shadow-md"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black dark:bg-white px-3 py-1 rounded-full text-xs font-semibold text-white dark:text-black tracking-wide uppercase transform">
                  Best Value
                </div>
              )}
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold dark:text-white">${tier.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                {tier.name === 'Professional' ? (
                  <SparkleButton>Get Started</SparkleButton>
                ) : (
                  <button className="w-full py-2 px-4 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:bg-[#3ee366] dark:hover:bg-[#3ee366] dark:hover:text-white transition-colors">
                    Get Started
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
} 