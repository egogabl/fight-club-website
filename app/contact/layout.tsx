import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kontakt - VOLAT Mokotów i Praga Północ | Adresy i Telefon",
  description: "Skontaktuj się z klubem VOLAT. Adresy: ul. Artura Malawskiego 6 (Mokotów) i ul. Kowieńska 12/20 (Praga Północ), Warszawa. Telefon: +48 733 451 982.",
  keywords: [
    "kontakt volat",
    "adres klubu volat",
    "volat mokotów adres",
    "volat praga północ adres",
    "telefon volat",
    "kontakt sztuki walki warszawa",
    "VOLAT kontakt",
    "ul. artura malawskiego 6",
    "ul. kowieńska 12/20",
  ],
  openGraph: {
    title: "Kontakt - VOLAT Mokotów i Praga Północ",
    description: "Skontaktuj się z klubem VOLAT. Adresy w Mokotowie i Pradze Północ, Warszawa.",
    url: "https://volat.pl/contact",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Kontakt",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kontakt - VOLAT Mokotów i Praga Północ",
    description: "Skontaktuj się z klubem VOLAT w Warszawie",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

