"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Star } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

const coaches = [
  {
    id: "vital-rak",
    name: "Vital Rak",
    image: "/vital-rak.png",
  },
  {
    id: "volha-yefimenka",
    name: "Volha Yefimenka",
    image: "/volha-yefimenka.png",
  },
  {
    id: "mikola-taczylin",
    name: "Mikoła Taczylin",
    image: "/mikola-taczylin.png",
  },
  {
    id: "wiktor-muronczyk",
    name: "Wiktor Murończyk",
    image: "/wiktor-muronczyk.png",
  },
  {
    id: "pawel-szymkowicz",
    name: "Paweł Szymkowicz",
    image: "/pawel-szymkowicz.png",
  },
  {
    id: "daria-koba",
    name: "Daria Koba",
    image: "/daria-koba.png",
  },
]

const coachShortDescriptions: Record<string, Record<string, string>> = {
  "vital-rak": {
    pl: "Karate WKF • Trening funkcjonalny • Główny trener klubu. Mistrz Republiki Białorusi. 30 lat doświadczenia.",
    uk: "Карате WKF • Функціональний тренінг • Головний тренер клубу. Майстер Республіки Білорусь. 30 років досвіду.",
    en: "Karate WKF • Functional training • Head coach. Master of Sports of Belarus. 30 years of experience.",
    by: "Каратэ WKF • Функцыянальны трэнінг • Галоўны трэнер клуба. Майстар Рэспублікі Беларусь. 30 гадоў вопыту.",
  },
  "volha-yefimenka": {
    pl: "Karate WKF • Trening motoryczny dla dzieci • Mistrz sportu. Trenerka od 2007 roku.",
    uk: "Карате WKF • Моторичний тренінг для дітей • Майстер спорту. Тренерка з 2007 року.",
    en: "Karate WKF • Motor training for children • Master of Sports. Coach since 2007.",
    by: "Каратэ WKF • Маторны трэнінг для дзяцей • Майстар спорту. Трэнерка з 2007 года.",
  },
  "mikola-taczylin": {
    pl: "Muay Thai • Kickboxing • Formuła K1. Ponad 15 lat doświadczenia. Wychował wielu mistrzów.",
    uk: "Муай Тай • Кікбоксинг • Формула K1. Понад 15 років досвіду. Виховав багатьох чемпіонів.",
    en: "Muay Thai • Kickboxing • K1 formula. Over 15 years of experience. Trained many champions.",
    by: "Муай Тай • Кікбоксінг • Формула K1. Больш за 15 гадоў вопыту. Выхаваў многіх чэмпіёнаў.",
  },
  "pawel-szymkowicz": {
    pl: "MMA • Samoobrona • Sambo. Absolwent uniwersytetu kultury fizycznej. Trener dla dzieci i dorosłych.",
    uk: "ММА • Самооборона • Самбо. Випускник університету фізичної культури. Тренер для дітей та дорослих.",
    en: "MMA • Self-defense • Sambo. Graduate of physical culture university. Coach for children and adults.",
    by: "ММА • Самаабарона • Самбо. Выпускнік універсітэта фізічнай культуры. Трэнер для дзяцей і дарослых.",
  },
  "daria-koba": {
    pl: "Judo • Trening motoryczny dla dzieci • Medalistka mistrzostw Ukrainy. Doświadczenie z dziećmi 3-13 lat.",
    uk: "Дзюдо • Моторичний тренінг для дітей • Медалістка чемпіонатів України. Досвід з дітьми 3-13 років.",
    en: "Judo • Motor training for children • Medalist of Ukrainian championships. Experience with children 3-13 years.",
    by: "Дзюдо • Маторны трэнінг для дзяцей • Медалістка чэмпіянатаў Украіны. Вопыт з дзецьмі 3-13 гадоў.",
  },
  "wiktor-muronczyk": {
    pl: "Szachy • Trener z doświadczeniem turniejowym. Wielokrotny zwycięzca turniejów rapidu i blitza.",
    uk: "Шахи • Тренер з турнірним досвідом. Багаторазовий переможець турнірів рапіду та бліцу.",
    en: "Chess • Coach with tournament experience. Multiple winner of rapid and blitz tournaments.",
    by: "Шахматы • Трэнер з турнірным вопытам. Шматразовы пераможца турніраў рапіду і бліцу.",
  },
}

