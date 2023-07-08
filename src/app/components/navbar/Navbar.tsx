"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";

import { FiChevronDown, FiChevronLeft, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Logo from "../Logo";

const DesktopNavbar = lazy(() => import("./navs/DesktopNavbar"));
const TabletNavbar = lazy(() => import("./navs/TabletNavbar"));

const LoadingNavbar = () => {
  return <div className="text-white pt-8 pb-8 pl-11">Loading...</div>;
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 849.9 });
  const isTablet = useMediaQuery({ minWidth: 850, maxWidth: 1299.9 });
  const isDesktop = useMediaQuery({ minWidth: 1300 });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [NavOpen, setNavOpen] = useState(false);
  const [accordionServicesOpen, setAccordionServicesOpen] = useState(false);
  const [accordionAboutOpen, setAccordionAboutOpen] = useState(false);

  useEffect(() => {
    if (NavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [NavOpen]);

  function billingRedirect() {
    window.open(
      "https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE",
      "_blank"
    );
  }

  function AccordionServicesToggle() {
    setAccordionServicesOpen(!accordionServicesOpen);
  }

  function AccordionAboutToggle() {
    setAccordionAboutOpen(!accordionAboutOpen);
  }

  return (
    <Suspense fallback={<LoadingNavbar />}>
      <div
        className={`fixed w-full backdrop-blur-md z-50 shadow-2xl scroll-smooth ${
          scrolled
            ? "border-b-[1px] backdrop-blur-md bg-custom-color0.3 bg-opacity-5 border-dark-50 transition duration-500 ease-in-out"
            : "transition duration-500 ease-in-out border-b-[1px] border-transparent"
        }`}
      >
        <header className="backdrop-blur-3xl">
          <Container>
            {isMobile && (
              <Suspense fallback={<LoadingNavbar />}>
                <div className="pt-4 py-4 w-full  text-gray-400">
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="z-50 ml-11 flex items-center">
                      <Logo />
                    </div>
                    <div
                      onClick={() => setNavOpen((prev) => !prev)}
                      className={`z-50 cursor-pointer mr-11 transition-all flex-col ${
                        NavOpen ? "transform rotate-45" : ""
                      }`}
                    >
                      <div
                        className={`bg-gray-400 h-1 w-6 mb-1 transition-all ${
                          NavOpen
                            ? "transform -rotate-90 translate-y-2 opacity-100"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`bg-gray-400 h-1 w-6 mb-1 transition-all ${
                          NavOpen ? "opacity-0" : ""
                        }`}
                      ></div>
                      <div
                        className={`bg-gray-400 h-1 w-6 mb-1 transition-all ${
                          NavOpen
                            ? "transform rotate-60 -translate-y-2 opacity-100"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={
                      NavOpen
                        ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full pt-[100px] h-screen text-start ease-in-out duration-150 bg-black bg-opacity-95 transition overflow-hidden"
                        : ""
                    }
                  >
                    {NavOpen && (
                      <ul className="overflow-x-hidden scrollAdd w-10/12 transition ease-in duration-1000 text-xl text-gray-400">
                        <li
                          onClick={() => setNavOpen((prev) => !prev)}
                          className="cursor-pointer p-4 border-[2px] hover:text-[#FBFAF6] rounded-2xl text-center hover:border-[#FBFAF6] hover:border-[2px] border-dark-50 py-3 ease-in duration-200 transition"
                        >
                          <a href="#contact" className="block w-full h-full">
                            Contact
                          </a>
                        </li>
                        <div className="border-dark-50 border-b-[1px]">
                          <br />
                        </div>
                        <li
                          onClick={billingRedirect}
                          className="flex flex-row transition ease-in duration-150 p-3 border-b-dark-50 border-b-[1px] cursor-pointer hover:bg-gray-0.6"
                        >
                          <a
                            href="https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row justify-end place-items-end items-center whitespace-nowrap"
                          >
                            Billing Portal
                          </a>
                          <div className="flex flex-row items-center justify-end w-full">
                            <FiExternalLink />
                          </div>
                        </li>
                        <li
                          onClick={AccordionServicesToggle}
                          className="flex flex-row transition ease-in duration-150 p-3 border-b-dark-50  border-b-[1px] cursor-pointer hover:bg-gray-0.6"
                        >
                          <div className="">Services</div>
                          <div className="flex flex-row items-center justify-end w-full">
                            {accordionServicesOpen ? (
                              <FiChevronDown size={21} />
                            ) : (
                              <FiChevronLeft size={21} />
                            )}
                          </div>
                        </li>
                        <li>
                          {accordionServicesOpen && (
                            <>
                              <div
                                onClick={() => setNavOpen((prev) => !prev)}
                                className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                              >
                                <Link
                                  href="/services/ui-ux"
                                  className="block w-full"
                                >
                                  &nbsp;&nbsp;&nbsp;UI/UX Design
                                </Link>
                              </div>
                              <div
                                onClick={() => setNavOpen((prev) => !prev)}
                                className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                              >
                                <Link
                                  href="/services/web-development"
                                  className="block w-full"
                                >
                                  &nbsp;&nbsp;&nbsp;Website Development
                                </Link>
                              </div>
                              <div
                                onClick={() => setNavOpen((prev) => !prev)}
                                className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                              >
                                <Link
                                  href="/services/web-management"
                                  className="block w-full"
                                >
                                  &nbsp;&nbsp;&nbsp;Website Management
                                </Link>
                              </div>
                            </>
                          )}
                        </li>
                        <li
                          onClick={AccordionAboutToggle}
                          className="flex flex-row transition ease-in duration-150 p-3 border-b-dark-50 border-b-[1px] cursor-pointer hover:bg-gray-0.6"
                        >
                          <div className="flex-grow">About Us</div>
                          <div className="flex items-center justify-end">
                            {accordionAboutOpen ? (
                              <FiChevronDown size={21} />
                            ) : (
                              <FiChevronLeft size={21} />
                            )}
                          </div>
                        </li>
                        <li>
                          {accordionAboutOpen && (
                            <>
                              <div
                                onClick={() => setNavOpen((prev) => !prev)}
                                className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                              >
                                <Link
                                  href="/about-us/our-agency"
                                  className="block w-full"
                                >
                                  &nbsp;&nbsp;&nbsp;Our Agency
                                </Link>
                              </div>
                              <div
                                onClick={() => setNavOpen((prev) => !prev)}
                                className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                              >
                                <Link
                                  href="/about-us/our-team"
                                  className="block w-full"
                                >
                                  &nbsp;&nbsp;&nbsp; Our Team
                                </Link>
                              </div>
                            </>
                          )}
                        </li>
                        <li
                          onClick={() => setNavOpen((prev) => !prev)}
                          className="p-3 transition ease-in duration-150 border-b-dark-50 border-b-[1px] cursor-pointer hover:bg-gray-0.6"
                        >
                          <Link href="/gallery" className="block w-full">
                            Gallery
                          </Link>
                        </li>
                        <li
                          onClick={() => setNavOpen((prev) => !prev)}
                          className="p-3 transition ease-in duration-150 border-dark-50 border-b-[1px] cursor-pointer hover:bg-gray-0.6"
                        >
                          <Link href="/blog" className="block w-full">
                            Blog
                          </Link>
                        </li>
                        {/**<li
              onClick={toggleOpen}
              className="p-2 transition ease-in duration-150 border-b-dark-50 border-b-[1px] cursor-pointer hover:bg-gray-0.6"
            >
              <Link href="/experimental">/*&nbsp;Experimental&nbsp ^/;</Link>
            </li>*/}
                        <div
                          className="flex flex-col pb-[20px]"
                          onClick={() => {}}
                        ></div>
                      </ul>
                    )}
                  </div>
                </div>
              </Suspense>
            )}
            {isTablet && (
              <Suspense fallback={<LoadingNavbar />}>
                <TabletNavbar />
              </Suspense>
            )}
            {isDesktop && (
              <Suspense fallback={<LoadingNavbar />}>
                <DesktopNavbar />
              </Suspense>
            )}
          </Container>
        </header>
      </div>
    </Suspense>
  );
};

export default Navbar;
