"use client"

import { lazy, Suspense } from "react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Calendar, BookOpen, Award } from "lucide-react"

const Footer = lazy(() => import("@/components/footer"))

const translations = {
  pl: {
    title: "Kursy językowe w Warszawie",
    description: "Angielski, Polski, Matematyka - profesjonalne kursy dla dzieci, młodzieży i dorosłych",
    backToCenter: "← Wróć do Centrum Edukacyjnego",
    sections: {
      english: {
        title: "Kursy języka angielskiego",
        description: "Nauka angielskiego na wszystkich poziomach zaawansowania",
        levels: [
          "Angielski A0 (od podstaw)",
          "Angielski A1-A2 (podstawowy)",
          "Angielski B1-B2 (średnio zaawansowany)",
          "Angielski C1 (zaawansowany)",
          "Business English"
        ],
        schedule: "Grafik zajęć",
        scheduleInfo: "Angielski: Środa 15:15-16:15 (7-9 lat, A0), 16:20-17:20 (9-11 lat, A0+), 17:30-18:30 (12-14 lat, A2+)",
        ageGroups: "Grupy wiekowe: 7-9 lat, 9-11 lat, 12-14 lat, młodzież, dorośli"
      },
      polish: {
        title: "Kursy języka polskiego",
        description: "Nauka polskiego dla obcokrajowców i przygotowanie do egzaminów",
        levels: [
          "Polski od zera (A0)",
          "Polski B1/B2 (średnio zaawansowany)",
          "Polski biznesowy",
          "Przygotowanie do egzaminów"
        ],
        schedule: "Grafik zajęć",
        scheduleInfo: "Szczegóły dotyczące kursów polskiego prosimy uzgodnić telefonicznie lub mailowo",
        ageGroups: "Grupy wiekowe: młodzież, dorośli"
      },
      math: {
        title: "Kursy matematyki",
        description: "Pomoc w nauce matematyki i przygotowanie do egzaminów",
        levels: [
          "Matematyka klasy 4-8",
          "Matematyka liceum",
          "Przygotowanie do egzaminu ósmoklasisty",
          "Przygotowanie do matury"
        ],
        schedule: "Grafik zajęć",
        scheduleInfo: "Szczegóły dotyczące kursów matematyki prosimy uzgodnić telefonicznie lub mailowo",
        ageGroups: "Grupy wiekowe: klasy 4-8, liceum"
      },
      benefits: {
        title: "Dlaczego warto wybrać nasze kursy?",
        items: [
          "Małe grupy i indywidualne podejście",
          "Programy dopasowane do egzaminów i celów zawodowych",
          "Jasny cennik i elastyczne pakiety zajęć",
          "Zajęcia stacjonarne i online",
          "Doświadczeni lektorzy i nauczyciele",
          "Przygotowanie do certyfikatów językowych"
        ]
      }
    },
    bookNow: "Zapisz się na kurs",
    contactInfo: "Szczegóły dotyczące kursów polskiego i matematyki prosimy uzgodnić telefonicznie lub mailowo"
  },
  uk: {
    title: "Мовні курси у Варшаві",
    description: "Англійська, Польська, Математика - професійні курси для дітей, молоді та дорослих",
    backToCenter: "← Повернутися до Освітнього Центру",
    sections: {
      english: {
        title: "Курси англійської мови",
        description: "Навчання англійської на всіх рівнях підготовки",
        levels: [
          "Англійська A0 (з нуля)",
          "Англійська A1-A2 (початковий)",
          "Англійська B1-B2 (середній)",
          "Англійська C1 (просунутий)",
          "Business English"
        ],
        schedule: "Розклад занять",
        scheduleInfo: "Англійська: Середа 15:15-16:15 (7-9 років, A0), 16:20-17:20 (9-11 років, A0+), 17:30-18:30 (12-14 років, A2+)",
        ageGroups: "Вікові групи: 7-9 років, 9-11 років, 12-14 років, молодь, дорослі"
      },
      polish: {
        title: "Курси польської мови",
        description: "Навчання польської для іноземців та підготовка до іспитів",
        levels: [
          "Польська з нуля (A0)",
          "Польська B1/B2 (середній)",
          "Польська бізнес",
          "Підготовка до іспитів"
        ],
        schedule: "Розклад занять",
        scheduleInfo: "Деталі щодо курсів польської просимо узгодити телефоном або електронною поштою",
        ageGroups: "Вікові групи: молодь, дорослі"
      },
      math: {
        title: "Курси математики",
        description: "Допомога у навчанні математики та підготовка до іспитів",
        levels: [
          "Математика 4-8 класи",
          "Математика ліцей",
          "Підготовка до іспиту восьмого класу",
          "Підготовка до матури"
        ],
        schedule: "Розклад занять",
        scheduleInfo: "Деталі щодо курсів математики просимо узгодити телефоном або електронною поштою",
        ageGroups: "Вікові групи: 4-8 класи, ліцей"
      },
      benefits: {
        title: "Чому варто обрати наші курси?",
        items: [
          "Малі групи та індивідуальний підхід",
          "Програми адаптовані до іспитів та професійних цілей",
          "Чітка ціноутворення та гнучкі пакети занять",
          "Заняття стаціонарні та онлайн",
          "Досвідчені викладачі",
          "Підготовка до мовних сертифікатів"
        ]
      }
    },
    bookNow: "Записатися на курс",
    contactInfo: "Деталі щодо курсів польської та математики просимо узгодити телефоном або електронною поштою"
  },
  en: {
    title: "Language courses in Warsaw",
    description: "English, Polish, Mathematics - professional courses for children, youth and adults",
    backToCenter: "← Back to Educational Center",
    sections: {
      english: {
        title: "English language courses",
        description: "English learning at all proficiency levels",
        levels: [
          "English A0 (from scratch)",
          "English A1-A2 (beginner)",
          "English B1-B2 (intermediate)",
          "English C1 (advanced)",
          "Business English"
        ],
        schedule: "Class schedule",
        scheduleInfo: "English: Wednesday 15:15-16:15 (7-9 years, A0), 16:20-17:20 (9-11 years, A0+), 17:30-18:30 (12-14 years, A2+)",
        ageGroups: "Age groups: 7-9 years, 9-11 years, 12-14 years, youth, adults"
      },
      polish: {
        title: "Polish language courses",
        description: "Polish learning for foreigners and exam preparation",
        levels: [
          "Polish from scratch (A0)",
          "Polish B1/B2 (intermediate)",
          "Business Polish",
          "Exam preparation"
        ],
        schedule: "Class schedule",
        scheduleInfo: "Details regarding Polish courses please arrange by phone or email",
        ageGroups: "Age groups: youth, adults"
      },
      math: {
        title: "Mathematics courses",
        description: "Mathematics tutoring and exam preparation",
        levels: [
          "Mathematics grades 4-8",
          "High school mathematics",
          "8th grade exam preparation",
          "Matura preparation"
        ],
        schedule: "Class schedule",
        scheduleInfo: "Details regarding Mathematics courses please arrange by phone or email",
        ageGroups: "Age groups: grades 4-8, high school"
      },
      benefits: {
        title: "Why choose our courses?",
        items: [
          "Small groups and individual approach",
          "Programs adapted to exams and professional goals",
          "Clear pricing and flexible lesson packages",
          "Stationary and online classes",
          "Experienced teachers",
          "Preparation for language certificates"
        ]
      }
    },
    bookNow: "Sign up for course",
    contactInfo: "Details regarding Polish and Mathematics courses please arrange by phone or email"
  },
  by: {
    title: "Моўныя курсы ў Варшаве",
    description: "Англійская, Польская, Матэматыка - прафесійныя курсы для дзяцей, моладзі і дарослых",
    backToCenter: "← Вярнуцца да Адукацыйнага Цэнтра",
    sections: {
      english: {
        title: "Курсы англійскай мовы",
        description: "Навучанне англійскай на ўсіх узроўнях падрыхтоўкі",
        levels: [
          "Англійская A0 (з нуля)",
          "Англійская A1-A2 (пачатковы)",
          "Англійская B1-B2 (сярэдні)",
          "Англійская C1 (прасунуты)",
          "Business English"
        ],
        schedule: "Расклад заняткаў",
        scheduleInfo: "Англійская: Серада 15:15-16:15 (7-9 гадоў, A0), 16:20-17:20 (9-11 гадоў, A0+), 17:30-18:30 (12-14 гадоў, A2+)",
        ageGroups: "Узроставыя групы: 7-9 гадоў, 9-11 гадоў, 12-14 гадоў, моладзь, дарослыя"
      },
      polish: {
        title: "Курсы польскай мовы",
        description: "Навучанне польскай для замежнікаў і падрыхтоўка да іспытаў",
        levels: [
          "Польская з нуля (A0)",
          "Польская B1/B2 (сярэдні)",
          "Польская бізнес",
          "Падрыхтоўка да іспытаў"
        ],
        schedule: "Расклад заняткаў",
        scheduleInfo: "Дэталі адносна курсаў польскай просім узгадніць тэлефонам або электроннай поштай",
        ageGroups: "Узроставыя групы: моладзь, дарослыя"
      },
      math: {
        title: "Курсы матэматыкі",
        description: "Дапамога ў навучанні матэматыкі і падрыхтоўка да іспытаў",
        levels: [
          "Матэматыка 4-8 класы",
          "Матэматыка ліцэй",
          "Падрыхтоўка да іспыту восьмага класа",
          "Падрыхтоўка да матуры"
        ],
        schedule: "Расклад заняткаў",
        scheduleInfo: "Дэталі адносна курсаў матэматыкі просім узгадніць тэлефонам або электроннай поштай",
        ageGroups: "Узроставыя групы: 4-8 класы, ліцэй"
      },
      benefits: {
        title: "Чаму варта выбраць нашы курсы?",
        items: [
          "Малыя групы і індывідуальны падыход",
          "Праграмы адаптаваныя да іспытаў і прафесійных мэт",
          "Чыстая цэнаўтварэнне і гнуткія пакеты заняткаў",
          "Заняткі стацыянарныя і анлайн",
          "Вопытныя выкладчыкі",
          "Падрыхтоўка да моўных сертыфікатаў"
        ]
      }
    },
    bookNow: "Запісацца на курс",
    contactInfo: "Дэталі адносна курсаў польскай і матэматыкі просім узгадніць тэлефонам або электроннай поштай"
  }
}

