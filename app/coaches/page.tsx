"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

const coaches = [
  {
    id: "vital-rak",
    name: "Vital Rak",
    specialty: "Główny trener, karate (sportowa grupa, dorośli), trening funkcjonalny",
    experience: "15+ lat doświadczenia",
    description:
      "Główny trener klubu VOLAT z wieloletnim doświadczeniem w karate i treningu funkcjonalnym. Mistrz sportu, certyfikowany instruktor WKF. Specjalizuje się w przygotowaniu zawodników do zawodów międzynarodowych. Prowadzi karate sportową grupę i zajęcia dla dorosłych oraz trening funkcjonalny.",
    image: "/vital-rak.png",
    achievements: [
      "Mistrz Sportu w Karate",
      "Certyfikat WKF 3 Dan",
      "Trener Kadry Narodowej",
      "Instruktor Treningu Funkcjonalnego",
      "Specjalista Rehabilitacji Sportowej"
    ],
    students: "180+ uczniów",
    languages: ["Polski", "Rosyjski", "Angielski"],
    education: "Akademia Wychowania Fizycznego",
    specialties: ["Karate WKF (sportowa grupa)", "Trening Funkcjonalny", "Przygotowanie Fizyczne", "Przygotowanie do Zawodów"]
  },
  {
    id: "volha-yefimenka",
    name: "Volha Yefimenka",
    specialty: "Karate (dzieci 1-й и 2-й год обучения), trening motoryczny VolatMOVE Junior, Muay Thai",
    experience: "12+ lat doświadczenia",
    description:
      "Specjalistka w karate dla dzieci oraz treningu motorycznym. Prowadzi zajęcia karate dla dzieci w wieku 7-11 lat (1-й и 2-й rok nauki), trening motoryczny VolatMOVE Junior oraz zajęcia Muay Thai. Ma wyjątkowe podejście do najmłodszych zawodników. Certyfikowana instruktorka z wieloletnim doświadczeniem w pracy z dziećmi.",
    image: "/volha-yefimenka.png",
    achievements: [
      "Mistrzyni Białorusi w Karate",
      "Certyfikat Instruktora Dziecięcego",
      "Specjalistka Treningu Motorycznego",
      "Trener Grup Dziecięcych",
      "Instruktor VolatMOVE Junior",
      "Ekspert Rozwoju Koordynacji"
    ],
    students: "160+ uczniów",
    languages: ["Polski", "Rosyjski", "Białoruski"],
    education: "Uniwersytet Sportowy",
    specialties: ["Karate (dzieci 1-2 rok)", "Trening Motoryczny VolatMOVE Junior", "Muay Thai", "Rozwój Koordynacji"]
  },
  {
    id: "mikola-taczylin",
    name: "Mikoła Taczylin",
    specialty: "Trener Muay Thai dla dzieci, młodzieży i dorosłych",
    experience: "18+ lat doświadczenia",
    description:
      "Ekspert w Muay Thai z wieloletnim doświadczeniem zawodowym. Były zawodnik, obecnie trener przygotowujący zawodników do walk i zawodów na najwyższym poziomie. Specjalizuje się w trenowaniu wszystkich grup wiekowych.",
    image: "/mikola-taczylin.png",
    achievements: [
      "Były Zawodnik Muay Thai",
      "Mistrz Europy Kickboxingu",
      "Certyfikat IFMA",
      "Trener Grup Dziecięcych",
      "Specjalista Techniki Uderzeń"
    ],
    students: "180+ zawodników",
    languages: ["Polski", "Rosyjski", "Angielski", "Tajski"],
    education: "Akademia Sportu i Turystyki",
    specialties: ["Muay Thai", "Boks", "Kickboxing", "Trening Dziecięcy"]
  },
  {
    id: "wiktor-muronczyk",
    name: "Wiktor Murończyk",
    specialty: "Trener szkoły szachowej",
    experience: "25+ lat doświadczenia",
    description:
      "Mistrz szachowy prowadzący zajęcia dla wszystkich grup wiekowych. Specjalizuje się w rozwoju strategicznego myślenia i przygotowaniu do turniejów. Wieloletni doświadczenie w pracy z dziećmi i dorosłymi.",
    image: "/wiktor-muronczyk.png",
    achievements: [
      "Międzynarodowy Mistrz Szachowy",
      "Trener FIDE",
      "Sędzia Turniejów Szachowych",
      "Autor Programów Edukacyjnych",
      "Specjalista Psychologii Sportu"
    ],
    students: "300+ uczniów",
    languages: ["Polski", "Angielski", "Rosyjski"],
    education: "Uniwersytet Warszawski - Matematyka",
    specialties: ["Szachy", "Strategia", "Logika", "Rozwój Intelektualny"]
  },
  {
    id: "pawel-szymkowicz",
    name: "Paweł Szymkowicz",
    specialty: "Trener MMA dla dzieci od 6 lat, młodzieży i dorosłych",
    experience: "10+ lat doświadczenia",
    description:
      "Specjalista w MMA z wieloletnim doświadczeniem w trenowaniu zawodników wszystkich grup wiekowych. Certyfikowany instruktor z międzynarodowymi osiągnięciami. Specjalizuje się w technikach mieszanych sztuk walki.",
    image: "/pawel-szymkowicz.png",
    achievements: [
      "Mistrz Polski w MMA",
      "Certyfikat Instruktora MMA",
      "Trener Grup Dziecięcych",
      "Specjalista Technik Mieszanych",
      "Ekspert Walki w Parterze"
    ],
    students: "120+ zawodników",
    languages: ["Polski", "Angielski"],
    education: "Akademia Wychowania Fizycznego",
    specialties: ["MMA", "Walka w Parterze", "Techniki Mieszane", "Walka w Klinczu"]
  },
  {
    id: "daria-koba",
    name: "Daria Koba",
    specialty: "Trening motoryczny VolatMOVE Kids (dzieci 4-7 lat), Judo dla dzieci",
    experience: "8+ lat doświadczenia",
    description:
      "Specjalistka w treningu motorycznym dla najmłodszych dzieci oraz judo. Ma wyjątkowe podejście do pracy z dziećmi w wieku przedszkolnym i szkolnym. Certyfikowana instruktorka z wieloletnim doświadczeniem w rozwoju podstawowych umiejętności motorycznych oraz treningu judo dla dzieci.",
    image: "/daria-koba.png",
    achievements: [
      "Certyfikat Instruktora Treningu Motorycznego",
      "Certyfikat Instruktora Judo",
      "Specjalistka Pracy z Dziećmi",
      "Trener Grup Dziecięcych",
      "Ekspert Rozwoju Koordynacji",
      "Instruktor VolatMOVE Kids"
    ],
    students: "120+ dzieci",
    languages: ["Polski", "Rosyjski", "Białoruski"],
    education: "Akademia Wychowania Fizycznego",
    specialties: ["Judo (dzieci)", "Trening Motoryczny", "VolatMOVE Kids", "Rozwój Koordynacji"]
  },
]

