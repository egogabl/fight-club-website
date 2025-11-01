"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation, Car, Bus } from "lucide-react"

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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">

      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Kontakt
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-accent font-light mb-8">
              Skontaktuj się z nami i rozpocznij swoją przygodę ze sportami walki
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-primary font-light">
              Mamy dwie lokalizacje w Warszawie - wybierz najbliższą dla Ciebie
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
                      <h4 className="text-red-400 font-sans font-semibold mb-3">Udogodnienia</h4>
                      <ul className="text-gray-400 text-sm space-y-1">
                        {location.facilities.map((facility, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                            {facility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-red-400 font-sans font-semibold mb-3">Dojazd</h4>
                      <div className="space-y-2 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                          <Bus className="w-4 h-4 text-red-400" />
                          <span>{location.transport.metro}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bus className="w-4 h-4 text-red-400" />
                          <span>{location.transport.bus}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-red-400" />
                          <span>{location.transport.parking}</span>
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
                Informacje kontaktowe
              </h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-2xl">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-gray-300 text-lg mb-1">Telefon główny</p>
                    <a
                      href="tel:+48733451982"
                      className="text-gray-400 font-serif text-xl font-light hover:text-red-400 transition-colors"
                    >
                      +48 733 451 982
                    </a>
                    <p className="text-gray-500 text-sm">Codziennie 8:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-2xl">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-gray-300 text-lg mb-1">Email główny</p>
                    <a
                      href="mailto:vasilvolkau@gmail.com"
                      className="text-gray-400 font-serif text-xl font-light hover:text-red-400 transition-colors"
                    >
                      vasilvolkau@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-900 rounded-3xl shadow-lg border border-gray-700">
                  <p className="font-sans font-bold text-gray-300 text-lg mb-4">Kontakt i Strona</p>
                  <div className="space-y-2">
                    <p className="text-gray-400 font-serif text-xl font-light">📞 Telefon: +48 733 451 982</p>
                    <p className="text-gray-400 font-serif text-xl font-light">✉️ E-mail: vasilvolkau@gmail.com</p>
                    <p className="text-gray-400 font-serif text-xl font-light">🌐 Strona: volat.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-sans font-black bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent mb-10">
                Godziny otwarcia
              </h2>
              <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black mb-8">
                <CardHeader className="p-8">
                  <CardTitle className="font-sans text-2xl text-gray-300 mb-6 font-bold flex items-center gap-4">
                    <Clock className="w-8 h-8 text-red-400" />
                    Harmonogram
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-gray-700">
                      <span className="font-primary text-gray-300 text-lg font-light">Poniedziałek - Piątek</span>
                      <span className="font-accent font-bold text-gray-300 text-lg">6:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-700">
                      <span className="font-primary text-gray-300 text-lg font-light">Sobota</span>
                      <span className="font-accent font-bold text-gray-300 text-lg">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-700">
                      <span className="font-primary text-gray-300 text-lg font-light">Niedziela</span>
                      <span className="font-accent font-bold text-gray-300 text-lg">10:00 - 18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button
                  onClick={() => {
                    // TODO: Подключить форму записи
                    alert('Funkcja zapisu będzie dostępna wkrótce!')
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 text-sm font-accent font-medium rounded-xl shadow-lg"
                >
                  Umów trening próbny
                </Button>

                <Button
                  onClick={() => window.open("tel:+48733451982", "_self")}
                  className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 text-sm font-accent font-medium rounded-xl shadow-lg border border-gray-600"
                >
                  Zadzwoń teraz
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gray-900 rounded-3xl p-8 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-2xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Masz pytania?</h3>
              <p className="text-gray-300 font-primary text-lg mb-6">
                Nie wahaj się skontaktować z nami. Jesteśmy tutaj, aby pomóc Ci rozpocząć Twoją przygodę ze sportami
                walki.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("mailto:vasilvolkau@gmail.com", "_self")}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 text-sm font-accent font-medium px-6 py-3 rounded-xl shadow-lg"
                >
                  Napisz email
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
