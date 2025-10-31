"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

const groupsData = [
  {
    name: "Karate Dzieci (6-10 lat)",
    description: "Grupa dla najmłodszych adeptów karate. Nauka podstawowych technik, dyscypliny i szacunku.",
    ageGroup: "6-10 lat",
    level: "Początkujący",
    maxParticipants: 12,
    currentParticipants: 8,
    schedule: [
      {
        day: "Wtorek",
        time: "16:00-17:00",
        location: "Mokotów",
        coach: { name: "Vasiliy Petrov", slug: "vasiliy-petrov" },
      },
      {
        day: "Czwartek",
        time: "16:00-17:00",
        location: "Mokotów",
        coach: { name: "Vasiliy Petrov", slug: "vasiliy-petrov" },
      },
    ],
    sport: "karate",
  },
  {
    name: "Muay Thai Dorośli",
    description: "Intensywne treningi Muay Thai dla dorosłych. Techniki uderzeń, kopnięć i clinch.",
    ageGroup: "18+ lat",
    level: "Wszystkie poziomy",
    maxParticipants: 15,
    currentParticipants: 12,
    schedule: [
      {
        day: "Wtorek",
        time: "19:00-20:30",
        location: "Mokotów",
        coach: { name: "Anna Kowalska", slug: "anna-kowalska" },
      },
      {
        day: "Czwartek",
        time: "18:00-19:30",
        location: "Praga",
        coach: { name: "Anna Kowalska", slug: "anna-kowalska" },
      },
      {
        day: "Sobota",
        time: "10:00-11:30",
        location: "Mokotów",
        coach: { name: "Anna Kowalska", slug: "anna-kowalska" },
      },
    ],
    sport: "muaythai",
  },
  {
    name: "MMA Zaawansowani",
    description: "Grupa dla zaawansowanych zawodników MMA. Walka stojąca, parter i przejścia.",
    ageGroup: "18+ lat",
    level: "Zaawansowany",
    maxParticipants: 10,
    currentParticipants: 7,
    schedule: [
      {
        day: "Poniedziałek",
        time: "20:00-21:30",
        location: "Praga",
        coach: { name: "Dmitri Volkov", slug: "dmitri-volkov" },
      },
      {
        day: "Piątek",
        time: "20:00-21:30",
        location: "Praga",
        coach: { name: "Dmitri Volkov", slug: "dmitri-volkov" },
      },
    ],
    sport: "mma",
  },
  {
    name: "Judo Młodzież",
    description: "Grupa judo dla młodzieży. Nauka rzutów, technik parterowych i samoobrony.",
    ageGroup: "13-17 lat",
    level: "Początkujący/Średniozaawansowany",
    maxParticipants: 14,
    currentParticipants: 9,
    schedule: [
      {
        day: "Środa",
        time: "17:00-18:30",
        location: "Mokotów",
        coach: { name: "Dmitri Volkov", slug: "dmitri-volkov" },
      },
      {
        day: "Sobota",
        time: "12:00-13:30",
        location: "Mokotów",
        coach: { name: "Dmitri Volkov", slug: "dmitri-volkov" },
      },
    ],
    sport: "judo",
  },
  {
    name: "Karate WKF Zawodnicy",
    description: "Grupa treningowa dla zawodników startujących w zawodach WKF. Przygotowanie do turniejów.",
    ageGroup: "16+ lat",
    level: "Zawodniczy",
    maxParticipants: 8,
    currentParticipants: 6,
    schedule: [
      {
        day: "Poniedziałek",
        time: "18:00-19:30",
        location: "Mokotów",
        coach: { name: "Vasiliy Petrov", slug: "vasiliy-petrov" },
      },
      {
        day: "Środa",
        time: "17:00-18:30",
        location: "Praga",
        coach: { name: "Vasiliy Petrov", slug: "vasiliy-petrov" },
      },
      {
        day: "Piątek",
        time: "18:00-19:30",
        location: "Mokotów",
        coach: { name: "Vasiliy Petrov", slug: "vasiliy-petrov" },
      },
    ],
    sport: "karate",
  },
]

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl lg:text-7xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-8 tracking-tight">
              Grupy treningowe
            </h1>
            <p className="text-2xl text-gray-300 font-serif max-w-3xl mx-auto font-light">
              Dołącz do naszych grup treningowych dostosowanych do różnych poziomów zaawansowania
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {groupsData.map((group, index) => (
              <Card
                key={index}
                className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group backdrop-blur-md"
              >
                <CardHeader className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="font-sans text-2xl text-gray-300 mb-3 font-bold">{group.name}</CardTitle>
                      <p className="text-gray-400 font-serif text-lg leading-relaxed font-light mb-4">
                        {group.description}
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center ml-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-500 text-sm font-serif">Wiek</p>
                      <p className="text-gray-300 font-sans font-bold">{group.ageGroup}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-serif">Poziom</p>
                      <p className="text-gray-300 font-sans font-bold">{group.level}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <Badge
                      variant="secondary"
                      className={`px-4 py-2 font-bold ${
                        group.currentParticipants >= group.maxParticipants
                          ? "bg-red-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {group.currentParticipants}/{group.maxParticipants} uczestników
                    </Badge>
                    <Badge variant="outline" className="border-red-400 text-red-300 px-4 py-2 font-bold">
                      {group.sport === "karate" && "🥋 Karate"}
                      {group.sport === "muaythai" && "🥊 Muay Thai"}
                      {group.sport === "mma" && "🤼‍♂️ MMA"}
                      {group.sport === "judo" && "🥋 Judo"}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <h4 className="text-gray-300 font-sans font-bold text-lg mb-4">Harmonogram zajęć:</h4>
                  <div className="space-y-3">
                    {group.schedule.map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className="flex items-center justify-between p-4 bg-gray-800/50 rounded-2xl border border-gray-700"
                      >
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-red-400" />
                          <div>
                            <p className="text-gray-300 font-sans font-bold">{session.day}</p>
                            <p className="text-gray-400 font-serif text-sm">{session.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-red-400" />
                            <span className="text-gray-300 font-serif text-sm">{session.location}</span>
                          </div>
                          <Link
                            href={`/coaches/${session.coach.slug}`}
                            className="text-gray-400 font-serif text-sm hover:text-red-400 transition-colors underline"
                          >
                            {session.coach.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="px-8 pb-8 pt-4">
                    <button
                      onClick={() => {
                        // TODO: Подключить форму записи
                        alert(`Zapis do grupy: ${group.name}`)
                      }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-accent font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Zapisz się do grupy
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
