import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "VolatMove! JUNIOR Warszawa | Trening Motoryczny dla Dzieci 8-13 lat | VOLAT",
  description: "VolatMove! JUNIOR w Warszawie - trening motoryczny i korekcyjny dla dzieci 8-13 lat. Korekcja postawy i wzmocnienie stóp. Trenerka: Volha Yefimenka. Lokalizacje: Mokotów i Praga Północ. Zapisz dziecko już dziś!",
  keywords: [
    "volatmove junior warszawa",
    "trening motoryczny dla dzieci warszawa",
    "korekcja postawy dzieci warszawa",
    "zajęcia korekcyjne dzieci warszawa",
    "trening dla dzieci 8-13 lat",
    "wzmocnienie stóp dzieci",
    "korekcja ruchomości stawów",
    "VOLAT volatmove junior",
    "ul. artura malawskiego 6",
    "ul. kowieńska 12/20"
  ],
  openGraph: {
    title: "VolatMove! JUNIOR Warszawa | Trening Motoryczny dla Dzieci | VOLAT",
    description: "VolatMove! JUNIOR w Warszawie - trening motoryczny dla dzieci 8-13 lat. Mokotów i Praga Północ.",
    url: "https://volat.pl/seo/volatmove-junior-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VolatMove! JUNIOR Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VolatMove! JUNIOR Warszawa | Trening Motoryczny dla Dzieci | VOLAT",
    description: "VolatMove! JUNIOR w Warszawie - trening motoryczny dla dzieci 8-13 lat",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/volatmove-junior-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "VolatMove! JUNIOR Warszawa",
  description: "Trening motoryczny i korekcyjny dla dzieci 8-13 lat w Warszawie. Korekcja postawy i wzmocnienie stóp. Lokalizacje: Mokotów i Praga Północ.",
  provider: {
    "@type": "Organization",
    name: "VOLAT",
    url: "https://volat.pl"
  },
  courseCode: "VMJUNIOR-001",
  educationalLevel: "Beginner to Intermediate",
  teaches: "Trening motoryczny i korekcyjny dla dzieci",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "65"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie odbywają się zajęcia VolatMove! JUNIOR w Warszawie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia VolatMove! JUNIOR odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie."
      }
    },
    {
      "@type": "Question",
      name: "Dla jakiego wieku są przeznaczone zajęcia VolatMove! JUNIOR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia VolatMove! JUNIOR są przeznaczone dla dzieci w wieku 8-13 lat."
      }
    },
    {
      "@type": "Question",
      name: "Ile kosztują zajęcia VolatMove! JUNIOR w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Szczegóły dotyczące cen zajęć VolatMove! JUNIOR prosimy uzgodnić telefonicznie lub mailowo."
      }
    }
  ]
}

