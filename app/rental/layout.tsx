import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wynajem Sal - Oferta Wynajmu Sal Treningowych | VOLAT",
  description: "Wynajmij profesjonalne sale treningowe w VOLAT Mokotów i Praga Północ. Duża sala, Mała sala. Idealne na treningi, zajęcia sportowe, warsztaty. Warszawa.",
  keywords: [
    "wynajem sal warszawa",
    "wynajem sali treningowej mokotów",
    "wynajem sali praga",
    "sala do wynajęcia warszawa",
    "VOLAT wynajem",
  ],
  openGraph: {
    title: "Wynajem Sal - Oferta Wynajmu Sal Treningowych | VOLAT",
    description: "Wynajmij profesjonalne sale treningowe w VOLAT Mokotów i Praga Północ",
    url: "https://volat.pl/rental",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Wynajem Sal",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wynajem Sal - Oferta Wynajmu Sal Treningowych | VOLAT",
    description: "Wynajmij profesjonalne sale treningowe w VOLAT",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/rental',
  },
}

export default function RentalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

