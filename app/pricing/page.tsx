"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

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

const translations = {
  pl: {
    title: "Cennik i systemy opłat",
    subtitle: "Wybierz plan treningowy dopasowany do Twoich potrzeb i budżetu",
    flexiblePayments: "Elastyczne płatności",
    noCommitments: "Bez zobowiązań",
    bestPrices: "Najlepsze ceny",
    mostPopular: "NAJPOPULARNIEJSZY",
    summer: "Lato",
    periodicalSubscription: "Abonament okresowy",
    periodicalDesc: "Dla osób trenujących regularnie",
    entryCards: "Karnet na liczbę wejść",
    entryCardsDesc: "Dla osób z nieregularnym grafikiem",
    gymAccess: "Samodzielne wejście na salę",
    gymAccessDesc: "Nielimitowane korzystanie z sal poza zajęciami grupowymi",
    monthly: "miesięcznie",
    validity: "Ważność",
    children: "Dzieci",
    adults: "Dorośli",
    haveQuestions: "Masz pytania dotyczące cennika?",
    haveQuestionsDesc: "Skontaktuj się z nami, aby uzyskać więcej informacji o naszych planach i promocjach. Chętnie pomożemy wybrać najlepszą opcję dla Ciebie!",
    contactUs: "Skontaktuj się z nami",
    callNow: "Zadzwoń teraz"
  },
  uk: {
    title: "Ціни та системи оплати",
    subtitle: "Оберіть план тренувань, що відповідає вашим потребам та бюджету",
    flexiblePayments: "Гнучкі платежі",
    noCommitments: "Без зобов'язань",
    bestPrices: "Найкращі ціни",
    mostPopular: "НАЙПОПУЛЯРНІШИЙ",
    summer: "Літо",
    periodicalSubscription: "Періодична підписка",
    periodicalDesc: "Для осіб, які регулярно тренуються",
    entryCards: "Абонемент на кількість відвідувань",
    entryCardsDesc: "Для осіб з нерегулярним розкладом",
    gymAccess: "Самостійний доступ до залу",
    gymAccessDesc: "Необмежене використання залів поза груповими заняттями",
    monthly: "місяць",
    validity: "Дійсність",
    children: "Діти",
    adults: "Дорослі",
    haveQuestions: "Є питання щодо цін?",
    haveQuestionsDesc: "Зв'яжіться з нами, щоб дізнатися більше про наші плани та акції. Ми з радістю допоможемо вибрати найкращий варіант для вас!",
    contactUs: "Зв'яжіться з нами",
    callNow: "Зателефонуйте зараз"
  },
  en: {
    title: "Pricing and Payment Systems",
    subtitle: "Choose a training plan that fits your needs and budget",
    flexiblePayments: "Flexible payments",
    noCommitments: "No commitments",
    bestPrices: "Best prices",
    mostPopular: "MOST POPULAR",
    summer: "Summer",
    periodicalSubscription: "Periodical Subscription",
    periodicalDesc: "For people training regularly",
    entryCards: "Entry Cards",
    entryCardsDesc: "For people with irregular schedule",
    gymAccess: "Gym Access",
    gymAccessDesc: "Unlimited use of halls outside group classes",
    monthly: "monthly",
    validity: "Validity",
    children: "Children",
    adults: "Adults",
    haveQuestions: "Have questions about pricing?",
    haveQuestionsDesc: "Contact us to learn more about our plans and promotions. We'll be happy to help you choose the best option!",
    contactUs: "Contact us",
    callNow: "Call now"
  },
  by: {
    title: "Цэны і сістэмы аплаты",
    subtitle: "Абярыце план трэніровак, які адпавядае вашым патрэбам і бюджэту",
    flexiblePayments: "Гнуткія плацяжы",
    noCommitments: "Без абавязкаў",
    bestPrices: "Найлепшыя цэны",
    mostPopular: "НАЙПАПУЛЯРНЕЙШЫ",
    summer: "Лета",
    periodicalSubscription: "Перыядычная падпіска",
    periodicalDesc: "Для асоб, якія рэгулярна трэніруюцца",
    entryCards: "Абанемент на колькасць наведванняў",
    entryCardsDesc: "Для асоб з нерэгулярным раскладам",
    gymAccess: "Самастойны доступ да залы",
    gymAccessDesc: "Неабмежаванае выкарыстанне зал па-за групавымі заняткамі",
    monthly: "месяц",
    validity: "Тэрмін дзеяння",
    children: "Дзеці",
    adults: "Дарослыя",
    haveQuestions: "Ёсць пытанні адносна цэн?",
    haveQuestionsDesc: "Звяжыцеся з намі, каб даведацца больш пра нашы планы і акцыі. Мы з радасцю дапаможам выбраць найлепшы варыянт для вас!",
    contactUs: "Звяжыцеся з намі",
    callNow: "Патэлефануйце зараз"
  }
}

