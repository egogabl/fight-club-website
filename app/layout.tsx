import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"

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
  title: "VOLAT - Centrum Sportu i Edukacji",
  description:
    "Nowoczesne centrum sportu i edukacji oferujące kompleksowe szkolenia w zakresie sztuk walki oraz programy kulturalne i edukacyjne.",
  generator: 'v0.app',
  icons: {
    icon: '/volat-logo-simple.png',
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon-precomposed.png', rel: 'apple-touch-icon-precomposed' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body>
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
