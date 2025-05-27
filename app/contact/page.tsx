"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 1500)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="container mx-auto py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF6B00] mb-8">Contact Us</h1>
          <p className="text-slate-900 dark:text-white text-lg mb-12 max-w-3xl">
            Have a project in mind or want to learn more about our services? Get in touch with The Design Theeta team
            and let's transform your ideas into visually impactful stories together.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-white dark:bg-[#0f0f1e] p-8 rounded-lg border border-green-500 flex flex-col items-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Thank You!</h2>
                  <p className="text-slate-700 dark:text-gray-300 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-[#FF6B00] hover:bg-[#FF8C40] text-white">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white dark:bg-[#0f0f1e] p-8 rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-900 dark:text-white">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-white dark:bg-[#161630] border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white ${errors.name ? "border-red-500" : ""}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-900 dark:text-white">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-white dark:bg-[#161630] border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white ${errors.email ? "border-red-500" : ""}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-900 dark:text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white dark:bg-[#161630] border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-900 dark:text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white dark:bg-[#161630] border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message" className="text-slate-900 dark:text-white">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-white dark:bg-[#161630] border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    className="bg-[#FF6B00] hover:bg-[#FF8C40] text-white w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-[#0f0f1e] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF6B00]/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email Us</h3>
                    <p className="text-slate-700 dark:text-gray-300 mb-2">For general inquiries:</p>
                    <a href="mailto:info@thedesigntheeta.com" className="text-[#FF6B00] hover:underline">
                      info@thedesigntheeta.com
                    </a>
                    <p className="text-slate-700 dark:text-gray-300 mt-2 mb-2">For collaborations:</p>
                    <a href="mailto:collaborate@thedesigntheeta.com" className="text-[#FF6B00] hover:underline">
                      collaborate@thedesigntheeta.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0f0f1e] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-[#00B3FF]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#00B3FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Call Us</h3>
                    <p className="text-slate-700 dark:text-gray-300 mb-2">Monday to Friday, 9am - 6pm:</p>
                    <span className="text-[#00B3FF]">+91 XXXXX XXXXX</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0f0f1e] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF6B00]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Visit Us</h3>
                    <p className="text-slate-700 dark:text-gray-300">
                      The Design Theeta
                      <br />
                      Bengaluru, Karnataka
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
