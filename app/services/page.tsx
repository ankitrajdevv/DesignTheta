"use client"

import { useState, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const GlassyServiceCard = ({ service }) => {
  const cardRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setOpacity(0)
  }

  return (
    <div
      ref={cardRef}
      className="relative bg-white/80 dark:bg-[#0f0f1e]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-200/50 dark:border-gray-800/50 
      transition-all duration-300 hover:scale-[1.02] overflow-hidden"
      style={{
        boxShadow: isHovered ? `0 0 30px ${service.color}40` : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${service.color}30 0%, transparent 50%)`,
          opacity: opacity,
        }}
      />
      <div className="relative z-10 w-16 h-16 mb-6 text-[${service.color}]">{service.icon}</div>
      <h2 className="relative z-10 text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h2>
      <ul className="relative z-10 text-slate-700 dark:text-gray-300 space-y-3">
        {service.items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
      <div
        className="absolute -inset-1 bg-gradient-to-r rounded-lg blur transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${service.color}20, transparent)`,
          opacity: opacity * 0.8,
        }}
      />
    </div>
  )
}

export default function ServicesPage() {
  const services = [
    {
      title: "Graphic Design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
          <line x1="2" y1="20" x2="2" y2="20"></line>
        </svg>
      ),
      color: "#FF6B00",
      items: [
        "Logo Design & Brand Identity",
        "Print Design & Layouts",
        "Digital Graphics & Illustrations",
        "Brand Guidelines & Style Guides",
        "Marketing Collateral Design",
        "Visual Content Creation",
      ],
    },
    {
      title: "Web Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      color: "#00B3FF",
      items: [
        "Website Design & Development",
        "Responsive Web Applications",
        "E-commerce Solutions",
        "Content Management Systems",
        "Web Page Designing",
        "Digital Platform Development",
      ],
    },
    {
      title: "Video Editing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      color: "#FF6B00",
      items: [
        "Professional Video Editing",
        "Motion Graphics & Animation",
        "Commercial Video Production",
        "Social Media Video Content",
        "Brand Storytelling Videos",
        "Digital Content Creation",
      ],
    },
    {
      title: "Marketing & Advertising",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
          <path d="M13 13l6 6"></path>
        </svg>
      ),
      color: "#00B3FF",
      items: [
        "Digital Marketing Strategies",
        "Brand Promotion Campaigns",
        "Social Media Marketing",
        "Advertising Design",
        "Content Marketing",
        "Commercial Photography",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="container mx-auto py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF6B00] mb-8">Our Services</h1>
          <p className="text-slate-900 dark:text-white text-lg mb-12 max-w-3xl">
            At The Design Theeta, we bridge design thinking with practical innovation across graphic design, marketing,
            and digital content creation. Our services are tailored to tell your brand's unique story and cater to
            modern branding needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <GlassyServiceCard key={index} service={service} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
