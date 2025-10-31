import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const reviews = [
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
  { number: "500+", label: "Zadowolonych uczniów" },
  { number: "4.9/5", label: "Średnia ocena" },
  { number: "95%", label: "Poleca znajomym" },
  { number: "12", label: "Lat doświadczenia" },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl lg:text-7xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-8 tracking-tight">
              Opinie uczniów
            </h1>
            <p className="text-2xl text-gray-300 font-serif max-w-3xl mx-auto font-light">
              Zobacz, co mówią o nas nasi uczniowie i przekonaj się, dlaczego wybierają VOLAT
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 backdrop-blur-md"
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-sans font-black bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-300 font-serif text-lg font-light">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group backdrop-blur-md"
              >
                <CardHeader className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-125 transition-all duration-500 shadow-2xl">
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
              <h3 className="text-2xl font-sans font-bold text-white mb-4">Podziel się swoją opinią!</h3>
              <p className="text-gray-300 font-serif text-lg mb-6">
                Twoja opinia jest dla nas bardzo ważna. Pomóż innym w podjęciu decyzji o rozpoczęciu treningów.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.google.com/search?q=VOLAT+centrum+sportu+opinie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-serif text-lg px-8 py-3 rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-500 font-bold inline-block"
                >
                  Oceń nas na Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
