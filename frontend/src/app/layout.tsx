import './globals.css'

import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Travel Insurance - Protect Your Journey',
  description: 'Comprehensive travel insurance coverage for your peace of mind',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={inter.variable}>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
