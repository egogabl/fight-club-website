import Link from 'next/link'
import { Metadata } from 'next'
import DisciplinePageClient from './discipline-page-client'
import StructuredData from '@/components/structured-data'

// Экспортируем список дисциплин для generateStaticParams
export const disciplines = [
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
    schedule: "Poniedziałek, Środa, Piątek, Wtorek, Czwartek, Sobota (Mokotów) | Poniedziałek, Środa 18:00-19:00 (Praga)",
    ageGroups: "Dzieci od 7 lat, Młodzież, Dorośli",
    price: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc"
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
    ageGroups: "Dzieci od 7 lat, Młodzież, Dorośli",
    price: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc"
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
    fullDescription: "Judo to japońska sztuka walki olimpijska, która uczy rzutów, trzymań i dźwigni. Trening rozwija siłę, elastyczność, koordynację i równowagę. Prowadzimy zajęcia dla dzieci w wieku 7-12 lat, dostosowując program do możliwości młodych uczestników. Prowadzi Daria Koba - certyfikowana instruktorka judo z wieloletnim doświadczeniem, która zapewnia bezpieczne i efektywne nauczanie.",
    benefits: [
      "Rozwój siły i elastyczności",
      "Nauka technik rzutów",
      "Poprawa koordynacji",
      "Nauka szacunku",
      "Rozwój charakteru"
    ],
    schedule: "Wtorek, Czwartek 18:00-19:30",
    ageGroups: "Dzieci 7-12 lat",
    price: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc"
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
    fullDescription: "MMA (Mixed Martial Arts) to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. Trening obejmuje walkę w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie. MMA łączy techniki boksu, zapasów, judo, brazylijskiego jiu-jitsu, kickboxingu i innych sztuk walki. Prowadzimy zajęcia dla dzieci od 6 lat, młodzieży od 14 lat i dorosłych z różnym poziomem zaawansowania. Prowadzi Paweł Szymkowicz. Dostępne w filii Volat Mokotów.",
    benefits: [
      "Wszechstronny rozwój",
      "Nauka różnych technik",
      "Maksymalna spalanie kalorii",
      "Poprawa kondycji",
      "Nauka strategii walki"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Dzieci od 6 lat, Młodzież od 14 lat, Dorośli",
    price: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc"
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
    schedule: "Poniedziałek, Środa 17:00-17:55 (Praga)",
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
    fullDescription: "VolatMove! JUNIOR to trening motoryczny i korekcyjny dla dzieci 8-13 lat, skupiający się na korekcji problemów w ruchomości stawów i kształtowaniu prawidłowej postawy. Program obejmuje wzmocnienie stóp, poprawę elastyczności i rozwój siły mięśniowej. Zajęcia specjalnie zaprojektowane dla starszych dzieci, dostosowane do ich potrzeb rozwojowych. Prowadzi Volha Yefimenka z wieloletnim doświadczeniem w pracy z młodymi sportowcami. Dostępne w filiach Volat Mokotów i Volat Praga.",
    benefits: [
      "Korekcja ruchomości stawów",
      "Kształtowanie prawidłowej postawy",
      "Wzmocnienie stóp",
      "Poprawa elastyczności",
      "Rozwój siły i koordynacji"
    ],
    schedule: "Zapytaj o harmonogram",
    ageGroups: "Dzieci 8-13 lat",
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
    fullDescription: "Trening funkcjonalny i motoryczny dla młodzieży od 15 lat i dorosłych. Rozwój siły mięśni, szybkości reakcji, wytrzymałości, elastyczności i koordynacji, korekcja nadwagi. Program kompleksowy, skupiający się na ruchach naturalnych dla człowieka. Prowadzi Vital Rak. Dostępne w filiach Volat Mokotów i Praga Północ.",
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
    price: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc"
  }
]

// Статическая генерация всех страниц дисциплин
export async function generateStaticParams() {
  return disciplines.map((discipline) => ({
    slug: discipline.slug,
  }))
}

