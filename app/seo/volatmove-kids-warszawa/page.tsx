import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "VolatMove! KIDS Warszawa | Trening Motoryczny dla Dzieci 5-7 lat | VOLAT",
  description: "VolatMove! KIDS w Warszawie - trening motoryczny dla dzieci 5-7 lat. Ogólne przygotowanie motoryczne dla przedszkolaków. Trenerki: Volha Yefimenka i Daria Koba. Lokalizacje: Mokotów i Praga Północ. Zapisz dziecko już dziś!",
  keywords: [
    "volatmove kids warszawa",
    "trening motoryczny dla dzieci warszawa",
    "przygotowanie motoryczne dzieci warszawa",
    "zajęcia dla przedszkolaków warszawa",
    "trening dla dzieci 5-7 lat",
    "motoryka duża dzieci",
    "koordynacja dzieci warszawa",
    "VOLAT volatmove",
    "ul. artura malawskiego 6",
    "ul. kowieńska 12/20"
  ],
  openGraph: {
    title: "VolatMove! KIDS Warszawa | Trening Motoryczny dla Dzieci | VOLAT",
    description: "VolatMove! KIDS w Warszawie - trening motoryczny dla dzieci 5-7 lat. Mokotów i Praga Północ.",
    url: "https://volat.pl/seo/volatmove-kids-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VolatMove! KIDS Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VolatMove! KIDS Warszawa | Trening Motoryczny dla Dzieci | VOLAT",
    description: "VolatMove! KIDS w Warszawie - trening motoryczny dla dzieci 5-7 lat",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/volatmove-kids-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "VolatMove! KIDS Warszawa",
  description: "Trening motoryczny dla dzieci 5-7 lat w Warszawie. Ogólne przygotowanie motoryczne dla przedszkolaków. Lokalizacje: Mokotów i Praga Północ.",
  provider: {
    "@type": "Organization",
    name: "VOLAT",
    url: "https://volat.pl"
  },
  courseCode: "VMKIDS-001",
  educationalLevel: "Beginner",
  teaches: "Trening motoryczny dla dzieci",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "78"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie odbywają się zajęcia VolatMove! KIDS w Warszawie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia VolatMove! KIDS odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie."
      }
    },
    {
      "@type": "Question",
      name: "Dla jakiego wieku są przeznaczone zajęcia VolatMove! KIDS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia VolatMove! KIDS są przeznaczone dla dzieci w wieku 5-7 lat."
      }
    },
    {
      "@type": "Question",
      name: "Ile kosztują zajęcia VolatMove! KIDS w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Szczegóły dotyczące cen zajęć VolatMove! KIDS prosimy uzgodnić telefonicznie lub mailowo."
      }
    }
  ]
}

export default function VolatMoveKidsWarszawaPage() {
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
                <li className="text-gray-300">VolatMove! KIDS Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              VolatMove! KIDS Warszawa - Trening Motoryczny dla Dzieci 5-7 lat
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz profesjonalnych zajęć treningu motorycznego dla najmłodszych w Warszawie? VOLAT oferuje program VolatMove! KIDS - ogólne przygotowanie motoryczne dla przedszkolaków w wieku 5-7 lat w dwóch lokalizacjach: <strong>Mokotów</strong> przy ul. Artura Malawskiego 6 oraz <strong>Praga Północ</strong> przy ul. Kowieńskiej 12/20. Prowadzą Volha Yefimenka i Daria Koba.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego VolatMove! KIDS w VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                VolatMove! KIDS to ogólne przygotowanie motoryczne dla przedszkolaków, rozwój koordynacji i motoryki dużej. Program specjalnie zaprojektowany dla najmłodszych dzieci w wieku 5-7 lat, skupiający się na podstawowych umiejętnościach ruchowych i równowadze.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia prowadzą doświadczone trenerki Volha Yefimenka i Daria Koba, które dostosowują program do możliwości każdego dziecka. Treningi odbywają się w przyjaznej atmosferze, zachęcając do aktywności fizycznej i przygotowując dzieci do dalszego rozwoju sportowego.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zajęcia VolatMove! KIDS dla Dzieci 5-7 lat
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia VolatMove! KIDS prowadzą doświadczone trenerki <strong>Volha Yefimenka</strong> i <strong>Daria Koba</strong>. Program jest specjalnie zaprojektowany dla najmłodszych dzieci, skupiając się na podstawowych umiejętnościach ruchowych i równowadze.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci w wieku 5-7 lat</li>
                <li>Ogólne przygotowanie motoryczne</li>
                <li>Rozwój koordynacji ruchowej</li>
                <li>Rozwój motoryki dużej</li>
                <li>Kształtowanie podstawowych umiejętności ruchowych</li>
                <li>Poprawa równowagi i elastyczności</li>
                <li>Przygotowanie do aktywności sportowych</li>
                <li>Grafik: Poniedziałek, Środa 17:00-17:55 (Praga)</li>
                <li>Szczegóły dotyczące cen prosimy uzgodnić telefonicznie</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Treningu VolatMove! KIDS
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Motoryki</h3>
                <p className="text-gray-300">
                  Rozwój koordynacji ruchowej i motoryki dużej. Kształtowanie podstawowych umiejętności ruchowych.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Poprawa Równowagi</h3>
                <p className="text-gray-300">
                  Poprawa równowagi i elastyczności. Lepsze funkcjonowanie w codziennym życiu.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Przygotowanie Sportowe</h3>
                <p className="text-gray-300">
                  Przygotowanie do aktywności sportowych. Rozwój podstawowych umiejętności potrzebnych w sporcie.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Przyjazna Atmosfera</h3>
                <p className="text-gray-300">
                  Treningi odbywają się w przyjaznej atmosferze, zachęcając do aktywności fizycznej.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Lokalizacje Zajęć VolatMove! KIDS
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
                Zapisz Dziecko na VolatMove! KIDS w Warszawie
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
                  href="/disciplines/volatmove-kids"
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
                  <h3 className="text-xl font-bold text-white mb-2">Gdzie odbywają się zajęcia VolatMove! KIDS w Warszawie?</h3>
                  <p className="text-gray-300">
                    Zajęcia VolatMove! KIDS odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Dla jakiego wieku są przeznaczone zajęcia VolatMove! KIDS?</h3>
                  <p className="text-gray-300">
                    Zajęcia VolatMove! KIDS są przeznaczone dla dzieci w wieku 5-7 lat.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Ile kosztują zajęcia VolatMove! KIDS w VOLAT?</h3>
                  <p className="text-gray-300">
                    Szczegóły dotyczące cen zajęć VolatMove! KIDS prosimy uzgodnić telefonicznie lub mailowo.
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

