"use client"

import { lazy, Suspense, useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react"

const Footer = lazy(() => import("@/components/footer"))

const translations = {
  pl: {
    title: "Matematyka w Warszawie",
    description: "Profesjonalne korepetycje z matematyki i przygotowanie do egzaminów",
    backToCenter: "← Powrót do Centrum Edukacyjnego",
    sections: {
      overview: {
        title: "O zajęciach z matematyki",
        description: "Matematyka to kluczowy przedmiot, który otwiera drzwi do wielu dziedzin nauki i kariery. W VOLAT Club oferujemy profesjonalne korepetycje z matematyki dla uczniów klas 4-8 oraz liceum, a także przygotowanie do egzaminu ósmoklasisty i matury.",
        benefits: [
          "Indywidualne podejście do każdego ucznia",
          "Systematyczne przygotowanie do egzaminów",
          "Rozwiązywanie zadań krok po kroku",
          "Uzupełnianie braków w wiedzy",
          "Rozwój umiejętności logicznego myślenia"
        ]
      },
      levels: {
        title: "Poziomy nauczania",
        levels: [
          "Matematyka klasy 4-8 - podstawy i rozwój",
          "Matematyka liceum - poziom podstawowy i rozszerzony",
          "Przygotowanie do egzaminu ósmoklasisty",
          "Przygotowanie do matury - poziom podstawowy i rozszerzony"
        ]
      },
      schedule: {
        title: "Grafik zajęć",
        scheduleInfo: "Szczegóły dotyczące kursów matematyki prosimy uzgodnić telefonicznie lub mailowo",
        ageGroups: "Grupy wiekowe: klasy 4-8, liceum",
        contactInfo: "Zajęcia mogą odbywać się indywidualnie lub w małych grupach, w zależności od potrzeb"
      },
      features: {
        title: "Co oferujemy",
        features: [
          "Korepetycje z matematyki dla klas 4-8",
          "Korepetycje z matematyki dla liceum",
          "Przygotowanie do egzaminu ósmoklasisty",
          "Przygotowanie do matury (poziom podstawowy i rozszerzony)",
          "Indywidualne i grupowe zajęcia",
          "Elastyczny grafik dostosowany do potrzeb ucznia"
        ]
      },
      topics: {
        title: "Tematy zajęć",
        topics: [
          "Arytmetyka i algebra",
          "Geometria i trygonometria",
          "Funkcje i ich własności",
          "Równania i nierówności",
          "Rachunek prawdopodobieństwa i statystyka",
          "Zadania tekstowe i problemowe"
        ]
      }
    },
    bookNow: "Zapisz się na zajęcia"
  },
  uk: {
    title: "Математика у Варшаві",
    description: "Професійні корепетиції з математики та підготовка до іспитів",
    backToCenter: "← Повернутися до Освітнього Центру",
    sections: {
      overview: {
        title: "Про заняття з математики",
        description: "Математика - це ключовий предмет, який відкриває двері до багатьох галузей науки та кар'єри. У VOLAT Club ми пропонуємо професійні корепетиції з математики для учнів 4-8 класів та ліцею, а також підготовку до іспиту восьмого класу та матури.",
        benefits: [
          "Індивідуальний підхід до кожного учня",
          "Систематична підготовка до іспитів",
          "Розв'язання задач крок за кроком",
          "Заповнення прогалин у знаннях",
          "Розвиток навичок логічного мислення"
        ]
      },
      levels: {
        title: "Рівні навчання",
        levels: [
          "Математика 4-8 класи - основи та розвиток",
          "Математика ліцей - базовий та розширений рівні",
          "Підготовка до іспиту восьмого класу",
          "Підготовка до матури - базовий та розширений рівні"
        ]
      },
      schedule: {
        title: "Розклад занять",
        scheduleInfo: "Деталі щодо курсів математики просимо узгодити телефоном або електронною поштою",
        ageGroups: "Вікові групи: 4-8 класи, ліцей",
        contactInfo: "Заняття можуть відбуватися індивідуально або в малих групах, залежно від потреб"
      },
      features: {
        title: "Що ми пропонуємо",
        features: [
          "Корепетиції з математики для 4-8 класів",
          "Корепетиції з математики для ліцею",
          "Підготовка до іспиту восьмого класу",
          "Підготовка до матури (базовий та розширений рівні)",
          "Індивідуальні та групові заняття",
          "Гнучкий розклад, адаптований до потреб учня"
        ]
      },
      topics: {
        title: "Теми занять",
        topics: [
          "Арифметика та алгебра",
          "Геометрія та тригонометрія",
          "Функції та їх властивості",
          "Рівняння та нерівності",
          "Ймовірність та статистика",
          "Текстові та проблемні задачі"
        ]
      }
    },
    bookNow: "Записатися на заняття"
  },
  en: {
    title: "Mathematics in Warsaw",
    description: "Professional mathematics tutoring and exam preparation",
    backToCenter: "← Back to Educational Center",
    sections: {
      overview: {
        title: "About mathematics classes",
        description: "Mathematics is a key subject that opens doors to many fields of science and career. At VOLAT Club we offer professional mathematics tutoring for grades 4-8 and high school students, as well as preparation for 8th grade exam and matura.",
        benefits: [
          "Individual approach to each student",
          "Systematic exam preparation",
          "Step-by-step problem solving",
          "Filling knowledge gaps",
          "Development of logical thinking skills"
        ]
      },
      levels: {
        title: "Teaching levels",
        levels: [
          "Mathematics grades 4-8 - basics and development",
          "High school mathematics - basic and advanced levels",
          "8th grade exam preparation",
          "Matura preparation - basic and advanced levels"
        ]
      },
      schedule: {
        title: "Class schedule",
        scheduleInfo: "Details regarding Mathematics courses please arrange by phone or email",
        ageGroups: "Age groups: grades 4-8, high school",
        contactInfo: "Classes can be held individually or in small groups, depending on needs"
      },
      features: {
        title: "What we offer",
        features: [
          "Mathematics tutoring for grades 4-8",
          "High school mathematics tutoring",
          "8th grade exam preparation",
          "Matura preparation (basic and advanced levels)",
          "Individual and group classes",
          "Flexible schedule adapted to student needs"
        ]
      },
      topics: {
        title: "Class topics",
        topics: [
          "Arithmetic and algebra",
          "Geometry and trigonometry",
          "Functions and their properties",
          "Equations and inequalities",
          "Probability and statistics",
          "Word and problem tasks"
        ]
      }
    },
    bookNow: "Book classes"
  },
  by: {
    title: "Матэматыка ў Варшаве",
    description: "Прафесійныя корепетиции з матэматыкі і падрыхтоўка да іспытаў",
    backToCenter: "← Вярнуцца да Адукацыйнага Цэнтра",
    sections: {
      overview: {
        title: "Пра заняткі па матэматыцы",
        description: "Матэматыка - гэта ключавы прадмет, які адкрывае дзверы да многіх галін навукі і кар'еры. У VOLAT Club мы прапануем прафесійныя корепетиции з матэматыкі для вучняў 4-8 класаў і ліцэя, а таксама падрыхтоўку да іспыту восьмага класа і матуры.",
        benefits: [
          "Індывідуальны падыход да кожнага вучня",
          "Сістэматычная падрыхтоўка да іспытаў",
          "Рашэнне задач крок за крокам",
          "Запаўненне прагалін у ведах",
          "Развіццё навыкаў лагічнага мыслення"
        ]
      },
      levels: {
        title: "Узроўні навучання",
        levels: [
          "Матэматыка 4-8 класы - асновы і развіццё",
          "Матэматыка ліцэй - базовы і прасунуты ўзроўні",
          "Падрыхтоўка да іспыту восьмага класа",
          "Падрыхтоўка да матуры - базовы і прасунуты ўзроўні"
        ]
      },
      schedule: {
        title: "Расклад заняткаў",
        scheduleInfo: "Дэталі адносна курсаў матэматыкі просім узгадніць тэлефонам або электроннай поштай",
        ageGroups: "Узроставыя групы: 4-8 класы, ліцэй",
        contactInfo: "Заняткі могуць праходзіць індывідуальна або ў малых групах, у залежнасці ад патрэб"
      },
      features: {
        title: "Што мы прапануем",
        features: [
          "Корепетиции з матэматыкі для 4-8 класаў",
          "Корепетиции з матэматыкі для ліцэя",
          "Падрыхтоўка да іспыту восьмага класа",
          "Падрыхтоўка да матуры (базовы і прасунуты ўзроўні)",
          "Індывідуальныя і групавыя заняткі",
          "Гнуткі расклад, адаптаваны да патрэб вучня"
        ]
      },
      topics: {
        title: "Тэмы заняткаў",
        topics: [
          "Арыфметыка і алгебра",
          "Геаметрыя і трыганаметрыя",
          "Функцыі і іх уласцівасці",
          "Ураўненні і няроўнасці",
          "Імавернасць і статыстыка",
          "Тэкставыя і праблемныя задачы"
        ]
      }
    },
    bookNow: "Запісацца на заняткі"
  }
}

export default function MathematicsPage() {
  const { currentLang } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const t = translations[currentLang] || translations.pl

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white relative">
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">Loading...</div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <Link
            href="/educational-center"
            className="inline-flex items-center gap-2 text-gray-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToCenter}
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-accent font-light">
              {t.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Overview Section */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.overview.title}
              </h2>
              <p className="text-gray-300 mb-6 font-primary leading-relaxed text-lg">
                {t.sections.overview.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.sections.overview.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="text-gray-300 text-sm font-primary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Levels Section */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.levels.title}
              </h2>
              <ul className="space-y-3">
                {t.sections.levels.levels.map((level: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{level}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topics Section */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.topics.title}
              </h2>
              <ul className="space-y-3">
                {t.sections.topics.topics.map((topic: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule Section */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.schedule.title}
              </h2>
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm font-semibold">{t.sections.schedule.scheduleInfo}</span>
                </div>
                <p className="text-gray-300 text-sm font-primary mb-2">{t.sections.schedule.ageGroups}</p>
                <p className="text-gray-400 text-xs font-primary italic">{t.sections.schedule.contactInfo}</p>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                {t.sections.features.title}
              </h2>
              <ul className="space-y-3">
                {t.sections.features.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start font-primary">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-accent font-medium rounded-xl shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
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

