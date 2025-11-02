import Script from 'next/script'

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'SportsActivityLocation' | 'Course' | 'Person' | 'BreadcrumbList' | 'FAQPage'
  data: Record<string, any>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          ...data
        }
      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          ...data
        }
      case 'SportsActivityLocation':
        return {
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          ...data
        }
      case 'Course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          ...data
        }
      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          ...data
        }
      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          ...data
        }
      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          ...data
        }
      default:
        return data
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  )
}

