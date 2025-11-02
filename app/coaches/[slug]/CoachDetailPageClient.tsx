"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

interface Coach {
  name: string
  specialty: string
  experience: string
  description: string
  image: string
  achievements: string[]
  upcomingSessions: {
    day: string
    time: string
    discipline: string
    location: string
  }[]
}

interface CoachDetailPageClientProps {
  coachesData: Record<string, Coach>
}

// Translations for coach data
const coachTranslations: Record<string, Record<string, {
  specialty: string
  experience: string
  description: string
  achievements: string[]
}>> = {
  "vital-rak": {
    pl: {
      specialty: "Główny trener, karate",
      experience: "15+ lat doświadczenia",
      description: "Główny trener klubu VOLAT z wieloletnim doświadczeniem w karate i treningu funkcjonalnym. Mistrz sportu, certyfikowany instruktor WKF. Specjalizuje się w przygotowaniu zawodników do zawodów międzynarodowych. Prowadzi karate sportową grupę i zajęcia dla dorosłych oraz trening funkcjonalny.",
      achievements: ["Mistrz Sportu w Karate", "Certyfikat WKF 3 Dan", "Trener Kadry Narodowej", "Instruktor Treningu Funkcjonalnego", "Specjalista Rehabilitacji Sportowej"]
    },
    uk: {
      specialty: "Головний тренер, карате",
      experience: "15+ років досвіду",
      description: "Головний тренер клубу VOLAT з багаторічним досвідом у карате та функціональному тренінгу. Майстер спорту, сертифікований інструктор WKF. Спеціалізується на підготовці спортсменів до міжнародних змагань. Проводить спортивну групу карате та заняття для дорослих, а також функціональний тренінг.",
      achievements: ["Майстер спорту з карате", "Сертифікат WKF 3 Дан", "Тренер національної збірної", "Інструктор функціонального тренінгу", "Спеціаліст спортивної реабілітації"]
    },
    en: {
      specialty: "Head coach, karate",
      experience: "15+ years of experience",
      description: "Head coach of VOLAT club with years of experience in karate and functional training. Master of Sports, certified WKF instructor. Specializes in preparing athletes for international competitions. Conducts sports karate group and adult classes as well as functional training.",
      achievements: ["Master of Sports in Karate", "WKF 3 Dan Certificate", "National Team Coach", "Functional Training Instructor", "Sports Rehabilitation Specialist"]
    },
    by: {
      specialty: "Галоўны трэнер, каратэ",
      experience: "15+ гадоў вопыту",
      description: "Галоўны трэнер клуба VOLAT з шматгадовым вопытам у каратэ і функцыянальных трэніроўках. Майстар спорту, сертыфікаваны інструктар WKF. Спецыялізуецца на падрыхтоўцы спартсменаў да міжнародных спаборніцтваў. Праводзіць спартыўную групу каратэ і заняткі для дарослых, а таксама функцыянальныя трэніроўкі.",
      achievements: ["Майстар спорту па каратэ", "Сертыфікат WKF 3 Дан", "Трэнер нацыянальнай зборнай", "Інструктар функцыянальных трэніровак", "Спецыяліст спартыўнай рэабілітацыі"]
    }
  },
  "volha-yefimenka": {
    pl: {
      specialty: "Karate (dzieci), Muay Thai",
      experience: "12+ lat doświadczenia",
      description: "Specjalistka w karate dla dzieci oraz treningu motorycznym. Prowadzi zajęcia karate dla dzieci w wieku 7-11 lat (1-й и 2-й rok nauki), trening motoryczny VolatMOVE Junior oraz zajęcia Muay Thai. Ma wyjątkowe podejście do najmłodszych zawodników. Certyfikowana instruktorka z wieloletnim doświadczeniem w pracy z dziećmi.",
      achievements: ["Mistrzyni Białorusi w Karate", "Certyfikat Instruktora Dziecięcego", "Specjalistka Treningu Motorycznego", "Trener Grup Dziecięcych", "Instruktor VolatMOVE Junior", "Ekspert Rozwoju Koordynacji"]
    },
    uk: {
      specialty: "Карате (діти), Муай Тай",
      experience: "12+ років досвіду",
      description: "Спеціалістка з карате для дітей та моторичного тренінгу. Проводить заняття карате для дітей віком 7-11 років (1-й та 2-й рік навчання), моторичний тренінг VolatMOVE Junior та заняття Муай Тай. Має унікальний підхід до наймолодших спортсменів. Сертифікована інструкторка з багаторічним досвідом роботи з дітьми.",
      achievements: ["Чемпіонка Білорусі з карате", "Сертифікат дитячого інструктора", "Спеціалістка моторичного тренінгу", "Тренер дитячих груп", "Інструктор VolatMOVE Junior", "Експерт розвитку координації"]
    },
    en: {
      specialty: "Karate (children), Muay Thai",
      experience: "12+ years of experience",
      description: "Specialist in children's karate and motor training. Conducts karate classes for children aged 7-11 (1st and 2nd year), VolatMOVE Junior motor training, and Muay Thai classes. Has a unique approach to the youngest athletes. Certified instructor with years of experience working with children.",
      achievements: ["Belarus Karate Champion", "Children's Instructor Certificate", "Motor Training Specialist", "Children's Group Coach", "VolatMOVE Junior Instructor", "Coordination Development Expert"]
    },
    by: {
      specialty: "Каратэ (дзеці), Муай Тай",
      experience: "12+ гадоў вопыту",
      description: "Спецыялістка па каратэ для дзяцей і маторных трэніроўках. Праводзіць заняткі каратэ для дзяцей ва ўзросце 7-11 гадоў (1-й і 2-й год навучання), маторныя трэніроўкі VolatMOVE Junior і заняткі Муай Тай. Мае унікальны падыход да самых маладых спартсменаў. Сертыфікаваная інструктарка з шматгадовым вопытам працы з дзецьмі.",
      achievements: ["Чэмпіёнка Беларусі па каратэ", "Сертыфікат дзіцячага інструктара", "Спецыялістка маторных трэніровак", "Трэнер дзіцячых груп", "Інструктар VolatMOVE Junior", "Эксперт развіцця каардынацыі"]
    }
  },
  "mikola-taczylin": {
    pl: {
      specialty: "Trener Muay Thai",
      experience: "18+ lat doświadczenia",
      description: "Ekspert w Muay Thai z wieloletnim doświadczeniem zawodowym. Były zawodnik, obecnie trener przygotowujący zawodników do walk i zawodów na najwyższym poziomie. Specjalizuje się w trenowaniu wszystkich grup wiekowych.",
      achievements: ["Były Zawodnik Muay Thai", "Mistrz Europy Kickboxingu", "Certyfikat IFMA", "Trener Grup Dziecięcych", "Specjalista Techniki Uderzeń"]
    },
    uk: {
      specialty: "Тренер Муай Тай",
      experience: "18+ років досвіду",
      description: "Експерт з Муай Тай з багаторічним професійним досвідом. Колишній спортсмен, нині тренер, який готує спортсменів до боїв і змагань найвищого рівня. Спеціалізується на тренуванні всіх вікових груп.",
      achievements: ["Колишній спортсмен Муай Тай", "Чемпіон Європи з кікбоксингу", "Сертифікат IFMA", "Тренер дитячих груп", "Спеціаліст техніки ударів"]
    },
    en: {
      specialty: "Muay Thai coach",
      experience: "18+ years of experience",
      description: "Expert in Muay Thai with years of professional experience. Former athlete, now coach preparing athletes for fights and competitions at the highest level. Specializes in training all age groups.",
      achievements: ["Former Muay Thai Athlete", "European Kickboxing Champion", "IFMA Certificate", "Children's Group Coach", "Strike Technique Specialist"]
    },
    by: {
      specialty: "Трэнер Муай Тай",
      experience: "18+ гадоў вопыту",
      description: "Эксперт па Муай Тай з шматгадовым прафесійным вопытам. Былы спартсмен, цяпер трэнер, які рыхтуе спартсменаў да баёў і спаборніцтваў найвышэйшага ўзроўню. Спецыялізуецца на трэніроўцы ўсіх узроставых груп.",
      achievements: ["Былы спартсмен Муай Тай", "Чэмпіён Еўропы па кікбоксінгу", "Сертыфікат IFMA", "Трэнер дзіцячых груп", "Спецыяліст тэхнікі удараў"]
    }
  },
  "wiktor-muronczyk": {
    pl: {
      specialty: "Trener szachów",
      experience: "25+ lat doświadczenia",
      description: "Mistrz szachowy prowadzący zajęcia dla wszystkich grup wiekowych. Specjalizuje się w rozwoju strategicznego myślenia i przygotowaniu do turniejów. Wieloletni doświadczenie w pracy z dziećmi i dorosłymi.",
      achievements: ["Międzynarodowy Mistrz Szachowy", "Trener FIDE", "Sędzia Turniejów Szachowych", "Autor Programów Edukacyjnych", "Specjalista Psychologii Sportu"]
    },
    uk: {
      specialty: "Тренер шахів",
      experience: "25+ років досвіду",
      description: "Шаховий майстер, який проводить заняття для всіх вікових груп. Спеціалізується на розвитку стратегічного мислення та підготовці до турнірів. Багаторічний досвід роботи з дітьми та дорослими.",
      achievements: ["Міжнародний шаховий майстер", "Тренер FIDE", "Суддя шахових турнірів", "Автор освітніх програм", "Спеціаліст спортивної психології"]
    },
    en: {
      specialty: "Chess coach",
      experience: "25+ years of experience",
      description: "Chess master conducting classes for all age groups. Specializes in developing strategic thinking and tournament preparation. Years of experience working with children and adults.",
      achievements: ["International Chess Master", "FIDE Coach", "Chess Tournament Judge", "Educational Program Author", "Sports Psychology Specialist"]
    },
    by: {
      specialty: "Трэнер шахмат",
      experience: "25+ гадоў вопыту",
      description: "Шахматны майстар, які праводзіць заняткі для ўсіх узроставых груп. Спецыялізуецца на развіцці стратэгічнага мыслення і падрыхтоўцы да турніраў. Шматгадовы вопыт працы з дзецьмі і дарослымі.",
      achievements: ["Міжнародны шахматны майстар", "Трэнер FIDE", "Суддзя шахматных турніраў", "Аўтар адукацыйных праграм", "Спецыяліст спартыўнай псіхалогіі"]
    }
  },
  "pawel-szymkowicz": {
    pl: {
      specialty: "Trener MMA",
      experience: "10+ lat doświadczenia",
      description: "Specjalista w MMA z wieloletnim doświadczeniem w trenowaniu zawodników wszystkich grup wiekowych. Certyfikowany instruktor z międzynarodowymi osiągnięciami. Specjalizuje się w technikach mieszanych sztuk walki.",
      achievements: ["Mistrz Polski w MMA", "Certyfikat Instruktora MMA", "Trener Grup Dziecięcych", "Specjalista Technik Mieszanych", "Ekspert Walki w Parterze"]
    },
    uk: {
      specialty: "Тренер ММА",
      experience: "10+ років досвіду",
      description: "Спеціаліст з ММА з багаторічним досвідом тренування спортсменів всіх вікових груп. Сертифікований інструктор з міжнародними досягненнями. Спеціалізується на техніках змішаних бойових мистецтв.",
      achievements: ["Чемпіон Польщі з ММА", "Сертифікат інструктора ММА", "Тренер дитячих груп", "Спеціаліст змішаних технік", "Експерт партерної боротьби"]
    },
    en: {
      specialty: "MMA coach",
      experience: "10+ years of experience",
      description: "MMA specialist with years of experience training athletes of all age groups. Certified instructor with international achievements. Specializes in mixed martial arts techniques.",
      achievements: ["Polish MMA Champion", "MMA Instructor Certificate", "Children's Group Coach", "Mixed Techniques Specialist", "Ground Fighting Expert"]
    },
    by: {
      specialty: "Трэнер ММА",
      experience: "10+ гадоў вопыту",
      description: "Спецыяліст па ММА з шматгадовым вопытам трэніроўкі спартсменаў усіх узроставых груп. Сертыфікаваны інструктар з міжнароднымі дасягненнямі. Спецыялізуецца на тэхніках змяшаных баявых мастацтваў.",
      achievements: ["Чэмпіён Польшчы па ММА", "Сертыфікат інструктара ММА", "Трэнер дзіцячых груп", "Спецыяліст змяшаных тэхнік", "Эксперт партэрнай барацьбы"]
    }
  },
  "daria-koba": {
    pl: {
      specialty: "Judo (dzieci), VolatMOVE Kids",
      experience: "8+ lat doświadczenia",
      description: "Specjalistka w treningu motorycznym dla najmłodszych dzieci oraz judo. Ma wyjątkowe podejście do pracy z dziećmi w wieku przedszkolnym i szkolnym. Certyfikowana instruktorka z wieloletnim doświadczeniem w rozwoju podstawowych umiejętności motorycznych oraz treningu judo dla dzieci.",
      achievements: ["Certyfikat Instruktora Treningu Motorycznego", "Certyfikat Instruktora Judo", "Specjalistka Pracy z Dziećmi", "Trener Grup Dziecięcych", "Ekspert Rozwoju Koordynacji", "Instruktor VolatMOVE Kids"]
    },
    uk: {
      specialty: "Дзюдо (діти), VolatMOVE Kids",
      experience: "8+ років досвіду",
      description: "Спеціалістка з моторичного тренінгу для наймолодших дітей та дзюдо. Має унікальний підхід до роботи з дітьми дошкільного та шкільного віку. Сертифікована інструкторка з багаторічним досвідом розвитку базових моторичних навичок та тренінгу дзюдо для дітей.",
      achievements: ["Сертифікат інструктора моторичного тренінгу", "Сертифікат інструктора дзюдо", "Спеціалістка роботи з дітьми", "Тренер дитячих груп", "Експерт розвитку координації", "Інструктор VolatMOVE Kids"]
    },
    en: {
      specialty: "Judo (children), VolatMOVE Kids",
      experience: "8+ years of experience",
      description: "Specialist in motor training for the youngest children and judo. Has a unique approach to working with preschool and school-age children. Certified instructor with years of experience developing basic motor skills and judo training for children.",
      achievements: ["Motor Training Instructor Certificate", "Judo Instructor Certificate", "Children's Work Specialist", "Children's Group Coach", "Coordination Development Expert", "VolatMOVE Kids Instructor"]
    },
    by: {
      specialty: "Дзюдо (дзеці), VolatMOVE Kids",
      experience: "8+ гадоў вопыту",
      description: "Спецыялістка па маторных трэніроўках для самых маладых дзяцей і дзюдо. Мае унікальны падыход да працы з дзецьмі дашкольнага і школьнага ўзросту. Сертыфікаваная інструктарка з шматгадовым вопытам развіцця асноўных маторных навыкаў і трэніроўкі дзюдо для дзяцей.",
      achievements: ["Сертыфікат інструктара маторных трэніровак", "Сертыфікат інструктара дзюдо", "Спецыялістка працы з дзецьмі", "Трэнер дзіцячых груп", "Эксперт развіцця каардынацыі", "Інструктар VolatMOVE Kids"]
    }
  }
}