// Translations for coach data
const coachTranslations: Record<string, Record<string, {
  specialty: string
  experience: string
  description: string
  achievements: string[]
  specialties: string[]
  students: string
}>> = {
  "vital-rak": {
    pl: {
      specialty: "Główny trener, karate",
      experience: "15+ lat doświadczenia",
      description: "Główny trener klubu VOLAT z wieloletnim doświadczeniem w karate i treningu funkcjonalnym. Mistrz sportu, certyfikowany instruktor WKF. Specjalizuje się w przygotowaniu zawodników do zawodów międzynarodowych. Prowadzi karate sportową grupę i zajęcia dla dorosłych oraz trening funkcjonalny.",
      achievements: ["Mistrz Sportu w Karate", "Certyfikat WKF 3 Dan", "Trener Kadry Narodowej", "Instruktor Treningu Funkcjonalnego", "Specjalista Rehabilitacji Sportowej"],
      specialties: ["Karate WKF (sportowa grupa)", "Trening Funkcjonalny", "Przygotowanie Fizyczne", "Przygotowanie do Zawodów"],
      students: "180+ uczniów"
    },
    uk: {
      specialty: "Головний тренер, карате",
      experience: "15+ років досвіду",
      description: "Головний тренер клубу VOLAT з багаторічним досвідом у карате та функціональному тренінгу. Майстер спорту, сертифікований інструктор WKF. Спеціалізується на підготовці спортсменів до міжнародних змагань. Проводить спортивну групу карате та заняття для дорослих, а також функціональний тренінг.",
      achievements: ["Майстер спорту з карате", "Сертифікат WKF 3 Дан", "Тренер національної збірної", "Інструктор функціонального тренінгу", "Спеціаліст спортивної реабілітації"],
      specialties: ["Карате WKF (спортивна група)", "Функціональний тренінг", "Фізична підготовка", "Підготовка до змагань"],
      students: "180+ учнів"
    },
    en: {
      specialty: "Head coach, karate",
      experience: "15+ years of experience",
      description: "Head coach of VOLAT club with years of experience in karate and functional training. Master of Sports, certified WKF instructor. Specializes in preparing athletes for international competitions. Conducts sports karate group and adult classes as well as functional training.",
      achievements: ["Master of Sports in Karate", "WKF 3 Dan Certificate", "National Team Coach", "Functional Training Instructor", "Sports Rehabilitation Specialist"],
      specialties: ["Karate WKF (sports group)", "Functional Training", "Physical Preparation", "Competition Preparation"],
      students: "180+ students"
    },
    by: {
      specialty: "Галоўны трэнер, каратэ",
      experience: "15+ гадоў вопыту",
      description: "Галоўны трэнер клуба VOLAT з шматгадовым вопытам у каратэ і функцыянальных трэніроўках. Майстар спорту, сертыфікаваны інструктар WKF. Спецыялізуецца на падрыхтоўцы спартсменаў да міжнародных спаборніцтваў. Праводзіць спартыўную групу каратэ і заняткі для дарослых, а таксама функцыянальныя трэніроўкі.",
      achievements: ["Майстар спорту па каратэ", "Сертыфікат WKF 3 Дан", "Трэнер нацыянальнай зборнай", "Інструктар функцыянальных трэніровак", "Спецыяліст спартыўнай рэабілітацыі"],
      specialties: ["Каратэ WKF (спартыўная група)", "Функцыянальныя трэніроўкі", "Фізічная падрыхтоўка", "Падрыхтоўка да спаборніцтваў"],
      students: "180+ вучняў"
    }
  },
  "volha-yefimenka": {
    pl: {
      specialty: "Karate (dzieci), Muay Thai",
      experience: "12+ lat doświadczenia",
      description: "Specjalistka w karate dla dzieci oraz treningu motorycznym. Prowadzi zajęcia karate dla dzieci w wieku 7-11 lat (1-й и 2-й rok nauki), trening motoryczny VolatMOVE Junior oraz zajęcia Muay Thai. Ma wyjątkowe podejście do najmłodszych zawodników. Certyfikowana instruktorka z wieloletnim doświadczeniem w pracy z dziećmi.",
      achievements: ["Mistrzyni Białorusi w Karate", "Certyfikat Instruktora Dziecięcego", "Specjalistka Treningu Motorycznego", "Trener Grup Dziecięcych", "Instruktor VolatMOVE Junior", "Ekspert Rozwoju Koordynacji"],
      specialties: ["Karate (dzieci 1-2 rok)", "Trening Motoryczny VolatMOVE Junior", "Muay Thai", "Rozwój Koordynacji"],
      students: "160+ uczniów"
    },
    uk: {
      specialty: "Карате (діти), Муай Тай",
      experience: "12+ років досвіду",
      description: "Спеціалістка з карате для дітей та моторичного тренінгу. Проводить заняття карате для дітей віком 7-11 років (1-й та 2-й рік навчання), моторичний тренінг VolatMOVE Junior та заняття Муай Тай. Має унікальний підхід до наймолодших спортсменів. Сертифікована інструкторка з багаторічним досвідом роботи з дітьми.",
      achievements: ["Чемпіонка Білорусі з карате", "Сертифікат дитячого інструктора", "Спеціалістка моторичного тренінгу", "Тренер дитячих груп", "Інструктор VolatMOVE Junior", "Експерт розвитку координації"],
      specialties: ["Карате (діти 1-2 рік)", "Моторичний тренінг VolatMOVE Junior", "Муай Тай", "Розвиток координації"],
      students: "160+ учнів"
    },
    en: {
      specialty: "Karate (children), Muay Thai",
      experience: "12+ years of experience",
      description: "Specialist in children's karate and motor training. Conducts karate classes for children aged 7-11 (1st and 2nd year), VolatMOVE Junior motor training, and Muay Thai classes. Has a unique approach to the youngest athletes. Certified instructor with years of experience working with children.",
      achievements: ["Belarus Karate Champion", "Children's Instructor Certificate", "Motor Training Specialist", "Children's Group Coach", "VolatMOVE Junior Instructor", "Coordination Development Expert"],
      specialties: ["Karate (children 1-2 year)", "VolatMOVE Junior Motor Training", "Muay Thai", "Coordination Development"],
      students: "160+ students"
    },
    by: {
      specialty: "Каратэ (дзеці), Муай Тай",
      experience: "12+ гадоў вопыту",
      description: "Спецыялістка па каратэ для дзяцей і маторных трэніроўках. Праводзіць заняткі каратэ для дзяцей ва ўзросце 7-11 гадоў (1-й і 2-й год навучання), маторныя трэніроўкі VolatMOVE Junior і заняткі Муай Тай. Мае унікальны падыход да самых маладых спартсменаў. Сертыфікаваная інструктарка з шматгадовым вопытам працы з дзецьмі.",
      achievements: ["Чэмпіёнка Беларусі па каратэ", "Сертыфікат дзіцячага інструктара", "Спецыялістка маторных трэніровак", "Трэнер дзіцячых груп", "Інструктар VolatMOVE Junior", "Эксперт развіцця каардынацыі"],
      specialties: ["Каратэ (дзеці 1-2 год)", "Маторныя трэніроўкі VolatMOVE Junior", "Муай Тай", "Развіццё каардынацыі"],
      students: "160+ вучняў"
    }
  },
  "mikola-taczylin": {
    pl: {
      specialty: "Trener Muay Thai",
      experience: "18+ lat doświadczenia",
      description: "Ekspert w Muay Thai z wieloletnim doświadczeniem zawodowym. Były zawodnik, obecnie trener przygotowujący zawodników do walk i zawodów na najwyższym poziomie. Specjalizuje się w trenowaniu wszystkich grup wiekowych.",
      achievements: ["Były Zawodnik Muay Thai", "Mistrz Europy Kickboxingu", "Certyfikat IFMA", "Trener Grup Dziecięcych", "Specjalista Techniki Uderzeń"],
      specialties: ["Muay Thai", "Boks", "Kickboxing", "Trening Dziecięcy"],
      students: "180+ zawodników"
    },
    uk: {
      specialty: "Тренер Муай Тай",
      experience: "18+ років досвіду",
      description: "Експерт з Муай Тай з багаторічним професійним досвідом. Колишній спортсмен, нині тренер, який готує спортсменів до боїв і змагань найвищого рівня. Спеціалізується на тренуванні всіх вікових груп.",
      achievements: ["Колишній спортсмен Муай Тай", "Чемпіон Європи з кікбоксингу", "Сертифікат IFMA", "Тренер дитячих груп", "Спеціаліст техніки ударів"],
      specialties: ["Муай Тай", "Бокс", "Кікбоксинг", "Дитячий тренінг"],
      students: "180+ спортсменів"
    },
    en: {
      specialty: "Muay Thai coach",
      experience: "18+ years of experience",
      description: "Expert in Muay Thai with years of professional experience. Former athlete, now coach preparing athletes for fights and competitions at the highest level. Specializes in training all age groups.",
      achievements: ["Former Muay Thai Athlete", "European Kickboxing Champion", "IFMA Certificate", "Children's Group Coach", "Strike Technique Specialist"],
      specialties: ["Muay Thai", "Boxing", "Kickboxing", "Children's Training"],
      students: "180+ athletes"
    },
    by: {
      specialty: "Трэнер Муай Тай",
      experience: "18+ гадоў вопыту",
      description: "Эксперт па Муай Тай з шматгадовым прафесійным вопытам. Былы спартсмен, цяпер трэнер, які рыхтуе спартсменаў да баёў і спаборніцтваў найвышэйшага ўзроўню. Спецыялізуецца на трэніроўцы ўсіх узроставых груп.",
      achievements: ["Былы спартсмен Муай Тай", "Чэмпіён Еўропы па кікбоксінгу", "Сертыфікат IFMA", "Трэнер дзіцячых груп", "Спецыяліст тэхнікі удараў"],
      specialties: ["Муай Тай", "Бокс", "Кікбоксінг", "Дзіцячыя трэніроўкі"],
      students: "180+ спартсменаў"
    }
  },
  "wiktor-muronczyk": {
    pl: {
      specialty: "Trener szachów",
      experience: "25+ lat doświadczenia",
      description: "Mistrz szachowy prowadzący zajęcia dla wszystkich grup wiekowych. Specjalizuje się w rozwoju strategicznego myślenia i przygotowaniu do turniejów. Wieloletni doświadczenie w pracy z dziećmi i dorosłymi.",
      achievements: ["Międzynarodowy Mistrz Szachowy", "Trener FIDE", "Sędzia Turniejów Szachowych", "Autor Programów Edukacyjnych", "Specjalista Psychologii Sportu"],
      specialties: ["Szachy", "Strategia", "Logika", "Rozwój Intelektualny"],
      students: "300+ uczniów"
    },
    uk: {
      specialty: "Тренер шахів",
      experience: "25+ років досвіду",
      description: "Шаховий майстер, який проводить заняття для всіх вікових груп. Спеціалізується на розвитку стратегічного мислення та підготовці до турнірів. Багаторічний досвід роботи з дітьми та дорослими.",
      achievements: ["Міжнародний шаховий майстер", "Тренер FIDE", "Суддя шахових турнірів", "Автор освітніх програм", "Спеціаліст спортивної психології"],
      specialties: ["Шахи", "Стратегія", "Логіка", "Інтелектуальний розвиток"],
      students: "300+ учнів"
    },
    en: {
      specialty: "Chess coach",
      experience: "25+ years of experience",
      description: "Chess master conducting classes for all age groups. Specializes in developing strategic thinking and tournament preparation. Years of experience working with children and adults.",
      achievements: ["International Chess Master", "FIDE Coach", "Chess Tournament Judge", "Educational Program Author", "Sports Psychology Specialist"],
      specialties: ["Chess", "Strategy", "Logic", "Intellectual Development"],
      students: "300+ students"
    },
    by: {
      specialty: "Трэнер шахмат",
      experience: "25+ гадоў вопыту",
      description: "Шахматны майстар, які праводзіць заняткі для ўсіх узроставых груп. Спецыялізуецца на развіцці стратэгічнага мыслення і падрыхтоўцы да турніраў. Шматгадовы вопыт працы з дзецьмі і дарослымі.",
      achievements: ["Міжнародны шахматны майстар", "Трэнер FIDE", "Суддзя шахматных турніраў", "Аўтар адукацыйных праграм", "Спецыяліст спартыўнай псіхалогіі"],
      specialties: ["Шахматы", "Стратэгія", "Логіка", "Інтэлектуальнае развіццё"],
      students: "300+ вучняў"
    }
  },
  "pawel-szymkowicz": {
    pl: {
      specialty: "Trener MMA",
      experience: "10+ lat doświadczenia",
      description: "Specjalista w MMA z wieloletnim doświadczeniem w trenowaniu zawodników wszystkich grup wiekowych. Certyfikowany instruktor z międzynarodowymi osiągnięciami. Specjalizuje się w technikach mieszanych sztuk walki.",
      achievements: ["Mistrz Polski w MMA", "Certyfikat Instruktora MMA", "Trener Grup Dziecięcych", "Specjalista Technik Mieszanych", "Ekspert Walki w Parterze"],
      specialties: ["MMA", "Walka w Parterze", "Techniki Mieszane", "Walka w Klinczu"],
      students: "120+ zawodników"
    },
    uk: {
      specialty: "Тренер ММА",
      experience: "10+ років досвіду",
      description: "Спеціаліст з ММА з багаторічним досвідом тренування спортсменів всіх вікових груп. Сертифікований інструктор з міжнародними досягненнями. Спеціалізується на техніках змішаних бойових мистецтв.",
      achievements: ["Чемпіон Польщі з ММА", "Сертифікат інструктора ММА", "Тренер дитячих груп", "Спеціаліст змішаних технік", "Експерт партерної боротьби"],
      specialties: ["ММА", "Партерна боротьба", "Змішані техніки", "Боротьба в клінчі"],
      students: "120+ спортсменів"
    },
    en: {
      specialty: "MMA coach",
      experience: "10+ years of experience",
      description: "MMA specialist with years of experience training athletes of all age groups. Certified instructor with international achievements. Specializes in mixed martial arts techniques.",
      achievements: ["Polish MMA Champion", "MMA Instructor Certificate", "Children's Group Coach", "Mixed Techniques Specialist", "Ground Fighting Expert"],
      specialties: ["MMA", "Ground Fighting", "Mixed Techniques", "Clinch Fighting"],
      students: "120+ athletes"
    },
    by: {
      specialty: "Трэнер ММА",
      experience: "10+ гадоў вопыту",
      description: "Спецыяліст па ММА з шматгадовым вопытам трэніроўкі спартсменаў усіх узроставых груп. Сертыфікаваны інструктар з міжнароднымі дасягненнямі. Спецыялізуецца на тэхніках змяшаных баявых мастацтваў.",
      achievements: ["Чэмпіён Польшчы па ММА", "Сертыфікат інструктара ММА", "Трэнер дзіцячых груп", "Спецыяліст змяшаных тэхнік", "Эксперт партэрнай барацьбы"],
      specialties: ["ММА", "Партэрная барацьба", "Змяшаныя тэхнікі", "Барацьба ў клінчы"],
      students: "120+ спартсменаў"
    }
  },
  "daria-koba": {
    pl: {
      specialty: "Judo (dzieci), VolatMOVE Kids",
      experience: "8+ lat doświadczenia",
      description: "Specjalistka w treningu motorycznym dla najmłodszych dzieci oraz judo. Ma wyjątkowe podejście do pracy z dziećmi w wieku przedszkolnym i szkolnym. Certyfikowana instruktorka z wieloletnim doświadczeniem w rozwoju podstawowych umiejętności motorycznych oraz treningu judo dla dzieci.",
      achievements: ["Certyfikat Instruktora Treningu Motorycznego", "Certyfikat Instruktora Judo", "Specjalistka Pracy z Dziećmi", "Trener Grup Dziecięcych", "Ekspert Rozwoju Koordynacji", "Instruktor VolatMOVE Kids"],
      specialties: ["Judo (dzieci)", "Trening Motoryczny", "VolatMOVE Kids", "Rozwój Koordynacji"],
      students: "120+ dzieci"
    },
    uk: {
      specialty: "Дзюдо (діти), VolatMOVE Kids",
      experience: "8+ років досвіду",
      description: "Спеціалістка з моторичного тренінгу для наймолодших дітей та дзюдо. Має унікальний підхід до роботи з дітьми дошкільного та шкільного віку. Сертифікована інструкторка з багаторічним досвідом розвитку базових моторичних навичок та тренінгу дзюдо для дітей.",
      achievements: ["Сертифікат інструктора моторичного тренінгу", "Сертифікат інструктора дзюдо", "Спеціалістка роботи з дітьми", "Тренер дитячих груп", "Експерт розвитку координації", "Інструктор VolatMOVE Kids"],
      specialties: ["Дзюдо (діти)", "Моторичний тренінг", "VolatMOVE Kids", "Розвиток координації"],
      students: "120+ дітей"
    },
    en: {
      specialty: "Judo (children), VolatMOVE Kids",
      experience: "8+ years of experience",
      description: "Specialist in motor training for the youngest children and judo. Has a unique approach to working with preschool and school-age children. Certified instructor with years of experience developing basic motor skills and judo training for children.",
      achievements: ["Motor Training Instructor Certificate", "Judo Instructor Certificate", "Children's Work Specialist", "Children's Group Coach", "Coordination Development Expert", "VolatMOVE Kids Instructor"],
      specialties: ["Judo (children)", "Motor Training", "VolatMOVE Kids", "Coordination Development"],
      students: "120+ children"
    },
    by: {
      specialty: "Дзюдо (дзеці), VolatMOVE Kids",
      experience: "8+ гадоў вопыту",
      description: "Спецыялістка па маторных трэніроўках для самых маладых дзяцей і дзюдо. Мае унікальны падыход да працы з дзецьмі дашкольнага і школьнага ўзросту. Сертыфікаваная інструктарка з шматгадовым вопытам развіцця асноўных маторных навыкаў і трэніроўкі дзюдо для дзяцей.",
      achievements: ["Сертыфікат інструктара маторных трэніровак", "Сертыфікат інструктара дзюдо", "Спецыялістка працы з дзецьмі", "Трэнер дзіцячых груп", "Эксперт развіцця каардынацыі", "Інструктар VolatMOVE Kids"],
      specialties: ["Дзюдо (дзеці)", "Маторныя трэніроўкі", "VolatMOVE Kids", "Развіццё каардынацыі"],
      students: "120+ дзяцей"
    }
  }
}

