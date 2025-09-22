import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '미나리산장 본점',
  description: '창원 최고의 프리미엄 한우 전문점',
  openGraph: {
    title: '미나리산장 본점',
    description: '창원 최고의 프리미엄 한우 전문점',
    siteName: '미나리산장 본점',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '미나리산장 본점',
    description: '창원 최고의 프리미엄 한우 전문점',
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