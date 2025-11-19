import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'),
  title: {
    default: 'Nexera Technology and Consultancy | Data Services, Web Development & Automation Near Me | Mississauga, GTA, Ontario',
    template: '%s | Nexera Tech & Co'
  },
  description: 'Nexera Technology and Consultancy (Nexera Tech & Co) - Leading data services, web development services, and business automation near you. Excel automation, Power BI dashboards, Shopify stores, and workflow automation in Mississauga, Brampton, Toronto, GTA, and across Ontario, Canada. Call now for free consultation!',
  keywords: [
    'Nexera', 'Nexera Technology', 'Nexera Tech', 'Nexera Tech and Co', 'Nexera Tech n Co',
    'data services near me', 'web development services near me', 'business automation near me',
    'data analytics near me Mississauga', 'web developer near me GTA', 'IT services Mississauga',
    'small business technology Mississauga', 'Excel automation GTA', 'Excel consultant near me',
    'Power BI consultant Ontario', 'Power BI services near me', 'data visualization Mississauga',
    'Shopify developer Mississauga', 'Shopify expert near me', 'ecommerce developer GTA',
    'business automation Canada', 'workflow automation Ontario', 'process automation near me',
    'web development GTA', 'website developer Mississauga', 'web design services near me',
    'data analytics small business', 'business intelligence Mississauga', 'dashboard development',
    'technology consultant near me', 'IT consultant Mississauga', 'digital transformation GTA',
    'Mississauga tech company', 'Brampton IT services', 'Toronto data services',
    'Ontario web development', 'Canada business automation', 'GTA technology services'
  ],
  authors: [{ name: 'Nexera Technology and Consultancy' }],
  creator: 'Nexera Technology and Consultancy',
  publisher: 'Nexera Tech & Co',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com',
    siteName: 'Nexera Technology and Consultancy | Nexera Tech & Co',
    title: 'Nexera Technology | Data Services, Web Development & Automation Near Me | Mississauga',
    description: 'Nexera Tech & Co - Expert data services, web development services, and business automation near you. Serving Mississauga, Brampton, Toronto, GTA, and Ontario.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Nexera Technology and Consultancy - Data Services & Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexera Technology | Data Services & Web Development Near Me',
    description: 'Nexera Tech & Co - Expert data services, web development, and automation in Mississauga, GTA, Ontario.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'}/og-image.jpg`],
    creator: '@nexeratech',
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
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'}/#organization`,
              name: 'Nexera Technology and Consultancy',
              alternateName: ['Nexera Tech & Co', 'Nexera Tech', 'Nexera Technology'],
              legalName: 'Nexera Technology and Consultancy',
              description: 'Leading provider of data services, web development services, and business automation solutions near Mississauga, GTA. Expert Excel automation, Power BI dashboards, Shopify stores, and workflow automation for small businesses.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com',
              telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+1-647-XXX-XXXX',
              email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@nexeratech.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'}/logo.png`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'}/og-image.jpg`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mississauga',
                addressRegion: 'ON',
                postalCode: 'L5B',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.5890,
                longitude: -79.6441,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Mississauga',
                },
                {
                  '@type': 'City',
                  name: 'Brampton',
                },
                {
                  '@type': 'City',
                  name: 'Toronto',
                },
                {
                  '@type': 'City',
                  name: 'Oakville',
                },
                {
                  '@type': 'City',
                  name: 'Burlington',
                },
                {
                  '@type': 'State',
                  name: 'Ontario',
                },
                {
                  '@type': 'Country',
                  name: 'Canada',
                },
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 43.5890,
                  longitude: -79.6441,
                },
                geoRadius: '100000',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Technology Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Data Services',
                      description: 'Power BI dashboards, data analytics, business intelligence, and data visualization services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Web Development Services',
                      description: 'Custom website development, Shopify stores, eCommerce solutions, and web design',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Business Automation',
                      description: 'Excel automation, workflow automation, process automation, and VBA programming',
                    },
                  },
                ],
              },
              sameAs: [
                // Add social media links here when available
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                bestRating: '5',
                worstRating: '1',
                reviewCount: '27',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
