"use client"

import { lazy, Suspense } from "react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Calendar, ExternalLink } from "lucide-react"

const Footer = lazy(() => import("@/components/footer"))

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
        ],
        schedule: "Grafik zajęć",
        scheduleInfo: "Wtorek 18:00-19:30 (Mokotów), Czwartek 17:00-18:30 (Praga), Sobota 14:00-15:30 (Mokotów)",
        viewSchedule: "Zobacz grafik",
        viewDetails: "Szczegóły o szachach",
        trainer: "Trener: Wiktor Murończyk"
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
        ],
        schedule: "Розклад занять",
        scheduleInfo: "Вівторок 18:00-19:30 (Мокотув), Четвер 17:00-18:30 (Прага), Субота 14:00-15:30 (Мокотув)",
        viewSchedule: "Переглянути розклад",
        viewDetails: "Деталі про шахи",
        trainer: "Тренер: Wiktor Murończyk"
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
        ],
        schedule: "Class schedule",
        scheduleInfo: "Tuesday 18:00-19:30 (Mokotów), Thursday 17:00-18:30 (Praga), Saturday 14:00-15:30 (Mokotów)",
        viewSchedule: "View schedule",
        viewDetails: "Chess details",
        trainer: "Coach: Wiktor Murończyk"
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
        ],
        schedule: "Расклад заняткаў",
        scheduleInfo: "Аўторак 18:00-19:30 (Макотув), Чацвер 17:00-18:30 (Прага), Субота 14:00-15:30 (Макотув)",
        viewSchedule: "Паглядзець расклад",
        viewDetails: "Дэталі пра шахматы",
        trainer: "Трэнер: Wiktor Murończyk"
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
  const { currentLang } = useLanguage()
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
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t.sections.chess.title}</h3>
              <p className="text-white/70 mb-4 font-primary">{t.sections.chess.description}</p>
              <p className="text-white/60 text-xs mb-2 font-primary italic">{t.sections.chess.trainer}</p>
              <ul className="space-y-2 mb-4 flex-grow">
                {t.sections.chess.features.map((feature: string, index: number) => (
                  <li key={index} className="text-white/80 text-sm flex items-center font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span className="text-white/90 text-xs font-semibold">{t.sections.chess.schedule}</span>
                </div>
                <p className="text-white/70 text-xs font-primary">{t.sections.chess.scheduleInfo}</p>
              </div>
              <div className="space-y-2">
                <Link
                  href="/schedule?sport=szachy"
                  className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-red-500/50 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {t.sections.chess.viewSchedule}
                </Link>
                <Link
                  href="/disciplines/chess"
                  className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-red-500/50 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.sections.chess.viewDetails}
                </Link>
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 h-[42px]"
                >
                  {t.bookNow}
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t.sections.language.title}</h3>
              <p className="text-white/70 mb-6 font-primary">{t.sections.language.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {t.sections.language.features.map((feature: string, index: number) => (
                  <li key={index} className="text-white/80 text-sm flex items-center font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 h-[42px]"
              >
                {t.bookNow}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t.sections.educational.title}</h3>
              <p className="text-white/70 mb-6 font-primary">{t.sections.educational.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {t.sections.educational.features.map((feature: string, index: number) => (
                  <li key={index} className="text-white/80 text-sm flex items-center font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 h-[42px]"
              >
                {t.bookNow}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Suspense fallback={null}>
        <Footer currentLang={currentLang} />
      </Suspense>
    </div>
  )
}
