"use client";

import Image from "next/image";
import { useState } from "react";

import HoverAnimation from "./utils/HoverAnimation";
import RevealOnce from "./utils/RevealOnce";
import RevealAlways from "./utils/RevealAlways";

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleHover = (cardIndex: number) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 border-t-[1px] border-dark-50 mb-8">
      <RevealOnce>
        <div
          className="mx-4 mt-8 flex items-center justify-center"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <Image
              src="/images/swiper/card-1.webp"
              width={100}
              height={100}
              layout="responsive"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 1 ? "opacity-50" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 1 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute top-0 w-full justify-center flex py-4">
                    Website Development
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.6}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 p-4 text-white hover:cursor-pointer">
                      <div>Visit Website</div>
                    </div>
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.9}>
                  <div className="absolute top-3/4 flex w-full px-4">
                    This website was yes This website was yes This website was
                    yes
                  </div>
                </HoverAnimation>
              </>
            )}
          </div>
        </div>
      </RevealOnce>
      <RevealOnce>
        <div
          className="mx-4 mt-8 flex items-center justify-center"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <Image
              src="/images/swiper/card-2.webp"
              width={100}
              height={100}
              layout="responsive"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 2 ? "opacity-50" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 2 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute top-0 w-full justify-center flex py-4">
                    Website Development & Management
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.6}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 p-4 text-white hover:cursor-pointer">
                      <div>Visit Website</div>
                    </div>
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.9}>
                  <div className="absolute top-3/4 flex w-full px-4">
                    This website was yes This website was yes This website was
                    yes
                  </div>
                </HoverAnimation>
              </>
            )}
          </div>
        </div>
      </RevealOnce>
      <RevealOnce>
        <div
          className="mx-4 mt-8 flex items-center justify-center"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <Image
              src="/images/swiper/card-3.webp"
              width={100}
              height={100}
              layout="responsive"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 3 ? "opacity-50" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 3 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute top-0 w-full justify-center flex py-4">
                    UI/UX Design
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.6}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 p-4 text-white hover:cursor-pointer">
                      <div>Visit Website</div>
                    </div>
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.9}>
                  <div className="absolute top-3/4 flex w-full px-4">
                    This website was yes This website was yes This website was
                    yes
                  </div>
                </HoverAnimation>
              </>
            )}
          </div>
        </div>
      </RevealOnce>
      <RevealOnce>
        <div
          className="mx-4 mt-8 flex items-center justify-center"
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <Image
              src="/images/swiper/card-2.webp"
              width={100}
              height={100}
              layout="responsive"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 4 ? "opacity-50" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 4 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute top-0 w-full justify-center flex py-4">
                    Website Development
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.6}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 p-4 text-white hover:cursor-pointer">
                      <div>Visit Website</div>
                    </div>
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.9}>
                  <div className="absolute top-3/4 flex w-full px-4">
                    This website was yes This website was yes This website was
                    yes
                  </div>
                </HoverAnimation>
              </>
            )}
          </div>
        </div>
      </RevealOnce>
      <RevealOnce>
        <div
          className="mx-4 mt-8 flex items-center justify-center"
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <Image
              src="/images/swiper/card-1.webp"
              width={100}
              height={100}
              layout="responsive"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 5 ? "opacity-50" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 5 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute top-0 w-full justify-center flex py-4">
                    Website Development
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.6}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 p-4 text-white hover:cursor-pointer">
                      <div>Visit Website</div>
                    </div>
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.9}>
                  <div className="absolute top-3/4 flex w-full px-4">
                    This website was yes This website was yes This website was
                    yes
                  </div>
                </HoverAnimation>
              </>
            )}
          </div>
        </div>
      </RevealOnce>
      <RevealOnce>
        <div
          className="mx-4 mt-8 flex items-center justify-center"
          onMouseEnter={() => handleHover(6)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <Image
              src="/images/swiper/card-3.webp"
              width={100}
              height={100}
              layout="responsive"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 6 ? "opacity-50" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 6 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute top-0 w-full justify-center flex py-4">
                    Website Development
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.6}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 p-4 text-white hover:cursor-pointer">
                      <div>Visit Website</div>
                    </div>
                  </div>
                </HoverAnimation>
                <HoverAnimation speed={0.9}>
                  <div className="absolute top-3/4 flex w-full px-4">
                    This website was yes This website was yes This website was
                    yes
                  </div>
                </HoverAnimation>
              </>
            )}
          </div>
        </div>
      </RevealOnce>

    </div>
  );
};

export default CaseStudies;
