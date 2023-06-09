import "./globals.css";

import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";

import ClientOnly from "@/src/app/components/ClientOnly";
import Footer from "@/src/app/components/footer/Footer";
import Script from "next/script";

const NavbarComponent = dynamic(
  () => import("@/src/app/components/navbar/Navbar")
);
const ToastComponent = dynamic(
  () => import("@/src/app/components/providers/ToasterProvider")
);

export const metadata = {
  title: "WynDigital",
  description:
    "Affordable website design, development & deployment for small businesses and personal projects in the Wynnum-Manly area.",
  keywords:
    "Website Development, Website Design, Website Management, Business website hosting.",
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={font.className}>
        {/**<Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-706LWCT1C8"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-706LWCT1C8');`}
  </Script>**/}
        <ClientOnly>
          <ToastComponent />
          <NavbarComponent />
        </ClientOnly>
        <div className="flex flex-col h-screen justify-between">
          <span className="text-white">
            <noscript>Please enable javascript!</noscript>
          </span>
          <div className="mb-auto flex-1 flex-grow">{children}</div>
          <Analytics />
          <ClientOnly>
            <Footer />
          </ClientOnly>
        </div>
      </body>
    </html>
  );
}
