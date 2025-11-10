"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Snowflake, Calendar, MapPin, Users, Trophy, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { lazy, Suspense } from "react"
import Link from "next/link"

const Footer = lazy(() => import("@/components/footer"))

const translations = {
  pl: {
    title: "Volat Winter Power Camp 2026",
    subtitle: "Sportowy obóz zimowy dla dzieci i młodzieży",
    description: "Zapraszamy na wyjątkowy zimowy obóz sportowy Volat Winter Power Camp 2026! Intensywne treningi karate, zajęcia sportowe, edukacyjne i integracyjne w jednym miejscu.",
    registration: "Rejestracja",
    contact: "Skontaktuj się z nami",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    features: {
      title: "Co oferujemy",
      training: "Intensywne treningi karate",
      sports: "Zajęcia sportowe i rekreacyjne",
      education: "Program edukacyjny",
      integration: "Zajęcia integracyjne",
      accommodation: "Zakwaterowanie i wyżywienie",
      supervision: "Opieka doświadczonych trenerów",
    },
    program: {
      title: "Program obozu",
      morning: "Poranne treningi karate",
      afternoon: "Zajęcia sportowe i rekreacyjne",
      evening: "Zajęcia edukacyjne i integracyjne",
    },
    dates: {
      title: "Terminy",
      comingSoon: "Szczegóły wkrótce",
    },
  },
  uk: {
    title: "Volat Winter Power Camp 2026",
    subtitle: "Спортивний зимовий табір для дітей та молоді",
    description: "Запрошуємо на унікальний зимовий спортивний табір Volat Winter Power Camp 2026! Інтенсивні тренування з карате, спортивні, освітні та інтеграційні заняття в одному місці.",
    registration: "Реєстрація",
    contact: "Зв'яжіться з нами",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    features: {
      title: "Що ми пропонуємо",
      training: "Інтенсивні тренування з карате",
      sports: "Спортивні та рекреаційні заняття",
      education: "Освітня програма",
      integration: "Інтеграційні заняття",
      accommodation: "Проживання та харчування",
      supervision: "Догляд досвідчених тренерів",
    },
    program: {
      title: "Програма табору",
      morning: "Ранкові тренування з карате",
      afternoon: "Спортивні та рекреаційні заняття",
      evening: "Освітні та інтеграційні заняття",
    },
    dates: {
      title: "Терміни",
      comingSoon: "Деталі незабаром",
    },
  },
  en: {
    title: "Volat Winter Power Camp 2026",
    subtitle: "Winter sports camp for children and youth",
    description: "Join us for a unique winter sports camp Volat Winter Power Camp 2026! Intensive karate training, sports, educational and integration activities all in one place.",
    registration: "Registration",
    contact: "Contact us",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    features: {
      title: "What we offer",
      training: "Intensive karate training",
      sports: "Sports and recreational activities",
      education: "Educational program",
      integration: "Integration activities",
      accommodation: "Accommodation and meals",
      supervision: "Supervision by experienced trainers",
    },
    program: {
      title: "Camp program",
      morning: "Morning karate training",
      afternoon: "Sports and recreational activities",
      evening: "Educational and integration activities",
    },
    dates: {
      title: "Dates",
      comingSoon: "Details coming soon",
    },
  },
  by: {
    title: "Volat Winter Power Camp 2026",
    subtitle: "Спартыўны зімовы лагер для дзяцей і моладзі",
    description: "Запрашаем на унікальны зімовы спартыўны лагер Volat Winter Power Camp 2026! Інтэнсіўныя трэніроўкі па каратэ, спартыўныя, адукацыйныя і інтэграцыйныя заняткі ў адным месцы.",
    registration: "Рэгістрацыя",
    contact: "Звяжыцеся з намі",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    features: {
      title: "Што мы прапануем",
      training: "Інтэнсіўныя трэніроўкі па каратэ",
      sports: "Спартыўныя і рэкреацыйныя заняткі",
      education: "Адукацыйная праграма",
      integration: "Інтэграцыйныя заняткі",
      accommodation: "Пражыванне і харчаванне",
      supervision: "Догляд вопытных трэнераў",
    },
    program: {
      title: "Праграма лагера",
      morning: "Ранковыя трэніроўкі па каратэ",
      afternoon: "Спартыўныя і рэкреацыйныя заняткі",
      evening: "Адукацыйныя і інтэграцыйныя заняткі",
    },
    dates: {
      title: "Тэрміны",
      comingSoon: "Дэталі хутка",
    },
  },
}

export default function WinterCampPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Snowflake className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{t.subtitle}</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.description}</p>
          </div>

          <Card className="bg-gray-900 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{t.features.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Trophy className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.features.training}</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.features.sports}</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.features.education}</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.features.integration}</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.features.accommodation}</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.features.supervision}</h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{t.dates.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg">{t.dates.comingSoon}</p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-6 text-lg">
                {t.registration}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-6 text-lg">
                {t.contact}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

