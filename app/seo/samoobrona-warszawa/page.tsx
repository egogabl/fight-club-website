import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'
import Link from 'next/link'
import { lazy, Suspense } from 'react'

const Footer = lazy(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "Samoobrona Warszawa | Kursy Samoobrony dla Kobiet i Mężczyzn | VOLAT",
  description: "Kursy samoobrony w Warszawie - profesjonalne zajęcia samoobrony dla kobiet i mężczyzn. MMA, karate, muay thai. Mokotów i Praga Północ. Praktyczne techniki samoobrony. Zapisz się już dziś!",
  keywords: [
    "samoobrona warszawa",
    "kurs samoobrony warszawa",
    "samoobrona dla kobiet warszawa",
    "samoobrona dla mężczyzn",
    "zajęcia samoobrony mokotów",
    "treningi samoobrony warszawa",
    "samoobrona praktyczna",
    "techniki samoobrony",
    "samoobrona dla początkujących"
  ],
  openGraph: {
    title: "Samoobrona Warszawa | Kursy Samoobrony | VOLAT",
    description: "Profesjonalne kursy samoobrony w Warszawie dla kobiet i mężczyzn",
    url: "https://volat.pl/seo/samoobrona-warszawa",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "Samoobrona Warszawa VOLAT",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Samoobrona Warszawa | Kursy Samoobrony | VOLAT",
    description: "Profesjonalne kursy samoobrony w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/seo/samoobrona-warszawa',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Samoobrona Warszawa",
  description: "Profesjonalne kursy samoobrony w Warszawie dla kobiet i mężczyzn. Praktyczne techniki samoobrony w ramach zajęć MMA, karate i muay thai.",
  provider: {
    "@type": "Organization",
    name: "VOLAT - Centrum Sportu i Edukacji",
    url: "https://volat.pl"
  },
  courseCode: "SELF-DEFENSE",
  educationalLevel: "All levels",
  teaches: "Samoobrona, techniki samoobrony, MMA, karate, muay thai"
}

export default function SamoobronaWarszawaPage() {
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
                <li className="text-gray-300">Samoobrona Warszawa</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Samoobrona Warszawa - Praktyczne Kursy Samoobrony dla Kobiet i Mężczyzn
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Szukasz kursu samoobrony w Warszawie? VOLAT oferuje profesjonalne zajęcia samoobrony w ramach treningów MMA, karate i muay thai. Praktyczne techniki samoobrony dla kobiet i mężczyzn. Lokalizacje: <strong>Mokotów</strong> i <strong>Praga Północ</strong>.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Dlaczego Samoobrona?
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Samoobrona to umiejętność, która może przydać się w codziennym życiu. W VOLAT uczymy praktycznych technik samoobrony w ramach zajęć MMA, karate i muay thai. Wszystkie techniki są dostosowane do realnych sytuacji i mogą być skutecznie zastosowane w przypadku zagrożenia.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Nasze zajęcia samoobrony są dostępne dla kobiet i mężczyzn na wszystkich poziomach zaawansowania. Nie musisz mieć wcześniejszego doświadczenia w sztukach walki - nasi trenerzy nauczą Cię wszystkiego od podstaw.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Samoobrona w Ramach MMA
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia MMA prowadzi <strong>Paweł Szymkowicz</strong> - absolwent uniwersytetu kultury fizycznej. MMA to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. W ramach treningów MMA uczymy praktycznych technik samoobrony, które mogą być zastosowane w realnych sytuacjach.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Techniki walki w stójce i parterze</li>
                <li>Uderzenia, kopnięcia, rzuty i dźwignie</li>
                <li>Praktyczne zastosowanie w sytuacjach zagrożenia</li>
                <li>Zajęcia dla młodzieży od 15 lat i dorosłych</li>
                <li>Cena: 280 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Samoobrona w Ramach Karate
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia karate prowadzi <strong>Vital Rak</strong> - główny trener klubu z 30-letnim doświadczeniem. Karate uczy technik uderzeń, kopnięć i bloków, które mogą być skutecznie zastosowane w samoobronie. Regularne treningi poprawiają również kondycję, szybkość reakcji i pewność siebie.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Techniki uderzeń i kopnięć</li>
                <li>Bloki i uniki</li>
                <li>Praktyczne zastosowanie technik</li>
                <li>Zajęcia dla dorosłych</li>
                <li>Cena: 280 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Samoobrona w Ramach Muay Thai
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zajęcia muay thai prowadzi <strong>Mikoła Taczylin</strong> - doświadczony trener z ponad 15-letnim doświadczeniem. Muay Thai to tajski boks, który uczy skutecznych technik uderzeń pięściami, łokciami, kolanami i kopnięciami. Te techniki mogą być bardzo skuteczne w samoobronie.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Techniki uderzeń pięściami, łokciami, kolanami</li>
                <li>Kopnięcia i uniki</li>
                <li>Intensywne treningi poprawiające kondycję</li>
                <li>Zajęcia dla młodzieży od 15 lat i dorosłych</li>
                <li>Cena: 280 zł/miesiąc</li>
              </ul>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6">
              Korzyści z Kursów Samoobrony
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Praktyczne Umiejętności</h3>
                <p className="text-gray-300">
                  Nauczysz się technik samoobrony, które mogą być zastosowane w realnych sytuacjach zagrożenia.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Pewność Siebie</h3>
                <p className="text-gray-300">
                  Regularne treningi budują pewność siebie i poprawiają samoocenę. Wiesz, że możesz się obronić.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Kondycja Fizyczna</h3>
                <p className="text-gray-300">
                  Treningi samoobrony poprawiają kondycję fizyczną, siłę, szybkość reakcji i wytrzymałość.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-red-400 mb-3">Redukcja Stresu</h3>
                <p className="text-gray-300">
                  Intensywne treningi pomagają w redukcji stresu i poprawie samopoczucia.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Zapisz się na Kurs Samoobrony w Warszawie
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Naucz się skutecznie bronić i zyskaj pewność siebie!
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

