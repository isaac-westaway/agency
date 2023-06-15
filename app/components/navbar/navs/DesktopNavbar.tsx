import { useEffect, useState } from "react";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

import Logo from "../../Logo";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="w-full bg-black z-1000 pt-4 py-4 text-xl text-neutral-500">
      <div className="flex items-center pl-11 pr-11 justify-between w-full">
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
          <span className="cursor-pointer animatedUnderline hover:text-white hover:transition hover:duration-200">
            Gallery
          </span>
          <span className="cursor-pointer animatedUnderline hover:text-white hover:transition hover:duration-200">
            Blog
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
    </div>
  );
};

export default DesktopNavbar;
