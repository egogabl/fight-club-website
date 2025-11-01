import Link from 'next/link'
import DisciplinePageClient from './discipline-page-client'

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
    schedule: "Poniedziałek, Środa, Piątek, Wtorek, Czwartek, Sobota",
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
    ageGroups: "Młodzież 14+, Dorośli",
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
    price: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc"
  }
]

// Статическая генерация всех страниц дисциплин
export async function generateStaticParams() {
  return disciplines.map((discipline) => ({
    slug: discipline.slug,
  }))
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

  return <DisciplinePageClient discipline={discipline} />
}
