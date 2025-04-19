'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedUnderline } from '@/components/ui/animated-underline'
import { ArrowUp, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { useCompanion } from '@/components/ui/cursor-companion'
import { TextAlignLeftIcon } from '@radix-ui/react-icons'

// main navigation links
const mainLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'WORK', href: '/sorry' },
  { name: 'ARCHIVE', href: '/sorry' },
  { name: 'NEWS', href: '/sorry' },
  { name: 'CONTACT', href: '/sorry' }
]

// social media links
const socialLinks = [
  { name: 'TWITTER', href: '/sorry' },
  { name: 'INSTAGRAM', href: 'https://www.instagram.com/intasidd_26/' },
  { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/siddharth-dev-4513601bb' },
  { name: 'GITHUB', href: 'https://github.com/SiddArts-new' }
]

export default function Footer() {
  const { theme, toggleTheme } = useTheme()
  const { companion, setCompanion } = useCompanion()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCompanionToggle = (type: 'wizard' | 'ghost' | 'cat') => {
    if (companion === type) {
      setCompanion(null) // turn off if already selected
    } else {
      setCompanion(type) // switch to new companion
    }
  }

  return (
    <footer className="bg-[#f7f7f7] dark:bg-gray-900 text-black dark:text-white py-8 md:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-24">
          <div>
            <h2 className="text-xl md:text-2xl font-medium mb-2">CONTACT US</h2>
            <p className="max-w-xs text-sm md:text-base dark:text-gray-300">
              We look forward to hearing from you. Email us to collaborate.
            </p>
            <Link 
              href="mailto:info@weezard.studio" 
              className="inline-block mt-4 text-sm md:text-base text-black dark:text-white hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md"
              aria-label="Send email to info@weezard.studio"
            >
              info@weezard.studio
            </Link>
          </div>
          <div className="md:text-right flex flex-col items-start md:items-end gap-4">
            {/* companion selector */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="text-sm font-medium">Cursor Companions:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCompanionToggle('wizard')}
                  className={`border p-2 md:p-3 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md ${
                    companion === 'wizard'
                      ? 'border-[#3ee366] bg-[#3ee366] text-white'
                      : 'border-black dark:border-white hover:bg-[#3ee366] hover:text-white dark:hover:bg-[#3ee366] dark:hover:text-black'
                  }`}
                  aria-label={companion === 'wizard' ? 'Turn off wizard companion' : 'Select wizard companion'}
                >
                  🧙‍♂️
                </button>
                <button
                  onClick={() => handleCompanionToggle('ghost')}
                  className={`border p-2 md:p-3 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md ${
                    companion === 'ghost'
                      ? 'border-[#3ee366] bg-[#3ee366] text-white'
                      : 'border-black dark:border-white hover:bg-[#3ee366] hover:text-white dark:hover:bg-[#3ee366] dark:hover:text-black'
                  }`}
                  aria-label={companion === 'ghost' ? 'Turn off ghost companion' : 'Select ghost companion'}
                >
                  👻
                </button>
                <button
                  onClick={() => handleCompanionToggle('cat')}
                  className={`border p-2 md:p-3 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md ${
                    companion === 'cat'
                      ? 'border-[#3ee366] bg-[#3ee366] text-white'
                      : 'border-black dark:border-white hover:bg-[#3ee366] hover:text-white dark:hover:bg-[#3ee366] dark:hover:text-black'
                  }`}
                  aria-label={companion === 'cat' ? 'Turn off cat companion' : 'Select cat companion'}
                >
                  🐱
                </button>
              </div>
            </div>
            {/* theme and scroll buttons */}
            <div className="flex gap-2">
              <button 
                onClick={toggleTheme}
                className="border border-black dark:border-white p-2 md:p-3 hover:bg-[#3ee366] hover:text-white dark:hover:bg-[#3ee366] dark:hover:text-black transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <div className="relative w-5 h-5 md:w-6 md:h-6">
                  <Sun className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} aria-hidden="true" />
                  <Moon className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} aria-hidden="true" />
                </div>
              </button>
              <button 
                onClick={scrollToTop}
                className="border border-black dark:border-white p-2 md:p-3 hover:bg-[#3ee366] hover:text-white dark:hover:bg-[#3ee366] dark:hover:text-black transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md"
                aria-label="Scroll to top of page"
              >
                <ArrowUp className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="Weezard Logo"
              width={120}
              height={120}
              className="mb-4 fill-black dark:invert"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4 md:mb-0">
            {mainLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-sm md:text-base hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md"
                aria-label={`Navigate to ${link.name} page`}
              >
                <AnimatedUnderline className="py-1">
                  {link.name}
                </AnimatedUnderline>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:flex-col gap-2 items-end">
            {socialLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-sm md:text-base hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ee366] focus-visible:ring-offset-2 rounded-md "
                aria-label={`Visit our ${link.name} profile`}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <AnimatedUnderline className="py-1">
                  {link.name}
                </AnimatedUnderline>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-xs md:text-sm dark:text-gray-300">
          <p>© {new Date().getFullYear()} <span className="hover:text-[#3ee366] transition-colors cursor-pointer">
            <AnimatedUnderline>Weezard</AnimatedUnderline>
          </span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 