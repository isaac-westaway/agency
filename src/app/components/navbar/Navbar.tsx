"use client";

import { useState, useEffect } from "react";

import DesktopNavbar from "./navs/DesktopNavbar";
import MobileNavbar from "./navs/MobileNavbar";
import Container from "../Container";

import {
  useDesktop,
  useMobile,
  useTablet,
} from "@/src/app/components/utils/mediaQueries";
import TabletNavbar from "./navs/TabletNavbar";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const Mobile = useMobile();
  const Tablet = useTablet();
  const Desktop = useDesktop();

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
          ? "border-b-[1px] backdrop-blur-sm bg-custom-color0.3 bg-opacity-5 border-dark-50 transition duration-500 ease-in-out"
          : "transition duration-500 ease-in-out border-b-[1px] border-transparent"
      }`}
    >
      <header className="backdrop-blur-3xl">
        <Container>
          {Mobile && (
            <div>
              <MobileNavbar />
            </div>
          )}
          {Tablet && (
            <div>
              <TabletNavbar />
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
