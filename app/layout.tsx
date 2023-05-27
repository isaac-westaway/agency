import './globals.css'

import { Nunito } from "next/font/google"
import { Analytics } from '@vercel/analytics/react';

import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'

export const metadata = {
  title: 'Test Project',
  description: 'Testing Purpooses',
}

const font = Nunito({
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
          <div className="">
            <ClientOnly>
              <Navbar />
            </ClientOnly>              
            {children}
            <Analytics />
          </div>
      </body>
    </html>
  )
}
