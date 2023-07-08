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
              priority={true}
              loading="eager"
              layout="responsive"
              className={`object-contain transition-opacity duration-300 rounded-2xl ${
                hoveredCard === 1 ? "opacity-30" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 1 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute flex flex-col h-full top-0 items-start justify-center px-5">
                    <HoverAnimation speed={0.5}>
                      <span className="self-start text-lg font-semibold">
                        Modern Green
                      </span>
                    </HoverAnimation>
                    <HoverAnimation speed={0.6}>
                      <p className="text-sm">
                        We used a refreshing color palette inspired by nature,
                        coupled with intuitive navigation and visually pleasing
                        layouts.
                      </p>
                    </HoverAnimation>
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
              priority={true}
              loading="eager"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 2 ? "opacity-30" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 2 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute flex flex-col h-full top-0 items-start justify-center px-5">
                    <HoverAnimation speed={0.5}>
                      <span className="self-start text-lg font-semibold">
                        Celestial Night
                      </span>
                    </HoverAnimation>
                    <HoverAnimation speed={0.6}>
                      <p className="text-sm">
                        Every element is thoughtfully designed to enhance your
                        browsing experience while using a dark theme.
                      </p>
                    </HoverAnimation>
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
              priority={true}
              loading="eager"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 3 ? "opacity-30" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 3 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute flex flex-col h-full top-0 items-start justify-center px-5">
                    <HoverAnimation speed={0.5}>
                      <span className="self-start text-lg font-semibold">
                        Elegance
                      </span>
                    </HoverAnimation>
                    <HoverAnimation speed={0.6}>
                      <p className="text-sm">
                        Embracing a clean and minimalist design, our website
                        exudes elegance and clarity.
                      </p>
                    </HoverAnimation>
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
              src="/images/swiper/card-4.webp"
              width={100}
              height={100}
              layout="responsive"
              priority={true}
              loading="eager"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 4 ? "opacity-30" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 4 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute flex flex-col h-full top-0 items-start justify-center px-5">
                    <HoverAnimation speed={0.5}>
                      <span className="self-start text-lg font-semibold">
                        Playful Modern
                      </span>
                    </HoverAnimation>
                    <HoverAnimation speed={0.6}>
                      <p className="text-sm">
                        We used a colorful and dynamic experience. The website
                        is a visual delight, bursting with an array of lively
                        hues and energetic designs. .
                      </p>
                    </HoverAnimation>
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
              src="/images/swiper/card-5.webp"
              width={100}
              height={100}
              layout="responsive"
              priority={true}
              loading="eager"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 5 ? "opacity-30" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 5 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute flex flex-col h-full top-0 items-start justify-center px-5">
                    <HoverAnimation speed={0.5}>
                      <span className="self-start text-lg font-semibold">
                        Simple
                      </span>
                    </HoverAnimation>
                    <HoverAnimation speed={0.6}>
                      <p className="text-sm">
                        Using modern colors, we created this simple but modern
                        feel.
                      </p>
                    </HoverAnimation>
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
              src="/images/swiper/card-6.webp"
              width={100}
              height={100}
              layout="responsive"
              priority={true}
              loading="eager"
              className={`object-contain transition-opacity duration-200 rounded-2xl ${
                hoveredCard === 6 ? "opacity-30" : "opacity-100"
              }`}
              alt=""
            />
            {hoveredCard === 6 && (
              <>
                <HoverAnimation speed={0.3}>
                  <div className="absolute flex flex-col h-full top-0 items-start justify-center px-5">
                    <HoverAnimation speed={0.5}>
                      <span className="self-start text-lg font-semibold">
                        Eco Green
                      </span>
                    </HoverAnimation>
                    <HoverAnimation speed={0.6}>
                      <p className="text-sm">
                        Our modern green website, where sustainability meets
                        style. With a sleek and clean design, we&#39;ve created an
                        inviting digital space that reflects our commitment to
                        the environment.
                      </p>
                    </HoverAnimation>
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
