"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

interface Coach {
  name: string
  image: string
}

interface CoachDetailPageClientProps {
  coachesData: Record<string, Coach>
}

const coachTranslations: Record<string, Record<string, any>> = {}

const translations = {
  pl: {
    backToCoaches: "Powrót do trenerów",
    achievements: "Osiągnięcia",
    upcomingSessions: "Najbliższe zajęcia trenera",
    viewFullSchedule: "Zobacz pełny rozkład trenera",
    bookNow: "Zapisz się na zajęcia",
    days: {
      Poniedziałek: "Poniedziałek",
      Wtorek: "Wtorek",
      Środa: "Środa",
      Czwartek: "Czwartek",
      Piątek: "Piątek",
      Sobota: "Sobota",
      Niedziela: "Niedziela",
    },
    locations: {
      "Mokotów": "Mokotów",
      "Praga": "Praga Północ",
      "Praga Północ": "Praga Północ",
    },
    disciplines: {} as Record<string, string>,
  },
  uk: {
    backToCoaches: "Повернутися до тренерів",
    achievements: "Досягнення",
    upcomingSessions: "Найближчі заняття тренера",
    viewFullSchedule: "Переглянути повний розклад тренера",
    bookNow: "Записатися на заняття",
    days: {
      Poniedziałek: "Понеділок",
      Wtorek: "Вівторок",
      Środa: "Середа",
      Czwartek: "Четвер",
      Piątek: "П'ятниця",
      Sobota: "Субота",
      Niedziela: "Неділя",
    },
    locations: {
      "Mokotów": "Мокотув",
      "Praga": "Прага Північна",
      "Praga Północ": "Прага Північна",
    },
    disciplines: {} as Record<string, string>,
  },
  en: {
    backToCoaches: "Back to coaches",
    achievements: "Achievements",
    upcomingSessions: "Coach's upcoming sessions",
    viewFullSchedule: "View full coach schedule",
    bookNow: "Book now",
    days: {
      Poniedziałek: "Monday",
      Wtorek: "Tuesday",
      Środa: "Wednesday",
      Czwartek: "Thursday",
      Piątek: "Friday",
      Sobota: "Saturday",
      Niedziela: "Sunday",
    },
    locations: {
      "Mokotów": "Mokotów",
      "Praga": "Praga Północ",
      "Praga Północ": "Praga Północ",
    },
    disciplines: {} as Record<string, string>,
  },
  by: {
    backToCoaches: "Вярнуцца да трэнераў",
    achievements: "Дасягненні",
    upcomingSessions: "Найбліжэйшыя заняткі трэнера",
    viewFullSchedule: "Паглядзець поўны расклад трэнера",
    bookNow: "Запісацца на заняткі",
    days: {
      Poniedziałek: "Панядзелак",
      Wtorek: "Аўторак",
      Środa: "Серада",
      Czwartek: "Чацвер",
      Piątek: "Пятніца",
      Sobota: "Субота",
      Niedziela: "Нядзеля",
    },
    locations: {
      "Mokotów": "Макотув",
      "Praga": "Прага Паўночная",
      "Praga Północ": "Прага Паўночная",
    },
    disciplines: {} as Record<string, string>,
  }
}

export default function CoachDetailPageClient({ coachesData }: CoachDetailPageClientProps) {
  const params = useParams()
  const slug = params.slug as string
  const coach = coachesData[slug as keyof typeof coachesData]
  const { currentLang } = useLanguage()
  const coachT = {
    specialty: "",
    experience: "",
    description: "",
    achievements: []
  }
  const t = translations[currentLang] || translations.pl

  if (!coach) {
    const { currentLang: errorLang } = useLanguage()
    const errorT = translations[errorLang] || translations.pl
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Trener nie znaleziony</h1>
          <Link href="/coaches">
            <Button className="bg-red-600 hover:bg-red-700">{errorT.backToCoaches}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="pt-28 sm:pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center lg:items-start">
              <div className="w-full max-w-md lg:max-w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl relative bg-transparent bg-gradient-to-br from-gray-900 to-black mx-auto">
                <Image
                  src={coach.image || "/placeholder.svg"}
                  alt={`${coach.name} - Trener w klubie VOLAT Warszawa`}
                  title={`${coach.name} - Trener w klubie VOLAT Warszawa`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 600px"
                  className="object-contain transition-opacity duration-300"
                  priority
                  loading="eager"
                  quality={85}
                  placeholder="blur"
                  fetchPriority="high"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              <div className="w-full space-y-8 text-center lg:text-left">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-4 break-words">
                    {coach.name}
                  </h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
