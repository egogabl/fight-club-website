import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Muay Thai Warszawa | Tajski Boks i Kickboxing dla Dzieci i Dorosłych | VOLAT",
  description: "Muay Thai i Kickboxing w Warszawie - profesjonalne zajęcia tajskiego boksu dla dzieci od 7 lat, młodzieży i dorosłych. Trener: Mikoła Taczylin. Formuła K1. Ponad 15 lat doświadczenia. Zapisz się już dziś!",
  keywords: [
    "muay thai warszawa",
    "tajski boks warszawa",
    "kickboxing warszawa",
    "muay thai mokotów",
    "muay thai praga",
    "zajęcia muay thai warszawa",
    "treningi muay thai warszawa",
    "sekcja muay thai warszawa",
    "klub muay thai warszawa",
    "muay thai dla początkujących warszawa",
    "muay thai dla dzieci warszawa",
    "muay thai dla dorosłych warszawa",
    "formuła k1 warszawa",
    "tajski boks mokotów",
    "kickboxing mokotów",
    "sztuki walki warszawa",
    "VOLAT muay thai",
    "ul. artura malawskiego 6",
    "ul. kowieńska 12/20"
  ],
  authors: [{ name: "VOLAT" }],
  creator: "VOLAT",
  publisher: "VOLAT",
  openGraph: {
    title: "Muay Thai Warszawa | Tajski Boks i Kickboxing | VOLAT",
    description: "Profesjonalne zajęcia muay thai i kickboxingu w Warszawie dla dzieci od 7 lat, młodzieży i dorosłych",
    url: "https://volat.pl/seo/muay-thai-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/muaythai-trening-dzieci-volat.jpg",
        width: 1200,
        height: 630,
        alt: "Muay Thai / Kickboxing trening dzieci w klubie VOLAT - techniki kopnięć i uderzeń w tajskim boksie i kickboxingu z trenerem Mikoła Taczylin",
      },
      {
        url: "https://volat.pl/muaythai-trening-uderzenia-volat.jpg",
        width: 1200,
        height: 630,
        alt: "Muay Thai trening uderzeń w klubie VOLAT - techniki boksu tajskiego dla dzieci i młodzieży",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muay Thai Warszawa | Tajski Boks i Kickboxing | VOLAT",
    description: "Profesjonalne zajęcia muay thai i kickboxingu w Warszawie",
    images: ["https://volat.pl/muaythai-trening-dzieci-volat.jpg"],
  },
  alternates: {
    canonical: 'https://volat.pl/seo/muay-thai-warszawa',
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
  name: "Muay Thai Warszawa",
  description: "Profesjonalne zajęcia muay thai i kickboxingu dla dzieci od 7 lat, młodzieży i dorosłych w Warszawie. Trener: Mikoła Taczylin. Formuła K1. Ponad 15 lat doświadczenia.",
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
  image: "https://volat.pl/muaythai-trening-dzieci-volat.jpg",
  courseCode: "MUAY-THAI",
  educationalLevel: "Beginner to Advanced",
  teaches: "Muay Thai, kickboxing, tajski boks, formuła K1, sztuki walki, techniki uderzeń, kopnięć, łokci i kolan",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "98",
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
      name: "Czym jest Muay Thai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muay Thai to tajski boks, jedna z najskuteczniejszych sztuk walki na świecie. Charakteryzuje się użyciem uderzeń pięściami, łokciami, kolanami i kopnięciami. W VOLAT prowadzimy również zajęcia kickboxingu w formule K1."
      }
    },
    {
      "@type": "Question",
      name: "Od jakiego wieku można trenować Muay Thai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia muay thai w VOLAT są dostępne dla dzieci od 7 lat, młodzieży i dorosłych. Program jest dostosowany do poziomu zaawansowania uczestników."
      }
    },
    {
      "@type": "Question",
      name: "Ile kosztują zajęcia Muay Thai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceny zajęć muay thai i kickboxingu: dla dzieci 220 zł/miesiąc, dla dorosłych 280 zł/miesiąc. Oferujemy możliwość treningów próbnych."
      }
    },
    {
      "@type": "Question",
      name: "Kto prowadzi zajęcia Muay Thai w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia prowadzi Mikoła Taczylin - doświadczony trener z ponad 15-letnim doświadczeniem, który wychował wielu mistrzów w formule K1."
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
      name: "Muay Thai Warszawa",
      item: "https://volat.pl/seo/muay-thai-warszawa"
    }
  ]
}

export default function MuayThaiWarszawaPage() {
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
                <li className="text-gray-300">Muay Thai Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Muay Thai Warszawa - Tajski Boks i Kickboxing dla Dzieci i Dorosłych
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Muay Thai, znany również jako tajski boks, to jedna z najskuteczniejszych sztuk walki na świecie. W VOLAT oferujemy profesjonalne zajęcia muay thai i kickboxingu w formule K1 dla dzieci od 7 lat, młodzieży i dorosłych w Warszawie.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Czym jest Muay Thai?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Muay Thai to tradycyjna sztuka walki z Tajlandii, która charakteryzuje się użyciem uderzeń pięściami, łokciami, kolanami i kopnięciami. To kompleksowy system walki, który rozwija wytrzymałość, siłę, szybkość i refleks. W VOLAT prowadzimy również zajęcia kickboxingu w formule K1, która łączy techniki muay thai z elementami innych sztuk walki.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Treningi muay thai są bardzo intensywne i wymagające, ale jednocześnie niezwykle efektywne. Regularne treningi poprawiają kondycję fizyczną, koordynację, refleks i siłę. To doskonała forma aktywności dla osób, które chcą poprawić swoją formę, nauczyć się technik samoobrony lub przygotować się do zawodów.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zajęcia Muay Thai w VOLAT
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia muay thai w Warszawie prowadzi doświadczony trener <strong>Mikoła Taczylin</strong> - specjalista z ponad 15-letnim doświadczeniem, który wychował wielu mistrzów w formule K1. Program treningów jest dostosowany do poziomu zaawansowania uczestników - od początkujących po zaawansowanych zawodników.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci od 7 lat</li>
                <li>Zajęcia dla młodzieży i dorosłych</li>
                <li>Formuła K1 - kickboxing</li>
                <li>Treningi dla początkujących i zaawansowanych</li>
                <li>Nauka technik uderzeń, kopnięć, łokci i kolan</li>
                <li>Przygotowanie do zawodów</li>
                <li>Grafik: Wtorek, Czwartek 19:00-20:30</li>
                <li>Cena: 220 zł/miesiąc (dzieci), 280 zł/miesiąc (dorośli)</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Treningów Muay Thai
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Kondycja Fizyczna</h3>
                <p className="text-gray-300">
                  Intensywne treningi poprawiają wytrzymałość, siłę, szybkość i refleks. Muay Thai to jeden z najlepszych treningów cardio.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Samoobrona</h3>
                <p className="text-gray-300">
                  Praktyczne umiejętności samoobrony, które mogą przydać się w codziennym życiu. Muay Thai to bardzo skuteczna sztuka walki.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Redukcja Stresu</h3>
                <p className="text-gray-300">
                  Intensywne treningi pomagają w redukcji stresu i poprawie samopoczucia. To doskonały sposób na odreagowanie po pracy.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Pewność Siebie</h3>
                <p className="text-gray-300">
                  Regularne treningi budują pewność siebie i poprawiają samoocenę. To ważne zarówno w sporcie, jak i w życiu codziennym.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz się na Zajęcia Muay Thai w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do treningów muay thai i kickboxingu w VOLAT!
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
          </div>
        </section>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

