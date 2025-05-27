"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  // Close the menu when a path changes
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className="fixed top-0 left-0 right-0 bg-white dark:bg-[#0a0a14] shadow-lg transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? "translateY(0)" : "translateY(-100%)", maxHeight: "80vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-slate-900 dark:text-white">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className={`block p-3 rounded-md text-lg ${
                  pathname === "/"
                    ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block p-3 rounded-md text-lg ${
                  pathname === "/services"
                    ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block p-3 rounded-md text-lg ${
                  pathname === "/about"
                    ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                ABOUT US
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
              <Link
                href="/contact"
                className="block w-full p-3 text-center bg-[#FF6B00] hover:bg-[#FF8C40] text-white rounded-md"
                onClick={onClose}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
