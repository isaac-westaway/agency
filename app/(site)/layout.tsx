import "./globals.css";

import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import ClientOnly from "@/app/components/ClientOnly";
import Navbar from "@/app/components/navbar/Navbar";
import Head from "next/head";

import AnimatePresenceProvider from "@/app/components/providers/AnimatePresenceProvider";

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
      <Head>
        <title>Digispark Home</title>
        <meta
          name="google-site-verification"
          content="dZjgHKcLiYVkCgM61GF57iRGjhh9j1wzVlfQmaGmLL0"
        />
      </Head>
      <body className={font.className}>
        <span className="text-white">
          <noscript>Please enable javascript!</noscript>
        </span>
        <header>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
        </header>
        <AnimatePresenceProvider>
          <div className="">
            {children}
            <Analytics />
          </div>
        </AnimatePresenceProvider>
      </body>
    </html>
  );
}
