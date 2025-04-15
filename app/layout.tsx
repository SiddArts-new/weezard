import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalPointer } from '@/components/ui/global-pointer'
import { ScrollProgressDemo } from '@/app/components/ScrollProgressDemo'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weezard - Digital Marketing Agency',
  description: 'Your partner in digital success',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} cursor-none`}>
        <ThemeProvider>
          <GlobalPointer />
          <ScrollProgressDemo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 