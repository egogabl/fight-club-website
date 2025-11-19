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
    schedule: "Wtorek, Czwartek 18:00-19:30",
    ageGroups: "Dzieci 5+, Młodzież, Dorośli"
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
    schedule: "Poniedziałek, Środa 17:00-17:55 (Praga)",
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
    fullDescription: "Trening funkcjonalny i motoryczny dla młodzieży od 15 lat i dorosłych. Rozwój siły mięśni, szybkości reakcji, wytrzymałości, elastyczności i koordynacji, korekcja nadwagi. Program kompleksowy, skupiający się na ruchach naturalnych dla człowieka. Prowadzi Vital Rak. Dostępne w filiach Volat Mokotów i Praga Północ.",
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
    fullDescription: "Szachy to gra strategiczna, która rozwija logiczne myślenie, koncentrację i umiejętności planowania. Trening szachowy poprawia pamięć, cierpliwość i umiejętności analityczne. Idealne dla osób w każdym wieku. Prowadzi Wiktor Murończyk - międzynarodowy mistrz szachowy.",
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

const translations = {
  pl: {
    title: "Dyscypliny",
    description: "Wybierz swoją ścieżkę w świecie sztuk walki i sportu",
    viewDetails: "Zobacz szczegóły",
    bookNow: "Zapisz się",
  },
  uk: {
    title: "Дисципліни",
    description: "Оберіть свій шлях у світі бойових мистецтв та спорту",
    viewDetails: "Детальніше",
    bookNow: "Записатися",
  },
  en: {
    title: "Disciplines",
    description: "Choose your path in the world of martial arts and sports",
    viewDetails: "View details",
    bookNow: "Book now",
  },
  by: {
    title: "Дысцыпліны",
    description: "Выберыце свой шлях у свеце баявых мастацтваў і спорту",
    viewDetails: "Дэталі",
    bookNow: "Запісацца",
  },
}

export default function DisciplinesPageClient() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-28 sm:pt-32">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-4 sm:mb-6">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-primary max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {disciplines.map((discipline) => (
            <div
              key={discipline.id}
              className="group bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-red-500/20 hover:scale-[1.02] flex flex-col"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  quality={65}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  src={discipline.image}
                  alt={`${discipline.name} - ${discipline.description} w klubie VOLAT Warszawa`}
                  title={`${discipline.name} - Zajęcia w klubie VOLAT`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
                  className="object-cover"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">
                  {discipline.name}
                </h2>
                <p className="text-gray-400 font-primary mb-4 sm:mb-6 flex-1 line-clamp-3">
                  {discipline.fullDescription.substring(0, 120)}...
                </p>
                <div className="mt-auto pt-4 sm:pt-6 pb-0 flex flex-col gap-3 relative z-10">
                  <Link
                    href={`/disciplines/${discipline.slug}`}
                    className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-sm font-accent font-medium rounded-xl shadow-lg h-[48px] flex items-center justify-center whitespace-nowrap no-underline transition-all duration-200 cursor-pointer relative z-10"
                  >
                    <span className="text-center">{t.viewDetails}</span>
                  </Link>
                  <a
                    href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-gradient-to-r from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-black text-sm font-accent font-medium rounded-xl shadow-lg border border-gray-200 h-[48px] flex items-center justify-center whitespace-nowrap no-underline transition-all duration-200 cursor-pointer relative z-10"
                  >
                    <span className="text-center">{t.bookNow}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

