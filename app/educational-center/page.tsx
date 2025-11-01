"use client"

import { useState } from "react"
import Footer from "@/components/footer"

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
      directions: "Kierunki",
      educationalCenter: "Centrum Edukacyjne",
      trainers: "Trenerzy",
      news: "Aktualności",
      contacts: "Kontakt",
    },
    title: "Centrum Edukacyjne",
    description: "Kursy językowe i matematyka w Warszawie",
    sections: {
      chess: {
        title: "Szachy",
        description: "Nauka gry w szachy dla wszystkich grup wiekowych",
        features: [
          "Lekcje indywidualne i grupowe",
          "Turnieje i zawody",
          "Przygotowanie do zawodów",
          "Szkoła szachowa dla dzieci"
        ]
      },
      language: {
        title: "Kursy językowe",
        description: "Angielski, Polski, Matematyka w Warszawie",
        features: [
          "Angielski (A1–C1, Business English)",
          "Polski (od zera, B1/B2, Biznes)",
          "Matematyka (klasy 4–8, liceum)",
          "Przygotowanie do egzaminu ósmoklasisty i matury"
        ]
      },
      educational: {
        title: "Dlaczego my?",
        description: "Małe grupy i indywidualne podejście",
        features: [
          "Małe grupy i indywidualne podejście (dzieci, młodzież, dorośli)",
          "Programy dopasowane do egzaminów i celów zawodowych",
          "Jasny cennik i elastyczne pakiety zajęć",
          "Zajęcia stacjonarne i online"
        ]
      }
    },
    bookNow: "Zapisz się na program"
  },
  uk: {
    nav: {
      home: "Головна",
      directions: "Напрямки",
      educationalCenter: "Освітній Центр",
      trainers: "Тренери",
      news: "Новини",
      contacts: "Контакти",
    },
    title: "Освітній Центр",
    description: "Комплексні освітні та культурні програми",
    sections: {
      chess: {
        title: "Шахи",
        description: "Навчання грі в шахи для всіх вікових груп",
        features: [
          "Індивідуальні та групові уроки",
          "Турніри та змагання",
          "Підготовка до змагань",
          "Шахова школа для дітей"
        ]
      },
      language: {
        title: "Мовні курси",
        description: "Англійська, Польська, Математика у Варшаві",
        features: [
          "Англійська (A1–C1, Business English)",
          "Польська (з нуля, B1/B2, Бізнес)",
          "Математика (4-8 класи, ліцей)",
          "Підготовка до іспиту восьмого класу та матури"
        ]
      },
      educational: {
        title: "Освітні Програми",
        description: "Інтелектуальний та соціальний розвиток",
        features: [
          "Мовні курси",
          "Майстер-класи м'яких навичок",
          "Програми менторства",
          "Підтримка у розвитку кар'єри"
        ]
      }
    },
    bookNow: "Записатися на програму"
  },
  en: {
    nav: {
      home: "Home",
      directions: "Directions",
      educationalCenter: "Educational Center",
      trainers: "Trainers",
      news: "News",
      contacts: "Contacts",
    },
    title: "Educational Center",
    description: "Comprehensive educational and cultural programs",
    sections: {
      chess: {
        title: "Chess",
        description: "Chess learning for all age groups",
        features: [
          "Individual and group lessons",
          "Tournaments and competitions",
          "Competition preparation",
          "Chess school for children"
        ]
      },
      language: {
        title: "Language courses",
        description: "English, Polish, Mathematics in Warsaw",
        features: [
          "English (A1–C1, Business English)",
          "Polish (from scratch, B1/B2, Business)",
          "Mathematics (grades 4–8, high school)",
          "Preparation for 8th grade exam and matura"
        ]
      },
      educational: {
        title: "Educational Programs",
        description: "Intellectual and social development",
        features: [
          "Language courses",
          "Soft skills workshops",
          "Mentoring programs",
          "Career development support"
        ]
      }
    },
    bookNow: "Book program"
  },
  by: {
    nav: {
      home: "Галоўная",
      directions: "Кірункі",
      educationalCenter: "Адукацыйны цэнтр",
      trainers: "Трэнеры",
      news: "Навіны",
      contacts: "Кантакты",
    },
    title: "Адукацыйны цэнтр",
    description: "Комплексныя адукацыйныя і культурныя праграмы",
    sections: {
      chess: {
        title: "Шахматы",
        description: "Навучанне гульні ў шахматы для ўсіх узроставых груп",
        features: [
          "Індывідуальныя і групавыя ўрокі",
          "Турніры і спаборніцтвы",
          "Падрыхтоўка да спаборніцтваў",
          "Шахматная школа для дзяцей"
        ]
      },
      language: {
        title: "Моўныя курсы",
        description: "Англійская, Польская, Матэматыка ў Варшаве",
        features: [
          "Англійская (A1–C1, Business English)",
          "Польская (з нуля, B1/B2, Бізнес)",
          "Матэматыка (4-8 класы, ліцэй)",
          "Падрыхтоўка да іспыту восьмага класа і матуры"
        ]
      },
      educational: {
        title: "Адукацыйныя Праграмы",
        description: "Інтэлектуальнае і сацыяльнае развіццё",
        features: [
          "Моўныя курсы",
          "Майстар-класы мяккіх навыкаў",
          "Праграмы менторства",
          "Падтрымка ў развіцці кар'еры"
        ]
      }
    },
    bookNow: "Запісацца на праграму"
  }
}

export default function EducationalCenterPage() {
  const [currentLang, setCurrentLang] = useState<"pl" | "uk" | "en" | "by">("pl")

  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black text-white relative">
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-accent font-light">
              {t.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t.sections.chess.title}</h3>
              <p className="text-white/70 mb-6 font-primary">{t.sections.chess.description}</p>
              <ul className="space-y-2 mb-6">
                {t.sections.chess.features.map((feature: string, index: number) => (
                  <li key={index} className="text-white/80 text-sm flex items-center font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl shadow-lg block text-center"
              >
                {t.bookNow}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t.sections.language.title}</h3>
              <p className="text-white/70 mb-6 font-primary">{t.sections.language.description}</p>
              <ul className="space-y-2 mb-6">
                {t.sections.language.features.map((feature: string, index: number) => (
                  <li key={index} className="text-white/80 text-sm flex items-center font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl shadow-lg block text-center"
              >
                {t.bookNow}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t.sections.educational.title}</h3>
              <p className="text-white/70 mb-6 font-primary">{t.sections.educational.description}</p>
              <ul className="space-y-2 mb-6">
                {t.sections.educational.features.map((feature: string, index: number) => (
                  <li key={index} className="text-white/80 text-sm flex items-center font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl shadow-lg block text-center"
              >
                {t.bookNow}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  )
}
