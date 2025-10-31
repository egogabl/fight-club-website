import CoachDetailClient from "./coach-detail-client"

const coaches = {
  "vital-rak": {
    name: "Vital Rak",
    specialty: "Główny trener, karate, trening funkcjonalny",
    experience: "15+ lat doświadczenia",
    description:
      "Główny trener klubu VOLAT z wieloletnim doświadczeniem w karate i treningu funkcjonalnym. Mistrz sportu, certyfikowany instruktor WKF. Specjalizuje się w przygotowaniu zawodników do zawodów międzynarodowych.",
    image: "/coach-senior-male.png",
    achievements: [
      "Mistrz Sportu w Karate",
      "Certyfikat WKF 3 Dan",
      "Trener Kadry Narodowej",
      "Instruktor Treningu Funkcjonalnego",
      "Specjalista Rehabilitacji Sportowej"
    ],
    upcomingSessions: [
      { day: "Poniedziałek", time: "18:00-19:30", discipline: "Karate WKF", location: "Mokotów" },
      { day: "Środa", time: "17:00-18:30", discipline: "Karate WKF", location: "Praga" },
      { day: "Piątek", time: "18:00-19:30", discipline: "Karate WKF", location: "Mokotów" },
    ],
  },
  "volha-yefimenka": {
    name: "Volha Yefimenka",
    specialty: "Karate, trening motoryczny dzieci",
    experience: "12+ lat doświadczenia",
    description:
      "Specjalistka w karate i treningu motorycznym dzieci. Ma wyjątkowe podejście do najmłodszych zawodników. Certyfikowana instruktorka z wieloletnim doświadczeniem w pracy z dziećmi.",
    image: "/karate-female-trainer.png",
    achievements: [
      "Mistrzyni Białorusi w Karate",
      "Certyfikat Instruktora Dziecięcego",
      "Specjalistka Treningu Motorycznego",
      "Trener Grup Młodzieżowych",
      "Ekspert Rozwoju Koordynacji"
    ],
    upcomingSessions: [
      { day: "Wtorek", time: "16:00-17:30", discipline: "Karate Dziecięce", location: "Mokotów" },
      { day: "Czwartek", time: "17:00-18:30", discipline: "Trening Motoryczny", location: "Praga" },
      { day: "Sobota", time: "10:00-11:30", discipline: "Karate Dziecięce", location: "Mokotów" },
    ],
  },
  "mikola-taczylin": {
    name: "Mikoła Taczylin",
    specialty: "Trener Muay Thai dla dzieci, młodzieży i dorosłych",
    experience: "18+ lat doświadczenia",
    description:
      "Ekspert w Muay Thai z wieloletnim doświadczeniem zawodowym. Były zawodnik, obecnie trener przygotowujący zawodników do walk i zawodów na najwyższym poziomie. Specjalizuje się w trenowaniu wszystkich grup wiekowych.",
    image: "/coach-mature-male.png",
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
    image: "/coach-young-male.png",
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
    image: "/coach-bearded-male.png",
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
  "maria-kowalska": {
    name: "Maria Kowalska",
    specialty: "Judo / Jiu-Jitsu",
    experience: "8+ lat doświadczenia",
    description:
      "Specjalistka w judo i jiu-jitsu z wieloletnim doświadczeniem w trenowaniu zawodników. Certyfikowana instruktorka z międzynarodowymi osiągnięciami. Specjalizuje się w technikach rzutów i walce w parterze.",
    image: "/judo-female-trainer.png",
    achievements: [
      "Mistrzyni Polski w Judo",
      "Certyfikat Instruktora Judo",
      "Trener Grup Młodzieżowych",
      "Specjalistka Technik Rzutów",
      "Ekspert Walki w Parterze"
    ],
    upcomingSessions: [
      { day: "Poniedziałek", time: "17:00-18:30", discipline: "Judo", location: "Praga" },
      { day: "Środa", time: "18:00-19:30", discipline: "Jiu-Jitsu", location: "Mokotów" },
      { day: "Piątek", time: "17:00-18:30", discipline: "Judo", location: "Praga" },
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
