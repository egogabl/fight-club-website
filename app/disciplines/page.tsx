"use client"

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import Image from 'next/image'

const disciplines = [
  {
    id: "karate-wkf",
    name: "Karate WKF",
    description: "Sztuki walki",
    slug: "karate-wkf",
    trainer: "Vital Rak",
    trainerId: "vital-rak",
    image: "/karate-martial-arts-icon.jpg",
    fullDescription: "Karate WKF to tradycyjna sztuka walki pochodząca z Japonii, która łączy techniki uderzeń, kopnięć i bloków. Trening rozwija siłę, szybkość, koordynację i dyscyplinę. Idealne dla osób w każdym wieku, które chcą poprawić kondycję fizyczną i psychiczną.",
    benefits: [
      "Poprawa kondycji fizycznej",
      "Rozwój koordynacji ruchowej", 
      "Wzrost pewności siebie",
      "Nauka samodyscypliny",
      "Redukcja stresu"
    ],
    schedule: "Poniedziałek, Środa, Piątek 18:00-19:30",
    ageGroups: "Dzieci 6+, Młodzież, Dorośli"
  },
  {
    id: "muaythai",
    name: "Muay Thai",
    description: "Tajski boks",
    slug: "muaythai", 
    trainer: "Mikoła Taczylin",
    trainerId: "mikola-taczylin",
    image: "/muay-thai-boxing-gloves-icon.jpg",
    fullDescription: "Muay Thai to tajski boks, jedna z najskuteczniejszych sztuk walki na świecie. Charakteryzuje się użyciem uderzeń pięściami, łokciami, kolanami i kopnięciami. Trening jest bardzo intensywny i rozwija wytrzymałość, siłę i szybkość.",
    benefits: [
      "Maksymalna spalanie kalorii",
      "Rozwój siły i wytrzymałości",
      "Nauka samoobrony",
      "Poprawa refleksu",
      "Wzrost pewności siebie"
    ],
    schedule: "Wtorek, Czwartek 19:00-20:30",
    ageGroups: "Młodzież 14+, Dorośli"
  },
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu",
    description: "Brazylijskie jiu-jitsu",
    slug: "jiu-jitsu",
    trainer: "Vital Rak", 
    trainerId: "vital-rak",
    image: "/jiu-jitsu-martial-arts-icon.jpg",
    fullDescription: "Brazylijskie Jiu-Jitsu to sztuka walki skupiająca się na walce w parterze i technikach dźwigni. Uczy jak pokonać przeciwnika bez użycia siły, wykorzystując technikę i dźwignie. Idealne dla osób każdego wzrostu i wagi.",
    benefits: [
      "Nauka technik dźwigni",
      "Rozwój siły funkcjonalnej",
      "Poprawa elastyczności",
      "Nauka strategii walki",
      "Budowanie charakteru"
    ],
    schedule: "Poniedziałek, Środa 20:00-21:30",
    ageGroups: "Dzieci 8+, Młodzież, Dorośli"
  },
  {
    id: "judo",
    name: "Judo",
    description: "Judo olimpijskie",
    slug: "judo",
    trainer: "Vital Rak",
    trainerId: "vital-rak", 
    image: "/judo-martial-arts-icon.jpg",
    fullDescription: "Judo to japońska sztuka walki olimpijska, która uczy rzutów, trzymań i dźwigni. Trening rozwija siłę, elastyczność i koordynację. To doskonały sport dla dzieci i dorosłych, który uczy szacunku i dyscypliny.",
    benefits: [
      "Rozwój siły i elastyczności",
      "Nauka technik rzutów",
      "Poprawa koordynacji",
      "Nauka szacunku",
      "Rozwój charakteru"
    ],
    schedule: "Wtorek, Czwartek 18:00-19:30",
    ageGroups: "Dzieci 5+, Młodzież, Dorośli"
  },
  {
    id: "sambo",
    name: "Sambo",
    description: "Rosyjska sztuka walki",
    slug: "sambo",
    trainer: "Vital Rak",
    trainerId: "vital-rak",
    image: "/sambo-martial-arts-icon.jpg", 
    fullDescription: "Sambo to rosyjska sztuka walki, która łączy elementy judo, zapasów i innych sztuk walki. Charakteryzuje się skutecznymi technikami rzutów i dźwigni. Trening rozwija siłę, szybkość i wytrzymałość.",
    benefits: [
      "Kombinacja różnych stylów",
      "Rozwój wszechstronności",
      "Nauka skutecznych technik",
      "Poprawa kondycji",
      "Wzrost pewności siebie"
    ],
    schedule: "Piątek 19:00-20:30",
    ageGroups: "Młodzież 12+, Dorośli"
  },
  {
    id: "boxing",
    name: "Boxing",
    description: "Boks klasyczny",
    slug: "boxing",
    trainer: "Mikoła Taczylin",
    trainerId: "mikola-taczylin",
    image: "/boxing-gloves-icon.jpg",
    fullDescription: "Boks to klasyczna sztuka walki, która uczy technik uderzeń pięściami. Trening rozwija szybkość, siłę, wytrzymałość i refleks. To doskonały sport dla poprawy kondycji i nauki samoobrony.",
    benefits: [
      "Rozwój szybkości i refleksu",
      "Poprawa kondycji sercowo-naczyniowej",
      "Nauka technik uderzeń",
      "Wzrost pewności siebie",
      "Redukcja stresu"
    ],
    schedule: "Poniedziałek, Środa 19:00-20:30",
    ageGroups: "Młodzież 12+, Dorośli"
  },
  {
    id: "mma",
    name: "MMA",
    description: "Mieszane sztuki walki",
    slug: "mma",
    trainer: "Mikoła Taczylin",
    trainerId: "mikola-taczylin",
    image: "/mma-mixed-martial-arts-icon.jpg",
    fullDescription: "MMA (Mixed Martial Arts) to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. Trening obejmuje walkę w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie. To najbardziej wszechstronna forma treningu.",
    benefits: [
      "Wszechstronny rozwój",
      "Nauka różnych technik",
      "Maksymalna spalanie kalorii",
      "Poprawa kondycji",
      "Nauka strategii walki"
    ],
    schedule: "Wtorek, Czwartek 20:00-21:30",
    ageGroups: "Młodzież 16+, Dorośli"
  },
  {
    id: "chess",
    name: "Szachy",
    description: "Gra strategiczna",
    slug: "chess",
    trainer: "Vital Rak",
    trainerId: "vital-rak",
    image: "/chess-pieces-icon.jpg",
    fullDescription: "Szachy to gra strategiczna, która rozwija logiczne myślenie, koncentrację i umiejętności planowania. Trening szachowy poprawia pamięć, cierpliwość i umiejętności analityczne. Idealne dla osób w każdym wieku.",
    benefits: [
      "Rozwój logicznego myślenia",
      "Poprawa koncentracji",
      "Nauka strategii i planowania",
      "Rozwój pamięci",
      "Nauka cierpliwości"
    ],
    schedule: "Sobota 10:00-12:00",
    ageGroups: "Dzieci 6+, Młodzież, Dorośli"
  }
]

