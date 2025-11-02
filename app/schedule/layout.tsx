import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Grafik Zajęć - Rozkład Treningów w Warszawie | VOLAT",
  description: "Sprawdź grafik zajęć karate, judo, muay thai i MMA w klubie VOLAT. Mokotów i Praga Północ. Zajęcia dla dzieci, młodzieży i dorosłych.",
  keywords: [
    "grafik zajęć warszawa",
    "rozklad treningów mokotów",
    "harmonogram zajęć karate",
    "grafik sztuk walki warszawa",
    "VOLAT grafik",
    "rozklad zajęć praga",
  ],
  openGraph: {
    title: "Grafik Zajęć - Rozkład Treningów | VOLAT",
    description: "Harmonogram zajęć karate, judo, muay thai i MMA w Warszawie",
    url: "https://volat.pl/schedule",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Grafik",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grafik Zajęć - Rozkład Treningów | VOLAT",
    description: "Harmonogram zajęć sztuk walki w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/schedule',
  },
}

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

