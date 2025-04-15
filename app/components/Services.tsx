'use client'
import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence.',
    icon: '📈',
    color: 'bg-blue-50 dark:bg-blue-900/50',
    textColor: 'text-blue-600 dark:text-blue-400',
    grid: 'col-span-2 row-span-1'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic.',
    icon: '🔍',
    color: 'bg-green-50 dark:bg-green-900/50',
    textColor: 'text-green-600 dark:text-green-400',
    grid: 'col-span-1 row-span-3'
  },
  {
    title: 'Social Media',
    description: 'Engage with your audience and build brand awareness across platforms.',
    icon: '📱',
    color: 'bg-purple-50 dark:bg-purple-900/50',
    textColor: 'text-purple-600 dark:text-purple-400',
    grid: 'col-span-1 row-span-1'
  },
  {
    title: 'Content Creation',
    description: 'High-quality content that resonates with your target audience.',
    icon: '✍️',
    color: 'bg-yellow-50 dark:bg-yellow-900/50',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    grid: 'col-span-1 row-span-1'
  },
  {
    title: 'Analytics',
    description: 'Data-driven insights to optimize your marketing performance.',
    icon: '📊',
    color: 'bg-red-50 dark:bg-red-900/50',
    textColor: 'text-red-600 dark:text-red-400',
    grid: 'col-span-2 row-span-1'
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Services</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${service.grid} ${service.color} p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg`}
          >
            <div className="flex flex-col h-full">
              <span className={`text-4xl mb-4 ${service.textColor}`}>{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 