// Helper function to translate period text
const translatePeriod = (period: string, lang: string): string => {
  const periodMap: Record<string, Record<string, string>> = {
    "za 2 tygodnie": {
      uk: "за 2 тижні",
      en: "for 2 weeks",
      by: "за 2 тыдні",
      pl: "za 2 tygodnie"
    },
    "za 1 miesiąc": {
      uk: "за 1 місяць",
      en: "for 1 month",
      by: "за 1 месяц",
      pl: "za 1 miesiąc"
    },
    "za 3 miesiące": {
      uk: "за 3 місяці",
      en: "for 3 months",
      by: "за 3 месяцы",
      pl: "za 3 miesiące"
    },
    "za 6 miesięcy": {
      uk: "за 6 місяців",
      en: "for 6 months",
      by: "за 6 месяцаў",
      pl: "za 6 miesięcy"
    }
  }
  return periodMap[period]?.[lang] || period
}

// Helper function to translate validity
const translateValidity = (validity: string, lang: string): string => {
  const validityMap: Record<string, Record<string, string>> = {
    "1 mies.": {
      uk: "1 міс.",
      en: "1 mo.",
      by: "1 мес.",
      pl: "1 mies."
    },
    "2 mies.": {
      uk: "2 міс.",
      en: "2 mo.",
      by: "2 мес.",
      pl: "2 mies."
    },
    "3 mies.": {
      uk: "3 міс.",
      en: "3 mo.",
      by: "3 мес.",
      pl: "3 mies."
    }
  }
  return validityMap[validity]?.[lang] || validity
}

export default function PricingPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black">

      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-accent font-light mb-8">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-primary">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                <span>{t.flexiblePayments}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                <span>{t.noCommitments}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                <span>{t.bestPrices}</span>
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
                    {t.mostPopular}
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
                    <span className="text-gray-400 text-lg font-accent">{plan.period === "miesięcznie" ? t.monthly : plan.period}</span>
                    {plan.summerPrice && (
                      <div className="mt-2">
                        <span className="text-red-400 text-sm font-accent">{t.summer}: {plan.summerPrice} zł {currentLang === "uk" ? "(липень/серпень)" : currentLang === "en" ? "(July/August)" : currentLang === "by" ? "(ліпень/жнівень)" : "(lipiec/sierpień)"}</span>
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

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`w-full px-6 py-3 rounded-xl text-sm font-accent font-medium ${
                        plan.popular
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-500/25"
                          : "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border border-gray-600 shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </a>
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
                {t.periodicalSubscription}
              </h2>
              <p className="text-gray-400 text-lg font-accent">{t.periodicalDesc}</p>
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
                        <span className="text-gray-400 text-xs font-accent">{t.children}</span>
                      </div>
                      <div>
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {plan.adultsPrice}
                          </span>
                          <span className="text-gray-400 text-sm ml-1 font-accent">zł</span>
                        </div>
                        <span className="text-gray-400 text-xs font-accent">{t.adults}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-accent block">{translatePeriod(plan.period, currentLang)}</span>
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
                {t.entryCards}
              </h2>
              <p className="text-gray-400 text-lg font-accent">{t.entryCardsDesc}</p>
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
                        <span className="text-red-400 text-xs font-accent block mt-1">{t.validity}: {translateValidity(card.validity, currentLang)}</span>
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
                {t.gymAccess}
              </h2>
              <p className="text-gray-400 text-lg font-accent">{t.gymAccessDesc}</p>
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
                        <span className="text-red-400 text-xs font-accent block mt-1">{t.validity}: {translateValidity(access.validity, currentLang)}</span>
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
                {t.haveQuestions}
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-primary">
                {t.haveQuestionsDesc}
              </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 text-sm px-6 py-3 rounded-xl font-accent font-medium shadow-lg hover:shadow-red-500/25">
                        {t.contactUs}
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => window.open("tel:+48733451982", "_self")}
                      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 text-sm px-6 py-3 rounded-xl font-accent font-medium border border-gray-600 shadow-lg hover:shadow-xl"
                    >
                      {t.callNow}
                    </Button>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

