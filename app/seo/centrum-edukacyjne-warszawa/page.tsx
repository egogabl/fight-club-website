import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Centrum Edukacyjne Warszawa | Kursy Językowe, Szachy, Matematyka | VOLAT",
  description: "Centrum Edukacyjne VOLAT w Warszawie - kursy językowe (angielski, polski), szachy, matematyka dla dzieci, młodzieży i dorosłych. Mokotów i Praga Północ. Małe grupy, indywidualne podejście. Zapisz się już dziś!",
  keywords: [
    "centrum edukacyjne warszawa",
    "kursy językowe warszawa",
    "szachy warszawa",
    "matematyka warszawa",
    "angielski warszawa",
    "polski dla obcokrajowców warszawa",
    "szkoła szachowa warszawa",
    "korepetycje matematyka warszawa",
    "kursy językowe mokotów",
    "centrum edukacyjne praga",
    "business english warszawa",
    "przygotowanie do matury warszawa",
    "egzamin ósmoklasisty warszawa"
  ],
  openGraph: {
    title: "Centrum Edukacyjne Warszawa | Kursy Językowe, Szachy, Matematyka | VOLAT",
    description: "Profesjonalne kursy językowe, szachy i matematyka w Warszawie. Mokotów i Praga Północ.",
    url: "https://volat.pl/seo/centrum-edukacyjne-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "Centrum Edukacyjne Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centrum Edukacyjne Warszawa | Kursy Językowe, Szachy, Matematyka | VOLAT",
    description: "Profesjonalne kursy językowe, szachy i matematyka w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/centrum-edukacyjne-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "VOLAT Centrum Edukacyjne",
  description: "Centrum Edukacyjne VOLAT oferuje kursy językowe (angielski, polski), szachy i matematykę dla dzieci, młodzieży i dorosłych w Warszawie",
  url: "https://volat.pl/educational-center",
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
  offers: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Kursy języka angielskiego",
        description: "Angielski na wszystkich poziomach (A0-C1) oraz Business English"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Kursy języka polskiego",
        description: "Polski dla obcokrajowców od zera, B1/B2, biznesowy"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Szachy",
        description: "Nauka gry w szachy dla wszystkich grup wiekowych"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Matematyka",
        description: "Korepetycje z matematyki, przygotowanie do egzaminu ósmoklasisty i matury"
      }
    }
  ]
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Jakie kursy oferuje Centrum Edukacyjne VOLAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centrum Edukacyjne VOLAT oferuje kursy języka angielskiego (A0-C1, Business English), kursy języka polskiego (od zera, B1/B2, biznesowy), szachy dla wszystkich grup wiekowych oraz korepetycje z matematyki (klasy 4-8, liceum, przygotowanie do egzaminów)."
      }
    },
    {
      "@type": "Question",
      name: "Gdzie odbywają się zajęcia Centrum Edukacyjnego?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie."
      }
    },
    {
      "@type": "Question",
      name: "Dla kogo są przeznaczone kursy językowe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kursy językowe są dostępne dla dzieci (od 7 lat), młodzieży i dorosłych. Oferujemy grupy wiekowe dostosowane do poziomu zaawansowania uczestników."
      }
    },
    {
      "@type": "Question",
      name: "Jakie są godziny zajęć szachowych?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zajęcia szachowe odbywają się: Wtorek 18:00-19:30 (Mokotów), Czwartek 17:00-18:30 (Praga), Sobota 14:00-15:30 (Mokotów)."
      }
    }
  ]
}