const translations = {
  pl: {
    title: "Trenerzy Klubu VOLAT",
    subtitle: "Poznaj naszych doświadczonych trenerów, którzy pomogą Ci osiągnąć cele sportowe",
    description: "Każdy z naszych trenerów to ekspert w swojej dziedzinie z międzynarodowym doświadczeniem",
    students: "Uczniowie",
    specialties: "Specjalizacje",
    achievements: "Osiągnięcia",
    bookWithCoach: "Zapisz się do trenera",
    viewDetails: "Zobacz szczegóły",
    whyOurCoaches: "Dlaczego Nasi Trenerzy?",
    whyOurCoachesDesc: "Doświadczeni profesjonaliści z międzynarodowymi certyfikatami i wieloletnim doświadczeniem",
    activeStudents: "Aktywnych uczniów",
    yearsExperience: "Lat łącznego doświadczenia",
    internationalCerts: "Międzynarodowych certyfikatów",
    experts: "Ekspertów w zespole"
  },
  uk: {
    title: "Тренери Клубу VOLAT",
    subtitle: "Познайомтеся з нашими досвідченими тренерами, які допоможуть вам досягти спортивних цілей",
    description: "Кожен з наших тренерів - експерт у своїй галузі з міжнародним досвідом",
    students: "Учні",
    specialties: "Спеціалізації",
    achievements: "Досягнення",
    bookWithCoach: "Записатися до тренера",
    viewDetails: "Детальніше",
    whyOurCoaches: "Чому наші тренери?",
    whyOurCoachesDesc: "Досвідчені професіонали з міжнародними сертифікатами та багаторічним досвідом",
    activeStudents: "Активних учнів",
    yearsExperience: "Років сукупного досвіду",
    internationalCerts: "Міжнародних сертифікатів",
    experts: "Експертів у команді"
  },
  en: {
    title: "VOLAT Club Coaches",
    subtitle: "Meet our experienced coaches who will help you achieve your sports goals",
    description: "Each of our coaches is an expert in their field with international experience",
    students: "Students",
    specialties: "Specialties",
    achievements: "Achievements",
    bookWithCoach: "Book with coach",
    viewDetails: "View details",
    whyOurCoaches: "Why Our Coaches?",
    whyOurCoachesDesc: "Experienced professionals with international certificates and years of experience",
    activeStudents: "Active students",
    yearsExperience: "Years of combined experience",
    internationalCerts: "International certificates",
    experts: "Experts in the team"
  },
  by: {
    title: "Трэнеры Клуба VOLAT",
    subtitle: "Пазнаёмцеся з нашымі вопытнымі трэнерамі, якія дапамогуць вам дасягнуць спартыўных мэт",
    description: "Кожны з нашых трэнераў - эксперт у сваёй галіне з міжнародным вопытам",
    students: "Вучні",
    specialties: "Спецыялізацыі",
    achievements: "Дасягненні",
    bookWithCoach: "Запісацца да трэнера",
    viewDetails: "Падрабязна",
    whyOurCoaches: "Чаму нашы трэнеры?",
    whyOurCoachesDesc: "Вопытныя прафесіяналы з міжнароднымі сертыфікатамі і шматгадовым вопытам",
    activeStudents: "Актыўных вучняў",
    yearsExperience: "Гадоў сукупнага вопыту",
    internationalCerts: "Міжнародных сертыфікатаў",
    experts: "Экспертаў у камандзе"
  }
}

