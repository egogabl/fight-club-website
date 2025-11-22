import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import Image from 'next/image'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Karate WKF Warszawa Mokotów i Praga | Profesjonalne Zajęcia Karate dla Dzieci i Dorosłych | VOLAT",
  description: "Karate WKF w Warszawie - profesjonalne zajęcia karate dla dzieci od 7 lat, młodzieży i dorosłych. Mokotów ul. Artura Malawskiego 6 i Praga Północ ul. Kowieńska 12/20. Trenerzy: Vital Rak i Volha Yefimenka. Członek Polskiej Unii Karate. Zapisz się już dziś!",
  keywords: [
    "karate warszawa",
    "karate mokotów",
    "karate praga północ",
    "karate dla dzieci warszawa",
    "karate dla dorosłych warszawa",
    "karate wkf warszawa",
    "zajęcia karate mokotów",
    "treningi karate warszawa",
    "sekcja karate warszawa",
    "klub karate warszawa",
    "karate dla początkujących warszawa",
    "karate zawodnicze warszawa",
    "karate w warszawie",
    "karate mokotów warszawa",
    "karate praga warszawa",
    "szkoła karate warszawa",
    "akademia karate warszawa",
    "trening karate warszawa",
    "karate dla młodzieży warszawa",
    "karate olimpijskie warszawa",
    "karate shotokan warszawa",
    "VOLAT karate",
    "ul. artura malawskiego 6",
    "ul. kowieńska 12/20",
    "sztuki walki warszawa",
    "sztuki walki mokotów",
    "sztuki walki praga"
  ],
  authors: [{ name: "VOLAT" }],
  creator: "VOLAT",
  publisher: "VOLAT",
  openGraph: {
    title: "Karate WKF Warszawa | Profesjonalne Zajęcia Karate dla Dzieci i Dorosłych | VOLAT",
    description: "Karate WKF w Warszawie - profesjonalne zajęcia karate dla dzieci od 7 lat, młodzieży i dorosłych. Mokotów i Praga Północ. Trenerzy: Vital Rak i Volha Yefimenka. Członek Polskiej Unii Karate.",
    url: "https://volat.pl/seo/karate-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/karate-trening-dzieci-volat.jpg",
        width: 1200,
        height: 630,
        alt: "Karate WKF trening dla dzieci w klubie VOLAT Warszawa - zajęcia karate dla dzieci z trenerami Vital Rak i Volha Yefimenka",
      },
      {
        url: "https://volat.pl/karate-trening-aktywny-volat.jpg",
        width: 1200,
        height: 630,
        alt: "Karate WKF aktywny trening dzieci w klubie VOLAT - dynamiczne ćwiczenia i techniki karate",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Karate WKF Warszawa | Profesjonalne Zajęcia Karate | VOLAT",
    description: "Karate WKF w Warszawie - zajęcia dla dzieci, młodzieży i dorosłych. Mokotów i Praga Północ.",
    images: ["https://volat.pl/karate-trening-dzieci-volat.jpg"],
  },
  alternates: {
    canonical: 'https://volat.pl/seo/karate-warszawa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Karate WKF Warszawa",
  description: "Profesjonalne zajęcia karate WKF dla dzieci od 7 lat, młodzieży i dorosłych w Warszawie. Lokalizacje: Mokotów ul. Artura Malawskiego 6 i Praga Północ ul. Kowieńska 12/20. Trenerzy: Vital Rak i Volha Yefimenka. Członek Polskiej Unii Karate i Mazowieckiego Związku Karate.",
  provider: {
    "@type": "Organization",
    name: "VOLAT - Centrum Sportu i Edukacji",
    url: "https://volat.pl",
    logo: "https://volat.pl/volat-logo-simple.png",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "ul. Artura Malawskiego 6",
        addressLocality: "Warszawa",
        addressRegion: "Mazowieckie",
        postalCode: "02-341",
        addressCountry: "PL",
        areaServed: "Mokotów"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "ul. Kowieńska 12/20",
        addressLocality: "Warszawa",
        addressRegion: "Mazowieckie",
        postalCode: "03-470",
        addressCountry: "PL",
        areaServed: "Praga Północ"
      }
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-733-451-982",
      contactType: "customer service",
      email: "vasilvolkau@gmail.com",
      areaServed: "PL",
      availableLanguage: ["Polish", "Russian", "English", "Belarusian"]
    }
  },
  courseCode: "KARATE-WKF",
  educationalLevel: "Beginner to Advanced",
  teaches: "Karate WKF, sztuki walki, samoobrona, kondycja fizyczna, techniki uderzeń, kopnięć i bloków",
  image: "https://volat.pl/karate-trening-dzieci-volat.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1"
  },
  offers: {
    "@type": "Offer",
    price: "220",
    priceCurrency: "PLN",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "220",
      priceCurrency: "PLN",
      unitText: "Miesiąc"
    }
  },
  audience: {
    "@type": "Audience",
    audienceType: "Dzieci od 7 lat, Młodzież, Dorośli"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie odbywają się zajęcia karate w Warszawie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia karate odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie."
      }
    },
    {
      "@type": "Question",
      name: "Od jakiego wieku można rozpocząć treningi karate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia karate dla dzieci prowadzimy od 7 roku życia. Mamy również grupy dla młodzieży i dorosłych na różnych poziomach zaawansowania."
      }
    },
    {
      "@type": "Question",
      name: "Ile kosztują zajęcia karate w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceny zajęć karate: dla dzieci 220 zł/miesiąc, dla dorosłych 280 zł/miesiąc. Oferujemy również możliwość treningów próbnych."
      }
    },
    {
      "@type": "Question",
      name: "Kto prowadzi zajęcia karate w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia karate prowadzą doświadczeni trenerzy: Vital Rak (główny trener, mistrz Republiki Białorusi, 30 lat doświadczenia) oraz Volha Yefimenka (mistrz sportu, trenerka od 2007 roku)."
      }
    },
    {
      "@type": "Question",
      name: "Jakie są godziny zajęć karate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia karate odbywają się w poniedziałki, środy, piątki oraz wtorki i czwartki w godzinach popołudniowych i wieczornych. Szczegółowy grafik dostępny jest na stronie /schedule."
      }
    }
  ]
}

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
      name: "Karate Warszawa",
      item: "https://volat.pl/seo/karate-warszawa"
    }
  ]
}

