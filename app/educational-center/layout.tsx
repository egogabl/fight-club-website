import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Centrum Edukacyjne - Szkoła Szachowa, Matematyka, Języki | VOLAT",
  description: "Centrum Edukacyjne VOLAT oferuje zajęcia z szachów, matematyki, języka angielskiego i polskiego. Warszawa Mokotów i Praga Północ. Zajęcia dla dzieci i dorosłych.",
  keywords: [
    "centrum edukacyjne volat",
    "szkoła szachowa warszawa",
    "matematyka warszawa",
    "język angielski warszawa",
    "język polski warszawa",
    "zajęcia szachowe mokotów",
    "szachy dla dzieci warszawa",
    "VOLAT edukacja",
  ],
  openGraph: {
    title: "Centrum Edukacyjne - Szkoła Szachowa, Matematyka, Języki | VOLAT",
    description: "Centrum Edukacyjne VOLAT - zajęcia szachów, matematyki i języków w Warszawie",
    url: "https://volat.pl/educational-center",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Centrum Edukacyjne",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centrum Edukacyjne - Szkoła Szachowa, Matematyka, Języki | VOLAT",
    description: "Centrum Edukacyjne VOLAT w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/educational-center',
  },
}

export default function EducationalCenterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

