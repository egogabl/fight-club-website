"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
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

interface CoachDetailPageClientProps {
  coachesData: Record<string, Coach>
}

export default function CoachDetailPageClient({ coachesData }: CoachDetailPageClientProps) {
  const params = useParams()
  const slug = params.slug as string
  const coach = coachesData[slug as keyof typeof coachesData]

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
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl relative bg-transparent bg-gradient-to-br from-gray-900 to-black">
                <Image
                  src={coach.image || "/placeholder.svg"}
                  alt={`${coach.name} - ${coach.specialty} w klubie VOLAT Warszawa`}
                  title={`${coach.name} - Trener ${coach.specialty} w klubie VOLAT Warszawa`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain transition-opacity duration-300"
                  priority
                  loading="eager"
                  quality={60}
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
                    <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group cursor-pointer">
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
              <div className="text-center mt-8">
                <Link href={`/schedule?coach=${slug}`}>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-serif text-xl px-8 py-4 rounded-2xl shadow-lg font-bold">
                    Zobacz pełny rozkład trenera
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
