"use client"

import { useEffect, useState } from "react";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import Logo from "@/src/app/components/Logo";

const DesktopNavbar = () => {
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (activeDropdown !== null) {
      setActiveDropdown(activeDropdown);
    } else {
      timeoutId = setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeDropdown]);

  const handleDropdownHover = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const isDropdownActive = (dropdownName: string): boolean => {
    return activeDropdown === dropdownName;
  };

  return (
    <header className="w-full z-1000 pt-4 py-4 text-lg text-neutral-500 backdrop-blur-lg scroll-smooth">
      <div className="flex items-center pl-11 pr-11 justify-between w-full backdrop-blur-lg">
        <div className="shrink-0">
          <Logo />
        </div>
        <div className="flex flex-row gap-11 items-center">
          <span className="cursor-pointer hover:text-white hover:transition hover:duration-200">
            <Link href="/gallery" className="animatedUnderline h-10 items-center flex justify-center">
              Gallery
            </Link>
          </span>
          <div
            className={`cursor-pointer hover:text-white hover:transition hover:duration-200 relative ${
              isDropdownActive("services") ? "active-dropdown" : ""
            }`}
            onMouseEnter={() => handleDropdownHover("services")}
            onMouseLeave={handleDropdownLeave}
          >
            <span className="cursor-pointer hover:text-white hover:transition hover:duration-200 flex">
              <span className="animatedUnderline h-10 items-center flex justify-center">
                Services
              </span>
              <span className="items-center justify-center flex mt-1">
                <FiChevronDown />
              </span>
            </span>
            <AnimatePresence>
              {isDropdownActive("services") && (
                <motion.div
                  className="absolute w-96 text-white rounded-2xl mt-4 transform translate-x-[-50%] border bg-custom-color"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseEnter={() => handleDropdownHover("services")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mt-[10px]">
                    <Link href="/services/ui-ux" className="block w-full h-full">
                      <div className="h-full">
                        UI&nbsp;/&nbsp;UX Design
                        <br />
                        <span className="text-gray-400 w-fit text-sm">
                          Creating Engaging User Experiences through Intuitive UI/UX Design
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px]">
                    <Link href="/services/web-production" className="block w-full h-full">
                      <div className="h-full">
                        Website Production
                        <br />
                        <span className="text-gray-400 w-fit text-sm">
                          Transforming Ideas into Functional and Interactive Websites through Web Development
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mb-[10px]">
                    <Link href="/services/web-management" className="block w-full h-full">
                      <div className="h-full">
                        Website Management
                        <br />
                        <span className="text-gray-400 w-fit text-sm">
                          Keeping your Website Nice and Healthy
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className={`cursor-pointer hover:text-white hover:transition hover:duration-200 relative ${
              isDropdownActive("pricing") ? "active-dropdown" : ""
            }`}
            onMouseEnter={() => handleDropdownHover("pricing")}
            onMouseLeave={handleDropdownLeave}
          >
            <span className="cursor-pointer hover:text-white hover:transition hover:duration-200 flex">
              <span className="animatedUnderline h-10 items-center flex justify-center">
                Pricing
              </span>
              <span className="items-center justify-center flex mt-1">
                <FiChevronDown />
              </span>
            </span>
            <AnimatePresence>
              {isDropdownActive("pricing") && (
                <motion.div
                  className="absolute w-96 text-white rounded-2xl mt-4 transform translate-x-[-50%] border bg-custom-color"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseEnter={() => handleDropdownHover("pricing")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mt-[10px]">
                    <Link href="/pricing/ui-ux" className="block w-full h-full">
                      <div className="h-full">
                        UI&nbsp;/&nbsp;UX Design Pricing
                        <br />
                        <span className="text-gray-400 w-fit text-sm">
                          Starting at $120 AUD <br /> Comes free with Website Production
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px]">
                    <Link href="/pricing/web-production" className="block w-full h-full">
                      <div className="h-full">
                        Website Production Pricing
                        <br />
                        <span className="text-gray-400 w-fit text-sm">
                          Starting at $200 AUD.
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mb-[10px]">
                    <Link href="/pricing/web-management" className="block w-full h-full">
                      <div className="h-full">
                        Website Management Pricing
                        <br />
                        <span className="text-gray-400 w-fit text-sm">
                          Starting at 35$ AUD per month
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className={`cursor-pointer hover:text-white hover:transition hover:duration-200 relative ${
              isDropdownActive("about") ? "active-dropdown" : ""
            }`}
            onMouseEnter={() => handleDropdownHover("about")}
            onMouseLeave={handleDropdownLeave}
          >
            <span className="cursor-pointer hover:text-white hover:transition hover:duration-200 flex">
              <span className="animatedUnderline h-10 items-center flex justify-center">
                About
              </span>
              <span className="items-center justify-center flex mt-1">
                <FiChevronDown />
              </span>
            </span>
            <AnimatePresence>
              {isDropdownActive("about") && (
                <motion.div
                  className="absolute w-96 text-white rounded-2xl mt-4 transform translate-x-[-50%] border bg-custom-color"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseEnter={() => handleDropdownHover("about")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mt-[10px]">
                    <Link href="/about/team">
                      Our Team
                      <br />
                      <span className="text-gray-400 w-fit text-sm">
                        Learn more about our talented team
                      </span>
                    </Link>
                  </div>
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mb-[10px]">
                    <Link href="/about/agency">
                      Our Agency
                      <br />
                      <span className="text-gray-400 w-fit text-sm">
                        Discover more about our agency
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="cursor-pointer hover:text-white hover:transition hover:duration-200">
            <Link href="/blog" className="animatedUnderline h-10 items-center flex justify-center">
              Blog
            </Link>
          </span>
          <a href="#contact" className="shrink-0 cursor-pointer special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">
            Contact
          </a>
          <a href="https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE" target="_blank" rel="noopener noreferrer" className="shrink-0 cursor-pointer flex items-center special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">
            Billing portal&nbsp;
            <span className="flex flex-row items-center h-full pb-1">
              <FiExternalLink />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
