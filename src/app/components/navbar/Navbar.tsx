"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";

const DesktopNavbar = lazy(() => import("./navs/DesktopNavbar"));
const MobileNavbar = lazy(() => import("./navs/MobileNavbar"));
const TabletNavbar = lazy(() => import("./navs/TabletNavbar"));

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 849.9 });
  const isTablet = useMediaQuery({ minWidth: 850, maxWidth: 1299.9 });
  const isDesktop = useMediaQuery({ minWidth: 1300 });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full backdrop-blur-md z-50 shadow-2xl scroll-smooth ${
        scrolled
          ? "border-b-[1px] backdrop-blur-md bg-custom-color0.3 bg-opacity-5 border-dark-50 transition duration-500 ease-in-out"
          : "transition duration-500 ease-in-out border-b-[1px] border-transparent"
      }`}
    >
      <header className="backdrop-blur-3xl">
        <Container>
          <Suspense
            fallback={
              <div className="text-white z-50 w-full pt-8 pb-8 pl-11">
                Loading Navbar...
              </div>
            }
          >
            {isMobile && <MobileNavbar />}
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white z-50 w-full pt-8 pb-8 pl-11">
                Loading Navbar...
              </div>
            }
          >
            {isTablet && <TabletNavbar />}
          </Suspense>

          <Suspense
            fallback={
              <div className="text-white z-50 w-full pt-8 pb-8 pl-11">
                Loading Navbar...
              </div>
            }
          >
            {isDesktop && <DesktopNavbar />}
          </Suspense>
        </Container>
      </header>
    </div>
  );
};

export default Navbar;
