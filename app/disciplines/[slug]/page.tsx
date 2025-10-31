"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
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
    ageGroups: "Dzieci 6+, Młodzież, Dorośli",
    price: "150 zł/miesiąc"
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
    ageGroups: "Młodzież 14+, Dorośli",
    price: "180 zł/miesiąc"
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
    ageGroups: "Dzieci 8+, Młodzież, Dorośli",
    price: "160 zł/miesiąc"
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
    ageGroups: "Dzieci 5+, Młodzież, Dorośli",
    price: "150 zł/miesiąc"
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
    ageGroups: "Młodzież 12+, Dorośli",
    price: "170 zł/miesiąc"
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
    ageGroups: "Młodzież 12+, Dorośli",
    price: "160 zł/miesiąc"
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
    ageGroups: "Młodzież 16+, Dorośli",
    price: "200 zł/miesiąc"
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
    ageGroups: "Dzieci 6+, Młodzież, Dorośli",
    price: "100 zł/miesiąc"
  }
]

export default function DisciplinePage() {
  const params = useParams()
  const [currentLang, setCurrentLang] = useState('pl')
  
  const discipline = disciplines.find(d => d.slug === params.slug)

  if (!discipline) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-white mb-4">Dyscyplina nie znaleziona</h1>
            <Link href="/disciplines" className="text-red-400 hover:text-red-300 font-accent">
              ← Wróć do dyscyplin
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const translations = {
    pl: {
      backToDisciplines: "← Wróć do dyscyplin",
      bookNow: "Zapisz się",
      viewSchedule: "Zobacz grafik",
      viewTrainer: "Zobacz trenera",
      description: "Opis",
      benefits: "Korzyści",
      schedule: "Grafik",
      ageGroups: "Grupy wiekowe",
      price: "Cena",
      trainer: "Trener"
    }
  }

  const t = translations[currentLang as keyof typeof translations]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className="relative z-40 pt-20">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/disciplines" 
              className="inline-flex items-center text-red-400 hover:text-red-300 font-accent transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToDisciplines}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={discipline.image}
                  alt={discipline.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                  {discipline.name}
                </h1>
                <p className="text-xl text-gray-300 font-primary mb-2">
                  {discipline.description}
                </p>
                <p className="text-lg text-red-400 font-accent">
                  {t.trainer}: {discipline.trainer}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  {t.description}
                </h2>
                <p className="text-gray-300 font-primary leading-relaxed">
                  {discipline.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  {t.benefits}
                </h2>
                <ul className="space-y-2">
                  {discipline.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300 font-primary">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.schedule}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm">
                    {discipline.schedule}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.ageGroups}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm">
                    {discipline.ageGroups}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.price}
                  </h3>
                  <p className="text-red-400 font-accent font-bold text-lg">
                    {discipline.price}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => { alert(`Zapis na ${discipline.name} z ${discipline.trainer}`) }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                >
                  {t.bookNow}
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => { alert('Funkcja grafiku będzie dostępna wkrótce!') }}
                    className="px-6 py-3 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black text-sm font-accent font-medium rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                  >
                    {t.viewSchedule}
                  </button>
                  <Link
                    href={`/coaches/${discipline.trainerId}`}
                    className="px-6 py-3 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black text-sm font-accent font-medium rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl block"
                  >
                    {t.viewTrainer}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
