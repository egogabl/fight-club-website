"use client"

import { useParams } from 'next/navigation'
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
    imageAlt: "Karate WKF trening dla dzieci w klubie VOLAT - zajęcia karate dla dzieci z trenerami Vital Rak i Volha Yefimenka", // SEO alt текст для основного фото
    gallery: ["/karate-trening-aktywny-volat.jpg", "/karate-mistrzostwa-volat-nagrody.jpg", "/karate-trening-rozgrzewka-volat.jpg"], // Массив объектов: { src: string, alt: string }
    fullDescription: "Karate WKF to tradycyjna sztuka walki pochodząca z Japonii, która łączy techniki uderzeń, kopnięć i bloków. Trening rozwija siłę, szybkość, koordynację, dyscyplinę i koncentrację. Prowadzimy zajęcia dla dzieci od 7 lat z Volha Yefimenka, młodzieży i dorosłych z Vital Rak. Klub jest członkiem Polskiej Unii Karate i Mazowieckiego Związku Karate, co zapewnia profesjonalny poziom nauczania.",
    benefits: [
      "Poprawa kondycji fizycznej",
      "Rozwój koordynacji ruchowej", 
      "Wzrost pewności siebie",
      "Nauka samodyscypliny",
      "Redukcja stresu"
    ],
    schedule: "Poniedziałek, Środa, Piątek, Wtorek, Czwartek, Sobota",
    ageGroups: "Dzieci od 7 lat, Młodzież, Dorośli",
    price: "Dzieci: 150 zł/miesiąc, Dorośli: 180 zł/miesiąc"
  },
  {
    id: "muaythai",
    name: "Muay Thai / Kickboxing",
    description: "Sztuki walki",
    slug: "muaythai", 
    trainer: "Mikoła Taczylin",
    trainerId: "mikola-taczylin",
    image: "/muaythai-trening-dzieci-volat.jpg",
    imageAlt: "Muay Thai / Kickboxing trening dzieci w klubie VOLAT - techniki kopnięć i uderzeń w tajskim boksie i kickboxingu z trenerem Mikoła Taczylin",
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
    ageGroups: "Młodzież 14+, Dorośli",
    price: "Dzieci: 150 zł/miesiąc, Dorośli: 180 zł/miesiąc"
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
    schedule: "Wtorek, Czwartek 18:00-19:30",
    ageGroups: "Dzieci 5+, Młodzież, Dorośli",
    price: "Dzieci: 150 zł/miesiąc, Dorośli: 180 zł/miesiąc"
  },
  {
    id: "mma",
    name: "MMA",
    description: "Sztuki walki",
    slug: "mma",
    trainer: "Paweł Szymkowicz",
    trainerId: "pawel-szymkowicz",
    image: "/mma-trening-volat.jpg",
    imageAlt: "MMA trening w klubie VOLAT - mieszane sztuki walki, walka w parterze i techniki grapplingu z trenerem Paweł Szymkowicz",
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
    ageGroups: "Młodzież 15+, Dorośli",
    price: "Dzieci: 150 zł/miesiąc, Dorośli: 180 zł/miesiąc"
  },
  {
    id: "volatmove-kids",
    name: "VolatMove! KIDS. Trening Motoryczny",
    description: "Trening motoryczny dla dzieci 5-7 lat",
    slug: "volatmove-kids",
    trainer: "Volha Yefimenka, Daria Koba",
    trainerId: "volha-yefimenka",
    image: "/volatmove-kids-trening-volat.jpg",
    imageAlt: "VolatMove! KIDS trening motoryczny dla dzieci 5-7 lat w klubie VOLAT - ogólne przygotowanie motoryczne dla przedszkolaków",
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
    ageGroups: "Dzieci 5-7 lat",
    price: "Zapytaj o cenę"
  },
  {
    id: "volatmove-junior",
    name: "VolatMove! JUNIOR. Trening Motoryczny",
    description: "Trening motoryczny dla dzieci 8-15 lat",
    slug: "volatmove-junior",
    trainer: "Volha Yefimenka",
    trainerId: "volha-yefimenka",
    image: "/volatmove-junior-trening-volat.jpg",
    imageAlt: "VolatMove! JUNIOR trening motoryczny dla dzieci 8-15 lat w klubie VOLAT - korekcja postawy i wzmocnienie stóp",
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
    ageGroups: "Dzieci 8-15 lat",
    price: "Zapytaj o cenę"
  },
  {
    id: "functional-training",
    name: "Trening Funkcjonalny",
    description: "Trening funkcjonalny i motoryczny",
    slug: "functional-training",
    trainer: "Vital Rak",
    trainerId: "vital-rak",
    image: "/functional-trening-1-volat.jpg",
    imageAlt: "Trening funkcjonalny i motoryczny w klubie VOLAT - rozwój siły, wytrzymałości i koordynacji z trenerem Vital Rak",
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
    ageGroups: "Młodzież 15+, Dorośli",
    price: "Zapytaj o cenę"
  },
  {
    id: "chess",
    name: "Szachy",
    description: "Gra strategiczna",
    slug: "chess",
    trainer: "Wiktor Murończyk",
    trainerId: "wiktor-muronczyk",
    image: "/chess-trening-volat.jpg",
    imageAlt: "Szachy trening w klubie VOLAT - gra strategiczna dla dzieci i dorosłych z trenerem Wiktor Murończyk",
    gallery: [] as string[],
    fullDescription: "Szachy to gra strategiczna, która rozwija logiczne myślenie, koncentrację i umiejętności planowania. Trening szachowy poprawia pamięć, cierpliwość i umiejętności analityczne. Idealne dla osób w każdym wieku. Prowadzi Wiktor Murończyk - międzynarodowy mistrz szachowy.",
    benefits: [
      "Rozwój logicznego myślenia",
      "Poprawa koncentracji",
      "Nauka strategii i planowania",
      "Rozwój pamięci",
      "Nauka cierpliwości"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Dzieci 6+, Młodzież, Dorośli",
    price: "Dzieci: 150 zł/miesiąc, Dorośli: 180 zł/miesiąc"
  }
]

export default function DisciplinePage() {
  const params = useParams()
  const { currentLang } = useLanguage()
  
  const discipline = disciplines.find(d => d.slug === params.slug)

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

  if (!discipline) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-white mb-4">{t.notFound}</h1>
            <Link href="/disciplines" className="text-red-400 hover:text-red-300 font-accent">
              {t.backToDisciplines}
            </Link>
          </div>
        </div>
      </div>
    )
  }

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
                  alt={(discipline as any).imageAlt || `${discipline.name} - trening w klubie VOLAT`}
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
                  {discipline.name}
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
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.schedule}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm">
                    {discipline.schedule}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.ageGroups}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm">
                    {discipline.ageGroups}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.price}
                  </h3>
                  <p className="text-red-400 font-accent font-bold text-lg">
                    {discipline.price}
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