const translations = {
  pl: {
    backToCoaches: "Powrót do trenerów",
    achievements: "Osiągnięcia",
    upcomingSessions: "Najbliższe zajęcia trenera",
    viewFullSchedule: "Zobacz pełny rozkład trenera",
    bookNow: "Zapisz się na zajęcia",
    days: {
      Poniedziałek: "Poniedziałek",
      Wtorek: "Wtorek",
      Środa: "Środa",
      Czwartek: "Czwartek",
      Piątek: "Piątek",
      Sobota: "Sobota",
      Niedziela: "Niedziela",
    },
    locations: {
      "Mokotów": "Mokotów",
      "Praga": "Praga Północ",
      "Praga Północ": "Praga Północ",
    },
    disciplines: {
      "Karate": "Karate",
      "Karate (dzieci 10+, zaczynające)": "Karate (dzieci 10+, początkujący)",
      "Karate (dorośli)": "Karate (dorośli)",
      "Karate (sportowa grupa)": "Karate (grupa sportowa)",
      "Karate (dzieci 1-й и 2-й rok nauki)": "Karate (dzieci 1-2 rok)",
      "Karate (1-й rok)": "Karate (1-й rok)",
      "Karate (2-й rok)": "Karate (2-й rok)",
      "Muay Thai": "Muay Thai / Kickboxing",
      "Muay Thai (młodzież)": "Muay Thai / Kickboxing (młodzież)",
      "Boks": "Boks",
      "Kickboxing": "Kickboxing",
      "VolatMOVE Junior": "VolatMOVE Junior",
      "VolatMOVE Kids": "VolatMOVE Kids",
      "Judo (dzieci)": "Judo (dzieci)",
      "Judo": "Judo",
      "MMA Dziecięce": "MMA (dzieci)",
      "MMA Młodzież": "MMA (młodzież)",
      "MMA Dorośli": "MMA (dorośli)",
      "MMA": "MMA",
      "Szachy": "Szachy",
    }
  },
  uk: {
    backToCoaches: "Повернутися до тренерів",
    achievements: "Досягнення",
    upcomingSessions: "Найближчі заняття тренера",
    viewFullSchedule: "Переглянути повний розклад тренера",
    bookNow: "Записатися на заняття",
    days: {
      Poniedziałek: "Понеділок",
      Wtorek: "Вівторок",
      Środa: "Середа",
      Czwartek: "Четвер",
      Piątek: "П'ятниця",
      Sobota: "Субота",
      Niedziela: "Неділя",
    },
    locations: {
      "Mokotów": "Мокотув",
      "Praga": "Прага Північна",
      "Praga Północ": "Прага Північна",
    },
    disciplines: {
      "Karate": "Карате",
      "Karate (dzieci 10+, zaczynające)": "Карате (діти 10+, початківці)",
      "Karate (dorośli)": "Карате (дорослі)",
      "Karate (sportowa grupa)": "Карате (спортивна група)",
      "Karate (dzieci 1-й и 2-й rok nauki)": "Карате (діти 1-2 рік)",
      "Karate (1-й rok)": "Карате (1-й рік)",
      "Karate (2-й rok)": "Карате (2-й рік)",
      "Muay Thai": "Муай Тай / Кікбоксинг",
      "Muay Thai (młodzież)": "Муай Тай / Кікбоксинг (молодь)",
      "Boks": "Бокс",
      "Kickboxing": "Кікбоксинг",
      "VolatMOVE Junior": "VolatMOVE Junior",
      "VolatMOVE Kids": "VolatMOVE Kids",
      "Judo (dzieci)": "Дзюдо (діти)",
      "Judo": "Дзюдо",
      "MMA Dziecięce": "ММА (діти)",
      "MMA Młodzież": "ММА (молодь)",
      "MMA Dorośli": "ММА (дорослі)",
      "MMA": "ММА",
      "Szachy": "Шахи",
    }
  },
  en: {
    backToCoaches: "Back to coaches",
    achievements: "Achievements",
    upcomingSessions: "Coach's upcoming sessions",
    viewFullSchedule: "View full coach schedule",
    bookNow: "Book now",
    days: {
      Poniedziałek: "Monday",
      Wtorek: "Tuesday",
      Środa: "Wednesday",
      Czwartek: "Thursday",
      Piątek: "Friday",
      Sobota: "Saturday",
      Niedziela: "Sunday",
    },
    locations: {
      "Mokotów": "Mokotów",
      "Praga": "Praga Północ",
      "Praga Północ": "Praga Północ",
    },
    disciplines: {
      "Karate": "Karate",
      "Karate (dzieci 10+, zaczynające)": "Karate (children 10+, beginners)",
      "Karate (dorośli)": "Karate (adults)",
      "Karate (sportowa grupa)": "Karate (sports group)",
      "Karate (dzieci 1-й и 2-й rok nauki)": "Karate (children 1-2 year)",
      "Karate (1-й rok)": "Karate (1st year)",
      "Karate (2-й rok)": "Karate (2nd year)",
      "Muay Thai": "Muay Thai / Kickboxing",
      "Muay Thai (młodzież)": "Muay Thai / Kickboxing (youth)",
      "Boks": "Boxing",
      "Kickboxing": "Kickboxing",
      "VolatMOVE Junior": "VolatMOVE Junior",
      "VolatMOVE Kids": "VolatMOVE Kids",
      "Judo (dzieci)": "Judo (children)",
      "Judo": "Judo",
      "MMA Dziecięce": "MMA (children)",
      "MMA Młodzież": "MMA (youth)",
      "MMA Dorośli": "MMA (adults)",
      "MMA": "MMA",
      "Szachy": "Chess",
    }
  },
  by: {
    backToCoaches: "Вярнуцца да трэнераў",
    achievements: "Дасягненні",
    upcomingSessions: "Найбліжэйшыя заняткі трэнера",
    viewFullSchedule: "Паглядзець поўны расклад трэнера",
    bookNow: "Запісацца на заняткі",
    days: {
      Poniedziałek: "Панядзелак",
      Wtorek: "Аўторак",
      Środa: "Серада",
      Czwartek: "Чацвер",
      Piątek: "Пятніца",
      Sobota: "Субота",
      Niedziela: "Нядзеля",
    },
    locations: {
      "Mokotów": "Макотув",
      "Praga": "Прага Паўночная",
      "Praga Północ": "Прага Паўночная",
    },
    disciplines: {
      "Karate": "Каратэ",
      "Karate (dzieci 10+, zaczynające)": "Каратэ (дзеці 10+, пачаткоўцы)",
      "Karate (dorośli)": "Каратэ (дарослыя)",
      "Karate (sportowa grupa)": "Каратэ (спартыўная група)",
      "Karate (dzieci 1-й и 2-й rok nauki)": "Каратэ (дзеці 1-2 год)",
      "Karate (1-й rok)": "Каратэ (1-й год)",
      "Karate (2-й rok)": "Каратэ (2-й год)",
      "Muay Thai": "Муай Тай / Кікбоксінг",
      "Muay Thai (młodzież)": "Муай Тай / Кікбоксінг (моладзь)",
      "Boks": "Бокс",
      "Kickboxing": "Кікбоксінг",
      "VolatMOVE Junior": "VolatMOVE Junior",
      "VolatMOVE Kids": "VolatMOVE Kids",
      "Judo (dzieci)": "Дзюдо (дзеці)",
      "Judo": "Дзюдо",
      "MMA Dziecięce": "ММА (дзеці)",
      "MMA Młodzież": "ММА (моладзь)",
      "MMA Dorośli": "ММА (дарослыя)",
      "MMA": "ММА",
      "Szachy": "Шахматы",
    }
  }
}

