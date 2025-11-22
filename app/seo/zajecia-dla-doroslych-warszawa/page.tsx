import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Zajęcia dla Dorosłych Warszawa | Sztuki Walki, Karate, MMA, Muay Thai dla Dorosłych | VOLAT",
  description: "Zajęcia sportowe dla dorosłych w Warszawie - karate, MMA, muay thai, trening funkcjonalny. Mokotów i Praga Północ. Profesjonalni trenerzy, grupy dla początkujących i zaawansowanych. Zapisz się już dziś!",
  keywords: [
    "zajęcia dla dorosłych warszawa",
    "sztuki walki dla dorosłych warszawa",
    "karate dla dorosłych mokotów",
    "mma dla dorosłych warszawa",
    "muay thai dla dorosłych",
    "treningi dla dorosłych warszawa",
    "sekcja dla dorosłych warszawa",
    "sporty walki dla dorosłych warszawa",
    "trening funkcjonalny warszawa",
    "samoobrona dla dorosłych"
  ],
  openGraph: {
    title: "Zajęcia dla Dorosłych Warszawa | Sztuki Walki dla Dorosłych | VOLAT",
    description: "Profesjonalne zajęcia sportowe dla dorosłych w Warszawie - karate, MMA, muay thai, trening funkcjonalny",
    url: "https://volat.pl/seo/zajecia-dla-doroslych-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "Zajęcia dla dorosłych Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zajęcia dla Dorosłych Warszawa | Sztuki Walki dla Dorosłych | VOLAT",
    description: "Profesjonalne zajęcia sportowe dla dorosłych w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/zajecia-dla-doroslych-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Zajęcia dla Dorosłych Warszawa",
  description: "Profesjonalne zajęcia sportowe dla dorosłych w Warszawie - karate, MMA, muay thai, trening funkcjonalny. Lokalizacje: Mokotów i Praga Północ.",
  provider: {
    "@type": "Organization",
    name: "VOLAT - Centrum Sportu i Edukacji",
    url: "https://volat.pl"
  },
  courseCode: "ADULTS-SPORTS",
  educationalLevel: "Beginner to Advanced",
  teaches: "Karate, MMA, muay thai, trening funkcjonalny, sztuki walki dla dorosłych"
}

export default function ZajeciaDlaDoroslychWarszawaPage() {
  return (
    <>
      <StructuredData type="Course" data={structuredData} />
      
      <div className="min-h-screen bg-black">
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <nav className="mb-8 text-sm text-gray-400">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-red-400">Strona główna</Link></li>
                <li>/</li>
                <li className="text-gray-300">Zajęcia dla dorosłych Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Zajęcia dla Dorosłych Warszawa - Sztuki Walki i Treningi Sportowe
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz zajęć sportowych dla dorosłych w Warszawie? VOLAT oferuje profesjonalne zajęcia dla dorosłych: karate, MMA, muay thai oraz trening funkcjonalny. Lokalizacje: <strong>Mokotów</strong> przy ul. Artura Malawskiego 6 oraz <strong>Praga Północ</strong> przy ul. Kowieńskiej 12/20.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Zajęcia Sportowe dla Dorosłych?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia sportowe dla dorosłych to doskonały sposób na poprawę kondycji fizycznej, redukcję stresu i naukę praktycznych umiejętności samoobrony. W VOLAT prowadzimy zajęcia na różnych poziomach zaawansowania - od początkujących po zaawansowanych zawodników.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Regularne treningi pomagają w utrzymaniu dobrej formy, poprawie samopoczucia i budowaniu pewności siebie. To także doskonała okazja do poznania nowych ludzi i spędzenia czasu w aktywny sposób.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Karate dla Dorosłych
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia karate dla dorosłych prowadzi <strong>Vital Rak</strong> - główny trener klubu, mistrz Republiki Białorusi z 30-letnim doświadczeniem. Treningi są dostępne zarówno dla początkujących, jak i zaawansowanych zawodników. Karate rozwija siłę, szybkość, koordynację i dyscyplinę.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Grupy amatorskie i zawodnicze</li>
                <li>Treningi dla początkujących i zaawansowanych</li>
                <li>Nauka technik samoobrony</li>
                <li>Cena: 280 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              MMA dla Dorosłych
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia MMA dla młodzieży od 15 lat i dorosłych prowadzi <strong>Paweł Szymkowicz</strong>. MMA to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. Trening obejmuje walkę w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla młodzieży od 15 lat i dorosłych</li>
                <li>Kompleksowy trening walki</li>
                <li>Przygotowanie do zawodów</li>
                <li>Cena: 280 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Muay Thai dla Dorosłych
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia muay thai i kickboxingu prowadzi <strong>Mikoła Taczylin</strong> - doświadczony trener z ponad 15-letnim doświadczeniem. Muay Thai to tajski boks, jedna z najskuteczniejszych sztuk walki na świecie. Treningi są bardzo intensywne i rozwijają wytrzymałość, siłę, szybkość i refleks.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla młodzieży od 15 lat i dorosłych</li>
                <li>Formuła K1 - kickboxing</li>
                <li>Intensywne treningi cardio</li>
                <li>Cena: 280 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Trening Funkcjonalny dla Dorosłych
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Trening funkcjonalny i motoryczny dla młodzieży od 15 lat i dorosłych prowadzi <strong>Vital Rak</strong>. Program skupia się na rozwoju siły mięśni, szybkości reakcji, wytrzymałości, elastyczności i koordynacji. To doskonała forma aktywności dla osób, które chcą poprawić kondycję i korekcję nadwagi.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Zajęć Sportowych dla Dorosłych
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Poprawa Kondycji</h3>
                <p className="text-gray-300">
                  Regularne treningi poprawiają kondycję fizyczną, siłę, wytrzymałość i elastyczność.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Redukcja Stresu</h3>
                <p className="text-gray-300">
                  Intensywne treningi pomagają w redukcji stresu i poprawie samopoczucia.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Samoobrona</h3>
                <p className="text-gray-300">
                  Praktyczne umiejętności samoobrony, które mogą przydać się w codziennym życiu.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Pewność Siebie</h3>
                <p className="text-gray-300">
                  Regularne treningi budują pewność siebie i poprawiają samoocenę.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz się na Zajęcia dla Dorosłych w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do treningów w VOLAT i popraw swoją kondycję!
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
                  href="/schedule"
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl  border border-white/20"
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

