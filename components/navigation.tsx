"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLanguage } from "./language-provider"

const languageFlags = {
  pl: "🇵🇱",
  uk: "🇺🇦", 
  en: "🇺🇸",
  by: "⚪🔴⚪",
}

const translations = {
  pl: {
    nav: {
      home: "Główna",
      directions: "Kierunki sportu",
      disciplines: "Dyscypliny",
      educationalCenter: "Centrum Edukacyjne",
      schedule: "Grafik",
      trainers: "Trenerzy",
      pricing: "Cennik i systemy opłat",
      news: "Aktualności",
      contacts: "Kontakt",
    },
  },
  uk: {
    nav: {
      home: "Головна",
      directions: "Напрямки",
      disciplines: "Дисципліни",
      educationalCenter: "Освітній Центр",
      schedule: "Розклад",
      trainers: "Тренери",
      pricing: "Ціни",
      news: "Новини",
      contacts: "Контакти",
    },
  },
  en: {
    nav: {
      home: "Home",
      directions: "Directions",
      disciplines: "Disciplines",
      educationalCenter: "Educational Center",
      schedule: "Schedule",
      trainers: "Trainers",
      pricing: "Pricing",
      news: "News",
      contacts: "Contacts",
    },
  },
  by: {
    nav: {
      home: "Галоўная",
      directions: "Кірункі",
      disciplines: "Дысцыпліны",
      educationalCenter: "Адукацыйны цэнтр",
      schedule: "Расклад",
      trainers: "Трэнеры",
      pricing: "Кошт",
      news: "Навіны",
      contacts: "Кантакты",
    },
  },
}

export default function Navigation() {
  const { currentLang, setCurrentLang } = useLanguage()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const t = translations[currentLang] || translations.pl

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    setIsLanguageDropdownOpen(false)
    
    if (sectionId === "home") {
      router.push("/")
    } else if (sectionId === "directions") {
      router.push("/#activities")
    } else if (sectionId === "educationalCenter") {
      router.push("/educational-center")
    } else if (sectionId === "schedule") {
      router.push("/schedule")
    } else if (sectionId === "trainers") {
      router.push("/coaches")
    } else if (sectionId === "pricing") {
      router.push("/pricing")
    } else if (sectionId === "contacts") {
      router.push("/contact")
    } else if (sectionId === "news") {
      router.push("/news")
    }
  }

  const handleLanguageChange = (lang: "pl" | "uk" | "en" | "by") => {
    setCurrentLang(lang)
    setIsLanguageDropdownOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Fixed Header - Wider and more spacious */}
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo - Bigger */}
            <Link href="/" className="flex items-center space-x-4 group">
              <img
                src="/volat-logo-simple.png"
                alt="VOLAT Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-white font-serif group-hover:text-red-400 transition-colors duration-300">
                  VOLAT
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation - Completely hidden, only burger menu */}
            <div className="hidden">
              {/* Navigation links removed - only burger menu is used */}
            </div>

            {/* Right side controls - Language + Burger Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Dropdown - Bigger */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-white/10"
                >
                  <span className="text-xl">{languageFlags[currentLang]}</span>
                  <span className="text-base font-medium text-white">{currentLang.toUpperCase()}</span>
                  <svg
                    className={`w-5 h-5 text-white/80 transition-transform duration-500 ease-out ${
                      isLanguageDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-40 bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl z-[10000] animate-in fade-in slide-in-from-top-2 duration-300">
                    {Object.entries(languageFlags).map(([lang, flag]) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang as "pl" | "uk" | "en" | "by")}
                        className={`w-full flex items-center space-x-4 px-5 py-4 text-left hover:bg-white/10 transition-all duration-200 ease-out ${
                          currentLang === lang ? "bg-white/20 text-white" : "text-white/80 hover:text-white"
                        } ${lang === "pl" ? "rounded-t-xl" : ""} ${lang === "by" ? "rounded-b-xl" : ""}`}
                      >
                        <span className="text-xl">{flag}</span>
                        <span className="text-base font-medium">{lang.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Navigation Button - Always visible */}
              <button
                ref={mobileMenuButtonRef}
                onClick={toggleMobileMenu}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
                aria-expanded={isMobileMenuOpen}
                aria-label="Open navigation menu"
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Navigation Menu - Works on all devices */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[10001] animate-in fade-in duration-300">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel - Responsive width */}
          <div className="absolute top-0 right-0 w-96 h-full bg-black/90 backdrop-blur-lg border-l border-white/20 lg:w-[400px] z-[10002] animate-in slide-in-from-right duration-500 ease-out">
            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-4">
                  <img
                    src="/volat-logo-simple.png"
                    alt="VOLAT Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-white font-bold text-xl">VOLAT</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-white/10"
                  aria-label="Close menu"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation - Bigger buttons */}
              <nav className="flex-1">
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => handleNavigation("home")}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.home}
                  </button>
                  <button
                    onClick={() => handleNavigation("directions")}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.directions}
                  </button>
                  <Link
                    href="/disciplines"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg block hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.disciplines}
                  </Link>
                  <button
                    onClick={() => handleNavigation("schedule")}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.schedule}
                  </button>
                  <button
                    onClick={() => handleNavigation("trainers")}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.trainers}
                  </button>
                  <button
                    onClick={() => handleNavigation("pricing")}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.pricing}
                  </button>
                  <button
                    onClick={() => handleNavigation("news")}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.news}
                  </button>
                  <button
                    onClick={() => handleNavigation("contacts")}
                    className="text-left font-medium text-white/90 hover:text-white transition-all duration-200 ease-out py-4 px-6 rounded-xl hover:bg-white/10 text-lg hover:shadow-lg hover:shadow-white/10"
                  >
                    {t.nav.contacts}
                  </button>
                </div>
              </nav>

              {/* Language Selection - Bigger */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-white/70 text-sm font-medium mb-4 text-center">Wybierz język / Choose language</h3>
                <div className="flex items-center justify-center space-x-4">
                  {Object.entries(languageFlags).map(([lang, flag]) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang as "pl" | "uk" | "en" | "by")}
                      className={`p-4 rounded-xl transition-all duration-200 ease-out ${
                        currentLang === lang 
                          ? "bg-white/20 text-white border border-white/30 shadow-lg shadow-white/20" 
                          : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20 hover:shadow-lg hover:shadow-white/10"
                      }`}
                    >
                      <span className="text-2xl">{flag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}