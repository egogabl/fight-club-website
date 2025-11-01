"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Star } from "lucide-react"
import Link from "next/link"

const coaches = [
  {
    id: "vital-rak",
    name: "Vital Rak",
    specialty: "Główny trener, karate (sportowa grupa, dorośli), trening funkcjonalny",
    experience: "15+ lat doświadczenia",
    description:
      "Główny trener klubu VOLAT z wieloletnim doświadczeniem w karate i treningu funkcjonalnym. Mistrz sportu, certyfikowany instruktor WKF. Specjalizuje się w przygotowaniu zawodników do zawodów międzynarodowych. Prowadzi karate sportową grupę i zajęcia dla dorosłych oraz trening funkcjonalny.",
    image: "/coach-senior-male.png",
    achievements: [
      "Mistrz Sportu w Karate",
      "Certyfikat WKF 3 Dan",
      "Trener Kadry Narodowej",
      "Instruktor Treningu Funkcjonalnego",
      "Specjalista Rehabilitacji Sportowej"
    ],
    students: "180+ uczniów",
    languages: ["Polski", "Rosyjski", "Angielski"],
    education: "Akademia Wychowania Fizycznego",
    specialties: ["Karate WKF (sportowa grupa)", "Trening Funkcjonalny", "Przygotowanie Fizyczne", "Przygotowanie do Zawodów"]
  },
  {
    id: "volha-yefimenka",
    name: "Volha Yefimenka",
    specialty: "Karate (dzieci 1-й и 2-й год обучения), trening motoryczny VolatMOVE Junior, Muay Thai",
    experience: "12+ lat doświadczenia",
    description:
      "Specjalistka w karate dla dzieci oraz treningu motorycznym. Prowadzi zajęcia karate dla dzieci w wieku 7-11 lat (1-й и 2-й rok nauki), trening motoryczny VolatMOVE Junior oraz zajęcia Muay Thai. Ma wyjątkowe podejście do najmłodszych zawodników. Certyfikowana instruktorka z wieloletnim doświadczeniem w pracy z dziećmi.",
    image: "/karate-female-trainer.png",
    achievements: [
      "Mistrzyni Białorusi w Karate",
      "Certyfikat Instruktora Dziecięcego",
      "Specjalistka Treningu Motorycznego",
      "Trener Grup Dziecięcych",
      "Instruktor VolatMOVE Junior",
      "Ekspert Rozwoju Koordynacji"
    ],
    students: "160+ uczniów",
    languages: ["Polski", "Rosyjski", "Białoruski"],
    education: "Uniwersytet Sportowy",
    specialties: ["Karate (dzieci 1-2 rok)", "Trening Motoryczny VolatMOVE Junior", "Muay Thai", "Rozwój Koordynacji"]
  },
  {
    id: "mikola-taczylin",
    name: "Mikoła Taczylin",
    specialty: "Trener Muay Thai dla dzieci, młodzieży i dorosłych",
    experience: "18+ lat doświadczenia",
    description:
      "Ekspert w Muay Thai z wieloletnim doświadczeniem zawodowym. Były zawodnik, obecnie trener przygotowujący zawodników do walk i zawodów na najwyższym poziomie. Specjalizuje się w trenowaniu wszystkich grup wiekowych.",
    image: "/coach-mature-male.png",
    achievements: [
      "Były Zawodnik Muay Thai",
      "Mistrz Europy Kickboxingu",
      "Certyfikat IFMA",
      "Trener Grup Dziecięcych",
      "Specjalista Techniki Uderzeń"
    ],
    students: "180+ zawodników",
    languages: ["Polski", "Rosyjski", "Angielski", "Tajski"],
    education: "Akademia Sportu i Turystyki",
    specialties: ["Muay Thai", "Boks", "Kickboxing", "Trening Dziecięcy"]
  },
  {
    id: "wiktor-muronczyk",
    name: "Wiktor Murończyk",
    specialty: "Trener szkoły szachowej",
    experience: "25+ lat doświadczenia",
    description:
      "Mistrz szachowy prowadzący zajęcia dla wszystkich grup wiekowych. Specjalizuje się w rozwoju strategicznego myślenia i przygotowaniu do turniejów. Wieloletni doświadczenie w pracy z dziećmi i dorosłymi.",
    image: "/coach-young-male.png",
    achievements: [
      "Międzynarodowy Mistrz Szachowy",
      "Trener FIDE",
      "Sędzia Turniejów Szachowych",
      "Autor Programów Edukacyjnych",
      "Specjalista Psychologii Sportu"
    ],
    students: "300+ uczniów",
    languages: ["Polski", "Angielski", "Rosyjski"],
    education: "Uniwersytet Warszawski - Matematyka",
    specialties: ["Szachy", "Strategia", "Logika", "Rozwój Intelektualny"]
  },
  {
    id: "pawel-szymkowicz",
    name: "Paweł Szymkowicz",
    specialty: "Trener MMA dla dzieci od 6 lat, młodzieży i dorosłych",
    experience: "10+ lat doświadczenia",
    description:
      "Specjalista w MMA z wieloletnim doświadczeniem w trenowaniu zawodników wszystkich grup wiekowych. Certyfikowany instruktor z międzynarodowymi osiągnięciami. Specjalizuje się w technikach mieszanych sztuk walki.",
    image: "/coach-bearded-male.png",
    achievements: [
      "Mistrz Polski w MMA",
      "Certyfikat Instruktora MMA",
      "Trener Grup Dziecięcych",
      "Specjalista Technik Mieszanych",
      "Ekspert Walki w Parterze"
    ],
    students: "120+ zawodników",
    languages: ["Polski", "Angielski"],
    education: "Akademia Wychowania Fizycznego",
    specialties: ["MMA", "Walka w Parterze", "Techniki Mieszane", "Walka w Klinczu"]
  },
  {
    id: "daria-koba",
    name: "Daria Koba",
    specialty: "Trening motoryczny VolatMOVE Kids (dzieci 4-7 lat), Judo dla dzieci",
    experience: "8+ lat doświadczenia",
    description:
      "Specjalistka w treningu motorycznym dla najmłodszych dzieci oraz judo. Ma wyjątkowe podejście do pracy z dziećmi w wieku przedszkolnym i szkolnym. Certyfikowana instruktorka z wieloletnim doświadczeniem w rozwoju podstawowych umiejętności motorycznych oraz treningu judo dla dzieci.",
    image: "/judo-female-trainer.png",
    achievements: [
      "Certyfikat Instruktora Treningu Motorycznego",
      "Certyfikat Instruktora Judo",
      "Specjalistka Pracy z Dziećmi",
      "Trener Grup Dziecięcych",
      "Ekspert Rozwoju Koordynacji",
      "Instruktor VolatMOVE Kids"
    ],
    students: "120+ dzieci",
    languages: ["Polski", "Rosyjski", "Białoruski"],
    education: "Akademia Wychowania Fizycznego",
    specialties: ["Judo (dzieci)", "Trening Motoryczny", "VolatMOVE Kids", "Rozwój Koordynacji"]
  },
]

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-black">

      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Trenerzy Klubu VOLAT
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-accent font-light mb-8">
              Poznaj naszych doświadczonych trenerów, którzy pomogą Ci osiągnąć cele sportowe
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-primary font-light">
              Każdy z naszych trenerów to ekspert w swojej dziedzinie z międzynarodowym doświadczeniem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coaches.map((coach, index) => (
              <div key={index} className="group flex flex-col">
                <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group overflow-hidden backdrop-blur-md flex-1 flex flex-col min-h-[600px]">
                  <Link href={`/coaches/${coach.id}`} className="flex-1 flex flex-col">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={coach.image || "/placeholder.svg"}
                        alt={coach.name}
                        className="w-full h-full object-cover transition-transform duration-200"
                      />
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="font-display text-xl text-white mb-3 font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{coach.name}</CardTitle>
                      <CardDescription className="font-primary">
                        <Badge
                          variant="secondary"
                          className="mb-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 text-xs shadow-md font-accent font-bold"
                        >
                          {coach.specialty}
                        </Badge>
                        <p className="text-gray-300 text-sm font-primary font-light mb-2">{coach.experience}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                          <Users className="w-3 h-3" />
                          <span className="font-primary">{coach.students}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 flex-1 flex flex-col">
                      <p className="text-gray-400 text-sm leading-relaxed font-primary font-light mb-4 flex-1">
                        {coach.description}
                      </p>

                      {/* Дополнительная информация */}
                      <div className="grid grid-cols-1 gap-3 mb-4">
                        <div className="bg-gray-800/50 rounded-lg p-2">
                          <div className="text-red-400 font-accent font-semibold text-xs mb-1">Uczniowie</div>
                          <div className="text-white text-xs font-primary">{coach.students}</div>
                        </div>
                      </div>

                      {/* Specjalizacje */}
                      <div className="mb-4">
                        <h4 className="text-red-400 font-accent font-semibold text-xs mb-2">Specjalizacje</h4>
                        <div className="flex flex-wrap gap-1">
                          {coach.specialties.slice(0, 3).map((specialty, i) => (
                            <Badge key={i} variant="outline" className="border-red-500/30 text-red-300 text-xs font-primary bg-red-500/10">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Osiągnięcia */}
                      <div className="mb-4">
                        <h4 className="text-red-400 font-accent font-semibold text-xs mb-2 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Osiągnięcia
                        </h4>
                        <ul className="text-gray-400 text-xs space-y-1">
                          {coach.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 font-primary">
                              <div className="w-1 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Link>
                  
                  {/* Кнопки действий */}
                  <div className="p-6 pt-0">
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="w-full px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-medium rounded-xl shadow-lg block text-center"
                      >
                        Zapisz się do trenera
                      </a>
                      <Link href={`/coaches/${coach.id}`} className="w-full">
                        <button className="w-full px-4 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl">
                          Zobacz szczegóły
                        </button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Dlaczego Nasi Trenerzy?
            </h2>
            <p className="text-gray-400 text-lg font-accent mb-12 max-w-2xl mx-auto">
              Doświadczeni profesjonaliści z międzynarodowymi certyfikatami i wieloletnim doświadczeniem
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">830+</div>
                <p className="text-gray-400 font-primary">Aktywnych uczniów</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">70+</div>
                <p className="text-gray-400 font-primary">Lat łącznego doświadczenia</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">25+</div>
                <p className="text-gray-400 font-primary">Międzynarodowych certyfikatów</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">4</div>
                <p className="text-gray-400 font-primary">Ekspertów w zespole</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
