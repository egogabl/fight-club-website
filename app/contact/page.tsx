"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation, Car, Bus } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const locations = [
  {
    name: "VOLAT Mokotów",
    address: "ul. Artura Malawskiego 6, Warszawa",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    coordinates: "Mokotów, Warszawa",
    facilities: ["Sala treningowa", "Szatnie z prysznicami", "Parking", "Klimatyzacja"],
    transport: {
      metro: "Dostępne połączenia komunikacyjne",
      bus: "Linie autobusowe w okolicy",
      parking: "Parking dla klientów",
    },
  },
  {
    name: "VOLAT Praga Północ",
    address: "ul. Kowieńska 12/20, Warszawa",
    phone: "+48 733 451 982",
    email: "vasilvolkau@gmail.com",
    coordinates: "Praga Północ, Warszawa",
    facilities: ["Sala treningowa", "Szatnie z prysznicami", "Recepcja", "Klimatyzacja"],
    transport: {
      metro: "Dostępne połączenia komunikacyjne",
      bus: "Linie autobusowe w okolicy",
      parking: "Parking uliczny",
    },
  },
]

const translations = {
  pl: {
    title: "Kontakt",
    subtitle: "Skontaktuj się z nami i rozpocznij swoją przygodę ze sportami walki",
    description: "Mamy dwie lokalizacje w Warszawie - wybierz najbliższą dla Ciebie",
    facilities: "Udogodnienia",
    transport: "Dojazd",
    contactInfo: "Informacje kontaktowe",
    openingHours: "Godziny otwarcia",
    schedule: "Harmonogram",
    mainPhone: "Telefon główny",
    mainEmail: "Email główny",
    daily: "Codziennie 8:00 - 22:00",
    responseTime: "Odpowiadamy w ciągu 24h",
    contactAndPage: "Kontakt i Strona",
    phone: "Telefon",
    email: "E-mail",
    website: "Strona",
    mondayFriday: "Poniedziałek - Piątek",
    saturday: "Sobota",
    sunday: "Niedziela",
    bookTrialTraining: "Umów trening próbny",
    callNow: "Zadzwoń teraz",
    haveQuestions: "Masz pytania?",
    haveQuestionsDesc: "Nie wahaj się skontaktować z nami. Jesteśmy tutaj, aby pomóc Ci rozpocząć Twoją przygodę ze sportami walki.",
    sendEmail: "Napisz email",
    availableConnections: "Dostępne połączenia komunikacyjne",
    busLines: "Linie autobusowe w okolicy",
    clientParking: "Parking dla klientów",
    streetParking: "Parking uliczny"
  },
  uk: {
    title: "Контакти",
    subtitle: "Зв'яжіться з нами і почніть свою пригоду з бойовими мистецтвами",
    description: "У нас є дві локації у Варшаві - оберіть найближчу для вас",
    facilities: "Удобства",
    transport: "Доїзд",
    contactInfo: "Контактна інформація",
    openingHours: "Години роботи",
    schedule: "Розклад",
    mainPhone: "Головний телефон",
    mainEmail: "Головна електронна пошта",
    daily: "Щодня 8:00 - 22:00",
    responseTime: "Відповідаємо протягом 24 год",
    contactAndPage: "Контакт та Сторінка",
    phone: "Телефон",
    email: "Електронна пошта",
    website: "Сторінка",
    mondayFriday: "Понеділок - П'ятниця",
    saturday: "Субота",
    sunday: "Неділя",
    bookTrialTraining: "Записатися на пробне тренування",
    callNow: "Зателефонуйте зараз",
    haveQuestions: "Є питання?",
    haveQuestionsDesc: "Не вагайтеся зв'язатися з нами. Ми тут, щоб допомогти вам почати свою пригоду з бойовими мистецтвами.",
    sendEmail: "Написати email",
    availableConnections: "Доступні транспортні сполучення",
    busLines: "Автобусні маршрути поблизу",
    clientParking: "Парковка для клієнтів",
    streetParking: "Вулична парковка"
  },
  en: {
    title: "Contact",
    subtitle: "Contact us and start your martial arts adventure",
    description: "We have two locations in Warsaw - choose the nearest one for you",
    facilities: "Facilities",
    transport: "Transport",
    contactInfo: "Contact Information",
    openingHours: "Opening Hours",
    schedule: "Schedule",
    mainPhone: "Main Phone",
    mainEmail: "Main Email",
    daily: "Daily 8:00 - 22:00",
    responseTime: "We respond within 24h",
    contactAndPage: "Contact and Website",
    phone: "Phone",
    email: "E-mail",
    website: "Website",
    mondayFriday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    bookTrialTraining: "Book trial training",
    callNow: "Call now",
    haveQuestions: "Have questions?",
    haveQuestionsDesc: "Don't hesitate to contact us. We're here to help you start your martial arts adventure.",
    sendEmail: "Send email",
    availableConnections: "Available transport connections",
    busLines: "Bus lines in the area",
    clientParking: "Parking for clients",
    streetParking: "Street parking"
  },
  by: {
    title: "Кантакт",
    subtitle: "Звязацца з намі і пачаць сваю прыгоду з баявымі мастацтвамі",
    description: "У нас ёсць дзве лакацыі ў Варшаве - абярыце найбліжэйшую для вас",
    facilities: "Удобствы",
    transport: "Доезд",
    contactInfo: "Кантактная інфармацыя",
    openingHours: "Гадзіны працы",
    schedule: "Расклад",
    mainPhone: "Галоўны тэлефон",
    mainEmail: "Галоўная электронная пошта",
    daily: "Штодзень 8:00 - 22:00",
    responseTime: "Адказваем на працягу 24 гадзін",
    contactAndPage: "Кантакт і Старонка",
    phone: "Тэлефон",
    email: "Электронная пошта",
    website: "Старонка",
    mondayFriday: "Панядзелак - Пятніца",
    saturday: "Субота",
    sunday: "Нядзеля",
    bookTrialTraining: "Запісацца на пробнае трэніроўку",
    callNow: "Патэлефануйце зараз",
    haveQuestions: "Ёсць пытанні?",
    haveQuestionsDesc: "Не вагайцеся звязацца з намі. Мы тут, каб дапамагчы вам пачаць сваю прыгоду з баявымі мастацтвамі.",
    sendEmail: "Напісаць email",
    availableConnections: "Даступныя транспартныя злучэнні",
    busLines: "Аўтобусныя маршруты побач",
    clientParking: "Паркоўка для кліентаў",
    streetParking: "Вулічная паркоўка"
  }
}

