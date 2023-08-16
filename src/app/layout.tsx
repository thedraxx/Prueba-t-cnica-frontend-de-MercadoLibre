import Navbar from '@/components/UI/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SearchProvider } from '@/components/context/SearchProvider'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Test Tecnico MELI',
  description: 'Test Tecnico Frontend usando NEXT.JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SearchProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </SearchProvider>
    </html>
  )
}
