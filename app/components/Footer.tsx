'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedUnderline } from '@/components/ui/animated-underline'
import { ArrowUp, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

const mainLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'WORK', href: '/sorry' },
  { name: 'ARCHIVE', href: '/sorry' },
  { name: 'NEWS', href: '/sorry' },
  { name: 'CONTACT', href: '/sorry' }
]

const socialLinks = [
  { name: 'TWITTER', href: '/sorry' },
  { name: 'INSTAGRAM', href: 'https://www.instagram.com/intasidd_26/' },
  { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/siddharth-dev-4513601bb' },
  { name: 'GITHUB', href: 'https://github.com/SiddArts-new' }
]

export default function Footer() {
  const { theme, toggleTheme } = useTheme()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#f7f7f7] dark:bg-gray-900 text-black dark:text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div>
            <h2 className="text-2xl font-medium mb-2">CONTACT US</h2>
            <p className="max-w-xs dark:text-gray-300">
              We look forward to hearing from you. Email us to collaborate.
            </p>
            <Link 
              href="mailto:info@weezard.studio" 
              className="inline-block mt-4 text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              info@weezard.studio
            </Link>
          </div>
          <div className="md:text-right flex justify-end items-start gap-4">
            <button 
              onClick={toggleTheme}
              className="border border-black dark:border-white p-3 hover:bg-[#3ee366] hover:text-white dark:hover:bg-[#3ee366] dark:hover:text-black transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle theme"
            >
              <div className="relative w-6 h-6">
                <Sun className={`w-6 h-6 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                <Moon className={`w-6 h-6 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              </div>
            </button>
            <button 
              onClick={scrollToTop}
              className="border border-black dark:border-white p-3 hover:bg-[#3ee366] hover:text-white dark:hover:bg-[#3ee366] dark:hover:text-black transition-all duration-300 transform hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-8 md:mb-0">
            <Image
              src="/logo.svg"
              alt="Weezard Logo"
              width={160}
              height={160}
              className="mb-4 fill-black dark:invert"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-2 mb-8 md:mb-0">
            {mainLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="hover:opacity-70 transition-opacity"
              >
                <AnimatedUnderline className="py-1">
                  {link.name}
                </AnimatedUnderline>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="hover:opacity-70 transition-opacity"
              >
                <AnimatedUnderline className="py-1">
                  {link.name}
                </AnimatedUnderline>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-sm dark:text-gray-300">
          <p>© {new Date().getFullYear()} <span className="hover:text-[#3ee366] transition-colors cursor-pointer">
            <AnimatedUnderline>Weezard</AnimatedUnderline>
          </span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 