"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FiChevronDown, FiChevronLeft, FiExternalLink } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import Logo from "../../Logo";
import React from "react";

const MobileNavbar = () => {
  const Router = useRouter();
  const [NavOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleOpen = useCallback(() => {
    setTimeout(() => {
      setNavOpen((value) => !value);
    }, 0);
  }, []);

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
    Router.push("https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE");
  }

  function handleDappRedirect() {
    setAccordionPricingOpen(!accordionPricingOpen);
  }

  const [accordionPricingOpen, setAccordionPricingOpen] = useState(false);

  return (
    <div className="pt-4 py-4 w-full  text-neutral-500">
      <div className="flex flex-row justify-around w-full items-center">
        <div onClick={toggleDarkMode} className="z-50 cursor-pointer">
          {darkMode ? (
            <BiSun
              size={27}
              style={{ color: "white" }}
              onClick={toggleDarkMode}
            />
          ) : (
            <BiMoon
              size={27}
              style={{ color: "white" }}
              onClick={toggleDarkMode}
            />
          )}
        </div>
        <div className="z-50">
          <Logo />
        </div>
        <div onClick={toggleOpen} className="z-50 cursor-pointer">
          {NavOpen ? (
            <AiOutlineClose size={25} style={{ color: "white" }} />
          ) : (
            <div>
              <AiOutlineMenu size={25} style={{ color: "white" }} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          NavOpen
            ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full pt-[80px] h-screen text-start ease-in duration-150 bg-black transition overflow-hidden"
            : ""
        }
      >
        {NavOpen && (
          <ul
            /*animate="visible"
                        variants={list}*/
            className="overflow-x-hidden scrollAdd w-10/12 transition ease-in duration-1000 text-xl"
          >
            <li
              onClick={toggleOpen}
              className="cursor-pointer p-4 border-[2px] hover:text-[#FBFAF6] rounded-2xl text-center hover:border-[#FBFAF6] hover:border-[2px] border-stone-800 py-3 ease-in duration-200 transition"
            >
              <Link href="/">Contact</Link>
            </li>

            <div className="border-b-stone-800 border-b-[3px]">
              <br />
            </div>

            <li
              onClick={billingRedirect}
              className="flex flex-row transition ease-in duration-150 p-2 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6"
            >
              <Link
                href="https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE"
                className="flex flex-row justify-end place-items-end items-center whitespace-nowrap"
              >
                Billing Portal
              </Link>
              <div className="flex flex-row items-center justify-end w-full">
                <FiExternalLink />
              </div>
            </li>

            <li
              onClick={handleDappRedirect}
              className="flex flex-row transition ease-in duration-150 p-2 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6"
            >
              <div className="">Pricing</div>
              <div className="flex flex-row items-center justify-end w-full">
                {accordionPricingOpen ? (
                  <FiChevronDown size={21} />
                ) : (
                  <FiChevronLeft size={21} />
                )}
              </div>
            </li>
            <li>
              {accordionPricingOpen && (
                <>
                  <div
                    onClick={toggleOpen}
                    className="p-2 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-stone-800 border-b-[3px]"
                  >
                    <Link href="/pricing/business">|&nbsp;&nbsp;Business</Link>
                  </div>
                  <div
                    onClick={toggleOpen}
                    className="p-2 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-stone-800 border-b-[3px]"
                  >
                    <Link href="/pricing/personal">|&nbsp;&nbsp;Personal</Link>
                  </div>
                </>
              )}
            </li>

            <li
              onClick={toggleOpen}
              className="p-2 transition ease-in duration-150 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6"
            >
              {/*<ThemeProvider theme={theme}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="border-green-50">
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        Collapsible Group Item #3
                                    </AccordionSummary>
                                    <AccordionDetails className="border-green-50">
                                        <div className="border-green">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            
                            </ThemeProvider>*/}
              <Link href="/test" className="w-full">
                Gallery
              </Link>
            </li>

            <li
              onClick={handleDappRedirect}
              className="p-2 transition ease-in duration-150 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6"
            >
              <Link href="/d-app">D-App</Link>
            </li>

            <li
              onClick={toggleOpen}
              className="p-2 transition ease-in duration-150 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6"
            >
              <Link href="/">Business</Link>
            </li>

            <br />

            <li
              onClick={toggleOpen}
              className=" items-center cursor-pointer p-4 border-[2px] hover:text-[#FBFAF6] rounded-2xl text-center hover:border-[#FBFAF6] hover:border-[2px] border-stone-800 py-3 ease-in duration-200 transition"
            >
              <Link href="/" className="items-center">
                Request A demo
              </Link>
            </li>
            <br />
            <li
              onClick={toggleOpen}
              className="p-2 transition ease-in duration-150 border-t-stone-800 border-t-[3px] cursor-pointer hover:bg-gray-0.6"
            >
              <div className="text-[#fffafa] font-semibold text-lg text-center">
                Our Links
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-8 items-center text-center justify-evenly pt-4 pb-4 border-stone-800 border-b-[3px] border-t-[3px]">
                <li className="cursor-pointer">
                  <BsInstagram
                    size={18}
                    className="hover:text-white hover:transition hover:duration-300"
                  />
                </li>
                <li className="cursor-pointer">
                  <BsFacebook
                    size={18}
                    className="hover:text-white hover:transition hover:duration-300"
                  />
                </li>
                <li className="cursor-pointer">
                  <BsLinkedin
                    size={18}
                    className="hover:text-white hover:transition hover:duration-300"
                  />
                </li>
                <li className="cursor-pointer">
                  <BsGithub
                    size={18}
                    className="hover:text-white hover:transition hover:duration-300"
                  />
                </li>
              </div>
            </li>
            <div className="flex flex-col pb-[170px]"></div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;