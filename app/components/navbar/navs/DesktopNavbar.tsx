"use client"

import { useEffect, useState } from "react";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

import Logo from "../../Logo";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const DesktopNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [pricingHovered, setPricingHovered] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (pricingHovered || dropdownHovered) {
      setShowDropdown(true);
    } else {
      timeoutId = setTimeout(() => {
        setShowDropdown(false);
      }, 200);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pricingHovered, dropdownHovered]);

  const handlePricingHover = () => {
    setPricingHovered(true);
  };

  const handlePricingLeave = () => {
    setPricingHovered(false);
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
          <div
            className="relative cursor-pointer hover:text-white ease-in transition"
            onMouseEnter={handlePricingHover}
            onMouseLeave={handlePricingLeave}
            onClick={() => setShowDropdown(true)}
          >
            Pricing
            <FiChevronDown className="inline-block" />
            <AnimatePresence>
              {showDropdown && (
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
          <span className="cursor-pointer animatedUnderline hover:text-white hover:transition hover:duration-200">
            <Link href="#pricing">Gallery</Link>
          </span>
          <span className="cursor-pointer animatedUnderline hover:text-white hover:transition hover:duration-200 scroll-smooth">
            <Link href="#top" className="scroll-smooth">Blog</Link>
          </span>
          <span className="shrink-0 cursor-pointer special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">
            Contact
          </span>
          <span className="shrink-0 cursor-pointer special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">
            Request a demo
          </span>
          <span className="shrink-0 cursor-pointer flex items-center special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">
            Billing portal&nbsp;
            <span className="flex flex-row items-center pb-1">
              <FiExternalLink />
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
