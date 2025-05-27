"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const GlassyValueCard = ({ value }) => {
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

  const color = value.title === "Collaboration & Innovation" ? "#00B3FF" : "#FF6B00"

  return (
    <div
      ref={cardRef}
      className="relative bg-white/80 dark:bg-[#0f0f1e]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-gray-800/50 
      transition-all duration-300 hover:scale-[1.02] overflow-hidden"
      style={{
        boxShadow: isHovered ? `0 0 30px ${color}40` : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${color}30 0%, transparent 50%)`,
          opacity: opacity,
        }}
      />
      <div className="relative z-10 mb-4">{value.icon}</div>
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
      <p className="relative z-10 text-slate-700 dark:text-gray-300">{value.description}</p>
      <div
        className="absolute -inset-1 bg-gradient-to-r rounded-lg blur transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${color}20, transparent)`,
          opacity: opacity * 0.8,
        }}
      />
    </div>
  )
}

export default function AboutPage() {
  const values = [
    {
      title: "Design-Driven Storytelling",
      description:
        "We transform ideas into visually impactful stories that resonate with your audience and elevate your brand.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14,2 14,8 20,8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10,9 9,9 8,9"></polyline>
        </svg>
      ),
    },
    {
      title: "Collaboration & Innovation",
      description:
        "We work closely with clients, academic circles, and student communities to foster creative innovation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00B3FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Nurturing Talent",
      description:
        "We are committed to nurturing emerging talent and providing opportunities for growth in design-driven industries.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="container mx-auto py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF6B00] mb-8">About Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-slate-900 dark:text-white text-lg mb-6">
                The Design Theeta was established in 2024 as an emerging creative startup that bridges design thinking
                with practical innovation. Founded with a vision to transform ideas into visually impactful stories, we
                focus on delivering engaging and professional design solutions that cater to modern branding needs.
              </p>
              <p className="text-slate-900 dark:text-white text-lg mb-6">
                Built on a foundation of creativity and collaboration, The Design Theeta offers services in graphic
                design, video editing, web development, and marketing—all tailored to tell a brand's unique story. With
                our distinctive motto, "You. We. Make It Happen," we emphasize teamwork and client-centric design to
                bring concepts to life.
              </p>
              <p className="text-slate-900 dark:text-white text-lg">
                Based in Bengaluru, Karnataka, and registered under UDYAM (UDYAM-KR-03-0426010), we collaborate with
                academic circles and student communities, acting as both a design studio and an incubator of visual
                innovation.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Design Theta team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <GlassyValueCard key={index} value={value} />
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Jayjeeva.N",
                role: "Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "xxxxxx",
                role: "UI/UX Lead",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "xxxxxx",
                role: "Brand Strategist",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "xxxxxx",
                role: "Web Developer",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-[#0f0f1e]/80 backdrop-blur-sm rounded-lg overflow-hidden
                transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,179,255,0.3)]"
              >
                <div className="relative h-[300px] w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="relative z-10 p-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-slate-700 dark:text-gray-300">{member.role}</p>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00B3FF]/0 via-[#00B3FF]/10 to-[#00B3FF]/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
