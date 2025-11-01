"use client"

import Footer from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const translations = {
  pl: {
    title: "Opinie uczniów",
    subtitle: "Zobacz, co mówią o nas nasi uczniowie i przekonaj się, dlaczego wybierają VOLAT",
    shareOpinion: "Podziel się swoją opinią!",
    shareOpinionDesc: "Twoja opinia jest dla nas bardzo ważna. Pomóż innym w podjęciu decyzji o rozpoczęciu treningów.",
    rateOnGoogle: "Oceń nas na Google",
    stats: {
      satisfiedStudents: "Zadowolonych uczniów",
      averageRating: "Średnia ocena",
      recommends: "Poleca znajomym",
      yearsExperience: "Lat doświadczenia",
    },
  },
  uk: {
    title: "Відгуки учнів",
    subtitle: "Подивіться, що кажуть про нас наші учні та переконайтеся, чому вони обирають VOLAT",
    shareOpinion: "Поділіться своєю думкою!",
    shareOpinionDesc: "Ваша думка дуже важлива для нас. Допоможіть іншим прийняти рішення про початок тренувань.",
    rateOnGoogle: "Оцініть нас на Google",
    stats: {
      satisfiedStudents: "Задоволених учнів",
      averageRating: "Середня оцінка",
      recommends: "Рекомендують друзям",
      yearsExperience: "Років досвіду",
    },
  },
  en: {
    title: "Student Reviews",
    subtitle: "See what our students say about us and discover why they choose VOLAT",
    shareOpinion: "Share your opinion!",
    shareOpinionDesc: "Your opinion is very important to us. Help others make a decision about starting training.",
    rateOnGoogle: "Rate us on Google",
    stats: {
      satisfiedStudents: "Satisfied students",
      averageRating: "Average rating",
      recommends: "Recommend to friends",
      yearsExperience: "Years of experience",
    },
  },
  by: {
    title: "Водгукі вучняў",
    subtitle: "Паглядзіце, што кажуць пра нас нашы вучні і пераканайцеся, чаму яны абіраюць VOLAT",
    shareOpinion: "Падзеліцеся сваёй думкай!",
    shareOpinionDesc: "Ваша думка вельмі важная для нас. Дапамажыце іншым прыняць рашэнне пра пачатак трэніровак.",
    rateOnGoogle: "Ацэньце нас на Google",
    stats: {
      satisfiedStudents: "Задаволеных вучняў",
      averageRating: "Сярэдняя ацэнка",
      recommends: "Рэкамендуюць сябрам",
      yearsExperience: "Гадоў вопыту",
    },
  },
}

interface Review {
  name: string
  rating: number
  sport: string
  date: string
  review: string
  avatar: string
}

