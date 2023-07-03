import "./globals.css";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { Analytics } from "@vercel/analytics/react";

import ClientOnly from "@/src/app/components/ClientOnly";
import Navbar from "@/src/app/components/navbar/Navbar";
import Footer from "@/src/app/components/footer/Footer";
import ToasterProvider from "@/src/app/components/providers/ToasterProvider";
import ClientSessionProvider from "@/src/app/components/providers/ClientSessionProvider";

export const metadata = {
  title: "DigiSpark",
  description:
    "Affordable website design, development & deployment for small businesses and personal projects.",
};

const font = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scrolling">
      <body className={font.className}>
          <div className="flex flex-col h-screen justify-between">
            <header>
              <ClientOnly>
                <ToasterProvider />
                <Navbar />
              </ClientOnly>
            </header>
            <span className="text-white">
              <noscript>Please enable javascript!</noscript>
            </span>
            <div className="mb-auto flex-1 flex-grow">{children}</div>
            <Analytics />
            <footer className="static bottom-0">
              <ClientOnly>
                <Footer />
              </ClientOnly>
            </footer>
          </div>
      </body>
    </html>
  );
}
