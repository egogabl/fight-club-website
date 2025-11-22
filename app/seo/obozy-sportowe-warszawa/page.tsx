import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Obozy Sportowe Warszawa | Zimowe i Letnie Obozy dla Dzieci i Młodzieży | VOLAT",
  description: "Obozy sportowe w Warszawie - zimowe i letnie obozy dla dzieci i młodzieży. Obozy miejskie i wyjazdowe. Karate, szachy, zajęcia sportowe i edukacyjne. Organizujemy 10 turnusów rocznie. Zapisz dziecko już dziś!",
  keywords: [
    "obozy sportowe warszawa",
    "obozy dla dzieci warszawa",
    "obozy zimowe warszawa",
    "obozy letnie warszawa",
    "półkolonie warszawa",
    "obozy karate warszawa",
    "obozy sportowe dla dzieci",
    "obozy miejskie warszawa",
    "camp karate warszawa"
  ],
  openGraph: {
    title: "Obozy Sportowe Warszawa | Zimowe i Letnie Obozy | VOLAT",
    description: "Obozy sportowe dla dzieci i młodzieży w Warszawie - zimowe i letnie obozy, półkolonie",
    url: "https://volat.pl/seo/obozy-sportowe-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "Obozy sportowe Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Obozy Sportowe Warszawa | Zimowe i Letnie Obozy | VOLAT",
    description: "Obozy sportowe dla dzieci i młodzieży w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/obozy-sportowe-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Camp",
  name: "Obozy Sportowe Warszawa VOLAT",
  description: "Zimowe i letnie obozy sportowe dla dzieci i młodzieży w Warszawie. Obozy miejskie i wyjazdowe z treningami karate, zajęciami sportowymi i edukacyjnymi.",
  organizer: {
    "@type": "Organization",
    name: "VOLAT - Centrum Sportu i Edukacji",
    url: "https://volat.pl"
  },
  campType: "Sports Camp",
  ageRange: "5-18 years"
}

export default function ObozySportoweWarszawaPage() {
  return (
    <>
      <StructuredData type="Camp" data={structuredData} />
      
      <div className="min-h-screen bg-black">
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <nav className="mb-8 text-sm text-gray-400">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-red-400">Strona główna</Link></li>
                <li>/</li>
                <li className="text-gray-300">Obozy sportowe Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Obozy Sportowe Warszawa - Zimowe i Letnie Obozy dla Dzieci i Młodzieży
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz obozu sportowego dla swojego dziecka w Warszawie? VOLAT organizuje zimowe i letnie obozy sportowe dla dzieci i młodzieży. Obozy miejskie i wyjazdowe łączące sport, aktywny wypoczynek i edukację. Organizujemy 10 turnusów rocznie, w tym tygodniowy camp karate.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Obozy Sportowe VOLAT?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Obozy sportowe VOLAT to doskonała okazja dla dzieci i młodzieży do aktywnego spędzenia czasu podczas ferii i wakacji. Łączymy intensywne treningi sportowe z zajęciami edukacyjnymi, integracyjnymi i rekreacyjnymi. Wszystkie obozy są prowadzone przez doświadczonych trenerów i opiekunów.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                W 2024/2025 roku zorganizowaliśmy 10 turnusów obozów sportowych (zimowych i letnich, miejskich i wyjazdowych), w tym tygodniowy camp karate. Setki zadowolonych uczestników potwierdzają wysoką jakość naszych obozów.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Obozy Zimowe
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Obozy zimowe VOLAT to intensywne treningi karate, zajęcia sportowe, edukacyjne i integracyjne. Idealne połączenie sportu i wypoczynku podczas ferii zimowych. Obozy są dostępne zarówno w formie miejskiej (półkolonie), jak i wyjazdowej.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Intensywne treningi karate</li>
                <li>Zajęcia sportowe i rekreacyjne</li>
                <li>Zajęcia edukacyjne</li>
                <li>Gry i zabawy integracyjne</li>
                <li>Opieka doświadczonych trenerów</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Obozy Letnie
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Obozy letnie VOLAT to aktywne wakacje z treningami, zajęciami sportowymi i rekreacyjnymi. Rozwój fizyczny i intelektualny w przyjaznej atmosferze. Obozy letnie są dostępne zarówno w formie miejskiej, jak i wyjazdowej.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Treningi karate i innych sztuk walki</li>
                <li>Zajęcia sportowe na świeżym powietrzu</li>
                <li>Zajęcia rekreacyjne i integracyjne</li>
                <li>Aktywny wypoczynek</li>
                <li>Rozwój fizyczny i intelektualny</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Półkolonie Miejskie
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Półkolonie miejskie VOLAT to obozy dla dzieci w wieku szkolnym organizowane w Warszawie. Zajęcia sportowe, edukacyjne i integracyjne w przyjaznej atmosferze. Idealne rozwiązanie dla rodziców, którzy chcą zapewnić dziecku aktywny wypoczynek bez konieczności wyjazdu.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Zajęcia w godzinach 8:00-16:00</li>
                <li>Zajęcia sportowe i edukacyjne</li>
                <li>Opieka doświadczonych trenerów</li>
                <li>Wyżywienie (opcjonalnie)</li>
                <li>Dogodna lokalizacja w Warszawie</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Camp Karate
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Camp karate VOLAT to tygodniowy intensywny obóz karate dla dzieci i młodzieży. Skupiamy się na intensywnych treningach karate, doskonaleniu technik i przygotowaniu do zawodów. Camp karate to doskonała okazja do szybkiego rozwoju umiejętności.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Obozów Sportowych
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Rozwój Sportowy</h3>
                <p className="text-gray-300">
                  Intensywne treningi poprawiają umiejętności sportowe i kondycję fizyczną. Dzieci szybko rozwijają swoje umiejętności.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Integracja</h3>
                <p className="text-gray-300">
                  Obozy to doskonała okazja do poznania nowych przyjaciół i budowania relacji z rówieśnikami.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Edukacja</h3>
                <p className="text-gray-300">
                  Zajęcia edukacyjne rozwijają wiedzę i umiejętności dzieci w różnych dziedzinach.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Aktywny Wypoczynek</h3>
                <p className="text-gray-300">
                  Obozy to doskonały sposób na aktywne spędzenie ferii i wakacji zamiast siedzenia przed komputerem.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz Dziecko na Obozy Sportowe w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Organizujemy 10 turnusów rocznie - znajdź odpowiedni dla swojego dziecka!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl "
                >
                  Skontaktuj się z nami
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl  border border-white/20"
                >
                  Dowiedz się więcej
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

