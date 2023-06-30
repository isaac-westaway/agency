/* eslint-disable react/jsx-no-comment-textnodes */
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
    window.open("https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE", "_blank");
  }

  function AccordionServicesToggle() {
    setAccordionServicesOpen(!accordionServicesOpen);
  }

  function AccordionAboutToggle() {
    setAccordionAboutOpen(!accordionAboutOpen);
  }

  const [accordionServicesOpen, setAccordionServicesOpen] = useState(false);
  const [accordionAboutOpen, setAccordionAboutOpen] = useState(false);

  return (
    <div className="pt-4 py-4 w-full  text-gray-400">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="z-50 ml-11">
          <Logo />
        </div>
        <div onClick={toggleOpen} className="z-50 cursor-pointer mr-11">
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
            ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full pt-[80px] h-screen text-start ease-in duration-150 bg-black bg-opacity-95 transition overflow-hidden"
            : ""
        }
      >
        {NavOpen && (
          <ul className="overflow-x-hidden scrollAdd w-10/12 transition ease-in duration-1000 text-xl">
            <li
              onClick={toggleOpen}
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
                    onClick={toggleOpen}
                    className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                  >
                    <Link href="/services/ui-ux" className="block w-full">
                    &nbsp;&nbsp;&nbsp;UI/UX Design
                    </Link>
                  </div>
                  <div
                    onClick={toggleOpen}
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
                    onClick={toggleOpen}
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
                    onClick={toggleOpen}
                    className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                  >
                    <Link href="/about-us/our-agency" className="block w-full">
                      &nbsp;&nbsp;&nbsp;Our Agency
                    </Link>
                  </div>
                  <div
                    onClick={toggleOpen}
                    className="p-3 transition ease-in duration-150  cursor-pointer hover:bg-gray-0.6 border-b-dark-50 border-b-[1px]"
                  >
                    <Link href="/about-us/our-team" className="block w-full">
                    &nbsp;&nbsp;&nbsp; Our Team
                    </Link>
                  </div>
                </>
              )}
            </li>
            <li
              onClick={toggleOpen}
              className="p-3 transition ease-in duration-150 border-b-dark-50 border-b-[1px] cursor-pointer hover:bg-gray-0.6"
            >
              <Link href="/gallery" className="block w-full">
                Gallery
              </Link>
            </li>
            <li
              onClick={toggleOpen}
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
            <div className="flex flex-col pb-[170px]"></div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
