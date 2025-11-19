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
        ],
        schedule: "Grafik zajęć",
        scheduleInfo: "Angielski: Środa 15:15-16:15 (7-9 lat, A0), 16:20-17:20 (9-11 lat, A0+), 17:30-18:30 (12-14 lat, A2+). Szczegóły innych kursów prosimy uzgodnić telefonicznie.",
        contactInfo: "Szczegóły dotyczące kursów polskiego i matematyki prosimy uzgodnić telefonicznie lub mailowo",
        viewDetails: "Zapisz się na kurs"
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
        ],
        schedule: "Розклад занять",
        scheduleInfo: "Англійська: Середа 15:15-16:15 (7-9 років, A0), 16:20-17:20 (9-11 років, A0+), 17:30-18:30 (12-14 років, A2+). Деталі інших курсів просимо узгодити телефоном.",
        contactInfo: "Деталі щодо курсів польської та математики просимо узгодити телефоном або електронною поштою",
        viewDetails: "Записатися на курс"
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
        ],
        schedule: "Class schedule",
        scheduleInfo: "English: Wednesday 15:15-16:15 (7-9 years, A0), 16:20-17:20 (9-11 years, A0+), 17:30-18:30 (12-14 years, A2+). Details of other courses please arrange by phone.",
        contactInfo: "Details regarding Polish and Mathematics courses please arrange by phone or email",
        viewDetails: "Sign up for course"
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
        ],
        schedule: "Расклад заняткаў",
        scheduleInfo: "Англійская: Серада 15:15-16:15 (7-9 гадоў, A0), 16:20-17:20 (9-11 гадоў, A0+), 17:30-18:30 (12-14 гадоў, A2+). Дэталі іншых курсаў просім узгадніць тэлефонам.",
        contactInfo: "Дэталі адносна курсаў польскай і матэматыкі просім узгадніць тэлефонам або электроннай поштай",
        viewDetails: "Запісацца на курс"
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
            {/* Chess Card */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col min-h-[500px]">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.chess.title}
              </h3>
              <p className="text-gray-300 mb-6 font-primary leading-relaxed">{t.sections.chess.description}</p>
              <p className="text-gray-400 text-sm mb-6 font-primary italic">{t.sections.chess.trainer}</p>
              <ul className="space-y-3 mb-6 flex-grow">
                {t.sections.chess.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.chess.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed">{t.sections.chess.scheduleInfo}</p>
              </div>
              <div className="space-y-3 mt-auto">
                <Link
                  href="/schedule?sport=szachy"
                  className="w-full px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-red-500/50 text-white text-sm font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {t.sections.chess.viewSchedule}
                </Link>
                <Link
                  href="/disciplines/chess"
                  className="w-full px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-red-500/50 text-white text-sm font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.sections.chess.viewDetails}
                </Link>
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {t.bookNow}
                </a>
              </div>
            </div>

            {/* Language Courses Card */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col min-h-[500px]">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.language.title}
              </h3>
              <p className="text-gray-300 mb-6 font-primary leading-relaxed">{t.sections.language.description}</p>
              <ul className="space-y-3 mb-6 flex-grow">
                {t.sections.language.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.language.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-2">{t.sections.language.scheduleInfo}</p>
                <p className="text-gray-400 text-xs font-primary italic">{t.sections.language.contactInfo}</p>
              </div>
              <div className="mt-auto">
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {t.sections.language.viewDetails}
                </a>
              </div>
            </div>

            {/* Educational Programs Card */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col min-h-[500px]">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.educational.title}
              </h3>
              <p className="text-gray-300 mb-6 font-primary leading-relaxed">{t.sections.educational.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {t.sections.educational.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {t.bookNow}
                </a>
              </div>
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
