import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cennik - Ceny Zajęć i Systemy Opłat | VOLAT",
  description: "Sprawdź ceny zajęć karate, judo, muay thai i MMA w klubie VOLAT. Systemy opłat dla dzieci i dorosłych. Zniżki rodzinne i wakacyjne.",
  keywords: [
    "cennik sztuk walki warszawa",
    "ceny zajęć karate",
    "cena treningu judo",
    "cennik mma warszawa",
    "VOLAT ceny",
    "systemy opłat klub sportowy",
  ],
  openGraph: {
    title: "Cennik - Ceny Zajęć i Systemy Opłat | VOLAT",
    description: "Ceny zajęć karate, judo, muay thai i MMA w Warszawie",
    url: "https://volat.pl/pricing",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Cennik",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cennik - Ceny Zajęć i Systemy Opłat | VOLAT",
    description: "Ceny zajęć sztuk walki w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

