import { Metadata } from 'next'
import CoachDetailClient from "./coach-detail-client"
import StructuredData from '@/components/structured-data'

const coaches = {
  "vital-rak": {
    name: "Vital Rak",
    specialty: "Główny trener, karate (sportowa grupa, dorośli), trening funkcjonalny",
    experience: "23 lata doświadczenia",
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
    upcomingSessions: [
      { day: "Wtorek", time: "17:15-18:15", discipline: "Karate (dzieci 10+, początkujący)", location: "Mokotów" },
      { day: "Piątek", time: "20:30-22:00", discipline: "Karate (dorośli)", location: "Mokotów" },
      { day: "Sobota", time: "15:00-17:00", discipline: "Karate (sportowa grupa)", location: "Mokotów" },
    ],
  },
  "volha-yefimenka": {
    name: "Volha Yefimenka",
    specialty: "Karate (dzieci 1. i 2. rok nauki), trening motoryczny VolatMOVE Junior",
    experience: "12+ lat doświadczenia",
    description:
      "Specjalistka w karate dla dzieci oraz treningu motorycznym. Prowadzi zajęcia karate dla dzieci w wieku 7-11 lat (1. i 2. rok nauki) oraz trening motoryczny VolatMOVE Junior. Ma wyjątkowe podejście do najmłodszych zawodników. Certyfikowana instruktorka z wieloletnim doświadczeniem w pracy z dziećmi.",
    image: "/volha-yefimenka.png",
    achievements: [
      "Mistrzyni Białorusi w Karate",
      "Certyfikat Instruktora Dziecięcego",
      "Specjalistka Treningu Motorycznego",
      "Trener Grup Dziecięcych",
      "Instruktor VolatMOVE Junior",
      "Ekspert Rozwoju Koordynacji"
    ],
    upcomingSessions: [
      { day: "Wtorek", time: "16:00-17:15", discipline: "Karate (2. rok)", location: "Mokotów" },
      { day: "Wtorek", time: "17:15-18:15", discipline: "Karate (1. rok)", location: "Mokotów" },
      { day: "Wtorek", time: "18:15-19:15", discipline: "VolatMOVE Junior", location: "Mokotów" },
    ],
  },
  "mikola-taczylin": {
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
      "Trener Zawodników Profesjonalnych",
      "Specjalista Techniki Uderzeń"
    ],
    upcomingSessions: [
      { day: "Wtorek", time: "18:15-19:15", discipline: "Muay Thai / Kickboxing (dzieci 8-13 lat)", location: "Mokotów" },
      { day: "Wtorek", time: "19:15-20:45", discipline: "Muay Thai / Kickboxing (młodzież 14+ i dorośli)", location: "Mokotów" },
      { day: "Wtorek", time: "20:45-22:00", discipline: "Muay Thai / Kickboxing (dorośli)", location: "Mokotów" },
    ],
  },
  "wiktor-muronczyk": {
    name: "Wiktor Murończyk",
    specialty: "Trener szkoły szachowej",
    experience: "2 lata doświadczenia",
    description:
      "Mistrz szachowy prowadzący zajęcia dla wszystkich grup wiekowych. Specjalizuje się w rozwoju strategicznego myślenia i przygotowaniu do turniejów. Młody trener z dużym doświadczeniem turniejowym.",
    image: "/wiktor-muronczyk.png",
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
    image: "/pawel-szymkowicz.png",
    achievements: [
      "Mistrz Polski w MMA",
      "Certyfikat Instruktora MMA",
      "Trener Grup Dziecięcych",
      "Specjalista Technik Mieszanych",
      "Ekspert Walki w Parterze"
    ],
    upcomingSessions: [
      { day: "Poniedziałek", time: "19:30-20:30", discipline: "MMA (dzieci i młodzież 6-14 lat)", location: "Mokotów" },
      { day: "Poniedziałek", time: "20:30-22:00", discipline: "MMA (młodzież 14+ i dorośli)", location: "Mokotów" },
      { day: "Środa", time: "19:30-20:30", discipline: "MMA (dzieci i młodzież 6-14 lat)", location: "Mokotów" },
    ],
  },
  "daria-koba": {
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const coach = coaches[slug as keyof typeof coaches]
  
  if (!coach) {
    return {
      title: "Trener nie znaleziony | VOLAT",
    }
  }

  const title = `${coach.name} - Trener ${coach.specialty} w Warszawie | VOLAT`
  const description = coach.description.substring(0, 160) + "..."
  
  return {
    title,
    description,
    keywords: [
      `${coach.name.toLowerCase()} trener warszawa`,
      `trener ${coach.specialty.toLowerCase()}`,
      `${coach.name.toLowerCase()} karate`,
      "trener sztuk walki warszawa",
      "VOLAT trenerzy",
      "instruktor karate warszawa",
    ],
    openGraph: {
      title,
      description,
      url: `https://volat.pl/coaches/${slug}`,
      siteName: 'VOLAT',
      images: [
        {
          url: coach.image.startsWith('/') ? `https://volat.pl${coach.image}` : coach.image,
          width: 1200,
          height: 630,
          alt: coach.name,
        },
      ],
      locale: 'pl_PL',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [coach.image.startsWith('/') ? `https://volat.pl${coach.image}` : coach.image],
    },
    alternates: {
      canonical: `/coaches/${slug}`,
    },
  }
}

export default async function CoachDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const coach = coaches[slug as keyof typeof coaches] || null

  if (!coach) {
    return <CoachDetailClient coach={coach} slug={slug} />
  }

  const structuredData = {
    name: coach.name,
    jobTitle: coach.specialty,
    description: coach.description,
    worksFor: {
      "@type": "Organization",
      name: "VOLAT",
      url: "https://volat.pl"
    },
    alumniOf: "Akademia Wychowania Fizycznego",
    knowsAbout: [coach.specialty],
    image: coach.image.startsWith('/') ? `https://volat.pl${coach.image}` : coach.image,
  }

  return (
    <>
      <StructuredData type="Person" data={structuredData} />
      <CoachDetailClient coach={coach} slug={slug} />
    </>
  )
}