export default function CentrumEdukacyjneWarszawaPage() {
  return (
    <>
      <StructuredData type="EducationalOrganization" data={structuredData} />
      <StructuredData type="FAQPage" data={faqStructuredData} />
      
      <div className="min-h-screen bg-black">
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <nav className="mb-8 text-sm text-gray-400">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-red-400">Strona główna</Link></li>
                <li>/</li>
                <li className="text-gray-300">Centrum Edukacyjne Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Centrum Edukacyjne Warszawa - Kursy Językowe, Szachy i Matematyka
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz profesjonalnych kursów edukacyjnych w Warszawie? VOLAT Centrum Edukacyjne oferuje kompleksowe programy edukacyjne: kursy językowe (angielski, polski), szachy oraz korepetycje z matematyki. Lokalizacje: <strong>Mokotów</strong> przy ul. Artura Malawskiego 6 oraz <strong>Praga Północ</strong> przy ul. Kowieńskiej 12/20.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Centrum Edukacyjne VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Centrum Edukacyjne VOLAT to miejsce, gdzie łączymy sport z edukacją. Oferujemy profesjonalne kursy językowe, szachy i matematykę w przyjaznej, motywującej atmosferze. Wszystkie zajęcia prowadzone są przez doświadczonych nauczycieli i trenerów, którzy dostosowują program do indywidualnych potrzeb uczestników.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Nasze centrum edukacyjne wyróżnia się małymi grupami, indywidualnym podejściem do każdego uczestnika oraz elastycznymi pakietami zajęć. Oferujemy zarówno zajęcia stacjonarne, jak i online, co daje możliwość wyboru najbardziej dogodnej formy nauki.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Kursy Języka Angielskiego
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Oferujemy kursy języka angielskiego na wszystkich poziomach zaawansowania - od A0 (od podstaw) do C1 (zaawansowany), a także Business English dla osób potrzebujących języka angielskiego w pracy. Zajęcia prowadzone są w małych grupach dostosowanych do wieku i poziomu uczestników.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Angielski A0 (od podstaw) - dla dzieci 7-9 lat</li>
                <li>Angielski A0+ - dla dzieci 9-11 lat</li>
                <li>Angielski A1-A2 (podstawowy)</li>
                <li>Angielski B1-B2 (średnio zaawansowany)</li>
                <li>Angielski C1 (zaawansowany)</li>
                <li>Business English</li>
                <li>Grafik: Środa 15:15-16:15 (7-9 lat, A0), 16:20-17:20 (9-11 lat, A0+), 17:30-18:30 (12-14 lat, A2+)</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Kursy Języka Polskiego
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Oferujemy kursy języka polskiego dla obcokrajowców na różnych poziomach zaawansowania. Program obejmuje naukę od zera (A0), poziom średnio zaawansowany (B1/B2) oraz polski biznesowy. Kursy są dostosowane do potrzeb osób, które chcą nauczyć się polskiego do celów osobistych lub zawodowych.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Polski od zera (A0) - dla początkujących</li>
                <li>Polski B1/B2 (średnio zaawansowany)</li>
                <li>Polski biznesowy</li>
                <li>Przygotowanie do egzaminów</li>
                <li>Szczegóły dotyczące kursów prosimy uzgodnić telefonicznie lub mailowo</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Szachy
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Szkoła szachowa VOLAT oferuje naukę gry w szachy dla wszystkich grup wiekowych. Zajęcia prowadzi <strong>Wiktor Murończyk</strong> - międzynarodowy mistrz szachowy. Oferujemy lekcje indywidualne i grupowe, przygotowanie do turniejów oraz udział w zawodach szachowych.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Lekcje indywidualne i grupowe</li>
                <li>Turnieje i zawody</li>
                <li>Przygotowanie do zawodów</li>
                <li>Szkoła szachowa dla dzieci</li>
                <li>Grafik: Wtorek 18:00-19:30 (Mokotów), Czwartek 17:00-18:30 (Praga), Sobota 14:00-15:30 (Mokotów)</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Matematyka
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Oferujemy korepetycje z matematyki dla uczniów klas 4-8 oraz liceum. Program obejmuje przygotowanie do egzaminu ósmoklasisty i matury. Zajęcia prowadzone są w małych grupach lub indywidualnie, co pozwala na pełne skupienie się na potrzebach każdego ucznia.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Matematyka klasy 4-8</li>
                <li>Matematyka liceum</li>
                <li>Przygotowanie do egzaminu ósmoklasisty</li>
                <li>Przygotowanie do matury</li>
                <li>Szczegóły dotyczące kursów prosimy uzgodnić telefonicznie lub mailowo</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zalety Centrum Edukacyjnego VOLAT
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Małe Grupy</h3>
                <p className="text-gray-300">
                  Zajęcia prowadzone są w małych grupach, co zapewnia indywidualne podejście do każdego uczestnika i maksymalną efektywność nauki.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Doświadczeni Nauczyciele</h3>
                <p className="text-gray-300">
                  Wszystkie zajęcia prowadzone są przez doświadczonych nauczycieli i trenerów z wieloletnim doświadczeniem.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Elastyczne Pakiety</h3>
                <p className="text-gray-300">
                  Oferujemy elastyczne pakiety zajęć dostosowane do Twoich potrzeb i możliwości czasowych.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Zajęcia Stacjonarne i Online</h3>
                <p className="text-gray-300">
                  Możliwość wyboru między zajęciami stacjonarnymi a online, co daje większą elastyczność.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Lokalizacje Centrum Edukacyjnego
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">VOLAT Mokotów</h3>
                <p className="text-gray-300 mb-4">ul. Artura Malawskiego 6, Warszawa</p>
                <p className="text-gray-400 text-sm">
                  Nowoczesne sale dydaktyczne z pełnym wyposażeniem. Dostępne szatnie, parking i klimatyzacja.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">VOLAT Praga Północ</h3>
                <p className="text-gray-300 mb-4">ul. Kowieńska 12/20, Warszawa</p>
                <p className="text-gray-400 text-sm">
                  Sale dydaktyczne z recepcją, szatnie i klimatyzacją. Dogodny dojazd komunikacją miejską.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz się na Kursy w Centrum Edukacyjnym
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do setek zadowolonych uczestników naszych kursów edukacyjnych!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl "
                >
                  Zapisz się teraz
                </Link>
                <Link
                  href="/educational-center"
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl  border border-white/20"
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
                  <h3 className="text-xl font-bold text-white mb-2">Jakie kursy oferuje Centrum Edukacyjne VOLAT?</h3>
                  <p className="text-gray-300">
                    Centrum Edukacyjne VOLAT oferuje kursy języka angielskiego (A0-C1, Business English), kursy języka polskiego (od zera, B1/B2, biznesowy), szachy dla wszystkich grup wiekowych oraz korepetycje z matematyki (klasy 4-8, liceum, przygotowanie do egzaminów).
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Gdzie odbywają się zajęcia Centrum Edukacyjnego?</h3>
                  <p className="text-gray-300">
                    Zajęcia odbywają się w dwóch lokalizacjach: VOLAT Mokotów przy ul. Artura Malawskiego 6 oraz VOLAT Praga Północ przy ul. Kowieńskiej 12/20 w Warszawie.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Dla kogo są przeznaczone kursy językowe?</h3>
                  <p className="text-gray-300">
                    Kursy językowe są dostępne dla dzieci (od 7 lat), młodzieży i dorosłych. Oferujemy grupy wiekowe dostosowane do poziomu zaawansowania uczestników.
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
