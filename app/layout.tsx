import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/app/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sosyal',
  description: 'Sosyal medya kanallarınızı tek yerden paylaşın.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
