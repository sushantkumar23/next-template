import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/components/providers'

import {
  title,
  description,
  keywords,
  APP_NAME,
  BASE_URL,
  COMPANY_NAME,
  COMPANY_URL,
  baseOpenGraphMetadata,
  baseTwitterMetadata
} from '@/config'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export const metadata: Metadata = {
  title,
  description,
  keywords,
  applicationName: APP_NAME,
  robots: 'index, follow',
  authors: { name: COMPANY_NAME, url: COMPANY_URL },
  metadataBase: new URL(BASE_URL),
  openGraph: baseOpenGraphMetadata,
  twitter: baseTwitterMetadata,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
