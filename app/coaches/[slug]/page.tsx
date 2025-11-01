import CoachDetailClient from "./coach-detail-client"

const coaches = {
  "vital-rak": {
    name: "Vital Rak",
    specialty: "Główny trener, karate (sportowa grupa, dorośli), trening funkcjonalny",
    experience: "15+ lat doświadczenia",
    description:
      "Główny trener klubu VOLAT z wieloletnim doświadczeniem w karate i treningu funkcjonalnym. Mistrz sportu, certyfikowany instruktor WKF. Specjalizuje się w przygotowaniu zawodników do zawodów międzynarodowych. Prowadzi karate sportową grupę i zajęcia dla dorosłych oraz trening funkcjonalny.",
    image: "/coach-senior-male.jpg",
    achievements: [
      "Mistrz Sportu w Karate",
      "Certyfikat WKF 3 Dan",
      "Trener Kadry Narodowej",
      "Instruktor Treningu Funkcjonalnego",
      "Specjalista Rehabilitacji Sportowej"
    ],
    upcomingSessions: [
      { day: "Wtorek", time: "17:15-18:15", discipline: "Karate (dzieci 10+, zaczynające)", location: "Mokotów" },
      { day: "Piątek", time: "20:30-22:00", discipline: "Karate (dorośli)", location: "Mokotów" },
      { day: "Sobota", time: "15:00-17:00", discipline: "Karate (sportowa grupa)", location: "Mokotów" },
    ],
  },
  "volha-yefimenka": {
    name: "Volha Yefimenka",
    specialty: "Karate (dzieci 1-й и 2-й год обучения), trening motoryczny VolatMOVE Junior, Muay Thai",
    experience: "12+ lat doświadczenia",
    description:
      "Specjalistka w karate dla dzieci oraz treningu motorycznym. Prowadzi zajęcia karate dla dzieci w wieku 7-11 lat (1-й и 2-й rok nauki), trening motoryczny VolatMOVE Junior oraz zajęcia Muay Thai. Ma wyjątkowe podejście do najmłodszych zawodników. Certyfikowana instruktorka z wieloletnim doświadczeniem w pracy z dziećmi.",
    image: "/karate-female-trainer.jpg",
    achievements: [
      "Mistrzyni Białorusi w Karate",
      "Certyfikat Instruktora Dziecięcego",
      "Specjalistka Treningu Motorycznego",
      "Trener Grup Dziecięcych",
      "Instruktor VolatMOVE Junior",
      "Ekspert Rozwoju Koordynacji"
    ],
    upcomingSessions: [
      { day: "Wtorek", time: "16:00-17:15", discipline: "Karate (2-й rok)", location: "Mokotów" },
      { day: "Wtorek", time: "17:15-18:15", discipline: "Karate (1-й rok)", location: "Mokotów" },
      { day: "Wtorek", time: "18:15-19:15", discipline: "VolatMOVE Junior", location: "Mokotów" },
      { day: "Sobota", time: "11:00-12:30", discipline: "Muay Thai (młodzież)", location: "Mokotów" },
    ],
  },
  "mikola-taczylin": {
    name: "Mikoła Taczylin",
    specialty: "Trener Muay Thai dla dzieci, młodzieży i dorosłych",
    experience: "18+ lat doświadczenia",
    description:
      "Ekspert w Muay Thai z wieloletnim doświadczeniem zawodowym. Były zawodnik, obecnie trener przygotowujący zawodników do walk i zawodów na najwyższym poziomie. Specjalizuje się w trenowaniu wszystkich grup wiekowych.",
    image: "/coach-mature-male.jpg",
    achievements: [
      "Były Zawodnik Muay Thai",
      "Mistrz Europy Kickboxingu",
      "Certyfikat IFMA",
      "Trener Zawodników Profesjonalnych",
      "Specjalista Techniki Uderzeń"
    ],
    upcomingSessions: [
      { day: "Poniedziałek", time: "20:00-21:30", discipline: "Muay Thai", location: "Praga" },
      { day: "Środa", time: "19:00-20:30", discipline: "Boks", location: "Mokotów" },
      { day: "Piątek", time: "20:00-21:30", discipline: "Kickboxing", location: "Praga" },
    ],
  },
  "wiktor-muronczyk": {
    name: "Wiktor Murończyk",
    specialty: "Trener szkoły szachowej",
    experience: "25+ lat doświadczenia",
    description:
      "Mistrz szachowy prowadzący zajęcia dla wszystkich grup wiekowych. Specjalizuje się w rozwoju strategicznego myślenia i przygotowaniu do turniejów. Wieloletni doświadczenie w pracy z dziećmi i dorosłymi.",
    image: "/coach-young-male.jpg",
    achievements: [
      "Międzynarodowy Mistrz Szachowy",
      "Trener FIDE",
      "Sędzia Turniejów Szachowych",
      "Autor Programów Edukacyjnych",
      "Specjalista Psychologii Sportu"
    ],
    upcomingSessions: [
      { day: "Wtorek", time: "18:00-19:30", discipline: "Szachy", location: "Mokotów" },
      { day: "Czwartek", time: "17:00-18:30", discipline: "Szachy", location: "Praga" },
      { day: "Sobota", time: "14:00-15:30", discipline: "Szachy", location: "Mokotów" },
    ],
  },
  "pawel-szymkowicz": {
    name: "Paweł Szymkowicz",
    specialty: "Trener MMA dla dzieci od 6 lat, młodzieży i dorosłych",
    experience: "10+ lat doświadczenia",
    description:
      "Specjalista w MMA z wieloletnim doświadczeniem w trenowaniu zawodników wszystkich grup wiekowych. Certyfikowany instruktor z międzynarodowymi osiągnięciami. Specjalizuje się w technikach mieszanych sztuk walki.",
    image: "/coach-bearded-male.jpg",
    achievements: [
      "Mistrz Polski w MMA",
      "Certyfikat Instruktora MMA",
      "Trener Grup Dziecięcych",
      "Specjalista Technik Mieszanych",
      "Ekspert Walki w Parterze"
    ],
    upcomingSessions: [
      { day: "Wtorek", time: "16:00-17:30", discipline: "MMA Dziecięce", location: "Mokotów" },
      { day: "Czwartek", time: "19:00-20:30", discipline: "MMA Młodzież", location: "Praga" },
      { day: "Sobota", time: "11:00-12:30", discipline: "MMA Dorośli", location: "Mokotów" },
    ],
  },
  "daria-koba": {
    name: "Daria Koba",
    specialty: "Trening motoryczny VolatMOVE Kids (dzieci 4-7 lat), Judo dla dzieci",
    experience: "8+ lat doświadczenia",
    description:
      "Specjalistka w treningu motorycznym dla najmłodszych dzieci oraz judo. Ma wyjątkowe podejście do pracy z dziećmi w wieku przedszkolnym i szkolnym. Certyfikowana instruktorka z wieloletnim doświadczeniem w rozwoju podstawowych umiejętności motorycznych oraz treningu judo dla dzieci.",
    image: "/judo-female-trainer.jpg",
    achievements: [
      "Certyfikat Instruktora Treningu Motorycznego",
      "Certyfikat Instruktora Judo",
      "Specjalistka Pracy z Dziećmi",
      "Trener Grup Dziecięcych",
      "Ekspert Rozwoju Koordynacji",
      "Instruktor VolatMOVE Kids"
    ],
    upcomingSessions: [
      { day: "Poniedziałek", time: "17:30-18:15", discipline: "VolatMOVE Kids", location: "Mokotów" },
      { day: "Poniedziałek", time: "18:15-19:15", discipline: "Judo (dzieci)", location: "Mokotów" },
      { day: "Środa", time: "17:30-18:15", discipline: "VolatMOVE Kids", location: "Mokotów" },
      { day: "Środa", time: "18:15-19:15", discipline: "Judo (dzieci)", location: "Mokotów" },
      { day: "Piątek", time: "17:30-18:15", discipline: "VolatMOVE Kids", location: "Mokotów" },
      { day: "Piątek", time: "18:15-19:15", discipline: "Judo (dzieci)", location: "Mokotów" },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(coaches).map((slug) => ({
    slug: slug,
  }))
}

export default function CoachDetailPage({ params }: { params: { slug: string } }) {
  const coach = coaches[params.slug as keyof typeof coaches] || null

  return <CoachDetailClient coach={coach} slug={params.slug} />
}
