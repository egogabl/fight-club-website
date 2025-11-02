import { Metadata } from 'next'
import DisciplinesPageClient from './disciplines-page-client'
import StructuredData from '@/components/structured-data'

export const metadata: Metadata = {
  title: "Dyscypliny - Karate, Judo, Muay Thai, MMA w Warszawie | VOLAT",
  description: "Oferujemy profesjonalne zajęcia karate WKF, judo, muay thai, MMA, trening funkcjonalny i VolatMove dla dzieci i dorosłych w Warszawie. Mokotów i Praga Północ.",
  keywords: [
    "dyscypliny sztuk walki warszawa",
    "karate judo muay thai mma",
    "zajęcia sztuk walki mokotów",
    "trening funkcjonalny warszawa",
    "volatmove kids",
    "klub sportowy warszawa",
    "VOLAT",
  ],
  openGraph: {
    title: "Dyscypliny - Karate, Judo, Muay Thai, MMA | VOLAT",
    description: "Profesjonalne zajęcia sztuk walki w Warszawie dla dzieci i dorosłych",
    url: "https://volat.pl/disciplines",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Dyscypliny",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dyscypliny - Karate, Judo, Muay Thai, MMA | VOLAT",
    description: "Profesjonalne zajęcia sztuk walki w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/disciplines',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "VOLAT - Centrum Sportu i Edukacji",
  description: "Profesjonalne zajęcia sztuk walki w Warszawie",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warszawa",
    addressRegion: "Mazowieckie",
    addressCountry: "PL",
  },
  offers: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Karate WKF",
        description: "Zajęcia karate WKF dla dzieci, młodzieży i dorosłych",
      },
      price: "220",
      priceCurrency: "PLN",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Muay Thai / Kickboxing",
        description: "Zajęcia muay thai i kickboxingu dla młodzieży i dorosłych",
      },
      price: "280",
      priceCurrency: "PLN",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Judo",
        description: "Zajęcia judo dla dzieci i dorosłych",
      },
      price: "220",
      priceCurrency: "PLN",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "MMA",
        description: "Zajęcia MMA dla młodzieży i dorosłych",
      },
      price: "280",
      priceCurrency: "PLN",
    },
  ],
}

export default function DisciplinesPage() {
  return (
    <>
      <StructuredData type="SportsActivityLocation" data={structuredData} />
      <DisciplinesPageClient />
    </>
  )
}
