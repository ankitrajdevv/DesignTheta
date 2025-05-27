"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { Menu } from "lucide-react"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <>
      <header className="py-4 px-4 bg-white dark:bg-[#0a0a14] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#FF6B00"
                  stroke="#FF6B00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#FF6B00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#FF6B00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-slate-900 dark:text-white text-xl font-medium">The Design Theeta</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="text-slate-900 dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/services"
                className="text-slate-900 dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className="text-slate-900 dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors"
              >
                ABOUT US
              </Link>
            </nav>
            <ThemeToggle />
            <Link href="/contact" className="bg-[#FF6B00] hover:bg-[#FF8C40] text-white rounded-md px-4 py-2">
              Contact us
            </Link>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="text-slate-900 dark:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