export default function LanguageCoursesPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black text-white relative">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/educational-center" 
              className="inline-flex items-center text-red-400 hover:text-red-300 font-accent transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToCenter}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-accent font-light">
              {t.description}
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* English Courses */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 text-red-400 mb-4" />
                <h2 className="text-2xl font-display font-bold text-white mb-3 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                  {t.sections.english.title}
                </h2>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-4">
                  {t.sections.english.description}
                </p>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {t.sections.english.levels.map((level: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{level}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.english.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-2">{t.sections.english.scheduleInfo}</p>
                <p className="text-gray-400 text-xs font-primary">{t.sections.english.ageGroups}</p>
              </div>
            </div>

            {/* Polish Courses */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 text-red-400 mb-4" />
                <h2 className="text-2xl font-display font-bold text-white mb-3 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                  {t.sections.polish.title}
                </h2>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-4">
                  {t.sections.polish.description}
                </p>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {t.sections.polish.levels.map((level: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{level}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.polish.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-2">{t.sections.polish.scheduleInfo}</p>
                <p className="text-gray-400 text-xs font-primary">{t.sections.polish.ageGroups}</p>
              </div>
            </div>

            {/* Math Courses */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 text-red-400 mb-4" />
                <h2 className="text-2xl font-display font-bold text-white mb-3 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                  {t.sections.math.title}
                </h2>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-4">
                  {t.sections.math.description}
                </p>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {t.sections.math.levels.map((level: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{level}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.math.schedule}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary leading-relaxed mb-2">{t.sections.math.scheduleInfo}</p>
                <p className="text-gray-400 text-xs font-primary">{t.sections.math.ageGroups}</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-6 text-center bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
              {t.sections.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.sections.benefits.items.map((item: string, index: number) => (
                <div key={index} className="flex items-start">
                  <Award className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-sm font-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 mb-8">
            <p className="text-gray-300 text-sm font-primary text-center italic">
              {t.contactInfo}
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-lg font-accent font-medium rounded-xl shadow-lg transition-all duration-200"
            >
              {t.bookNow}
            </a>
          </div>
        </div>
      </main>

      <Suspense fallback={null}>
        <Footer currentLang={currentLang} />
      </Suspense>
    </div>
  )
}

