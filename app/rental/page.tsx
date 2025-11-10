"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { lazy, Suspense } from "react"
import Link from "next/link"

const Footer = lazy(() => import("@/components/footer"))

const translations = {
  pl: {
    title: "Wynajem Sal",
    subtitle: "Wynajmij nasze profesjonalne sale treningowe",
    description: "Oferujemy wynajem sal treningowych w dwóch lokalizacjach: Mokotów i Praga Północ. Idealne miejsce na treningi, zajęcia sportowe, warsztaty i inne wydarzenia.",
    contact: "Skontaktuj się z nami",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    mokotow: {
      title: "VOLAT Mokotów",
      address: "ul. Artura Malawskiego 6, Warszawa",
      rooms: "Duża sala i Mała sala",
      facilities: "Szatnie, prysznice, parking",
    },
    praga: {
      title: "VOLAT Praga Północ",
      address: "ul. Kowieńska 12/20, Warszawa",
      rooms: "Sala treningowa",
      facilities: "Szatnie, prysznice, recepcja",
    },
    conditions: {
      title: "Warunki wynajmu",
      text: "Szczegóły dotyczące wynajmu sal, cen i dostępności prosimy uzgodnić telefonicznie lub mailowo.",
    },
  },
  uk: {
    title: "Оренда залів",
    subtitle: "Орендуйте наші професійні тренувальні зали",
    description: "Пропонуємо оренду тренувальних залів у двох локаціях: Мокотув і Прага Північна. Ідеальне місце для тренувань, спортивних занять, майстер-класів та інших подій.",
    contact: "Зв'яжіться з нами",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    mokotow: {
      title: "VOLAT Мокотув",
      address: "вул. Artura Malawskiego 6, Варшава",
      rooms: "Велика зала і Мала зала",
      facilities: "Роздягальні, душові, парковка",
    },
    praga: {
      title: "VOLAT Прага Північна",
      address: "вул. Kowieńska 12/20, Варшава",
      rooms: "Тренувальна зала",
      facilities: "Роздягальні, душові, рецепція",
    },
    conditions: {
      title: "Умови оренди",
      text: "Деталі щодо оренди залів, цін та доступності просимо узгодити телефоном або електронною поштою.",
    },
  },
  en: {
    title: "Hall Rental",
    subtitle: "Rent our professional training halls",
    description: "We offer rental of training halls in two locations: Mokotów and Praga Północ. Perfect place for training, sports activities, workshops and other events.",
    contact: "Contact us",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    mokotow: {
      title: "VOLAT Mokotów",
      address: "ul. Artura Malawskiego 6, Warszawa",
      rooms: "Large hall and Small hall",
      facilities: "Changing rooms, showers, parking",
    },
    praga: {
      title: "VOLAT Praga Północ",
      address: "ul. Kowieńska 12/20, Warszawa",
      rooms: "Training hall",
      facilities: "Changing rooms, showers, reception",
    },
    conditions: {
      title: "Rental conditions",
      text: "Details regarding hall rental, prices and availability please arrange by phone or email.",
    },
  },
  by: {
    title: "Аренда залаў",
    subtitle: "Арендуйце нашы прафесійныя трэніровачныя залы",
    description: "Прапануем арэнду трэніровачных залаў у двух лакацыях: Мокотув і Прага Паўночная. Ідэальнае месца для трэніровак, спартыўных заняткаў, майстар-класаў і іншых падзей.",
    contact: "Звяжыцеся з намі",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    mokotow: {
      title: "VOLAT Мокотув",
      address: "вул. Artura Malawskiego 6, Варшава",
      rooms: "Вялікая зала і Малая зала",
      facilities: "Раздзявальні, душавыя, паркоўка",
    },
    praga: {
      title: "VOLAT Прага Паўночная",
      address: "вул. Kowieńska 12/20, Варшава",
      rooms: "Трэніровачная зала",
      facilities: "Раздзявальні, душавыя, рэцэпцыя",
    },
    conditions: {
      title: "Умовы арэнды",
      text: "Дэталі адносна арэнды залаў, коштаў і даступнасці просім узгадніць тэлефонам або электроннай поштай.",
    },
  },
}

export default function RentalPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Building2 className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{t.subtitle}</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.mokotow.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{t.mokotow.address}</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Sale:</p>
                  <p className="text-gray-300">{t.mokotow.rooms}</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Udogodnienia:</p>
                  <p className="text-gray-300">{t.mokotow.facilities}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.praga.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{t.praga.address}</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Sale:</p>
                  <p className="text-gray-300">{t.praga.rooms}</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Udogodnienia:</p>
                  <p className="text-gray-300">{t.praga.facilities}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{t.conditions.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{t.conditions.text}</p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-6 text-lg">
                {t.contact}
              </Button>
            </Link>
            <a href={`tel:${t.phone}`}>
              <Button variant="outline" className="w-full sm:w-auto border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                {t.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

