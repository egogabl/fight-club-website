"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

interface DisciplinePageClientProps {
  discipline: {
    id: string
    name: string
    description: string
    slug: string
    trainer: string
    trainerId: string
    image: string
    imageAlt?: string
    gallery: string[]
    fullDescription: string
    benefits: string[]
    schedule: string
    ageGroups: string
    price: string
  }
}

export default function DisciplinePageClient({ discipline }: DisciplinePageClientProps) {
  const { currentLang } = useLanguage()

  // Переводы названий дисциплин
  const disciplineTranslations: Record<string, Record<string, string>> = {
    "karate-wkf": {
      pl: "Karate WKF",
      uk: "Карате WKF",
      en: "Karate WKF",
      by: "Каратэ WKF"
    },
    "muaythai": {
      pl: "Muay Thai / Kickboxing",
      uk: "Муай Тай / Кікбоксинг",
      en: "Muay Thai / Kickboxing",
      by: "Муай Тай / Кікбоксінг"
    },
    "judo": {
      pl: "Judo",
      uk: "Дзюдо",
      en: "Judo",
      by: "Дзюдо"
    },
    "mma": {
      pl: "MMA",
      uk: "ММА",
      en: "MMA",
      by: "ММА"
    },
    "volatmove-kids": {
      pl: "VolatMove! KIDS. Trening Motoryczny",
      uk: "VolatMove! KIDS. Моторичний тренінг",
      en: "VolatMove! KIDS. Motor Training",
      by: "VolatMove! KIDS. Маторныя трэніроўкі"
    },
    "volatmove-junior": {
      pl: "VolatMove! JUNIOR. Trening Motoryczny",
      uk: "VolatMove! JUNIOR. Моторичний тренінг",
      en: "VolatMove! JUNIOR. Motor Training",
      by: "VolatMove! JUNIOR. Маторныя трэніроўкі"
    },
    "functional-training": {
      pl: "Trening Funkcjonalny",
      uk: "Функціональний тренінг",
      en: "Functional Training",
      by: "Функцыянальныя трэніроўкі"
    },
    "chess": {
      pl: "Szachy",
      uk: "Шахи",
      en: "Chess",
      by: "Шахматы"
    }
  }

  // Переводы цен
  const priceTranslations: Record<string, Record<string, string>> = {
    "default": {
      pl: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc",
      uk: "Діти: 220 zł/місяць, Дорослі: 280 zł/місяць",
      en: "Children: 220 zł/month, Adults: 280 zł/month",
      by: "Дзеці: 220 zł/месяц, Дарослыя: 280 zł/месяц"
    },
    "ask": {
      pl: "Zapytaj o cenę",
      uk: "Запитайте про ціну",
      en: "Ask about price",
      by: "Спытайце пра цану"
    }
  }

  const translations = {
    pl: {
      backToDisciplines: "← Wróć do dyscyplin",
      bookNow: "Zapisz się",
      viewSchedule: "Zobacz grafik",
      viewTrainer: "Zobacz trenera",
      description: "Opis",
      benefits: "Korzyści",
      schedule: "Grafik",
      ageGroups: "Grupy wiekowe",
      price: "Cena",
      trainer: "Trener",
      notFound: "Dyscyplina nie znaleziona"
    },
    uk: {
      backToDisciplines: "← Повернутися до дисциплін",
      bookNow: "Записатися",
      viewSchedule: "Подивитися розклад",
      viewTrainer: "Подивитися тренера",
      description: "Опис",
      benefits: "Переваги",
      schedule: "Розклад",
      ageGroups: "Вікові групи",
      price: "Ціна",
      trainer: "Тренер",
      notFound: "Дисципліну не знайдено"
    },
    en: {
      backToDisciplines: "← Back to disciplines",
      bookNow: "Book now",
      viewSchedule: "View schedule",
      viewTrainer: "View trainer",
      description: "Description",
      benefits: "Benefits",
      schedule: "Schedule",
      ageGroups: "Age groups",
      price: "Price",
      trainer: "Trainer",
      notFound: "Discipline not found"
    },
    by: {
      backToDisciplines: "← Вярнуцца да дысцыплін",
      bookNow: "Запісацца",
      viewSchedule: "Паглядзець расклад",
      viewTrainer: "Паглядзець трэнера",
      description: "Апісанне",
      benefits: "Перавагі",
      schedule: "Расклад",
      ageGroups: "Узроставыя групы",
      price: "Цана",
      trainer: "Трэнер",
      notFound: "Дысцыпліну не знойдзена"
    }
  }

  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <main className="relative z-40 pt-20">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/disciplines" 
              className="inline-flex items-center text-red-400 hover:text-red-300 font-accent transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToDisciplines}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images Section */}
            <div className="relative space-y-4">
              {/* Main Photo */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={discipline.image}
                  alt={discipline.imageAlt || `${discipline.name} - trening w klubie VOLAT`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Mini Gallery (up to 3 photos) */}
              {discipline.gallery && discipline.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {discipline.gallery.slice(0, 3).map((galleryImage: string, index: number) => {
                    // SEO alt тексты для конкретных фото
                    const altTexts: Record<string, string> = {
                      "/karate-mistrzostwa-volat-nagrody.jpg": "Karate WKF mistrzostwa VOLAT - nagrody i osiągnięcia klubu na turnieju karate",
                      "/karate-trening-aktywny-volat.jpg": "Karate WKF aktywny trening dzieci w klubie VOLAT - dynamiczne ćwiczenia i techniki karate",
                      "/karate-trening-rozgrzewka-volat.jpg": "Karate WKF rozgrzewka i ćwiczenia dzieci w klubie VOLAT - trening w sali sportowej",
                      "/mma-trening-grappling-volat.jpg": "MMA trening grappling w klubie VOLAT - techniki walki w parterze i kontrola przeciwnika",
                      "/mma-trening-parter-volat.jpg": "MMA trening w parterze w klubie VOLAT - techniki ground fighting i submisji z trenerem Paweł Szymkowicz",
                      "/mma-trening-volat.jpg": "MMA trening w klubie VOLAT - mieszane sztuki walki, walka w parterze i techniki grapplingu z trenerem Paweł Szymkowicz",
                      "/muaythai-trening-dzieci-volat.jpg": "Muay Thai trening dzieci w klubie VOLAT - techniki kopnięć i uderzeń w tajskim boksie z trenerem Mikoła Taczylin",
                      "/muaythai-trening-uderzenia-volat.jpg": "Muay Thai trening uderzeń w klubie VOLAT - techniki boksu tajskiego dla dzieci i młodzieży",
                      "/muaythai-trening-kopięcia-volat.jpg": "Muay Thai trening kopnięć w klubie VOLAT - techniki tajskiego boksu z trenerem Mikoła Taczylin",
                    }
                    const altText = altTexts[galleryImage] || `${discipline.name} - photo ${index + 1} w klubie VOLAT`
                    return (
                      <div key={index} className="relative w-full h-32 lg:h-40 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={galleryImage}
                          alt={altText}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    )
                  })}
                  {/* Fill empty spaces if less than 3 photos */}
                  {Array.from({ length: Math.max(0, 3 - discipline.gallery.length) }).map((_, index) => (
                    <div key={`empty-${index}`} className="relative w-full h-32 lg:h-40 rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Photo {index + discipline.gallery.length + 1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent break-words leading-tight">
                  {disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name}
                </h1>
                <p className="text-xl text-gray-300 font-primary mb-2">
                  {discipline.description}
                </p>
                <p className="text-lg text-red-400 font-accent">
                  {t.trainer}: {discipline.trainer}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  {t.description}
                </h2>
                <p className="text-gray-300 font-primary leading-relaxed">
                  {discipline.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  {t.benefits}
                </h2>
                <ul className="space-y-2">
                  {discipline.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300 font-primary">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.schedule}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm">
                    {discipline.schedule}
                  </p>
                </div>
                <div className="bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.ageGroups}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm">
                    {discipline.ageGroups}
                  </p>
                </div>
                <div className="bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.price}
                  </h3>
                  <p className="text-red-400 font-accent font-bold text-lg">
                    {discipline.price === "Zapytaj o cenę" 
                      ? (priceTranslations["ask"][currentLang] || priceTranslations["ask"]["pl"])
                      : (priceTranslations["default"][currentLang] || priceTranslations["default"]["pl"])
                    }
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl text-center shadow-lg block"
                >
                  {t.bookNow}
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/schedule"
                    className="px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black text-sm font-accent font-medium rounded-xl text-center shadow-lg block"
                  >
                    {t.viewSchedule}
                  </Link>
                  <Link
                    href={discipline.trainer.includes(',') ? '/coaches' : `/coaches/${discipline.trainerId}`}
                    className="px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black text-sm font-accent font-medium rounded-xl text-center shadow-lg block"
                  >
                    {t.viewTrainer}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

