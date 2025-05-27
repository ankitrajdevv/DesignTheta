import Link from "next/link"
import { Twitter, Linkedin, Facebook, Youtube, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#080810] dark:bg-[#080810] py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mb-10">
          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            className="hover:text-[#FF6B00] transition-colors"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-[#FF6B00] transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="hover:text-[#FF6B00] transition-colors"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            aria-label="YouTube"
            className="hover:text-[#FF6B00] transition-colors"
          >
            <Youtube size={24} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-16 mb-10">
          <Link href="/about" className="uppercase font-medium hover:text-[#FF6B00] transition-colors">
            About Us
          </Link>
          <Link href="/services" className="uppercase font-medium hover:text-[#FF6B00] transition-colors">
            Services
          </Link>
        </div>

        {/* Copyright and Policy */}
        <div className="flex justify-center gap-8 mb-8">
          <p className="text-gray-400">© 2024-2025 The Design Theeta</p>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-[#FF6B00] transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center gap-8 text-gray-400 items-center">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <div className="w-px h-6 bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+91 XXXXX XXXXX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