export default function CoachesPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black">

      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-accent font-light mb-8">
              {t.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-primary font-light">
              {t.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coaches.map((coach, index) => {
              const coachT = coachTranslations[coach.id]?.[currentLang] || coachTranslations[coach.id]?.pl || {
                specialty: coach.specialty,
                experience: coach.experience,
                description: coach.description,
                achievements: coach.achievements,
                specialties: coach.specialties,
                students: coach.students
              }
              // Priority только для первого изображения для оптимизации загрузки
              const isPriority = index === 0
              return (
              <div key={index} className="group flex flex-col">
                <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group overflow-hidden backdrop-blur-md flex-1 flex flex-col min-h-[600px]">
                  <Link 
                    href={`/coaches/${coach.id}`} 
                    className="flex-1 flex flex-col"
                    onClick={(e) => {
                      // Prevent zoom on iOS Safari
                      if (e.currentTarget) {
                        e.preventDefault();
                        window.location.href = `/coaches/${coach.id}`;
                      }
                    }}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <div className="aspect-square overflow-hidden relative bg-transparent bg-gradient-to-br from-gray-900 to-black">
                      <Image
                        src={coach.image || "/placeholder.svg"}
                        alt={`${coach.name} - ${coachT.specialty} w klubie VOLAT`}
                        title={`${coach.name} - Trener ${coachT.specialty} w klubie VOLAT Warszawa`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover transition-opacity duration-300"
                        loading="lazy"
                        quality={50}
                      />
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="font-display text-xl text-white mb-3 font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{coach.name}</CardTitle>
                      <CardDescription className="font-primary">
                        <Badge
                          variant="secondary"
                          className="mb-3 bg-transparent border border-red-500/50 text-red-300 px-3 py-1 text-xs shadow-md font-accent font-bold break-words overflow-wrap-anywhere max-w-full"
                        >
                          {coachT.specialty}
                        </Badge>
                        <p className="text-gray-300 text-sm font-primary font-light mb-2">{coachT.experience}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                          <Users className="w-3 h-3" />
                          <span className="font-primary">{coachT.students}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 flex-1 flex flex-col">
                      <p className="text-gray-400 text-sm leading-relaxed font-primary font-light mb-4 flex-1">
                        {coachT.description}
                      </p>

                      {/* Specjalizacje */}
                      <div className="mb-4">
                        <h4 className="text-red-400 font-accent font-semibold text-xs mb-2">{t.specialties}</h4>
                        <div className="flex flex-wrap gap-1">
                          {coachT.specialties.slice(0, 3).map((specialty, i) => (
                            <Badge key={i} variant="outline" className="border-red-500/30 text-red-300 text-xs font-primary bg-red-500/10">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Osiągnięcia */}
                      <div className="mb-4">
                        <h4 className="text-red-400 font-accent font-semibold text-xs mb-2 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {t.achievements}
                        </h4>
                        <ul className="text-gray-400 text-xs space-y-1">
                          {coachT.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 font-primary">
                              <div className="w-1 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                </Link>
                
                  {/* Кнопки действий */}
                  <div className="p-6 pt-0">
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="w-full px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-medium rounded-xl shadow-lg block text-center"
                      >
                        {t.bookWithCoach}
                      </a>
                      <Link 
                        href={`/coaches/${coach.id}`} 
                        className="w-full"
                        onClick={(e) => {
                          // Prevent zoom on iOS Safari
                          e.stopPropagation();
                          if (e.currentTarget) {
                            e.preventDefault();
                            window.location.href = `/coaches/${coach.id}`;
                          }
                        }}
                        style={{ touchAction: 'manipulation' }}
                      >
                        <button 
                          className="w-full px-4 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl"
                          style={{ touchAction: 'manipulation' }}
                        >
                          {t.viewDetails}
                        </button>
                      </Link>
                    </div>
                </div>
                </Card>
              </div>
            )})}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {t.whyOurCoaches}
            </h2>
            <p className="text-gray-400 text-lg font-accent mb-12 max-w-2xl mx-auto">
              {t.whyOurCoachesDesc}
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">830+</div>
                <p className="text-gray-400 font-primary">{t.activeStudents}</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">70+</div>
                <p className="text-gray-400 font-primary">{t.yearsExperience}</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">25+</div>
                <p className="text-gray-400 font-primary">{t.internationalCerts}</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">4</div>
                <p className="text-gray-400 font-primary">{t.experts}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
