"use client"

import { useEffect, useState } from "react"

interface LocationMapProps {
  address: string
  name: string
  className?: string
  viewMapText?: string
}

export default function LocationMap({ address, name, className = "", viewMapText = "Zobacz na mapie" }: LocationMapProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Encode address for Google Maps
  const encodedAddress = encodeURIComponent(address)
  // Using Google Maps embed without API key (alternative method)
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  if (!mounted) {
    return (
      <div className={`w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-sm">Ładowanie mapy...</div>
      </div>
    )
  }

  return (
    <div className={`w-full overflow-hidden rounded-xl ${className}`}>
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
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
        />
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

