import "@/src/app/(site)/globals.css";

import ClientOnly from "@/src/app/components/ClientOnly";
import Navbar from "@/src/app/components/navbar/Navbar";
import Footer from "@/src/app/components/footer/Footer";

import ToasterProvider from "@/src/app/components/providers/ToasterProvider";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ClientOnly>
        <ToasterProvider />
        <Navbar />
      </ClientOnly>
      <main>{children}</main>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </>
  );
}
