"use client"

interface FooterProps {
  currentLang?: "pl" | "uk" | "en" | "by"
}

const translations = {
  pl: {
    nav: {
      home: "Główna",
      directions: "Kierunki",
      educationalCenter: "Centrum Edukacyjne",
      schedule: "Grafik",
      trainers: "Trenerzy",
      news: "Aktualności",
      contacts: "Kontakt",
    },
    copyright: "Wszystkie prawa zastrzeżone."
  },
  uk: {
    nav: {
      home: "Головна",
      directions: "Напрямки",
      educationalCenter: "Освітній Центр",
      schedule: "Розклад",
      trainers: "Тренери",
      news: "Новини",
      contacts: "Контакти",
    },
    copyright: "Всі права захищені."
  },
  en: {
    nav: {
      home: "Home",
      directions: "Directions",
      educationalCenter: "Educational Center",
      schedule: "Schedule",
      trainers: "Trainers",
      news: "News",
      contacts: "Contacts",
    },
    copyright: "All rights reserved."
  },
  by: {
    nav: {
      home: "Галоўная",
      directions: "Кірункі",
      educationalCenter: "Адукацыйны цэнтр",
      schedule: "Расклад",
      trainers: "Трэнеры",
      news: "Навіны",
      contacts: "Кантакты",
    },
    copyright: "Усе правы абаронены."
  },
}

export default function Footer({ currentLang = "pl" }: FooterProps) {
  const t = translations[currentLang] || translations.pl

  return (
    <footer className="bg-black/80 backdrop-blur-lg border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="flex items-center space-x-3">
            <img
              src="/volat-logo-simple.png"
              alt="VOLAT Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-white font-bold text-lg">VOLAT</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <a href="/" className="hover:text-red-400 transition-colors">{t.nav.home}</a>
            <a href="/#activities" className="hover:text-red-400 transition-colors">{t.nav.directions}</a>
            <a href="/educational-center" className="hover:text-red-400 transition-colors">{t.nav.educationalCenter}</a>
            <a href="/schedule" className="hover:text-red-400 transition-colors">{t.nav.schedule}</a>
            <a href="/coaches" className="hover:text-red-400 transition-colors">{t.nav.trainers}</a>
            <a href="/news" className="hover:text-red-400 transition-colors">{t.nav.news}</a>
            <a href="/contact" className="hover:text-red-400 transition-colors">{t.nav.contacts}</a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-sm text-white/50">
          © 2025 VOLAT. {t.copyright}
        </div>
      </div>
    </footer>
  )
}
