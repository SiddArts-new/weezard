import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { CursorCompanion, CompanionProvider } from '@/components/ui/cursor-companion'

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
      <body className={inter.className}>
        <ThemeProvider>
          <CompanionProvider>
            <ScrollProgress />
            <CursorCompanion />
            {children}
          </CompanionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 