// Определяем локации для каждой дисциплины
const disciplineLocations: Record<string, { mokotow?: boolean; praga?: boolean }> = {
  "karate-wkf": { mokotow: true, praga: true },
  "muaythai": { mokotow: true, praga: true },
  "judo": { mokotow: true },
  "mma": { mokotow: true },
  "volatmove-kids": { mokotow: true, praga: true },
  "volatmove-junior": { mokotow: true, praga: true },
  "functional-training": { mokotow: true, praga: true },
  "chess": { mokotow: true, praga: true },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const discipline = disciplines.find(d => d.slug === slug)
  
  if (!discipline) {
    return {
      title: "Dyscyplina nie znaleziona | VOLAT",
    }
  }

  const locations = disciplineLocations[slug] || {}
  const hasMokotow = locations.mokotow
  const hasPraga = locations.praga
  
  // Формируем локации в тексте
  let locationsText = ""
  if (hasMokotow && hasPraga) {
    locationsText = "Mokotów i Praga Północ"
  } else if (hasMokotow) {
    locationsText = "Mokotów"
  } else if (hasPraga) {
    locationsText = "Praga Północ"
  }

  // Улучшенный title с локализацией
  const title = `${discipline.name} w Warszawie ${locationsText ? locationsText + ' - ' : ''}Zajęcia ${discipline.name.toLowerCase()} | VOLAT`
  
  // Улучшенное description с адресами
  let description = discipline.fullDescription.substring(0, 120)
  if (hasMokotow && hasPraga) {
    description += " Lokalizacje: Mokotów ul. Artura Malawskiego 6 i Praga Północ ul. Kowieńska 12/20."
  } else if (hasMokotow) {
    description += " Lokalizacja: Mokotów ul. Artura Malawskiego 6."
  } else if (hasPraga) {
    description += " Lokalizacja: Praga Północ ul. Kowieńska 12/20."
  }
  description = description.substring(0, 160) + "..."
  
  // Расширенные keywords с локализацией
  const keywords = [
    `${discipline.name.toLowerCase()} warszawa`,
    `zajęcia ${discipline.name.toLowerCase()} warszawa`,
    `${discipline.name.toLowerCase()} dla dzieci warszawa`,
    `${discipline.name.toLowerCase()} trening warszawa`,
    `klub ${discipline.name.toLowerCase()} warszawa`,
    "VOLAT",
    "sztuki walki warszawa",
  ]
  
  if (hasMokotow) {
    keywords.push(
      `${discipline.name.toLowerCase()} warszawa mokotów`,
      `zajęcia ${discipline.name.toLowerCase()} mokotów`,
      `${discipline.name.toLowerCase()} mokotów ul. artura malawskiego`,
      `klub ${discipline.name.toLowerCase()} mokotów`
    )
  }
  
  if (hasPraga) {
    keywords.push(
      `${discipline.name.toLowerCase()} warszawa praga północ`,
      `zajęcia ${discipline.name.toLowerCase()} praga`,
      `${discipline.name.toLowerCase()} praga ul. kowieńska`,
      `klub ${discipline.name.toLowerCase()} praga`
    )
  }
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://volat.pl/disciplines/${slug}`,
      siteName: 'VOLAT',
      images: [
        {
          url: discipline.image.startsWith('/') ? `https://volat.pl${discipline.image}` : discipline.image,
          width: 1200,
          height: 630,
          alt: discipline.name,
        },
      ],
      locale: 'pl_PL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [discipline.image.startsWith('/') ? `https://volat.pl${discipline.image}` : discipline.image],
    },
    alternates: {
      canonical: `/disciplines/${slug}`,
    },
  }
}

export default async function DisciplinePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const discipline = disciplines.find(d => d.slug === slug)

  if (!discipline) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-white mb-4">Dyscyplina nie znaleziona</h1>
            <Link href="/disciplines" className="text-red-400 hover:text-red-300 font-accent">
              ← Wróć do dyscyplin
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const locations = disciplineLocations[slug] || {}
  const hasMokotow = locations.mokotow
  const hasPraga = locations.praga
  
  // Breadcrumbs structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://volat.pl"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dyscypliny",
        item: "https://volat.pl/disciplines"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: discipline.name,
        item: `https://volat.pl/disciplines/${slug}`
      }
    ]
  }

  // Course structured data с улучшенной информацией
  const courseStructuredData = {
    name: discipline.name,
    description: discipline.fullDescription,
    provider: {
      "@type": "Organization",
      name: "VOLAT",
      url: "https://volat.pl"
    },
    coursePrerequisites: discipline.ageGroups,
    offers: {
      "@type": "Offer",
      price: discipline.price,
      priceCurrency: "PLN"
    },
    ...(hasMokotow || hasPraga ? {
      location: [
        ...(hasMokotow ? [{
          "@type": "Place",
          name: "VOLAT Mokotów",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Artura Malawskiego 6",
            addressLocality: "Warszawa",
            addressRegion: "Mazowieckie",
            postalCode: "02-341",
            addressCountry: "PL"
          }
        }] : []),
        ...(hasPraga ? [{
          "@type": "Place",
          name: "VOLAT Praga Północ",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Kowieńska 12/20",
            addressLocality: "Warszawa",
            addressRegion: "Mazowieckie",
            postalCode: "03-470",
            addressCountry: "PL"
          }
        }] : [])
      ]
    } : {})
  }

  // FAQ structured data
  const locationsText = hasMokotow && hasPraga
    ? "Zajęcia odbywają się w dwóch lokalizacjach: VOLAT Mokotów (ul. Artura Malawskiego 6) i VOLAT Praga Północ (ul. Kowieńska 12/20)."
    : hasMokotow
    ? "Zajęcia odbywają się w VOLAT Mokotów, ul. Artura Malawskiego 6, Warszawa."
    : "Zajęcia odbywają się w VOLAT Praga Północ, ul. Kowieńska 12/20, Warszawa."

  const priceAnswer = discipline.price === "Zapytaj o cenę"
    ? "Skontaktuj się z nami, aby uzyskać szczegółowe informacje o cenach."
    : discipline.price

  const faqStructuredData = {
    mainEntity: [
      {
        "@type": "Question",
        name: `Jakie są ceny zajęć ${discipline.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: priceAnswer
        }
      },
      {
        "@type": "Question",
        name: `Gdzie odbywają się zajęcia ${discipline.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: locationsText
        }
      },
      {
        "@type": "Question",
        name: `Od jakiego wieku można rozpocząć ${discipline.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: discipline.ageGroups
        }
      },
      {
        "@type": "Question",
        name: "Jak wygląda pierwsze zajęcia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pierwsze zajęcia są bezpłatne i służą zapoznaniu się z klubem oraz trenerem. Przyjdź w wygodnym stroju sportowym. Nie potrzebujesz żadnego specjalnego sprzętu."
        }
      },
      {
        "@type": "Question",
        name: "Jaki sprzęt jest potrzebny na zajęcia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Na pierwsze zajęcia wystarczy wygodny strój sportowy. Wszelki specjalistyczny sprzęt jest dostępny w klubie. Trener poinformuje o szczegółach po pierwszym zajęciu."
        }
      }
    ]
  }

  return (
    <>
      <StructuredData type="Course" data={courseStructuredData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbStructuredData} />
      <StructuredData type="FAQPage" data={faqStructuredData} />
      <DisciplinePageClient discipline={discipline} locations={{ mokotow: hasMokotow, praga: hasPraga }} />
    </>
  )
}
