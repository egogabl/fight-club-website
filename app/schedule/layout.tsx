import { Metadata } from 'next'
import StructuredData from '@/components/structured-data'

export const metadata: Metadata = {
  title: "Grafik Zajęć - Rozkład Treningów w Warszawie Mokotów i Praga | VOLAT",
  description: "Sprawdź grafik zajęć karate, judo, muay thai i MMA w klubie VOLAT. Mokotów ul. Artura Malawskiego 6 i Praga Północ ul. Kowieńska 12/20. Zajęcia dla dzieci, młodzieży i dorosłych. Aktualny harmonogram treningów.",
  keywords: [
    "grafik zajęć warszawa",
    "rozklad treningów mokotów",
    "harmonogram zajęć karate",
    "grafik sztuk walki warszawa",
    "VOLAT grafik",
    "rozklad zajęć praga",
    "harmonogram treningów warszawa",
    "grafik zajęć mokotów",
    "rozklad zajęć praga północ",
    "harmonogram karate warszawa",
    "grafik mma warszawa",
    "rozklad muay thai warszawa"
  ],
  openGraph: {
    title: "Grafik Zajęć - Rozkład Treningów w Warszawie | VOLAT",
    description: "Harmonogram zajęć karate, judo, muay thai i MMA w Warszawie. Mokotów i Praga Północ.",
    url: "https://volat.pl/schedule",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Grafik Zajęć",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grafik Zajęć - Rozkład Treningów w Warszawie | VOLAT",
    description: "Harmonogram zajęć sztuk walki w Warszawie. Mokotów i Praga Północ.",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/schedule',
  },
}

const scheduleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Schedule",
  name: "Grafik Zajęć VOLAT",
  description: "Harmonogram zajęć karate, judo, muay thai i MMA w klubie VOLAT w Warszawie",
  location: [
    {
      "@type": "Place",
      name: "VOLAT Mokotów",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Artura Malawskiego 6",
        addressLocality: "Warszawa",
        addressRegion: "Mazowieckie",
        postalCode: "02-341",
        addressCountry: "PL"
      }
    },
    {
      "@type": "Place",
      name: "VOLAT Praga Północ",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Kowieńska 12/20",
        addressLocality: "Warszawa",
        addressRegion: "Mazowieckie",
        postalCode: "03-470",
        addressCountry: "PL"
      }
    }
  ]
}

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StructuredData type="Schedule" data={scheduleStructuredData} />
      {children}
    </>
  )
}