export default function ContactPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  // Translations for facilities
  const facilitiesTranslations = {
    pl: ["Sala treningowa", "Szatnie z prysznicami", "Parking", "Klimatyzacja", "Recepcja"],
    uk: ["Тренувальний зал", "Роздягальні з душем", "Парковка", "Кондиціонер", "Рецепція"],
    en: ["Training hall", "Changing rooms with showers", "Parking", "Air conditioning", "Reception"],
    by: ["Трэнавальная зала", "Раздзявальні з душом", "Паркоўка", "Кандыцыянер", "Рэцэпцыя"]
  }

  return (
    <div className="min-h-screen bg-black">

      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-accent font-light mb-8">
              {t.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-primary font-light">
              {t.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group backdrop-blur-md"
              >
                <CardHeader className="p-8">
                  <CardTitle className="font-display text-2xl text-white mb-4 font-bold flex items-center gap-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    <MapPin className="w-6 h-6 text-red-400" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-300 text-lg mb-2 font-primary">{location.address}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Navigation className="w-4 h-4" />
                        <span className="font-primary">{location.coordinates}</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Phone className="w-5 h-5 text-red-400" />
                          <a
                            href={`tel:${location.phone}`}
                            className="text-gray-300 hover:text-red-400 transition-colors"
                          >
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-red-400" />
                          <a
                            href={`mailto:${location.email}`}
                            className="text-gray-300 hover:text-red-400 transition-colors"
                          >
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-red-400 font-sans font-semibold mb-3">{t.facilities}</h4>
                      <ul className="text-gray-400 text-sm space-y-1">
                        {location.facilities.map((facility, i) => {
                          const facilityMap: Record<string, Record<string, string>> = {
                            "Sala treningowa": { pl: "Sala treningowa", uk: "Тренувальний зал", en: "Training hall", by: "Трэнавальная зала" },
                            "Szatnie z prysznicami": { pl: "Szatnie z prysznicami", uk: "Роздягальні з душем", en: "Changing rooms with showers", by: "Раздзявальні з душом" },
                            "Parking": { pl: "Parking", uk: "Парковка", en: "Parking", by: "Паркоўка" },
                            "Klimatyzacja": { pl: "Klimatyzacja", uk: "Кондиціонер", en: "Air conditioning", by: "Кандыцыянер" },
                            "Recepcja": { pl: "Recepcja", uk: "Рецепція", en: "Reception", by: "Рэцэпцыя" }
                          }
                          const facilityKey = facilityMap[facility] ? Object.keys(facilityMap).find(k => facilityMap[k]?.pl === facility) : null
                          const translatedFacility = facilityKey && facilityMap[facilityKey] ? facilityMap[facilityKey][currentLang] || facility : facility
                          return (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                              {translatedFacility}
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-red-400 font-sans font-semibold mb-3">{t.transport}</h4>
                      <div className="space-y-2 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                          <Bus className="w-4 h-4 text-red-400" />
                          <span>{t.availableConnections}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bus className="w-4 h-4 text-red-400" />
                          <span>{t.busLines}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-red-400" />
                          <span>{location.transport.parking === "Parking dla klientów" ? t.clientParking : t.streetParking}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-sans font-black bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent mb-10">
                {t.contactInfo}
              </h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-2xl">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-gray-300 text-lg mb-1">{t.mainPhone}</p>
                    <a
                      href="tel:+48733451982"
                      className="text-gray-400 font-serif text-xl font-light hover:text-red-400 transition-colors"
                    >
                      +48 733 451 982
                    </a>
                    <p className="text-gray-500 text-sm">{t.daily}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-2xl">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-gray-300 text-lg mb-1">{t.mainEmail}</p>
                    <a
                      href="mailto:vasilvolkau@gmail.com"
                      className="text-gray-400 font-serif text-xl font-light hover:text-red-400 transition-colors"
                    >
                      vasilvolkau@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm">{t.responseTime}</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-900 rounded-3xl shadow-lg border border-gray-700">
                  <p className="font-sans font-bold text-gray-300 text-lg mb-4">{t.contactAndPage}</p>
                  <div className="space-y-2">
                    <p className="text-gray-400 font-serif text-xl font-light">📞 {t.phone}: +48 733 451 982</p>
                    <p className="text-gray-400 font-serif text-xl font-light">✉️ {t.email}: vasilvolkau@gmail.com</p>
                    <p className="text-gray-400 font-serif text-xl font-light">🌐 {t.website}: volat.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-sans font-black bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent mb-10">
                {t.openingHours}
              </h2>
              <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black mb-8">
                <CardHeader className="p-8">
                  <CardTitle className="font-sans text-2xl text-gray-300 mb-6 font-bold flex items-center gap-4">
                    <Clock className="w-8 h-8 text-red-400" />
                    {t.schedule}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-gray-700">
                      <span className="font-primary text-gray-300 text-lg font-light">{t.mondayFriday}</span>
                      <span className="font-accent font-bold text-gray-300 text-lg">6:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-700">
                      <span className="font-primary text-gray-300 text-lg font-light">{t.saturday}</span>
                      <span className="font-accent font-bold text-gray-300 text-lg">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-700">
                      <span className="font-primary text-gray-300 text-lg font-light">{t.sunday}</span>
                      <span className="font-accent font-bold text-gray-300 text-lg">10:00 - 18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button
                  onClick={() => {
                    // TODO: Подключить форму записи
                    alert(currentLang === "uk" ? "Функцію запису буде доступно незабаром!" : currentLang === "en" ? "Booking feature will be available soon!" : currentLang === "by" ? "Функцыю запісу будзе даступна хутка!" : "Funkcja zapisu będzie dostępna wkrótce!")
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 text-sm font-accent font-medium rounded-xl shadow-lg"
                >
                  {t.bookTrialTraining}
                </Button>

                <Button
                  onClick={() => window.open("tel:+48733451982", "_self")}
                  className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 text-sm font-accent font-medium rounded-xl shadow-lg border border-gray-600"
                >
                  {t.callNow}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gray-900 rounded-3xl p-8 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t.haveQuestions}</h3>
              <p className="text-gray-300 font-primary text-lg mb-6">
                {t.haveQuestionsDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("mailto:vasilvolkau@gmail.com", "_self")}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 text-sm font-accent font-medium px-6 py-3 rounded-xl shadow-lg"
                >
                  {t.sendEmail}
                </Button>
                <Button
                  onClick={() => window.open("https://wa.me/48733451982", "_blank")}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 text-sm font-accent font-medium px-6 py-3 rounded-xl shadow-lg border border-gray-600"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