const reviews: Review[] = [
  {
    name: "Marcin Kowalski",
    rating: 5,
    sport: "Karate WKF",
    date: "2 tygodnie temu",
    review:
      "Fantastyczne miejsce! Trener Vasiliy to prawdziwy profesjonalista. Po 6 miesiącach treningów czuję się znacznie silniejszy i pewniejszy siebie. Atmosfera w klubie jest niesamowita.",
    avatar: "MK",
  },
  {
    name: "Anna Nowak",
    rating: 5,
    sport: "Muay Thai",
    date: "1 miesiąc temu",
    review:
      "Treningi z Anną Kowalską to czysta przyjemność. Profesjonalne podejście, indywidualne uwagi i motywacja na najwyższym poziomie. Polecam każdemu, kto chce spróbować Muay Thai.",
    avatar: "AN",
  },
  {
    name: "Piotr Wiśniewski",
    rating: 5,
    sport: "MMA",
    date: "3 tygodnie temu",
    review:
      "Dmitri to legenda! Jego doświadczenie w MMA jest nieocenione. Nauka technik parterowych i rzutów na najwyższym poziomie. Klub ma świetne wyposażenie i atmosferę.",
    avatar: "PW",
  },
  {
    name: "Katarzyna Zielińska",
    rating: 5,
    sport: "Judo",
    date: "1 tydzień temu",
    review:
      "Moja córka trenuje judo u Dmitriego już od roku. Ogromny postęp w technice i dyscyplinie. Trener świetnie pracuje z dziećmi, polecam wszystkim rodzicom.",
    avatar: "KZ",
  },
  {
    name: "Tomasz Lewandowski",
    rating: 5,
    sport: "Karate WKF",
    date: "2 miesiące temu",
    review:
      "Po latach przerwy wróciłem do karate w VOLAT. Świetna organizacja, profesjonalni trenerzy i nowoczesne podejście do treningu. Czuję się jak w domu.",
    avatar: "TL",
  },
  {
    name: "Magdalena Król",
    rating: 5,
    sport: "Muay Thai",
    date: "3 tygodnie temu",
    review:
      "Najlepsze studio w Warszawie! Treningi są intensywne ale dostosowane do poziomu. Anna ma niesamowite podejście do uczniów. Atmosfera wspiera rozwój.",
    avatar: "MK",
  },
  {
    name: "Jakub Nowicki",
    rating: 5,
    sport: "MMA",
    date: "1 miesiąc temu",
    review:
      "Trenuje tutaj od 8 miesięcy i widzę ogromny postęp. Dmitri to mistrz swojego fachu. Techniki, które pokazuje, są na poziomie zawodowym. Gorąco polecam!",
    avatar: "JN",
  },
  {
    name: "Agnieszka Kowalczyk",
    rating: 5,
    sport: "Karate WKF",
    date: "2 tygodnie temu",
    review:
      "Wspaniałe miejsce dla całej rodziny. Syn trenuje karate, ja Muay Thai. Profesjonalna obsługa, czyste szatnie i świetna atmosfera. Polecam każdemu!",
    avatar: "AK",
  },
]

const stats = [
  { number: "500+", labelKey: "satisfiedStudents" },
  { number: "4.9/5", labelKey: "averageRating" },
  { number: "95%", labelKey: "recommends" },
  { number: "12", labelKey: "yearsExperience" },
]

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/VOLAT.+Centrum+Sportu+i+Edukacji.+Karate,+judo,+boks+tajski,+MMA,+treningi+dla+dzieci,+szachy,+matematyka,+angielski,+polski/@52.1898683,20.9914022,17z/data=!4m8!3m7!1s0x471933b1c567116f:0xf5e9de4956929baf!8m2!3d52.1898683!4d20.9914022!9m1!1b1!16s%2Fg%2F11l1k_5n96?entry=ttu"

export default function ReviewsPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black">
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl lg:text-7xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-8 tracking-tight">
              {t.title}
            </h1>
            <p className="text-2xl text-gray-300 font-serif max-w-3xl mx-auto font-light">
              {t.subtitle}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 backdrop-blur-md"
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-sans font-black bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-300 font-serif text-lg font-light">{t.stats[stat.labelKey as keyof typeof t.stats]}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group backdrop-blur-md"
                >
                  <CardHeader className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-2xl">
                        <span className="text-white font-sans font-bold text-lg">{review.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-sans text-xl text-gray-300 font-bold">{review.name}</h3>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="secondary" className="bg-red-600 text-white px-3 py-1 text-sm font-bold">
                            {review.sport}
                          </Badge>
                          <span className="text-gray-500 font-serif text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <div className="relative">
                      <Quote className="w-8 h-8 text-red-400 opacity-50 absolute -top-2 -left-2" />
                      <p className="text-gray-300 font-serif text-lg leading-relaxed font-light pl-6">{review.review}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gray-900 rounded-3xl p-8 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-2xl font-sans font-bold text-white mb-4">{t.shareOpinion}</h3>
              <p className="text-gray-300 font-serif text-lg mb-6">{t.shareOpinionDesc}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-serif text-lg px-8 py-3 rounded-2xl shadow-lg font-bold inline-block"
                >
                  {t.rateOnGoogle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}