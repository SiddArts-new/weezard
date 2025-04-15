"use client"

import * as React from "react"
import { Mail } from "lucide-react"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function EmailDrawer() {
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Here you would typically handle the email submission
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated delay
    setIsSubmitting(false)
    setEmail("")
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-[#3ee366]/5 dark:hover:bg-black/5">
          <Mail className="h-4 w-4 dark:text-white" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Subscribe for Upcoming Offers</DrawerTitle>
            <DrawerDescription>Stay updated with our latest news and updates.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3ee366] dark:bg-gray-800"
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to receive marketing communications from us.
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
          <DrawerFooter>
            <button
              onClick={handleSubmit}
              disabled={!email || isSubmitting}
              className="w-full rounded-lg bg-black text-white dark:bg-black dark:text-white py-2 px-4 hover:bg-[#3ee366] dark:hover:bg-[#3ee366] dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
            <DrawerClose asChild>
              <button className="w-full rounded-lg border border-gray-200 dark:border-gray-700 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Cancel
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 