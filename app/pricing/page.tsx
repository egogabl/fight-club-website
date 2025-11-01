"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Program Klubu VOLAT - Dzieci",
    price: "220",
    period: "miesięcznie",
    summerPrice: "110",
    description: "Nieograniczone zajęcia w jednej wybranej sekcji",
    features: [
      "Nieograniczone zajęcia w jednej sekcji",
      "Płatność do 10 dnia miesiąca",
      "Obowiązuje niezależnie od obecności",
      "Zniżki na merch i sprzęt klubowy",
      "Zniżki na obozy i turnieje",
      "Zniżki na zajęcia edukacyjne",
      "Zniżka rodzinna: 200 zł/miesiąc za każde dziecko",
      "Zniżka wakacyjna: 50% (lipiec/sierpień)"
    ],
    icon: Star,
    popular: false,
    buttonText: "Wybierz program dla dzieci",
  },
  {
    name: "Program Klubu VOLAT - Dorośli",
    price: "280",
    period: "miesięcznie",
    summerPrice: "140",
    description: "Nieograniczone zajęcia w jednej wybranej sekcji",
    features: [
      "Nieograniczone zajęcia w jednej sekcji",
      "Płatność do 10 dnia miesiąca",
      "Obowiązuje niezależnie od obecności",
      "Zniżki na merch i sprzęt klubowy",
      "Zniżki na obozy i turnieje",
      "Zniżki na zajęcia edukacyjne",
      "Zniżka wakacyjna: 50% (lipiec/sierpień)"
    ],
    icon: Crown,
    popular: true,
    buttonText: "Wybierz program dla dorosłych",
  },
]

const periodPlans = [
  {
    name: "Abonament okresowy - 2 tygodnie",
    childrenPrice: "180",
    adultsPrice: "200",
    period: "za 2 tygodnie",
    description: "Nieograniczone zajęcia w jednej sekcji",
  },
  {
    name: "Abonament okresowy - 1 miesiąc",
    childrenPrice: "240",
    adultsPrice: "300",
    period: "za 1 miesiąc",
    description: "Nieograniczone zajęcia w jednej sekcji",
  },
  {
    name: "Abonament okresowy - 3 miesiące",
    childrenPrice: "660",
    adultsPrice: "850",
    period: "za 3 miesiące",
    description: "Nieograniczone zajęcia w jednej sekcji",
  },
  {
    name: "Abonament okresowy - 6 miesięcy",
    childrenPrice: "1200",
    adultsPrice: "1600",
    period: "za 6 miesięcy",
    description: "Nieograniczone zajęcia w jednej sekcji",
  },
]

const entryCards = [
  {
    name: "Karnet na liczbę wejść - 1 wejście",
    price: "60",
    period: "za 1 wejście",
    validity: "",
    description: "Jednorazowe wejście",
  },
  {
    name: "Karnet na liczbę wejść - 2 wejścia",
    price: "115",
    period: "za 2 wejścia",
    validity: "1 mies.",
    description: "Można przychodzić dowolnie",
  },
  {
    name: "Karnet na liczbę wejść - 4 wejścia",
    price: "200",
    period: "za 4 wejścia",
    validity: "1 mies.",
    description: "Można przychodzić dowolnie",
  },
  {
    name: "Karnet na liczbę wejść - 8 wejść",
    price: "360",
    period: "za 8 wejść",
    validity: "2 mies.",
    description: "Idealne dla elastycznego grafiku",
  },
  {
    name: "Karnet na liczbę wejść - 12 wejść",
    price: "480",
    period: "za 12 wejść",
    validity: "3 mies.",
    description: "Najlepszy wybór dla nieregularnego grafiku",
  },
]

const gymAccess = [
  {
    name: "Samodzielne wejście na salę - 1 wejście",
    price: "30",
    period: "za 1 wejście",
    validity: "",
    description: "Nielimitowane korzystanie z sal w czasie wolnym",
  },
  {
    name: "Samodzielne wejście na salę - miesięczne",
    price: "130",
    period: "miesięcznie",
    validity: "1 mies.",
    description: "Nielimitowany dostęp do sal poza zajęciami grupowymi",
  },
  {
    name: "Samodzielne wejście na salę - 10 wejść",
    price: "200",
    period: "za 10 wejść",
    validity: "3 mies.",
    description: "Idealne dla regularnego korzystania z sali",
  },
]

