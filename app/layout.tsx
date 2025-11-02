import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import Analytics from "@/components/analytics"
import StructuredData from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
})

export const metadata: Metadata = {
  title: "VOLAT - Centrum Sportu i Edukacji | Sztuki Walki Warszawa",
  description:
    "Nowoczesne centrum sportu i edukacji w Warszawie oferujące kompleksowe szkolenia w zakresie karate, judo, muay thai, MMA oraz programy kulturalne i edukacyjne. Zajęcia dla dzieci, młodzieży i dorosłych.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  keywords: [
    "karate warszawa",
    "sztuki walki warszawa",
    "treningi karate mokotów",
    "klub sportowy warszawa",
    "judo warszawa",
    "muay thai warszawa",
    "mma warszawa",
    "trening funkcjonalny warszawa",
    "zajęcia dla dzieci warszawa",
    "VOLAT",
    "centrum sportu warszawa"
  ],
  authors: [{ name: "VOLAT" }],
  creator: "VOLAT",
  publisher: "VOLAT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://volat.pl'),
  alternates: {
    canonical: '/',
    languages: {
      'pl': '/',
      'uk': '/',
      'en': '/',
      'by': '/',
    },
  },
  openGraph: {
    title: "VOLAT - Centrum Sportu i Edukacji",
    description: "Nowoczesne centrum sportu i edukacji w Warszawie oferujące kompleksowe szkolenia w zakresie sztuk walki",
    url: 'https://volat.pl',
    siteName: 'VOLAT',
    images: [
      {
        url: '/volat-logo-simple.png',
        width: 1200,
        height: 630,
        alt: 'VOLAT - Centrum Sportu i Edukacji',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VOLAT - Centrum Sportu i Edukacji",
    description: "Nowoczesne centrum sportu i edukacji w Warszawie",
    images: ['/volat-logo-simple.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/volat-logo-simple.png',
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon-precomposed.png', rel: 'apple-touch-icon-precomposed' },
    ],
  },
}

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VOLAT - Centrum Sportu i Edukacji",
  url: "https://volat.pl",
  logo: "https://volat.pl/volat-logo-simple.png",
  description: "Nowoczesne centrum sportu i edukacji w Warszawie oferujące kompleksowe szkolenia w zakresie karate, judo, muay thai, MMA oraz programy kulturalne i edukacyjne.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "ul. Artura Malawskiego 6",
      addressLocality: "Warszawa",
      addressRegion: "Mazowieckie",
      postalCode: "02-341",
      addressCountry: "PL",
      addressRegion: "Mokotów"
    },
    {
      "@type": "PostalAddress",
      streetAddress: "ul. Kowieńska 12/20",
      addressLocality: "Warszawa",
      addressRegion: "Mazowieckie",
      postalCode: "03-470",
      addressCountry: "PL",
      addressRegion: "Praga Północ"
    }
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48-733-451-982",
    contactType: "customer service",
    email: "vasilvolkau@gmail.com",
    areaServed: "PL",
    availableLanguage: ["Polish", "Russian", "English", "Belarusian"]
  },
  sameAs: [
    // Добавьте ссылки на соц. сети, когда они будут созданы
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <StructuredData type="Organization" data={organizationStructuredData} />
        <Analytics />
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
