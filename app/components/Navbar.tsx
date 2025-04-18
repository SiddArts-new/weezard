"use client"

import { CalendarIcon, HomeIcon, MailIcon, PencilIcon, Moon, Sun } from "lucide-react"
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, useMotionValue } from 'framer-motion'
import { useState } from 'react'
import { Dock, DockIcon } from '@/components/ui/dock'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/theme-provider'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { EmailDrawer } from "@/components/ui/email-drawer"
import React from 'react'

// icon components
const Icons = {
  Email: (props) => <MailIcon {...props} />,
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  email: () => <EmailDrawer />,
}

// navigation links
const LINKS = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/about", icon: PencilIcon, label: "Blog" },
]

// social media links
const SOCIAL = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/SiddArts-new",
    icon: Icons.github,
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/siddharth-dev-4513601bb",
    icon: Icons.linkedin,
  },
  Email: {
    name: "Send Email",
    url: "#",
    icon: Icons.email,
  },
}

export const Navbar = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  let scrollTimeout: NodeJS.Timeout

  useMotionValueEvent(scrollY, "change", (latest) => {
    clearTimeout(scrollTimeout)
    setIsScrolling(true)
    setHidden(latest > 50)

    scrollTimeout = setTimeout(() => {
      setIsScrolling(false)
      setHidden(false)
    }, 1000)
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolling 
          ? 'backdrop-blur-none bg-transparent' 
          : 'backdrop-blur-md bg-black/4 dark:bg-black/30'
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold dark:text-white">
            Weezard
          </Link>
          
          {/* mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* desktop menu */}
          <div className="hidden md:block">
            <TooltipProvider>
              <div className="flex h-16 items-end gap-4 rounded-2xl bg-black/5 dark:bg-white/5">
                <Dock>
                  {[
                    <DockIcon key="home">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href="/"
                            aria-label="Home"
                            className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                          >
                            <HomeIcon className="h-4 w-4 dark:text-white" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Home</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>,
                    <DockIcon key="theme">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={toggleTheme}
                            className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                            aria-label="Toggle theme"
                          >
                            {theme === 'light' ? (
                              <Moon className="h-4 w-4" />
                            ) : (
                              <Sun className="h-4 w-4 text-white" />
                            )}
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Toggle theme</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>,
                    <DockIcon key="blog">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href="/about"
                            aria-label="Blog"
                            className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                          >
                            <PencilIcon className="h-4 w-4 dark:text-white" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Blog</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>,
                    ...Object.entries(SOCIAL).map(([name, social]) => (
                      <DockIcon key={name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={social.url}
                              aria-label={social.name}
                              className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                            >
                              <social.icon className="h-4 w-4 dark:text-white" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </DockIcon>
                    ))
                  ]}
                </Dock>
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <link.icon className="h-5 w-5 dark:text-white" />
                </div>
                <span className="dark:text-white">{link.label}</span>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 w-full"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5 text-white" />
              )}
              <span className="dark:text-white">Toggle theme</span>
            </button>
            {Object.entries(SOCIAL).map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <social.icon className="h-5 w-5 dark:text-white" />
                </div>
                <span className="dark:text-white">{name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
} 