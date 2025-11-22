import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Trening Funkcjonalny Warszawa Mokotów i Praga | Trening Motoryczny dla Dorosłych | VOLAT",
  description: "Trening funkcjonalny w Warszawie - profesjonalne zajęcia treningu funkcjonalnego i motorycznego dla młodzieży od 15 lat i dorosłych. Trener: Vital Rak. Lokalizacje: Mokotów ul. Artura Malawskiego 6 i Praga Północ ul. Kowieńska 12/20. Zapisz się już dziś!",
  keywords: [
    "trening funkcjonalny warszawa",
    "trening motoryczny warszawa",
    "trening funkcjonalny mokotów",
    "trening funkcjonalny praga",
    "zajęcia funkcjonalne warszawa",
    "treningi funkcjonalne warszawa",
    "fitness funkcjonalny warszawa",
    "trening siłowy warszawa",
    "korekcja nadwagi warszawa",
    "VOLAT trening funkcjonalny",
    "ul. artura malawskiego 6",
    "ul. kowieńska 12/20"
  ],
  openGraph: {
    title: "Trening Funkcjonalny Warszawa | Trening Motoryczny | VOLAT",
    description: "Trening funkcjonalny w Warszawie - zajęcia dla młodzieży i dorosłych. Mokotów i Praga Północ.",
    url: "https://volat.pl/seo/trening-funkcjonalny-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "Trening Funkcjonalny Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trening Funkcjonalny Warszawa | Trening Motoryczny | VOLAT",
    description: "Trening funkcjonalny w Warszawie - zajęcia dla młodzieży i dorosłych",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/trening-funkcjonalny-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Trening Funkcjonalny Warszawa",
  description: "Profesjonalne zajęcia treningu funkcjonalnego i motorycznego dla młodzieży od 15 lat i dorosłych w Warszawie. Lokalizacje: Mokotów i Praga Północ.",
  provider: {
    "@type": "Organization",
    name: "VOLAT",
    url: "https://volat.pl"
  },
  courseCode: "FUNC-001",
  educationalLevel: "Intermediate to Advanced",
  teaches: "Trening funkcjonalny i motoryczny",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "89"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie odbywają się zajęcia treningu funkcjonalnego w Warszawie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia treningu funkcjonalnego odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie."
      }
    },
    {
      "@type": "Question",
      name: "Dla kogo są przeznaczone zajęcia treningu funkcjonalnego?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia treningu funkcjonalnego są przeznaczone dla młodzieży od 15 lat i dorosłych."
      }
    },
    {
      "@type": "Question",
      name: "Ile kosztują zajęcia treningu funkcjonalnego w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Szczegóły dotyczące cen zajęć treningu funkcjonalnego prosimy uzgodnić telefonicznie lub mailowo."
      }
    }
  ]
}

export default function TreningFunkcjonalnyWarszawaPage() {
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
                <li className="text-gray-300">Trening Funkcjonalny Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Trening Funkcjonalny Warszawa - Trening Motoryczny dla Młodzieży i Dorosłych
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz profesjonalnych zajęć treningu funkcjonalnego w Warszawie? VOLAT oferuje kompleksowe programy treningu funkcjonalnego i motorycznego dla młodzieży od 15 lat i dorosłych w dwóch lokalizacjach: <strong>Mokotów</strong> przy ul. Artura Malawskiego 6 oraz <strong>Praga Północ</strong> przy ul. Kowieńskiej 12/20. Prowadzi Vital Rak - doświadczony trener.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Trening Funkcjonalny w VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Trening funkcjonalny i motoryczny to kompleksowy program, skupiający się na ruchach naturalnych dla człowieka. Rozwija siłę mięśni, szybkość reakcji, wytrzymałość, elastyczność i koordynację. Program jest idealny dla osób, które chcą poprawić swoją sprawność fizyczną, korekcję nadwagi i ogólne samopoczucie.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Treningi funkcjonalne w Warszawie prowadzone są przez doświadczonych trenerów, którzy dostosowują program do indywidualnych potrzeb uczestników. Zajęcia odbywają się w małych grupach, co zapewnia indywidualne podejście i maksymalną efektywność treningu.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zajęcia Treningu Funkcjonalnego dla Młodzieży i Dorosłych
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia treningu funkcjonalnego prowadzi doświadczony trener <strong>Vital Rak</strong>. Program jest dostępny dla młodzieży od 15 lat i dorosłych. Treningi skupiają się na ruchach naturalnych, które poprawiają codzienne funkcjonowanie i sprawność fizyczną.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla młodzieży od 15 lat</li>
                <li>Zajęcia dla dorosłych</li>
                <li>Rozwój siły mięśni</li>
                <li>Poprawa szybkości reakcji</li>
                <li>Rozwój wytrzymałości</li>
                <li>Poprawa elastyczności i koordynacji</li>
                <li>Korekcja nadwagi</li>
                <li>Szczegóły dotyczące harmonogramu i cen prosimy uzgodnić telefonicznie</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Treningu Funkcjonalnego
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Siły</h3>
                <p className="text-gray-300">
                  Poprawa siły mięśniowej, wytrzymałości i szybkości reakcji. Kompleksowy rozwój całego ciała.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Poprawa Koordynacji</h3>
                <p className="text-gray-300">
                  Rozwój elastyczności, koordynacji i równowagi. Lepsze funkcjonowanie w codziennym życiu.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Korekcja Nadwagi</h3>
                <p className="text-gray-300">
                  Intensywne treningi pomagają w redukcji wagi i poprawie kondycji fizycznej.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Ruchy Naturalne</h3>
                <p className="text-gray-300">
                  Program skupia się na ruchach naturalnych dla człowieka, poprawiając codzienne funkcjonowanie.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Lokalizacje Zajęć Treningu Funkcjonalnego
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
                Zapisz się na Trening Funkcjonalny w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do zadowolonych uczestników treningów funkcjonalnych w VOLAT!
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
                  href="/disciplines/functional-training"
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
                  <h3 className="text-xl font-bold text-white mb-2">Gdzie odbywają się zajęcia treningu funkcjonalnego w Warszawie?</h3>
                  <p className="text-gray-300">
                    Zajęcia treningu funkcjonalnego odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Dla kogo są przeznaczone zajęcia treningu funkcjonalnego?</h3>
                  <p className="text-gray-300">
                    Zajęcia treningu funkcjonalnego są przeznaczone dla młodzieży od 15 lat i dorosłych.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Ile kosztują zajęcia treningu funkcjonalnego w VOLAT?</h3>
                  <p className="text-gray-300">
                    Szczegóły dotyczące cen zajęć treningu funkcjonalnego prosimy uzgodnić telefonicznie lub mailowo.
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

