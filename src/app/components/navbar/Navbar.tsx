"use client";

import { useState, useEffect } from "react";

import DesktopNavbar from "./navs/DesktopNavbar";
import MobileNavbar from "./navs/MobileNavbar";
import TabletNavbar from "./navs/TabletNavbar";
import Container from "../Container";

import {
  useDesktop,
  useTablet,
  useMobile,
} from "@/src/app/components/utils/mediaQueries";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const Desktop = useDesktop();
  const Tablet = useTablet();
  const Mobile = useMobile();

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
      className={`fixed w-full backdrop-blur-lg z-50 shadow-2xl scroll-smooth ${
        scrolled
          ? "border-b-[1px] bg-custom-color border-dark-50 transition duration-500 ease-in-out"
          : "transition duration-500 ease-in-out border-b-[1px] border-transparent"
      }`}
    >
      <header className="backdrop-blur-3xl">
        <Container>
          {Tablet && (
            <div>
              <TabletNavbar />
            </div>
          )}
          {Mobile && (
            <div>
              <MobileNavbar />
            </div>
          )}
          {Desktop && (
            <div>
              <DesktopNavbar />
            </div>
          )}
        </Container>
      </header>
    </div>
  );
};

export default Navbar;
