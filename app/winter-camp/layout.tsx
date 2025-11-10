import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Volat Winter Power Camp 2026 - Sportowy Obóz Zimowy | VOLAT",
  description: "Zapraszamy na wyjątkowy zimowy obóz sportowy Volat Winter Power Camp 2026! Intensywne treningi karate, zajęcia sportowe, edukacyjne i integracyjne. Warszawa.",
  keywords: [
    "volat winter power camp 2026",
    "obóz zimowy karate",
    "zimowy obóz sportowy warszawa",
    "obóz karate dla dzieci",
    "winter camp warszawa",
    "VOLAT obóz",
  ],
  openGraph: {
    title: "Volat Winter Power Camp 2026 - Sportowy Obóz Zimowy | VOLAT",
    description: "Zapraszamy na wyjątkowy zimowy obóz sportowy Volat Winter Power Camp 2026!",
    url: "https://volat.pl/winter-camp",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Winter Camp",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Volat Winter Power Camp 2026 - Sportowy Obóz Zimowy | VOLAT",
    description: "Zapraszamy na wyjątkowy zimowy obóz sportowy!",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/winter-camp',
  },
}

export default function WinterCampLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