export default function DisciplinesPage() {
  const [currentLang, setCurrentLang] = useState('pl')

  const translations = {
    pl: {
      title: "Nasze Dyscypliny",
      subtitle: "Odkryj różnorodność treningów w VOLAT",
      viewDetails: "Zobacz szczegóły",
      bookNow: "Zapisz się",
      schedule: "Grafik",
      ageGroups: "Grupy wiekowe",
      benefits: "Korzyści"
    }
  }

  const t = translations[currentLang as keyof typeof translations]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className="relative z-40 pt-20">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-primary max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {disciplines.map((discipline) => (
              <div
                key={discipline.id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:from-gray-700/50 hover:to-gray-800/50 hover:border-gray-600/50 transition-all duration-200 hover:shadow-2xl hover:shadow-red-500/10 flex flex-col min-h-[400px]"
              >
                {/* Image */}
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={discipline.image}
                    alt={discipline.name}
                    fill
                    className="object-cover transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-red-100 transition-colors duration-300">
                    {discipline.name}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm">
                    {discipline.description}
                  </p>
                  <p className="text-gray-400 font-primary text-xs">
                    Trener: {discipline.trainer}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 space-y-2 mt-auto">
                  <Link
                    href={`/disciplines/${discipline.slug}`}
                    className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-xl transition-all duration-200 text-center shadow-lg block"
                  >
                    {t.viewDetails}
                  </Link>
                  <button
                    onClick={() => { alert(`Zapis na ${discipline.name} z ${discipline.trainer}`) }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black text-sm font-accent font-medium rounded-xl transition-all duration-200 text-center shadow-lg"
                  >
                    {t.bookNow}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
