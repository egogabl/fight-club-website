import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Treningi Indywidualne Warszawa | Personalne Treningi z Trenerem | VOLAT",
  description: "Treningi indywidualne w Warszawie - personalne treningi z doświadczonym trenerem. Karate, MMA, muay thai, trening funkcjonalny. Mokotów i Praga Północ. Indywidualne podejście, szybkie efekty. Zapisz się już dziś!",
  keywords: [
    "treningi indywidualne warszawa",
    "personalne treningi warszawa",
    "trening z trenerem warszawa",
    "indywidualne zajęcia sportowe",
    "personal trainer warszawa",
    "treningi personalne mokotów",
    "indywidualne treningi karate",
    "treningi 1 na 1"
  ],
  openGraph: {
    title: "Treningi Indywidualne Warszawa | Personalne Treningi | VOLAT",
    description: "Profesjonalne treningi indywidualne w Warszawie z doświadczonymi trenerami",
    url: "https://volat.pl/seo/treningi-indywidualne-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "Treningi indywidualne Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Treningi Indywidualne Warszawa | Personalne Treningi | VOLAT",
    description: "Profesjonalne treningi indywidualne w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/treningi-indywidualne-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Treningi Indywidualne Warszawa",
  description: "Profesjonalne treningi indywidualne w Warszawie z doświadczonymi trenerami. Karate, MMA, muay thai, trening funkcjonalny.",
  provider: {
    "@type": "Organization",
    name: "VOLAT - Centrum Sportu i Edukacji",
    url: "https://volat.pl"
  },
  serviceType: "Personal Training",
  areaServed: "Warszawa"
}

export default function TreningiIndywidualneWarszawaPage() {
  return (
    <>
      <StructuredData type="Service" data={structuredData} />
      
      <div className="min-h-screen bg-black">
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <nav className="mb-8 text-sm text-gray-400">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-red-400">Strona główna</Link></li>
                <li>/</li>
                <li className="text-gray-300">Treningi indywidualne Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Treningi Indywidualne Warszawa - Personalne Treningi z Doświadczonym Trenerem
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz treningów indywidualnych w Warszawie? VOLAT oferuje personalne treningi z doświadczonymi trenerami. Karate, MMA, muay thai, trening funkcjonalny - wszystko w formie indywidualnych zajęć dostosowanych do Twoich potrzeb. Lokalizacje: <strong>Mokotów</strong> i <strong>Praga Północ</strong>.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Treningi Indywidualne?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Treningi indywidualne to najlepszy sposób na szybki rozwój umiejętności i osiągnięcie celów sportowych. W przeciwieństwie do zajęć grupowych, treningi personalne są w pełni dostosowane do Twoich potrzeb, możliwości i celów. Trener skupia się wyłącznie na Tobie, co zapewnia maksymalną efektywność treningów.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                W VOLAT oferujemy treningi indywidualne z doświadczonymi trenerami w różnych dyscyplinach: karate, MMA, muay thai oraz trening funkcjonalny. Wszystkie treningi są prowadzone przez certyfikowanych trenerów z wieloletnim doświadczeniem.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Zalety Treningów Indywidualnych
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Indywidualne Podejście</h3>
                <p className="text-gray-300">
                  Trening jest w pełni dostosowany do Twoich potrzeb, możliwości i celów. Trener skupia się wyłącznie na Tobie.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Szybkie Efekty</h3>
                <p className="text-gray-300">
                  Indywidualne podejście i pełna uwaga trenera zapewniają szybkie efekty i maksymalną efektywność treningów.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Elastyczny Grafik</h3>
                <p className="text-gray-300">
                  Możesz umówić trening w dogodnym dla Ciebie terminie. Elastyczny grafik dostosowany do Twojego harmonogramu.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Korekta Techniki</h3>
                <p className="text-gray-300">
                  Trener na bieżąco koryguje Twoją technikę, co zapewnia prawidłowe wykonywanie ćwiczeń i unikanie kontuzji.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dostępne Dyscypliny
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Treningi Indywidualne Karate</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Indywidualne treningi karate z Vital Rak - głównym trenerem klubu, mistrzem Republiki Białorusi z 30-letnim doświadczeniem. Doskonałe dla osób, które chcą szybko poprawić swoje umiejętności lub przygotować się do zawodów.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Treningi Indywidualne MMA</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Indywidualne treningi MMA z Paweł Szymkowicz - absolwentem uniwersytetu kultury fizycznej. Kompleksowy trening walki w stójce i parterze, dostosowany do Twoich potrzeb.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Treningi Indywidualne Muay Thai</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Indywidualne treningi muay thai z Mikoła Taczylin - doświadczonym trenerem z ponad 15-letnim doświadczeniem. Intensywne treningi tajskiego boksu i kickboxingu w formule K1.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Treningi Indywidualne Funkcjonalne</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Indywidualne treningi funkcjonalne z Vital Rak. Program skupiający się na rozwoju siły mięśni, szybkości reakcji, wytrzymałości, elastyczności i koordynacji. Idealne dla osób, które chcą poprawić kondycję i korekcję nadwagi.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dla Kogo Treningi Indywidualne?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Dla osób, które chcą szybko poprawić swoje umiejętności</li>
                <li>Dla zawodników przygotowujących się do zawodów</li>
                <li>Dla osób z ograniczeniami czasowymi</li>
                <li>Dla początkujących, którzy potrzebują indywidualnego podejścia</li>
                <li>Dla osób z konkretnymi celami sportowymi</li>
                <li>Dla osób, które preferują treningi 1 na 1</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Umów Trening Indywidualny w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Skontaktuj się z nami, aby umówić trening indywidualny z doświadczonym trenerem!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl "
                >
                  Skontaktuj się z nami
                </Link>
                <Link
                  href="/coaches"
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl  border border-white/20"
                >
                  Zobacz trenerów
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

