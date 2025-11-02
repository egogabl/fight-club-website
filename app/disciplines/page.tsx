"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

const disciplines = [
  {
    id: "karate-wkf",
    name: "Karate WKF",
    description: "Sztuki walki",
    slug: "karate-wkf",
    trainer: "Vital Rak, Volha Yefimenka",
    trainerId: "vital-rak",
    image: "/karate-trening-dzieci-volat.jpg",
    gallery: ["/karate-trening-aktywny-volat.jpg", "/karate-mistrzostwa-volat-nagrody.jpg", "/karate-trening-rozgrzewka-volat.jpg"],
    fullDescription: "Karate WKF to tradycyjna sztuka walki pochodząca z Japonii, która łączy techniki uderzeń, kopnięć i bloków. Trening rozwija siłę, szybkość, koordynację, dyscyplinę i koncentrację. Prowadzimy zajęcia dla dzieci od 7 lat z Volha Yefimenka, młodzieży i dorosłych z Vital Rak. Klub jest członkiem Polskiej Unii Karate i Mazowieckiego Związku Karate, co zapewnia profesjonalny poziom nauczania.",
    benefits: [
      "Poprawa kondycji fizycznej",
      "Rozwój koordynacji ruchowej", 
      "Wzrost pewności siebie",
      "Nauka samodyscypliny",
      "Redukcja stresu"
    ],
    schedule: "Wtorek, Czwartek, Sobota",
    ageGroups: "Dzieci od 7 lat, Młodzież, Dorośli"
  },
  {
    id: "muaythai",
    name: "Muay Thai / Kickboxing",
    description: "Sztuki walki",
    slug: "muaythai", 
    trainer: "Mikoła Taczylin",
    trainerId: "mikola-taczylin",
    image: "/muaythai-trening-dzieci-volat.jpg",
    gallery: ["/muaythai-trening-grupa-volat.jpg", "/muaythai-trening-uderzenia-volat.jpg", "/muaythai-trening-kopięcia-volat.jpg"],
    fullDescription: "Muay Thai / Kickboxing to tajski boks i kickboxing, jedna z najskuteczniejszych sztuk walki na świecie. Charakteryzuje się użyciem uderzeń pięściami, łokciami, kolanami i kopnięciami. Trening jest bardzo intensywny i rozwija wytrzymałość, siłę, szybkość i refleks. Prowadzimy zajęcia dla różnych grup wiekowych, od dzieci po dorosłych, dostosowując program do poziomu zaawansowania uczestników.",
    benefits: [
      "Maksymalna spalanie kalorii",
      "Rozwój siły i wytrzymałości",
      "Nauka samoobrony",
      "Poprawa refleksu",
      "Wzrost pewności siebie"
    ],
    schedule: "Wtorek, Czwartek 19:00-20:30",
    ageGroups: "Młodzież 14+, Dorośli"
  },
  {
    id: "judo",
    name: "Judo",
    description: "Sztuki walki",
    slug: "judo",
    trainer: "Daria Koba",
    trainerId: "daria-koba", 
    image: "/judo-martial-arts-icon.jpg",
    gallery: [] as string[],
    fullDescription: "Judo to japońska sztuka walki olimpijska, która uczy rzutów, trzymań i dźwigni. Trening rozwija siłę, elastyczność, koordynację i równowagę. Prowadzimy zajęcia dla dzieci w wieku 6-12 lat, dostosowując program do możliwości młodych uczestników. Prowadzi Daria Koba - certyfikowana instruktorka judo z wieloletnim doświadczeniem, która zapewnia bezpieczne i efektywne nauczanie.",
    benefits: [
      "Rozwój siły i elastyczności",
      "Nauka technik rzutów",
      "Poprawa koordynacji",
      "Nauka szacunku",
      "Rozwój charakteru"
    ],
    schedule: "Poniedziałek, Środa, Piątek 18:15-19:15",
    ageGroups: "Dzieci 6-12 lat"
  },
  {
    id: "mma",
    name: "MMA",
    description: "Sztuki walki",
    slug: "mma",
    trainer: "Paweł Szymkowicz",
    trainerId: "pawel-szymkowicz",
    image: "/mma-trening-volat.jpg",
    gallery: ["/mma-trening-grappling-volat.jpg", "/mma-trening-parter-volat.jpg", "/mma-trening-volat-3.jpg"],
    fullDescription: "MMA (Mixed Martial Arts) to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. Trening obejmuje walkę w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie. MMA łączy techniki boksu, zapasów, judo, brazylijskiego jiu-jitsu, kickboxingu i innych sztuk walki. Prowadzimy zajęcia dla młodzieży od 15 lat i dorosłych z różnym poziomem zaawansowania. Prowadzi Paweł Szymkowicz. Dostępne w filii Volat Mokotów.",
    benefits: [
      "Wszechstronny rozwój",
      "Nauka różnych technik",
      "Maksymalna spalanie kalorii",
      "Poprawa kondycji",
      "Nauka strategii walki"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Młodzież 15+, Dorośli"
  },
  {
    id: "volatmove-kids",
    name: "VolatMove! KIDS. Trening Motoryczny",
    description: "Trening motoryczny dla dzieci 5-7 lat",
    slug: "volatmove-kids",
    trainer: "Volha Yefimenka, Daria Koba",
    trainerId: "volha-yefimenka",
    image: "/volatmove-kids-trening-volat.jpg",
    gallery: [] as string[],
    fullDescription: "VolatMove! KIDS to ogólne przygotowanie motoryczne dla przedszkolaków, rozwój koordynacji i motoryki dużej. Program specjalnie zaprojektowany dla najmłodszych dzieci w wieku 5-7 lat, skupiający się na podstawowych umiejętnościach ruchowych i równowadze. Zajęcia prowadzą Volha Yefimenka i Daria Koba, które dostosowują program do możliwości każdego dziecka. Treningi odbywają się w przyjaznej atmosferze, zachęcając do aktywności fizycznej. Dostępne w filiach Volat Mokotów i Volat Praga.",
    benefits: [
      "Rozwój koordynacji ruchowej",
      "Rozwój motoryki dużej",
      "Kształtowanie podstawowych umiejętności ruchowych",
      "Poprawa równowagi i elastyczności",
      "Przygotowanie do aktywności sportowych"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Dzieci 5-7 lat"
  },
  {
    id: "volatmove-junior",
    name: "VolatMove! JUNIOR. Trening Motoryczny",
    description: "Trening motoryczny dla dzieci 8-15 lat",
    slug: "volatmove-junior",
    trainer: "Volha Yefimenka",
    trainerId: "volha-yefimenka",
    image: "/volatmove-junior-trening-volat.jpg",
    gallery: [] as string[],
    fullDescription: "VolatMove! JUNIOR to trening motoryczny dla dzieci 8-15 lat, skupiający się na korekcji problemów w ruchomości stawów i kształtowaniu prawidłowej postawy. Program obejmuje wzmocnienie stóp, poprawę elastyczności i rozwój siły mięśniowej. Zajęcia specjalnie zaprojektowane dla starszych dzieci i młodzieży, dostosowane do ich potrzeb rozwojowych. Prowadzi Volha Yefimenka z wieloletnim doświadczeniem w pracy z młodymi sportowcami. Dostępne w filiach Volat Mokotów i Volat Praga.",
    benefits: [
      "Korekcja ruchomości stawów",
      "Kształtowanie prawidłowej postawy",
      "Wzmocnienie stóp",
      "Poprawa elastyczności",
      "Rozwój siły i koordynacji"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Dzieci 8-15 lat"
  },
  {
    id: "functional-training",
    name: "Trening Funkcjonalny",
    description: "Trening funkcjonalny i motoryczny",
    slug: "functional-training",
    trainer: "Vital Rak",
    trainerId: "vital-rak",
    image: "/functional-trening-1-volat.jpg",
    gallery: ["/functional-trening-2-volat.jpg", "/functional-trening-3-volat.jpg", "/functional-trening-4-volat.jpg"],
    fullDescription: "Trening funkcjonalny i motoryczny dla młodzieży od 15 lat i dorosłych. Rozwój siły mięśni, szybkości reakcji, wytrzymałości, elastyczności i koordynacji, korekcja nadwagi. Program kompleksowy, skupiający się na ruchach naturalnych dla człowieka. Prowadzi Vital Rak. Dostępne w filii Volat Mokotów.",
    benefits: [
      "Rozwój siły mięśni",
      "Poprawa szybkości reakcji",
      "Rozwój wytrzymałości",
      "Poprawa elastyczności i koordynacji",
      "Korekcja nadwagi"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Młodzież 15+, Dorośli"
  },
  {
    id: "chess",
    name: "Szachy",
    description: "Gra strategiczna",
    slug: "chess",
    trainer: "Wiktor Murończyk",
    trainerId: "wiktor-muronczyk",
    image: "/chess-trening-volat.jpg",
    gallery: [] as string[],
    fullDescription: "Szachy to gra strategiczna, która rozwija logiczne myślenie, koncentrację i umiejętności planowania. Trening szachowy poprawia pamięć, cierpliwość i umiejętności analityczne. Idealne dla osób w każdym wieku.",
    benefits: [
      "Rozwój logicznego myślenia",
      "Poprawa koncentracji",
      "Nauka strategii i planowania",
      "Rozwój pamięci",
      "Nauka cierpliwości"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Dzieci 6+, Młodzież, Dorośli"
  }
]

export default function DisciplinesPage() {
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

  // Переводы описаний
  const descriptionTranslations: Record<string, Record<string, string>> = {
    "karate-wkf": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "muaythai": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "judo": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "mma": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "volatmove-kids": {
      pl: "Trening motoryczny dla dzieci 5-7 lat",
      uk: "Моторичний тренінг для дітей 5-7 років",
      en: "Motor training for children 5-7 years",
      by: "Маторныя трэніроўкі для дзяцей 5-7 гадоў"
    },
    "volatmove-junior": {
      pl: "Trening motoryczny dla dzieci 8-15 lat",
      uk: "Моторичний тренінг для дітей 8-15 років",
      en: "Motor training for children 8-15 years",
      by: "Маторныя трэніроўкі для дзяцей 8-15 гадоў"
    },
    "functional-training": {
      pl: "Trening funkcjonalny i motoryczny",
      uk: "Функціональний та моторичний тренінг",
      en: "Functional and motor training",
      by: "Функцыянальныя і маторныя трэніроўкі"
    },
    "chess": {
      pl: "Gra strategiczna",
      uk: "Стратегічна гра",
      en: "Strategic game",
      by: "Стратэгічная гульня"
    }
  }
  
  const translations = {
    pl: {
      title: "Nasze Dyscypliny",
      subtitle: "Odkryj różnorodność treningów w VOLAT",
      viewDetails: "Zobacz szczegóły",
      bookNow: "Zapisz się",
      schedule: "Grafik",
      ageGroups: "Grupy wiekowe",
      benefits: "Korzyści",
      trainer: "Trener"
    },
    uk: {
      title: "Наші Дисципліни",
      subtitle: "Відкрийте різноманітність тренувань у VOLAT",
      viewDetails: "Детальніше",
      bookNow: "Записатися",
      schedule: "Розклад",
      ageGroups: "Вікові групи",
      benefits: "Переваги",
      trainer: "Тренер"
    },
    en: {
      title: "Our Disciplines",
      subtitle: "Discover the diversity of training in VOLAT",
      viewDetails: "More details",
      bookNow: "Book now",
      schedule: "Schedule",
      ageGroups: "Age groups",
      benefits: "Benefits",
      trainer: "Trainer"
    },
    by: {
      title: "Нашы Дысцыпліны",
      subtitle: "Адкрыйце разнастайнасць трэніровак у VOLAT",
      viewDetails: "Падрабязна",
      bookNow: "Запісацца",
      schedule: "Расклад",
      ageGroups: "Узроставыя групы",
      benefits: "Перавагі",
      trainer: "Трэнер"
    }
  }

  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      
      <main className="relative z-40 pt-20">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-primary max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
            {disciplines.map((discipline) => (
              <div
                key={discipline.id}
                className="group bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-gray-600/50 transition-all duration-200 hover:shadow-2xl hover:shadow-red-500/10 flex flex-col h-full"
              >
                {/* Main Image */}
                <div className="relative w-full h-48 sm:h-64 mb-4 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image
                    src={discipline.image}
                    alt={`${disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name} - trening w klubie VOLAT Warszawa`}
                    title={`${disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name} - zajęcia w klubie VOLAT Warszawa, trener ${discipline.trainer}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col min-h-0">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-red-100 transition-colors duration-300 break-words leading-tight">
                    {disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm sm:text-sm min-h-[20px] sm:min-h-[24px]">
                    {descriptionTranslations[discipline.slug]?.[currentLang] || discipline.description}
                  </p>
                  <p className="text-gray-400 font-primary text-xs sm:text-xs">
                    {t.trainer}: {discipline.trainer}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-4 sm:pt-6 pb-0 flex flex-col gap-3">
                  <Link
                    href={`/disciplines/${discipline.slug}`}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs sm:text-sm font-accent font-medium rounded-xl shadow-lg min-h-[48px] flex items-center justify-center whitespace-nowrap no-underline"
                  >
                    <span className="text-center w-full">{t.viewDetails}</span>
                  </Link>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-white to-gray-100 text-black text-xs sm:text-sm font-accent font-medium rounded-xl shadow-lg border border-gray-200 min-h-[48px] flex items-center justify-center whitespace-nowrap no-underline"
                  >
                    <span className="text-center w-full">{t.bookNow}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
