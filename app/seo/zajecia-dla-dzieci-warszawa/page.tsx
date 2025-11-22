import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Zajęcia dla Dzieci Warszawa Mokotów i Praga | Sztuki Walki, Karate, Judo dla Dzieci | VOLAT",
  description: "Zajęcia sportowe dla dzieci w Warszawie - karate od 7 lat, judo 7-12 lat, trening motoryczny VolatMove KIDS 5-7 lat. Mokotów i Praga Północ. Profesjonalni trenerzy, bezpieczne treningi. Zapisz dziecko już dziś!",
  keywords: [
    "zajęcia dla dzieci warszawa",
    "sztuki walki dla dzieci warszawa",
    "karate dla dzieci mokotów",
    "judo dla dzieci warszawa",
    "treningi dla dzieci warszawa",
    "sekcja dla dzieci warszawa",
    "zajęcia sportowe dla dzieci mokotów",
    "karate dzieci warszawa",
    "judo dzieci warszawa",
    "volatmove kids",
    "trening motoryczny dla dzieci"
  ],
  openGraph: {
    title: "Zajęcia dla Dzieci Warszawa | Sztuki Walki dla Dzieci | VOLAT",
    description: "Profesjonalne zajęcia sportowe dla dzieci w Warszawie - karate, judo, trening motoryczny",
    url: "https://volat.pl/seo/zajecia-dla-dzieci-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "Zajęcia dla dzieci Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zajęcia dla Dzieci Warszawa | Sztuki Walki dla Dzieci | VOLAT",
    description: "Profesjonalne zajęcia sportowe dla dzieci w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/zajecia-dla-dzieci-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Zajęcia dla Dzieci Warszawa",
  description: "Profesjonalne zajęcia sportowe dla dzieci w Warszawie - karate, judo, trening motoryczny. Lokalizacje: Mokotów i Praga Północ.",
  provider: {
    "@type": "Organization",
    name: "VOLAT - Centrum Sportu i Edukacji",
    url: "https://volat.pl"
  },
  courseCode: "KIDS-SPORTS",
  educationalLevel: "Children 5-12 years",
  teaches: "Karate, judo, trening motoryczny, sztuki walki dla dzieci"
}

export default function ZajeciaDlaDzieciWarszawaPage() {
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
                <li className="text-gray-300">Zajęcia dla dzieci Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Zajęcia dla Dzieci Warszawa - Sztuki Walki i Treningi Sportowe
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz zajęć sportowych dla swojego dziecka w Warszawie? VOLAT oferuje profesjonalne zajęcia dla dzieci w różnym wieku: karate od 7 lat, judo dla dzieci 7-12 lat oraz trening motoryczny VolatMove KIDS dla dzieci 5-7 lat. Lokalizacje: <strong>Mokotów</strong> i <strong>Praga Północ</strong>.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Zajęcia Sportowe dla Dzieci?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia sportowe dla dzieci to nie tylko aktywność fizyczna, ale także szkoła charakteru. Dzieci uczą się dyscypliny, szacunku, współpracy i pewności siebie. Regularne treningi pomagają w rozwoju fizycznym, psychicznym i społecznym dziecka.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                W VOLAT prowadzimy zajęcia dostosowane do wieku i możliwości dzieci. Wszystkie treningi odbywają się w bezpiecznej, przyjaznej atmosferze pod okiem doświadczonych trenerów, którzy mają wieloletnie doświadczenie w pracy z dziećmi.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Karate dla Dzieci od 7 lat
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia karate dla dzieci od 7 lat prowadzi doświadczona trenerka <strong>Volha Yefimenka</strong> - mistrz sportu z wieloletnim doświadczeniem. Treningi rozwijają koordynację, siłę, szybkość i dyscyplinę. Dzieci uczą się technik karate, szacunku do trenera i kolegów, a także budują pewność siebie.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci od 7 lat</li>
                <li>Grupy dostosowane do wieku i umiejętności</li>
                <li>Bezpieczne treningi pod okiem doświadczonych trenerów</li>
                <li>Możliwość udziału w turniejach</li>
                <li>Cena: 220 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Judo dla Dzieci 7-12 lat
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia judo dla dzieci 7-12 lat prowadzi <strong>Daria Koba</strong> - certyfikowana instruktorka judo z wieloletnim doświadczeniem w pracy z dziećmi. Judo rozwija siłę, elastyczność, koordynację i równowagę. To bezpieczna forma aktywności, która uczy dzieci upadania i technik rzutów.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci 7-12 lat</li>
                <li>Bezpieczne treningi na miękkich matach</li>
                <li>Nauka technik rzutów i upadania</li>
                <li>Rozwój koordynacji i równowagi</li>
                <li>Cena: 220 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              VolatMove KIDS - Trening Motoryczny dla Dzieci 5-7 lat
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                VolatMove KIDS to ogólne przygotowanie motoryczne dla przedszkolaków. Program specjalnie zaprojektowany dla najmłodszych dzieci w wieku 5-7 lat, skupiający się na podstawowych umiejętnościach ruchowych i równowadze. Zajęcia prowadzą <strong>Volha Yefimenka</strong> i <strong>Daria Koba</strong>.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia dla dzieci 5-7 lat</li>
                <li>Rozwój koordynacji i motoryki dużej</li>
                <li>Przyjazna atmosfera</li>
                <li>Dostosowanie do możliwości każdego dziecka</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Zajęć Sportowych dla Dzieci
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Fizyczny</h3>
                <p className="text-gray-300">
                  Poprawa kondycji, koordynacji, siły i elastyczności. Regularne treningi wspierają zdrowy rozwój dziecka.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Psychiczny</h3>
                <p className="text-gray-300">
                  Wzrost pewności siebie, dyscypliny i koncentracji. Dzieci uczą się radzenia sobie ze stresem i kontroli emocji.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Społeczny</h3>
                <p className="text-gray-300">
                  Budowanie relacji z rówieśnikami, nauka szacunku, współpracy i fair play.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Bezpieczeństwo</h3>
                <p className="text-gray-300">
                  Praktyczne umiejętności samoobrony, które mogą przydać się w codziennym życiu.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz Dziecko na Zajęcia Sportowe w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Dołącz do setek zadowolonych dzieci trenujących w VOLAT!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl "
                >
                  Zapisz dziecko teraz
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

