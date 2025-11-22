"use client"

import { lazy, Suspense, useMemo } from "react"
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
        trainer: "Trener: Wiktor Murończyk",
        viewDetails: "Szczegóły o zajęciach szachowych"
      },
      language: {
        title: "Kursy językowe",
        description: "Angielski i Polski w Warszawie",
        features: [
          "Angielski (A1–C1, Business English)",
          "Polski (od zera, B1/B2, Biznes)",
          "Przygotowanie do certyfikatów językowych",
          "Zajęcia dla dzieci, młodzieży i dorosłych"
        ],
        schedule: "Grafik zajęć",
        scheduleInfo: "Angielski: Środa 15:15-16:15 (7-9 lat, A0), 16:20-17:20 (9-11 lat, A0+), 17:30-18:30 (12-14 lat, A2+). Szczegóły kursów polskiego prosimy uzgodnić telefonicznie.",
        contactInfo: "Szczegóły dotyczące kursów polskiego prosimy uzgodnić telefonicznie lub mailowo",
        viewDetails: "Szczegóły o kursach językowych",
        viewSchedule: "Zobacz grafik"
      },
      math: {
        title: "Matematyka",
        description: "Korepetycje z matematyki i przygotowanie do egzaminów",
        features: [
          "Matematyka klasy 4-8",
          "Matematyka liceum",
          "Przygotowanie do egzaminu ósmoklasisty",
          "Przygotowanie do matury"
        ],
        schedule: "Grafik zajęć",
        scheduleInfo: "Szczegóły dotyczące kursów matematyki prosimy uzgodnić telefonicznie lub mailowo",
        ageGroups: "Grupy wiekowe: klasy 4-8, liceum",
        viewDetails: "Szczegóły o zajęciach z matematyki",
        viewSchedule: "Zobacz grafik"
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
        trainer: "Тренер: Wiktor Murończyk",
        viewDetails: "Деталі про заняття з шахів"
      },
      language: {
        title: "Мовні курси",
        description: "Англійська і Польська у Варшаві",
        features: [
          "Англійська (A1–C1, Business English)",
          "Польська (з нуля, B1/B2, Бізнес)",
          "Підготовка до мовних сертифікатів",
          "Заняття для дітей, молоді та дорослих"
        ],
        schedule: "Розклад занять",
        scheduleInfo: "Англійська: Середа 15:15-16:15 (7-9 років, A0), 16:20-17:20 (9-11 років, A0+), 17:30-18:30 (12-14 років, A2+). Деталі курсів польської просимо узгодити телефоном.",
        contactInfo: "Деталі щодо курсів польської просимо узгодити телефоном або електронною поштою",
        viewDetails: "Деталі про мовні курси",
        viewSchedule: "Переглянути розклад"
      },
      math: {
        title: "Математика",
        description: "Корепетиції з математики та підготовка до іспитів",
        features: [
          "Математика 4-8 класи",
          "Математика ліцей",
          "Підготовка до іспиту восьмого класу",
          "Підготовка до матури"
        ],
        schedule: "Розклад занять",
        scheduleInfo: "Деталі щодо курсів математики просимо узгодити телефоном або електронною поштою",
        ageGroups: "Вікові групи: 4-8 класи, ліцей",
        viewDetails: "Деталі про заняття з математики",
        viewSchedule: "Переглянути розклад"
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
        trainer: "Coach: Wiktor Murończyk",
        viewDetails: "Chess classes details"
      },
      language: {
        title: "Language courses",
        description: "English and Polish in Warsaw",
        features: [
          "English (A1–C1, Business English)",
          "Polish (from scratch, B1/B2, Business)",
          "Preparation for language certificates",
          "Classes for children, youth and adults"
        ],
        schedule: "Class schedule",
        scheduleInfo: "English: Wednesday 15:15-16:15 (7-9 years, A0), 16:20-17:20 (9-11 years, A0+), 17:30-18:30 (12-14 years, A2+). Details of Polish courses please arrange by phone.",
        contactInfo: "Details regarding Polish courses please arrange by phone or email",
        viewDetails: "Language courses details",
        viewSchedule: "View schedule"
      },
      math: {
        title: "Mathematics",
        description: "Mathematics tutoring and exam preparation",
        features: [
          "Mathematics grades 4-8",
          "High school mathematics",
          "8th grade exam preparation",
          "Matura preparation"
        ],
        schedule: "Class schedule",
        scheduleInfo: "Details regarding Mathematics courses please arrange by phone or email",
        ageGroups: "Age groups: grades 4-8, high school",
        viewDetails: "Mathematics classes details",
        viewSchedule: "View schedule"
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
        trainer: "Трэнер: Wiktor Murończyk",
        viewDetails: "Дэталі пра заняткі па шахматах"
      },
      language: {
        title: "Моўныя курсы",
        description: "Англійская і Польская ў Варшаве",
        features: [
          "Англійская (A1–C1, Business English)",
          "Польская (з нуля, B1/B2, Бізнес)",
          "Падрыхтоўка да моўных сертыфікатаў",
          "Заняткі для дзяцей, моладзі і дарослых"
        ],
        schedule: "Расклад заняткаў",
        scheduleInfo: "Англійская: Серада 15:15-16:15 (7-9 гадоў, A0), 16:20-17:20 (9-11 гадоў, A0+), 17:30-18:30 (12-14 гадоў, A2+). Дэталі курсаў польскай просім узгадніць тэлефонам.",
        contactInfo: "Дэталі адносна курсаў польскай просім узгадніць тэлефонам або электроннай поштай",
        viewDetails: "Дэталі пра моўныя курсы",
        viewSchedule: "Паглядзець расклад"
      },
      math: {
        title: "Матэматыка",
        description: "Корепетиции з матэматыкі і падрыхтоўка да іспытаў",
        features: [
          "Матэматыка 4-8 класы",
          "Матэматыка ліцэй",
          "Падрыхтоўка да іспыту восьмага класа",
          "Падрыхтоўка да матуры"
        ],
        schedule: "Расклад заняткаў",
        scheduleInfo: "Дэталі адносна курсаў матэматыкі просім узгадніць тэлефонам або электроннай поштай",
        ageGroups: "Узроставыя групы: 4-8 класы, ліцэй",
        viewDetails: "Дэталі пра заняткі па матэматыцы",
        viewSchedule: "Паглядзець расклад"
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
  
  const t = useMemo(() => {
    try {
      return translations[currentLang] || translations.pl
    } catch (error) {
      console.error("Error loading translations:", error)
      return translations.pl
    }
  }, [currentLang])

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning>
      
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
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 flex flex-col min-h-[500px]">
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
              <div className="mt-auto p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.chess.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed">{t.sections.chess.scheduleInfo}</p>
              </div>
              <div className="space-y-3 mt-4">
                <Link
                  href="/disciplines/chess"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.sections.chess.viewDetails}
                </Link>
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  {t.bookNow}
                </a>
              </div>
            </div>

            {/* Language Courses Card */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 flex flex-col min-h-[500px]">
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
              <div className="mt-auto p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.language.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed">{t.sections.language.scheduleInfo}</p>
              </div>
              <div className="space-y-3 mt-4">
                <Link
                  href="/educational-center/language-courses"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.sections.language.viewDetails}
                </Link>
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  {t.bookNow}
                </a>
              </div>
            </div>

            {/* Math Courses Card */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 flex flex-col min-h-[500px]">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.math.title}
              </h3>
              <p className="text-gray-300 mb-6 font-primary leading-relaxed">{t.sections.math.description}</p>
              <ul className="space-y-3 mb-6 flex-grow">
                {t.sections.math.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.math.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-2">{t.sections.math.scheduleInfo}</p>
                <p className="text-gray-400 text-xs font-primary">{t.sections.math.ageGroups}</p>
              </div>
              <div className="space-y-3 mt-4">
                <Link
                  href="/educational-center/mathematics"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.sections.math.viewDetails}
                </Link>
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  {t.bookNow}
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section - Dlaczego my? */}
          <div className="mt-12 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-display font-bold text-white mb-6 text-center bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
              {t.sections.educational.title}
            </h2>
            <p className="text-gray-300 mb-6 font-primary leading-relaxed text-center">{t.sections.educational.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.sections.educational.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span className="text-gray-300 text-sm font-primary">{feature}</span>
                </div>
              ))}
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
