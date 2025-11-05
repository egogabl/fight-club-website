import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aktualności - Newsy i Wydarzenia w Klubie VOLAT | Warszawa",
  description: "Najnowsze aktualności z klubu VOLAT. Wydarzenia, turnieje, obozy i inne informacje o życiu klubu. Mokotów i Praga Północ.",
  keywords: [
    "aktualności volat",
    "newsy volat",
    "wydarzenia volat",
    "turnieje karate warszawa",
    "obozy sportowe volat",
    "newsy sztuk walki",
    "VOLAT aktualności",
  ],
  openGraph: {
    title: "Aktualności - Newsy i Wydarzenia w Klubie VOLAT",
    description: "Najnowsze aktualności z klubu VOLAT - wydarzenia, turnieje i obozy",
    url: "https://volat.pl/news",
    siteName: 'VOLAT',
    images: [
      {
        url: "https://volat.pl/volat-logo-simple.png",
        width: 1200,
        height: 630,
        alt: "VOLAT Aktualności",
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aktualności - Newsy i Wydarzenia w Klubie VOLAT",
    description: "Najnowsze aktualności z klubu VOLAT",
    images: ["https://volat.pl/volat-logo-simple.png"],
  },
  alternates: {
    canonical: '/news',
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

