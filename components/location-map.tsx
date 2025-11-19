"use client"

import { useEffect, useState, useRef } from "react"

interface LocationMapProps {
  address: string
  name: string
  className?: string
  viewMapText?: string
}

export default function LocationMap({ address, name, className = "", viewMapText = "Zobacz na mapie" }: LocationMapProps) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Intersection Observer для lazy loading карты
  useEffect(() => {
    if (!mounted || !mapRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "50px" } // Начинаем загрузку за 50px до появления в viewport
    )

    observer.observe(mapRef.current)

    return () => {
      observer.disconnect()
    }
  }, [mounted])

  // Encode address for Google Maps
  const encodedAddress = encodeURIComponent(address)
  // Using Google Maps embed with satellite view (t=k) and optimized parameters
  // t=k = satellite view, z=17 = closer zoom, output=embed for iframe
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=k&z=17&ie=UTF8&iwloc=&output=embed`

  if (!mounted) {
    return (
      <div className={`w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-sm">Ładowanie mapy...</div>
      </div>
    )
  }

  return (
    <div className={`w-full overflow-hidden rounded-xl ${className}`} ref={mapRef}>
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
        {isVisible ? (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
            title={`${name} - ${address}`}
            className="w-full h-full"
            importance="low"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <div className="text-gray-500 text-sm">Ładowanie mapy...</div>
          </div>
        )}
      </div>
      <div className="mt-3 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-300 text-sm font-medium inline-flex items-center gap-2 transition-colors"
        >
          {viewMapText} →
        </a>
      </div>
    </div>
  )
}

