"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#FF6B00] py-4 px-6 flex flex-col sm:flex-row items-center justify-between z-50">
      <p className="text-black mb-4 sm:mb-0">This website uses cookies to improve your experience.</p>
      <Button onClick={() => setIsVisible(false)} className="bg-black text-white hover:bg-gray-800 border border-black">
        Got It
      </Button>
    </div>
  )
}
