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
    <html lang="en">
      <body className={font.className}>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          <div className="">        
            {children}
            <Analytics />
          </div>
      </body>
    </html>
  )
}
