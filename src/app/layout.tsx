import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'

// Dynamic import Header and Footer with ssr:false to prevent hydration mismatch
// These components use localStorage, window, and Date() which differ between server and client
const Header = dynamic(() => import('@/components/layout/Header').then(mod => ({ default: mod.Header })), {
  ssr: false,
  loading: () => <div className="h-28 lg:h-32" /> // Matches the spacer height
})

const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: false,
  loading: () => <div className="h-96 bg-slate-900" /> // Placeholder footer height
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mega Mall - Pakistan\'s Premier Fashion Marketplace',
  description: 'Discover the latest fashion trends from top brands across Pakistan. Shop Mega Mall for clothing, shoes, and accessories.',
  keywords: 'fashion, clothing, shoes, accessories, Pakistan, online shopping, marketplace',
  authors: [{ name: 'Mega Mall Team' }],
  creator: 'Mega Mall',
  publisher: 'Mega Mall',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: '/',
    title: 'Mega Mall - Pakistan\'s Premier Fashion Marketplace',
    description: 'Discover the latest fashion trends from top brands across Pakistan.',
    siteName: 'Mega Mall',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mega Mall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mega Mall - Pakistan\'s Premier Fashion Marketplace',
    description: 'Discover the latest fashion trends from top brands across Pakistan.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
