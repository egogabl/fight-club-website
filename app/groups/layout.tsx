import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Grupy Treningowe - Grupy dla Dzieci i Dorosłych | VOLAT",
  description: "Dołącz do naszych grup treningowych dostosowanych do różnych poziomów zaawansowania. Grupy dla dzieci, młodzieży i dorosłych. Karate, judo, muay thai, MMA w Warszawie.",
  keywords: [
    "grupy treningowe volat",
    "grupy karate dla dzieci",
    "grupy judo warszawa",
    "grupy mma warszawa",
    "grupy treningowe mokotów",
    "zajęcia grupowe sztuk walki",
    "VOLAT grupy",
  ],
  openGraph: {
    title: "Grupy Treningowe - Grupy dla Dzieci i Dorosłych | VOLAT",
    description: "Dołącz do naszych grup treningowych w Warszawie",
    url: "https://volat.pl/groups",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Grupy",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grupy Treningowe - Grupy dla Dzieci i Dorosłych | VOLAT",
    description: "Dołącz do naszych grup treningowych w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/groups',
  },
}

export default function GroupsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

