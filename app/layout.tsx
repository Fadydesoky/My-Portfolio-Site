import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://fadydesokysaeedabdelaziz.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Fady Desoky Saeed Abdelaziz | Data Analytics & Engineering',
    template: '%s | Fady Desoky',
  },
  description: 'Portfolio and research publications of Fady Desoky Saeed Abdelaziz, a data analytics and reporting intern at Nestlé focused on data engineering, enterprise systems, and sustainable computing.',
  keywords: [
    'Fady Desoky Saeed Abdelaziz',
    'data analytics',
    'data engineering',
    'Power BI',
    'data reporting',
    'enterprise systems',
    'green software',
    'sustainable computing',
    'software engineering portfolio',
  ],
  authors: [{ name: 'Fady Desoky Saeed Abdelaziz', url: 'https://www.linkedin.com/in/fadydesokysaeedabdelaziz/' }],
  creator: 'Fady Desoky Saeed Abdelaziz',
  publisher: 'Fady Desoky Saeed Abdelaziz',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Fady Desoky Portfolio',
    title: 'Fady Desoky Saeed Abdelaziz | Data Analytics & Engineering',
    description: 'Data analytics, data engineering, research, and sustainable computing portfolio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fady Desoky Saeed Abdelaziz | Data Analytics & Engineering',
    description: 'Data analytics, data engineering, research, and sustainable computing portfolio.',
    images: ['/profile-pic.jpg'],
  },
  category: 'technology',
  generator: 'v0.app',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Fady Desoky Saeed Abdelaziz',
              jobTitle: 'Data Analytics & Reporting Intern',
              description: 'Data analytics and data engineering professional focused on reporting, enterprise systems, and sustainable computing.',
              url: siteUrl,
              email: 'mailto:fadydesoky45@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
              sameAs: [
                'https://www.linkedin.com/in/fadydesokysaeedabdelaziz/',
                'https://github.com/fadydesoky',
              ],
              knowsAbout: ['Data Analytics', 'Data Engineering', 'Power BI', 'Enterprise Systems', 'Green Software', 'Sustainable Computing'],
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
