"use client"

import { useState } from "react"
import { X, Zap, Gift, Truck } from "lucide-react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  const announcements = [
    {
      icon: Zap,
      text: "Flash Sale: Up to 50% off on selected items!",
      cta: "Shop Now",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Truck,
      text: "Free shipping on all orders over $50",
      cta: "Learn More",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gift,
      text: "New arrivals: Premium collection now available",
      cta: "Explore",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const currentAnnouncement = announcements[0] // You can rotate these

  if (!isVisible) return null

  return (
    <div className={`bg-gradient-to-r ${currentAnnouncement.color} text-white py-3 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center gap-3 text-sm font-medium">
          <currentAnnouncement.icon className="h-4 w-4 animate-pulse" />
          <span className="text-center">{currentAnnouncement.text}</span>
          <button className="underline hover:no-underline font-semibold">{currentAnnouncement.cta}</button>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
