import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '미나리산장 본점',
  description: '미나리산장 본점',
  metadataBase: new URL('https://minarisanjang.vercel.app'),
  openGraph: {
    title: '미나리산장 본점',
    description: '미나리산장 본점',
    siteName: '미나리산장 본점',
    url: 'https://minarisanjang.vercel.app',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '미나리산장 본점',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '미나리산장 본점',
    description: '미나리산장 본점',
    site: '@minarisanjang',
    creator: '@minarisanjang',
  },
  alternates: {
    canonical: 'https://minarisanjang.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}