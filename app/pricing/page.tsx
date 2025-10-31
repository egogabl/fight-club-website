"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

const pricingPlans = [
  {
    name: "Program Klubu VOLAT - Dzieci",
    price: "220",
    period: "miesięcznie",
    description: "Nieograniczone zajęcia w jednej wybranej sekcji",
    features: [
      "Nieograniczone zajęcia w jednej sekcji",
      "Płatność do 10 dnia miesiąca",
      "Obowiązuje niezależnie od obecności",
      "Zniżki na merch i sprzęt klubowy",
      "Zniżki na obozy i turnieje",
      "Zniżki na zajęcia edukacyjne"
    ],
    icon: Star,
    popular: false,
    buttonText: "Wybierz program dla dzieci",
  },
  {
    name: "Program Klubu VOLAT - Dorośli",
    price: "280",
    period: "miesięcznie",
    description: "Najlepszy wybór dla regularnych treningów",
    features: [
      "Nieograniczone zajęcia w jednej sekcji",
      "Płatność do 10 dnia miesiąca",
      "Obowiązuje niezależnie od obecności",
      "Zniżki na merch i sprzęt klubowy",
      "Zniżki na obozy i turnieje",
      "Zniżki na zajęcia edukacyjne",
      "Zniżka rodzinna: 200 zł za dziecko"
    ],
    icon: Crown,
    popular: true,
    buttonText: "Wybierz program dla dorosłych",
  },
  {
    name: "Abonament 3 miesiące",
    price: "660",
    period: "za 3 miesiące",
    description: "Najlepszy wybór dla osób regularnych",
    features: [
      "Nieograniczone zajęcia w jednej sekcji",
      "Obowiązuje przez określony czas",
      "Najlepszy stosunek ceny do jakości",
      "Dostęp do wszystkich sekcji",
      "Priorytetowe rezerwacje"
    ],
    icon: Crown,
    popular: false,
    buttonText: "Wybierz abonament 3-miesięczny",
  },
]

const additionalServices = [
  {
    name: "Karnet na liczbę wejść - 4 wejścia",
    price: "200",
    period: "za 4 wejścia",
    description: "Ważność: 1 miesiąc, można przychodzić dowolnie",
  },
  {
    name: "Karnet na liczbę wejść - 8 wejść",
    price: "360",
    period: "za 8 wejść",
    description: "Ważność: 2 miesiące, idealne dla elastycznego grafiku",
  },
  {
    name: "Samodzielne wejście na salę",
    price: "35",
    period: "za wejście",
    description: "Nielimitowane korzystanie z sal sportowych i teoretycznych",
  },
  {
    name: "Wejście miesięczne na salę",
    price: "150",
    period: "miesięcznie",
    description: "Nielimitowany dostęp do sal poza zajęciami grupowymi",
  },
  {
    name: "Wakacyjna zniżka",
    price: "-50%",
    period: "2 miesiące",
    description: "Każdy uczestnik może wykorzystać dwa miesiące zniżki wakacyjnej",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Cennik i systemy opłat
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-accent font-light mb-8">
              Wybierz plan treningowy dopasowany do Twoich potrzeb i budżetu
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-primary">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                <span>Elastyczne płatności</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                <span>Bez zobowiązań</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                <span>Najlepsze ceny</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-red-500 bg-gray-900 hover:shadow-lg hover:shadow-red-500/20 scale-105"
                    : "border-gray-700 bg-gray-900 hover:border-gray-600 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 font-semibold text-sm">
                    NAJPOPULARNIEJSZY
                  </div>
                )}

                <CardHeader className={`p-8 text-center ${plan.popular ? "pt-12" : ""}`}>
                  <CardTitle className="text-2xl text-white mb-4 font-display font-bold leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-display font-bold bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-lg ml-2 font-accent">zł</span>
                    </div>
                    <span className="text-gray-400 text-lg font-accent">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-base font-primary font-light leading-relaxed">{plan.description}</p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed font-primary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/booking">
                    <Button
                      className={`w-full px-6 py-3 rounded-xl text-sm font-accent font-medium transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-500/25"
                          : "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border border-gray-600 shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gray-700"></div>
            <div className="mx-8 w-1 h-8 bg-red-500"></div>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Dodatkowe usługi
              </h2>
              <p className="text-gray-400 text-lg font-accent">Elastyczne opcje dla każdego</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="border border-gray-700 rounded-lg bg-gray-900 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                >
                  <CardHeader className="p-6 text-center">
                    <CardTitle className="text-lg text-white mb-3 font-display font-semibold">{service.name}</CardTitle>
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                          {service.price}
                        </span>
                        <span className="text-gray-400 text-sm ml-1 font-accent">zł</span>
                      </div>
                      <span className="text-gray-400 text-sm font-accent">{service.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-primary">{service.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg p-8 max-w-4xl mx-auto border border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Masz pytania dotyczące cennika?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-primary">
                Skontaktuj się z nami, aby uzyskać więcej informacji o naszych planach i promocjach. 
                Chętnie pomożemy wybrać najlepszą opcję dla Ciebie!
              </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 text-sm px-6 py-3 rounded-xl font-accent font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                        Skontaktuj się z nami
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => window.open("tel:+48733451982", "_self")}
                      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 text-sm px-6 py-3 rounded-xl font-accent font-medium transition-all duration-300 transform hover:scale-105 border border-gray-600 shadow-lg hover:shadow-xl"
                    >
                      Zadzwoń teraz
                    </Button>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
