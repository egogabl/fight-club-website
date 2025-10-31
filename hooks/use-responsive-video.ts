"use client"

import { useState, useEffect } from "react"

interface VideoConfig {
  desktopToken: string
  mobileToken: string
  breakpoint?: number
}

export function useResponsiveVideo(config: VideoConfig) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { desktopToken, mobileToken, breakpoint = 768 } = config

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > breakpoint)
      setIsLoaded(true)
    }

    // Initial check
    checkScreenSize()

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [breakpoint])

  const getVideoToken = () => {
    return isDesktop ? desktopToken : mobileToken
  }

  const getVideoUrl = () => {
    const token = getVideoToken()
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://localhost:3000'
    return `https://www.youtube.com/embed/${token}?autoplay=1&mute=1&loop=1&playlist=${token}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&hd=1&vq=hd1080&quality=hd1080&start=0&end=0&origin=${origin}&wmode=transparent&html5=1&preload=auto&autohide=0&theme=dark&color=white&enablejsapi=1&playerapiid=ytplayer`
  }

  return {
    isDesktop,
    isLoaded,
    videoToken: getVideoToken(),
    videoUrl: getVideoUrl(),
  }
}
