"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User } from "lucide-react"

const availableSlots = [
  {
    date: "2025-01-15",
    day: "Środa",
    slots: [
      { time: "17:00", discipline: "Karate WKF", trainer: "Vasiliy Petrov", location: "Praga", available: true },
      { time: "19:00", discipline: "Judo", trainer: "Dmitri Volkov", location: "Mokotów", available: true },
    ],
  },
  {
    date: "2025-01-16",
    day: "Czwartek",
    slots: [
      { time: "18:00", discipline: "Muay Thai", trainer: "Anna Kowalska", location: "Praga", available: true },
      { time: "20:00", discipline: "MMA", trainer: "Dmitri Volkov", location: "Praga", available: false },
    ],
  },
  {
    date: "2025-01-17",
    day: "Piątek",
    slots: [
      { time: "18:00", discipline: "Karate WKF", trainer: "Vasiliy Petrov", location: "Mokotów", available: true },
      { time: "20:00", discipline: "MMA", trainer: "Dmitri Volkov", location: "Praga", available: true },
    ],
  },
  {
    date: "2025-01-18",
    day: "Sobota",
    slots: [
      { time: "10:00", discipline: "Muay Thai", trainer: "Anna Kowalska", location: "Mokotów", available: true },
      { time: "12:00", discipline: "Judo", trainer: "Dmitri Volkov", location: "Mokotów", available: true },
    ],
  },
]

export default function BookingPage() {
  const [selectedSlot, setSelectedSlot] = useState<any>(null)
  const [bookingStep, setBookingStep] = useState<"select" | "form" | "confirmation">("select")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "beginner",
    notes: "",
  })

  const handleSlotSelect = (date: string, slot: any) => {
    setSelectedSlot({ date, ...slot })
    setBookingStep("form")
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingStep("confirmation")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (bookingStep === "confirmation") {
    return (
      <div className="min-h-screen bg-black">
        <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-5xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-6">
                Rezerwacja potwierdzona!
              </h1>

              <p className="text-xl text-gray-300 font-serif mb-8 font-light">
                Dziękujemy za rezerwację. Szczegóły zostały wysłane na Twój email.
              </p>

              <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black mb-8">
                <CardHeader className="p-8">
                  <CardTitle className="font-sans text-2xl text-gray-300 font-bold">Szczegóły rezerwacji</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">
                        {selectedSlot?.date} ({selectedSlot?.day})
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">{selectedSlot?.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">
                        {selectedSlot?.discipline} - {selectedSlot?.trainer}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">{selectedSlot?.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button
                  onClick={() => {
                    setBookingStep("select")
                    setSelectedSlot(null)
                    setFormData({ name: "", email: "", phone: "", experience: "beginner", notes: "" })
                  }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-serif text-lg px-8 py-3 rounded-2xl shadow-lg font-bold"
                >
                  Zarezerwuj kolejne zajęcia
                </Button>

                <p className="text-gray-400 font-serif">
                  Masz pytania? Skontaktuj się z nami:{" "}
                  <a href="tel:+48733451982" className="text-red-400 hover:underline">
                    +48 733 451 982
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (bookingStep === "form") {
    return (
      <div className="min-h-screen bg-black">
        <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-6">
                  Dane kontaktowe
                </h1>
                <p className="text-xl text-gray-300 font-serif font-light">
                  Uzupełnij formularz, aby potwierdzić rezerwację
                </p>
              </div>

              <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black mb-8">
                <CardHeader className="p-8">
                  <CardTitle className="font-sans text-xl text-gray-300 font-bold">Wybrane zajęcia</CardTitle>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">
                        {selectedSlot?.date} ({selectedSlot?.day})
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">{selectedSlot?.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">
                        {selectedSlot?.discipline} - {selectedSlot?.trainer}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300 font-serif">{selectedSlot?.location}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black">
                <CardContent className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-300 font-serif text-lg mb-2">Imię i nazwisko *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-white font-serif focus:border-red-400 focus:outline-none"
                        placeholder="Wprowadź swoje imię i nazwisko"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-serif text-lg mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-white font-serif focus:border-red-400 focus:outline-none"
                        placeholder="twoj@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-serif text-lg mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-white font-serif focus:border-red-400 focus:outline-none"
                        placeholder="+48 123 456 789"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-serif text-lg mb-2">Poziom doświadczenia</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-white font-serif focus:border-red-400 focus:outline-none"
                      >
                        <option value="beginner">Początkujący</option>
                        <option value="intermediate">Średniozaawansowany</option>
                        <option value="advanced">Zaawansowany</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-serif text-lg mb-2">Dodatkowe uwagi</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-white font-serif focus:border-red-400 focus:outline-none resize-none"
                        placeholder="Czy masz jakieś pytania lub specjalne wymagania?"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setBookingStep("select")}
                        variant="outline"
                        className="flex-1 bg-black text-black hover:bg-black hover:text-white font-serif text-lg py-4 rounded-2xl border-2 border-red-400 font-bold"
                      >
                        Wstecz
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-serif text-lg py-4 rounded-2xl shadow-lg transition-all duration-200 font-bold"
                      >
                        Potwierdź rezerwację
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl lg:text-7xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-8 tracking-tight">
              Rezerwacja online
            </h1>
            <p className="text-2xl text-gray-300 font-serif max-w-3xl mx-auto font-light">
              Wybierz termin i zarezerwuj swoje pierwsze zajęcia próbne
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {availableSlots.map((daySlots, dayIndex) => (
                <Card
                  key={dayIndex}
                  className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black"
                >
                  <CardHeader className="p-8">
                    <CardTitle className="font-sans text-2xl text-gray-300 font-bold flex items-center gap-4">
                      <Calendar className="w-8 h-8 text-red-400" />
                      {daySlots.day}, {daySlots.date}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {daySlots.slots.map((slot, slotIndex) => (
                        <Card
                          key={slotIndex}
                          className={`border-2 transition-all duration-200 ${
                            slot.available
                              ? "border-gray-600 hover:border-red-400 cursor-pointer hover:shadow-lg hover:shadow-red-500/20"
                              : "border-gray-700 opacity-50 cursor-not-allowed"
                          } bg-gray-800/50 rounded-2xl`}
                          onClick={() => slot.available && handleSlotSelect(daySlots.date, slot)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <Clock className="w-6 h-6 text-red-400" />
                                <span className="font-sans font-bold text-gray-300 text-lg">{slot.time}</span>
                              </div>
                              <Badge
                                variant={slot.available ? "secondary" : "outline"}
                                className={`px-3 py-1 font-bold ${
                                  slot.available ? "bg-green-600 text-white" : "bg-red-600 text-white"
                                }`}
                              >
                                {slot.available ? "Dostępne" : "Zajęte"}
                              </Badge>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-red-400" />
                                <span className="text-gray-300 font-serif">{slot.discipline}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="w-4 h-4 flex items-center justify-center">👨‍🏫</span>
                                <span className="text-gray-400 font-serif text-sm">{slot.trainer}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-red-400" />
                                <span className="text-gray-400 font-serif text-sm">{slot.location}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
                <h3 className="text-2xl font-sans font-bold text-white mb-4">Nie widzisz odpowiedniego terminu?</h3>
                <p className="text-gray-300 font-serif text-lg mb-6">
                  Skontaktuj się z nami telefonicznie, aby umówić się na indywidualny termin.
                </p>
                <Button
                  onClick={() => window.open("tel:+48733451982", "_self")}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-serif text-lg px-8 py-3 rounded-2xl shadow-lg font-bold"
                >
                  Zadzwoń: +48 733 451 982
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
