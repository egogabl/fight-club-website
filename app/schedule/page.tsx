"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

const Footer = lazy(() => import("@/components/footer"))

const scheduleData = [
  // Понедельник / Среда / Пятница - Duża
  {
    day: "Poniedziałek",
    time: "16:50-18:00",
    discipline: "Karate (dzieci 10+)",
    location: "Mokotów - Duża",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Poniedziałek",
    time: "18:00-19:30",
    discipline: "Karate (grupa zawodnicza)",
    location: "Mokotów - Duża",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  {
    day: "Poniedziałek",
    time: "19:30-20:30",
    discipline: "MMA (dzieci i młodzież 6-14 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Paweł Szymkowicz", slug: "pawel-szymkowicz" },
    sport: "mma",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Poniedziałek",
    time: "20:30-22:00",
    discipline: "MMA (młodzież 14+ i dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Paweł Szymkowicz", slug: "pawel-szymkowicz" },
    sport: "mma",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  // Понедельник / Среда / Пятница - Mała
  {
    day: "Poniedziałek",
    time: "17:30-18:15",
    discipline: "Trening motoryczny VolatMOVE Kids (dzieci 4-7 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Poniedziałek",
    time: "18:15-19:15",
    discipline: "Judo (dzieci 6-12 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "judo",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Poniedziałek",
    time: "19:30-20:30",
    discipline: "Trening motoryczny i funkcjonalny (młodzież i dorośli 15+)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Mała",
  },
  {
    day: "Poniedziałek",
    time: "20:30-22:00",
    discipline: "Karate (dorośli amatorzy)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dorosli",
    room: "Mała",
  },
  // Środa - Duża
  {
    day: "Środa",
    time: "16:50-18:00",
    discipline: "Karate (dzieci 10+)",
    location: "Mokotów - Duża",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Środa",
    time: "18:00-19:30",
    discipline: "Karate (grupa zawodnicza)",
    location: "Mokotów - Duża",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  {
    day: "Środa",
    time: "19:30-20:30",
    discipline: "MMA (dzieci i młodzież 6-14 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Paweł Szymkowicz", slug: "pawel-szymkowicz" },
    sport: "mma",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Środa",
    time: "20:30-22:00",
    discipline: "MMA (młodzież 14+ i dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Paweł Szymkowicz", slug: "pawel-szymkowicz" },
    sport: "mma",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  // Środa - Mała
  {
    day: "Środa",
    time: "17:30-18:15",
    discipline: "Trening motoryczny VolatMOVE Kids (dzieci 4-7 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Środa",
    time: "18:15-19:15",
    discipline: "Judo (dzieci 6-12 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "judo",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Środa",
    time: "19:30-20:30",
    discipline: "Trening motoryczny i funkcjonalny (młodzież i dorośli 15+)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Mała",
  },
  {
    day: "Środa",
    time: "20:30-22:00",
    discipline: "Karate (dorośli amatorzy)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dorosli",
    room: "Mała",
  },
  // Piątek - Duża
  {
    day: "Piątek",
    time: "16:50-18:00",
    discipline: "Karate (dzieci 10+)",
    location: "Mokotów - Duża",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Piątek",
    time: "18:00-19:30",
    discipline: "Karate (grupa zawodnicza)",
    location: "Mokotów - Duża",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  {
    day: "Piątek",
    time: "19:30-20:30",
    discipline: "MMA (dzieci i młodzież 6-14 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Paweł Szymkowicz", slug: "pawel-szymkowicz" },
    sport: "mma",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Piątek",
    time: "20:30-22:00",
    discipline: "MMA (młodzież 14+ i dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Paweł Szymkowicz", slug: "pawel-szymkowicz" },
    sport: "mma",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  // Piątek - Mała
  {
    day: "Piątek",
    time: "17:30-18:15",
    discipline: "Trening motoryczny VolatMOVE Kids (dzieci 4-7 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Piątek",
    time: "18:15-19:15",
    discipline: "Judo (dzieci 6-12 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Daria Koba", slug: "daria-koba" },
    sport: "judo",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Piątek",
    time: "19:30-20:30",
    discipline: "Trening motoryczny i funkcjonalny (młodzież i dorośli 15+)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Mała",
  },
  {
    day: "Piątek",
    time: "20:30-22:00",
    discipline: "Karate (dorośli amatorzy)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dorosli",
    room: "Mała",
  },

  // Вторник / Четверг - Duża
  {
    day: "Wtorek",
    time: "16:00-17:15",
    discipline: "Karate (drugi rok nauki, dzieci 9-11 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Wtorek",
    time: "17:15-18:15",
    discipline: "Karate (pierwszy rok nauki, dzieci 7-10 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Wtorek",
    time: "18:15-19:15",
    discipline: "Muay Thai / Kickboxing (dzieci 8-13 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Wtorek",
    time: "19:15-20:45",
    discipline: "Muay Thai / Kickboxing (młodzież 14+ i dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  {
    day: "Wtorek",
    time: "20:45-22:00",
    discipline: "Muay Thai / Kickboxing (dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dorosli",
    room: "Duża",
  },
  // Wtorek - Mała
  {
    day: "Wtorek",
    time: "17:15-18:15",
    discipline: "Karate (dzieci 10+, początkujący)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Wtorek",
    time: "18:15-19:15",
    discipline: "Trening motoryczny VolatMOVE Junior (dzieci 8-11 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Wtorek",
    time: "19:15-20:20",
    discipline: "Trening motoryczny VolatMOVE Junior (dzieci 11-15 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Mała",
  },
  // Czwartek - Duża
  {
    day: "Czwartek",
    time: "16:00-17:15",
    discipline: "Karate (drugi rok nauki, dzieci 9-11 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Czwartek",
    time: "17:15-18:15",
    discipline: "Karate (pierwszy rok nauki, dzieci 7-10 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Czwartek",
    time: "18:15-19:15",
    discipline: "Muay Thai / Kickboxing (dzieci 8-13 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Czwartek",
    time: "19:15-20:45",
    discipline: "Muay Thai / Kickboxing (młodzież 14+ i dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  {
    day: "Czwartek",
    time: "20:45-22:00",
    discipline: "Muay Thai / Kickboxing (dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dorosli",
    room: "Duża",
  },
  // Czwartek - Mała
  {
    day: "Czwartek",
    time: "17:15-18:15",
    discipline: "Karate (dzieci 10+, początkujący)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Czwartek",
    time: "18:15-19:15",
    discipline: "Trening motoryczny VolatMOVE Junior (dzieci 8-11 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Czwartek",
    time: "19:15-20:20",
    discipline: "Trening motoryczny VolatMOVE Junior (dzieci 11-15 lat)",
    location: "Mokotów - Mała",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Mała",
  },

  // Sobota - Duża
  {
    day: "Sobota",
    time: "10:00-11:00",
    discipline: "Muay Thai / Kickboxing (dzieci 8-13 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Sobota",
    time: "11:00-12:30",
    discipline: "Muay Thai / Kickboxing (młodzież 14+ i dorośli)",
    location: "Mokotów - Duża",
    coach: { name: "Mikoła Taczylin", slug: "mikola-taczylin" },
    sport: "muaythai",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  {
    day: "Sobota",
    time: "12:30-13:30",
    discipline: "Karate (pierwszy rok nauki, dzieci 7-10 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Sobota",
    time: "13:30-15:00",
    discipline: "Karate (drugi rok nauki, dzieci 9-11 lat)",
    location: "Mokotów - Duża",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Duża",
  },
  {
    day: "Sobota",
    time: "15:00-17:00",
    discipline: "Karate (grupa zawodnicza)",
    location: "Mokotów - Duża",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Duża",
  },
  // Sobota - Mała
  {
    day: "Sobota",
    time: "10:00-11:20",
    discipline: "Trening motoryczny VolatMOVE Junior (młodzież)",
    location: "Mokotów - Mała",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "mlodziez",
    room: "Mała",
  },
  {
    day: "Sobota",
    time: "11:20-12:25",
    discipline: "Trening motoryczny VolatMOVE Junior (dzieci)",
    location: "Mokotów - Mała",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  {
    day: "Sobota",
    time: "12:30-13:30",
    discipline: "Karate (dzieci 10+, początkujący)",
    location: "Mokotów - Mała",
    coach: { name: "Vital Rak", slug: "vital-rak" },
    sport: "karate",
    branch: "mokotow",
    ageGroup: "dzieci",
    room: "Mała",
  },
  
  // PRAGA - Понедельник | Среда
  {
    day: "Poniedziałek",
    time: "17:00-17:55",
    discipline: "Trening motoryczny VolatMOVE KIDS (dzieci 5-7 lat)",
    location: "Praga - Sala",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "praga",
    ageGroup: "dzieci",
    room: "Sala",
  },
  {
    day: "Poniedziałek",
    time: "18:00-19:00",
    discipline: "Karate (dzieci 7-13 lat)",
    location: "Praga - Sala",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "praga",
    ageGroup: "dzieci",
    room: "Sala",
  },
  {
    day: "Środa",
    time: "17:00-17:55",
    discipline: "Trening motoryczny VolatMOVE KIDS (dzieci 5-7 lat)",
    location: "Praga - Sala",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "motoryka",
    branch: "praga",
    ageGroup: "dzieci",
    room: "Sala",
  },
  {
    day: "Środa",
    time: "18:00-19:00",
    discipline: "Karate (dzieci 7-13 lat)",
    location: "Praga - Sala",
    coach: { name: "Volha Yefimenka", slug: "volha-yefimenka" },
    sport: "karate",
    branch: "praga",
    ageGroup: "dzieci",
    room: "Sala",
  },
]

const translations = {
  pl: {
    title: "Rozkład zajęć",
    subtitle: "Wybierz filię, sport i grupę wiekową",
    mokotow: "Mokotów",
    praga: "Praga Północ",
    allSports: "Wszystkie sporty",
    allAges: "Wszystkie grupy",
    filteredByCoach: "Filtrowane przez trenera",
    bookClass: "Zapisz się na zajęcia",
    backToSchedule: "Powrót do rozkładu",
    noClassesFound: "Nie znaleziono zajęć dla wybranych filtrów",
    ageGroups: {
      dzieci: "Dzieci",
      mlodziez: "Młodzież",
      dorosli: "Dorośli",
      wszystkie: "Wszystkie grupy",
    },
    days: {
      Poniedziałek: "Poniedziałek",
      Wtorek: "Wtorek",
      Środa: "Środa",
      Czwartek: "Czwartek",
      Piątek: "Piątek",
      Sobota: "Sobota",
      Niedziela: "Niedziela",
    },
    disciplines: {
      "volatmove-kids": "Trening motoryczny VolatMove! KIDS",
      "volatmove-junior": "Trening motoryczny VolatMove! JUNIOR",
      "functional-training": "Trening motoryczny i funkcjonalny",
      judo: "Judo",
      karate: "Karate",
      "karate-year-2": "Karate (2-й rok nauki)",
      "karate-year-1": "Karate (1-й rok nauki)",
      "karate-beginners": "Karate (dzieci 10+, początkujący)",
      "karate-sport": "Karate (grupa sportowa)",
      muaythai: "Muay Thai / Kickboxing",
      mma: "MMA",
      motoryka: "Motoryka",
    },
  },
  uk: {
    title: "Розклад занять",
    subtitle: "Оберіть філію, спорт та вікову групу",
    mokotow: "Мокотув",
    praga: "Прага Північна",
    allSports: "Всі види спорту",
    allAges: "Всі групи",
    filteredByCoach: "Відфільтровано тренером",
    bookClass: "Записатися на заняття",
    backToSchedule: "Повернутися до розкладу",
    noClassesFound: "Не знайдено занять для обраних фільтрів",
    ageGroups: {
      dzieci: "Діти",
      mlodziez: "Молодь",
      dorosli: "Дорослі",
      wszystkie: "Всі групи",
    },
    days: {
      Poniedziałek: "Понеділок",
      Wtorek: "Вівторок",
      Środa: "Середа",
      Czwartek: "Четвер",
      Piątek: "П'ятниця",
      Sobota: "Субота",
      Niedziela: "Неділя",
    },
    disciplines: {
      "volatmove-kids": "Тренінг моторики VolatMove! KIDS",
      "volatmove-junior": "Тренінг моторики VolatMove! JUNIOR",
      "functional-training": "Тренінг моторики і функціональний",
      judo: "Дзюдо",
      karate: "Карате",
      "karate-year-2": "Карате (2-й рік навчання)",
      "karate-year-1": "Карате (1-й рік навчання)",
      "karate-beginners": "Карате (діти 10+, початківці)",
      "karate-sport": "Карате (спортивна група)",
      muaythai: "Муай Тай / Кікбоксинг",
      mma: "ММА",
      motoryka: "Моторика",
    },
  },
  en: {
    title: "Schedule",
    subtitle: "Choose branch, sport and age group",
    mokotow: "Mokotów",
    praga: "Praga Północ",
    allSports: "All sports",
    allAges: "All groups",
    filteredByCoach: "Filtered by coach",
    bookClass: "Book class",
    backToSchedule: "Back to schedule",
    noClassesFound: "No classes found for selected filters",
    ageGroups: {
      dzieci: "Children",
      mlodziez: "Youth",
      dorosli: "Adults",
      wszystkie: "All groups",
    },
    days: {
      Poniedziałek: "Monday",
      Wtorek: "Tuesday",
      Środa: "Wednesday",
      Czwartek: "Thursday",
      Piątek: "Friday",
      Sobota: "Saturday",
      Niedziela: "Sunday",
    },
    disciplines: {
      "volatmove-kids": "Motor Training VolatMove! KIDS",
      "volatmove-junior": "Motor Training VolatMove! JUNIOR",
      "functional-training": "Motor and Functional Training",
      judo: "Judo",
      karate: "Karate",
      "karate-year-2": "Karate (Year 2)",
      "karate-year-1": "Karate (Year 1)",
      "karate-beginners": "Karate (Children 10+, Beginners)",
      "karate-sport": "Karate (Sports Group)",
      muaythai: "Muay Thai / Kickboxing",
      mma: "MMA",
      motoryka: "Motor Skills",
    },
  },
  by: {
    title: "Расклад заняткаў",
    subtitle: "Выберыце філіял, спорт і ўзроставую групу",
    mokotow: "Макотув",
    praga: "Прага Паўночная",
    allSports: "Усе віды спорту",
    allAges: "Усе групы",
    filteredByCoach: "Адфільтравана трэнерам",
    bookClass: "Запісацца на заняткі",
    backToSchedule: "Вярнуцца да раскладу",
    noClassesFound: "Не знойдзена заняткаў для абраных фільтраў",
    ageGroups: {
      dzieci: "Дзеці",
      mlodziez: "Моладзь",
      dorosli: "Дарослыя",
      wszystkie: "Усе групы",
    },
    days: {
      Poniedziałek: "Панядзелак",
      Wtorek: "Аўторак",
      Środa: "Серада",
      Czwartek: "Чацвер",
      Piątek: "Пятніца",
      Sobota: "Субота",
      Niedziela: "Нядзеля",
    },
    disciplines: {
      "volatmove-kids": "Трэніроўка маторыкі VolatMove! KIDS",
      "volatmove-junior": "Трэніроўка маторыкі VolatMove! JUNIOR",
      "functional-training": "Трэніроўка маторыкі і функцыянальная",
      judo: "Дзюдо",
      karate: "Каратэ",
      "karate-year-2": "Каратэ (2-й год навучання)",
      "karate-year-1": "Каратэ (1-й год навучання)",
      "karate-beginners": "Каратэ (дзеці 10+, пачаткоўцы)",
      "karate-sport": "Каратэ (спартыўная група)",
      muaythai: "Муай Тай / Кікбоксінг",
      mma: "ММА",
      motoryka: "Маторыка",
    },
  },
}

export default function SchedulePage() {
  const { currentLang } = useLanguage()
  const [selectedBranch, setSelectedBranch] = useState("mokotow")
  const [selectedSport, setSelectedSport] = useState("wszystkie")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("wszystkie")
  const searchParams = useSearchParams()

  const t = translations[currentLang] || translations.pl

  useEffect(() => {
    const coachSlug = searchParams.get("coach")
    if (coachSlug) {
      const coachData = scheduleData.find(item => item.coach.slug === coachSlug)
      if (coachData) {
        setSelectedBranch(coachData.branch)
        setSelectedSport(coachData.sport)
        setSelectedAgeGroup(coachData.ageGroup)
      }
    }
  }, [searchParams])

  const filteredSchedule = scheduleData.filter(item => {
    const branchMatch = selectedBranch === "wszystkie" || item.branch === selectedBranch
    const sportMatch = selectedSport === "wszystkie" || item.sport === selectedSport
    const ageMatch = selectedAgeGroup === "wszystkie" || item.ageGroup === selectedAgeGroup
    return branchMatch && sportMatch && ageMatch
  })

  const groupedSchedule = filteredSchedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = []
    }
    acc[item.day].push(item)
    return acc
  }, {} as Record<string, typeof scheduleData>)

  const daysOrder = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="container mx-auto px-4 pt-28 sm:pt-32 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            {t.subtitle}
          </p>
        </div>

        {searchParams.get("coach") && (
          <div className="text-center mb-6">
            <Badge className="bg-red-600 text-white px-6 py-3 text-lg">{t.filteredByCoach}</Badge>
          </div>
        )}

        <div className="flex justify-center gap-4 sm:gap-6 mb-10 flex-wrap">
          <button
            onClick={() => setSelectedBranch("mokotow")}
            className={`px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-accent text-lg sm:text-xl border-2 shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap ${
              selectedBranch === "mokotow"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-black border-red-400 text-red-300 hover:bg-red-600 hover:text-white font-bold hover:border-red-500"
            }`}
          >
            📍 {t.mokotow}
          </button>
          <button
            onClick={() => setSelectedBranch("praga")}
            className={`px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-accent text-lg sm:text-xl border-2 shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap ${
              selectedBranch === "praga"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-black border-red-400 text-red-300 hover:bg-red-600 hover:text-white font-bold hover:border-red-500"
            }`}
          >
            📍 {t.praga}
          </button>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          <Button
            onClick={() => setSelectedSport("wszystkie")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "wszystkie"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            {t.allSports}
          </Button>
          <Button
            onClick={() => setSelectedSport("karate")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "karate"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥋 {t.disciplines.karate || "Karate"}
          </Button>
          <Button
            onClick={() => setSelectedSport("muaythai")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "muaythai"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥊 {t.disciplines.muaythai || "Muay Thai"}
          </Button>
          <Button
            onClick={() => setSelectedSport("mma")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "mma"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥋 {t.disciplines.mma || "MMA"}
          </Button>
          <Button
            onClick={() => setSelectedSport("judo")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "judo"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🥋 {t.disciplines.judo || "Judo"}
          </Button>
          <Button
            onClick={() => setSelectedSport("motoryka")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedSport === "motoryka"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🏃 {t.disciplines.motoryka || "Motoryka"}
          </Button>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          <Button
            onClick={() => setSelectedAgeGroup("wszystkie")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "wszystkie"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            {t.allAges}
          </Button>
          <Button
            onClick={() => setSelectedAgeGroup("dzieci")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "dzieci"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            👶 {t.ageGroups.dzieci}
          </Button>
          <Button
            onClick={() => setSelectedAgeGroup("mlodziez")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "mlodziez"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            🧑 {t.ageGroups.mlodziez}
          </Button>
          <Button
            onClick={() => setSelectedAgeGroup("dorosli")}
            size="lg"
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-accent text-sm sm:text-base border shadow-md ${
              selectedAgeGroup === "dorosli"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white font-bold border-red-500"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600"
            }`}
          >
            👨 {t.ageGroups.dorosli}
          </Button>
        </div>

        {Object.keys(groupedSchedule).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">{t.noClassesFound}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {daysOrder.map(day => {
              if (!groupedSchedule[day]) return null
              
              return (
                <div key={day} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    {t.days[day as keyof typeof t.days] || day}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupedSchedule[day].map((item, index) => {
                      const getDisciplineKey = (discipline: string) => {
                        if (discipline.includes("VolatMOVE Kids") || discipline.includes("VolatMove! KIDS")) return "volatmove-kids"
                        if (discipline.includes("VolatMOVE Junior") || discipline.includes("VolatMove! JUNIOR")) return "volatmove-junior"
                        if (discipline.includes("функциональный") || discipline.includes("funkcjonalny")) return "functional-training"
                        if (discipline.includes("Дзюдо") || discipline === "Judo") return "judo"
                        if (discipline.includes("2-й год") || discipline.includes("2-й rok")) return "karate-year-2"
                        if (discipline.includes("1-й год") || discipline.includes("1-й rok")) return "karate-year-1"
                        if (discipline.includes("дети 10+") || discipline.includes("dzieci 10+") || discipline.includes("początkujący")) return "karate-beginners"
                        if (discipline.includes("спортивная") || discipline.includes("sportowa")) return "karate-sport"
                        if (discipline.includes("Муай Тай") || discipline.includes("Muay Thai")) return "muaythai"
                        if (discipline.includes("ММА") || discipline === "MMA") return "mma"
                        return null
                      }
                      const disciplineKey = getDisciplineKey(item.discipline)
                      const disciplineText = disciplineKey ? (t.disciplines[disciplineKey as keyof typeof t.disciplines] || item.discipline) : item.discipline
                      
                      return (
                      <Card key={index} className="bg-gray-900 border-gray-700 flex flex-col min-h-[200px]">
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3 bg-red-950/30 px-3 py-2 rounded-lg border border-red-500/20">
                            <Clock className="h-5 w-5 text-red-400" />
                            <span className="font-bold text-lg text-white">{item.time}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {disciplineText}
                          </h3>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300">{item.location}</span>
                            {item.room && (
                              <Badge variant="outline" className="border-blue-500 text-blue-400 text-xs">
                                {item.room}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="mb-4">
                            <Badge className="bg-red-600 text-white">
                              {item.coach.name}
                            </Badge>
                          </div>
                          
                          <div className="flex gap-2 mb-4">
                            <Badge variant="outline" className="border-red-500 text-red-500">
                              {item.sport === "karate" && `🥋 ${t.disciplines.karate || "Karate"}`}
                              {item.sport === "muaythai" && `🥊 ${t.disciplines.muaythai?.split(" /")[0] || "Muay Thai"}`}
                              {item.sport === "mma" && `🥋 ${t.disciplines.mma || "MMA"}`}
                              {item.sport === "judo" && `🥋 ${t.disciplines.judo || "Judo"}`}
                              {item.sport === "motoryka" && `🏃 ${t.disciplines.motoryka || "Motoryka"}`}
                              {item.sport === "szachy" && "♟️ Szachy"}
                            </Badge>
                            <Badge variant="outline" className="border-blue-500 text-blue-500">
                              {t.ageGroups[item.ageGroup as keyof typeof t.ageGroups]}
                            </Badge>
                          </div>
                          
                          <div className="mt-auto">
                            <a
                              href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-md block text-center"
                            >
                              {t.bookClass}
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
