import './globals.css'

import { Inter } from "next/font/google"

import { Analytics } from '@vercel/analytics/react';

import ClientOnly from '@/app/components/ClientOnly'
import Navbar from '@/app/components/navbar/Navbar'

export const metadata = {
  title: 'Test Project',
  description: 'Testing Purpooses',
}

const font = Inter({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="smooth-scrolling">
      <body className={font.className }>
          <header>
            <ClientOnly>
              <Navbar />
            </ClientOnly>
          </header>
          <div className="">        
            {children}
            <Analytics />
          </div>
      </body>
    </html>
  )
}
