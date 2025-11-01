"use client"

import { useState } from "react"
import { useResponsiveVideo } from "@/hooks/use-responsive-video"

/**
 * VideoBackground Component
 * 
 * A responsive video background component that automatically switches between
 * desktop and mobile YouTube videos based on screen width.
 * 
 * Features:
 * - Responsive video selection (desktop: >768px, mobile: ≤768px)
 * - Optimized YouTube iframe with minimal token usage
 * - Autoplay, loop, muted with hidden controls
 * - Full background coverage with object-fit: cover
 * - Customizable dark overlay for text contrast
 * - Performance optimizations (GPU acceleration, pointer-events: none)
 * 
 * @param desktopToken - YouTube video token for desktop screens
 * @param mobileToken - YouTube video token for mobile screens
 * @param className - Additional CSS classes
 * @param overlayOpacity - Dark overlay opacity (0-1, default: 0.15)
 */
interface VideoBackgroundProps {
  desktopToken: string
  mobileToken: string
  className?: string
  overlayOpacity?: number
}

export default function VideoBackground({ 
  desktopToken, 
  mobileToken, 
  className = "",
  overlayOpacity = 0.15 
}: VideoBackgroundProps) {
  const { isDesktop, isLoaded, videoUrl } = useResponsiveVideo({
    desktopToken,
    mobileToken,
  })

  const [videoError, setVideoError] = useState(false)

  // Don't render until loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <div className={`absolute inset-0 bg-black ${className}`}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    )
  }

  if (videoError) {
    return (
      <div className={`absolute inset-0 bg-black ${className}`}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    )
  }

  return (
    <div className={`video-background absolute inset-0 w-full h-full z-0 ${className}`}>
      {/* Desktop Video Background - Optimized */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <iframe
          src={videoUrl}
          className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
          style={{
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.78vh", // 16:9 aspect ratio
            objectFit: "cover",
            willChange: "transform",
            transformOrigin: "center center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            perspective: "1000px",
          }}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen={false}
          frameBorder="0"
          loading="eager"
          title="Background Video"
          onLoad={() => setVideoError(false)}
          onError={() => setVideoError(true)}
        />
      </div>

      {/* Mobile Video Background - Optimized */}
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <iframe
          src={videoUrl}
          className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
          style={{
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.78vh", // 16:9 aspect ratio
            objectFit: "cover",
            willChange: "transform",
            transformOrigin: "center center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            perspective: "1000px",
          }}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen={false}
          frameBorder="0"
          loading="eager"
          title="Background Video"
          onLoad={() => setVideoError(false)}
          onError={() => setVideoError(true)}
        />
      </div>

      {/* Dark Overlay for Better Text Contrast - Optimized */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          willChange: "auto",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      ></div>
    </div>
  )
}