export default function KarateWarszawaPage() {
  return (
    <>
      <StructuredData type="Course" data={structuredData} />
      <StructuredData type="FAQPage" data={faqStructuredData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbStructuredData} />
      
      <div className="min-h-screen bg-black">
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-gray-400">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-red-400">Strona główna</Link></li>
                <li>/</li>
                <li className="text-gray-300">Karate Warszawa</li>
              </ol>
            </nav>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Karate WKF Warszawa - Profesjonalne Zajęcia Karate dla Dzieci i Dorosłych
            </h1>

            {/* Intro */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz profesjonalnych zajęć karate w Warszawie? VOLAT oferuje kompleksowe szkolenia karate WKF dla dzieci od 7 lat, młodzieży i dorosłych w dwóch lokalizacjach: <strong>Mokotów</strong> przy ul. Artura Malawskiego 6 oraz <strong>Praga Północ</strong> przy ul. Kowieńskiej 12/20.
            </p>

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Karate WKF w VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Karate WKF to tradycyjna sztuka walki pochodząca z Japonii, która łączy techniki uderzeń, kopnięć i bloków. W VOLAT prowadzimy zajęcia na najwyższym poziomie, dostosowane do wieku i umiejętności uczestników. Nasz klub jest członkiem <strong>Polskiej Unii Karate</strong> oraz <strong>Mazowieckiego Związku Karate</strong>, co gwarantuje profesjonalny poziom nauczania i możliwość udziału w turniejach.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Treningi karate w Warszawie rozwijają nie tylko siłę fizyczną, ale także szybkość, koordynację, dyscyplinę i koncentrację. To idealna forma aktywności dla dzieci, które uczą się szacunku, samodyscypliny i pewności siebie, oraz dla dorosłych, którzy chcą poprawić kondycję i opanować techniki samoobrony.
              </p>
            </div>

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zajęcia Karate dla Dzieci w Warszawie
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia karate dla dzieci od 7 lat prowadzi doświadczona trenerka <strong>Volha Yefimenka</strong> - mistrz sportu z wieloletnim doświadczeniem w pracy z najmłodszymi. Treningi są dostosowane do możliwości dzieci i odbywają się w przyjaznej, bezpiecznej atmosferze.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Karate dla dzieci w Warszawie to nie tylko sport, ale także szkoła charakteru. Dzieci uczą się dyscypliny, szacunku do trenera i kolegów, a także rozwijają koordynację ruchową i kondycję fizyczną. Regularne treningi pomagają w budowaniu pewności siebie i radzeniu sobie ze stresem.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci od 7 lat</li>
                <li>Grupy dostosowane do wieku i umiejętności</li>
                <li>Bezpieczne treningi pod okiem doświadczonych trenerów</li>
                <li>Możliwość udziału w turniejach i zawodach</li>
                <li>Cena: 220 zł/miesiąc</li>
              </ul>
            </div>

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Karate dla Dorosłych w Warszawie
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia karate dla dorosłych prowadzi <strong>Vital Rak</strong> - główny trener klubu, mistrz Republiki Białorusi z 30-letnim doświadczeniem. Treningi są dostępne zarówno dla początkujących, jak i zaawansowanych zawodników.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Karate dla dorosłych w Warszawie to doskonały sposób na poprawę kondycji fizycznej, naukę technik samoobrony i redukcję stresu. Treningi odbywają się w grupach amatorskich oraz zawodniczych, w zależności od poziomu zaawansowania.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Grupy amatorskie i zawodnicze</li>
                <li>Treningi dla początkujących i zaawansowanych</li>
                <li>Nauka technik samoobrony</li>
                <li>Poprawa kondycji i koordynacji</li>
                <li>Cena: 280 zł/miesiąc</li>
              </ul>
            </div>

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Lokalizacje Zajęć Karate w Warszawie
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

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Treningów Karate
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Fizyczny</h3>
                <p className="text-gray-300">
                  Poprawa kondycji, siły, szybkości i koordynacji ruchowej. Karate to kompleksowy trening całego ciała.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Mentalny</h3>
                <p className="text-gray-300">
                  Wzrost pewności siebie, dyscypliny i koncentracji. Nauka radzenia sobie ze stresem i kontroli emocji.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Samoobrona</h3>
                <p className="text-gray-300">
                  Praktyczne umiejętności samoobrony, które mogą przydać się w codziennym życiu.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Społeczność</h3>
                <p className="text-gray-300">
                  Budowanie relacji z rówieśnikami, nauka szacunku i współpracy w grupie.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz się na Zajęcia Karate w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do setek zadowolonych uczestników treningów karate w VOLAT!
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
                  href="/schedule"
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl border border-white/20"
                >
                  Zobacz grafik
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Najczęściej Zadawane Pytania
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Gdzie odbywają się zajęcia karate w Warszawie?</h3>
                  <p className="text-gray-300">
                    Zajęcia karate odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Od jakiego wieku można rozpocząć treningi karate?</h3>
                  <p className="text-gray-300">
                    Zajęcia karate dla dzieci prowadzimy od 7 roku życia. Mamy również grupy dla młodzieży i dorosłych na różnych poziomach zaawansowania.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Ile kosztują zajęcia karate w VOLAT?</h3>
                  <p className="text-gray-300">
                    Ceny zajęć karate: dla dzieci 220 zł/miesiąc, dla dorosłych 280 zł/miesiąc. Oferujemy również możliwość treningów próbnych.
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

