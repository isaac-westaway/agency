"use client"

import { useEffect, useState } from 'react';

import Logo from "../../Logo";
import Link from 'next/link';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const TabletNavbar = () => {
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
        <div className="flex flex-row pt-4 py-4  text-neutral-500">
            <div className="h-full w-full">
                <ul className="flex flex-row justify-evenly items-center">
                    <div className="h-full items-center flex shrink-0">
                        <Logo />
                    </div>
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
                  className="absolute w-96 backdrop-blur-sm bg-custom-color text-white rounded-2xl mt-4 transform translate-x-[-50%] border"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseEnter={handleDropdownHover}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mt-[10px]">
                    Business
                    <br />
                    <span className="text-gray-400 w-fit text-sm">
                      Business solutions for your business needs
                    </span>
                  </div>
                  <div className="block hover:bg-dark-custom rounded-lg p-3 mx-[10px] mb-[10px]">
                    Personal
                    <br />
                    <span className="text-gray-400 w-fit text-sm">
                      Business solutions for your business needs
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
                    <li className="inline-block">
                        <Link className="text-lg animatedUnderline cursor-pointer hover:text-white hover:transition hover:duration-200 flex" href={'/about-us'}>Gallery</Link>
                    </li>
                    <li className="inline-block">
                        <Link className="text-lg animatedUnderline cursor-pointer hover:text-white hover:transition hover:duration-200 flex" href={'/test'}>Blog</Link>
                    </li>
                    <li className="inline-block">
                        <Link className="special-border-name text-lg border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6] z-50 flex" href={'/'}>
                            Contact
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link className="special-border-name text-lg border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6] flex" href={'/test'}>Billing Portal&nbsp;<span className="flex flex-row items-center pb-1"><FiExternalLink /></span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default TabletNavbar;

{/*
<li className="inline-block">
<a className="border-[3px] border-orange-500 text-2xl rounded-full pr-3 pl-2 text-orange-500 hover:text-white transition hover:bg-orange-500 cursor-pointer">Request a demo</a>
</li>*/}