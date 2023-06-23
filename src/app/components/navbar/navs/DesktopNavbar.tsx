"use client";

import { useEffect, useState } from "react";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";

import Logo from "@/src/app/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const DesktopNavbar = () => {
  const [showPricingDropdown, setShowPricingDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;

    if (showPricingDropdown || showAboutDropdown || dropdownHovered) {
      setShowPricingDropdown(showPricingDropdown);
      setShowAboutDropdown(showAboutDropdown);
    } else {
      timeoutId = setTimeout(() => {
        setShowPricingDropdown(false);
        setShowAboutDropdown(false);
      }, 200);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showPricingDropdown, showAboutDropdown, dropdownHovered]);

  const handlePricingHover = () => {
    setShowPricingDropdown(true);
  };

  const handlePricingLeave = () => {
    setShowPricingDropdown(false);
  };

  const handleAboutHover = () => {
    setShowAboutDropdown(true);
  };

  const handleAboutLeave = () => {
    setShowAboutDropdown(false);
  };

  const handleDropdownHover = () => {
    setDropdownHovered(true);
  };

  const handleDropdownLeave = () => {
    setDropdownHovered(false);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="w-full z-1000 pt-4 py-4 text-lg text-neutral-500 backdrop-blur-lg scroll-smooth">
      <div className="flex items-center pl-11 pr-11 justify-between w-full backdrop-blur-lg">
        <div className="shrink-0">
          <Logo />
        </div>
        <div className="flex flex-row gap-11 items-center">
        <span className="cursor-pointer hover:text-white hover:transition hover:duration-200">
            <Link
              href="/gallery"
              className="animatedUnderline h-10 items-center flex justify-center"
            >
              Gallery
            </Link>
          </span>
          <span className="cursor-pointer hover:text-white hover:transition hover:duration-200">
            <Link
              href="/blog"
              className="animatedUnderline h-10 items-center flex justify-center"
            >
              Blog
            </Link>
          </span>
          <div
            className="cursor-pointer hover:text-white hover:transition hover:duration-200 relative"
            onMouseEnter={handlePricingHover}
            onMouseLeave={handlePricingLeave}
            onClick={() => {
              setShowPricingDropdown(true);
              setShowAboutDropdown(false);
            }}
          >
            <span className="cursor-pointer hover:text-white hover:transition hover:duration-200 flex">
              <Link
                href="/pricing"
                className="animatedUnderline h-10 items-center flex justify-center"
              >
                Pricing
              </Link>
              <span className="items-center justify-center flex mt-1">
                <FiChevronDown />
              </span>
            </span>
            <AnimatePresence>
              {showPricingDropdown && (
                <motion.div
                  className="absolute w-96 text-white rounded-2xl mt-4 transform translate-x-[-50%] border bg-custom-color"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseEnter={handleDropdownHover}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mt-[10px]">
                    <Link href="/pricing/business">
                      Business
                      <br />
                      <span className="text-gray-400 w-fit text-sm">
                        Business solutions for your business needs
                      </span>
                    </Link>
                  </div>
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mb-[10px]">
                    <Link href="/pricing/personal">
                      Personal
                      <br />
                      <span className="text-gray-400 w-fit text-sm">
                        Business solutions for your business needs
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className="cursor-pointer hover:text-white hover:transition hover:duration-200 relative"
            onMouseEnter={handleAboutHover}
            onMouseLeave={handleAboutLeave}
            onClick={() => {
              setShowPricingDropdown(false);
              setShowAboutDropdown(true);
            }}
          >
            <span className="cursor-pointer hover:text-white hover:transition hover:duration-200 flex">
              <span
                className="animatedUnderline h-10 items-center flex justify-center"
              >
                About
              </span>
              <span className="items-center justify-center flex mt-1">
                <FiChevronDown />
              </span>
            </span>
            <AnimatePresence>
              {showAboutDropdown && (
                <motion.div
                  className="absolute w-96 text-white rounded-2xl mt-4 transform translate-x-[-50%] border bg-custom-color"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseEnter={handleDropdownHover}
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
          
          <span className="shrink-0 cursor-pointer special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">
            Contact
          </span>
          <div className="shrink-0 cursor-pointer flex items-center special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">
            Billing portal&nbsp;
            <span className="flex flex-row items-center h-full pb-1">
              <FiExternalLink />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;