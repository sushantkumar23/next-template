import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/components/providers'

import {
  title,
  description,
  BASE_URL,
  baseOpenGraphMetadata,
  baseTwitterMetadata
} from '@/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title,
  description,
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL(BASE_URL),
  keywords: ['example app', 'content layer'],
  openGraph: baseOpenGraphMetadata,
  twitter: baseTwitterMetadata
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
