"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { CookieConsent } from "@/components/cookie-consent"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const GlassyCard = ({ service }) => {
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
      className="relative bg-white/80 dark:bg-[#0f0f1e]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-gray-800/50 
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
      <div className="relative z-10 mb-4">{service.icon}</div>
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
      <p className="relative z-10 text-slate-700 dark:text-gray-300">{service.description}</p>
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

export default function Home() {
  const slides = [
    {
      title: "DESIGN EXCELLENCE",
      description:
        "Need innovative design solutions? Looking to elevate your brand identity? Seeking creative approaches to visual challenges? The Design Theeta is your one-stop solution for a wide range of design services.",
      image: "/placeholder.svg?height=400&width=600&text=Design+Excellence",
    },
    {
      title: "BRAND IDENTITY",
      description:
        "Our branding experts craft memorable logos and comprehensive brand guidelines that capture your essence. We help businesses establish a strong, consistent visual presence across all touchpoints.",
      image: "/placeholder.svg?height=400&width=600&text=Brand+Identity",
    },
    {
      title: "UI/UX DESIGN",
      description:
        "We create intuitive, engaging interfaces that delight users and drive conversions. Our user-centered approach ensures your digital products are both beautiful and functional.",
      image: "/placeholder.svg?height=400&width=600&text=UI/UX+Design",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="container mx-auto py-8 md:py-16 px-4">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                  <div className="md:w-1/2 space-y-4 md:space-y-6">
                    <h1 className="text-[#FF6B00] text-3xl md:text-5xl lg:text-6xl font-bold">{slide.title}</h1>
                    <p className="text-slate-900 dark:text-white text-base md:text-lg">{slide.description}</p>
                  </div>
                  <div className="md:w-1/2 relative h-full">
                    <div className="relative h-[200px] md:h-[400px] w-full">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt="Design illustration"
                        width={0}
                        height={400}
                        className="object-contain"
                      />
                      <div className="absolute top-1/4 left-1/4 w-12 md:w-16 h-12 md:h-16 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="#00B3FF"
                            stroke="#00B3FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="absolute top-1/2 right-1/4 w-24 md:w-32 h-24 md:h-32 bg-[#00B3FF]/10 rounded-full"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-16 md:w-24 h-16 md:h-24 border-2 border-[#00B3FF] rounded-lg transform rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                className="text-slate-900 dark:text-white rounded-full p-1 md:p-2 hover:bg-[#FF6B00]/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </Button>
            </div>
            <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                className="text-slate-900 dark:text-white rounded-full p-1 md:p-2 hover:bg-[#FF6B00]/20"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </Button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-[#FF6B00]" : "bg-gray-500"
                  }`}
                  onClick={() => {
                    if (isAnimating) return
                    setIsAnimating(true)
                    setCurrentSlide(index)
                    setTimeout(() => {
                      setIsAnimating(false)
                    }, 500)
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-8 md:py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-8 md:mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Graphic Design",
                description:
                  "Creating visually impactful designs that tell your brand's unique story with professional excellence.",
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
                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                    <line x1="2" y1="20" x2="2" y2="20"></line>
                  </svg>
                ),
                color: "#FF6B00",
              },
              {
                title: "Web Development",
                description:
                  "Building modern websites and digital platforms that elevate your digital presence and brand identity.",
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                ),
                color: "#00B3FF",
              },
              {
                title: "Video Editing & Marketing",
                description:
                  "Comprehensive video editing and marketing solutions tailored to modern branding needs and digital storytelling.",
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
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                ),
                color: "#FF6B00",
              },
            ].map((service, index) => (
              <GlassyCard key={index} service={service} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieConsent />
    </div>
  )
}
