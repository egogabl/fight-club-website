"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const scheduleData = [
  // Понедельник / Среда / Пятница
  {
    day: "Poniedziałek",
    time: "17:30-18:15",
    discipline: "Тренинг моторики VolatMOVE Kids",
    location: "Mokotów",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Poniedziałek",
    time: "18:15-19:15",
    discipline: "Дзюдо",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "judo",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Poniedziałek",
    time: "19:30-20:30",
    discipline: "Тренинг моторики и функциональный",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Środa",
    time: "17:30-18:15",
    discipline: "Тренинг моторики VolatMOVE Kids",
    location: "Mokotów",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Środa",
    time: "18:15-19:15",
    discipline: "Дзюдо",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "judo",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Środa",
    time: "19:30-20:30",
    discipline: "Тренинг моторики и функциональный",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Piątek",
    time: "17:30-18:15",
    discipline: "Тренинг моторики VolatMOVE Kids",
    location: "Mokotów",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Piątek",
    time: "18:15-19:15",
    discipline: "Дзюдо",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "judo",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Piątek",
    time: "19:30-20:30",
    discipline: "Тренинг моторики и функциональный",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  // Дополнительно в пятницу
  {
    day: "Piątek",
    time: "20:30-22:00",
    discipline: "ММА",
    location: "Mokotów",
    coach: { name: "Paweł Szymkowicz", slug: "pawel-szymkowicz" },
    sport: "mma",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Piątek",
    time: "20:30-22:00",
    discipline: "Каратэ",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dorosli",
  },

  // Вторник / Четверг
  {
    day: "Wtorek",
    time: "16:00-17:15",
    discipline: "Каратэ (2-й год обучения)",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Wtorek",
    time: "17:15-18:15",
    discipline: "Каратэ (1-й год обучения)",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Wtorek",
    time: "18:15-19:15",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Mikoła Taczyliń", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Wtorek",
    time: "19:15-20:45",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Mikoła Taczyliń", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Wtorek",
    time: "20:45-22:00",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Mikoła Taczyliń", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dorosli",
  },
  {
    day: "Wtorek",
    time: "17:15-18:15",
    discipline: "Каратэ (дети 10+, начинающие)",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Wtorek",
    time: "18:15-19:15",
    discipline: "Тренинг моторики VolatMOVE Junior",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Wtorek",
    time: "19:15-20:20",
    discipline: "Тренинг моторики VolatMOVE Junior",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Czwartek",
    time: "16:00-17:15",
    discipline: "Каратэ (2-й год обучения)",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Czwartek",
    time: "17:15-18:15",
    discipline: "Каратэ (1-й год обучения)",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Czwartek",
    time: "18:15-19:15",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Mikoła Taczyliń", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Czwartek",
    time: "19:15-20:45",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Mikoła Taczyliń", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Czwartek",
    time: "20:45-22:00",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Mikoła Taczyliń", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dorosli",
  },
  {
    day: "Czwartek",
    time: "17:15-18:15",
    discipline: "Каратэ (дети 10+, начинающие)",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Czwartek",
    time: "18:15-19:15",
    discipline: "Тренинг моторики VolatMOVE Junior",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Czwartek",
    time: "19:15-20:20",
    discipline: "Тренинг моторики VolatMOVE Junior",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },

  // Суббота
  {
    day: "Sobota",
    time: "10:00-11:00",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Mikoła Taczyliń", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Sobota",
    time: "11:00-12:30",
    discipline: "Муай Тай / Кикбоксинг",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Sobota",
    time: "12:30-13:30",
    discipline: "Каратэ (1-й год обучения)",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Sobota",
    time: "13:30-15:00",
    discipline: "Каратэ (2-й год обучения)",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Sobota",
    time: "15:00-17:00",
    discipline: "Каратэ (группа спортивная)",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Sobota",
    time: "10:00-11:20",
    discipline: "Тренинг моторики VolatMOVE Junior",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
  },
  {
    day: "Sobota",
    time: "11:20-12:25",
    discipline: "Тренинг моторики VolatMOVE Junior",
    location: "Mokotów",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
  {
    day: "Sobota",
    time: "12:30-13:30",
    discipline: "Каратэ (дети 10+, начинающие)",
    location: "Mokotów",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
  },
]

const translations = {
  pl: {
    title: "Rozkład zajęć",
    subtitle: "Wybierz filię, sport i grupę wiekową",
    mokotow: "Mokotów",
    praga: "Praga Północ",
    allSports: "Wszystkie sporty",
    allAges: "Wszystkie grupy",
    filteredByCoach: "Filtrowane przez trenera",
    bookClass: "Zapisz się na zajęcia",
    backToSchedule: "Powrót do rozkładu",
    noClassesFound: "Nie znaleziono zajęć dla wybranych filtrów",
    ageGroups: {
      dzieci: "Dzieci",
      mlodziez: "Młodzież",
      dorosli: "Dorośli",
      wszystkie: "Wszystkie grupy",
    },
  },
  en: {
    title: "Schedule",
    subtitle: "Choose branch, sport and age group",
    mokotow: "Mokotów",
    praga: "Praga Północ",
    allSports: "All sports",
    allAges: "All groups",
    filteredByCoach: "Filtered by coach",
    bookClass: "Book class",
    backToSchedule: "Back to schedule",
    noClassesFound: "No classes found for selected filters",
    ageGroups: {
      dzieci: "Children",
      mlodziez: "Youth",
      dorosli: "Adults",
      wszystkie: "All groups",
    },
  },
}

export default function SchedulePage() {
  const [selectedBranch, setSelectedBranch] = useState("mokotow")
  const [selectedSport, setSelectedSport] = useState("wszystkie")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("wszystkie")
  const [language, setLanguage] = useState("pl")
  const searchParams = useSearchParams()

  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    const coachSlug = searchParams.get("coach")
    if (coachSlug) {
      const coachData = scheduleData.find(item => item.coach.slug === coachSlug)
      if (coachData) {
        setSelectedBranch(coachData.branch)
        setSelectedSport(coachData.sport)
        setSelectedAgeGroup(coachData.ageGroup)
      }
    }
  }, [searchParams])

  const filteredSchedule = scheduleData.filter(item => {
    const branchMatch = selectedBranch === "wszystkie" || item.branch === selectedBranch
    const sportMatch = selectedSport === "wszystkie" || item.sport === selectedSport
    const ageMatch = selectedAgeGroup === "wszystkie" || item.ageGroup === selectedAgeGroup
    return branchMatch && sportMatch && ageMatch
  })

  const groupedSchedule = filteredSchedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = []
    }
    acc[item.day].push(item)
    return acc
  }, {} as Record<string, typeof scheduleData>)

  const daysOrder = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            {t.subtitle}
          </p>
        </div>

        {searchParams.get("coach") && (
          <div className="text-center mb-6">
            <Badge className="bg-red-600 text-white px-6 py-3 text-lg">{t.filteredByCoach}</Badge>
          </div>
        )}

        <div className="flex justify-center gap-4 sm:gap-6 mb-10 flex-wrap">
          <button
            onClick={() => setSelectedBranch("mokotow")}
            className={`px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-accent text-lg sm:text-xl border-2 shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap ${
              selectedBranch === "mokotow"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-black border-red-400 text-red-300 hover:bg-red-600 hover:text-white font-bold hover:border-red-500"
            }`}
          >
            📍 {t.mokotow}
          </button>
          <button
            onClick={() => setSelectedBranch("praga")}
            className={`px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-accent text-lg sm:text-xl border-2 shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap ${
              selectedBranch === "praga"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-black border-red-400 text-red-300 hover:bg-red-600 hover:text-white font-bold hover:border-red-500"
            }`}
          >
            📍 {t.praga}
          </button>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          <Button
            onClick={() => setSelectedSport("wszystkie")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "wszystkie"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            {t.allSports}
          </Button>
          <Button
            onClick={() => setSelectedSport("karate")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "karate"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥋 Karate
          </Button>
          <Button
            onClick={() => setSelectedSport("muaythai")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "muaythai"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥊 Muay Thai
          </Button>
          <Button
            onClick={() => setSelectedSport("mma")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "mma"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥋 MMA
          </Button>
          <Button
            onClick={() => setSelectedSport("judo")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "judo"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥋 Judo
          </Button>
          <Button
            onClick={() => setSelectedSport("motoryka")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "motoryka"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🏃 Motoryka
          </Button>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          <Button
            onClick={() => setSelectedAgeGroup("wszystkie")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "wszystkie"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            {t.allAges}
          </Button>
          <Button
            onClick={() => setSelectedAgeGroup("dzieci")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "dzieci"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            👶 {t.ageGroups.dzieci}
          </Button>
          <Button
            onClick={() => setSelectedAgeGroup("mlodziez")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "mlodziez"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🧑 {t.ageGroups.mlodziez}
          </Button>
          <Button
            onClick={() => setSelectedAgeGroup("dorosli")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "dorosli"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            👨 {t.ageGroups.dorosli}
          </Button>
        </div>

        {Object.keys(groupedSchedule).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">{t.noClassesFound}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {daysOrder.map(day => {
              if (!groupedSchedule[day]) return null
              
              return (
                <div key={day} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    {day}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupedSchedule[day].map((item, index) => (
                      <Card key={index} className="bg-gray-900 border-gray-700 flex flex-col min-h-[200px]">
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Clock className="h-5 w-5 text-red-500" />
                            <span className="font-bold text-lg">{item.time}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {item.discipline}
                          </h3>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300">{item.location}</span>
                          </div>
                          
                          <div className="mb-4">
                            <Badge className="bg-red-600 text-white">
                              {item.coach.name}
                            </Badge>
                          </div>
                          
                          <div className="flex gap-2 mb-4">
                            <Badge variant="outline" className="border-red-500 text-red-500">
                              {item.sport === "karate" && "🥋 Karate"}
                              {item.sport === "muaythai" && "🥊 Muay Thai"}
                              {item.sport === "mma" && "🥋 MMA"}
                              {item.sport === "judo" && "🥋 Judo"}
                              {item.sport === "motoryka" && "🏃 Motoryka"}
                              {item.sport === "szachy" && "♟️ Szachy"}
                            </Badge>
                            <Badge variant="outline" className="border-blue-500 text-blue-500">
                              {t.ageGroups[item.ageGroup as keyof typeof t.ageGroups]}
                            </Badge>
                          </div>
                          
                          <div className="mt-auto">
                            <Link href={`/booking?coach=${item.coach.slug}&time=${item.time}&day=${item.day}`}>
                              <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold">
                                {t.bookClass}
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}
