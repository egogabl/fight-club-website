// SEO Optimization Helper - Common improvements for all SEO pages
export const seoImageMap: Record<string, string> = {
  'karate-warszawa': '/karate-trening-dzieci-volat.jpg',
  'muay-thai-warszawa': '/muaythai-trening-dzieci-volat.jpg',
  'judo-warszawa': '/judo-martial-arts-icon.jpg',
  'mma-warszawa': '/mma-trening-volat.jpg',
  'trening-funkcjonalny-warszawa': '/functional-trening-1-volat.jpg',
  'volatmove-kids-warszawa': '/volatmove-kids-trening-volat.jpg',
  'volatmove-junior-warszawa': '/volatmove-junior-trening-volat.jpg',
  'samoobrona-warszawa': '/karate-trening-aktywny-volat.jpg',
  'zajecia-dla-dzieci-warszawa': '/karate-trening-dzieci-volat.jpg',
  'zajecia-dla-doroslych-warszawa': '/mma-trening-volat.jpg',
  'obozy-sportowe-warszawa': '/karate-mistrzostwa-volat-nagrody.jpg',
  'treningi-indywidualne-warszawa': '/functional-trening-1-volat.jpg',
  'centrum-edukacyjne-warszawa': '/chess-trening-volat.jpg',
}

export const getBreadcrumbData = (pageName: string, pageUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: "https://volat.pl"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: `https://volat.pl${pageUrl}`
    }
  ]
})

export const getEnhancedCourseData = (data: any) => ({
  ...data,
  image: data.image || `https://volat.pl${seoImageMap[data.slug] || '/volat-logo-simple.png'}`,
  provider: {
    ...data.provider,
    logo: "https://volat.pl/volat-logo-simple.png",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "ul. Artura Malawskiego 6",
        addressLocality: "Warszawa",
        addressRegion: "Mazowieckie",
        postalCode: "02-341",
        addressCountry: "PL",
        areaServed: "Mokotów"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "ul. Kowieńska 12/20",
        addressLocality: "Warszawa",
        addressRegion: "Mazowieckie",
        postalCode: "03-470",
        addressCountry: "PL",
        areaServed: "Praga Północ"
      }
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-733-451-982",
      contactType: "customer service",
      email: "vasilvolkau@gmail.com",
      areaServed: "PL",
      availableLanguage: ["Polish", "Russian", "English", "Belarusian"]
    }
  },
  aggregateRating: {
    ...data.aggregateRating,
    bestRating: "5",
    worstRating: "1"
  }
})

