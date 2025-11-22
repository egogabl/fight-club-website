import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Judo Warszawa Mokotów | Zajęcia Judo dla Dzieci 7-12 lat | VOLAT",
  description: "Judo w Warszawie - profesjonalne zajęcia judo dla dzieci w wieku 7-12 lat. Trenerka: Daria Koba. Lokalizacja: Mokotów ul. Artura Malawskiego 6. Japońska sztuka walki olimpijska. Zapisz dziecko już dziś!",
  keywords: [
    "judo warszawa",
    "judo mokotów",
    "judo dla dzieci warszawa",
    "zajęcia judo warszawa",
    "treningi judo warszawa",
    "sekcja judo warszawa",
    "klub judo warszawa",
    "judo dla początkujących warszawa",
    "judo olimpijskie warszawa",
    "judo dla dzieci 7-12 lat",
    "judo w warszawie",
    "judo mokotów warszawa",
    "szkoła judo warszawa",
    "akademia judo warszawa",
    "trening judo warszawa",
    "sztuki walki warszawa",
    "sztuki walki mokotów",
    "VOLAT judo",
    "ul. artura malawskiego 6"
  ],
  authors: [{ name: "VOLAT" }],
  creator: "VOLAT",
  publisher: "VOLAT",
  openGraph: {
    title: "Judo Warszawa | Zajęcia Judo dla Dzieci | VOLAT",
    description: "Judo w Warszawie - zajęcia dla dzieci 7-12 lat. Mokotów.",
    url: "https://volat.pl/seo/judo-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/judo-martial-arts-icon.jpg",
        width: 1200,
        height: 630,
        alt: "Judo trening dla dzieci w klubie VOLAT Warszawa - japońska sztuka walki olimpijska z trenerką Daria Koba",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Judo Warszawa | Zajęcia Judo dla Dzieci | VOLAT",
    description: "Judo w Warszawie - zajęcia dla dzieci 7-12 lat",
    images: ["https://volat.pl/judo-martial-arts-icon.jpg"],
  },
  alternates: {
    canonical: 'https://volat.pl/seo/judo-warszawa',
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
  name: "Judo Warszawa",
  description: "Profesjonalne zajęcia judo dla dzieci w wieku 7-12 lat w Warszawie. Trenerka: Daria Koba. Lokalizacja: Mokotów ul. Artura Malawskiego 6. Japońska sztuka walki olimpijska.",
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
  image: "https://volat.pl/judo-martial-arts-icon.jpg",
  courseCode: "JUDO-001",
  educationalLevel: "Beginner to Intermediate",
  teaches: "Judo - japońska sztuka walki olimpijska, techniki rzutów, trzymań i dźwigni",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "95",
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
    audienceType: "Dzieci 7-12 lat"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie odbywają się zajęcia judo w Warszawie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia judo odbywają się w VOLAT Mokotów przy ul. Artura Malawskiego 6 w Warszawie."
      }
    },
    {
      "@type": "Question",
      name: "Od jakiego wieku można rozpocząć treningi judo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia judo prowadzimy dla dzieci w wieku 7-12 lat. Program jest dostosowany do możliwości młodych uczestników."
      }
    },
    {
      "@type": "Question",
      name: "Ile kosztują zajęcia judo w VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceny zajęć judo: dla dzieci 220 zł/miesiąc, dla dorosłych 280 zł/miesiąc."
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
      name: "Judo Warszawa",
      item: "https://volat.pl/seo/judo-warszawa"
    }
  ]
}

export default function JudoWarszawaPage() {
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
                <li className="text-gray-300">Judo Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Judo Warszawa - Profesjonalne Zajęcia Judo dla Dzieci
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz profesjonalnych zajęć judo dla dziecka w Warszawie? VOLAT oferuje zajęcia judo dla dzieci w wieku 7-12 lat w lokalizacji <strong>Mokotów</strong> przy ul. Artura Malawskiego 6. Prowadzi Daria Koba - certyfikowana instruktorka judo z wieloletnim doświadczeniem.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Judo w VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Judo to japońska sztuka walki olimpijska, która uczy rzutów, trzymań i dźwigni. Trening rozwija siłę, elastyczność, koordynację i równowagę. W VOLAT prowadzimy zajęcia specjalnie dostosowane do możliwości dzieci w wieku 7-12 lat, zapewniając bezpieczne i efektywne nauczanie.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Treningi judo w Warszawie rozwijają nie tylko fizyczne umiejętności, ale także charakter. Dzieci uczą się szacunku, dyscypliny, cierpliwości i współpracy. Judo to doskonała forma aktywności fizycznej, która przygotowuje dzieci do dalszego rozwoju sportowego.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zajęcia Judo dla Dzieci w Warszawie
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia judo dla dzieci prowadzi doświadczona trenerka <strong>Daria Koba</strong> - certyfikowana instruktorka judo z wieloletnim doświadczeniem w pracy z najmłodszymi. Treningi są dostosowane do możliwości dzieci i odbywają się w przyjaznej, bezpiecznej atmosferze.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci w wieku 7-12 lat</li>
                <li>Program dostosowany do możliwości młodych uczestników</li>
                <li>Bezpieczne treningi pod okiem doświadczonej trenerki</li>
                <li>Nauka technik rzutów, trzymań i dźwigni</li>
                <li>Rozwój siły, elastyczności i koordynacji</li>
                <li>Grafik: Wtorek, Czwartek 18:00-19:30</li>
                <li>Cena: 220 zł/miesiąc (dzieci), 280 zł/miesiąc (dorośli)</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Treningów Judo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Fizyczny</h3>
                <p className="text-gray-300">
                  Poprawa siły, elastyczności, koordynacji i równowagi. Judo to kompleksowy trening całego ciała.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Charakteru</h3>
                <p className="text-gray-300">
                  Nauka szacunku, dyscypliny, cierpliwości i współpracy. Judo kształtuje wartości moralne.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Nauka Technik</h3>
                <p className="text-gray-300">
                  Praktyczne umiejętności rzutów, trzymań i dźwigni, które rozwijają koordynację i refleks.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Bezpieczeństwo</h3>
                <p className="text-gray-300">
                  Treningi prowadzone przez certyfikowaną instruktorkę w bezpiecznej, kontrolowanej atmosferze.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Lokalizacja Zajęć Judo w Warszawie
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
                Zapisz Dziecko na Zajęcia Judo w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do zadowolonych uczestników treningów judo w VOLAT!
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
                  href="/disciplines/judo"
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
                  <h3 className="text-xl font-bold text-white mb-2">Gdzie odbywają się zajęcia judo w Warszawie?</h3>
                  <p className="text-gray-300">
                    Zajęcia judo odbywają się w VOLAT Mokotów przy ul. Artura Malawskiego 6 w Warszawie.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Od jakiego wieku można rozpocząć treningi judo?</h3>
                  <p className="text-gray-300">
                    Zajęcia judo prowadzimy dla dzieci w wieku 7-12 lat. Program jest dostosowany do możliwości młodych uczestników.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Ile kosztują zajęcia judo w VOLAT?</h3>
                  <p className="text-gray-300">
                    Ceny zajęć judo: dla dzieci 220 zł/miesiąc, dla dorosłych 280 zł/miesiąc.
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

