import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "O nas - Historia Klubu VOLAT | Centrum Sportu i Edukacji Warszawa",
  description: "Poznaj historię klubu VOLAT - założonego w 2012 roku w Mińsku, wznowionego w 2023 roku w Warszawie. Nasze osiągnięcia, wartości i misja. Ponad 500 aktywnych uczestników.",
  keywords: [
    "o nas volat",
    "historia klubu volat",
    "centrum sportu i edukacji warszawa",
    "klub sportowy warszawa historia",
    "volat mokotów",
    "volat praga",
    "osiągnięcia volat",
    "VOLAT",
  ],
  openGraph: {
    title: "O nas - Historia Klubu VOLAT | Centrum Sportu i Edukacji",
    description: "Poznaj historię klubu VOLAT - założonego w 2012 roku, wznowionego w 2023 roku w Warszawie. Nasze osiągnięcia i wartości.",
    url: "https://volat.pl/about",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT O nas",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "O nas - Historia Klubu VOLAT",
    description: "Poznaj historię klubu VOLAT i nasze osiągnięcia",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