export default function PricingPage() {
  // Translations will be implemented fully later
  // For now, keeping hardcoded Polish text to avoid build errors

  return (
    <div className="min-h-screen bg-black">

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

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border transition-all duration-300 ${
                  plan.popular
                    ? "border-red-500 bg-gray-900 hover:shadow-lg hover:shadow-red-500/20"
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
                    {plan.summerPrice && (
                      <div className="mt-2">
                        <span className="text-red-400 text-sm font-accent">Lato: {plan.summerPrice} zł (lipiec/sierpień)</span>
                      </div>
                    )}
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
                      className={`w-full px-6 py-3 rounded-xl text-sm font-accent font-medium ${
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

          {/* Abonament okresowy */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Abonament okresowy
              </h2>
              <p className="text-gray-400 text-lg font-accent">Dla osób trenujących regularnie</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {periodPlans.map((plan, index) => (
                <Card
                  key={index}
                  className="border border-gray-700 rounded-lg bg-gray-900 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                >
                  <CardHeader className="p-6 text-center">
                    <CardTitle className="text-lg text-white mb-3 font-display font-semibold">{plan.name}</CardTitle>
                    <div className="mb-4 space-y-2">
                      <div>
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {plan.childrenPrice}
                          </span>
                          <span className="text-gray-400 text-sm ml-1 font-accent">zł</span>
                        </div>
                        <span className="text-gray-400 text-xs font-accent">Dzieci</span>
                      </div>
                      <div>
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {plan.adultsPrice}
                          </span>
                          <span className="text-gray-400 text-sm ml-1 font-accent">zł</span>
                        </div>
                        <span className="text-gray-400 text-xs font-accent">Dorośli</span>
                      </div>
                      <span className="text-gray-400 text-sm font-accent block">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-primary">{plan.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Karnet na liczbę wejść */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Karnet na liczbę wejść
              </h2>
              <p className="text-gray-400 text-lg font-accent">Dla osób z nieregularnym grafikiem</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entryCards.map((card, index) => (
                <Card
                  key={index}
                  className="border border-gray-700 rounded-lg bg-gray-900 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                >
                  <CardHeader className="p-6 text-center">
                    <CardTitle className="text-lg text-white mb-3 font-display font-semibold">{card.name}</CardTitle>
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                          {card.price}
                        </span>
                        <span className="text-gray-400 text-sm ml-1 font-accent">zł</span>
                      </div>
                      <span className="text-gray-400 text-sm font-accent">{card.period}</span>
                      {card.validity && (
                        <span className="text-red-400 text-xs font-accent block mt-1">Ważność: {card.validity}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-primary">{card.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Samodzielne wejście na salę */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Samodzielne wejście na salę
              </h2>
              <p className="text-gray-400 text-lg font-accent">Nielimitowane korzystanie z sal poza zajęciami grupowymi</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gymAccess.map((access, index) => (
                <Card
                  key={index}
                  className="border border-gray-700 rounded-lg bg-gray-900 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                >
                  <CardHeader className="p-6 text-center">
                    <CardTitle className="text-lg text-white mb-3 font-display font-semibold">{access.name}</CardTitle>
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                          {access.price}
                        </span>
                        <span className="text-gray-400 text-sm ml-1 font-accent">zł</span>
                      </div>
                      <span className="text-gray-400 text-sm font-accent">{access.period}</span>
                      {access.validity && (
                        <span className="text-red-400 text-xs font-accent block mt-1">Ważność: {access.validity}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-primary">{access.description}</p>
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
                      <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 text-sm px-6 py-3 rounded-xl font-accent font-medium shadow-lg hover:shadow-red-500/25">
                        Skontaktuj się z nami
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => window.open("tel:+48733451982", "_self")}
                      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 text-sm px-6 py-3 rounded-xl font-accent font-medium border border-gray-600 shadow-lg hover:shadow-xl"
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