export default function CoachDetailPageClient({ coachesData }: CoachDetailPageClientProps) {
  const params = useParams()
  const slug = params.slug as string
  const coach = coachesData[slug as keyof typeof coachesData]
  const { currentLang } = useLanguage()
  const coachT = coachTranslations[slug]?.[currentLang] || coachTranslations[slug]?.pl || {
    specialty: coach?.specialty || "",
    experience: coach?.experience || "",
    description: coach?.description || "",
    achievements: coach?.achievements || []
  }
  const t = translations[currentLang] || translations.pl

  if (!coach) {
    const { currentLang: errorLang } = useLanguage()
    const errorT = translations[errorLang] || translations.pl
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Trener nie znaleziony</h1>
          <Link href="/coaches">
            <Button className="bg-red-600 hover:bg-red-700">{errorT.backToCoaches}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="pt-28 sm:pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center lg:items-start">
              <div className="w-full max-w-md lg:max-w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl relative bg-transparent bg-gradient-to-br from-gray-900 to-black mx-auto">
                <Image
                  src={coach.image || "/placeholder.svg"}
                  alt={`${coach.name} - ${coach.specialty} w klubie VOLAT Warszawa`}
                  title={`${coach.name} - Trener ${coach.specialty} w klubie VOLAT Warszawa`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain transition-opacity duration-300"
                  priority
                  loading="eager"
                  quality={60}
                />
              </div>

              <div className="w-full space-y-8 text-center lg:text-left">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-4 break-words">
                    {coach.name}
                  </h1>
                  <div className="flex justify-center lg:justify-start mb-6">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold break-words text-center max-w-full">
                      {coachT.specialty}
                    </Badge>
                  </div>
                  <p className="text-xl sm:text-2xl text-gray-300 font-serif mb-6 font-light break-words text-center lg:text-left">{coachT.experience}</p>
                  <p className="text-lg sm:text-xl text-gray-400 font-serif leading-relaxed font-light break-words text-center lg:text-left">{coachT.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-sans font-bold text-white mb-4 text-center lg:text-left">{t.achievements}</h3>
                  <ul className="space-y-2">
                    {coachT.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 font-serif text-lg flex items-center justify-center lg:justify-start text-center lg:text-left">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="break-words">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-4xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-8 text-center">
                {t.upcomingSessions}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {coach.upcomingSessions.map((session, index) => (
                  <Link key={index} href={`/schedule?coach=${slug}`}>
                    <Card className="border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group cursor-pointer">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="font-sans text-lg text-gray-300">{t.disciplines[session.discipline as keyof typeof t.disciplines] || session.discipline}</CardTitle>
                            <p className="text-gray-400 font-serif">{t.days[session.day as keyof typeof t.days] || session.day}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-red-400" />
                            <span className="text-gray-300 font-serif">{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-red-400" />
                            <span className="text-gray-300 font-serif">{t.locations[session.location as keyof typeof t.locations] || session.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href={`/schedule?coach=${slug}`} className="inline-block">
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-serif text-xl px-8 py-4 rounded-2xl shadow-lg font-bold h-[56px] flex items-center justify-center whitespace-nowrap">
                    {t.viewFullSchedule}
                  </Button>
                </Link>
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium text-lg px-8 py-4 rounded-2xl shadow-lg w-full sm:w-auto h-[56px] flex items-center justify-center whitespace-nowrap text-center no-underline mt-4 sm:mt-0 sm:ml-4 inline-block"
                >
                  {t.bookNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
