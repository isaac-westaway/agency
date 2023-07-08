"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { useMobile, useTablet, useDesktop } from "../hooks/mediaQueries";

const DesktopNavbar = lazy(() => import("./navs/DesktopNavbar"));
const MobileNavbar = lazy(() => import("./navs/MobileNavbar"));
const TabletNavbar = lazy(() => import("./navs/TabletNavbar"));

const LoadingNavbar = () => {
  return <div className="text-white pt-8 pb-8 pl-11">Loading Navbar...</div>;
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const isMobile = useMobile();
  const isTablet = useTablet();
  const isDesktop = useDesktop();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setScrolled(scrollTop > 0);
  };



  return (
      <div
        className={`fixed w-full backdrop-blur-md z-50 shadow-2xl scroll-smooth ${
          scrolled
            ? "border-b-[1px] backdrop-blur-md bg-custom-color0.3 bg-opacity-5 border-dark-50 transition duration-500 ease-in-out"
            : "transition duration-500 ease-in-out border-b-[1px] border-transparent"
        }`}
      >
        <header className="backdrop-blur-3xl">
          <Suspense fallback={<LoadingNavbar />}>
              {isMobile && <MobileNavbar />}
              {isTablet && <TabletNavbar />}
              {isDesktop && <DesktopNavbar />}
              </Suspense>
        </header>
      </div>
  );
};

export default Navbar;