export default function VolatMoveJuniorWarszawaPage() {
  return (
    <>
      <StructuredData type="Course" data={structuredData} />
      <StructuredData type="FAQPage" data={faqStructuredData} />
      
      <div className="min-h-screen bg-black">
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <nav className="mb-8 text-sm text-gray-400">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-red-400">Strona główna</Link></li>
                <li>/</li>
                <li className="text-gray-300">VolatMove! JUNIOR Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              VolatMove! JUNIOR Warszawa - Trening Motoryczny dla Dzieci 8-13 lat
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz profesjonalnych zajęć treningu motorycznego dla starszych dzieci w Warszawie? VOLAT oferuje program VolatMove! JUNIOR - trening motoryczny i korekcyjny dla dzieci 8-13 lat w dwóch lokalizacjach: <strong>Mokotów</strong> przy ul. Artura Malawskiego 6 oraz <strong>Praga Północ</strong> przy ul. Kowieńskiej 12/20. Prowadzi Volha Yefimenka - doświadczona trenerka z wieloletnim doświadczeniem w pracy z młodymi sportowcami.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego VolatMove! JUNIOR w VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                VolatMove! JUNIOR to trening motoryczny i korekcyjny dla dzieci 8-13 lat, skupiający się na korekcji problemów w ruchomości stawów i kształtowaniu prawidłowej postawy. Program obejmuje wzmocnienie stóp, poprawę elastyczności i rozwój siły mięśniowej.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia specjalnie zaprojektowane dla starszych dzieci, dostosowane do ich potrzeb rozwojowych. Prowadzi Volha Yefimenka z wieloletnim doświadczeniem w pracy z młodymi sportowcami, która zapewnia bezpieczne i efektywne nauczanie.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zajęcia VolatMove! JUNIOR dla Dzieci 8-13 lat
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia VolatMove! JUNIOR prowadzi doświadczona trenerka <strong>Volha Yefimenka</strong>. Program jest specjalnie zaprojektowany dla starszych dzieci, skupiając się na korekcji postawy i wzmocnieniu stóp.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci w wieku 8-13 lat</li>
                <li>Trening motoryczny i korekcyjny</li>
                <li>Korekcja ruchomości stawów</li>
                <li>Kształtowanie prawidłowej postawy</li>
                <li>Wzmocnienie stóp</li>
                <li>Poprawa elastyczności</li>
                <li>Rozwój siły i koordynacji</li>
                <li>Szczegóły dotyczące harmonogramu i cen prosimy uzgodnić telefonicznie</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Treningu VolatMove! JUNIOR
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Korekcja Postawy</h3>
                <p className="text-gray-300">
                  Korekcja problemów w ruchomości stawów i kształtowanie prawidłowej postawy. Poprawa zdrowia kręgosłupa.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Wzmocnienie Stóp</h3>
                <p className="text-gray-300">
                  Wzmocnienie stóp i poprawa elastyczności. Lepsze funkcjonowanie w codziennym życiu i sporcie.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Siły</h3>
                <p className="text-gray-300">
                  Rozwój siły mięśniowej i koordynacji. Kompleksowy rozwój całego ciała.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Przygotowanie Sportowe</h3>
                <p className="text-gray-300">
                  Przygotowanie do aktywności sportowych. Rozwój podstawowych umiejętności potrzebnych w sporcie.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Lokalizacje Zajęć VolatMove! JUNIOR
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">VOLAT Mokotów</h3>
                <p className="text-gray-300 mb-4">ul. Artura Malawskiego 6, Warszawa</p>
                <p className="text-gray-400 text-sm">
                  Nowoczesna sala treningowa z pełnym wyposażeniem. Dostępne szatnie z prysznicami, parking i klimatyzacja.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">VOLAT Praga Północ</h3>
                <p className="text-gray-300 mb-4">ul. Kowieńska 12/20, Warszawa</p>
                <p className="text-gray-400 text-sm">
                  Sala treningowa z recepcją, szatnie z prysznicami i klimatyzacją. Dogodny dojazd komunikacją miejską.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz Dziecko na VolatMove! JUNIOR w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do zadowolonych uczestników treningów motorycznych w VOLAT!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl"
                >
                  Zapisz się teraz
                </Link>
                <Link
                  href="/disciplines/volatmove-junior"
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl border border-white/20"
                >
                  Zobacz szczegóły
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Najczęściej Zadawane Pytania
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Gdzie odbywają się zajęcia VolatMove! JUNIOR w Warszawie?</h3>
                  <p className="text-gray-300">
                    Zajęcia VolatMove! JUNIOR odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Dla jakiego wieku są przeznaczone zajęcia VolatMove! JUNIOR?</h3>
                  <p className="text-gray-300">
                    Zajęcia VolatMove! JUNIOR są przeznaczone dla dzieci w wieku 8-13 lat.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Ile kosztują zajęcia VolatMove! JUNIOR w VOLAT?</h3>
                  <p className="text-gray-300">
                    Szczegóły dotyczące cen zajęć VolatMove! JUNIOR prosimy uzgodnić telefonicznie lub mailowo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

