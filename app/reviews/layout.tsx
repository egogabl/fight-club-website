import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Opinie - Recenzje i Opinie Klientów VOLAT | Warszawa",
  description: "Przeczytaj opinie i recenzje naszych uczniów o klubie VOLAT. Zobacz, co mówią o naszych zajęciach karate, judo, muay thai i MMA w Warszawie.",
  keywords: [
    "opinie volat",
    "recenzje volat",
    "opinie o klubie volat",
    "recenzje sztuk walki warszawa",
    "opinie o treningach karate",
    "VOLAT opinie",
    "reviews volat",
  ],
  openGraph: {
    title: "Opinie - Recenzje i Opinie Klientów VOLAT",
    description: "Przeczytaj opinie i recenzje naszych uczniów o klubie VOLAT",
    url: "https://volat.pl/reviews",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Opinie",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Opinie - Recenzje i Opinie Klientów VOLAT",
    description: "Przeczytaj opinie o klubie VOLAT",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/reviews',
  },
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