const translations = {
  pl: {
    title: "Trenerzy Klubu VOLAT",
    subtitle: "Poznaj naszych doświadczonych trenerów, którzy pomogą Ci osiągnąć cele sportowe",
    description: "Każdy z naszych trenerów to ekspert w swojej dziedzinie z międzynarodowym doświadczeniem",
    students: "Uczniowie",
    specialties: "Specjalizacje",
    achievements: "Osiągnięcia",
    bookWithCoach: "Zapisz się do trenera",
    viewDetails: "Zobacz szczegóły",
    whyOurCoaches: "Dlaczego Nasi Trenerzy?",
    whyOurCoachesDesc: "Doświadczeni profesjonaliści z międzynarodowymi certyfikatami i wieloletnim doświadczeniem",
    activeStudents: "Aktywnych uczniów",
    yearsExperience: "Lat łącznego doświadczenia",
    internationalCerts: "Międzynarodowych certyfikatów",
    experts: "Ekspertów w zespole"
  },
  uk: {
    title: "Тренери Клубу VOLAT",
    subtitle: "Познайомтеся з нашими досвідченими тренерами, які допоможуть вам досягти спортивних цілей",
    description: "Кожен з наших тренерів - експерт у своїй галузі з міжнародним досвідом",
    students: "Учні",
    specialties: "Спеціалізації",
    achievements: "Досягнення",
    bookWithCoach: "Записатися до тренера",
    viewDetails: "Детальніше",
    whyOurCoaches: "Чому наші тренери?",
    whyOurCoachesDesc: "Досвідчені професіонали з міжнародними сертифікатами та багаторічним досвідом",
    activeStudents: "Активних учнів",
    yearsExperience: "Років сукупного досвіду",
    internationalCerts: "Міжнародних сертифікатів",
    experts: "Експертів у команді"
  },
  en: {
    title: "VOLAT Club Coaches",
    subtitle: "Meet our experienced coaches who will help you achieve your sports goals",
    description: "Each of our coaches is an expert in their field with international experience",
    students: "Students",
    specialties: "Specialties",
    achievements: "Achievements",
    bookWithCoach: "Book with coach",
    viewDetails: "View details",
    whyOurCoaches: "Why Our Coaches?",
    whyOurCoachesDesc: "Experienced professionals with international certificates and years of experience",
    activeStudents: "Active students",
    yearsExperience: "Years of combined experience",
    internationalCerts: "International certificates",
    experts: "Experts in the team"
  },
  by: {
    title: "Трэнеры Клуба VOLAT",
    subtitle: "Пазнаёмцеся з нашымі вопытнымі трэнерамі, якія дапамогуць вам дасягнуць спартыўных мэт",
    description: "Кожны з нашых трэнераў - эксперт у сваёй галіне з міжнародным вопытам",
    students: "Вучні",
    specialties: "Спецыялізацыі",
    achievements: "Дасягненні",
    bookWithCoach: "Запісацца да трэнера",
    viewDetails: "Падрабязна",
    whyOurCoaches: "Чаму нашы трэнеры?",
    whyOurCoachesDesc: "Вопытныя прафесіяналы з міжнароднымі сертыфікатамі і шматгадовым вопытам",
    activeStudents: "Актыўных вучняў",
    yearsExperience: "Гадоў сукупнага вопыту",
    internationalCerts: "Міжнародных сертыфікатаў",
    experts: "Экспертаў у камандзе"
  }
}

export default function CoachesPage() {
  const { currentLang } = useLanguage()
  const router = useRouter()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black">
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-accent font-light mb-8">
              {t.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-primary font-light">
              {t.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coaches.map((coach, index) => {
              const isPriority = index === 0
              return (
                <div 
                  key={coach.id} 
                  className="group flex flex-col cursor-pointer"
                  onClick={() => router.push(`/coaches/${coach.id}`)}
                  style={{ touchAction: 'manipulation' }}
                >
                  <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group overflow-hidden backdrop-blur-md flex-1 flex flex-col min-h-[400px]">
                    <div className="flex-1 flex flex-col">
                      <div className="aspect-square overflow-hidden relative bg-transparent bg-gradient-to-br from-gray-900 to-black">
                        <Image
                          src={coach.image || "/placeholder.svg"}
                          alt={`${coach.name} - Trener w klubie VOLAT`}
                          title={`${coach.name} - Trener w klubie VOLAT Warszawa`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
                          className="object-cover"
                          priority={isPriority}
                          loading={isPriority ? "eager" : "lazy"}
                          quality={isPriority ? 85 : 70}
                          placeholder="blur"
                          fetchPriority={isPriority ? "high" : "low"}
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                      <CardHeader className="p-6">
                        <CardTitle className="font-display text-xl text-white mb-3 font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-center">
                          {coach.name}
                        </CardTitle>
                        <div className="text-gray-300 text-sm leading-relaxed text-center px-2 line-clamp-2 font-medium min-h-[3rem]">
                          {coachShortDescriptions[coach.id]?.[currentLang] || coachShortDescriptions[coach.id]?.pl || ""}
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 flex-1 flex flex-col">
                        <div className="flex flex-col gap-3 mt-auto">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/coaches/${coach.id}`);
                            }}
                            className="w-full px-4 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl"
                            style={{ touchAction: 'manipulation' }}
                          >
                            {t.viewDetails}
                          </button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {t.whyOurCoaches}
            </h2>
            <p className="text-gray-400 text-lg font-accent mb-12 max-w-2xl mx-auto">
              {t.whyOurCoachesDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
