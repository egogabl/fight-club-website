import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CoachDetailClient from "./coach-detail-client"
import StructuredData from '@/components/structured-data'

const coaches: Record<string, any> = {
  "vital-rak": {
    name: "Vital Rak",
    specialty: "Główny trener klubu. Trener karate i treningu funkcjonalnego",
    experience: "30 lat w sporcie, 23 lata doświadczenia trenerskiego",
    description: "Główny trener klubu VOLAT. Mistrz Republiki Białorusi w karate WKF w 2015 roku. Wielokrotny laureat mistrzostw i pucharów Republiki Białorusi w karate WKF. Brązowy laureat Pucharu Europy w Karate Shotokan wersji NSKF 2012 roku w wadze absolutnej. Mistrz miasta Mińsk w karate WKF 2014 i 2015 roku. Przygotował ponad 25 mistrzów i zwycięzców mistrzostwa Białorusi, 5 mistrzów sportu, medalistę Mistrzostw Świata 2017 roku w karate oraz wielu zwycięzców międzynarodowych i krajowych turniejów w karate, wushu sanda, pankrationie i walce wręcz.",
    education: "Białoruski Pedagogiczny Uniwersytet Państwowy im. Maksyma Tanka (2006), specjalność \"Biologia i waleologia\", dyplom z wyróżnieniem; Białoruski Uniwersytet Kultury Fizycznej i Sportu (2009), specjalizacja trener karate, dyplom z wyróżnieniem",
    achievements: [
      "Mistrz Republiki Białorusi w karate WKF w 2015 roku",
      "Mistrz miasta Mińsk w karate WKF 2014 i 2015 roku",
      "Brązowy laureat Pucharu Europy w Karate Shotokan wersji NSKF 2012 roku w wadze absolutnej",
      "Wielokrotny laureat mistrzostw i pucharów Republiki Białorusi w karate WKF",
      "Przygotował ponad 25 mistrzów i zwycięzców mistrzostwa Białorusi",
      "Przygotował 5 mistrzów sportu",
      "Przygotował medalistę Mistrzostw Świata 2017 roku w karate",
      "Przygotował wielu zwycięzców międzynarodowych i krajowych turniejów w karate, wushu sanda, pankrationie i walce wręcz"
    ],
    image: "/vital-rak.png",
  },
  "volha-yefimenka": {
    name: "Volha Yefimenka",
    specialty: "Trenerka karate, treningu motorycznego dla przedszkolaków oraz dzieci 8–15 lat",
    experience: "Pracuje jako trener od 2007 roku",
    description: "Mistrz sportu karate (kumite, WKF) Republiki Białorusi. Przygotowała jednego mistrza sportu Republiki Białorusi. Przygotowała medalistę młodzieżowych mistrzostw Europy (2021, Finlandia). Przeszła szkolenie w zakresie ogólnego treningu fizycznego dla dzieci 4–6, 6–8, 8–9, 10–12 lat oraz szkolenie korekcyjne dla dzieci i młodzieży z problemami stóp, postawy i ruchomości stawów. Prowadzi treningi w filiach Volat Mokotów oraz Volat Praga.",
    education: "Wyższe wykształcenie (specjalizacja \"trener karate\")",
    achievements: [
      "Mistrz sportu karate (kumite, WKF) Republiki Białorusi",
      "Przygotowała jednego mistrza sportu Republiki Białorusi",
      "Przygotowała medalistę młodzieżowych mistrzostw Europy (2021, Finlandia)",
      "Szkolenie w zakresie ogólnego treningu fizycznego dla dzieci 4–6, 6–8, 8–9, 10–12 lat",
      "Szkolenie korekcyjne dla dzieci i młodzieży z problemami stóp, postawy i ruchomości stawów"
    ],
    image: "/volha-yefimenka.png",
  },
  "daria-koba": {
    name: "Daria Koba",
    specialty: "Trenerka judo, treningu motorycznego dla przedszkolaków",
    experience: "Doświadczenie w pracy z dziećmi w wieku od 3 do 13 lat",
    description: "Instruktorka judo z bogatą historią sportową. Od 5. do 16. roku życia trenowała sambo pod okiem swojego ojca na Ukrainie, równocześnie startując w zawodach judo. Wielokrotna medalistka mistrzostw Ukrainy w sambo, 5. miejsce na Mistrzostwach Europy Kadetów, medalistka ogólnoukraińskich turniejów w judo.",
    education: "AWF w Warszawie, kierunek: wychowanie fizyczne, specjalizacja: judo (studia licencjackie)",
    achievements: [
      "Wielokrotna medalistka mistrzostw Ukrainy w sambo",
      "5. miejsce na Mistrzostwach Europy Kadetów w sambo",
      "Uczestniczka zgrupowań kadry narodowej",
      "Medalistka ogólnoukraińskich turniejów w judo",
      "Posiadaczka brązowego pasa w judo",
      "Doświadczenie w zapasach w stylu wolnym oraz brazylijskim jiu-jitsu"
    ],
    image: "/daria-koba.png",
  },
  "mikola-taczylin": {
    name: "Mikoła Taczylin",
    specialty: "Trener Muay Thai dla dzieci, młodzieży i dorosłych",
    experience: "Ponad 15 lat praktyki trenerskiej",
    description: "Doświadczony trener kickboxingu i Muay Thai (boksu tajskiego). Przez wiele lat prowadził zajęcia w klubie „Patriot” w Barysawie (Białoruś). Specjalizuje się w treningach w formule K1 oraz boksie tajskim (Muay Thai). Wychował wielu zawodników, którzy zdobywali tytuły mistrzów Białorusi, Europy i świata.",
    education: "Doświadczony trener z wieloletnią praktyką",
    achievements: [
      "Wieloletnia praktyka trenerska w klubie „Patriot\" w Barysawie",
      "Wychował wielu mistrzów Białorusi, Europy i świata",
      "Specjalizacja w formule K1 oraz boksie tajskim (Muay Thai)",
      "Wychował Dzmitry Filonchyk - wielokrotnego mistrza Białorusi, członka kadry narodowej",
      "Wychował Aliaksiej Wawreniuk - wielokrotnego mistrza Białorusi, zwycięzcę międzynarodowych zawodów"
    ],
    image: "/mikola-taczylin.png",
  },
  "pawel-szymkowicz": {
    name: "Paweł Szymkowicz",
    specialty: "Trener MMA dla dzieci od 6 lat, młodzieży i dorosłych",
    experience: "Wieloletnie doświadczenie sportowe i kilkuletnia praktyka trenerska",
    description: "Absolwent Białoruskiego Państwowego Uniwersytetu Kultury Fizycznej, specjalizacja – działalność trenerska w zakresie sambo. Trener samoobrony i treningu funkcjonalnego. Na treningach łączy wiedzę akademicką z praktyką sportową, oferując skuteczne i bezpieczne metody pracy.",
    education: "Białoruski Państwowy Uniwersytet Kultury Fizycznej, specjalizacja – działalność trenerska w zakresie sambo",
    achievements: [
      "Absolwent Białoruskiego Państwowego Uniwersytetu Kultury Fizycznej",
      "Trener samoobrony i treningu funkcjonalnego",
      "Specjalizacja w zakresie sambo",
      "Indywidualne podejście do każdego zawodnika",
      "Rozwój sprawności i budowanie pewności siebie"
    ],
    image: "/pawel-szymkowicz.png",
  },
  "wiktor-muronczyk": {
    name: "Wiktor Murończyk",
    specialty: "Trener szkoły szachowej",
    experience: "2 lata doświadczenia w nauczaniu",
    description: "Młody trener szachowy z dużym doświadczeniem turniejowym. Wielokrotny zwycięzca w turniejach rapidu, blitza oraz szachów klasycznych. Uczeń Mistrza Międzynarodowego i wielokrotnego mistrza Polski. Swobodnie mówi w języku polskim oraz rosyjskim.",
    education: "Uczeń Mistrza Międzynarodowego i wielokrotnego mistrza Polski",
    achievements: [
      "Duże doświadczenie turniejowe w turniejach klasy międzynarodowej",
      "Wielokrotny zwycięzca w turniejach rapidu",
      "Wielokrotny zwycięzca w turniejach blitza",
      "Wielokrotny zwycięzca w turniejach szachów klasycznych",
      "Uczeń Mistrza Międzynarodowego i wielokrotnego mistrza Polski"
    ],
    image: "/wiktor-muronczyk.png",
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

  const title = `${coach.name} - ${coach.specialty} w Warszawie | VOLAT`
  
  // Создаем SEO-оптимизированное описание для превью
  const createPreviewDescription = (coach: any) => {
    const parts = []
    
    // Начинаем с имени и роли
    if (coach.specialty.includes("Główny trener")) {
      parts.push(`${coach.name} - główny trener klubu VOLAT w Warszawie.`)
    } else {
      parts.push(`${coach.name} - ${coach.specialty.toLowerCase()} w klubie VOLAT Warszawa.`)
    }
    
    // Добавляем опыт (кратко)
    if (coach.experience) {
      const expShort = coach.experience.replace(/Pracuje jako trener od/, "Doświadczenie od").replace(/lat w sporcie.*/, "lat")
      if (expShort.length < 50) {
        parts.push(expShort + ".")
      }
    }
    
    // Добавляем одно ключевое достижение (самое важное и короткое)
    if (coach.achievements && coach.achievements.length > 0) {
      // Ищем самое короткое и информативное достижение
      const shortAchievement = coach.achievements
        .filter((a: string) => a.length < 80 && !a.includes("Przygotował"))
        .sort((a: string, b: string) => a.length - b.length)[0]
      
      if (shortAchievement) {
        parts.push(shortAchievement + ".")
      }
    }
    
    const fullDescription = parts.join(" ")
    
    // Ограничиваем до 155-160 символов для оптимального превью в соцсетях
    if (fullDescription.length > 160) {
      // Пытаемся обрезать по предложениям
      const sentences = fullDescription.split(".")
      let result = ""
      for (const sentence of sentences) {
        if ((result + sentence + ".").length <= 157) {
          result += sentence + "."
        } else {
          break
        }
      }
      return result || fullDescription.substring(0, 157) + "..."
    }
    
    return fullDescription
  }
  
  const description = createPreviewDescription(coach)
  
  return {
    title,
    description,
    keywords: [
      `${coach.name.toLowerCase()} trener warszawa`,
      `${coach.name.toLowerCase()} ${coach.specialty.toLowerCase()}`,
      `trener ${coach.specialty.toLowerCase()} warszawa`,
      "trener sztuk walki warszawa",
      "trener karate warszawa",
      "trener muay thai warszawa",
      "trener mma warszawa",
      "trener judo warszawa",
      "trener szachów warszawa",
      "VOLAT trenerzy",
      "instruktor sztuk walki warszawa",
      "klub sportowy warszawa mokotów",
      "klub sportowy warszawa praga",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://volat.pl/coaches/${slug}`,
      siteName: 'VOLAT',
      images: [
        {
          url: coach.image?.startsWith('/') ? `https://volat.pl${coach.image}` : coach.image || '',
          width: 1200,
          height: 630,
          alt: `${coach.name} - ${coach.specialty}`,
        },
      ],
      locale: 'pl_PL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [coach.image?.startsWith('/') ? `https://volat.pl${coach.image}` : coach.image || ''],
    },
    alternates: {
      canonical: `https://volat.pl/coaches/${slug}`,
    },
  }
}

export default async function CoachDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const coach = coaches[slug as keyof typeof coaches]

  if (!coach) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: coach.name,
    jobTitle: coach.specialty,
    description: coach.description,
    worksFor: {
      "@type": "Organization",
      name: "VOLAT",
      url: "https://volat.pl"
    },
    alumniOf: coach.education,
    knowsAbout: coach.specialty,
    image: coach.image?.startsWith('/') ? `https://volat.pl${coach.image}` : coach.image,
    award: coach.achievements.map((achievement: string) => ({
      "@type": "Thing",
      name: achievement
    })),
  }

  return (
    <>
      <StructuredData type="Person" data={structuredData} />
      <CoachDetailClient coach={coach} slug={slug} />
    </>
  )
}
