import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "MMA Warszawa Mokotów | Mieszane Sztuki Walki dla Dzieci i Dorosłych | VOLAT",
  description: "MMA w Warszawie - profesjonalne zajęcia mieszanych sztuk walki dla dzieci od 6 lat, młodzieży od 14 lat i dorosłych. Trener: Paweł Szymkowicz. Lokalizacja: Mokotów ul. Artura Malawskiego 6. Zapisz się już dziś!",
  keywords: [
    "mma warszawa",
    "mma mokotów",
    "mma dla dzieci warszawa",
    "zajęcia mma warszawa",
    "treningi mma warszawa",
    "sekcja mma warszawa",
    "klub mma warszawa",
    "mieszane sztuki walki warszawa",
    "mma dla początkujących warszawa",
    "grappling warszawa",
    "mma w warszawie",
    "mma mokotów warszawa",
    "szkoła mma warszawa",
    "akademia mma warszawa",
    "trening mma warszawa",
    "sztuki walki warszawa",
    "sztuki walki mokotów",
    "VOLAT mma",
    "ul. artura malawskiego 6"
  ],
  authors: [{ name: "VOLAT" }],
  creator: "VOLAT",
  publisher: "VOLAT",
  openGraph: {
    title: "MMA Warszawa | Mieszane Sztuki Walki | VOLAT",
    description: "MMA w Warszawie - zajęcia dla dzieci, młodzieży i dorosłych. Mokotów.",
    url: "https://volat.pl/seo/mma-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/mma-trening-volat.jpg",
        width: 1200,
        height: 630,
        alt: "MMA Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MMA Warszawa | Mieszane Sztuki Walki | VOLAT",
    description: "MMA w Warszawie - zajęcia dla dzieci, młodzieży i dorosłych",
    images: ["https://volat.pl/mma-trening-volat.jpg"],
  },
  alternates: {
    canonical: 'https://volat.pl/seo/mma-warszawa',
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
  name: "MMA Warszawa",
  description: "Profesjonalne zajęcia mieszanych sztuk walki dla dzieci od 6 lat, młodzieży od 14 lat i dorosłych w Warszawie. Lokalizacja: Mokotów.",
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
  image: "https://volat.pl/mma-trening-volat.jpg",
  courseCode: "MMA-001",
  educationalLevel: "Beginner to Advanced",
  teaches: "MMA - mieszane sztuki walki, walka w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "112",
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
    audienceType: "Dzieci od 6 lat, Młodzież od 14 lat, Dorośli"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie odbywają się zajęcia MMA w Warszawie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia MMA odbywają się w VOLAT Mokotów przy ul. Artura Malawskiego 6 w Warszawie."
      }
    },
    {
      "@type": "Question",
      name: "Od jakiego wieku można rozpocząć treningi MMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia MMA prowadzimy dla dzieci od 6 lat, młodzieży od 14 lat i dorosłych z różnym poziomem zaawansowania."
      }
    },
    {
      "@type": "Question",
      name: "Ile kosztują zajęcia MMA w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceny zajęć MMA: dla dzieci 220 zł/miesiąc, dla dorosłych 280 zł/miesiąc."
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
      name: "MMA Warszawa",
      item: "https://volat.pl/seo/mma-warszawa"
    }
  ]
}

export default function MmaWarszawaPage() {
  return (
    <>
      <StructuredData type="Course" data={structuredData} />
      <StructuredData type="FAQPage" data={faqStructuredData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbStructuredData} />
      
      <div className="min-h-screen bg-black">
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <nav className="mb-8 text-sm text-gray-400">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-red-400">Strona główna</Link></li>
                <li>/</li>
                <li className="text-gray-300">MMA Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              MMA Warszawa - Mieszane Sztuki Walki dla Dzieci i Dorosłych
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz profesjonalnych zajęć MMA w Warszawie? VOLAT oferuje kompleksowe szkolenia mieszanych sztuk walki dla dzieci od 6 lat, młodzieży od 14 lat i dorosłych w lokalizacji <strong>Mokotów</strong> przy ul. Artura Malawskiego 6. Prowadzi Paweł Szymkowicz - doświadczony trener MMA.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego MMA w VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                MMA (Mixed Martial Arts) to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. Trening obejmuje walkę w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie. MMA łączy techniki boksu, zapasów, judo, brazylijskiego jiu-jitsu, kickboxingu i innych sztuk walki.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Treningi MMA w Warszawie rozwijają wszechstronne umiejętności, poprawiają kondycję fizyczną i uczą strategii walki. To idealna forma aktywności dla osób, które chcą nauczyć się różnych technik walki i poprawić swoją sprawność fizyczną.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zajęcia MMA dla Dzieci, Młodzieży i Dorosłych
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia MMA prowadzi doświadczony trener <strong>Paweł Szymkowicz</strong>. Treningi są dostępne dla dzieci od 6 lat, młodzieży od 14 lat i dorosłych z różnym poziomem zaawansowania. Program jest dostosowany do wieku i umiejętności uczestników.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci od 6 lat</li>
                <li>Zajęcia dla młodzieży od 14 lat</li>
                <li>Zajęcia dla dorosłych</li>
                <li>Grupy dla początkujących i zaawansowanych</li>
                <li>Nauka technik walki w stójce i parterze</li>
                <li>Grappling i techniki submisji</li>
                <li>Cena: 220 zł/miesiąc (dzieci), 280 zł/miesiąc (dorośli)</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Treningów MMA
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Wszechstronny Rozwój</h3>
                <p className="text-gray-300">
                  Nauka różnych technik z boksu, zapasów, judo, BJJ i kickboxingu. Kompleksowy rozwój umiejętności.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Poprawa Kondycji</h3>
                <p className="text-gray-300">
                  Maksymalne spalanie kalorii, poprawa wytrzymałości, siły i szybkości. Intensywny trening całego ciała.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Nauka Strategii</h3>
                <p className="text-gray-300">
                  Rozwój umiejętności taktycznych, planowania i podejmowania decyzji w walce.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Samoobrona</h3>
                <p className="text-gray-300">
                  Praktyczne umiejętności samoobrony, które mogą przydać się w codziennym życiu.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Lokalizacja Zajęć MMA w Warszawie
            </h2>

            <div className="grid md:grid-cols-1 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">VOLAT Mokotów</h3>
                <p className="text-gray-300 mb-4">ul. Artura Malawskiego 6, Warszawa</p>
                <p className="text-gray-400 text-sm">
                  Nowoczesna sala treningowa z pełnym wyposażeniem. Dostępne szatnie z prysznicami, parking i klimatyzacja.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz się na Zajęcia MMA w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do zadowolonych uczestników treningów MMA w VOLAT!
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
                  href="/disciplines/mma"
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
                  <h3 className="text-xl font-bold text-white mb-2">Gdzie odbywają się zajęcia MMA w Warszawie?</h3>
                  <p className="text-gray-300">
                    Zajęcia MMA odbywają się w VOLAT Mokotów przy ul. Artura Malawskiego 6 w Warszawie.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Od jakiego wieku można rozpocząć treningi MMA?</h3>
                  <p className="text-gray-300">
                    Zajęcia MMA prowadzimy dla dzieci od 6 lat, młodzieży od 14 lat i dorosłych z różnym poziomem zaawansowania.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Ile kosztują zajęcia MMA w VOLAT?</h3>
                  <p className="text-gray-300">
                    Ceny zajęć MMA: dla dzieci 220 zł/miesiąc, dla dorosłych 280 zł/miesiąc.
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

