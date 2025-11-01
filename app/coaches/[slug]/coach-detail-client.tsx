"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Coach {
  name: string
  specialty: string
  experience: string
  description: string
  image: string
  achievements: string[]
  upcomingSessions: {
    day: string
    time: string
    discipline: string
    location: string
  }[]
}

interface CoachDetailClientProps {
  coach: Coach | null
  slug: string
}

export default function CoachDetailClient({ coach, slug }: CoachDetailClientProps) {
  if (!coach) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Trener nie znaleziony</h1>
          <Link href="/coaches">
            <Button className="bg-red-600 hover:bg-red-700">Powrót do trenerów</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Кнопка "Назад" */}
            <div className="mb-8">
              <Link href="/coaches">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl shadow-lg font-medium">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Powrót do trenerów
                </Button>
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl relative">
                <Image
                  src={coach.image || "/placeholder.svg"}
                  alt={`${coach.name} - ${coach.specialty} w klubie VOLAT Warszawa`}
                  title={`${coach.name} - Trener ${coach.specialty} w klubie VOLAT Warszawa`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-4">
                    {coach.name}
                  </h1>
                  <Badge className="mb-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 text-lg font-bold">
                    {coach.specialty}
                  </Badge>
                  <p className="text-2xl text-gray-300 font-serif mb-6 font-light">{coach.experience}</p>
                  <p className="text-xl text-gray-400 font-serif leading-relaxed font-light">{coach.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-sans font-bold text-white mb-4">Osiągnięcia</h3>
                  <ul className="space-y-2">
                    {coach.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 font-serif text-lg flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-4xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-8 text-center">
                Najbliższe zajęcia trenera
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {coach.upcomingSessions.map((session, index) => (
                  <Link key={index} href={`/schedule?coach=${slug}`}>
                    <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-200 group cursor-pointer">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="font-sans text-lg text-gray-300">{session.discipline}</CardTitle>
                            <p className="text-gray-400 font-serif">{session.day}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-red-400" />
                            <span className="text-gray-300 font-serif">{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-red-400" />
                            <span className="text-gray-300 font-serif">{session.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Link href={`/schedule?coach=${slug}`}>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-medium text-lg px-8 py-4 rounded-2xl shadow-lg w-full sm:w-auto">
                    Zobacz pełny rozkład trenera
                  </Button>
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium text-lg px-8 py-4 rounded-2xl shadow-lg w-full sm:w-auto block text-center"
                >
                  Zapisz się na zajęcia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
