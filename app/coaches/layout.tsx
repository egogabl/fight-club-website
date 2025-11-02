import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Trenerzy - Profesjonalni Instruktorzy Sztuk Walki w Warszawie | VOLAT",
  description: "Poznaj naszych doświadczonych trenerów karate, judo, muay thai i MMA w Warszawie. Vital Rak, Volha Yefimenka, Mikoła Taczylin i inni eksperci.",
  keywords: [
    "trenerzy sztuk walki warszawa",
    "trener karate warszawa",
    "instruktor judo warszawa",
    "trener muay thai warszawa",
    "trener mma warszawa",
    "VOLAT trenerzy",
    "profesjonalni trenerzy warszawa",
  ],
  openGraph: {
    title: "Trenerzy - Profesjonalni Instruktorzy Sztuk Walki | VOLAT",
    description: "Doświadczeni trenerzy karate, judo, muay thai i MMA w Warszawie",
    url: "https://volat.pl/coaches",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Trenerzy",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trenerzy - Profesjonalni Instruktorzy Sztuk Walki | VOLAT",
    description: "Doświadczeni trenerzy sztuk walki w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/coaches',
  },
}

export default function CoachesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

