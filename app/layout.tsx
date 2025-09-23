import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '명품한우 동천점',
  description: '명품한우 동천점',
  metadataBase: new URL('https://myungpumhanwoo.vercel.app'),
  openGraph: {
    title: '명품한우 동천점',
    description: '명품한우 동천점',
    siteName: '명품한우 동천점',
    url: 'https://myungpumhanwoo.vercel.app',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '명품한우 동천점',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '명품한우 동천점',
    description: '명품한우 동천점',
    site: '@myungpumhanwoo',
    creator: '@myungpumhanwoo',
  },
  alternates: {
    canonical: 'https://myungpumhanwoo.vercel.app',
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